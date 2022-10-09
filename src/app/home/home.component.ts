import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  boolValue = true;

  items = [
    {
      id: 1,
      name: 'surf'
    },
    {
      id: 2,
      name: 'soap'
    },
    {
      id: 3,
      name: 'plate'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.items[1].name = 'powder';
    }, 3000)
  }

  switchBoolean() {
    this.boolValue = !this.boolValue;
  }

  identify(index: number, item: any) {
    return item ? item.name : undefined;
  }

}
