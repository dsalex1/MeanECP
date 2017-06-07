import { RouterModule } from '@angular/router';

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

export const routing = RouterModule.forRoot([// Add routes to the app
  /*{ // Define the routes
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },*/
  {
    path: '',
    redirectTo: '/root',
    pathMatch: 'full'
  },
  {
    path: 'root',
    component: RootComponent
  },
  {
    path: 'LandscapePlan',
    component: LandscapePlanComponent
  },
  {
    path: 'FilteredPlan',
    component: FilteredPlanComponent
  },
  {
    path: 'PortraitPlan',
    component: PortraitPlanComponent
  },
  {
    path: 'MultiplePlan',
    component: MultiplePlanComponent
  },
  {
    path: 'Png',
    component: PngComponent
  },
  {
    path: 'Slideshow',
    component: SlideshowComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]);
