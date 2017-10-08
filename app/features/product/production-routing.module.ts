import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductListComponent} from 'app/features/product/product-list.component';
import {ProductDetailComponent} from 'app/features/product/product-detail.component';
import {ProductDetailGuard} from 'app/features/product/product-guard.service';


export const productRoutes: Routes = [
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'product/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})           
export class ProductionRoutingModule {

}