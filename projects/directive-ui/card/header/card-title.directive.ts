import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: 'h1[dui-card-title], h2[dui-card-title], h3[dui-card-title], h4[dui-card-title], h5[dui-card-title], h6[dui-card-title]',
})
export class CardTitleDirective {

    @HostBinding('class.dui-card-title') duiCardTitleClass = true;
    
}