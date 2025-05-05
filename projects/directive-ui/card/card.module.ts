import { NgModule } from "@angular/core";
import { CardHeaderDirective } from "./header/card-header.directive";
import { CardDirective } from "./card.directive";
import { CardTitleDirective } from "./header/card-title.directive";
import { CardSubtitleDirective } from "./header/card-subtitle.directive";
import { CardAvatarDirective } from "./header/card-avatar.directive";

@NgModule({
    declarations: [CardDirective, CardHeaderDirective, CardTitleDirective, CardSubtitleDirective, CardAvatarDirective],
    exports: [CardDirective, CardHeaderDirective, CardTitleDirective, CardSubtitleDirective, CardAvatarDirective]
})
export class CardModule { };