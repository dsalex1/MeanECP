/*
Author: dsalex1
Author URI: https://github.com/dsalex1/MeanECP/tree/master/docs
Description: Referrence file for all components, and routing
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { APIComponent } from './api/api.component';

/*define routing, which path leads to which component*/ 
const appRoutes: Routes = [
  { path: 'Impressum', component: ImpressumComponent },
  { path: 'Disclaimer',      component: DisclaimerComponent },
  { path: 'Datenschutz',      component: DatenschutzComponent },
  { path: 'API',      component: APIComponent },
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '/'},
];

/*declare components*/ 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    DisclaimerComponent,
    ImpressumComponent,
    DatenschutzComponent,
    APIComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
