import { Component, OnInit } from '@angular/core';
import { LandRegistrationService } from '../../../../services/land-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-registration',
  templateUrl: './land-registration.component.html',
  styleUrls: ['./land-registration.component.css']
})
export class LandRegistrationComponent implements OnInit {

  stepPercentage: number;
  step1FormRef: any;

  constructor(private router: Router, private lrService: LandRegistrationService) { }

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
        let owner_nic = this.step1FormRef.ownerDataForm.value.ownerNIC;
        let land_key = this.step1FormRef.ownerDataForm.value.landKey;
        // owner validation from mapper table
        this.lrService.getLandIdFromMapper({
          ownerNIC: owner_nic,
          landKey: land_key
        }).subscribe((res: any) => {
          if (res != null) {
            this.lrService.setOwnerCredentials({
              ownerNIC: owner_nic,
              landKey: land_key
            });
            this.lrService.setLandID(res.land_id);
            this.lrService.setCurrentStep(2);
            this.stepPercentage = 25;
            this.lrService.getLandBlockInfo(1).subscribe((res:any) => {
              this.lrService.setLandBlock({
                id: res._id,
                extent: res._Extent,
                owner: res._Owner,
                parentLandID: res._ParentLandID,
                rlRegistry: res._RLRegistry,
                boundaries: [
                  [res._Boundaries[0][0], res._Boundaries[0][1]],
                  [res._Boundaries[1][0], res._Boundaries[1][1]],
                  [res._Boundaries[2][0], res._Boundaries[2][1]],
                  [res._Boundaries[3][0], res._Boundaries[3][1]],
                ]
              });
              this.lrService.getOwnerNicFromDB({ownerNIC: owner_nic}).subscribe((res:any) => {
                this.lrService.setOwnerNIC({
                  ownerNIC: res.nic_no,
                  fullname: res.fullname,
                  gender: res.gender,
                  birthday: res.birthday,
                  occupation: res.occupation,
                  postal_address: res.postal_address,
                  registered_date: res.registered_date
                });
              });
            }, (err) => {console.log(err)});
            this.router.navigate(['land-registration/step-2']);
          } else {
            alert("Owner credentials not valid / No land records to for credentials.");
          }
        }, (err) => {
          console.log(err);
          alert(err.message);
        });
      }
    }
  }

  goBack() {
    switch (this.lrService.getCurrentStep().count) {
      case 2: {
        this.router.navigate(['land-registration/step-1']);
        this.stepPercentage = 0;
      }
    }
  }

  cancelProcess() {
    this.router.navigate(['land-registration/step-1']);
  }
}
