import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss']
})
export class Route3Component implements OnInit {

  timer: number = 0;
  switchStatus: string = 'stop';
  reset: boolean = false;
  currentPauseTime: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getTimer(timerValue: number) {
    this.timer = timerValue;
  }
  onOffSwitch(status: string) {
    this.switchStatus = status;
  }
  onReset() {
    this.reset = !this.reset;
  }
  pauseTime(time: number) {
    this.currentPauseTime = time;
  }
}
