import { NgModule } from "@angular/core";
import { BodyDirective } from "./body.directive";
import { TitleDirective } from "./title.directive";
import { CaptionDirective } from "./caption.directive";
import { LabelDirective } from "./label.directive";

@NgModule({
    declarations: [TitleDirective, BodyDirective, CaptionDirective, LabelDirective],
    exports: [TitleDirective, BodyDirective, CaptionDirective, LabelDirective],
})
export class DuiTextModule {}