(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var router_1 = __webpack_require__("@angular/router");
// Components
var home_component_1 = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
// Routes
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'realtime-db', loadChildren: 'app/components/realtime-db/realtime-db.module#RealtimeDbModule' },
    { path: 'firestore', loadChildren: 'app/components/firestore/firestore.module#FirestoreModule' },
    { path: 'angular-universal', loadChildren: 'app/components/angular-universal/angular-universal.module#AngularUniversalModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\r\n    padding: 0 2rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"main-container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("@angular/platform-browser");
var core_1 = __webpack_require__("@angular/core");
var http_1 = __webpack_require__("@angular/common/http");
// Firebase Firestore
var angularfire2_1 = __webpack_require__("angularfire2");
var firestore_1 = __webpack_require__("angularfire2/firestore");
// Firebase Realtime Database
var database_1 = __webpack_require__("angularfire2/database");
// Firebase Aurthentication
var auth_1 = __webpack_require__("angularfire2/auth");
// Facebook Share
var ngx_facebook_1 = __webpack_require__("ngx-facebook");
// Configs
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
// Routing
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
// Services
var app_service_1 = __webpack_require__("../../../../../src/app/app.service.ts");
// Components
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var header_component_1 = __webpack_require__("../../../../../src/app/components/shared/header/header.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            home_component_1.HomeComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule.withServerTransition({ appId: 'firebase-angular-universal' }),
            angularfire2_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
            firestore_1.AngularFirestoreModule,
            auth_1.AngularFireAuthModule,
            database_1.AngularFireDatabaseModule,
            app_routing_module_1.AppRoutingModule,
            ngx_facebook_1.FacebookModule.forRoot(),
            http_1.HttpClientModule
        ],
        providers: [app_service_1.AppService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.server.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var platform_server_1 = __webpack_require__("@angular/platform-server");
// Modules
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
// Components
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var AppServerModule = (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
AppServerModule = __decorate([
    core_1.NgModule({
        imports: [
            app_module_1.AppModule,
            platform_server_1.ServerModule
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppServerModule);
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=app.server.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
// Facebook Share
var ngx_facebook_1 = __webpack_require__("ngx-facebook");
var constants_1 = __webpack_require__("../../../../../src/app/constants.ts");
var AppService = (function () {
    function AppService(fb) {
        this.fb = fb;
        this.currentUserId = '';
    }
    AppService.prototype.initializeFbShare = function () {
        // Facebook Share App Config
        var initParams = {
            appId: constants_1.FB_SHARE_APP_ID,
            xfbml: true,
            version: 'v2.10'
        };
        this.fb.init(initParams);
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ngx_facebook_1.FacebookService !== "undefined" && ngx_facebook_1.FacebookService) === "function" && _a || Object])
], AppService);
exports.AppService = AppService;
var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/angular-universal/angular-universal-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var router_1 = __webpack_require__("@angular/router");
// Components
var angular_universal_component_1 = __webpack_require__("../../../../../src/app/components/angular-universal/angular-universal.component.ts");
var angularUniversalRoutes = [
    {
        path: '', component: angular_universal_component_1.AngularUniversalComponent, children: []
    }
];
var AngularUniversalRoutingModule = (function () {
    function AngularUniversalRoutingModule() {
    }
    return AngularUniversalRoutingModule;
}());
AngularUniversalRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(angularUniversalRoutes)
        ],
        declarations: []
    })
], AngularUniversalRoutingModule);
exports.AngularUniversalRoutingModule = AngularUniversalRoutingModule;
//# sourceMappingURL=angular-universal-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/angular-universal/angular-universal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    padding: 0;\r\n    margin: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/angular-universal/angular-universal.component.html":
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"facts\">\n  <li *ngFor=\"let fact of facts | async\">\n    {{ fact.text }}\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/angular-universal/angular-universal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var http_1 = __webpack_require__("@angular/common/http");
var FACTS_URL = 'https://non-ssr-angular.firebase.com/facts.json';
var AngularUniversalComponent = (function () {
    function AngularUniversalComponent(http) {
        this.http = http;
        this.facts = this.http.get(FACTS_URL);
    }
    AngularUniversalComponent.prototype.ngOnInit = function () {
    };
    return AngularUniversalComponent;
}());
AngularUniversalComponent = __decorate([
    core_1.Component({
        selector: 'app-angular-universal',
        template: __webpack_require__("../../../../../src/app/components/angular-universal/angular-universal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/angular-universal/angular-universal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
], AngularUniversalComponent);
exports.AngularUniversalComponent = AngularUniversalComponent;
var _a;
//# sourceMappingURL=angular-universal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/angular-universal/angular-universal.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
// Services
var angular_universal_service_1 = __webpack_require__("../../../../../src/app/components/angular-universal/angular-universal.service.ts");
// Modules
var angular_universal_routing_module_1 = __webpack_require__("../../../../../src/app/components/angular-universal/angular-universal-routing.module.ts");
// Components
var angular_universal_component_1 = __webpack_require__("../../../../../src/app/components/angular-universal/angular-universal.component.ts");
var AngularUniversalModule = (function () {
    function AngularUniversalModule() {
    }
    return AngularUniversalModule;
}());
AngularUniversalModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            angular_universal_routing_module_1.AngularUniversalRoutingModule
        ],
        declarations: [
            angular_universal_component_1.AngularUniversalComponent
        ],
        providers: [angular_universal_service_1.AngularUniversalService]
    })
], AngularUniversalModule);
exports.AngularUniversalModule = AngularUniversalModule;
//# sourceMappingURL=angular-universal.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/angular-universal/angular-universal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var AngularUniversalService = (function () {
    function AngularUniversalService() {
    }
    return AngularUniversalService;
}());
AngularUniversalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AngularUniversalService);
exports.AngularUniversalService = AngularUniversalService;
//# sourceMappingURL=angular-universal.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/firestore/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/firestore/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  auth works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/firestore/auth/auth.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    core_1.Component({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/components/firestore/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/firestore/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/firestore/firestore-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var router_1 = __webpack_require__("@angular/router");
// Components
var auth_component_1 = __webpack_require__("../../../../../src/app/components/firestore/auth/auth.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/components/firestore/home/home.component.ts");
var list_component_1 = __webpack_require__("../../../../../src/app/components/firestore/list/list.component.ts");
var single_component_1 = __webpack_require__("../../../../../src/app/components/firestore/single/single.component.ts");
var firestoreRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'auth', component: auth_component_1.AuthComponent },
    { path: 'list', component: list_component_1.ListComponent },
    { path: 'single', component: single_component_1.SingleComponent }
];
var FirestoreRoutingModule = (function () {
    function FirestoreRoutingModule() {
    }
    return FirestoreRoutingModule;
}());
FirestoreRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(firestoreRoutes)
        ],
        declarations: [],
        exports: [router_1.RouterModule]
    })
], FirestoreRoutingModule);
exports.FirestoreRoutingModule = FirestoreRoutingModule;
//# sourceMappingURL=firestore-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/firestore/firestore.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
// Routing
var firestore_routing_module_1 = __webpack_require__("../../../../../src/app/components/firestore/firestore-routing.module.ts");
// Components
var auth_component_1 = __webpack_require__("../../../../../src/app/components/firestore/auth/auth.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/components/firestore/home/home.component.ts");
var list_component_1 = __webpack_require__("../../../../../src/app/components/firestore/list/list.component.ts");
var single_component_1 = __webpack_require__("../../../../../src/app/components/firestore/single/single.component.ts");
var FirestoreModule = (function () {
    function FirestoreModule() {
    }
    return FirestoreModule;
}());
FirestoreModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            firestore_routing_module_1.FirestoreRoutingModule
        ],
        declarations: [
            auth_component_1.AuthComponent,
            home_component_1.HomeComponent,
            list_component_1.ListComponent,
            single_component_1.SingleComponent
        ]
    })
], FirestoreModule);
exports.FirestoreModule = FirestoreModule;
//# sourceMappingURL=firestore.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/firestore/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/firestore/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Reading Data from Cloud Firestore (BETA)</h2>\n<!-- <ul>\n  <li *ngFor=\"let fsItem of fsItems | async\">\n    {{ fsItem.title }}\n  </li>\n</ul> -->\n<p>This is the new database technology... This page is under construction. </p>"

/***/ }),

/***/ "../../../../../src/app/components/firestore/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
// Firebase
var firestore_1 = __webpack_require__("angularfire2/firestore"); // BETA
var HomeComponent = (function () {
    function HomeComponent(afFs) {
        this.fsItems = afFs.collection('items').valueChanges();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/firestore/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/firestore/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof firestore_1.AngularFirestore !== "undefined" && firestore_1.AngularFirestore) === "function" && _a || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/firestore/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/firestore/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/firestore/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/components/firestore/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/firestore/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/firestore/single/single.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/firestore/single/single.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  single works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/firestore/single/single.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var SingleComponent = (function () {
    function SingleComponent() {
    }
    SingleComponent.prototype.ngOnInit = function () {
    };
    return SingleComponent;
}());
SingleComponent = __decorate([
    core_1.Component({
        selector: 'app-single',
        template: __webpack_require__("../../../../../src/app/components/firestore/single/single.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/firestore/single/single.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SingleComponent);
exports.SingleComponent = SingleComponent;
//# sourceMappingURL=single.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumbnail.align-left {\r\n    float: left;\r\n    max-width: 200px;\r\n    margin-right: 1rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Welcome To AngularFire Demo</h2>\r\n<p><img class=\"thumbnail align-left\" src=\"../../../assets/img/fba4.png\" alt=\"Firebase + Angular\" title=\"Firebase + Angular\"/>This application demonstrates the use of two different Firebase database technologies: Relatime Database and Cloud Firestore.</p>\r\n<p>You can check out the demo application for both of these database technologies by clicking on the buttons in the header component above.</p>\r\n<button (click)=\"sharePage()\">Share Page on Facebook</button>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
// Facebook Share
var ngx_facebook_1 = __webpack_require__("ngx-facebook");
// Services
var app_service_1 = __webpack_require__("../../../../../src/app/app.service.ts");
// Constants
var constants_1 = __webpack_require__("../../../../../src/app/constants.ts");
var HomeComponent = (function () {
    function HomeComponent(as, fb) {
        this.as = as;
        this.fb = fb;
        this.as.initializeFbShare();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.sharePage = function () {
        var params = {
            href: constants_1.APP_DOMAIN,
            method: 'share'
        };
        this.fb.ui(params)
            .catch(function (e) { return console.error(e); });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" && _a || Object, typeof (_b = typeof ngx_facebook_1.FacebookService !== "undefined" && ngx_facebook_1.FacebookService) === "function" && _b || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"afAuth.authState | async; let user; else showLogin\">\n  <h1>Hello {{ user.displayName }}!</h1>\n  <button (click)=\"logout()\">Logout</button>\n</div>\n<ng-template #showLogin>\n  <p>Please login.</p>\n  <button (click)=\"login('google')\">Login with Google</button>\n  <button (click)=\"login('facebook')\">Login with Facebook</button>\n  <button (click)=\"login('twitter')\">Login with Twitter</button>\n  <button (click)=\"login('github')\">Login with GitHub</button>\n  <button (click)=\"login('anonymous')\">Login Anonymously</button>\n  <button (click)=\"login('email-password')\" disabled>Login with Email/Password</button>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/auth/auth.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
// Firebase
var auth_1 = __webpack_require__("angularfire2/auth");
var database_1 = __webpack_require__("angularfire2/database");
var firebase = __webpack_require__("firebase/app");
// Services
var app_service_1 = __webpack_require__("../../../../../src/app/app.service.ts");
var AuthComponent = (function () {
    function AuthComponent(afAuth, afDb, as) {
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.as = as;
        this.activeLoginProvider = '';
        afDb.list('users').valueChanges();
        // .subscribe(console.log);
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.user = this.afAuth.authState;
        this.checkUserState();
    };
    AuthComponent.prototype.checkUserState = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                // Initialize User Details 
                var name = res.displayName;
                var email = res.email;
                var img = res.photoURL;
                var id = res.uid;
                var provider = _this.activeLoginProvider;
                _this.users = _this.afDb.list('/users');
                // Call Push Function With User Details
                // this.pushUserToDb(name, email, img, id, provider);
                _this.changeUserStatus(id);
            }
            else {
                console.log('State: NOT logged in');
            }
        });
    };
    AuthComponent.prototype.login = function (platform) {
        var _this = this;
        console.log('clicked login');
        if (platform === 'google') {
            this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(function () {
                _this.activeLoginProvider = platform;
                _this.checkUserState();
                console.log('SUCCESSFULLY LOGGED IN');
            })
                .catch(function (err) { return console.log('THERE WAS AN ERROR: ' + err); });
        }
        else if (platform === 'facebook') {
            this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
                .then(function () {
                _this.activeLoginProvider = platform;
                _this.checkUserState();
                console.log('SUCCESSFULLY LOGGED IN');
            }).catch(function (err) { return console.log('THERE WAS AN ERROR: ' + err); });
        }
        else if (platform === 'twitter') {
            this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
                .then(function () {
                _this.activeLoginProvider = platform;
                _this.checkUserState();
                console.log('SUCCESSFULLY LOGGED IN');
            }).catch(function (err) { return console.log('THERE WAS AN ERROR: ' + err); });
        }
        else if (platform === 'github') {
            this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
                .then(function () {
                _this.activeLoginProvider = platform;
                _this.checkUserState();
                console.log('SUCCESSFULLY LOGGED IN');
            }).catch(function (err) { return console.log('THERE WAS AN ERROR: ' + err); });
        }
        else if (platform === 'anonymous') {
            this.afAuth.auth.signInAnonymously()
                .then(function () {
                _this.activeLoginProvider = platform;
                _this.checkUserState();
                console.log('SUCCESSFULLY LOGGED IN');
            }).catch(function (err) { return console.log('THERE WAS AN ERROR: ' + err); });
        }
        else if (platform === 'email-password') {
            this.afAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider())
                .then(function () {
                _this.activeLoginProvider = platform;
                _this.checkUserState();
                console.log('SUCCESSFULLY LOGGED IN');
            }).catch(function (err) { return console.log('THERE WAS AN ERROR: ' + err); });
        }
    };
    AuthComponent.prototype.logout = function () {
        var _this = this;
        console.log('clicked logout');
        // Why is this function running when I log in the second time?
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                console.log('Setting Status to Offline!');
                _this.users.update(res.uid, {
                    status: 'offline'
                });
            }
        });
        this.afAuth.auth.signOut()
            .then(function () {
            console.log('Successfully Logged Out User!!!!');
        })
            .catch(function (err) { return console.log(err, 'You do not have access!'); });
    };
    // Push User Details to Databse
    AuthComponent.prototype.pushUserToDb = function (name, email, img, id, provider) {
        this.as.currentUserId = id;
        this.users.update(id, {
            name: name || 'Anonymous',
            email: email,
            picture: img || 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png',
            uid: id,
            loginProvider: provider
        })
            .then(function () { return console.log('Successfully Added User To Database'); })
            .catch(function (err) { return console.log(err, 'You do not have access!'); });
    };
    AuthComponent.prototype.changeUserStatus = function (id) {
        this.as.currentUserId = id;
        console.log('Setting Status to Online!');
        this.users.update(id, {
            status: 'online'
        })
            .then(function () { return console.log('Successfully Added User To Database'); })
            .catch(function (err) { return console.log(err, 'You do not have access!'); });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    core_1.Component({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/components/realtime-db/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/realtime-db/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_1.AngularFireAuth !== "undefined" && auth_1.AngularFireAuth) === "function" && _a || Object, typeof (_b = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _b || Object, typeof (_c = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" && _c || Object])
], AuthComponent);
exports.AuthComponent = AuthComponent;
var _a, _b, _c;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/dynamic-querying/dynamic-querying.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/dynamic-querying/dynamic-querying.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Dynamic Querying</h1>\n<div *ngIf=\"items$ | async; let items; else loading\">\n  <ul>\n    <li *ngFor=\"let item of items\">\n      {{ item.payload.val().text }}\n      <code>{{ item.payload.key }}</code>\n    </li>\n  </ul>\n  <div *ngIf=\"items.length === 0\">No results, try clearing filters</div>\n</div>\n<ng-template #loading>Loading&hellip;</ng-template>\n<div>\n  <h4>Filter by size</h4>\n  <button (click)=\"filterBy('small')\">Small</button>\n  <button (click)=\"filterBy('medium')\">Medium</button>\n  <button (click)=\"filterBy('large')\">Large</button>\n  <button (click)=\"filterBy('x-large')\">Extra Large</button>\n  <button (click)=\"filterBy(null)\" *ngIf=\"this.size$.getValue()\">\n    <em>clear filter</em>\n  </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/dynamic-querying/dynamic-querying.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var database_1 = __webpack_require__("angularfire2/database");
var BehaviorSubject_1 = __webpack_require__("rxjs/BehaviorSubject");
__webpack_require__("rxjs/add/operator/switchMap");
var DynamicQueryingComponent = (function () {
    function DynamicQueryingComponent(afDb) {
        this.size$ = new BehaviorSubject_1.BehaviorSubject(null);
        this.items$ = this.size$.switchMap(function (size) {
            return afDb.list('/items', function (ref) {
                return size ? ref.orderByChild('size').equalTo(size) : ref;
            }).snapshotChanges();
        });
    }
    DynamicQueryingComponent.prototype.filterBy = function (size) {
        this.size$.next(size);
    };
    return DynamicQueryingComponent;
}());
DynamicQueryingComponent = __decorate([
    core_1.Component({
        selector: 'app-dynamic-querying',
        template: __webpack_require__("../../../../../src/app/components/realtime-db/dynamic-querying/dynamic-querying.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/realtime-db/dynamic-querying/dynamic-querying.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _a || Object])
], DynamicQueryingComponent);
exports.DynamicQueryingComponent = DynamicQueryingComponent;
var _a;
//# sourceMappingURL=dynamic-querying.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Realtime Database Demo</h2>\n<p>This is a simple CRUD application, which demonstrates how an Angular app works with Firebase Realtime Database.</p>"

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/realtime-db/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/realtime-db/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n    border-bottom: 1px solid #eee;\r\n    padding-bottom: 0.5rem;\r\n}\r\nh3 span {\r\n    font-size: 1rem;\r\n    font-weight: normal;\r\n}\r\nh4 {\r\n    margin: 0;\r\n}\r\nul {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\np {\r\n    margin: 0 0 0.5rem 0;\r\n}\r\na {\r\n    cursor: pointer;\r\n    color: #0c7eff;\r\n}\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n.json {\r\n    background: #eee;\r\n    border: 1px solid #ddd;\r\n    padding: 0 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n.list-box {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n.items-list,\r\n.list-actions {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n.items-list {\r\n    padding-right: 0.75rem;\r\n}\r\n.list-actions {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding-left: 0.75rem;\r\n}\r\ninput {\r\n    margin-bottom: 1rem;\r\n    padding: 0.3rem;\r\n}\r\n.item-box {\r\n    position: relative;\r\n    list-style: none;\r\n    border: 1px solid #eee;\r\n    background: #fafafa;\r\n    padding: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n.img-thumb {\r\n    position: absolute;\r\n    height: 100%;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n.img-thumb > img {\r\n    height: 100%;\r\n}\r\n.remove {\r\n    position: absolute;\r\n    top: -9px;\r\n    right: -9px;\r\n    width: 19px;\r\n    height: 19px;\r\n    text-align: center;\r\n    border: 1px solid #ccc;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    color: #ff0000;\r\n    font-size: 80%;\r\n    line-height: 20px;\r\n    background: #fff;\r\n}\r\nbutton {\r\n    border: 0;\r\n    padding: 0.5rem;\r\n    margin-bottom: 0.5rem;\r\n    cursor: pointer;\r\n}\r\n.delete {\r\n    background: #a80404;\r\n    color: #fff;\r\n}\r\n\r\n/* Edit Form */\r\n.edit-form {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(255, 255, 255, 0.9);\r\n}\r\n.edit-form form {\r\n    position: absolute;\r\n    width: 50%;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    padding: 2rem;\r\n    background: #fff;\r\n    border: 1px solid #ddd;\r\n}\r\n.edit-form form input {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Create, Read, Update, Delete data in a list.</h2>\n<!-- <h3>AngularFireDatabase with valueChanges() method</h3>\n<p>\n  <strong>valueChanges()</strong> returns an Observable of data as a synchronized array of the JSON object. (async pipe uses with\n  this method)\n</p> -->\n\n<div class=\"json\">\n  <h3>Items List JSON View</h3>\n  <p>{{ items | async | json }}</p>\n</div>\n\n<div class=\"list-box\">\n  <ul class=\"items-list\">\n    <li *ngFor=\"let item of items | async\" class=\"item-box\">\n      <h3>{{ item.title }}\n        <span>\n          <a (click)=\"toggleEditItemForm()\">edit</a>\n        </span>\n      </h3>\n      <p>Key: {{item.key}}</p>\n      <p>Size: {{ item.size }}</p>\n      <p>Details: {{ item.text }}</p>\n      <a (click)=\"goToLink(item.link)\">Link</a>\n      <div class=\"img-thumb\">\n        <img [src]=\"item.poster\" [alt]=\"item.title\" [title]=\"item.title \" />\n      </div>\n      <div class=\"remove\" (click)=\"removeSingleItemFromList(item.key)\">X</div>\n    </li>\n  </ul>\n\n  <div class=\"list-actions\">\n    <input type=\"text\" placeholder=\"Title\" #pushTitle>\n    <input type=\"text\" placeholder=\"Size\" #pushSize>\n    <input type=\"text\" placeholder=\"Details\" #pushDetails>\n    <input type=\"text\" value=\"https://website.com\" disabled=true #pushLink>\n    <input type=\"text\" value=\"https://screenshotlayer.com/images/assets/placeholder.png\" disabled=true #pushImage>\n    <button (click)=\"pushItemToList(pushTitle.value, pushSize.value, pushDetails.value, pushLink.value, pushImage.value)\">PUSH TO LIST</button>\n    <button (click)=\"removeAllItems()\" class=\"delete\">DELETE ALL ITEMS</button>\n  </div>\n</div>\n\n<div class=\"edit-form\" *ngIf=\"isEditVisible\">\n  <form [formGroup]=\"editItemForm\">\n    <input type=\"text\" placeholder=\"Title\" formControlName=\"title\" #setTitle>\n    <input type=\"text\" placeholder=\"Size\" formControlName=\"size\" #setSize>\n    <input type=\"text\" placeholder=\"Details\" value=\"selectedItem.link\" formControlName=\"details\" #setDetails>\n    <input type=\"text\" placeholder=\"Link\" value=\"selectedItem.link\" formControlName=\"link\" #setLink>\n    <input type=\"text\" placeholder=\"Image\" value=\"selectedItem.poster\" formControlName=\"image\" #setImage>\n    <button (click)=\"setSingleItem(setTitle.value, setSize.value, setDetails.value, setLink.value, setImage.value)\">SET</button>\n    <button (click)=\"updateSingleItem()\">UPDATE</button>\n    <div class=\"remove\" (click)=\"toggleEditItemForm()\">X</div>\n  </form>\n</div>\n\n<!-- <p>\n  <strong>snapshotChanges()</strong> returns an Observable of data as a synchronized array of\n  <strong>AngularFireAction&lt;DatabaseSnapshot&gt;[]</strong>.</p>\n<p>\n  <strong>stateChanges()</strong> returns an Observable of the most recent changes as a\n  <strong>AngularFireAction[]</strong>.\n</p>\n<p>\n  <strong>auditTrail()</strong> returns an Observable of\n  <strong>AngularFireAction[]</strong> as they occur. Similar to stateChanges(), but instead it keeps around the trail of events\n  as an array.\n</p> -->"

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var forms_1 = __webpack_require__("@angular/forms");
// Firebase
var database_1 = __webpack_require__("angularfire2/database");
__webpack_require__("rxjs/add/operator/map");
// Services
var realtime_db_service_1 = __webpack_require__("../../../../../src/app/components/realtime-db/realtime-db.service.ts");
var ListComponent = (function () {
    function ListComponent(afDb, fb, rds) {
        this.afDb = afDb;
        this.fb = fb;
        this.rds = rds;
        this.isEditVisible = false;
        this.itemsRef = this.afDb.list('items');
        // Use snapshotChanges().map() to store the key and rerun when chnages are detected
        this.items = this.itemsRef.snapshotChanges().map(function (changes) {
            console.log(changes);
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        // this.items = this.itemsRef.valueChanges();
        this.rds.updateList();
        // Edit Form
        this.editItemForm = this.fb.group({
            title: ['', forms_1.Validators.required],
            size: ['', forms_1.Validators.required],
            details: ['', forms_1.Validators.required],
            link: ['', forms_1.Validators.required],
            image: ['', forms_1.Validators.required]
        });
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.goToLink = function (link) {
        console.log(link);
        // window.location.href = link;
        window.open(link, '_blank'); // opens in a new tab
    };
    ListComponent.prototype.toggleEditItemForm = function () {
        this.isEditVisible = !this.isEditVisible;
    };
    ListComponent.prototype.pushItemToList = function (title, size, details, url, image) {
        this.itemsRef.push({
            title: title,
            size: size,
            text: details,
            link: url,
            poster: image
        })
            .then(function (_) { return console.log('New Item Added Successfully'); });
        // .catch(err => console.log(err, 'You do not have access to Push!'));
    };
    ListComponent.prototype.setSingleItem = function (itemKey, title, size, details, url, image) {
        this.itemsRef.set(itemKey, {
            title: title,
            size: size,
            text: details,
            link: url,
            poster: image
        })
            .then(function (_) { return console.log('Single Item Set Successfully'); })
            .catch(function (err) { return console.log(err, 'You do not have access to Set!'); });
    };
    ListComponent.prototype.updateSingleItem = function () {
    };
    ListComponent.prototype.removeSingleItemFromList = function (itemKey) {
        this.itemsRef.remove(itemKey)
            .then(function (_) { return console.log('Single Item Removed Successfully'); })
            .catch(function (err) { return console.log(err, 'You do not have access to Remove!'); });
    };
    ListComponent.prototype.removeAllItems = function () {
        this.itemsRef.remove()
            .then(function (_) { return console.log('All Items Removed Successfully'); })
            .catch(function (err) { return console.log(err, 'You do not have access to Remove!'); });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/components/realtime-db/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/realtime-db/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _a || Object, typeof (_b = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _b || Object, typeof (_c = typeof realtime_db_service_1.RealtimeDbService !== "undefined" && realtime_db_service_1.RealtimeDbService) === "function" && _c || Object])
], ListComponent);
exports.ListComponent = ListComponent;
var _a, _b, _c;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/querying-lists/querying-lists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n    border-bottom: 1px solid #eee;\r\n    padding-bottom: 0.5rem;\r\n}\r\nh2 em {\r\n    font-weight: normal;\r\n}\r\nh3 span {\r\n    font-size: 1rem;\r\n    font-weight: normal;\r\n}\r\nh4 {\r\n    margin: 0;\r\n}\r\nul {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\np {\r\n    margin: 0 0 0.5rem 0;\r\n}\r\na {\r\n    cursor: pointer;\r\n    color: #0c7eff;\r\n}\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n.json {\r\n    background: #eee;\r\n    border: 1px solid #ddd;\r\n    padding: 0 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n.item-box {\r\n    position: relative;\r\n    list-style: none;\r\n    border: 1px solid #eee;\r\n    background: #fafafa;\r\n    padding: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n.img-thumb {\r\n    position: absolute;\r\n    height: 100%;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n.img-thumb > img {\r\n    height: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/querying-lists/querying-lists.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Querying lists with methods like: <em>orderByChild, orderByKey, orderByValue, equalTo, limitToFirst, limitToLast, startAt, endAt.</em></h2>\n\n<div class=\"json\">\n  <h3>Items List JSON View</h3>\n  <p>{{ items | async | json }}</p>\n</div>\n\n  <ul class=\"items-list\">\n    <li *ngFor=\"let item of items | async\" class=\"item-box\">\n      <h3>{{ item.title }}</h3>\n      <p>Key: {{item.key}}</p>\n      <p>Size: {{ item.size }}</p>\n      <p>Details: {{ item.text }}</p>\n      <a (click)=\"goToLink(item.link)\">Link</a>\n      <div class=\"img-thumb\">\n        <img [src]=\"item.poster\" [alt]=\"item.title\" [title]=\"item.title \" />\n      </div>\n    </li>\n  </ul>\n  "

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/querying-lists/querying-lists.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
// Firebase
var database_1 = __webpack_require__("angularfire2/database");
// Services
var realtime_db_service_1 = __webpack_require__("../../../../../src/app/components/realtime-db/realtime-db.service.ts");
var QueryingListsComponent = (function () {
    function QueryingListsComponent(afDb, rds) {
        this.afDb = afDb;
        this.rds = rds;
        this.itemsRef = this.afDb.list('items', function (ref) { return ref.limitToLast(2); });
        // Use snapshotChanges().map() to store the key and rerun when chnages are detected
        this.items = this.itemsRef.snapshotChanges().map(function (changes) {
            console.log(changes);
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        // this.items = this.itemsRef.valueChanges();
        this.rds.updateList();
    }
    QueryingListsComponent.prototype.ngOnInit = function () {
    };
    QueryingListsComponent.prototype.goToLink = function (link) {
        console.log(link);
        // window.location.href = link;
        window.open(link, '_blank'); // opens in a new tab
    };
    return QueryingListsComponent;
}());
QueryingListsComponent = __decorate([
    core_1.Component({
        selector: 'app-querying-lists',
        template: __webpack_require__("../../../../../src/app/components/realtime-db/querying-lists/querying-lists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/realtime-db/querying-lists/querying-lists.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _a || Object, typeof (_b = typeof realtime_db_service_1.RealtimeDbService !== "undefined" && realtime_db_service_1.RealtimeDbService) === "function" && _b || Object])
], QueryingListsComponent);
exports.QueryingListsComponent = QueryingListsComponent;
var _a, _b;
//# sourceMappingURL=querying-lists.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/realtime-db-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var router_1 = __webpack_require__("@angular/router");
// Components
var realtime_db_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/realtime-db.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/home/home.component.ts");
var auth_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/auth/auth.component.ts");
var list_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/list/list.component.ts");
var single_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/single/single.component.ts");
var querying_lists_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/querying-lists/querying-lists.component.ts");
var dynamic_querying_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/dynamic-querying/dynamic-querying.component.ts");
var realtimeDBRoutes = [
    {
        path: '', component: realtime_db_component_1.RealtimeDbComponent, children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'auth', component: auth_component_1.AuthComponent },
            { path: 'list', component: list_component_1.ListComponent },
            { path: 'single', component: single_component_1.SingleComponent },
            { path: 'querying-lists', component: querying_lists_component_1.QueryingListsComponent },
            { path: 'dynamic-querying', component: dynamic_querying_component_1.DynamicQueryingComponent }
        ]
    }
];
var RealtimeDbRoutingModule = (function () {
    function RealtimeDbRoutingModule() {
    }
    return RealtimeDbRoutingModule;
}());
RealtimeDbRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(realtimeDBRoutes)
        ],
        declarations: [],
        exports: [router_1.RouterModule]
    })
], RealtimeDbRoutingModule);
exports.RealtimeDbRoutingModule = RealtimeDbRoutingModule;
//# sourceMappingURL=realtime-db-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/realtime-db.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n#sidebar {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n#main-content {\r\n    -webkit-box-flex: 4;\r\n        -ms-flex: 4;\r\n            flex: 4;\r\n    padding: 0 2rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/realtime-db.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar\">\r\n    <app-sidebar></app-sidebar>\r\n</div>\r\n\r\n<div id=\"main-content\">\r\n    <!-- <h2>Realtime Database Demo</h2> -->\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/realtime-db.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var RealtimeDbComponent = (function () {
    function RealtimeDbComponent() {
    }
    RealtimeDbComponent.prototype.ngOnInit = function () {
    };
    return RealtimeDbComponent;
}());
RealtimeDbComponent = __decorate([
    core_1.Component({
        selector: 'app-realtime-db',
        template: __webpack_require__("../../../../../src/app/components/realtime-db/realtime-db.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/realtime-db/realtime-db.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RealtimeDbComponent);
exports.RealtimeDbComponent = RealtimeDbComponent;
//# sourceMappingURL=realtime-db.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/realtime-db.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var forms_1 = __webpack_require__("@angular/forms");
// Routing
var realtime_db_routing_module_1 = __webpack_require__("../../../../../src/app/components/realtime-db/realtime-db-routing.module.ts");
// Services
var realtime_db_service_1 = __webpack_require__("../../../../../src/app/components/realtime-db/realtime-db.service.ts");
// Components
var realtime_db_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/realtime-db.component.ts");
var auth_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/auth/auth.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/home/home.component.ts");
var list_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/list/list.component.ts");
var single_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/single/single.component.ts");
var sidebar_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/shared/sidebar/sidebar.component.ts");
var querying_lists_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/querying-lists/querying-lists.component.ts");
var dynamic_querying_component_1 = __webpack_require__("../../../../../src/app/components/realtime-db/dynamic-querying/dynamic-querying.component.ts");
var RealtimeDbModule = (function () {
    function RealtimeDbModule() {
    }
    return RealtimeDbModule;
}());
RealtimeDbModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            realtime_db_routing_module_1.RealtimeDbRoutingModule
        ],
        declarations: [
            realtime_db_component_1.RealtimeDbComponent,
            auth_component_1.AuthComponent,
            home_component_1.HomeComponent,
            list_component_1.ListComponent,
            single_component_1.SingleComponent,
            sidebar_component_1.SidebarComponent,
            querying_lists_component_1.QueryingListsComponent,
            dynamic_querying_component_1.DynamicQueryingComponent
        ],
        providers: [realtime_db_service_1.RealtimeDbService]
    })
], RealtimeDbModule);
exports.RealtimeDbModule = RealtimeDbModule;
//# sourceMappingURL=realtime-db.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/realtime-db.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
// Firebase
var database_1 = __webpack_require__("angularfire2/database");
var RealtimeDbService = (function () {
    function RealtimeDbService(afDb) {
        this.afDb = afDb;
        this.itemsRef = this.afDb.list('items');
    }
    RealtimeDbService.prototype.updateList = function () {
        this.itemsRef.update('/', {
            item4: {
                title: 'CCC',
                size: 'medium',
                text: 'sample medium text',
                poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
                link: 'https://website.com'
            },
            item5: {
                title: 'BBB',
                size: 'large',
                text: 'sample large text',
                poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
                link: 'https://website.com'
            },
            item6: {
                title: 'AAA',
                size: 'large',
                text: 'sample large text',
                poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
                link: 'https://website.com'
            },
            item1: {
                title: 'FFF',
                size: 'small',
                text: 'sample small text',
                poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
                link: 'https://website.com'
            },
            item2: {
                title: 'EEE',
                size: 'small',
                text: 'sample small text',
                poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
                link: 'https://website.com'
            },
            item3: {
                title: 'DDD',
                size: 'medium',
                text: 'sample medium text',
                poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
                link: 'https://website.com'
            }
        })
            .then(function (_) { return console.log('List Reinitialized Successfully'); })
            .catch(function (err) { return console.log(err, 'You do not have access!'); });
    };
    return RealtimeDbService;
}());
RealtimeDbService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _a || Object])
], RealtimeDbService);
exports.RealtimeDbService = RealtimeDbService;
var _a;
//# sourceMappingURL=realtime-db.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/shared/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar {\r\n    /* background: #fafafa; */\r\n    border-right: 1px solid #ddd;   \r\n}\r\nul {\r\n    padding: 0;\r\n}\r\nli {\r\n    padding: 0.3rem 0.5rem;\r\n    list-style: none;\r\n    cursor: pointer;\r\n}\r\nli:hover,\r\nli.active {\r\n    background: #0c7eff;\r\n    color: #fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <ul>\n    <li routerLink=\"/realtime-db\" [routerLinkActiveOptions]=\"{exact: true}\" routerLinkActive=\"active\">Home</li>\n    <li routerLink=\"auth\" routerLinkActive=\"active\">Auth</li>\n    <li routerLink=\"single\" routerLinkActive=\"active\">Single</li>\n    <li routerLink=\"list\" routerLinkActive=\"active\">Lists</li>\n    <li routerLink=\"querying-lists\" routerLinkActive=\"active\">Querying lists</li>\n    <li routerLink=\"dynamic-querying\" routerLinkActive=\"active\">Dynamic querying</li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/shared/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/components/realtime-db/shared/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/realtime-db/shared/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/single/single.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n    border-bottom: 1px solid #eee;\r\n    padding-bottom: 0.5rem;\r\n}\r\na {\r\n    cursor: pointer;\r\n    color: #0c7eff;\r\n}\r\na:hover {\r\n    text-decoration: underline;\r\n}\r\n.json {\r\n    background: #eee;\r\n    border: 1px solid #ddd;\r\n    padding: 0 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n.item-box {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n.single-item,\r\n.item-actions {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n.single-item {\r\n    position: relative;\r\n    list-style: none;\r\n    border: 1px solid #eee;\r\n    background: #fafafa;\r\n    padding: 1rem;\r\n    padding-right: 0.75rem;\r\n    margin-bottom: 1rem;\r\n}\r\n.item-actions {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding-left: 0.75rem;\r\n}\r\ninput {\r\n    margin-bottom: 1rem;\r\n    padding: 0.3rem;\r\n}\r\n.img-thumb {\r\n    position: absolute;\r\n    height: 100%;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n.img-thumb > img {\r\n    height: 100%;\r\n}\r\nbutton {\r\n    border: 0;\r\n    padding: 0.5rem;\r\n    margin-bottom: 0.5rem;\r\n    cursor: pointer;\r\n}\r\n.delete {\r\n    background: #a80404;\r\n    color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/single/single.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Create, Read, Update, Delete data in a single item.</h2>\n\n<div class=\"json\">\n  <h3>Single Item JSON View</h3>\n  <p>{{ item | async | json }}</p>\n</div>\n\n<div class=\"item-box\">\n  <div class=\"single-item\" *ngIf=\"item\">\n    <h3>Title: {{ (item | async)?.title }}</h3>\n    <p>Size: {{ (item | async)?.size }}</p>\n    <p>Details: {{ (item | async)?.text }}</p>\n    <input [value]=\"(item | async)?.link\" type=\"hidden\" #link />\n    <a (click)=\"goToLink(link.value)\">Link</a>\n    <div class=\"img-thumb\">\n      <img [src]=\"[(item | async)?.poster]\" [alt]=\"(item | async)?.title\" [title]=\"(item | async)?.title\" />\n    </div>\n  </div>\n\n  <div class=\"item-actions\">\n    <input type=\"text\" #singleTitle placeholder=\"Title\" [value]=\"(item | async)?.title\" />\n    <input type=\"text\" #singleSize placeholder=\"Size\" [value]=\"(item | async)?.size\" />\n    <input type=\"text\" #singleText placeholder=\"Text\" [value]=\"(item | async)?.text\" />\n    <input type=\"text\" #singleLink placeholder=\"Link\" [value]=\"(item | async)?.link\" />\n    <input type=\"text\" #singleImage placeholder=\"Image\" [value]=\"(item | async)?.poster\" />\n    <button (click)=\"save(singleTitle.value, singleSize.value, singleText.value, singleLink.value, singleImage.value)\">SET SINGLE ITEM (destructive)</button>\n    <button (click)=\"update(singleTitle.value, singleSize.value, singleText.value, singleLink.value, singleImage.value)\">UPDATE SINGLE ITEM</button>\n    <button (click)=\"delete()\" class=\"delete\">DELETE SINGLE ITEM</button>\n  </div>\n</div>\n\n<p>The <strong>set()</strong> method removes the fields that are not part of the object, that you are sending to the database, while the\n  update method only updates the fields, and doesn't remove additional fields.</p>"

/***/ }),

/***/ "../../../../../src/app/components/realtime-db/single/single.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
// Firebase
var database_1 = __webpack_require__("angularfire2/database");
__webpack_require__("rxjs/add/operator/take");
var SingleComponent = (function () {
    function SingleComponent(afDb) {
        this.itemRef = afDb.object('item');
        this.item = this.itemRef.valueChanges();
        // Get the data as the original snapshot and run it when changes are detected 
        this.itemRef.snapshotChanges().subscribe(function (res) {
            console.log('Type: ', res.type);
            console.log('Key: ', res.key);
            console.log('Payload.val(): ', res.payload.val());
        });
        this.updateSingleItem();
    }
    SingleComponent.prototype.ngOnInit = function () {
    };
    SingleComponent.prototype.updateSingleItem = function () {
        this.itemRef.set({
            example: 'UNEDITABLE',
            title: 'Item 1',
            size: 'small',
            text: 'sample small text',
            poster: 'https://screenshotlayer.com/images/assets/placeholder.png',
            link: 'https://website.com'
        })
            .then(function (_) { return console.log('Single Item Reinitialized Successfully'); })
            .catch(function (err) { return console.log(err, 'You do not have access!'); });
    };
    SingleComponent.prototype.save = function (title, size, text, link, image) {
        this.itemRef.set({
            title: title,
            size: size,
            text: text,
            link: link,
            poster: image
        })
            .then(function (_) { return console.log('Single Item Set Successfully'); })
            .catch(function (err) { return console.log(err, 'You do not have access!'); });
    };
    SingleComponent.prototype.update = function (title, size, text, link, image) {
        this.itemRef.update({
            title: title,
            size: size,
            text: text,
            link: link,
            poster: image
        })
            .then(function (_) { return console.log('Single Item Updated Successfully'); })
            .catch(function (err) { return console.log(err, 'You do not have access!'); });
    };
    SingleComponent.prototype.delete = function () {
        this.itemRef.remove()
            .then(function (_) { return console.log('Single Item Deleted Successfully'); })
            .catch(function (err) { return console.log(err, 'You do not have access!'); });
    };
    SingleComponent.prototype.goToLink = function (link) {
        // window.location.href = link;
        window.open(link, '_blank'); // opens in a new tab
    };
    return SingleComponent;
}());
SingleComponent = __decorate([
    core_1.Component({
        selector: 'app-single',
        template: __webpack_require__("../../../../../src/app/components/realtime-db/single/single.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/realtime-db/single/single.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _a || Object])
], SingleComponent);
exports.SingleComponent = SingleComponent;
var _a;
//# sourceMappingURL=single.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 1rem 0;\r\n    background: #eee;\r\n}\r\n.logo {\r\n    padding-left: 2rem;\r\n}\r\n.logo h1 {\r\n    cursor: pointer;\r\n}\r\n.logo h1,\r\nul {\r\n    margin: 0;\r\n}\r\nul.main-menu {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\nli {\r\n    list-style: none;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    border: 1px solid #ddd;\r\n    padding: 0.5rem 1rem;\r\n    margin: 0 0.25rem;\r\n    outline: none;\r\n    background: #fff;\r\n}\r\nli.active {\r\n    background: #0c7eff;\r\n    color: #fff;\r\n}\r\n\r\n/*User Info*/\r\n.user-info {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding-right: 1rem;\r\n}\r\n.profile-img {\r\n    width: 33px;\r\n    height: 33px;\r\n    border-radius: 50%;\r\n}\r\n.profile-name {\r\n    line-height: 33px;\r\n    padding-left: 1rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"logo\">\n    <h1 routerLink=\"/\">AngularFire Demo</h1>\n  </div>\n  <ul class=\"main-menu\">\n    <li routerLink=\"realtime-db\" routerLinkActive=\"active\">Realtime Database</li>\n    <li routerLink=\"firestore\" routerLinkActive=\"active\">Cloud Firestore</li>\n    <li routerLink=\"angular-universal\" routerLinkActive=\"active\">Angular Universal</li>\n  </ul>\n\n  <div class=\"user-info\" *ngIf=\"afAuth.authState | async\">\n    <img class=\"profile-img\" [src]=\"[(currentUser|async)?.picture]\" [alt]=\"(currentUser|async)?.name\" [title]=\"(currentUser|async)?.name\" /> \n    <span class=\"profile-name\">{{ (currentUser|async)?.name }}</span>\n  </div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/components/shared/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
// Firebase
var auth_1 = __webpack_require__("angularfire2/auth");
var database_1 = __webpack_require__("angularfire2/database");
// Service
var app_service_1 = __webpack_require__("../../../../../src/app/app.service.ts");
var HeaderComponent = (function () {
    function HeaderComponent(afDb, afAuth, as) {
        var _this = this;
        this.afDb = afDb;
        this.afAuth = afAuth;
        this.as = as;
        this.usersRef = afDb.object('users');
        this.usersRef.valueChanges().subscribe(function (res) {
            console.log('User Value Changes. Toggling User Info in Header.');
            _this.initializeUid();
            // console.log(res);
            // console.log(this.currentUserId);
            _this.currentUserRef = afDb.object('users/' + _this.currentUserId);
            _this.currentUser = _this.currentUserRef.valueChanges();
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = this.afAuth.authState;
    };
    HeaderComponent.prototype.initializeUid = function () {
        this.currentUserId = this.as.currentUserId;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/shared/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof database_1.AngularFireDatabase !== "undefined" && database_1.AngularFireDatabase) === "function" && _a || Object, typeof (_b = typeof auth_1.AngularFireAuth !== "undefined" && auth_1.AngularFireAuth) === "function" && _b || Object, typeof (_c = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" && _c || Object])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RTDB_COLLECTIONS = {
    ITEM: '/item',
    ITEMS: '/items',
    USERS: '/users'
};
exports.APP_DOMAIN = 'https://a4test-d6003.firebaseapp.com';
exports.FB_SHARE_APP_ID = '492898314425328';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDT2FkE_UXEAr6OBJhTAGoKJXevVJebSNM",
        authDomain: "a4test-d6003.firebaseapp.com",
        databaseURL: "https://a4test-d6003.firebaseio.com",
        projectId: "a4test-d6003",
        storageBucket: "a4test-d6003.appspot.com",
        messagingSenderId: "428388391138"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.server.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var __lazy_0__ = __webpack_require__("../../../../../src/app/components/realtime-db/realtime-db.module.ts");
var __lazy_1__ = __webpack_require__("../../../../../src/app/components/firestore/firestore.module.ts");
var __lazy_2__ = __webpack_require__("../../../../../src/app/components/angular-universal/angular-universal.module.ts");
var app_server_module_1 = __webpack_require__("../../../../../src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = { "app/components/realtime-db/realtime-db.module#RealtimeDbModule": __lazy_0__.RealtimeDbModule, "app/components/firestore/firestore.module#FirestoreModule": __lazy_1__.FirestoreModule, "app/components/angular-universal/angular-universal.module#AngularUniversalModule": __lazy_2__.AngularUniversalModule };
//# sourceMappingURL=main.server.js.map

/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.server.ts");


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/platform-browser":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-server":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "angularfire2":
/***/ (function(module, exports) {

module.exports = require("angularfire2");

/***/ }),

/***/ "angularfire2/auth":
/***/ (function(module, exports) {

module.exports = require("angularfire2/auth");

/***/ }),

/***/ "angularfire2/database":
/***/ (function(module, exports) {

module.exports = require("angularfire2/database");

/***/ }),

/***/ "angularfire2/firestore":
/***/ (function(module, exports) {

module.exports = require("angularfire2/firestore");

/***/ }),

/***/ "firebase/app":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "ngx-facebook":
/***/ (function(module, exports) {

module.exports = require("ngx-facebook");

/***/ }),

/***/ "rxjs/BehaviorSubject":
/***/ (function(module, exports) {

module.exports = require("rxjs/BehaviorSubject");

/***/ }),

/***/ "rxjs/add/operator/map":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ }),

/***/ "rxjs/add/operator/switchMap":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/switchMap");

/***/ }),

/***/ "rxjs/add/operator/take":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/take");

/***/ })

/******/ })));