import { SubjectComponent } from './observable/subject/subject.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { FilterComponent } from './observable/filter/filter.component';
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
      {
        path: 'filter',
        component: FilterComponent,
      },
      {
        path: 'tap',
        component: TapComponent,
      },
      {
        path: 'take',
        component: TakeComponent,
      },
      {
        path: 'debounceTime-distinctUntilChanged',
        component: DebounceComponent,
      },
      {
        path: 'subject',
        component: SubjectComponent,
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
