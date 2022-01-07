import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit {
  data: any;
  data2: any;
  users = [
    {
      name: 'Amar',
      skills: 'Mongo',
      job: {
        title: 'Frontend developer',
        exp: '1 year',
      },
    },
    {
      name: 'Akbar',
      skills: 'Express',
      job: {
        title: 'Backend developer',
        exp: '2 years',
      },
    },
    {
      name: 'Anthony',
      skills: 'Angular',
      job: {
        title: 'Devops engineer',
        exp: '3 years',
      },
    },
    {
      name: 'Vivek',
      skills: 'Node',
      job: {
        title: 'Fullstack engineer',
        exp: '4 years',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {
    //EX -01

    from(this.users)
      .pipe(pluck('name'), toArray())
      .subscribe((res) => {
        this.data = res;
      });

    //EX - 02

    from(this.users)
      .pipe(pluck('job', 'title'), toArray())
      .subscribe((res) => {
        this.data2 = res;
      });
  }
}
