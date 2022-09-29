import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Route4serviceService {

  constructor() { }

  timerEntered = new Subject<number>();
  switchStatus = new Subject<string>();
  reset = new Subject<void>();
  currentTime = new Subject<number>();
}
