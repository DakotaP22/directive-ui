import { style } from "@angular/animations";
import { Directive, HostBinding, input } from "@angular/core";

@Directive({
    selector: "button[dui-elevated-button]"
})
export class ElevatedButtonDirective {

    @HostBinding("style") style = {
        "background-color": "black",
        "color": "white",
        "border": "10px solid blue",
    }

    test = input<string>();
}