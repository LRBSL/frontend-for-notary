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

export interface LandBlock {
  id: string;
  extent: number;
  owner: string;
  parentLandID: string;
  rlRegistry: string;
  boundaries: number[][];
}

export interface NIC {
  ownerNIC: string;
  fullname?: number;
  gender?: string;
  birthday?: Date;
  occupation?: string;
  postal_address?: string;
  registered_date?: Date;
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
  private landBlock: LandBlock;
  private ownerNIC: NIC;

  // constructor
  constructor(private httpService: HttpRequestResolverService) {
    this.ownerCredentials = null;
    this.landID = null;
    this.landBlock = null;
    this.ownerNIC = null;
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

  // get the land block
  public getLandBlock(): LandBlock {
    return this.landBlock;
  }
  // set the land block
  public setLandBlock(landBlock: LandBlock): void {
    this.landBlock = landBlock;
  }

  // get the owner nic
  public getOwnerNIC(): NIC {
    return this.ownerNIC;
  }
  // set the owner nic
  public setOwnerNIC(ownerNIC: NIC): void {
    this.ownerNIC = ownerNIC;
  }

  // get the land id from mapper table
  public getLandIdFromMapper(ownerCredentials: OwnerCredentials) {
    return this.httpService.realizarHttpPost('/api/landCredentials', ownerCredentials)
  }

  // get the land block information from the block chain
  public getLandBlockInfo(landID: number) {
    return this.httpService.realizarHttpGet('http://13.229.128.106:9000/land/queryLand/' + landID);
  }

  // get the owner nic from nic table
  public getOwnerNicFromDB(ownerNIC: NIC) {
    return this.httpService.realizarHttpPost('/api/getNic', ownerNIC);
  }
  
}
