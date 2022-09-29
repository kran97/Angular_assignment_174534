import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route4serviceService } from '../../service/route4service.service';

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent implements OnInit, OnDestroy {

  date = new Date();
  statusData: Array<any> = [];
  subscriptions: Array<Subscription> = [];
  
  constructor(private r4Service: Route4serviceService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.r4Service.switchStatus.subscribe((startStopStatus) => {
      this.date = new Date();
      let obj = {
        status: startStopStatus,
        time: this.date.toLocaleDateString() + " " + this.date.toLocaleTimeString()
      };
      this.statusData.push(obj);
    }));
    this.subscriptions.push(this.r4Service.reset.subscribe(() => {
      this.statusData = [];
    }));
  }
  
  ngOnDestroy(): void {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
