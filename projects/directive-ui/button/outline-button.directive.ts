import { Directive, effect, HostBinding, input } from "@angular/core";
import { BaseButtonDirective, ButtonColor } from "./base-button.directive";

@Directive({
    selector: 'button[dui-outline-button]',
    standalone: true,
})
export class OutlineButtonDirective {
   @HostBinding('class.dui-outline-button') duiOutlineBtnClass = true;
   @HostBinding('class') className = "";

    color = input<ButtonColor>('primary');
    _ = effect(() => {
        this.className = `dui-outline-button-${this.color()}`;
    })
}