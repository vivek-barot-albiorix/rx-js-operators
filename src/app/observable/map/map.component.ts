import { HelperService } from './../../services/helper.service';
import { from, interval, map, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  sub1: Subscription;
  sub2: Subscription;
  msg1: string;
  msg2: string;
  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    const obs1 = interval(1000);

    //Ex - 01
    this.sub1 = obs1
      .pipe(
        map((data: any) => {
          return 'Video ' + data;
        })
      )
      .subscribe((res) => {
        this.msg1 = res;
      });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 5000);

    //Ex - 02
    this.sub2 = obs1
      .pipe(
        map((data) => {
          return (data = data * 3);
        })
      )
      .subscribe((data: any) => {
        this.msg2 = data;
      });

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 5000);

    //Ex - 03

    const members = [
      {
        id: 1,
        name: 'Vivek',
      },
      {
        id: 2,
        name: 'John',
      },
      {
        id: 3,
        name: 'Amar',
      },
      {
        id: 4,
        name: 'Akbar',
      },
      {
        id: 5,
        name: 'Anthony',
      },
    ];

    const memObs = from(members);

    memObs
      .pipe(
        map((data: any) => {
          return (data = {
            ...data,
            age: 25,
          });
        })
      )
      .subscribe((res) => {
        this.helperService.print(res.name, 'mapUlElement1');
      });
  }
}
