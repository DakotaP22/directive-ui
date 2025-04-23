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
    @HostBinding('style.border-color') borderColor = 'var(--dui-button-border-color-primary-default)';
    @HostBinding('style.border-width') borderWidth = '0px';

    @HostListener('mouseenter') mouseEnter = () => this.onMouseEnter();
    @HostListener('mouseleave') mouseLeave = () => this.onMouseLeave();
    @HostListener('mousedown') mouseDown = () => this.onMouseDown();
    @HostListener('mouseup') mouseUp = () => this.onMouseUp();
    @HostListener('focus') focus = () => this.onFocus();
    @HostListener('blur') blur = () => this.onBlur();

    


    color = input<ButtonColor>('primary');
    _ = effect(() => {
        this.setStylesForState(this.color(), 'default');
    })

    private onMouseEnter() {
        this.setStylesForState(this.color(), 'hover');
    }

    private onMouseLeave() {
        this.setStylesForState(this.color(), 'default');
    }

    private onMouseDown() {
        this.setStylesForState(this.color(), 'active');
    }

    private onMouseUp() {
        this.setStylesForState(this.color(), 'hover');
    }

    private onFocus() {
        this.setStylesForState(this.color(), 'focused');
    }

    private onBlur() {
       this.setStylesForState(this.color(), 'default');
    }

    private setStylesForState(color: ButtonColor, state: 'default' | 'hover' | 'active' | 'focused') {
        this.bgColor = `var(--dui-button-bg-${color}-${state})`;
        this.fontColor = `var(--dui-button-text-${color}-${state})`;
        this.borderColor = `var(--dui-button-border-color-${color}-${state})`;
    }
}