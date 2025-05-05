import { Directive, HostBinding } from "@angular/core";
import { SurfaceDirective } from "../elevation/surface.directive";

@Directive({
    selector: 'div[dui-card], span[dui-card]',
    hostDirectives: [SurfaceDirective],
    inputs: ['level']
})
export class CardDirective {
    @HostBinding('class.dui-card') duiCardClass = true;
}