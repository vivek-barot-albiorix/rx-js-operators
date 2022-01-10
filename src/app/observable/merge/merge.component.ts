import { HelperService } from './../../services/helper.service';
import { interval, map, merge, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css'],
})
export class MergeComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    const techVideosSource = interval(3000).pipe(
      take(5),
      map((value) => {
        return 'Tech Videos #' + (value + 1);
      })
    );
    const comedyVideosSource = interval(4000).pipe(
      take(3),
      map((value) => {
        return 'Comedy Videos #' + (value + 1);
      })
    );
    const newsVideosSource = interval(3500).pipe(
      take(4),
      map((value) => {
        return 'News Videos #' + (value + 1);
      })
    );
    const FinalObs = merge(
      techVideosSource,
      comedyVideosSource,
      newsVideosSource
    );
    FinalObs.subscribe((res) => {
      this.helperService.print(res, 'mergeUlElement1');
    });
  }
}
