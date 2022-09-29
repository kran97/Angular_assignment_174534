import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-btn-counter',
  templateUrl: './btn-counter.component.html',
  styleUrls: ['./btn-counter.component.scss']
})
export class BtnCounterComponent implements OnInit, OnChanges {

  @Input() switchStatus: string = '';
  @Input() reset: boolean = false;
  start: number = 0;
  stop: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['switchStatus']?.currentValue === 'stop' && changes['switchStatus']?.previousValue !== undefined) {
      this.stop++;
    } else if (changes['switchStatus']?.currentValue === 'start') {
      this.start++;
    } else if (changes['reset']?.currentValue !== changes['reset']?.previousValue) {
      this.start = this.stop = 0;
    }
  }
}
