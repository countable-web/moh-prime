FROM image-registry.openshift-image-registry.svc:5000/9c33a9-tools/dotnet-core-sdk:3.1 AS build
WORKDIR /opt/app-root/app

USER 0
RUN mkdir -p /opt/app-root; \
    mkdir -p /opt/app-root/app

ENV PATH="$PATH:/opt/rh/rh-dotnet31/root/usr/bin/:/opt/app-root/.dotnet/tools:/root/.dotnet/tools"
ENV ASPNETCORE_ENVIRONMENT "${ASPNETCORE_ENVIRONMENT}"
ENV POSTGRESQL_PASSWORD "${POSTGRESQL_PASSWORD}"
ENV POSTGRESQL_DATABASE "${POSTGRESQL_DATABASE}"
ENV POSTGRESQL_ADMIN_PASSWORD "${POSTGRESQL_ADMIN_PASSWORD}"
ENV POSTGRESQL_USER "${POSTGRESQL_USER}"
ENV SUFFIX "${SUFFIX}"
ENV DB_HOST "$DB_HOST"
#ENV DB_CONNECTION_STRING "host=postgresql$SUFFIX;port=5432;database=${POSTGRESQL_DATABASE};username=${POSTGRESQL_USER};password=${POSTGRESQL_ADMIN_PASSWORD}"

ENV KEYCLOAK_URL $KEYCLOAK_URL
ENV KEYCLOAK_REALM $KEYCLOAK_REALM
ENV KEYCLOAK_CLIENT_ID $KEYCLOAK_CLIENT_ID
ENV JWT_WELL_KNOWN_CONFIG $JWT_WELL_KNOWN_CONFIG
ENV API_PORT 8080
COPY *.csproj /opt/app-root/app
RUN dotnet restore
COPY . /opt/app-root/app

# Begin database migration setup
RUN dotnet publish -c Release -o /opt/app-root/app/out/ /p:MicrosoftNETPlatformLibrary=Microsoft.NETCore.App
RUN dotnet tool install --global dotnet-ef --version 3.1.1
RUN dotnet ef migrations script --idempotent --output /opt/app-root/app/out/databaseMigrations.sql

FROM image-registry.openshift-image-registry.svc:5000/9c33a9-tools/aspnet:3.1 AS runtime
USER 0
ENV PATH="$PATH:/opt/rh/rh-dotnet31/root/usr/bin/:/opt/app-root/.dotnet/tools:/root/.dotnet/tools"
ENV ASPNETCORE_ENVIRONMENT "${ASPNETCORE_ENVIRONMENT}"
ENV POSTGRESQL_PASSWORD "${POSTGRESQL_PASSWORD}"
ENV POSTGRESQL_DATABASE "${POSTGRESQL_DATABASE}"
ENV POSTGRESQL_ADMIN_PASSWORD "${POSTGRESQL_ADMIN_PASSWORD}"
ENV POSTGRESQL_USER "${POSTGRESQL_USER}"
ENV PGPASSWORD "${POSTGRESQL_ADMIN_PASSWORD}"
ENV SUFFIX "${SUFFIX}"
ENV DB_HOST "$DB_HOST"
#ENV DB_CONNECTION_STRING "host=postgresql$SUFFIX;port=5432;database=${POSTGRESQL_DATABASE};username=${POSTGRESQL_USER};password=${POSTGRESQL_ADMIN_PASSWORD}"

ENV KEYCLOAK_URL $KEYCLOAK_URL
ENV KEYCLOAK_REALM $KEYCLOAK_REALM
ENV KEYCLOAK_CLIENT_ID $KEYCLOAK_CLIENT_ID
ENV JWT_WELL_KNOWN_CONFIG $JWT_WELL_KNOWN_CONFIG
ENV API_PORT 8080

WORKDIR /opt/app-root/app
COPY --from=build /opt/app-root/app/out/ /opt/app-root/app
COPY --from=build /opt/app-root/app/Configuration/ /opt/app-root/app/Configuration/
COPY --from=build /opt/app-root/app/entrypoint.sh /opt/app-root/app

RUN apt-get update
RUN apt-get install -yqq gpgv gnupg2 wget
RUN echo 'deb http://apt.postgresql.org/pub/repos/apt/ stretch-pgdg main' >  /etc/apt/sources.list.d/pgdg.list
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
RUN apt-get update
RUN apt-get install -yqq --no-install-recommends postgresql-client-10 net-tools moreutils
RUN apt-get install -yf libfontconfig1 libxrender1 libgdiplus xvfb
RUN chmod +x /opt/app-root/app/Resources/wkhtmltopdf/Linux/wkhtmltopdf
RUN /opt/app-root/app/Resources/wkhtmltopdf/Linux/wkhtmltopdf --version
# RUN chmod +x entrypoint.sh
# RUN chmod 777 entrypoint.sh
RUN chmod +x entrypoint.sh
RUN chmod 777 entrypoint.sh
# RUN chmod -R 755 /var/run/
RUN chmod -R 777 /opt/app-root
RUN chmod -R 777 /opt/app-root/.*

EXPOSE 8080 5001 1025
ENTRYPOINT [ "./entrypoint.sh" ]
