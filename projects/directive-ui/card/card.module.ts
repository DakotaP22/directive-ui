import { NgModule } from "@angular/core";
import { CardHeaderDirective } from "./header/card-header.directive";
import { CardDirective } from "./card.directive";
import { CardTitleDirective } from "./header/card-title.directive";
import { CardSubtitleDirective } from "./header/card-subtitle.directive";
import { CardAvatarDirective } from "./header/card-avatar.directive";
import { CardBodyDirective } from "./card-body.directive";
import { CardActionsDirective } from "./card-actions.directive";

@NgModule({
    declarations: [CardDirective, CardHeaderDirective, CardTitleDirective, CardSubtitleDirective, CardAvatarDirective, CardBodyDirective, CardActionsDirective],
    exports: [CardDirective, CardHeaderDirective, CardTitleDirective, CardSubtitleDirective, CardAvatarDirective, CardBodyDirective, CardActionsDirective]
})
export class CardModule { };