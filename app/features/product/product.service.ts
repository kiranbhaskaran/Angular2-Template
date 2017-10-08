import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {IProduct} from 'app/features/product/product';

// Import RxJs required methods
//import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

    //define the url for retrieving the data
    private _productUrl = "http://localhost:3000/app/features/product/product-data.json";

    //define the constructor to inject the http service object
    constructor(private _http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())            
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: string): Observable<IProduct> {
        console.log('the id value is ' + id);
        return this.getProducts()
            .map((products: IProduct[]) => products.filter(p => p.productId == id)[0]);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    //getProduct(id:number): Observable<IProduct> {
    //    return this.getProducts()
    //        //.map(res => res.json());
    //        .map((products: IProduct[]) => products[0]);
    //        //.do(data => console.log(JSON.stringify(data)));
    //}

    //getProducts():Observable<IProduct[]> {

    //    return this._http.get(this._productUrl)
    //        .map((response: Response) => <IProduct[]>response.json());
    //        //.do(data=>console.log(JSON.stringify(data)));


    //    //return [
    //    //    {
    //    //        "productId": 1,
    //    //        "productName": "Audi Q7",
    //    //        "productCode": "AUQ7",
    //    //        "releaseDate": "May 1st 2016",
    //    //        "description": "Top SUV",
    //    //        "price": 64,
    //    //        "starRating": 5,
    //    //        "imageUrl": "images/audi1.jpg"
    //    //    },
    //    //    {
    //    //        "productId": 2,
    //    //        "productName": "Nissan Murano",
    //    //        "productCode": "NM",
    //    //        "releaseDate": "June 1st 2016",
    //    //        "description": "Top SUV",
    //    //        "price": 64,
    //    //        "starRating": 4,
    //    //        "imageUrl": "images/Audi2.jpg"
    //    //    }
    //    //];

    //}
}