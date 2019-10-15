import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WindowComponent } from './components/processing/window/window.component';
import { Step1Component } from './components/processing/frames/step1/step1.component';
import { Step2Component } from './components/processing/frames/step2/step2.component';
import { Step3Component } from './components/processing/frames/step3/step3.component';
import { Step4Component } from './components/processing/frames/step4/step4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    WindowComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
