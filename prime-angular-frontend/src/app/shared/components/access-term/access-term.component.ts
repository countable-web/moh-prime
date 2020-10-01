import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AccessTerm } from '@shared/models/access-term.model';

@Component({
  selector: 'app-access-term',
  templateUrl: './access-term.component.html',
  styleUrls: ['./access-term.component.scss']
})
export class AccessTermComponent implements OnInit, OnChanges {
  @Input() public accessTerms: AccessTerm;

  public agreementMarkup: string;

  constructor() { }

  public ngOnChanges(change: SimpleChanges) {
    if (change.accessTerms.currentValue) {
      this.agreementMarkup = this.accessTerms.agreementMarkup;
    }
  }

  public ngOnInit() { }
}
