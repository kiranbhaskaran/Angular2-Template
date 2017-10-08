System.register(['@angular/core', 'app/shared/utility/dictionary'], function(exports_1, context_1) {
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
    var core_1, dictionary_1;
    var ContextService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dictionary_1_1) {
                dictionary_1 = dictionary_1_1;
            }],
        execute: function() {
            //let _contextItems: Dictionary<string, string> = new Dictionary<string, string>();
            ContextService = (function () {
                function ContextService() {
                    this._contextItems = new dictionary_1.Dictionary();
                }
                ContextService.prototype.getValue = function (key) {
                    //alert(settings.BASE_API_URL);
                    var value = this._contextItems.getValue(key);
                    return value;
                };
                ContextService.prototype.setValue = function (key, value) {
                    //alert(settings.BASE_API_URL);
                    this._contextItems.add(key, value);
                };
                ContextService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContextService);
                return ContextService;
            }());
            exports_1("ContextService", ContextService);
        }
    }
});
//# sourceMappingURL=context.service.js.map