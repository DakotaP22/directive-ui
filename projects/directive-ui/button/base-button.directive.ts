import { Directive, effect, HostBinding, HostListener, input } from "@angular/core";

export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'success' | 'cancel';

@Directive({
    standalone: true,
})
export class BaseButtonDirective {

    @HostBinding('class') className: string = 'dui-button';

    @HostBinding('style.background-color') bgColor = "var(--dui-button-bg-primary-default)";
    @HostListener('onmouseenter') onMouseEnter = () => this.bgColor = `var(--dui-button-bg-${this.color()}-hover)`;
    @HostListener('onmouseleave') onMouseLeave = () => this.bgColor = `var(--dui-button-bg-${this.color()}-default)`;
    
    @HostBinding('style.color') fontColor = "var(--dui-button-text-primary-default)";


    color = input<ButtonColor>('primary');
    _ = effect(() => {
        console.log(this.color());
        this.bgColor = `var(--dui-button-bg-${this.color()}-default)`;
        this.fontColor = `var(--dui-button-text-${this.color()}-default)`;
    })
}