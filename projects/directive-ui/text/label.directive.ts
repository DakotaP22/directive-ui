import { Directive, effect, HostBinding, input } from "@angular/core";
import { TextSize } from "./TextSize";

@Directive({
    selector: 'label[dui-label]',
})
export class LabelDirective {
    @HostBinding('class') classNames = "dui-text-label";
    @HostBinding('style.margin-top') marginTop = "0=var(--dui-text-label-margin-top, 0px)";
    @HostBinding('style.margin-bottom') marginBottom = "0=var(--dui-text-label-margin-bottom, 0px)";

    size = input<TextSize>('md');
    _ = effect(() => {
        const size = this.size();

        let classes = "dui-text-label";
        switch(size) {
            case 'xs':
                classes += " dui-text-label-xs";
                break;
            case 'sm':
                classes += " dui-text-label-sm";
                break;
            case 'md':
                classes += " dui-text-label-md";
                break;
            case 'lg':
                classes += " dui-text-label-lg";
                break;
        }
        this.classNames = classes;
        console.log(this.classNames)
    })
}