import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-registration',
  templateUrl: './land-registration.component.html',
  styleUrls: ['./land-registration.component.css']
})
export class LandRegistrationComponent implements OnInit {
  windowTitle: string;

  constructor() { }

  ngOnInit() {
    this.windowTitle = 'Land Registration';
  }

}
