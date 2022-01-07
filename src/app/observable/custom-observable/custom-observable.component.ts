import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { HelperService } from './../../services/helper.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css'],
})
export class CustomObservableComponent implements OnInit {
  techStatus = '';
  nameStatus = '';
  techStatus2 = '';
  names: '';
  subs2: Subscription;

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    //Ex - 01

    const cusObs1 = new Observable((observer: any) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);
      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);
      setTimeout(() => {
        observer.next('HTML & CSS');
        observer.complete();
      }, 3000);
      setTimeout(() => {
        observer.next('Node');
        observer.error(new Error('Limit exceeded'));
      }, 4000);
      setTimeout(() => {
        observer.next('Mongo');
      }, 5000);
    });
    cusObs1.subscribe({
      next: (res: any) => {
        this.helperService.print(res, 'customObservableUlElement1');
      },
      error: () => {
        this.techStatus = 'error';
      },
      complete: () => {
        this.techStatus = 'completed';
      },
    });

    //Ex - 02

    const arr2 = ['Angular', 'Typescript', 'HTML & CSS', 'Node', 'Mongo'];
    const cusObs2 = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr2[count]);
        if (count >= 2) {
          observer.error('Error emit');
        }
        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });
    this.subs2 = cusObs2.subscribe({
      next: (res: any) => {
        this.helperService.print(res, 'customObservableUlElement2');
      },
      error: () => {
        this.techStatus2 = 'error';
      },
      complete: () => {
        this.techStatus2 = 'completed';
      },
    });

    //Ex - 03

    const arr3 = [
      'Anup',
      'Shekhar',
      'Sharma',
      'Amar',
      'Akbar',
      'Anthony',
      'john',
    ];
    const cusObs3 = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr3[count]);
        if (count >= 3) {
          observer.error('Error emit');
        }
        if (count >= 6) {
          observer.complete();
        }
        count++;
      }, 1000);
    });
    cusObs3.subscribe({
      next: (res: any) => {
        this.names = res;
      },
      error: (e) => (this.nameStatus = 'error'),
      complete: () => (this.nameStatus = 'completed'),
    });
  }

  ngOnDestroy(): void {
    this.subs2.unsubscribe();
  }
}
