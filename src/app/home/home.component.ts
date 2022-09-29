import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  boolValue = true;

  constructor() { }

  ngOnInit(): void {
  }

  switchBoolean() {
    this.boolValue = !this.boolValue;
  }

}
