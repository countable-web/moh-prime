import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { SiteRegistrationRoutingModule } from './site-registration-routing.module';

import { BusinessHoursModule } from '@lib/modules/business-hours/business-hours.module';
// TODO split out all related filepond files into a /lib module ie. config and components
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
registerPlugin(FilePondPluginFileValidateType);

import { RegistrantProfileFormComponent } from './shared/components/registrant-profile-form/registrant-profile-form.component';
import { SiteProgressIndicatorComponent } from './shared/components/site-progress-indicator/site-progress-indicator.component';
import { SiteCollectionNoticeComponent } from './shared/components/site-collection-notice/site-collection-notice.component';
import { SameAsComponent } from './shared/components/same-as/same-as.component';

import { VendorComponent } from './pages/vendor/vendor.component';
import { CollectionNoticeComponent } from './pages/collection-notice/collection-notice.component';
import { SigningAuthorityComponent } from './pages/signing-authority/signing-authority.component';
import { AdministratorComponent } from './pages/administrator/administrator.component';
import { MultipleSitesComponent } from './pages/multiple-sites/multiple-sites.component';
import { TechnicalSupportComponent } from './pages/technical-support/technical-support.component';
import { SiteOverviewComponent } from './pages/site-overview/site-overview.component';
import { OrganizationInformationComponent } from './pages/organization-information/organization-information.component';
import { HoursOperationComponent } from './pages/hours-operation/hours-operation.component';
import { PrivacyOfficerComponent } from './pages/privacy-officer/privacy-officer.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { SiteAddressComponent } from './pages/site-address/site-address.component';
import { OrganizationAgreementComponent } from './pages/organization-agreement/organization-agreement.component';
import { OrganizationTypeComponent } from './pages/organization-type/organization-type.component';
import { BusinessLicenceComponent } from './pages/business-licence/business-licence.component';

@NgModule({
  declarations: [
    CollectionNoticeComponent,
    VendorComponent,
    SigningAuthorityComponent,
    AdministratorComponent,
    MultipleSitesComponent,
    TechnicalSupportComponent,
    SiteOverviewComponent,
    OrganizationInformationComponent,
    HoursOperationComponent,
    PrivacyOfficerComponent,
    RegistrantProfileFormComponent,
    ConfirmationComponent,
    SiteProgressIndicatorComponent,
    SiteCollectionNoticeComponent,
    SiteAddressComponent,
    OrganizationAgreementComponent,
    SameAsComponent,
    BusinessLicenceComponent,
    OrganizationTypeComponent
  ],
  imports: [
    SharedModule,
    SiteRegistrationRoutingModule,
    FilePondModule,
    BusinessHoursModule,
    SiteRegistrationRoutingModule
  ]
})
export class SiteRegistrationModule { }
