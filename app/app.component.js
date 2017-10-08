System.register(["@angular/core", "angular2-cookie/services/cookies.service", "./core/services/context.service", "./core/services/logger.service", "./core/services/localize.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, cookies_service_1, context_service_1, logger_service_1, localize_service_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cookies_service_1_1) {
                cookies_service_1 = cookies_service_1_1;
            },
            function (context_service_1_1) {
                context_service_1 = context_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (localize_service_1_1) {
                localize_service_1 = localize_service_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(_cookieService, _loggerService, _contextService, _localizeService) {
                    this._cookieService = _cookieService;
                    this._loggerService = _loggerService;
                    this._contextService = _contextService;
                    this._localizeService = _localizeService;
                    this.pageTitle = 'Car Inventory';
                    _localizeService.setLanguage('it');
                }
                AppComponent.prototype.ngOnInit = function () {
                    console.log("In OnInit");
                    // standing data
                    this.supportedLanguages = [
                        { display: 'English', value: 'en' },
                        { display: 'Español', value: 'it' },
                        { display: '华语', value: 'zh' },
                    ];
                    this._contextService.setValue('one', 'hello world');
                    if (this._cookieService.get('APIAccessToken')) {
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
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'ci-app',
                    template: "\n<div>\n<nav class='navbar navbar-default'>\n<div class='container-fluid'>\n<a class='navbar-brand'>{{pageTitle}}</a>\n<ul class='nav navbar-nav'>\n<li><a [routerLink]=\"['/welcome']\">Home</a></li>\n<li><a [routerLink]=\"['/products']\">Product List</a></li>\n</ul>\n</div>\n</nav>\n<div class='container'>\n\n<router-outlet></router-outlet>\n</div>\n</div>\n"
                }),
                __metadata("design:paramtypes", [cookies_service_1.CookieService, logger_service_1.LoggerService, context_service_1.ContextService, localize_service_1.LocalizeService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map