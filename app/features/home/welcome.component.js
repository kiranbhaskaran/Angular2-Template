System.register(['@angular/core', "app/core/services/localize.service", 'app/core/services/context.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, localize_service_1, context_service_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (localize_service_1_1) {
                localize_service_1 = localize_service_1_1;
            },
            function (context_service_1_1) {
                context_service_1 = context_service_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                //@Input() set resourceLoaded(val:boolean) {
                //    this.isresourceLoaded = false;
                //    this.resourceLoadedChange.emit(this.isresourceLoaded);
                //}
                //@Output() resourceLoadedChange = new EventEmitter();
                function WelcomeComponent(_localizeService, _contextService) {
                    this._localizeService = _localizeService;
                    this._contextService = _contextService;
                    this.pageTitle = "Welcome Page";
                    this.isresourceLoaded = this._contextService.getValue('LocalizationResourceLoaded') ? true : false;
                }
                WelcomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._localizeService.resourceLoaded().subscribe(function (e) {
                        _this.isresourceLoaded = true;
                        _this._contextService.setValue('LocalizationResourceLoaded', _this.isresourceLoaded);
                        //this.resourceLoadedChange.emit(this.isresourceLoaded);
                    });
                };
                WelcomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/features/home/welcome.component.html'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof localize_service_1.LocalizeService !== 'undefined' && localize_service_1.LocalizeService) === 'function' && _a) || Object, (typeof (_b = typeof context_service_1.ContextService !== 'undefined' && context_service_1.ContextService) === 'function' && _b) || Object])
                ], WelcomeComponent);
                return WelcomeComponent;
                var _a, _b;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//# sourceMappingURL=welcome.component.js.map