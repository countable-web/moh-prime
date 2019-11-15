import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { EnrolmentRoutingModule } from './enrolment-routing.module';

import { ProfileComponent } from './pages/profile/profile.component';
import { RegulatoryComponent } from './pages/regulatory/regulatory.component';
import { DeviceProviderComponent } from './pages/device-provider/device-provider.component';
import { JobComponent } from './pages/job/job.component';
import { SelfDeclarationComponent } from './pages/self-declaration/self-declaration.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { ReviewComponent } from './pages/review/review.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { AccessAgreementComponent } from './pages/access-agreement/access-agreement.component';
import { SummaryComponent } from './pages/summary/summary.component';

import { CollegeCertificationsComponent } from './shared/components/college-certifications/college-certifications.component';

@NgModule({
  declarations: [
    ProfileComponent,
    RegulatoryComponent,
    DeviceProviderComponent,
    JobComponent,
    SelfDeclarationComponent,
    OrganizationComponent,
    ReviewComponent,
    ConfirmationComponent,
    AccessAgreementComponent,
    SummaryComponent,
    CollegeCertificationsComponent
  ],
  imports: [
    SharedModule,
    EnrolmentRoutingModule
  ],
  exports: []
})
export class EnrolmentModule { }
