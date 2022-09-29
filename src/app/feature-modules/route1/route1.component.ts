import { trigger, state, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss']
})
export class Route1Component implements OnInit {

  state = 'normal';

  constructor() { }

  ngOnInit(): void {
  }


}
