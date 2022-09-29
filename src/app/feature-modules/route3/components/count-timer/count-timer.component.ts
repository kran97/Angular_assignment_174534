import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-count-timer',
  templateUrl: './count-timer.component.html',
  styleUrls: ['./count-timer.component.scss']
})
export class CountTimerComponent implements OnInit, OnChanges {

  @Input() timer = 0;
  @Input() switchStatus: string = 'stop';
  @Input() reset: boolean = false;
  @Output() currentPauseTime = new EventEmitter<number>();
  timer_id: any;
  currentTime: number = 0;

  constructor() { }

  
  /**Start and stop timer logic */
  startStop() {
    if (this.switchStatus === 'start') {
      this.timer_id = setInterval(() => {
        if (this.timer) {
          this.timer--;
        }
      }, 1000);
    } else if (this.switchStatus === 'stop') {
      this.currentTime = this.timer;
      this.currentPauseTime.emit(this.currentTime);
      clearInterval(this.timer_id);
    }
  }

  resetTimer() {
    this.timer = 0;
    clearInterval(this.timer_id);
  }
  

  ngOnInit(): void {
  }

  /**On every change in start/stop button, the timer will be run. */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['switchStatus']?.currentValue !== changes['switchStatus']?.previousValue &&
        !changes['switchStatus']?.isFirstChange()) {
      this.startStop();
    } else if (changes['reset']?.currentValue !== changes['reset']?.previousValue) {
      this.resetTimer();
    }
  }
}
