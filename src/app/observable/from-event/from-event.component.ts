import { HelperService } from '../../services/helper.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit {
  @ViewChild('addBtn') addBtn: ElementRef;

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let counter = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let counterVal = 'video ' + counter++;
      this.helperService.print(counterVal, 'fromEventulElement1');
      this.helperService.print(counterVal, 'fromEventulElement2');
    });
  }
}
