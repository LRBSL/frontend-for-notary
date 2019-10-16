import {Component, OnInit} from '@angular/core';
import {LandRegistrationService} from '../../../../services/land-registration.service';

@Component({
  selector: 'app-land-registration',
  templateUrl: './land-registration.component.html',
  styleUrls: ['./land-registration.component.css']
})
export class LandRegistrationComponent implements OnInit {
  stepPercentage: number;
  step1FormRef: any;

  constructor(private lrService: LandRegistrationService) { }

  ngOnInit() {
    this.lrService.setCurrentStep(1);
    this.stepPercentage = 0;
  }

  onActivate1(componentRef: any) {
    this.step1FormRef = componentRef;
  }

  onSubmit() {
    switch (this.lrService.getCurrentStep().count) {
      case 1: {
        this.lrService.setOwnerCredentials({
          ownerNIC: this.step1FormRef.ownerDataForm.value.ownerNIC,
          landKey: this.step1FormRef.ownerDataForm.value.landKey
        });
      }
    }
  }
}
