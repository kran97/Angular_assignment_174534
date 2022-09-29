import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enter-timer',
  templateUrl: './enter-timer.component.html',
  styleUrls: ['./enter-timer.component.scss']
})
export class EnterTimerComponent implements OnInit, OnChanges {

  @Input() currentPauseTime: number = 0;
  @Output() timerEmitter = new EventEmitter<number>();
  @Output() startStopSwitch = new EventEmitter<string>();
  @Output() reset = new EventEmitter();

  pauseTimes: Array<number> = [];

  switch = 'stop';

  myTimer = new FormGroup({
    timer: new FormControl(null)
  });
  constructor() { }

  ngOnInit(): void {
  }

  submitTimer(timerValue: any) {
    this.timerEmitter.emit(Number(timerValue.timer));
    this.myTimer.controls['timer'].setValue(null);
  }
  startStop() {
    if (this.switch === 'start') {
      this.startStopSwitch.emit('stop');
      this.switch = 'stop';
    } else {
      this.startStopSwitch.emit('start');
      this.switch = 'start';
    }
    this.myTimer.controls['timer'].disable();
  }
  onReset() {
    this.reset.emit();
    this.pauseTimes = [];
    this.myTimer.controls['timer'].enable();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentPauseTime'].currentValue !== changes['currentPauseTime'].previousValue &&
    changes['currentPauseTime'].currentValue !== 0) {
      this.pauseTimes.push(changes['currentPauseTime'].currentValue);
    }
  }
}
