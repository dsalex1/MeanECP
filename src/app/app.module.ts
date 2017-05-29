import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from './app.router';

import { PostsService } from './posts/posts.service';
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { LandscapePlanComponent } from './landscape-plan/landscape-plan.component';
import { MultiplePlanComponent } from './multiple-plan/multiple-plan.component';
import { PlanComponent } from './plan/plan.component';
import { PngComponent } from './png/png.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortraitPlanComponent } from './portrait-plan/portrait-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LandscapePlanComponent,
    MultiplePlanComponent,
    PlanComponent,
    PngComponent,
    SlideshowComponent,
    NotFoundComponent,
    PortraitPlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostsService,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }