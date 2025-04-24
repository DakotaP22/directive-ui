import { Directive, effect, HostBinding, input } from "@angular/core";
import { TextSize } from "./TextSize";

@Directive({
    selector: 'p[dui-caption]',
})
export class CaptionDirective {
    @HostBinding('class') classNames = "dui-text-caption";
    @HostBinding('style.margin-top') marginTop = "0=var(--dui-text-caption-margin-top, 0px)";
    @HostBinding('style.margin-bottom') marginBottom = "0=var(--dui-text-caption-margin-bottom, 0px)";

    size = input<TextSize>('md');
    _ = effect(() => {
        const size = this.size();

        let classes = "dui-text-caption";
        switch(size) {
            case 'xs':
                classes += " dui-text-caption-xs";
                break;
            case 'sm':
                classes += " dui-text-caption-sm";
                break;
            case 'md':
                classes += " dui-text-caption-md";
                break;
            case 'lg':
                classes += " dui-text-caption-lg";
                break;
        }
        this.classNames = classes;
        console.log(this.classNames)
    })
}