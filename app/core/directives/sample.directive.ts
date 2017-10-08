import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[Red]'
})
export class RedDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.color = 'red';
    }
}