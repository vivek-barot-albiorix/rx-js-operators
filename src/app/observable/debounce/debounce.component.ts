import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css'],
})
export class DebounceComponent implements AfterViewInit {
  @ViewChild('myInput1') myInput1: ElementRef;
  @ViewChild('myInput2') myInput2: ElementRef;
  reqData1: string;
  reqData2: string;
  constructor() {}

  ngAfterViewInit(): void {
    // Ex - 01 | DebounceTime
    const searchTerm = fromEvent<any>(this.myInput1.nativeElement, 'keyup');

    searchTerm
      .pipe(
        map((event) => {
          return (event = event.target.value);
        }),
        debounceTime(1000)
      )
      .subscribe((res) => {
        this.reqData1 = res;
        setTimeout(() => {
          this.reqData1 = '';
        }, 2000);
      });

    //Ex 02 | DistinctUntilChanged
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup');

    searchTerm2
      .pipe(
        map((event) => {
          return (event = event.target.value);
        }),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((res) => {
        this.reqData2 = res;
        setTimeout(() => {
          this.reqData2 = '';
        }, 2000);
      });
  }
}
