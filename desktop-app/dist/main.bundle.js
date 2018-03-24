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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Gesthor';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var main_1 = __webpack_require__("./src/app/main/index.ts");
var navbar_1 = __webpack_require__("./src/app/navbar/index.ts");
var entities_1 = __webpack_require__("./src/app/entities/index.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var auth_1 = __webpack_require__("./src/app/auth/index.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                auth_1.AuthModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                main_1.MainModule,
                navbar_1.NavbarModule,
                entities_1.EntitiesModule,
                router_1.RouterModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/auth/auth-callback.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AuthCallbackComponent = /** @class */ (function () {
    function AuthCallbackComponent() {
    }
    AuthCallbackComponent.prototype.ngOnInit = function () {
    };
    AuthCallbackComponent = __decorate([
        core_1.Component({
            selector: 'app-auth-callback',
            template: '<mat-card>Carregando...</mat-card>'
        }),
        __metadata("design:paramtypes", [])
    ], AuthCallbackComponent);
    return AuthCallbackComponent;
}());
exports.AuthCallbackComponent = AuthCallbackComponent;


/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_callback_component_1 = __webpack_require__("./src/app/auth/auth-callback.component.ts");
exports.routes = [
    {
        path: 'callback',
        pathMatch: 'full',
        component: auth_callback_component_1.AuthCallbackComponent
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(exports.routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());
exports.AuthRoutingModule = AuthRoutingModule;


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var auth_service_1 = __webpack_require__("./src/app/auth/auth.service.ts");
var auth_callback_component_1 = __webpack_require__("./src/app/auth/auth-callback.component.ts");
var auth_routing_module_1 = __webpack_require__("./src/app/auth/auth-routing.module.ts");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                auth_routing_module_1.AuthRoutingModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                material_1.MatCardModule
            ],
            providers: [
                auth_service_1.AuthService
            ],
            declarations: [
                auth_callback_component_1.AuthCallbackComponent
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth0 = __webpack_require__("./node_modules/auth0-js/src/index.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new auth0.WebAuth({
            clientID: environment_1.environment.auth.clientID,
            domain: environment_1.environment.auth.domain,
            responseType: 'token',
            redirectUri: environment_1.environment.auth.redirect,
            audience: environment_1.environment.auth.audience,
            scope: environment_1.environment.auth.scope
        });
        this.getAccessToken();
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleLoginCallback = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken) {
                window.location.hash = '';
                _this.getUserInfo(authResult);
            }
            else if (err) {
                console.error("Error: " + err.error);
            }
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.getAccessToken = function () {
        var _this = this;
        this.auth0.checkSession({}, function (err, authResult) {
            if (authResult && authResult.accessToken) {
                _this.getUserInfo(authResult);
            }
            else if (err) {
                console.log(err);
                _this.logout();
                _this.authenticated = false;
            }
        });
    };
    AuthService.prototype.getUserInfo = function (authResult) {
        var _this = this;
        this.auth0.client.userInfo(authResult.accessToken, function (err, profile) {
            if (profile) {
                _this._setSession(authResult, profile);
            }
        });
    };
    AuthService.prototype._setSession = function (authResult, profile) {
        var expTime = authResult.expiresIn * 1000 + Date.now();
        localStorage.setItem('expires_at', JSON.stringify(expTime));
        this.accessToken = authResult.accessToken;
        this.userProfile = profile;
        this.authenticated = true;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('expires_at');
        this.userProfile = undefined;
        this.accessToken = undefined;
        this.authenticated = false;
    };
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return Date.now() < expiresAt && this.authenticated;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/auth/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/auth/auth.service.ts"));
__export(__webpack_require__("./src/app/auth/auth.module.ts"));


/***/ }),

/***/ "./src/app/entities/entities.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var EntitiesModule = /** @class */ (function () {
    function EntitiesModule() {
    }
    EntitiesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: []
        })
    ], EntitiesModule);
    return EntitiesModule;
}());
exports.EntitiesModule = EntitiesModule;


/***/ }),

/***/ "./src/app/entities/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/entities/entities.module.ts"));


/***/ }),

/***/ "./src/app/main/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/main/main.module.ts"));


/***/ }),

/***/ "./src/app/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ".main-container \n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.main-is-mobile .main-toolbar \n{\n    position: fixed;\n    z-index: 2;\n}\n\nh1.main-app-name \n{\n    margin-left: 8px;\n}\n\n.main-sidenav-container \n{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n\n.main-is-mobile \n.main-sidenav-container \n{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n}\n\n.main-spacer\n{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" [class.main-is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\" class=\"main-toolbar\">\n    <a mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></a>\n    <h1 class=\"main-app-name\">Gesthor</h1>\n    <span class=\"main-spacer\"></span>\n    <app-member></app-member>\n  </mat-toolbar>\n  <mat-sidenav-container class=\"main-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <router-outlet name=\"navbar\"></router-outlet>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_1 = __webpack_require__("./src/app/auth/index.ts");
var layout_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
var MainComponent = /** @class */ (function () {
    function MainComponent(authService, changeDetectorRef, media) {
        this.authService = authService;
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
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
        core_1.Component({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [auth_1.AuthService,
            core_1.ChangeDetectorRef,
            layout_1.MediaMatcher])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;


/***/ }),

/***/ "./src/app/main/main.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var layout_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
var auth_1 = __webpack_require__("./src/app/auth/index.ts");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var main_component_1 = __webpack_require__("./src/app/main/main.component.ts");
var member_1 = __webpack_require__("./src/app/member/index.ts");
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            imports: [
                auth_1.AuthModule,
                common_1.CommonModule,
                layout_1.LayoutModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatListModule,
                material_1.MatSidenavModule,
                material_1.MatToolbarModule,
                member_1.MemberModule,
                router_1.RouterModule
            ],
            declarations: [
                main_component_1.MainComponent
            ],
            exports: [
                main_component_1.MainComponent
            ]
        })
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;


/***/ }),

/***/ "./src/app/member/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/member/member.module.ts"));


/***/ }),

/***/ "./src/app/member/member.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var auth_1 = __webpack_require__("./src/app/auth/index.ts");
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var MemberComponent = /** @class */ (function () {
    /**
     * Injects necessary services.
     *
     * @param authService Authorization service.
     */
    function MemberComponent(authService) {
        this.authService = authService;
        /**
         * Controls view of login card.
         */
        this.showCard = false;
    }
    /**
     * Initializes the data into the component and adds an event listener for mouse clicking.
     *
     * Every mouse click in the window must switch the card to invisible state.
    */
    MemberComponent.prototype.ngOnInit = function () {
    };
    /**
     * Removes the event listener.
    */
    MemberComponent.prototype.ngOnDestroy = function () {
    };
    /**
     * Switches between `true` or `false` on login card visualization.
    */
    MemberComponent.prototype.toggle = function () {
        this.showCard = !this.showCard;
    };
    MemberComponent = __decorate([
        core_1.Component({
            selector: 'app-member',
            template: "\n  <button mat-icon-button (click)=\"toggle()\"><mat-icon>account_circle</mat-icon></button>\n  <br>\n  <div id=\"login-card-container\" class=\"login-card-container\">\n    <mat-card class=\"login-card\" *ngIf=\"showCard\" [@enterCard]>\n      <mat-card-header>\n        <div mat-card-avatar *ngIf=\"authService.isAuthenticated\">\n          <img [src]=\"user?.photoURL\">\n        </div>\n        <mat-card-title>\n          Bem-vindo\n        </mat-card-title>\n        <mat-card-subtitle *ngIf=\"authService.isAuthenticated\">\n          {{user?.displayName}}\n        </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-actions>\n        <button mat-button *ngIf=\"authService.isAuthenticated\" (click)=\"authService.logout()\">Log out</button>\n        <button mat-button *ngIf=\"!authService.isAuthenticated\" (click)=\"authService.login()\">Log in</button>\n      </mat-card-actions>\n    </mat-card>  \n  </div>\n  ",
            styles: [
                ":host { \n      font-size: 11pt \n    }",
                ".login-card-container { \n      position: absolute;\n      margin: 0; \n      padding: 0; \n    }",
                ".login-card { \n      position: relative; \n      z-index: 2;\n      top: 20px; \n      right: 150px;\n      width: 150px;\n      height: 135px;\n      overflow: hidden; \n    }",
                ".login-card mat-card-subtitle {\n      font-size: 9pt; \n    }",
                ".login-card img {\n      height: 100%;\n      width: 100%;\n      border-radius: 50%;\n      padding: 0;\n      margin: 1.25em 0 0 0;\n    }"
            ],
            animations: [
                animations_1.trigger('enterCard', [
                    animations_1.transition('void => *', [animations_1.style({ height: 0 }), animations_1.animate('256ms ease-in-out', animations_1.style({ height: 135 }))]),
                    animations_1.transition('* => void', [animations_1.style({ height: 135 }), animations_1.animate('256ms ease-in-out', animations_1.style({ height: 0 }))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [auth_1.AuthService])
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;


/***/ }),

/***/ "./src/app/member/member.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var member_component_1 = __webpack_require__("./src/app/member/member.component.ts");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var auth_1 = __webpack_require__("./src/app/auth/index.ts");
var MemberModule = /** @class */ (function () {
    function MemberModule() {
    }
    MemberModule = __decorate([
        core_1.NgModule({
            imports: [
                auth_1.AuthModule,
                common_1.CommonModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatExpansionModule,
                material_1.MatIconModule
            ],
            declarations: [
                member_component_1.MemberComponent
            ],
            exports: [
                member_component_1.MemberComponent
            ]
        })
    ], MemberModule);
    return MemberModule;
}());
exports.MemberModule = MemberModule;


/***/ }),

/***/ "./src/app/navbar/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/app/navbar/navbar.module.ts"));


/***/ }),

/***/ "./src/app/navbar/navbar-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var navbar_component_1 = __webpack_require__("./src/app/navbar/navbar.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var navbarRoutes = [
    {
        path: '',
        outlet: 'navbar',
        component: navbar_component_1.NavbarComponent
    }
];
var NavbarRoutingModule = /** @class */ (function () {
    function NavbarRoutingModule() {
    }
    NavbarRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(navbarRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], NavbarRoutingModule);
    return NavbarRoutingModule;
}());
exports.NavbarRoutingModule = NavbarRoutingModule;


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <a mat-list-item routerLink=\".\">Ola mundo</a>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var layout_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(changeDetectorRef, media) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, layout_1.MediaMatcher])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/navbar/navbar.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var layout_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/layout.es5.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var navbar_routing_module_1 = __webpack_require__("./src/app/navbar/navbar-routing.module.ts");
var navbar_component_1 = __webpack_require__("./src/app/navbar/navbar.component.ts");
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                layout_1.LayoutModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatListModule,
                material_1.MatSidenavModule,
                material_1.MatToolbarModule,
                navbar_routing_module_1.NavbarRoutingModule
            ],
            declarations: [
                navbar_component_1.NavbarComponent
            ],
            exports: [
                navbar_component_1.NavbarComponent
            ]
        })
    ], NavbarModule);
    return NavbarModule;
}());
exports.NavbarModule = NavbarModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    databaseConfig: {
        host: 'localhost',
        user: 'root',
        database: 'gesthor_dev',
        password: '1234'
    },
    auth: {
        clientID: 'D0zEEiNCXv25UyNCfGJ1YlUohbp6XG1M',
        domain: 'rrnovaesjr.auth0.com',
        audience: 'http://localhost:8080',
        redirect: 'http://localhost:8080/callback',
        scope: 'openid profile email'
    },
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
__webpack_require__("./node_modules/hammerjs/hammer.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map