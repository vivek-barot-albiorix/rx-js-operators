import { HelperService } from './../../services/helper.service';
import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css'],
})
export class SwitchmapComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    const temp = fromEvent(document, 'click').pipe(
      switchMap(() => {
        return interval(1000).pipe(take(5));
      })
    );

    temp.subscribe((res: any) => {
      this.helperService.print(res, 'switchMapUlElement1');
    });
  }
}
