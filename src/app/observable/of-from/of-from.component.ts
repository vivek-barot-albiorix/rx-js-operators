import { HelperService } from './../../services/helper.service';
import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css'],
})
export class OfFromComponent implements OnInit {
  obsMsg: { a: string; b: string; c: string };
  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    // of - string
    const obs1 = of('Anup', 'Shekhar', 'Sharma');
    obs1.subscribe((res) => {
      this.helperService.print(res, 'ofFromUlElement1');
    });

    //of - object
    const obs2 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' });
    obs2.subscribe((res) => {
      this.obsMsg = res;
    });

    //from - array
    const obs3 = from(['Amar', 'Akbar', 'Anthony']);
    obs3.subscribe((res) => {
      this.helperService.print(res, 'ofFromUlElement3');
    });

    //from - promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise resolved');
      }, 3000);
    });

    const obs4 = from(promise);
    obs4.subscribe((res: any) => {
      this.helperService.print(res, 'ofFromUlElement4');
    });

    //from - string
    const obs5 = from('Welcome');
    obs5.subscribe((res) => {
      this.helperService.print(res, 'ofFromUlElement5');
    });
  }
}
