System.register(['@angular/core', '@angular/common', '@angular/forms', 'app/shared/directives/star.component', 'app/core/directives/translate.directive', 'app/core/directives/sample.directive', 'app/shared/directives/customCounter.component'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, star_component_1, translate_directive_1, sample_directive_1, customCounter_component_1;
    var SharedModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (translate_directive_1_1) {
                translate_directive_1 = translate_directive_1_1;
            },
            function (sample_directive_1_1) {
                sample_directive_1 = sample_directive_1_1;
            },
            function (customCounter_component_1_1) {
                customCounter_component_1 = customCounter_component_1_1;
            }],
        execute: function() {
            SharedModule = (function () {
                function SharedModule() {
                }
                SharedModule = __decorate([
                    core_1.NgModule({
                        declarations: [star_component_1.StarComponent, translate_directive_1.TranslateDirective, sample_directive_1.RedDirective, customCounter_component_1.CustomCounterComponent],
                        imports: [common_1.CommonModule],
                        exports: [common_1.CommonModule, forms_1.FormsModule, star_component_1.StarComponent, translate_directive_1.TranslateDirective, sample_directive_1.RedDirective, customCounter_component_1.CustomCounterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SharedModule);
                return SharedModule;
            }());
            exports_1("SharedModule", SharedModule);
        }
    }
});
//# sourceMappingURL=shared.module.js.map