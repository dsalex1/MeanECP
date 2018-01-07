webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/api/api.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2,h3,h4{\r\n    margin-top:30px;\r\n}\r\npre{\r\n    padding:16px;\r\n    overflow:auto;\r\n    font-size:85%;\r\n    line-height:1.45;\r\n    background-color:#f6f8fa;\r\n    border-radius:3px\r\n}\r\ntable{\r\n    border-spacing:0;\r\n    border-collapse:collapse\r\n}\r\n\r\ntd,th{\r\n    padding:0\r\n}\r\n\r\ntable th{\r\n    font-weight:600\r\n}\r\ntable th, table td{\r\n    padding:6px 13px;\r\n    border:1px solid #dfe2e5\r\n}\r\ntable tr{\r\n    background-color:#fff;\r\n    border-top:1px solid #c6cbd1\r\n}\r\ntable tr:nth-child(2n){\r\n    background-color:#f6f8fa\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/api/api.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  \n  <h2>Config API</h2>\n  <p>The deployment server has 3 routes for configuring it. The access to these has to be authorized by using a client certificate\n    trusted by '/cert/ClientRootCA.crt' All paths only accept valid JSON.</p>\n  <h3>/api/config/Client</h3>\n  <p>This path is used to configure which client shall get which content.<br> Useage:\n  </p>\n  <pre><code>{{ '{' }}\n    [CN]: {{ '{' }}\n        \"type\": [baseType],\n        \"params\": [params]\n    {{ '}' }}\n    (,[CN]: {{ '{' }}\n        \"type\": [baseType],\n        \"params\": [params]\n    {{ '}' }})\n{{ '}' }}\n</code></pre>\n  <table>\n    <thead>\n      <tr>\n        <th>placeholder</th>\n        <th>type</th>\n        <th>explaination</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>[CN]</td>\n        <td>string</td>\n        <td>the CommonName of the client to be configured, used in its certificate</td>\n      </tr>\n      <tr>\n        <td>[baseType]</td>\n        <td>string</td>\n        <td>a member of BaseType, see below</td>\n      </tr>\n      <tr>\n        <td>[params]</td>\n        <td>object</td>\n        <td>an object of type Params, see below</td>\n      </tr>\n    </tbody>\n  </table>\n  <p>example:</p>\n  <div >\n    <pre>{{ '{' }}\n    \"ClientTest1\": {{ '{' }}\n        \"type\": \"LandscapePlan\",\n        \"params\": {{ '{' }}\n            \"db\": \"./api/JSON/LehrerPlan\",\n            \"index1\": 0,\n            \"index2\": 1,\n            \"slideshow\": {{ '{' }}\n                \"interval\": \"5000\",\n                \"timeStart\": \"2017-6-19 20:10:00\",\n                \"timeEnd\": \"2017-6-20 20:10:00\",\n                \"params\": {{ '{' }}\n                    \"id\": \"1DOeyOhWo9hjwJDhcMJLW8Kb2kA9SEHAGcuSOLNV9sKU\",\n                    \"iterations\": 2,\n                    \"delay\": 1000\n                {{ '}' }}\n            {{ '}' }}\n        {{ '}' }}\n    {{ '}' }}\n{{ '}' }}</pre>\n  </div>\n  <h3>/api/config/Server</h3>\n  <p>This path is used to configure all settings that affect globally all clients. Useage:\n  </p>\n  <pre><code>{{ '{' }}\n    [setting]: [value]\n    (,[setting]: [value])\n{{ '}' }}\n</code></pre>\n  <table>\n    <thead>\n      <tr>\n        <th>placeholder</th>\n        <th>type</th>\n        <th>explaination</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>[setting]</td>\n        <td>string</td>\n        <td>setting to be set or modified</td>\n      </tr>\n      <tr>\n        <td>[value]</td>\n        <td>any</td>\n        <td>value to be set</td>\n      </tr>\n    </tbody>\n  </table>\n  <p>example:</p>\n  <div >\n    <pre>{{ '{' }}\n    \"defaultTimeout\": \"5000\",\n    \"pollInterval\": 5000\n{{ '}' }}</pre>\n  </div>\n  <h3>\n    <del>/api/config/KeyCode</del>\n  </h3>\n  <p>This path is used to configure what shall be displayed on a keypress. Useage:\n  </p>\n  <pre><code>{{ '{' }}\n    [keyCode]: {{ '{' }}\n        \"type\": [type],\n        \"params\": [params]\n    {{ '}' }}\n{{ '}' }}\n</code></pre>\n  <table>\n    <thead>\n      <tr>\n        <th>placeholder</th>\n        <th>type</th>\n        <th>explaination</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>[keyCpde]</td>\n        <td>integer</td>\n        <td>keyCode to be configured</td>\n      </tr>\n      <tr>\n        <td>[type]</td>\n        <td>string</td>\n        <td>a member of Type, see below</td>\n      </tr>\n      <tr>\n        <td>[params]</td>\n        <td>object</td>\n        <td>an object of type Params, see below</td>\n      </tr>\n    </tbody>\n  </table>\n  <p>example:</p>\n  <div >\n    <pre>{{ '{' }}\n    \"32\": {{ '{' }}\n        \"type\": \"FilteredPlan\",\n        \"params\": {{ '{' }}\n            \"db\": \"./api/JSON/LehrerPlan\",\n            \"index1\": 0,\n            \"filter\": \"And\",\n            \"timeout\": 5000\n        {{ '}' }}\n    {{ '}' }}\n{{ '}' }}</pre>\n  </div>\n  <h3>/api/config/Presentation</h3>\n  <p>This path is a shortcut to set an presentation for a certain client. Useage:\n  </p>\n  <pre><code>{{ '{' }}\n    \"CN\": [CN],\n    \"slideshow\":[slideshow]\n{{ '}' }}\n</code></pre>\n  <table>\n    <thead>\n      <tr>\n        <th>placeholder</th>\n        <th>type</th>\n        <th>explaination</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>[CN]</td>\n        <td>string</td>\n        <td>CommonName of the client the presentation shall be asigned to</td>\n      </tr>\n      <tr>\n        <td>[slideshow]</td>\n        <td>string</td>\n        <td>an object of type Slideshow, see below</td>\n      </tr>\n    </tbody>\n  </table>\n  <p>example:</p>\n  <div >\n    <pre>{{ '{' }}\n    \"CN\": \"testClient1\",\n    \"slideshow\": {{ '{' }}\n        \"interval\": \"5000\",\n        \"timeStart\": \"2017-6-19 20:10:00\",\n        \"timeEnd\": \"2017-6-20 20:10:00\",\n        \"params\": {{ '{' }}\n            \"id\": \"1DOeyOhWo9hjwJDhcMJLW8Kb2kA9SEHAGcuSOLNV9sKU\",\n            \"iterations\": 2,\n            \"delay\": 1000\n        {{ '}' }}\n    {{ '}' }}\n{{ '}' }}</pre>\n  </div>\n  <h4>BaseType</h4>\n  <p>one of the following:</p>\n  <table>\n    <thead>\n      <tr>\n        <th>value</th>\n        <th>explaination</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>\"LandscapePlan\"</td>\n        <td>View which displays 2 plans in landscape orientation</td>\n      </tr>\n      <tr>\n        <td>\"PortraitPlan\"</td>\n        <td>View which displays 1 plan in portrait orientation</td>\n      </tr>\n      <tr>\n        <td>\"MultiplePlan\"</td>\n        <td>View which displays multiple plans in portrait orientation</td>\n      </tr>\n    </tbody>\n  </table>\n  <h4>Type</h4>\n  <p>one of the following:</p>\n  <table>\n    <thead>\n      <tr>\n        <th>value</th>\n        <th>explaination</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>any BaseType</td>\n        <td>/</td>\n      </tr>\n      <tr>\n        <td>\"FilteredPlan\"</td>\n        <td>View which displays multiple plans in portrait orientation with a filter applied</td>\n      </tr>\n      <tr>\n        <td>\"Png\"</td>\n        <td>View which displays a png</td>\n      </tr>\n    </tbody>\n  </table>\n  <h4>Slideshow</h4>\n  <p>an object containing the following Properties:</p>\n  <table>\n    <thead>\n      <tr>\n        <th>property</th>\n        <th>type</th>\n        <th>explaination</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>\"db\"</td>\n        <td>string</td>\n        <td>database used to obtain the plan data from</td>\n      </tr>\n      <tr>\n        <td>\"interval\"</td>\n        <td>integer</td>\n        <td>time in ms after which the presentation shall be shown</td>\n      </tr>\n      <tr>\n        <td>\"timeStart\"</td>\n        <td>string</td>\n        <td>ISO formatted time to beginn showing the presentation at all</td>\n      </tr>\n      <tr>\n        <td>\"timeEnd\"</td>\n        <td>string</td>\n        <td>ISO formatted time to end showing the presentation at all</td>\n      </tr>\n      <tr>\n        <td>\"params\"</td>\n        <td>Params</td>\n        <td>object of type Params, see below</td>\n      </tr>\n    </tbody>\n  </table>\n  <h4>Params</h4>\n  <p>an object containing the following Properties, which are optional if not used.</p>\n  <table>\n    <thead>\n      <tr>\n        <th>property</th>\n        <th>type</th>\n        <th>explaination</th>\n        <th>used in</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>\"db\"</td>\n        <td>string</td>\n        <td>database used to obtain the plan data from</td>\n        <td>any</td>\n      </tr>\n      <tr>\n        <td>\"index1\"</td>\n        <td>integer</td>\n        <td>index in db of the first plan which shall be displayed</td>\n        <td>LandscapePlan, PortraitPlan</td>\n      </tr>\n      <tr>\n        <td>\"index2\"</td>\n        <td>integer</td>\n        <td>index in db of the second plan which shall be displayed</td>\n        <td>PortraitPlan</td>\n      </tr>\n      <tr>\n        <td>\"firstIndex\"</td>\n        <td>integer</td>\n        <td>the first index of all plans that shall be displayed</td>\n        <td>MultiplePlan</td>\n      </tr>\n      <tr>\n        <td>\"slideshow\"</td>\n        <td>Slideshow</td>\n        <td>and Shlidshow object that shall be attached to aview</td>\n        <td>any BaseTypes</td>\n      </tr>\n      <tr>\n        <td>\"filter\"</td>\n        <td>string</td>\n        <td>filter to be applied on a filteredPlan page</td>\n        <td>FilteredPlan</td>\n      </tr>\n      <tr>\n        <td>\"file\"</td>\n        <td>string</td>\n        <td>file to be shown, must be an png</td>\n        <td>Png</td>\n      </tr>\n      <tr>\n        <td>\"timeout\"</td>\n        <td>integer</td>\n        <td>timeout in ms until switching from a keypress</td>\n        <td>FilteredPlan,Png</td>\n      </tr>\n      <tr>\n        <td>\"id\"</td>\n        <td>string</td>\n        <td>id of te presentation to be shown</td>\n        <td>Slideshow</td>\n      </tr>\n      <tr>\n        <td>\"iterations\"</td>\n        <td>integer</td>\n        <td>how many times the presentation shall be iterated through</td>\n        <td>Slideshow</td>\n      </tr>\n      <tr>\n        <td>\"delay\"</td>\n        <td>integer</td>\n        <td>time in ms a slide shall be shown before switching to the next one</td>\n        <td>Slideshow</td>\n      </tr>\n    </tbody>\n  </table>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/api/api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var APIComponent = (function () {
    function APIComponent() {
    }
    APIComponent.prototype.ngOnInit = function () {
    };
    return APIComponent;
}());
APIComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-api',
        template: __webpack_require__("../../../../../src/app/api/api.component.html"),
        styles: [__webpack_require__("../../../../../src/app/api/api.component.css")]
    }),
    __metadata("design:paramtypes", [])
], APIComponent);

//# sourceMappingURL=api.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep .content{\r\n    margin:110px auto 70px auto;\r\n    width:70%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__disclaimer_disclaimer_component__ = __webpack_require__("../../../../../src/app/disclaimer/disclaimer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__impressum_impressum_component__ = __webpack_require__("../../../../../src/app/impressum/impressum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__datenschutz_datenschutz_component__ = __webpack_require__("../../../../../src/app/datenschutz/datenschutz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__api_api_component__ = __webpack_require__("../../../../../src/app/api/api.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'Impressum', component: __WEBPACK_IMPORTED_MODULE_8__impressum_impressum_component__["a" /* ImpressumComponent */] },
    { path: 'Disclaimer', component: __WEBPACK_IMPORTED_MODULE_7__disclaimer_disclaimer_component__["a" /* DisclaimerComponent */] },
    { path: 'Datenschutz', component: __WEBPACK_IMPORTED_MODULE_9__datenschutz_datenschutz_component__["a" /* DatenschutzComponent */] },
    { path: 'API', component: __WEBPACK_IMPORTED_MODULE_10__api_api_component__["a" /* APIComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__main_main_component__["a" /* MainComponent */] },
    { path: '**', redirectTo: '/' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__disclaimer_disclaimer_component__["a" /* DisclaimerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__impressum_impressum_component__["a" /* ImpressumComponent */],
            __WEBPACK_IMPORTED_MODULE_9__datenschutz_datenschutz_component__["a" /* DatenschutzComponent */],
            __WEBPACK_IMPORTED_MODULE_10__api_api_component__["a" /* APIComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/datenschutz/datenschutz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datenschutz/datenschutz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <header>\n    <h2>\n      Datenschutz\n    </h2>\n  </header>\n  <div >\n    <div >\n      <h3>Datenschutzerklärung für die Nutzung von Google Analytics</h3>\n      <p>Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (\"Google\"). Google Analytics verwendet\n        sog. \"Cookies\", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website\n        durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in\n        der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung\n        auf dieser Webseite wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder\n        in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.\n      </p>\n      <p>&nbsp;</p>\n      <p>Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.\n        Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten,\n        um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung\n        verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem\n        Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.\n      </p>\n      <p>&nbsp;</p>\n      <p>Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir\n        weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich\n        werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung\n        der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern,\n        indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href=\"http://tools.google.com/dlpage/gaoptout?hl=de\"\n          target=\"_blank\">tools.google.com/dlpage/gaoptout</a>.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/datenschutz/datenschutz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatenschutzComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatenschutzComponent = (function () {
    function DatenschutzComponent() {
    }
    DatenschutzComponent.prototype.ngOnInit = function () {
    };
    return DatenschutzComponent;
}());
DatenschutzComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-datenschutz',
        template: __webpack_require__("../../../../../src/app/datenschutz/datenschutz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/datenschutz/datenschutz.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DatenschutzComponent);

//# sourceMappingURL=datenschutz.component.js.map

/***/ }),

/***/ "../../../../../src/app/disclaimer/disclaimer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/disclaimer/disclaimer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n<h2>Disclaimer</h2>\n\n<h3>Haftungsbeschränkung für eigene Inhalte\n</h3>\n<p>Alle Inhalte unseres Internetauftritts wurden mit Sorgfalt und nach bestem Gewissen erstellt. Eine\nGewähr für die Aktualität, Vollständigkeit und Richtigkeit sämtlicher Seiten kann jedoch nicht\nübernommen werden. Gemäß § 7 Abs. 1 TMG sind wir als Dienstanbieter für eigene Inhalte auf diesen\nSeiten nach den allgemeinen Gesetzen verantwortlich, nach den §§ 8 bis 10 TMG jedoch nicht\nverpflichtet, die übermittelten oder gespeicherten fremden Informationen zu überwachen. Eine\numgehende Entfernung dieser Inhalte erfolgt ab dem Zeitpunkt der Kenntnis einer konkreten\nRechtsverletzung und wir haften nicht vor dem Zeitpunkt der Kenntniserlangung.\n</p>\n<h3>Haftungsbeschränkung für externe Links</h3>\n\n<p>Unsere Webseite enthält sog. „externe Links“ (Verknüpfungen zu Webseiten Dritter), auf deren Inhalt\nwir keinen Einfluss haben und für den wir aus diesem Grund keine Gewähr übernehmen. Für die\nInhalte und Richtigkeit der Informationen ist der jeweilige Informationsanbieter der verlinkten Webseite\nverantwortlich. Als die Verlinkung vorgenommen wurde, waren für uns keine Rechtsverstöße erkennbar.\nSollte uns eine Rechtsverletzung bekannt werden, wird der jeweilige Link umgehend von uns entfernt.\n</p>\n<h3>Urheberrecht</h3>\n<p>\nDie auf dieser Webseite veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht.\nJede Art der Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der\nGrenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers\nbzw. Autors.</p>\n\n<h3>Datenschutz</h3>\n\n<a href=\"/Datenschutz\">Datenschutz</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/disclaimer/disclaimer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisclaimerComponent = (function () {
    function DisclaimerComponent() {
    }
    DisclaimerComponent.prototype.ngOnInit = function () {
    };
    return DisclaimerComponent;
}());
DisclaimerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-disclaimer',
        template: __webpack_require__("../../../../../src/app/disclaimer/disclaimer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/disclaimer/disclaimer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DisclaimerComponent);

//# sourceMappingURL=disclaimer.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main{\r\n    width:100%;\r\n    background-color:#222;\r\n    color:white;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n}\r\n\r\n.left{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    text-align: left;\r\n    position: relative;\r\n}\r\n\r\n.logo{\r\n    opacity: 0.5;\r\n    position: absolute;\r\n    height:130px;\r\n    width:130px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    margin: 30px\r\n}\r\n\r\n.middle{\r\n    margin:30px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    text-align: center;\r\n}\r\n\r\n.right{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    text-align: right;\r\n    margin:30px;\r\n}\r\na{\r\n    color:white\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n  <div class=\"left\">\n    <img class=\"logo\" src=\"MeanECP/assets/logoWhite.svg\" />\n  </div>\n\n  <div class=\"middle\">\n  E-Mail: <a href=\"mailto:dsalex1@ymail.com\">dsalex1@ymail.com</a><br/>\n  <br/>\n  Mühlenhof 55<br/>\n  24534 Neumünster<br/>\n  Germany<br/>\n  <br/>\n  <a href=\"/Disclaimer\">Disclaimer</a>  |  <a href=\"/Impressum\">Impressum</a>  |  <a href=\"/Datenschutz\">Datenschutz</a>\n  </div>\n\n  <div class=\"right\">\n    <br/><br/><br/><br/><br/><br/> \n    Copyright © 2018 Alexander Seidler\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/impressum/impressum.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/impressum/impressum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <h2>Impressum</h2>\n<p>Alexander Seidler<br />\nMühlenhof 55<br />24534 Neumünster</p>\n<p>Telefon: 04321 54313<br />\nE-Mail: <a href=\"mailto:dsalex1@ymail.com\">dsalex1@ymail.com</a><br />\n</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/impressum/impressum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpressumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImpressumComponent = (function () {
    function ImpressumComponent() {
    }
    ImpressumComponent.prototype.ngOnInit = function () {
    };
    return ImpressumComponent;
}());
ImpressumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-impressum',
        template: __webpack_require__("../../../../../src/app/impressum/impressum.component.html"),
        styles: [__webpack_require__("../../../../../src/app/impressum/impressum.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ImpressumComponent);

//# sourceMappingURL=impressum.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#background > img {\r\n    width: 100%;\r\n    height: 100%\r\n}\r\n\r\n#header {\r\n    width: 100%;\r\n    height: 100vh\r\n}\r\n\r\n#background {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100vh;\r\n    z-index: -2\r\n}\r\n\r\n#overlay {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: rgba(0,0,0,0.8);\r\n    z-index: -1\r\n}\r\n\r\n#headerLogo {\r\n    height: 400px\r\n}\r\n\r\n#banner {\r\n    color: white;\r\n    font-size: 3em\r\n}\r\n\r\n.ontop {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n}\r\n\r\n\r\n.row{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n.rowReverse{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: reverse;\r\n        -ms-flex-direction: row-reverse;\r\n            flex-direction: row-reverse;\r\n}\r\n.row>div, .rowReverse>div{\r\n    -webkit-box-flex:1;\r\n        -ms-flex:1;\r\n            flex:1;\r\n    margin:20px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div id=\"header\">\n    <div id=\"background\">\n      <img src=\"MeanECP/assets/background1.png\" />\n    </div>\n    <div id=\"overlay\">\n    </div>\n    <div class=\"ontop\">\n      <div>\n        <img id=\"headerLogo\" height=\"400\" src=\"MeanECP/assets/logoWhite.svg\" />\n        <h1 id=\"banner\"> <b>Das</b> neue Anzeigesystem <br/> für Vertretungsplan und Co.</h1>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n<div class=\"content\">\n  <h1>MeanECP Features</h1>\n\n  <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum\n    tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em>    Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum\n    sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum\n    rutrum orci, sagittis tempus lacus enim ac dui. <a href=\"#\">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>\n  <div class=\"row\">\n    <div>\n      <h2>Geteilte Bildschirme</h2>\n      <ol>\n        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n        <li>Aliquam tincidunt mauris eu risus.</li>\n      </ol>\n\n      <blockquote>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a\n          est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada\n          tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\n      </blockquote>\n    </div>\n    <div>\n      <img width=\"100%\" src=\"MeanECP/assets/background1.png\" />\n    </div>\n  </div>\n  <br/>\n  <div class=\"rowReverse\">\n    <div>\n      <h2>Ganze Bildschirme</h2>\n\n      <ul>\n        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n        <li>Aliquam tincidunt mauris eu risus.</li>\n      </ul>\n      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,\n        feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies\n        mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat\n        wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros\n        ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent\n        dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.\n        Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>\n                <ol>\n          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n          <li>Aliquam tincidunt mauris eu risus.</li>\n        </ol>\n\n        <blockquote>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut\n            a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada\n            tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\n            \n        </blockquote>\n    </div>\n    <div style=\"flex:0\">\n      <img width=\"400px\" src=\"MeanECP/assets/single.png\" />\n    </div>\n  </div>\n      <br/>\n    <div class=\"row\">\n      <div>\n        <h2>Individuelle Lehrerpläne</h2>\n        <ol>\n          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n          <li>Aliquam tincidunt mauris eu risus.</li>\n        </ol>\n\n        <blockquote>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut\n            a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada\n            tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\n            \n        </blockquote>\n                <ol>\n          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n          <li>Aliquam tincidunt mauris eu risus.</li>\n        </ol>\n\n        <blockquote>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut\n            a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada\n            tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\n            \n        </blockquote>\n                <ol>\n          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n          <li>Aliquam tincidunt mauris eu risus.</li>\n        </ol>\n\n        <blockquote>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut\n            a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada\n            tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>\n            \n        </blockquote>\n      </div>\n      <div style=\"flex:0\">\n        <img width=\"400px\" src=\"MeanECP/assets/individual.png\" />\n      </div>\n    </div>\n    <br/>\n    <div class=\"rowReverse\">\n      <div>\n        <h2>Stunden-/Raum-/Lehrerpläne</h2>\n\n        <ul>\n          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n          <li>Aliquam tincidunt mauris eu risus.</li>\n        </ul>\n        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,\n          feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies\n          mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat\n          wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum,\n          eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.\n          Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam\n          erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>\n          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,\n          feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies\n          mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat\n          wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum,\n          eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.\n          Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam\n          erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>\n      </div>\n      <div style=\"flex:0\">\n        <img width=\"400px\" src=\"MeanECP/assets/pngView.png\" />\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header{\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:70px;\r\n    z-index:999;\r\n    background-Color:rgba(240,240,240,.9);\r\n}\r\n\r\n.logo{\r\n    padding:2px;\r\n    float:left\r\n}\r\n.logo>img{\r\n    height:66px;\r\n}\r\n\r\n#mainNav{\r\n    list-style-type:none;\r\n    padding:23px 0px 5px 0px;\r\n    text-align:right;\r\n    width:80%;\r\n    width:calc(85% - 70px);\r\n\r\n    float:left;\r\n}\r\n#mainNav>li{\r\n    display:inline-block;\r\n    margin:0 10px;\r\n    position:relative\r\n}\r\nheader a{\r\n    text-decoration:none;\r\n    font-size: 1.5em;\r\n    color:#000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header>   \n    <div class=\"logo\">\n            <img  src=\"MeanECP/assets/logoBlackSmall.png\" />\n    </div>\n    \n    <nav>\n      <ul id=\"mainNav\">\n        <li ><a href=\"/\">Home</a></li>\n        <li ><a href=\"/API\">API</a></li>\n      </ul>\n    </nav>\n</header>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



//if (environment.production) {
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
//}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map