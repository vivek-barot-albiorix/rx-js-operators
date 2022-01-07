import { interval, toArray, Subscription, take, from, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent implements OnInit {
  users = [
    {
      name: 'Vivek1',
      skill: 'Mongo',
    },
    {
      name: 'Vivek2',
      skill: 'Express',
    },
    {
      name: 'Vivek3',
      skill: 'Angular',
    },
    {
      name: 'Vivek4',
      skill: 'Node',
    },
  ];
  constructor() {}

  obs1Subscription: Subscription;
  ngOnInit(): void {
    //EX - 01
    const obs1 = interval(1000);
    this.obs1Subscription = obs1.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
    });

    //Ex - 02
    const obs2 = from(this.users);
    obs2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });

    //Ex - 03
    const obs3 = of('Amar', 'Akbar', 'Anthony');
    obs3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
