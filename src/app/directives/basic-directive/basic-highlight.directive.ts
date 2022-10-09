import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
  exportAs: 'appBasic'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  onClickAction() {
    alert('ExportAs Working!!!');
  }

}
