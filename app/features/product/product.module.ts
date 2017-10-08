import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {ProductionRoutingModule} from 'app/features/product/production-routing.module';



import {ProductListComponent} from 'app/features/product/product-list.component';
import {ProductDetailComponent} from 'app/features/product/product-detail.component';
import {ProductFilterPipe} from 'app/features/product/product-filter.pipe';
//import {StarComponent} from 'app/shared/star.component';

import {ProductService} from 'app/features/product/product.service';
//import {HttpUtilityService} from 'app/shared/services/http-utility.service';
import {ProductDetailGuard} from 'app/features/product/product-guard.service';
import {SharedModule} from 'app/shared/modules/shared.module';

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

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
        
    ],
    imports: [
        //FormsModule,
       //CommonModule,
        //RouterModule.forChild(productRoutes),
        ProductionRoutingModule,
        SharedModule
    ],
    providers: [
        ProductService,
        //HttpUtilityService,
        ProductDetailGuard
    ]
})
export class ProductModule {

}