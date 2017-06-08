import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.router';

import { SlideshowService } from './slideshow/slideshow.service';
import { AppService } from './app.service';
import { KeyService } from './util/key.service'

import { AppComponent } from './app.component';
import { LandscapePlanComponent } from './landscape-plan/landscape-plan.component';
import { MultiplePlanComponent } from './multiple-plan/multiple-plan.component';
import { PlanComponent } from './plan/plan.component';
import { PngComponent } from './png/png.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortraitPlanComponent } from './portrait-plan/portrait-plan.component';
import { RootComponent } from './root/root.component';
import { FilteredPlanComponent } from './filtered-plan/filtered-plan.component';
@NgModule({
  declarations: [
    AppComponent,
    LandscapePlanComponent,
    MultiplePlanComponent,
    PlanComponent,
    PngComponent,
    SlideshowComponent,
    NotFoundComponent,
    PortraitPlanComponent,
    RootComponent,
    FilteredPlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [KeyService, AppService, SlideshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }