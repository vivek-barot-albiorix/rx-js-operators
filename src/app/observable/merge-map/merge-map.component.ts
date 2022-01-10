import { HelperService } from './../../services/helper.service';
import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  getData(value: any) {
    return of(value + ' Video Uploaded');
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //Ex - 01 | Map
    source.pipe(map((e) => this.getData(e))).subscribe((res) => {
      res.subscribe((res) => {
        this.helperService.print(res, 'mergeMapUlElement1');
      });
    });

    //Ex - 02 | Map + MergeAll
    source
      .pipe(
        map((e) => this.getData(e)),
        mergeAll()
      )
      .subscribe((res: any) => {
        this.helperService.print(res, 'mergeMapUlElement2');
      });

    //Ex - 03 | MergeMap
    source.pipe(mergeMap((e) => this.getData(e))).subscribe((res: any) => {
      this.helperService.print(res, 'mergeMapUlElement3');
    });
  }
}
