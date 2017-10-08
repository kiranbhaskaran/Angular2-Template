System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var CustomCounterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CustomCounterComponent = (function () {
                function CustomCounterComponent() {
                    //@Input() counterNumber: number = 0;
                    this.counter = 0;
                    this.counterNumberChange = new core_1.EventEmitter();
                }
                Object.defineProperty(CustomCounterComponent.prototype, "counterNumber", {
                    set: function (val) {
                        this.counter = val;
                        this.counterNumberChange.emit(this.counter);
                    },
                    enumerable: true,
                    configurable: true
                });
                CustomCounterComponent.prototype.decrement = function () {
                    this.counter--;
                    this.counterNumberChange.emit(this.counter);
                };
                CustomCounterComponent.prototype.increment = function () {
                    this.counter++;
                    this.counterNumberChange.emit(this.counter);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CustomCounterComponent.prototype, "counterNumberChange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], CustomCounterComponent.prototype, "counterNumber", null);
                CustomCounterComponent = __decorate([
                    core_1.Component({
                        selector: 'custom-counter',
                        template: "\n<button (click)=\"decrement()\">-</button>\n<span>{{counter}}</span>\n<button (click)=\"increment()\">+</button>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomCounterComponent);
                return CustomCounterComponent;
            }());
            exports_1("CustomCounterComponent", CustomCounterComponent);
        }
    }
});
//# sourceMappingURL=customCounter.component.js.map