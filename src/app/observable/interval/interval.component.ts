import { HelperService } from './../../services/helper.service';
import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent implements OnInit {
  msg: string;
  videoSubscriotionInterval: Subscription;
  videoSubscriotionTimer: Subscription;
  constructor(private heleerService: HelperService) {}

  ngOnInit(): void {
    let broadCastVideoInterval = interval(1000);
    let broadCastVideoTimer = timer(5000, 1000);

    this.videoSubscriotionInterval = broadCastVideoInterval.subscribe((res) => {
      this.msg = 'Video ' + res;
      this.heleerService.print(this.msg, 'intervalUlElement1');
      this.heleerService.print(this.msg, 'intervalUlElement2');
      this.heleerService.print(this.msg, 'intervalUlElement3');

      if (res >= 5) {
        this.videoSubscriotionInterval.unsubscribe();
      }
    });

    this.videoSubscriotionTimer = broadCastVideoTimer.subscribe((res) => {
      this.msg = 'Video ' + res;
      this.heleerService.print(this.msg, 'intervalUlElement4');
      this.heleerService.print(this.msg, 'intervalUlElement5');
      this.heleerService.print(this.msg, 'intervalUlElement6');

      if (res >= 10) {
        this.videoSubscriotionTimer.unsubscribe();
      }
    });
  }
}
