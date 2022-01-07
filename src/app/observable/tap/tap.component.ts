import { HelperService } from './../../services/helper.service';
import { interval, map, Subscription, take, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit {
  obsSubscription1: Subscription;
  obsSubscription2: Subscription;
  myStyle: string;
  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    const source = interval(1500);

    //Ex - 01

    const arr = ['Vivek', 'Amar', 'Akbar', 'Anthony', 'John', 'Robert'];

    this.obsSubscription1 = source
      .pipe(
        tap((res: any) => {
          if (res === 6) {
            this.obsSubscription1.unsubscribe();
          }
        }),
        map((res) => arr[res])
      )
      .subscribe((res) => {
        this.helperService.print(res, 'tapUlElement1');
      });

    const colors = ['Red', 'Green', 'Yellow', 'Orange', 'Pink', 'Purple'];

    this.obsSubscription2 = source
      .pipe(
        tap((res: any) => {
          if (res < 4) {
            this.myStyle = colors[res];
          }
          if (res > 3) {
            this.obsSubscription2.unsubscribe();
          }
        }),
        map((res) => colors[res])
      )
      .subscribe((res) => {
        this.helperService.print(res, 'tapUlElement2');
      });
  }
}
