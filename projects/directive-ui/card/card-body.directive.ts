import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: 'div[dui-card-body]'
})
export class CardBodyDirective {
    @HostBinding('class.dui-card-body') duiCardBodyClass = true;
}