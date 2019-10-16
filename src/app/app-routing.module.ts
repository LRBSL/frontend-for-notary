import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandRegistrationComponent} from './components/processing/pages/land-registration/land-registration.component';
import {DashboardComponent} from './components/processing/pages/dashboard/dashboard.component';
import {LandRecordsComponent} from './components/processing/pages/land-records/land-records.component';
import {SupportFacilitiesComponent} from './components/processing/pages/support-facilities/support-facilities.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent, data: { animation: 'dashboard-window'} },
  { path: 'land-registration', component: LandRegistrationComponent, data: { animation: 'land-registration-window'}  },
  { path: 'land-records', component: LandRecordsComponent },
  { path: 'support-facilities', component: SupportFacilitiesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
