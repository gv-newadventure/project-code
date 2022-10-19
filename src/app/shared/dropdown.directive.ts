import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;


  ngOnInit() {
    this.isOpen = false;
  }
  @HostListener('click') toggleOpen(eventData: Event) {

  this.isOpen = !this.isOpen;
  }

}
