import { HelperService } from './../../services/helper.service';
import {
  from,
  fromEvent,
  interval,
  map,
  take,
  takeLast,
  takeUntil,
  timer,
} from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnInit {
  randomNames = ['Vivek', 'Amar', 'Akbar', 'Anthony', 'John'];
  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    const nameSource = from(this.randomNames);

    //Ex - 01 | Take

    nameSource.pipe(take(2)).subscribe((res: any) => {
      this.helperService.print(res, 'takeUlElement1');
    });

    //Ex - 02 | TakeLast

    nameSource.pipe(takeLast(3)).subscribe((res: any) => {
      this.helperService.print(res, 'takeUlElement2');
    });

    //Ex - 03 | TakeUntil(condition)

    const source = interval(1000);
    let condition1 = timer(6000);
    let condition2 = fromEvent(document, 'click');

    source
      .pipe(
        map((data: any) => {
          return (data = 'Number ' + data);
        }),
        takeUntil(condition2)
      )
      .subscribe((res: any) => {
        this.helperService.print(res, 'takeUlElement3');
      });
  }
}
