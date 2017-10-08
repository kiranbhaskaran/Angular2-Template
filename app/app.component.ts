import {Component, OnInit} from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {ContextService} from './core/services/context.service';
import {LoggerService} from './core/services/logger.service';
import {LocalizeService} from "./core/services/localize.service";

@Component({
    selector: 'ci-app',
    template: `
<div>
<nav class='navbar navbar-default'>
<div class='container-fluid'>
<a class='navbar-brand'>{{pageTitle}}</a>
<ul class='nav navbar-nav'>
<li><a [routerLink]="['/welcome']">Home</a></li>
<li><a [routerLink]="['/products']">Product List</a></li>
</ul>
</div>
</nav>
<div class='container'>

<router-outlet></router-outlet>
</div>
</div>
`
})
export class AppComponent implements OnInit {
    pageTitle: string = 'Car Inventory';
    public translatedText: string;
    public supportedLanguages: any[];


    constructor(private _cookieService: CookieService, private _loggerService: LoggerService, private _contextService: ContextService, private _localizeService: LocalizeService) {

      _localizeService.setLanguage('it');
    }

    ngOnInit(): void {
        console.log("In OnInit");

        // standing data
        this.supportedLanguages = [
            { display: 'English', value: 'en' },
            { display: 'Español', value: 'it' },
            { display: '华语', value: 'zh' },
        ];

        
        this._contextService.setValue('one', 'hello world');
        if (this._cookieService.get('APIAccessToken'))
        {
            //cookie exists, so it is a valid session
            //alert('Cookie is available')
            this._loggerService.log('Cookie is available');
        }
        else {
            //cookie does not exist, so not a valid session.
            //redirect back to portal login screen for user to authenticate.
            //alert('No Cookie')
            this._loggerService.log('Cookie is not available');
        }
    }    

}
