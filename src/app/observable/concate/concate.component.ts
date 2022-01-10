import { HelperService } from './../../services/helper.service';
import { concat, interval, map, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concate',
  templateUrl: './concate.component.html',
  styleUrls: ['./concate.component.css'],
})
export class ConcateComponent implements OnInit {
  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    const techVideosSource = interval(1000).pipe(
      take(5),
      map((value) => {
        return 'Tech Videos #' + (value + 1);
      })
    );
    const comedyVideosSource = interval(1000).pipe(
      take(3),
      map((value) => {
        return 'Comedy Videos #' + (value + 1);
      })
    );
    const newsVideosSource = interval(1000).pipe(
      take(4),
      map((value) => {
        return 'News Videos #' + (value + 1);
      })
    );
    const FinalObs = concat(
      techVideosSource,
      comedyVideosSource,
      newsVideosSource
    );
    FinalObs.subscribe((res) => {
      this.helperService.print(res, 'concateUlElement1');
    });
  }
}
