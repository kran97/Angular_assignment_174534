import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {
  isGrid = true;
  items: Array<any> = [];
  filter = new FormGroup({
    price: new FormControl(null)
  });
  subscription: Subscription = new Subscription;

  constructor(private service: DataServiceService) { }

  ngOnInit(): void {
    this.subscription = this.service.getEcommData().subscribe((res) => {
      this.items = Object.values(res);
    })
  }

  listView() {
    this.isGrid = false;
  }
  gridView() {
    this.isGrid = true;
  }

  onSubmit(value: any) {
    if (value.price === '1') {
      this.items.sort((a, b) => a.price - b.price);
    } else if (value.price === '2') {
      this.items.sort((a, b) => b.price - a.price);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
