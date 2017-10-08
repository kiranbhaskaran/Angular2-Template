System.register(['@angular/core', 'app/features/product/product.service', 'angular2-cookie/services/cookies.service', 'app/core/services/http-utility.service', 'app/core/services/context.service'], function(exports_1, context_1) {
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
    var core_1, product_service_1, cookies_service_1, http_utility_service_1, context_service_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (cookies_service_1_1) {
                cookies_service_1 = cookies_service_1_1;
            },
            function (http_utility_service_1_1) {
                http_utility_service_1 = http_utility_service_1_1;
            },
            function (context_service_1_1) {
                context_service_1 = context_service_1_1;
            }],
        execute: function() {
            //import {LocalizeService} from "app/core/services/localize.service";
            //import {TranslateDirective} from 'app/shared/directives/translate.directive';
            //import {LocalizeService} from "app/core/services/localize.service";
            //import {TranslateDirective} from 'app/core/directives/translate.directive';
            ProductListComponent = (function () {
                function ProductListComponent(_productService, _cookieService, _httpUtility, _contextService) {
                    this._productService = _productService;
                    this._cookieService = _cookieService;
                    this._httpUtility = _httpUtility;
                    this._contextService = _contextService;
                    this.pageTitle = "Product List";
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                    this.listFilter = "Audi";
                    this.counterValue = 5;
                    this._productUrl = "http://localhost:3000/app/features/product/product-data.json";
                }
                ProductListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("In OnInit");
                    this._httpUtility.httpGet(this._productUrl)
                        .map(function (result) { return result; })
                        .subscribe(function (products) { return _this.products = products; });
                    //.do(data => console.log('All: ' + JSON.stringify(data)));              
                    //alert(this._contextService.getValue('one'));
                };
                ProductListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                ProductListComponent.prototype.onRatingClicked = function (message) {
                    this.pageTitle = 'Product List: ' + message;
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/features/product/product-list.component.html',
                        styleUrls: ['app/features/product/product-list.component.css']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof product_service_1.ProductService !== 'undefined' && product_service_1.ProductService) === 'function' && _a) || Object, cookies_service_1.CookieService, (typeof (_b = typeof http_utility_service_1.HttpUtilityService !== 'undefined' && http_utility_service_1.HttpUtilityService) === 'function' && _b) || Object, (typeof (_c = typeof context_service_1.ContextService !== 'undefined' && context_service_1.ContextService) === 'function' && _c) || Object])
                ], ProductListComponent);
                return ProductListComponent;
                var _a, _b, _c;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map