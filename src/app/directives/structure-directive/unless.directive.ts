import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  
  // Both the ways will work i.e. line 8 and 9.
  //@Input('appUnless') set unless(condition: boolean) {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.tempRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
