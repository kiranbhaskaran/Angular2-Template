System.register(['@angular/core', 'app/features/product/production-routing.module', 'app/features/product/product-list.component', 'app/features/product/product-detail.component', 'app/features/product/product-filter.pipe', 'app/features/product/product.service', 'app/features/product/product-guard.service', 'app/shared/modules/shared.module'], function(exports_1, context_1) {
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
    var core_1, production_routing_module_1, product_list_component_1, product_detail_component_1, product_filter_pipe_1, product_service_1, product_guard_service_1, shared_module_1;
    var ProductModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (production_routing_module_1_1) {
                production_routing_module_1 = production_routing_module_1_1;
            },
            function (product_list_component_1_1) {
                product_list_component_1 = product_list_component_1_1;
            },
            function (product_detail_component_1_1) {
                product_detail_component_1 = product_detail_component_1_1;
            },
            function (product_filter_pipe_1_1) {
                product_filter_pipe_1 = product_filter_pipe_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (product_guard_service_1_1) {
                product_guard_service_1 = product_guard_service_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            }],
        execute: function() {
            //export const productRoutes: Routes = [
            //    {
            //        path: 'products',
            //        component: ProductListComponent
            //    },
            //    {
            //        path: 'product/:id',
            //        canActivate: [ProductDetailGuard],
            //        component: ProductDetailComponent
            //    }  
            //];
            ProductModule = (function () {
                function ProductModule() {
                }
                ProductModule = __decorate([
                    core_1.NgModule({
                        declarations: [
                            product_list_component_1.ProductListComponent,
                            product_detail_component_1.ProductDetailComponent,
                            product_filter_pipe_1.ProductFilterPipe
                        ],
                        imports: [
                            //FormsModule,
                            //CommonModule,
                            //RouterModule.forChild(productRoutes),
                            production_routing_module_1.ProductionRoutingModule,
                            shared_module_1.SharedModule
                        ],
                        providers: [
                            product_service_1.ProductService,
                            //HttpUtilityService,
                            product_guard_service_1.ProductDetailGuard
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductModule);
                return ProductModule;
            }());
            exports_1("ProductModule", ProductModule);
        }
    }
});
//# sourceMappingURL=product.module.js.map