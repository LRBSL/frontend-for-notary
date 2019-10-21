import { Injectable } from '@angular/core';
import { HttpRequestResolverService } from './http-request-resolver.service';

export interface Step {
  count: number;
  title: string;
}

export interface OwnerCredentials {
  ownerNIC: string;
  landKey: string;
}

export const steps: Step[] = [
  {count: 1, title: 'Owner Validation'},
  {count: 2, title: 'Land Details Validation'},
  {count: 3, title: 'New Owner Information'},
  {count: 4, title: 'Execute The Transaction'}
];

@Injectable({
  providedIn: 'root'
})
export class LandRegistrationService {
  // variable declaration
  private currentStep: Step;
  private ownerCredentials: OwnerCredentials;
  private landID: string;

  // constructor
  constructor(private httpService: HttpRequestResolverService) {
    this.ownerCredentials = null;
  }

  // get the current step
  public getCurrentStep(): Step {
    return this.currentStep;
  }
  // set the current step
  public setCurrentStep(stepCount: number): void {
    this.currentStep = steps[stepCount - 1];
  }

  // get owner credentials
  public getOwnerCredentials(): OwnerCredentials {
    return this.ownerCredentials;
  }
  // set owner credentials
  public setOwnerCredentials(ownerCredentials: OwnerCredentials) {
    this.ownerCredentials = ownerCredentials;
  }

  // get the land id
  public getLandID(): string {
    return this.landID;
  }
  // set the land id
  public setLandID(landID: string): void {
    this.landID = landID;
  }

  // get the land id from mapper table
  public getLandIdFromMapper(ownerCredentials: OwnerCredentials) {
    return this.httpService.realizarHttpPost('/api/landCredentials', ownerCredentials)
  }
}
