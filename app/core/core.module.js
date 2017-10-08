System.register(['@angular/core', 'app/core/services/http-utility.service', 'app/core/services/logger.service', 'app/core/services/context.service', 'app/core/services/localize.service', 'app/core/services/helper.service'], function(exports_1, context_1) {
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
    var core_1, http_utility_service_1, logger_service_1, context_service_1, localize_service_1, helper_service_1;
    var CoreModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_utility_service_1_1) {
                http_utility_service_1 = http_utility_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (context_service_1_1) {
                context_service_1 = context_service_1_1;
            },
            function (localize_service_1_1) {
                localize_service_1 = localize_service_1_1;
            },
            function (helper_service_1_1) {
                helper_service_1 = helper_service_1_1;
            }],
        execute: function() {
            //Core module for application wide singletons.
            CoreModule = (function () {
                function CoreModule() {
                }
                CoreModule = __decorate([
                    core_1.NgModule({
                        providers: [http_utility_service_1.HttpUtilityService, logger_service_1.LoggerService, context_service_1.ContextService, localize_service_1.LocalizeService, helper_service_1.HelperService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CoreModule);
                return CoreModule;
            }());
            exports_1("CoreModule", CoreModule);
        }
    }
});
//# sourceMappingURL=core.module.js.map