import { Directive, effect, HostBinding, input } from "@angular/core";
import { TextSize } from "./TextSize";

@Directive({
    selector: 'h1[dui-title], h2[dui-title], h3[dui-title], h4[dui-title], h5[dui-title], h6[dui-title]',
})
export class TitleDirective {
    @HostBinding('class') classNames = "dui-text-title";
    @HostBinding('style.margin-top') marginTop = "0=var(--dui-text-title-margin-top, 0px)";
    @HostBinding('style.margin-bottom') marginBottom = "0=var(--dui-text-title-margin-bottom, 0px)";

    size = input<TextSize>('md');
    _ = effect(() => {
        const size = this.size();

        let classes = "dui-text-title";
        switch(size) {
            case 'xs':
                classes += " dui-text-title-xs";
                break;
            case 'sm':
                classes += " dui-text-title-sm";
                break;
            case 'md':
                classes += " dui-text-title-md";
                break;
            case 'lg':
                classes += " dui-text-title-lg";
                break;
        }
        this.classNames = classes;
        console.log(this.classNames)
    })
}