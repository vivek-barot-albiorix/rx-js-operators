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
  ];

  constructor() {}

  ngOnInit(): void {}
}
