import { HelperService } from './../../services/helper.service';
import { Component, OnInit } from '@angular/core';
import { exhaustMap, fromEvent, interval, take } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css'],
})
export class ExhaustMapComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    const temp = fromEvent(document, 'click').pipe(
      exhaustMap(() => {
        return interval(1000).pipe(take(5));
      })
    );

    temp.subscribe((res: any) => {
      this.helperService.print(res, 'exhaustMapUlElement1');
    });
  }
}
