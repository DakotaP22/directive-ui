import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: 'div[dui-card-actions]'
})
export class CardActionsDirective {
    @HostBinding('class.dui-card-actions') duiCardActions = true;
}