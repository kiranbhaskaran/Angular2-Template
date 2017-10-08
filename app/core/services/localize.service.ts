import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class LocalizeService {

    private subject: Subject<boolean> = new Subject<boolean>();

    constructor(private http: Http) { }

    // use the $window service to get the language of the user's browser
    language = 'en-us'; //$window.navigator.userLanguage || $window.navigator.language,

    // array to hold the localized resource string entries
     dictionary = [];

    // flag to indicate if the service hs loaded the resource file
    resourceFileLoaded = false;

    setLanguage(value) {
        this.language = value;
        this.initLocalizedResources();
    }

    resourceLoaded(): Observable<boolean> {
        return this.subject.asObservable();
    }

    initLocalizedResources() {
        // build the url to retrieve the localized resource file
        //var url = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/Activity3/app/shared/localizedResources/resources-locale_' + localize.language + '.js';
        let url = 'http://localhost:3000/content/resources/locale-' + this.language + '.json';
        //this.constService.endPoints.getLocalizedResource.replace('{0}', this.language);

        this.http.get(url)
            .map((res: Response) => res.json())
            .subscribe(res => {
            this.dictionary = res;
            this.resourceFileLoaded = true;
            this.subject.next(this.resourceFileLoaded);
                console.log(this.dictionary);
            }, error => console.error('error occured', error));
    }

    /* getFormat: function () {
        var format = 'MM/dd/yyyy';
        if (localize.language === 'fr-ca')
            format = 'dd/MM/yyyy';
        return format;
    },
*/
    getLocalizedString(value) {
        // default the result to an empty string
        var result = '';

        // make sure the dictionary has valid data
        if ((this.dictionary !== []) && (this.dictionary.length > 0)) {
            // use the filter service to only return those entries which match the value
            // and only take the first result

            var entry = this.dictionary.filter((e) => {
                return (e.key == value);
            })[0];

            // set the result
            result = entry.value;
        }
        // return the value to the call
        return result;
    }

    /* getLocalizedDate: function (value) {
        // default the result to an empty string
        var result = '';

        // make sure the date has valid data
        if ((localize.language !== undefined && value != undefined)) {
            var newDate = new Date(value);

            //var newUTCDate = new Date(newDate.getUTCFullYear(),
            //                        newDate.getUTCMonth(),
            //                        newDate.getUTCDate());


            var newUTCDate = newDate;

            var format = 'MM/dd/yyyy';
            if (localize.language === 'fr-ca')
                format = 'dd/MM/yyyy';
            //var _date = $filter('date')(new Date(newUTCDate), format);
            var _date = $filter('date')(value, format) != "Invalid Date" ? $filter('date')(value, format) : '';
            // set the result
            result = _date.toUpperCase();
        }
        // return the value to the call
        return result;
    } */


    private handleError(error) {
        console.error('An error occured', error);
        return null;//Promise.reject(error.message || error);
    }
}
 