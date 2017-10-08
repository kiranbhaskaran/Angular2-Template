import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {IProduct} from 'app/features/product/product';
import {ProductService} from 'app/features/product/product.service';
import {CookieService} from 'angular2-cookie/services/cookies.service';
import {HttpUtilityService} from 'app/core/services/http-utility.service';
import {ContextService} from 'app/core/services/context.service';
import {Log, Level} from 'ng2-logger/ng2-logger';

//import {LocalizeService} from "app/core/services/localize.service";
//import {TranslateDirective} from 'app/shared/directives/translate.directive';

//import {LocalizeService} from "app/core/services/localize.service";
//import {TranslateDirective} from 'app/core/directives/translate.directive';

@Component({  
    templateUrl: 'app/features/product/product-list.component.html',
    styleUrls: ['app/features/product/product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "Audi";
    counterValue: number = 5;

    private _productUrl = "http://localhost:3000/app/features/product/product-data.json";
    
    constructor(private _productService: ProductService, private _cookieService: CookieService, private _httpUtility: HttpUtilityService, private _contextService: ContextService) {
        }
    products: IProduct[];

    ngOnInit(): void {
        console.log("In OnInit");  
       
        
        this._httpUtility.httpGet(this._productUrl)
            .map(result => <IProduct[]>result)
            .subscribe(products => this.products = products);
            //.do(data => console.log('All: ' + JSON.stringify(data)));              
        //alert(this._contextService.getValue('one'));
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

} 