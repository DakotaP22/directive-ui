import { Directive, HostBinding } from "@angular/core";
import { SurfaceDirective } from "../elevation/surface.directive";
import { BaseButtonDirective } from "./base-button.directive";


@Directive({
    standalone: true,
    selector: "button[dui-elevated-button]",
    hostDirectives: [
        {
            directive: SurfaceDirective,
            inputs: ["level"]
        },
        {
            directive: BaseButtonDirective,
            inputs: ["color"]
        }
    ],
})
export class ElevatedButtonDirective {
    @HostBinding("style") style = {
        "font-size": "var(--dui-elevated-button-font-size, 1rem)",
        "padding-inline": "var(--dui-elevated-button-padding-inline, 1rem)",
        "padding-block": "var(--dui-elevated-button-padding-block, 0.5rem)",
        "border-radius": "var(--dui-elevated-button-border-radius, 0.35rem)",
    }
}