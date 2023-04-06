import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen:boolean=false
  constructor(private elref: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpenClass(eventData: Event) {
    this.isOpen=!this.isOpen
  }

}
