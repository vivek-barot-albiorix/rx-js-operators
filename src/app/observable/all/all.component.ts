import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  points = [
    { name: 'From Event', routerLink: 'from-event' },
    { name: 'Interval', routerLink: 'interval' },
    { name: 'Of-From', routerLink: 'of-from' },
    { name: 'ToArray', routerLink: 'to-array' },
    { name: 'Custom Observable', routerLink: 'custom-observable' },
    { name: 'Map', routerLink: 'map' },
    { name: 'Pluck', routerLink: 'pluck' },
    { name: 'Filter', routerLink: 'filter' },
    { name: 'Tap', routerLink: 'tap' },
    { name: 'Take', routerLink: 'take' },
    {
      name: 'DebounceTime & DistinctUntilChanged',
      routerLink: 'debounceTime-distinctUntilChanged',
    },
    { name: 'Merge', routerLink: 'merge' },
    { name: 'Concat', routerLink: 'concat' },
    { name: 'MergeMap', routerLink: 'mergeMap' },
    { name: 'ConcatMap', routerLink: 'concatMap' },
    { name: 'SwitchMap', routerLink: 'switchMap' },
    { name: 'ExhaustMap', routerLink: 'exhaustMap' },
    { name: 'Subject & Behaviour subject', routerLink: 'subject' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
