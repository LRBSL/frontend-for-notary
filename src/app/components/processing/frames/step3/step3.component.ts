import { Component, OnInit } from '@angular/core';
import { LandRegistrationService } from 'src/app/services/land-registration.service';

@Component({
  selector: 'app-processing-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  constructor(private lrService: LandRegistrationService) { }

  ngOnInit() {
    this.lrService.setCurrentStep(3);
  }

}
