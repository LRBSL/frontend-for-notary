import { Component, OnInit } from '@angular/core';
import { LandRegistrationService } from 'src/app/services/land-registration.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-processing-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  buyerDataForm = new FormGroup({
    buyerNIC: new FormControl('')
  });

  constructor(private lrService: LandRegistrationService) { }

  ngOnInit() {
    this.lrService.setCurrentStep(3);
  }

}
