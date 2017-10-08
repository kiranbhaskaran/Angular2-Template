import { Directive, ElementRef, Input, Renderer} from '@angular/core';
import { LocalizeService } from 'app/core/services/localize.service';


@Directive({
    selector: '[myLocalize]'
    
})
export class TranslateDirective {
   
   @Input() set translate(value: string) {
        this.updateText(value);
    }

   constructor(private el: ElementRef, private renderer: Renderer, private service: LocalizeService ) {
        //renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }

    updateText(token) {
        var values = token.split('|');
        if (values.length <= 1) {
            // construct the tag to insert into the element
            var tag = this.service.getLocalizedString(values[0]);
            // update the element only if data was returned
            if ((tag !== null) && (tag !== undefined) && (tag !== '')) {
                if (values.length > 1) {
                    for (var index = 1; index < values.length; index++) {
                        var target = '{' + (index - 1) + '}';
                        tag = tag.replace(target, values[index]);
                    }
                }
                // insert the text into the element
                this.renderer.setText(this.el.nativeElement, tag);
            };
        }
    }

}
 