import { Directive, effect, HostBinding, input } from "@angular/core";
import { ButtonColor } from "./ButtonColor";

@Directive({
    selector: 'button[dui-text-button]',
})
export class TextButtonDirective {
    @HostBinding('class.dui-text-button') duiTextButtonClass = true;
    @HostBinding('class') class = 'dui-text-button';

    color = input<ButtonColor>('primary');
    _ = effect(() => this.class = `dui-text-button dui-text-button-${this.color()}`);
}