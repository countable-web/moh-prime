﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using prime.Models;

namespace prime.Migrations
{
    [DbContext(typeof(ApiDbContext))]
    [Migration("20190829223658_UpdateApplications")]
    partial class UpdateApplications
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("public")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("prime.Models.Application", b =>
                {
                    b.Property<int?>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ApplicantId")
                        .IsRequired();

                    b.Property<string>("ApplicantName")
                        .IsRequired();

                    b.Property<DateTime>("AppliedDate");

                    b.Property<bool?>("Approved");

                    b.Property<DateTime>("ApprovedDate");

                    b.Property<string>("ApprovedReason");

                    b.Property<string>("Content")
                        .IsRequired();

                    b.Property<string>("PharmacistRegistrationNumber");

                    b.HasKey("Id");

                    b.ToTable("Application");
                });

            modelBuilder.Entity("prime.Models.PharmacistRegistrationNumber", b =>
                {
                    b.Property<int?>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Number")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("PharmacistRegistrationNumber");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Number = "A0000"
                        },
                        new
                        {
                            Id = 2,
                            Number = "A0001"
                        },
                        new
                        {
                            Id = 3,
                            Number = "B0000"
                        },
                        new
                        {
                            Id = 4,
                            Number = "B0001"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
