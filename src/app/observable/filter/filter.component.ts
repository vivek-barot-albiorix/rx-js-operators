import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  dataArray = [
    {
      id: 1,
      name: 'Vivek',
      gender: 'Male',
    },
    {
      id: 2,
      name: 'Nikita',
      gender: 'Female',
    },
    {
      id: 3,
      name: 'Chandani',
      gender: 'Female',
    },
    {
      id: 4,
      name: 'Jayesh',
      gender: 'Male',
    },
    {
      id: 5,
      name: 'Sachin',
      gender: 'Male',
    },
    {
      id: 6,
      name: 'Komal',
      gender: 'Female',
    },
    {
      id: 7,
      name: 'Amar',
      gender: 'Male',
    },
    {
      id: 8,
      name: 'Shweta',
      gender: 'Female',
    },
    {
      id: 9,
      name: 'Dhara',
      gender: 'Female',
    },
    {
      id: 10,
      name: 'Akbar',
      gender: 'Male',
    },
    {
      id: 11,
      name: 'Anthony',
      gender: 'Male',
    },
    {
      id: 12,
      name: 'Geeta',
      gender: 'Female',
    },
  ];

  data1: any;
  data2: any;
  data3: any;

  constructor() {}

  ngOnInit(): void {
    const source = from(this.dataArray);

    //Ex - 01

    source
      .pipe(
        filter((member) => {
          return member.name.length > 5;
        }),
        toArray()
      )
      .subscribe((res: any) => {
        this.data1 = res;
      });

    // EX - 02

    source
      .pipe(
        filter((member) => {
          return member.gender == 'Female';
        }),
        toArray()
      )
      .subscribe((res) => {
        this.data2 = res;
      });

    // EX - 03

    source
      .pipe(
        filter((member) => {
          return member.id > 8;
        }),
        toArray()
      )
      .subscribe((res) => {
        this.data3 = res;
      });
  }
}
