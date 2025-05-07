import { NgModule } from "@angular/core";
import { ElevatedButtonDirective } from "./elevated-button.directive";
import { OutlineButtonDirective } from "./outline-button.directive";
import { TextButtonDirective } from "./text-button.directive";

@NgModule({
    declarations: [ElevatedButtonDirective, OutlineButtonDirective, TextButtonDirective],
    exports: [ElevatedButtonDirective, OutlineButtonDirective, TextButtonDirective],
})
export class DuiButtonModule {}