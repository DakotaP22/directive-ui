import { Directive, effect, HostBinding, input } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[duiSurface]',
    inputs: ['level'],
})
export class SurfaceDirective {

    ELEVATION_LEVELS = {
        1: "1px 2px 2px hsl(0deg 0% 0% / 0.25)",
        2: "1.5px 3px 3px hsl(0deg 0% 0% / 0.3)",
        3: "2px 4px 4px hsl(0deg 0% 0% / 0.35)",
        4: "2.5px 5px 5px hsl(0deg 0% 0% / 0.4)",
        5: "3px 6px 6px hsl(0deg 0% 0% / 0.45)",
    }

    @HostBinding('style') style = {
        "box-shadow": this.ELEVATION_LEVELS[1]
    }

    level = input<1 | 2 | 3 | 4 | 5>(1);

    constructor() {
        effect(() => {
            const level = this.level();
            this.style = {
                ...this.style,
                "box-shadow": this.ELEVATION_LEVELS[level]
            }
        })
    }



}