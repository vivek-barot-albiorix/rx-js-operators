import { HelperService } from './../../services/helper.service';
import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css'],
})
export class ConcatMapComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  getData(value: any) {
    return of(value + ' Video Uploaded').pipe(delay(2000));
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //Ex - 01 | Map
    source.pipe(map((e) => this.getData(e))).subscribe((res) => {
      res.subscribe((res) => {
        this.helperService.print(res, 'concatMapUlElement1');
      });
    });

    //Ex - 02 | Map + mergeMap
    source
      .pipe(
        mergeMap((e) => this.getData(e))
      )
      .subscribe((res: any) => {
        this.helperService.print(res, 'concatMapUlElement2');
      });

    //Ex - 03 | ConcatMap
    source.pipe(concatMap((e) => this.getData(e))).subscribe((res: any) => {
      this.helperService.print(res, 'concatMapUlElement3');
    });
  }
}
