import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Enrolment } from '@shared/models/enrolment.model';
import { EnrolmentStatusReason } from '@shared/models/enrolment-status-reason.model';
import { EnrolmentStatusReason as EnrolmentStatusReasonEnum } from '@shared/enums/enrolment-status-reason.enum';
import { BaseEnrolmentPage } from '@enrolment/shared/classes/BaseEnrolmentPage';
import { EnrolmentService } from '@enrolment/shared/services/enrolment.service';
import { ProgressStatus } from '@enrolment/shared/enums/progress-status.enum';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent extends BaseEnrolmentPage implements OnInit {
  public isAutomatic: boolean;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    private enrolmentService: EnrolmentService
  ) {
    super(route, router);
  }

  public ngOnInit() {
    this.enrolmentService.enrolment$
      .subscribe((enrolment: Enrolment) => {
        // Only automatic if the enrolment reason is `Automatic`
        this.isAutomatic = enrolment.currentStatus.enrolmentStatusReasons
          .every((reason: EnrolmentStatusReason) => reason.statusReasonCode === EnrolmentStatusReasonEnum.AUTOMATIC);
        this.isInitialEnrolment = enrolment.progressStatus !== ProgressStatus.FINISHED;
      });
  }
}
