webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main>\n    \n</app-main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translateService) {
        this.translateService = translateService;
        this.title = 'Gesthor';
        this.translateService.addLangs(['pt-br']);
        this.translateService.setDefaultLang('pt-br');
        this.translateService.use('pt-br');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export httpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main__ = __webpack_require__("./src/app/main/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar__ = __webpack_require__("./src/app/navbar/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities__ = __webpack_require__("./src/app/entities/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth__ = __webpack_require__("./src/app/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/**
 * Creates an instance for a HTTP loader for translations.
 *
 * @param httpClient A HTTP Client.
 */
function httpLoaderFactory(httpClient) {
    return new __WEBPACK_IMPORTED_MODULE_11__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](httpClient, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__auth__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__main__["a" /* MainModule */],
                __WEBPACK_IMPORTED_MODULE_5__navbar__["a" /* NavbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__entities__["a" /* EntitiesModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: httpLoaderFactory,
                        deps: [
                            __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */]
                        ]
                    }
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            providers: [],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthCallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthCallbackComponent = /** @class */ (function () {
    /**
     * Calls for authorization service.
     *
     * @param authService Authorization service.
     */
    function AuthCallbackComponent(authService) {
        this.authService = authService;
    }
    /**
     * Handles the login callback as the decoded hash is sent by Auth0.
     *
     * This component receives such hash and sends it to the specified method.
     */
    AuthCallbackComponent.prototype.ngOnInit = function () {
        this.authService.handleLoginCallback();
    };
    AuthCallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth-callback',
            template: '<mat-card>Carregando...</mat-card>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthCallbackComponent);
    return AuthCallbackComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_callback_component__ = __webpack_require__("./src/app/auth/auth-callback.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'callback',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__auth_callback_component__["a" /* AuthCallbackComponent */]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_callback_component__ = __webpack_require__("./src/app/auth/auth-callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__ = __webpack_require__("./src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("./src/app/auth/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* SharedModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__auth_callback_component__["a" /* AuthCallbackComponent */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_auth0_js__ = __webpack_require__("./node_modules/auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_lock__ = __webpack_require__("./node_modules/auth0-lock/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_lock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_auth0_lock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_advisor_progress_advisor_service__ = __webpack_require__("./src/app/progress-advisor/progress-advisor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * An Auth0 service interface.
 *
 * @author rodrigo-novaes
 */
var AuthService = /** @class */ (function () {
    /**
     * Builds the service based on the current session settings.
     *
     * @param router A router reference.
     */
    function AuthService(router, progressAdvisorService, httpClient) {
        this.router = router;
        this.progressAdvisorService = progressAdvisorService;
        this.httpClient = httpClient;
        /**
         * An auth parameters object that sets google login to be selectable.
         */
        this.authParams = {
            scope: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.scope,
            prompt: 'select_account'
        };
        /**
         * Constant reference to the auth0 lock instance.
         */
        this.auth0Lock = new __WEBPACK_IMPORTED_MODULE_2_auth0_lock___default.a(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.clientID, __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.domain, {
            rememberLastLogin: false,
            auth: {
                audience: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.audience,
                redirect: true,
                redirectUrl: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.redirect,
                responseType: 'token',
                params: this.authParams
            }
        });
        /**
         * A private reference to the Auth0 web authority.
         */
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_1_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.clientID,
            domain: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.domain,
            responseType: 'token',
            redirectUri: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.redirect,
            audience: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.audience,
            scope: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.scope
        });
        /**
         * A behavior subject for the user profile.
         */
        this._userProfile = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["BehaviorSubject"](this.userProfile);
        /**
         * Creates a stream for observing into user profile's changes.
         */
        this.userProfile$ = this._userProfile.asObservable();
        this._getAccessToken();
    }
    AuthService_1 = AuthService;
    /**
     * Open centralized login.
     */
    AuthService.prototype.login = function () {
        this.progressAdvisorService.announceConfig({ show: true });
        this.auth0Lock.show();
    };
    /**
     * Handles the login callback.
     */
    AuthService.prototype.handleLoginCallback = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken) {
                window.location.hash = '';
                _this._getUserInfo(authResult);
            }
            _this.router.navigate(['/']);
            _this.progressAdvisorService.announceConfig({ show: false });
        });
    };
    /**
     * Gets an access token based on the session.
     */
    AuthService.prototype._getAccessToken = function () {
        var _this = this;
        this.auth0.checkSession({}, function (err, authResult) {
            if (authResult && authResult.accessToken) {
                _this._getUserInfo(authResult);
            }
            else if (err) {
                _this.logout();
                _this.authenticated = false;
            }
        });
    };
    /**
     * Get the user's information from the authorization result.
     *
     * @param authResult A reference to the authorization result.
     */
    AuthService.prototype._getUserInfo = function (authResult) {
        var _this = this;
        this.auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            if (profile) {
                _this._setSession(authResult, profile);
            }
        });
    };
    /**
     * Sets the current session based on the Auth0Profile and the decoded hash.
     *
     * @param authResult Decoded hash.
     * @param profile User's profile.
     */
    AuthService.prototype._setSession = function (authResult, profile) {
        var expTime = authResult.expiresIn * 1000 + Date.now();
        this.httpClient.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.managementApi.url, {
            grant_type: 'client_credentials',
            client_id: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.clientID,
            client_secret: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.managementApi.clientSecret,
            audience: __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].auth.managementApi.audience
        }, {
            headers: { 'content-type': 'application/json' }
        }).subscribe(function (response) {
            console.log(response);
        });
        localStorage.setItem(AuthService_1.EXPIRES_AT_STORAGE_KEY, JSON.stringify(expTime));
        this.userProfile = profile;
        this._userProfile.next(this.userProfile);
        this.authenticated = true;
    };
    /**
     * Removes current session data.
     */
    AuthService.prototype.logout = function () {
        localStorage.removeItem(AuthService_1.EXPIRES_AT_STORAGE_KEY);
        this.userProfile = undefined;
        this._userProfile.next(this.userProfile);
        this.authenticated = false;
    };
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        /**
         * Checks if current user is authenticated.
         */
        get: function () {
            var expiresAt = JSON.parse(localStorage.getItem(AuthService_1.EXPIRES_AT_STORAGE_KEY));
            return Date.now() < expiresAt && this.authenticated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "getManagementAPIToken", {
        /**
         * Gets the string corresponding to the access token.
         */
        get: function () {
            return this.managementAPIToken;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks if current user has a matching `role` to access determinated route.
     *
     * @param role Role to be checked.
     */
    AuthService.prototype.hasPermission = function (role) {
        return (this.userProfile.app_metadata.userRole == role);
    };
    /**
     * Key that references the current session's expiration time on the local storage.
     */
    AuthService.EXPIRES_AT_STORAGE_KEY = 'expires_at';
    AuthService = AuthService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__progress_advisor_progress_advisor_service__["a" /* ProgressAdvisorService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
    var AuthService_1;
}());



/***/ }),

/***/ "./src/app/auth/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_module__["a"]; });




/***/ }),

/***/ "./src/app/auth/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    /**
     * Constructor that injects other servces.
     */
    function UserService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.api = "https://" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].auth.domain + "/api/v2/users";
    }
    /**
     * Gets an user by id.
     *
     * @param user_id An user identifier.
     */
    UserService.prototype.getUser = function (user_id) {
        return this.httpClient.get(this.api + "/" + user_id, {
            headers: this._createHeaders(),
            params: { search_engine: 'v3' },
            observe: 'body'
        }).map(function (res) {
            return res;
        });
    };
    /**
     * Create Http Headers according to the access token.
     */
    UserService.prototype._createHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
            'authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJqazJSRU16TlVNME5EUTVNemsyTnpOQ05FSkZNVFV4TURWQk9FVTFORU5HTXpNNE5UZEZNQSJ9.eyJpc3MiOiJodHRwczovL3Jybm92YWVzanIuYXV0aDAuY29tLyIsInN1YiI6InFVMmxxVVRPaWoyVnNqN1RpbWlvbG42bnlLVHpmMklkQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3Jybm92YWVzanIuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1Mjk4NzUxMjMsImV4cCI6MTAwMTUyOTg3NTEyMiwiYXpwIjoicVUybHFVVE9pajJWc2o3VGltaW9sbjZueUtUemYySWQiLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.Vhi_dVC0i0qUF_-W_PIafCUn0_jWKUu17PcZ64LqGuVO8uTMAsG0zrFnsMpQcd4Akomme5G-AWi79ixVNflSV2NVCNKoe3PMFvoiOjfsBeAhtGoqCzN8P97oTfGXp29ScL0qVHAX7GKQLvX7rXsijX2DbzpQJM_3TYZX97GPzfhjJmFvdSMPFMBUi1omYWjM6v7Wh-pDTZ_7IaNhYIbyEU1JlmhdEbsPf1sSr5Fkyis3vbd8xbRzvkhz5r4kjcZxgt47-5ggmKDu9vnUDTQytzX2lIupVh0xf1TQZS9jE1BKMSXQBJ_8a6-vJGDh8Njtg6HE09zaX0EbzMTTRjUjmg"
        });
    };
    UserService.prototype._createParams = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpParams */]().set('search_engine', 'v3');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/entities/entities.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntitiesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EntitiesModule = /** @class */ (function () {
    function EntitiesModule() {
    }
    EntitiesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: []
        })
    ], EntitiesModule);
    return EntitiesModule;
}());



/***/ }),

/***/ "./src/app/entities/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_module__ = __webpack_require__("./src/app/entities/entities.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__entities_module__["a"]; });



/***/ }),

/***/ "./src/app/main/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_module__ = __webpack_require__("./src/app/main/main.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_module__["a"]; });



/***/ }),

/***/ "./src/app/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ".main-container \n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.main-container\nh1\nsmall\n{\n    font-size: 9pt;\n    color: #7986CB;\n}\n\n.main-is-mobile \n.main-toolbar \n{\n    position: fixed;\n    z-index: 2;\n}\n\nh1.main-app-name \n{\n    margin-left: 8px;\n    vertical-align: text-bottom;\n}\n\n.main-sidenav-container \n{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n\n.main-is-mobile \n.main-sidenav-container \n{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n}\n\n.main-spacer\n{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" [class.main-is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\" class=\"main-toolbar\">\n    <a mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></a>\n    <h1 class=\"main-app-name\">{{'main.appName' | translate}}&nbsp;<small>{{version}}</small></h1>\n    <span class=\"main-spacer\"></span>\n    <app-member></app-member>\n  </mat-toolbar>\n  <mat-sidenav-container class=\"main-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <router-outlet name=\"navbar\"></router-outlet>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <app-progress-advisor></app-progress-advisor>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    /**
     * Injects the necessary services into this component.
     *
     * @param translateService Service of translations.
     * @param changeDetectorRef Changes detector.
     * @param media Media matcher.
     */
    function MainComponent(translateService, changeDetectorRef, media) {
        this.translateService = translateService;
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
        /**
         * The app's version.
         */
        this.version = __WEBPACK_IMPORTED_MODULE_3__shared__["b" /* WebappConstants */].APP_VERSION;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__member__ = __webpack_require__("./src/app/member/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_advisor__ = __webpack_require__("./src/app/progress-advisor/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__member__["a" /* MemberModule */],
                __WEBPACK_IMPORTED_MODULE_5__progress_advisor__["a" /* ProgressAdvisorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__main_component__["a" /* MainComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__main_component__["a" /* MainComponent */]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/member/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member_module__ = __webpack_require__("./src/app/member/member.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__member_module__["a"]; });



/***/ }),

/***/ "./src/app/member/member.component.css":
/***/ (function(module, exports) {

module.exports = ":host div {\n    padding: 0;\n    margin: 0;\n}\n\n:host p {\n    white-space: pre-line;\n    text-align: justify;\n    padding: 0;\n    margin: 0;\n}\n\n.member-container {    \n    width: 200px;\n}\n\n.button-container {\n    float: right;\n}\n\n:host br {\n    clear: both;\n}\n\n.login-card-container {\n    position: relative;\n    right: 25px;\n    width: 200px;\n}\n\n.login-card {\n    position: fixed;\n    z-index: 2;     \n    width: 200px;\n    line-break: normal;\n    padding: 0;\n    margin: 0;\n}\n\n.login-card img {\n    height: 50px;\n    width: 50px;\n    padding: 0;\n    margin: 0;\n}"

/***/ }),

/***/ "./src/app/member/member.component.html":
/***/ (function(module, exports) {

module.exports = "<div (clickOutside)=\"onClickOutside($event)\">\n    <div class=\"button-container\">\n        <button mat-icon-button (click)=\"toggle()\" *ngIf=\"!authService.isAuthenticated\">\n            <mat-icon>account_circle</mat-icon>\n        </button>\n        <button mat-button (click)=\"toggle()\" *ngIf=\"authService.isAuthenticated\">\n            <mat-icon>account_circle</mat-icon>\n            {{ user?.given_name }}\n        </button>\n    </div>\n    <br>\n    <div class=\"login-card-container\">\n      <mat-card class=\"login-card\" *ngIf=\"showCard\" [@enterCard]>\n        <div *ngIf=\"!authService.isAuthenticated\">\n          <mat-card-header>\n            <img mat-card-avatar src=\"assets/img/no-user.png\" />\n            <mat-card-title>{{ 'member.bemVindo' | translate }}</mat-card-title>\n          </mat-card-header>\n          <br>\n          <mat-card-content class=\"login-content\">\n            <p>{{ 'member.loginHeader' | translate }}</p>\n            <p>{{ 'member.loginBody' | translate }}</p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button (click)=\"authService.login()\">{{ 'global.login' | translate }}</button>\n          </mat-card-actions>\n        </div>\n        <div *ngIf=\"authService.isAuthenticated\">\n          <mat-card-header>\n            <img mat-card-avatar [src]=\"user?.picture\" />\n            <mat-card-title>{{user?.name}}</mat-card-title>\n          </mat-card-header>\n          <br>\n          <mat-card-content>\n            <p>{{ 'member.user.email' | translate}}: {{user?.email}}</p>\n            <p>{{ 'member.user.locale' | translate}}: {{user?.locale}}</p>\n            <p></p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button (click)=\"authService.logout()\">{{ 'global.logout' | translate }}</button>\n          </mat-card-actions>\n        </div>\n      </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/member/member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth__ = __webpack_require__("./src/app/auth/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_user_service__ = __webpack_require__("./src/app/auth/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberComponent = /** @class */ (function () {
    /**
     * Injects necessary services.
     *
     * @param authService Authorization service.
     */
    function MemberComponent(authService, translateService, userService) {
        var _this = this;
        this.authService = authService;
        this.translateService = translateService;
        this.userService = userService;
        /**
         * Controls view of login card.
         */
        this.showCard = false;
        this.authService.userProfile$.subscribe(function (res) {
            _this.user = res;
            if (_this.user) {
                _this.userService.getUser(_this.user.sub).subscribe(function (res) {
                    console.log(res);
                });
            }
        });
    }
    /**
     * Initializes the data into the component.
    */
    MemberComponent.prototype.ngOnInit = function () {
    };
    /**
     * Called on component's destroy.
    */
    MemberComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * Switches between `true` or `false` on login card visualization.
    */
    MemberComponent.prototype.toggle = function () {
        this.showCard = !this.showCard;
    };
    /**
     * Cancels the view of mat-card when clicking outside of it.
     *
     * @param event The event object.
     */
    MemberComponent.prototype.onClickOutside = function (event) {
        this.showCard = false;
    };
    MemberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member',
            template: __webpack_require__("./src/app/member/member.component.html"),
            styles: [__webpack_require__("./src/app/member/member.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* trigger */])('enterCard', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({ transform: 'scale(0.8)', opacity: 0.35 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('256ms 2ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({ transform: 'scale(1)', opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('256ms 2ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({ transform: 'scale(0.8)', opacity: 0.35 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth__["b" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__auth_user_service__["a" /* UserService */]])
    ], MemberComponent);
    return MemberComponent;
}());



/***/ }),

/***/ "./src/app/member/member.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_click_outside__ = __webpack_require__("./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_component__ = __webpack_require__("./src/app/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MemberModule = /** @class */ (function () {
    function MemberModule() {
    }
    MemberModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ng_click_outside__["ClickOutsideModule"],
                __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__member_component__["a" /* MemberComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__member_component__["a" /* MemberComponent */]
            ]
        })
    ], MemberModule);
    return MemberModule;
}());



/***/ }),

/***/ "./src/app/navbar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_module__ = __webpack_require__("./src/app/navbar/navbar.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__navbar_module__["a"]; });



/***/ }),

/***/ "./src/app/navbar/navbar-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var navbarRoutes = [
    {
        path: '',
        outlet: 'navbar',
        component: __WEBPACK_IMPORTED_MODULE_1__navbar_component__["a" /* NavbarComponent */]
    }
];
var NavbarRoutingModule = /** @class */ (function () {
    function NavbarRoutingModule() {
    }
    NavbarRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(navbarRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]
            ]
        })
    ], NavbarRoutingModule);
    return NavbarRoutingModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ":host div \n{\n    width: 200px;\n    font-size: 10pt;\n    text-align: justify;\n}\n\n:host p\n{\n    padding: .25em .25em .25em .35em;\n}\n\n:host button\n{\n    margin: 0 0 0 2em;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-nav-list *ngIf=\"authService.isAuthenticated\">\n  <a mat-list-item routerLink=\".\">{{ 'navbar.cliente.link' | translate }}</a>\n  <a mat-list-item routerLink=\".\">{{ 'navbar.ordemServico.link' | translate }}</a>\n</mat-nav-list>\n\n<div *ngIf=\"!authService.isAuthenticated\">\n  <p>{{ 'navbar.messages.loginHeader' | translate }}</p>\n  <p>{{ 'navbar.messages.loginBody' | translate }}</p>\n  <button mat-button (click)=\"authService.login()\">{{ 'global.login' | translate }}</button>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth__ = __webpack_require__("./src/app/auth/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    /**
     * A constructor that injects many services.
     *
     * @param authService Authorization service.
     * @param translateService Translating service.
     * @param changeDetectorRef Change detector references.
     * @param media A media matcher.
     */
    function NavbarComponent(authService, translateService, changeDetectorRef, media) {
        this.authService = authService;
        this.translateService = translateService;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    /**
     * Method executed in the initialization of the component.
     */
    NavbarComponent.prototype.ngOnInit = function () {
    };
    /**
     * Method executed when the component is destroyed.
     */
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_routing_module__ = __webpack_require__("./src/app/navbar/navbar-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("./src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["c" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__navbar_routing_module__["a" /* NavbarRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]
            ]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/progress-advisor/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progress_advisor_service__ = __webpack_require__("./src/app/progress-advisor/progress-advisor.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_advisor_module__ = __webpack_require__("./src/app/progress-advisor/progress-advisor.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__progress_advisor_module__["a"]; });




/***/ }),

/***/ "./src/app/progress-advisor/progress-advisor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressAdvisorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_advisor_service__ = __webpack_require__("./src/app/progress-advisor/progress-advisor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressAdvisorComponent = /** @class */ (function () {
    /**
     * Injects the necessary services.
     *
     * @param progressAdvisorService The global progress bar's service.
     */
    function ProgressAdvisorComponent(progressAdvisorService) {
        this.progressAdvisorService = progressAdvisorService;
        /**
         * If progress bar must be displayed or not.
         */
        this.show = false;
        /**
         * The progress bar's mode.
         */
        this.mode = 'indeterminate';
        /**
         * The value of the progress bar.
         */
        this.value = 0;
        /**
         * The buffer value of the progress bar.
         */
        this.bufferValue = 0;
    }
    /**
     * Subscribes to events.
     */
    ProgressAdvisorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.progressAdvisorService.configNotifier$.subscribe(function (config) {
            _this.show = config.show;
            _this.mode = config.mode ? config.mode : 'indeterminate';
            _this.value = config.value ? config.value : 0;
            _this.bufferValue = config.bufferValue ? config.bufferValue : 0;
        });
    };
    ProgressAdvisorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-progress-advisor',
            template: "\n    <mat-progress-bar [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\" *ngIf=\"show\">\n    </mat-progress-bar>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__progress_advisor_service__["a" /* ProgressAdvisorService */]])
    ], ProgressAdvisorComponent);
    return ProgressAdvisorComponent;
}());



/***/ }),

/***/ "./src/app/progress-advisor/progress-advisor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressAdvisorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_advisor_component__ = __webpack_require__("./src/app/progress-advisor/progress-advisor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_advisor_service__ = __webpack_require__("./src/app/progress-advisor/progress-advisor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProgressAdvisorModule = /** @class */ (function () {
    function ProgressAdvisorModule() {
    }
    ProgressAdvisorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__progress_advisor_component__["a" /* ProgressAdvisorComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__progress_advisor_component__["a" /* ProgressAdvisorComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__progress_advisor_service__["a" /* ProgressAdvisorService */]
            ]
        })
    ], ProgressAdvisorModule);
    return ProgressAdvisorModule;
}());



/***/ }),

/***/ "./src/app/progress-advisor/progress-advisor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressAdvisorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressAdvisorService = /** @class */ (function () {
    /**
     * Instantiates the new service.
     */
    function ProgressAdvisorService() {
        /**
         * A configuration subject.
         */
        this.configSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        /**
         * Receives notifications from the subject.
         */
        this.configNotifier$ = this.configSubject.asObservable();
    }
    /**
     * Announces `config` to the interested components.
     *
     * @param config A set of configurations for the global progress bar.
     */
    ProgressAdvisorService.prototype.announceConfig = function (config) {
        this.configSubject.next(config);
    };
    ProgressAdvisorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ProgressAdvisorService);
    return ProgressAdvisorService;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webapp_constants__ = __webpack_require__("./src/app/shared/webapp.constants.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__webapp_constants__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__shared_module__["a"]; });




/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * A common module to be imported by all modules of Gesthor's app.
 *
 * Contains modules from:
 *
 * - Angular common API;
 *
 * - Angular Material's API;
 *
 * - Translate Module from `ngx-translate`.
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/webapp.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebappConstants; });
/**
 * A class that defines the webapp's constants.
 */
var WebappConstants = /** @class */ (function () {
    function WebappConstants() {
    }
    /**
     * The system's current version.
     */
    WebappConstants.APP_VERSION = 'v1.0.0';
    return WebappConstants;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:8080/',
    auth: {
        clientID: 'D0zEEiNCXv25UyNCfGJ1YlUohbp6XG1M',
        managementApi: {
            clientSecret: 'jzKlwruyaZj4c2nVVIre1XOusaKd7mvW9AFJZDxOibENrAquebPKy3DAN-b49uu0',
            audience: 'https://rrnovaesjr.auth0.com/api/v2/',
            url: 'https://rrnovaesjr.auth0.com/oauth/token'
        },
        domain: 'rrnovaesjr.auth0.com',
        audience: 'http://localhost:8080',
        redirect: 'http://localhost:9000/callback',
        scope: 'openid profile email'
    },
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map