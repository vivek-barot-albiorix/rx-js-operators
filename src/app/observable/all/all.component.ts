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
  ];

  constructor() {}

  ngOnInit(): void {}
}
