import { Directive, effect, HostBinding, HostListener, input } from "@angular/core";

export type ButtonColor = 'primary' | 'secondary' | 'danger' | 'success' | 'cancel';

@Directive({
    standalone: true,
})
export class BaseButtonDirective {

    @HostBinding('class') className: string = 'dui-button';
    @HostBinding('style.cursor') cursor = 'pointer';
    @HostBinding('style.background-color') bgColor = "var(--dui-button-bg-primary-default)";
    @HostBinding('style.color') fontColor = "var(--dui-button-text-primary-default)";
    @HostBinding('style.outline') outline = 'none';

    @HostListener('mouseenter') mouseEnter = () => this.onMouseEnter();
    @HostListener('mouseleave') mouseLeave = () => this.onMouseLeave();
    @HostListener('mousedown') mouseDown = () => this.onMouseDown();
    @HostListener('mouseup') mouseUp = () => this.onMouseUp();
    @HostListener('focus') focus = () => this.onFocus();
    @HostListener('blur') blur = () => this.onBlur();

    


    color = input<ButtonColor>('primary');
    _ = effect(() => {
        this.bgColor = `var(--dui-button-bg-${this.color()}-default)`;
        this.fontColor = `var(--dui-button-text-${this.color()}-default)`;
    })

    onMouseEnter() {
        this.bgColor = `var(--dui-button-bg-${this.color()}-hover)`;
    }

    onMouseLeave() {
        this.bgColor = `var(--dui-button-bg-${this.color()}-default)`;
    }

    onMouseDown() {
        this.bgColor = `var(--dui-button-bg-${this.color()}-active)`;
    }

    onMouseUp() {
        this.bgColor = `var(--dui-button-bg-${this.color()}-default)`;
    }

    onFocus() {
        this.bgColor = `var(--dui-button-bg-${this.color()}-focused)`;
    }

    onBlur() {
        this.bgColor = `var(--dui-button-bg-${this.color()}-default)`;
    }

}