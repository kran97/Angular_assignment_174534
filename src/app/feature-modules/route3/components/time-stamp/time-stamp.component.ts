import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent implements OnInit, OnChanges {

  @Input() switchStatus: string = '';
  @Input() reset: boolean = false;
  date = new Date();
  statusData: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['switchStatus']?.currentValue !== changes['switchStatus']?.previousValue &&
      changes['switchStatus']?.previousValue !== undefined) {
        this.date = new Date();
        let obj = {
          status: changes['switchStatus'].currentValue,
          time: this.date.toLocaleDateString() + " " + this.date.toLocaleTimeString()
        }
        this.statusData.push(obj);
    } else if (changes['reset']?.currentValue !== changes['reset']?.previousValue) {
      this.statusData = [];
    }
  }
}
