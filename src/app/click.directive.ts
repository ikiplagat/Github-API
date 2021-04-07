import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]',
})
export class ClickDirective {
  constructor(private elem: ElementRef) {}
  @HostListener('click') onClicks() {
    this.text('#000');
  }

  private text(action: string) {
    this.elem.nativeElement.style.color = action;
  }
}
