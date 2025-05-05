import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: 'img[dui-card-avatar]'
})
export class CardAvatarDirective {
    @HostBinding('class.dui-card-avatar') duiCardAvatarClass = true;
}