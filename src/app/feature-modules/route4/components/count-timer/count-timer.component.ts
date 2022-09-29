import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route4serviceService } from '../../service/route4service.service';

@Component({
  selector: 'app-count-timer',
  templateUrl: './count-timer.component.html',
  styleUrls: ['./count-timer.component.scss']
})
export class CountTimerComponent implements OnInit, OnDestroy {

  timer = 0;
  switchStatus = 'stop';
  timer_id: any;
  currentTime: number = 0;
  subscriptions: Array<Subscription> = [];

  constructor(private  r4Service: Route4serviceService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.r4Service.timerEntered.subscribe((timerValue) => {
      if (timerValue) {
        this.timer = timerValue;
      }
    }));
    this.subscriptions.push(this.r4Service.switchStatus.subscribe((startStopStatus) => {
      this.switchStatus = startStopStatus;
      this.startStop();
    }));
    this.subscriptions.push(this.r4Service.reset.subscribe(() => {
      this.resetTimer();
    }));
  }

  startStop() {
    if (this.switchStatus === 'start') {
      this.timer_id = setInterval(() => {
        if (this.timer) {
          this.timer--;
        }
      }, 1000);
    } else if (this.switchStatus === 'stop') {
      this.currentTime = this.timer;
      this.r4Service.currentTime.next(this.currentTime);
      clearInterval(this.timer_id);
    }
  }

  resetTimer() {
    this.timer = 0;
    clearInterval(this.timer_id);
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
