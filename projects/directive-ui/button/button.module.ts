import { NgModule } from "@angular/core";
import { ElevatedButtonDirective } from "./elevated-button.directive";
import { OutlineButtonDirective } from "./outline-button.directive";

@NgModule({
    declarations: [ElevatedButtonDirective, OutlineButtonDirective],
    exports: [ElevatedButtonDirective, OutlineButtonDirective],
})
export class DuiButtonModule {}