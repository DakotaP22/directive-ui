import { Directive, effect, HostBinding, input } from "@angular/core";
import { TextSize } from "./TextSize";

@Directive({
    selector: 'p[dui-body]',
})
export class BodyDirective {
    @HostBinding('class') classNames = "dui-text-body";
    @HostBinding('style.margin-top') marginTop = "0=var(--dui-text-body-margin-top, 0px)";
    @HostBinding('style.margin-bottom') marginBottom = "0=var(--dui-text-body-margin-bottom, 0px)";

    size = input<TextSize>('md');
    _ = effect(() => {
        const size = this.size();

        let classes = "dui-text-body";
        switch(size) {
            case 'xs':
                classes += " dui-text-body-xs";
                break;
            case 'sm':
                classes += " dui-text-body-sm";
                break;
            case 'md':
                classes += " dui-text-body-md";
                break;
            case 'lg':
                classes += " dui-text-body-lg";
                break;
        }
        this.classNames = classes;
        console.log(this.classNames)
    })
}