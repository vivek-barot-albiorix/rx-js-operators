import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PluckComponent } from './observable/pluck/pluck.component';
import { MapComponent } from './observable/map/map.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { AllComponent } from './observable/all/all.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      {
        path: '',
        component: AllComponent,
      },
      {
        path: 'from-event',
        component: FromEventComponent,
      },
      {
        path: 'interval',
        component: IntervalComponent,
      },
      {
        path: 'of-from',
        component: OfFromComponent,
      },
      {
        path: 'to-array',
        component: ToArrayComponent,
      },
      {
        path: 'custom-observable',
        component: CustomObservableComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
      {
        path: 'pluck',
        component: PluckComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'observable',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
