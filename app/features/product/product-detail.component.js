System.register(['@angular/core', '@angular/router', 'app/features/product/product.service'], function(exports_1, context_1) {
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
    var core_1, router_1, product_service_1;
    var ProductDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            ProductDetailComponent = (function () {
                function ProductDetailComponent(_productService, route, router) {
                    this._productService = _productService;
                    this.route = route;
                    this.router = router;
                    this.pageTitle = "Car Detail";
                }
                ProductDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this.route.snapshot.params['id'];
                    this._productService.getProduct(id).subscribe(function (data) { return _this.product = data; });
                };
                ProductDetailComponent.prototype.onBack = function () {
                    this.router.navigate(['/products']);
                };
                ProductDetailComponent = __decorate([
                    core_1.Component({
                        //selector: 'ci-productDetail',
                        templateUrl: 'app/features/product/product-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof product_service_1.ProductService !== 'undefined' && product_service_1.ProductService) === 'function' && _a) || Object, router_1.ActivatedRoute, router_1.Router])
                ], ProductDetailComponent);
                return ProductDetailComponent;
                var _a;
            }());
            exports_1("ProductDetailComponent", ProductDetailComponent);
        }
    }
});
//# sourceMappingURL=product-detail.component.js.map