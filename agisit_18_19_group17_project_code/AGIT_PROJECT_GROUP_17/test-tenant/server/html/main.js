(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n      <p-panel header=\"Input data\" [style]=\"{'margin-bottom':'20px'}\">\n        <div class=\"ui-g\">\n          <div class=\"ui-g-6\">\n            <span class=\"ui-float-label\" style=\"margin-top: 15px; margin-bottom: 40px\">\n              <input id=\"sizesOfTrucks-input\" #input1\n                     (input)=\"input1.value=$event.target.value.toUpperCase(); sizesOfTrucks = $event.target.value.toUpperCase()\"\n                     [(ngModel)]=\"sizesOfTrucks\" type=\"text\" size=\"50\" pInputText>\n              <label for=\"sizesOfTrucks-input\">Sizes of trucks</label>\n            </span>\n            <span class=\"ui-float-label\" style=\"margin-top: 15px; margin-bottom: 40px\">\n              <input id=\"mean-input\" #input2\n                     (input)=\"input2.value=$event.target.value.toUpperCase(); mean = $event.target.value.toUpperCase()\"\n                     [(ngModel)]=\"mean\" type=\"text\" size=\"50\" pInputText>\n              <label for=\"mean-input\">Mean (μ)</label>\n            </span>\n            <span class=\"ui-float-label\" style=\"margin-top: 15px; margin-bottom: 40px\">\n              <input id=\"sdeviation-input\" #input2\n                     (input)=\"input2.value=$event.target.value.toUpperCase(); sdeviation = $event.target.value.toUpperCase()\"\n                     [(ngModel)]=\"sdeviation\" type=\"text\" size=\"50\" pInputText>\n              <label for=\"sdeviation-input\">Standard deviation (σ)</label>\n            </span>\n            <span class=\"ui-float-label\" style=\"margin-top: 15px; margin-bottom: 40px\">\n              <input id=\"powerOfSamples-input\" #input3\n                     (input)=\"input3.value=$event.target.value.toUpperCase(); powerOfSamples = $event.target.value.toUpperCase()\"\n                     [(ngModel)]=\"powerOfSamples\" type=\"text\" size=\"50\" pInputText>\n              <label for=\"powerOfSamples-input\">Number of samples (10 to the x power)</label>\n            </span>\n          </div>\n        </div>\n        <div style=\"text-align: center; margin-top: 30px\">\n          <!--<button style=\"width: 22%\" pButton type=\"button\" class=\"ui-button-secondary\" (click)=\"setExampleData()\" icon=\"fa-clipboard\" label=\"Przykładowe dane\"></button>-->\n          <button style=\"width: 30%\" pButton type=\"button\" (click)=\"execute()\" label=\"Execute\"></button>\n          <!--<button style=\"width: 22%\" pButton type=\"button\" (click)=\"runStepAlgorithm()\" icon=\"fa-forward\" label=\"Uruchom algorytm krokowo\"></button>-->\n          <!--<button style=\"width: 22%\" pButton type=\"button\" (click)=\"nextStep()\" icon=\"fa-step-forward\" [disabled]=\"!showNextStepBtn\" label=\"Następny krok\"></button>-->\n        </div>\n      </p-panel>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/main-service */ "./src/service/main-service.ts");
/* harmony import */ var _model_InputRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/InputRequest */ "./src/model/InputRequest.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(mainService) {
        this.mainService = mainService;
        this.sizesOfTrucks = '5 15 30 50';
        this.powerOfSamples = 6;
        this.mean = 25;
        this.sdeviation = 0.2;
    }
    AppComponent.prototype.execute = function () {
        var request = new _model_InputRequest__WEBPACK_IMPORTED_MODULE_3__["InputRequest"](this.sizesOfTrucks, this.powerOfSamples, this.mean, this.sdeviation);
        this.mainService.executeGCProcess(request).subscribe(function (response) {
            console.log(response);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/inputtextarea.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _service_main_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../service/main-service */ "./src/service/main-service.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_8__["PanelModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__["InputTextModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_11__["InputTextareaModule"]
            ],
            providers: [
                _service_main_service__WEBPACK_IMPORTED_MODULE_13__["MainService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/model/InputRequest.ts":
/*!***********************************!*\
  !*** ./src/model/InputRequest.ts ***!
  \***********************************/
/*! exports provided: InputRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRequest", function() { return InputRequest; });
var InputRequest = /** @class */ (function () {
    function InputRequest(sizesOfTrucks, powerOfSamples, mean, sdeviation) {
        this.sizesOfTrucks = sizesOfTrucks;
        this.powerOfSamples = powerOfSamples;
        this.mean = mean;
        this.sdeviation = sdeviation;
    }
    return InputRequest;
}());



/***/ }),

/***/ "./src/service/main-service.ts":
/*!*************************************!*\
  !*** ./src/service/main-service.ts ***!
  \*************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_operator_delay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operator/delay */ "./node_modules/rxjs-compat/_esm5/operator/delay.js");
/* harmony import */ var rxjs_operator_mergeMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/operator/mergeMap.js");
/* harmony import */ var rxjs_operator_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/operator/switchMap.js");







var MainService = /** @class */ (function () {
    function MainService(httpClient) {
        this.httpClient = httpClient;
    }
    MainService.prototype.executeGCProcess = function (request) {
        // // var ip = window.location.origin; // this will give you the ip:port
        // var ip = this.httpClient.get("https://jsonip.com").subscribe(ipOfNetwork => {
        //   return ipOfNetwork["ip"];
        // });
        return this.httpClient.post("http://" + location.host + ":5000/api/GoogleCloudResponse", request);
    };
    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yqbk/Documents/GitHub/AGISIT-Project/agisit-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map