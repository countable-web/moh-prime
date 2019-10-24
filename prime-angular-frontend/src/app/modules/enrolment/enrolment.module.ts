import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { EnrolmentRoutingModule } from './enrolment-routing.module';

import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SelfDeclarationComponent } from './pages/self-declaration/self-declaration.component';
import { ProfessionalInfoComponent } from './pages/professional-info/professional-info.component';
import { PharmanetAccessComponent } from './pages/pharmanet-access/pharmanet-access.component';
import { ReviewComponent } from './pages/review/review.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';

import { CollegeCertificationsComponent } from './shared/components/college-certifications/college-certifications.component';
import { PageTitleComponent } from './shared/components/page-title/page-title.component';
import { SubHeaderComponent } from './shared/components/sub-header/sub-header.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ContactComponent,
    ProfessionalInfoComponent,
    SelfDeclarationComponent,
    PharmanetAccessComponent,
    ReviewComponent,
    ConfirmationComponent,
    CollegeCertificationsComponent,
    PageTitleComponent,
    SubHeaderComponent
  ],
  imports: [
    SharedModule,
    EnrolmentRoutingModule
  ]
})
export class EnrolmentModule { }