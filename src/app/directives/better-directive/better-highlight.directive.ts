import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'green';

  @HostBinding('style.backgroundColor') backgroundColor?: string;
  @HostBinding('style.color') fontColor?: string;
  @HostBinding('class.open') isTrue = false;


  @HostListener('mouseenter') mouseHover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cyan');
    // this.backgroundColor = 'green';
    this.backgroundColor = this.highlightColor;
    this.fontColor = 'white';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
    this.fontColor = 'black';
  }

  @HostListener('document:click') applyBorder() {
    this.isTrue = !this.isTrue;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

}
