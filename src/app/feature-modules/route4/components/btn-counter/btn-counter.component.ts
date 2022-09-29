import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route4serviceService } from '../../service/route4service.service';

@Component({
  selector: 'app-btn-counter',
  templateUrl: './btn-counter.component.html',
  styleUrls: ['./btn-counter.component.scss']
})
export class BtnCounterComponent implements OnInit, OnDestroy {

  start: number = 0;
  stop: number = 0;
  subscriptions: Array<Subscription> = [];

  constructor(private r4Service: Route4serviceService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.r4Service.switchStatus.subscribe((status) => {
      if (status === 'start') {
        this.start++;
      } else if (status === 'stop') {
        this.stop++;
      }
    }));
    this.subscriptions.push(this.r4Service.reset.subscribe(() => {
      this.start = this.stop = 0;
    }));
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

}
