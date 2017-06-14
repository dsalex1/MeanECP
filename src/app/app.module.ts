import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { LandscapePlanComponent } from './landscape-plan/landscape-plan.component';
import { MultiplePlanComponent } from './multiple-plan/multiple-plan.component';
import { PlanComponent } from './plan/plan.component';
import { PngComponent } from './png/png.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortraitPlanComponent } from './portrait-plan/portrait-plan.component';
import { FilteredPlanComponent } from './filtered-plan/filtered-plan.component';
import { KeypressComponent } from './keypress/keypress.component';

import { JSONColToCSSPipe } from './util/JSONColToCSS.pipe'

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
    FilteredPlanComponent,
    KeypressComponent,
    JSONColToCSSPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }