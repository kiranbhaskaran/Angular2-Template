System.register(['@angular/core', '@angular/router', 'app/features/product/product-list.component', 'app/features/product/product-detail.component', 'app/features/product/product-guard.service'], function(exports_1, context_1) {
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
    var core_1, router_1, product_list_component_1, product_detail_component_1, product_guard_service_1;
    var productRoutes, ProductionRoutingModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            },
            function (product_guard_service_1_1) {
                product_guard_service_1 = product_guard_service_1_1;
            }],
        execute: function() {
            exports_1("productRoutes", productRoutes = [
                {
                    path: 'products',
                    component: product_list_component_1.ProductListComponent
                },
                {
                    path: 'product/:id',
                    canActivate: [product_guard_service_1.ProductDetailGuard],
                    component: product_detail_component_1.ProductDetailComponent
                }
            ]);
            ProductionRoutingModule = (function () {
                function ProductionRoutingModule() {
                }
                ProductionRoutingModule = __decorate([
                    core_1.NgModule({
                        imports: [router_1.RouterModule.forChild(productRoutes)],
                        exports: [router_1.RouterModule]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductionRoutingModule);
                return ProductionRoutingModule;
            }());
            exports_1("ProductionRoutingModule", ProductionRoutingModule);
        }
    }
});
//# sourceMappingURL=product-routing.module.js.map