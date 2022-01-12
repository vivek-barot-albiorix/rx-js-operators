import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { debounceTime, map, distinctUntilChanged, fromEvent } from 'rxjs';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css'],
})
export class AtmComponent implements AfterViewInit {
  @ViewChild('myInput1') myInput1: ElementRef;

  output: any[] = [];
  counts = {};

  notes = [100, 50, 20];
  // Javascript program for the above approach
  MAX = 100000;

  // dp array to memoize the results
  dp = Array(this.MAX + 1);

  // List to store the result
  denomination: any[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    const searchTerm = fromEvent<any>(this.myInput1.nativeElement, 'keyup');

    searchTerm
      .pipe(
        map((event) => {
          return (event = event.target.value);
        }),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((res) => {
        if (res == 10 || res == 30 || res % 10 != 0) {
          this.output = [];
          alert('Not allowed');
          return;
        }
        if (res) {
          this.dp = Array(this.MAX + 1);
          this.denomination = [];
          this.output = [];
          this.counts = {};
          this.notes = [100, 50, 20];
          this.MAX = 100000;
          this.countMinCoinsUtil(res, this.notes, this.notes.length);
        } else {
          this.dp = Array(this.MAX + 1);
          this.denomination = [];
          this.output = [];
          this.counts = {};
          this.notes = [100, 50, 20];
          this.MAX = 100000;
        }
      });
  }

  countMinCoins(target, coinArray, coinArrayLength) {
    // Base case
    if (target == 0) {
      this.dp[0] = 0;
      return 0;
    }

    // If previously computed
    // subproblem occurred
    if (this.dp[target] != -1) return this.dp[target];

    // Initialize result
    let ret = 1000000000;

    // Try every coin that has smaller
    // value than n
    for (let i = 0; i < coinArrayLength; i++) {
      if (coinArray[i] <= target) {
        const x = this.countMinCoins(
          target - coinArray[i],
          coinArray,
          coinArrayLength
        );

        // Check for INT_MAX to avoid
        // overflow and see if result
        // can be minimized
        if (x != 1000000000) ret = Math.min(ret, 1 + x);
      }
    }

    // Memoizing value of current state
    this.dp[target] = ret;
    return ret;
  }

  findSolution(target, coinArray, coinArrayLength) {
    this.output = [];
    // Base Case
    if (target == 0) {
      this.denomination.forEach((it) => {
        this.output.push(it);
      });

      for (const num of this.output) {
        this.counts[num] = this.counts[num] ? this.counts[num] + 1 : 1;
      }
      return;
    }

    for (let i = 0; i < coinArrayLength; i++) {
      // Try every coin that has
      // value smaller than n
      if (
        target - coinArray[i] >= 0 &&
        this.dp[target - coinArray[i]] + 1 == this.dp[target]
      ) {
        // Add current denominations
        this.denomination.push(coinArray[i]);

        // Backtrack
        this.findSolution(target - coinArray[i], coinArray, coinArrayLength);
        break;
      }
    }
  }

  // Function to find the minimum
  // combinations of coins for value X
  countMinCoinsUtil(target, coinArray, coinArrayLength) {
    // Initialize dp with -1
    this.dp = Array(this.MAX + 1).fill(-1);

    // Min coins
    const isPossible = this.countMinCoins(target, coinArray, coinArrayLength);

    // If no solution exists
    if (isPossible == 1000000000) {
      alert('Not allowed');
    }

    // Backtrack to find the solution
    else {
      this.findSolution(target, coinArray, coinArrayLength);
    }
  }
}
