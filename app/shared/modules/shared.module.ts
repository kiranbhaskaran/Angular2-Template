import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
//import {LocalizeService} from 'app/shared/directives/localize.service';
//import {TranslateDirective} from 'app/shared/directives/translate.directive';
//import {Cookie} from 'ng2-cookies/ng2-cookies';
import {StarComponent} from 'app/shared/directives/star.component';
import {TranslateDirective} from 'app/core/directives/translate.directive';
import {RedDirective} from 'app/core/directives/sample.directive';
import {CustomCounterComponent} from 'app/shared/directives/customCounter.component';


@NgModule({
 
    declarations: [StarComponent,TranslateDirective, RedDirective,CustomCounterComponent],
    imports: [CommonModule],
    exports: [CommonModule, FormsModule, StarComponent, TranslateDirective, RedDirective, CustomCounterComponent]
    //providers:[LocalizeService]

})
export class SharedModule {

} 