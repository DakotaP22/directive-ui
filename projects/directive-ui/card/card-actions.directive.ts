import { Directive, effect, HostBinding, input } from "@angular/core";

@Directive({
    selector: 'div[dui-card-actions]'
})
export class CardActionsDirective {
    @HostBinding('class.dui-card-actions') duiCardActions = true;
    @HostBinding('style.justify-content') justifyContentStyle = 'right';

    align = input<'left' | 'right' | 'center'>('right');
    _ = effect(() => {
        this.justifyContentStyle = this.align();
    })
}