"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function emptyDecorator(target) { console.log(''); }
exports.emptyDecorator = emptyDecorator;
;
var Simple = /** @class */ (function () {
    function Simple() {
    }
    Simple.staticTestMethod = function (decoratedParameter, nonDecoratedParameter) {
        return 0;
    };
    Simple.prototype.testMethod = function (decoratedParameter, nonDecoratedParameter) {
    };
    Object.defineProperty(Simple.prototype, "testData", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: true,
        configurable: true
    });
    Simple = __decorate([
        emptyDecorator
    ], Simple);
    return Simple;
}());
exports.Simple = Simple;
