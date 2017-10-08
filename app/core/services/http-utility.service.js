System.register(['@angular/core', '@angular/http', 'rxjs/Rx', 'rxjs/add/operator/map', 'rxjs/add/operator/do'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var httpVerbs, HttpUtilityService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            (function (httpVerbs) {
                httpVerbs[httpVerbs["get"] = "get"] = "get";
                httpVerbs[httpVerbs["post"] = "post"] = "post";
                httpVerbs[httpVerbs["put"] = "put"] = "put";
                httpVerbs[httpVerbs["delete"] = "delete"] = "delete";
            })(httpVerbs || (httpVerbs = {}));
            ;
            HttpUtilityService = (function () {
                function HttpUtilityService(_http) {
                    this._http = _http;
                }
                HttpUtilityService.prototype.httpGet = function (url) {
                    return this.processHttpRequest(url, httpVerbs.get);
                };
                HttpUtilityService.prototype.httpPost = function () {
                };
                HttpUtilityService.prototype.httpPut = function () {
                };
                HttpUtilityService.prototype.httpDelete = function () {
                };
                HttpUtilityService.prototype.processHttpRequest = function (url, verb) {
                    switch (verb) {
                        case httpVerbs.get:
                            return this._http.get(url)
                                .map(function (response) { return response.json(); })
                                .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
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
                };
                HttpUtilityService.prototype.handleError = function (error) {
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                HttpUtilityService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpUtilityService);
                return HttpUtilityService;
            }());
            exports_1("HttpUtilityService", HttpUtilityService);
        }
    }
});
//# sourceMappingURL=http-utility.service.js.map