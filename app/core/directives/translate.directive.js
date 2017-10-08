System.register(['@angular/core', 'app/core/services/localize.service'], function(exports_1, context_1) {
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
    var core_1, localize_service_1;
    var TranslateDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (localize_service_1_1) {
                localize_service_1 = localize_service_1_1;
            }],
        execute: function() {
            TranslateDirective = (function () {
                function TranslateDirective(el, renderer, service) {
                    this.el = el;
                    this.renderer = renderer;
                    this.service = service;
                    //renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
                }
                Object.defineProperty(TranslateDirective.prototype, "translate", {
                    set: function (value) {
                        this.updateText(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                TranslateDirective.prototype.updateText = function (token) {
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
                        }
                        ;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], TranslateDirective.prototype, "translate", null);
                TranslateDirective = __decorate([
                    core_1.Directive({
                        selector: '[myLocalize]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, (typeof (_a = typeof localize_service_1.LocalizeService !== 'undefined' && localize_service_1.LocalizeService) === 'function' && _a) || Object])
                ], TranslateDirective);
                return TranslateDirective;
                var _a;
            }());
            exports_1("TranslateDirective", TranslateDirective);
        }
    }
});
//# sourceMappingURL=translate.directive.js.map