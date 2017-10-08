System.register(['@angular/core', '@angular/http', 'rxjs/Subject', 'rxjs/add/operator/map', 'rxjs/add/operator/do'], function(exports_1, context_1) {
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
    var core_1, http_1, Subject_1;
    var LocalizeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            LocalizeService = (function () {
                function LocalizeService(http) {
                    this.http = http;
                    this.subject = new Subject_1.Subject();
                    // use the $window service to get the language of the user's browser
                    this.language = 'en-us'; //$window.navigator.userLanguage || $window.navigator.language,
                    // array to hold the localized resource string entries
                    this.dictionary = [];
                    // flag to indicate if the service hs loaded the resource file
                    this.resourceFileLoaded = false;
                }
                LocalizeService.prototype.setLanguage = function (value) {
                    this.language = value;
                    this.initLocalizedResources();
                };
                LocalizeService.prototype.resourceLoaded = function () {
                    return this.subject.asObservable();
                };
                LocalizeService.prototype.initLocalizedResources = function () {
                    var _this = this;
                    // build the url to retrieve the localized resource file
                    //var url = $location.protocol() + '://' + $location.host() + ':' + $location.port() + '/Activity3/app/shared/localizedResources/resources-locale_' + localize.language + '.js';
                    var url = 'http://localhost:3000/content/resources/locale-' + this.language + '.json';
                    //this.constService.endPoints.getLocalizedResource.replace('{0}', this.language);
                    this.http.get(url)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) {
                        _this.dictionary = res;
                        _this.resourceFileLoaded = true;
                        _this.subject.next(_this.resourceFileLoaded);
                        console.log(_this.dictionary);
                    }, function (error) { return console.error('error occured', error); });
                };
                /* getFormat: function () {
                    var format = 'MM/dd/yyyy';
                    if (localize.language === 'fr-ca')
                        format = 'dd/MM/yyyy';
                    return format;
                },
            */
                LocalizeService.prototype.getLocalizedString = function (value) {
                    // default the result to an empty string
                    var result = '';
                    // make sure the dictionary has valid data
                    if ((this.dictionary !== []) && (this.dictionary.length > 0)) {
                        // use the filter service to only return those entries which match the value
                        // and only take the first result
                        var entry = this.dictionary.filter(function (e) {
                            return (e.key == value);
                        })[0];
                        // set the result
                        result = entry.value;
                    }
                    // return the value to the call
                    return result;
                };
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
                LocalizeService.prototype.handleError = function (error) {
                    console.error('An error occured', error);
                    return null; //Promise.reject(error.message || error);
                };
                LocalizeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LocalizeService);
                return LocalizeService;
            }());
            exports_1("LocalizeService", LocalizeService);
        }
    }
});
//# sourceMappingURL=localize.service.js.map