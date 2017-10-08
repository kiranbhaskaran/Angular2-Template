System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var settings, languages, appEndPoints;
    return {
        setters:[],
        execute: function() {
            exports_1("settings", settings = Object.freeze({
                BASE_API_URL: 'http://CECiyapi.community360.net/'
            }));
            exports_1("languages", languages = Object.freeze({
                english: "en-US",
                french: "fr-ca"
            }));
            exports_1("appEndPoints", appEndPoints = Object.freeze({
                getCar: '/WebAPI/api/apps/car?Id={carId}'
            }));
        }
    }
});
//# sourceMappingURL=constant.js.map