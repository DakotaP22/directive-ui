import { Directive, effect, ElementRef, HostBinding, inject, input } from "@angular/core";

@Directive({
    selector: '[dui-tooltip]',
    standalone: true,
})
export class TooltipDirective {
    private readonly tooltip: HTMLElement = inject(ElementRef).nativeElement;
    private readonly parentElement: HTMLElement | null = this.tooltip.parentElement;

    @HostBinding('class.dui-tooltip') duiTooltipClass = true;
    @HostBinding('class.dui-tooltip-hidden') isHidden = true;
    @HostBinding('class.dui-tooltip-visible') isVisible = false;

    id = input<string>('dui-tooltip-' + crypto.randomUUID());

    constructor() {
        effect(() => {
            const id = this.id();
            if (this.parentElement) {
                this.parentElement.setAttribute('aria-describedby', id);
            }
            this.tooltip.setAttribute('id', id);
        })


        this.parentElement?.attributeStyleMap.set('position', 'relative');

        this.parentElement?.addEventListener('mouseover', () => {
            this.isHidden = false;
            this.isVisible = true;
        })

        this.parentElement?.addEventListener('mouseout', () => {
            this.isHidden = true;
            this.isVisible = false;
        })

    }

}