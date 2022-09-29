import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Route4serviceService } from '../../service/route4service.service';

@Component({
  selector: 'app-enter-timer',
  templateUrl: './enter-timer.component.html',
  styleUrls: ['./enter-timer.component.scss']
})
export class EnterTimerComponent implements OnInit, OnDestroy {

  myTimer = new FormGroup({
    timer: new FormControl(null)
  });
  switch = 'stop';
  pauseTimes: Array<number> = [];
  subscriptions: Array<Subscription> = [];

  constructor(private r4Service: Route4serviceService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.r4Service.currentTime.subscribe((time) => {
      if (time !== 0) {
        this.pauseTimes.push(time);
      }
    }));
  }

  submitTimer(timerValue: any) {
    this.r4Service.timerEntered.next(Number(timerValue.timer));
  }
  startStop() {
    if (this.switch === 'start') {
      this.r4Service.switchStatus.next('stop');
      this.switch = 'stop';
    } else {
      this.r4Service.switchStatus.next('start');
      this.switch = 'start';
    }
    this.myTimer.controls['timer'].disable();
  }
  onReset() {
    this.r4Service.reset.next();
    this.pauseTimes = [];
    this.myTimer.controls['timer'].enable();
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
