import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {IProduct} from 'app/features/product/product';
import {ProductService} from 'app/features/product/product.service';

@Component({
    //selector: 'ci-productDetail',
    templateUrl: 'app/features/product/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Car Detail";
    product: IProduct;

    errorMessage: string;

    constructor(private _productService: ProductService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this._productService.getProduct(id).subscribe(
            data => this.product = data);        
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }
}