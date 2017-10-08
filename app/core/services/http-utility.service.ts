import {Injectable} from '@angular/core'; 
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {IProduct} from 'app/features/product/product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

enum httpVerbs{
    get= <any>"get",
    post=<any>"post",
    put= <any>"put",
    delete= <any>"delete"
};

@Injectable()
export class HttpUtilityService {

     resultValue:string;

    constructor(private _http: Http) {

    }

    httpGet(url: string) {
        return this.processHttpRequest(url,httpVerbs.get);
    }

    httpPost() {
    }

    httpPut() {

    }

    httpDelete() {
    }

    processHttpRequest(url: string, verb: httpVerbs) {
        
        switch (verb) {
            case httpVerbs.get:
                return this._http.get(url)
                    .map((response: Response) => response.json())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError);
                    //.map((response: Response) => response.json())
                    //.map((response: Response) => response.json())
                    //.subscribe(result => this.resultValue = result);
                    //.do(data => console.log('All: ' + JSON.stringify(data)));                
            case httpVerbs.post:
                return this._http.post(url, {});
            case httpVerbs.put:
                return this._http.put(url, {});
            case httpVerbs.delete:
                return this._http.delete(url);               
        }

    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}