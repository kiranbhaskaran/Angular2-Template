System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Dictionary;
    return {
        setters:[],
        execute: function() {
            Dictionary = (function () {
                function Dictionary() {
                    this._keys = [];
                    this._values = [];
                    this.undefinedKeyErrorMessage = "Key is either undefined, null or an empty string.";
                }
                Dictionary.prototype.isEitherUndefinedNullOrStringEmpty = function (object) {
                    return (typeof object) === "undefined" || object === null || object.toString() === "";
                };
                Dictionary.prototype.checkKeyAndPerformAction = function (action, key, value) {
                    if (this.isEitherUndefinedNullOrStringEmpty(key)) {
                        throw new Error(this.undefinedKeyErrorMessage);
                    }
                    return action(key, value);
                };
                Dictionary.prototype.add = function (key, value) {
                    var _this = this;
                    var addAction = function (key, value) {
                        if (_this.containsKey(key)) {
                            throw new Error("An element with the same key already exists in the dictionary.");
                        }
                        _this._keys.push(key);
                        _this._values.push(value);
                    };
                    this.checkKeyAndPerformAction(addAction, key, value);
                };
                Dictionary.prototype.remove = function (key) {
                    var _this = this;
                    var removeAction = function (key) {
                        if (!_this.containsKey(key)) {
                            return false;
                        }
                        var index = _this._keys.indexOf(key);
                        _this._keys.splice(index, 1);
                        _this._values.splice(index, 1);
                        return true;
                    };
                    return (this.checkKeyAndPerformAction(removeAction, key));
                };
                Dictionary.prototype.getValue = function (key) {
                    var _this = this;
                    var getValueAction = function (key) {
                        if (!_this.containsKey(key)) {
                            return null;
                        }
                        var index = _this._keys.indexOf(key);
                        return _this._values[index];
                    };
                    return this.checkKeyAndPerformAction(getValueAction, key);
                };
                Dictionary.prototype.containsKey = function (key) {
                    var _this = this;
                    var containsKeyAction = function (key) {
                        if (_this._keys.indexOf(key) === -1) {
                            return false;
                        }
                        return true;
                    };
                    return this.checkKeyAndPerformAction(containsKeyAction, key);
                };
                Dictionary.prototype.changeValueForKey = function (key, newValue) {
                    var _this = this;
                    var changeValueForKeyAction = function (key, newValue) {
                        if (!_this.containsKey(key)) {
                            throw new Error("In the dictionary there is no element with the given key.");
                        }
                        var index = _this._keys.indexOf(key);
                        _this._values[index] = newValue;
                    };
                    this.checkKeyAndPerformAction(changeValueForKeyAction, key, newValue);
                };
                Dictionary.prototype.keys = function () {
                    return this._keys;
                };
                Dictionary.prototype.values = function () {
                    return this._values;
                };
                Dictionary.prototype.count = function () {
                    return this._values.length;
                };
                return Dictionary;
            }());
            exports_1("Dictionary", Dictionary);
        }
    }
});
//# sourceMappingURL=dictionary.js.map