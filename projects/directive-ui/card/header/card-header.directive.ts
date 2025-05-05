import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: 'div[dui-card-header]'
})
export class CardHeaderDirective {
    @HostBinding('class.dui-card-header') duiCardHeaderClass = true;
}