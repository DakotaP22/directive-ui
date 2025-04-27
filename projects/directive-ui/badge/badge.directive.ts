import { afterNextRender, Directive, effect, ElementRef, HostBinding, inject, input, TemplateRef } from "@angular/core";

@Directive({
    selector: "span[dui-badge]",
    standalone: true,
})
export class BadgeDirective {
    @HostBinding("class") classNames = "dui-badge";

    elementRef = inject(ElementRef);

    id = input<string>(`dui-badge-${crypto.randomUUID()}`);
    size = input<'sm' | 'md' | 'lg'>('md');
    color = input<'primary' | 'secondary' | 'danger' | 'success' | 'info'>('primary');

    constructor() {
        afterNextRender(() => {
            const el: HTMLElement = this.elementRef.nativeElement;
            el.id = this.id();
            
            const parent = el.parentElement;
            parent?.attributeStyleMap.set("position", "relative");
        })

        effect(() => {
            this.elementRef.nativeElement.id = this.id();
        })

        effect(() => {
            const color = this.color();
            this.classNames = `${this.classNames} dui-badge-color-${color}`;
        })

        effect(() => {
            const size = this.size();
            this.classNames = `${this.classNames} dui-badge-${size}`;
    
            const el: HTMLElement = this.elementRef.nativeElement;
            if (el.innerText.length > 2) {
                this.classNames = `${this.classNames} dui-badge-long`;
            } else {
                this.classNames = `${this.classNames} dui-badge-short`;
            }
    
        })
    }
}

