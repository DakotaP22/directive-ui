import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: 'p[dui-card-subtitle]'
})
export class CardSubtitleDirective {
    @HostBinding('class.dui-card-subtitle') duiCardSubtitleClass = true;
}