import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss'],
})
export class Route6Component implements OnInit {
  count = 0;
  element: HTMLElement | null | undefined;
  
  constructor() {}
  
  ngOnInit(): void {
    let ele = document.getElementById('container');
    this.element = ele;
    if (this.element) {
      this.loadMore();
    }
  }

  loadMore() {
    for (let i = 0; i < 20; i++) {
      ++this.count;
      let item = document.createElement('div');
      item.id = `${this.count}`;
      item.style.border = '1px solid black';
      item.style.height = '200px';
      item.style.width = '200px';
      item.addEventListener("click", () => {
        switch (item.id) {
          case '1':
            alert(`${item.id}st div clicked!`);
            break;
          case '2':
            alert(`${item.id}nd div clicked!`);
            break;
          case '3':
            alert(`${item.id}rd div clicked!`);
            break;
          default:
            alert(`${item.id}th div clicked!`);
            break;
        }
      })
      this.element?.appendChild(item);
    }
  }

  onScroll() {
    /**
     * ScrollTop: How many pixels can be scrolled.
     * clientHeight: Viewable height of the element at any given point of time.
     * scrollHeight: Total height of the element inclusive of padding.
     */
    if (
      this.element &&
      (this.element?.scrollTop + this.element?.clientHeight >=
        this.element?.scrollHeight
        )) {
      this.loadMore();
    }
  }
}
