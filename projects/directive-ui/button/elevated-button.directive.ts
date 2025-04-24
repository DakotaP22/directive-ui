import { Directive, effect, HostBinding, input } from "@angular/core";
import { SurfaceDirective } from "../elevation/surface.directive";
import { ButtonColor } from "./ButtonColor";


@Directive({
    standalone: true,
    selector: "button[dui-elevated-button]",
    hostDirectives: [
        {
            directive: SurfaceDirective,
            inputs: ["level"]
        },
    ],
})
export class ElevatedButtonDirective {
    @HostBinding('class.dui-elevated-button') mainClass = true;
    @HostBinding('class') colorClass = "";

    color = input<ButtonColor>('primary');
    _ = effect(() => {
        this.colorClass = `dui-elevated-button-${this.color()}`;
    })
}