(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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



var routes = [
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"appDev\">\r\n  <div class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n   \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#appDev {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: auto; }\n\n.container-fluid {\n  padding: 0;\n  height: 100%;\n  overflow: auto; }\n\n#signInUp {\n  width: 50%;\n  min-height: 300px;\n  height: auto;\n  margin: 0 auto;\n  margin-top: 10%;\n  background: white;\n  border-radius: 8px;\n  padding-bottom: 15px; }\n\n#signInUp #formsNav {\n    height: 35px;\n    line-height: 35px;\n    border-top-right-radius: 8px;\n    border-top-left-radius: 8px;\n    background: #f15151; }\n\n#signInUp #formsNav li {\n      list-style-type: none;\n      display: inline;\n      margin-left: 5px; }\n\n#signInUp #formsNav a {\n      color: white; }\n\n#signInUp #formsNav .activeTab a {\n      color: black;\n      text-decoration: underline; }\n\n#signInUp #formsNav .activeTab a:hover {\n        cursor: pointer;\n        color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEFOR1VMQVItTUFYSU1JTExJQU4tQ09VUlNFXFxmb29kLWRlbGl2ZXJ5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFBOztBQVJ4QjtJQVdRLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixtQkFBNEIsRUFBQTs7QUFmcEM7TUFrQlkscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTs7QUFwQjVCO01Bd0JZLFlBQVksRUFBQTs7QUF4QnhCO01BOEJnQixZQUFZO01BQ1osMEJBQTBCLEVBQUE7O0FBL0IxQztRQWtDb0IsZUFBZTtRQUNmLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAjYXBwRGV2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiB9XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHsgXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87ICAgIFxyXG59XHJcblxyXG4jc2lnbkluVXAge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICNmb3Jtc05hdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDgxLCA4MSk7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYWN0aXZlVGFiIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrOyAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG59Il19 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'food-delivery';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _auth_services_http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/services/http-client.service */ "./src/app/auth/services/http-client.service.ts");
/* harmony import */ var _shared_services_error_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/error.service */ "./src/app/shared/services/error.service.ts");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/loading.service */ "./src/app/shared/services/loading.service.ts");
/* harmony import */ var _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/orders.service */ "./src/app/shared/services/orders.service.ts");
/* harmony import */ var _shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/edit-modal.service */ "./src/app/shared/services/edit-modal.service.ts");
/* harmony import */ var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/products.service */ "./src/app/shared/services/products.service.ts");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_services_product_cart_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/product-cart.service */ "./src/app/shared/services/product-cart.service.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [
                _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                _shared_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
                _shared_services_product_cart_service__WEBPACK_IMPORTED_MODULE_15__["ProductCart"],
                _shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_5__["EditModalService"],
                _shared_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"],
                _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
                _shared_services_error_service__WEBPACK_IMPORTED_MODULE_2__["ErrorService"],
                _auth_services_http_client_service__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        // this.isAuthorized = this.authService.isAuthorized();
    }
    /**
     * Check user authentication status
     * @param route snapshot
     * @param router state
     * @return return authentication status
     */
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthorized() && localStorage.getItem('userInfo')) {
            return true;
        }
        else {
            this.router.navigate([''], { relativeTo: this.route });
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/auth/authentication/authentication.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var authRoutes = [
    {
        path: 'authentication',
        component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticationComponent"],
        children: [
            {
                path: 'signin',
                component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"]
            },
            {
                path: 'signup',
                component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"]
            },
            {
                path: '',
                redirectTo: '/authentication/signin',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/authentication/signin',
        pathMatch: 'full'
    },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(authRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/auth/authentication/authentication.component.ts");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"],
                _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_7__["AuthenticationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ],
            exports: []
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/authentication/authentication.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/auth/authentication/authentication.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"signInUp\">\n  <ul id=\"formsNav\">\n    <li routerLinkActive=\"activeTab\">\n        <a routerLink=\"signin\">Sign In</a>\n    </li>\n\n    <li routerLinkActive=\"activeTab\">\n        <a routerLink=\"signup\">Sign Up</a>  \n    </li>\n  </ul>\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "./src/app/auth/authentication/authentication.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/auth/authentication/authentication.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signInUp {\n  width: 50%;\n  min-height: 300px;\n  margin: 0 auto;\n  margin-top: 10%;\n  background: white;\n  border-radius: 8px;\n  padding-bottom: 15px; }\n  #signInUp #formsNav {\n    height: 35px;\n    line-height: 35px;\n    border-top-right-radius: 8px;\n    border-top-left-radius: 8px;\n    background: #f15151; }\n  #signInUp #formsNav li {\n      list-style-type: none;\n      display: inline;\n      margin-left: 5px; }\n  #signInUp #formsNav a {\n      color: white; }\n  #signInUp #formsNav .activeTab a {\n      color: black;\n      text-decoration: underline; }\n  #signInUp #formsNav .activeTab a:hover {\n        cursor: pointer;\n        color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoZW50aWNhdGlvbi9EOlxcQU5HVUxBUi1NQVhJTUlMTElBTi1DT1VSU0VcXGZvb2QtZGVsaXZlcnkvc3JjXFxhcHBcXGF1dGhcXGF1dGhlbnRpY2F0aW9uXFxhdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFFakIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFBO0VBUnhCO0lBV1EsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLG1CQUE0QixFQUFBO0VBZnBDO01Ba0JZLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsZ0JBQWdCLEVBQUE7RUFwQjVCO01BMEJZLFlBQVksRUFBQTtFQTFCeEI7TUFnQ2dCLFlBQVk7TUFDWiwwQkFBMEIsRUFBQTtFQWpDMUM7UUFxQ29CLGVBQWU7UUFDZixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZ25JblVwIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIC8vIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAjZm9ybXNOYXYge1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjQxLCA4MSwgODEpO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmFjdGl2ZVRhYiB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiBcclxuXHJcbiBcclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/authentication/authentication.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/authentication/authentication.component.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        this.checkAuthenticationStatus();
    };
    AuthenticationComponent.prototype.checkAuthenticationStatus = function () {
        var _this = this;
        this.authService.isUserAuthorized
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (authStatus) {
            if (authStatus.authStatus && authStatus.onlineMode) {
                _this.router.navigate(['/dashboard/products/pizza']);
            }
            else {
                _this.router.navigate(['']);
            }
        });
        this.isAuthenticated();
    };
    AuthenticationComponent.prototype.isAuthenticated = function () {
        var userData = localStorage.getItem("userInfo");
        if (navigator.onLine && userData) {
            var _a = JSON.parse(userData), login = _a.login, password = _a.password;
            this.authService.signIn(login, password);
        }
    };
    AuthenticationComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    AuthenticationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/auth/authentication/authentication.component.html"),
            styles: [__webpack_require__(/*! ./authentication.component.scss */ "./src/app/auth/authentication/authentication.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/auth/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-client.service */ "./src/app/auth/services/http-client.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var AuthService = /** @class */ (function () {
    function AuthService(router, http, httpClient) {
        this.router = router;
        this.http = http;
        this.httpClient = httpClient;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.isUserAuthorized = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    AuthService.prototype.authenticateUser = function (login, password) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (authObserver) {
            var onlineMode = navigator.onLine;
            if (onlineMode) {
                _this.aunthenticateUserOnline(login, password, authObserver);
            }
            else {
                authObserver.next({ authStatus: false, onlineMode: false });
            }
        });
    };
    AuthService.prototype.aunthenticateUserOnline = function (login, password, authObserver) {
        var _this = this;
        this.httpClient.get(this.apiUrl + "/users?login=" + login + "&&password=" + password)
            .subscribe(function (authResults) {
            _this.onAunthenticateUserOnlineSuccess(authResults, authObserver);
        }, function (err) {
            _this.onAunthenticateUserOnlineFailure(err, authObserver);
        });
    };
    AuthService.prototype.onAunthenticateUserOnlineSuccess = function (authResults, authObserver) {
        var onlineMode = navigator.onLine;
        localStorage.setItem('userInfo', JSON.stringify(authResults[0]));
        var authStatus = this.getAuthStatus(authResults) == true ? true : false;
        authObserver.next({ authStatus: authStatus, onlineMode: onlineMode });
    };
    AuthService.prototype.onAunthenticateUserOnlineFailure = function (error, authObserver) {
        var onlineMode = navigator.onLine;
        authObserver.error(error);
        authObserver.next({ authStatus: false, onlineMode: onlineMode });
    };
    AuthService.prototype.signIn = function (login, password) {
        this.authenticateUser(login, password)
            .subscribe(this.onSignInSuccess.bind(this), this.onSignInFailure.bind(this));
    };
    AuthService.prototype.onSignInSuccess = function (authStatus) {
        this.authResults = authStatus;
        this.isUserAuthorized.next(this.authResults);
        console.log(this.authResults);
    };
    AuthService.prototype.onSignInFailure = function (authErr) {
        this.authResults = authErr;
        console.log(authErr.status);
        console.log(this.authResults);
    };
    AuthService.prototype.getAuthStatus = function (userData) {
        var authStatus;
        if (userData && userData.length > 0) {
            this.currentUser = userData[0];
            this.isAuthenticated = true;
            authStatus = true;
            this.userData.next(userData[0]);
            return true;
        }
        else {
            console.log('Authentication error!');
            authStatus = false;
        }
        return authStatus;
    };
    AuthService.prototype.updateUserData = function () {
        var onlineMode = navigator.onLine;
        if (onlineMode) {
            this.signIn(this.currentUser.login, this.currentUser.password);
        }
        else {
            var activeCategory = JSON.parse(localStorage.getItem("productList")).category;
            this.router.navigate(["dashboard/products/" + activeCategory]);
        }
    };
    AuthService.prototype.logOut = function () {
        this.authResults.authStatus = false;
        this.isUserAuthorized.next(this.authResults);
        localStorage.removeItem('userInfo');
        localStorage.removeItem('offlineOrders');
        localStorage.removeItem('orderHistory');
    };
    AuthService.prototype.signUp = function (users) {
        this.httpClient.post(this.apiUrl + "/users", users)
            .subscribe(this.onSignUpSuccess.bind(this), this.onSignUpFailure.bind(this));
    };
    AuthService.prototype.onSignUpSuccess = function (res) {
        this.router.navigate(['']);
    };
    AuthService.prototype.onSignUpFailure = function (err) {
        alert('Something went wrong, try again!!!');
    };
    AuthService.prototype.checkFieldExistense = function (field, value) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
        return this.http.get(this.apiUrl + "/users?" + field + "=" + value, { headers: headers });
    };
    AuthService.prototype.isAuthorized = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    AuthService.prototype.checkUserInfo = function (userData) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (observer) {
            var login = _this.currentUser.login;
            var password = userData.passwords.password;
            var onlineMode = navigator.onLine;
            if (onlineMode) {
                _this.getUserInfo(login, password, observer);
            }
            else {
                observer.error("offline mode!");
            }
        });
    };
    AuthService.prototype.getUserInfo = function (login, password, observer) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
        this.http.get(this.apiUrl + "/users?login=" + login + "&&password=" + password, { headers: headers })
            .subscribe(function (checkResults) {
            if (checkResults.length > 0) {
                observer.next(checkResults);
            }
        }, function (checkErrors) {
            observer.error('User not found! ' + checkErrors);
        });
    };
    AuthService.prototype.updateUserInfo = function (userData) {
        var user = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](userData.firstName, userData.lastName, this.currentUser.login, userData.passwords.password, userData.phone, this.currentUser.email, userData.address);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
        return this.http.put(this.apiUrl + "/users/" + this.currentUser.id, user, { headers: headers });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _http_client_service__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/services/http-client.service.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/services/http-client.service.ts ***!
  \******************************************************/
/*! exports provided: HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpClientService = /** @class */ (function () {
    function HttpClientService(http) {
        this.http = http;
    }
    HttpClientService.prototype.createAuthorizationHeaders = function (headers) {
        headers.append('Authorization', 'Basic' + btoa('login:password'));
    };
    HttpClientService.prototype.get = function (url) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
        this.createAuthorizationHeaders(headers);
        return this.http.get(url, { headers: headers });
    };
    HttpClientService.prototype.post = function (url, data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
        this.createAuthorizationHeaders(headers);
        return this.http.post(url, data, { headers: headers });
    };
    HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpClientService);
    return HttpClientService;
}());



/***/ }),

/***/ "./src/app/auth/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-md-12\">\r\n  <form id=\"signIn\"\r\n        #form=ngForm\r\n        (ngSubmit)=\"onLogin(form)\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"login\">\r\n        Login:\r\n      <input type=\"text\"\r\n             placeholder=\"Enter login\"\r\n             class=\"form-control\"\r\n             id=\"login\"\r\n             name=\"login\"\r\n             required\r\n             login\r\n             ngModel\r\n             #login=\"ngModel\">\r\n      </label>\r\n    </div>\r\n\r\n    <p *ngIf=\"!login.valid && login.touched\" class=\"validationErrors\">Login is not valid!</p>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">\r\n        Password:\r\n      <input type=\"password\"\r\n             placeholder=\"Enter password\"\r\n             class=\"form-control\"\r\n             id=\"password\"\r\n             required\r\n             password\r\n             #password=\"ngModel\"\r\n             name=\"password\"\r\n             ngModel>\r\n      </label>\r\n    </div>\r\n    <p *ngIf=\"!password.valid && password.touched\" class=\"validationError\">Password is not valid!</p>\r\n    <p *ngIf=\"!authResults.authStatus && authResults.onlineMode && password.touched\" class=\"validationError\">Your login and password are incorect!</p>\r\n    <p *ngIf=\"!authResults.onlineMode\" class=\"validationError\">There's no internet connection!</p>\r\n\r\n    <button class=\"btn btn-primary\"\r\n            type=\"submit\"\r\n            [disabled]=\"!form.valid\">\r\n      Log In\r\n    </button>\r\n  </form>\r\n</div>\r\n\r\n \r\n"

/***/ }),

/***/ "./src/app/auth/sign-in/sign-in.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signIn {\n  margin: 0 auto; }\n\n.validationError {\n  color: red;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLWluL0Q6XFxBTkdVTEFSLU1BWElNSUxMSUFOLUNPVVJTRVxcZm9vZC1kZWxpdmVyeS9zcmNcXGFwcFxcYXV0aFxcc2lnbi1pblxcc2lnbi1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAjc2lnbkluIHtcclxuICAgICBtYXJnaW46IDAgYXV0bzsgXHJcbiB9XHJcblxyXG4gLnZhbGlkYXRpb25FcnJvciB7XHJcbiAgICAgY29sb3I6IHJlZDtcclxuICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SignInComponent = /** @class */ (function () {
    function SignInComponent(authService) {
        this.authService = authService;
        this.authStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.authResults = {
            authStatus: true,
            onlineMode: navigator.onLine
        };
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.subscribeToAuthResults();
    };
    SignInComponent.prototype.subscribeToAuthResults = function () {
        this.authStatus = this.authService.isUserAuthorized
            .subscribe(this.onUserAuthorizedSuccess.bind(this));
    };
    SignInComponent.prototype.onUserAuthorizedSuccess = function (authStatus) {
        this.authResults = authStatus;
        console.log(authStatus);
    };
    /**
     * Provide user login using appropriate credentials
     * @param {NgForm} login and password.
     */
    SignInComponent.prototype.onLogin = function (form) {
        var _a = form.value, login = _a.login, password = _a.password;
        var credentials = {
            "login": login,
            "password": password
        };
        this.authService.signIn(login, password);
        if (this.authService) {
            localStorage.setItem("userInfo", JSON.stringify(credentials));
        }
    };
    SignInComponent.prototype.ngOnDestroy = function () {
        this.authStatus.unsubscribe();
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/auth/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/auth/sign-in/sign-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-md-12\">\r\n  <form id=\"signUp\"\r\n        [formGroup]=\"registrationForm\"\r\n        (ngSubmit)=\"onSignUp()\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-xs-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"First Name\">\r\n            First Name:\r\n\r\n          <input type=\"text\"\r\n                 placeholder=\"Enter First Name\"\r\n                 class=\"form-control\"\r\n                 id=\"firstName\"\r\n                 name=\"firstName\"\r\n                 formControlName=\"firstName\">\r\n          </label>\r\n        </div>\r\n        \r\n        <p *ngIf=\"!formField.get('firstName').valid && formField.get('firstName').touched\" class=\"validationError\">First name is not valid!</p>\r\n        <p *ngIf=\"formField.get('firstName').errors && formField.get('firstName').touched\" class=\"validationError\">Minimal length should be at least 4!</p>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 col-xs-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"Last Name\">\r\n            Last Name:\r\n\r\n          <input type=\"text\"\r\n                 placeholder=\"Enter Last Name\"\r\n                 class=\"form-control\"\r\n                 id=\"lastName\"\r\n                 name=\"lastName\"\r\n                 formControlName=\"lastName\">\r\n          </label>\r\n        </div>\r\n\r\n        <p *ngIf=\"!formField.get('lastName').valid && formField.get('lastName').touched\" class=\"validationError\">Last name is not valid!</p>\r\n        <p *ngIf=\"formField.get('lastName').errors && formField.get('lastName').touched\" class=\"validationError\">Minimal length should be at least 4!</p>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 col-xs-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"login\">\r\n            Login:\r\n\r\n          <input type=\"text\"\r\n                 placeholder=\"Enter login\"\r\n                 class=\"form-control\"\r\n                 id=\"login\"\r\n                 name=\"login\"\r\n                 formControlName=\"login\">\r\n          </label>\r\n        </div>\r\n\r\n        <p *ngIf=\"formField.get('login').errors && formField.get('login').touched \" class=\"validationError\">Login isn't valid!</p>\r\n        <p *ngIf=\"formField.get('login')?.errors?.minlength && formField.get('login').touched \" class=\"validationError\">Min length should be 4 !</p>\r\n        <p *ngIf=\"formField.get('login')?.errors?.fieldIsForbidden && formField.get('login').touched\" class=\"validationError\">User with such login is already exist!</p>\r\n        <p *ngIf=\"formField.get('login')?.errors?.isNetworkEnabled && formField.get('login').touched\" class=\"validationError\">There's no internet connection!</p>\r\n        \r\n      </div>\r\n\r\n    <div class=\"col-md-6 col-xs-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"phone\">\r\n          Phone:\r\n        <input type=\"text\"\r\n               id=\"phone\"\r\n               name=\"phone\"\r\n               class=\"form-control\"\r\n               placeholder=\"Enter phone\"\r\n               formControlName=\"phone\">\r\n        </label>\r\n      </div>\r\n\r\n      <p *ngIf=\"formField.get('phone').errors && formField.get('phone').touched \" class=\"validationError\">Phone isn't valid!</p>\r\n      <p *ngIf=\"formField.get('phone')?.errors?.minlength && formField.get('phone').touched \" class=\"validationError\">Min length should be 10 !</p>\r\n    </div>\r\n\r\n    <div formGroupName = passwords class=\"col-md-12 col-xs-12\" >\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-xs-6\">\r\n          <div class=\"form-group\">\r\n          <label for=\"password\">\r\n            Password:\r\n\r\n          <input type=\"text\"\r\n                id=\"password\"\r\n                name=\"password\"\r\n                type=\"password\"\r\n                class=\"form-control\"\r\n                placeholder=\"Enter password\"\r\n                formControlName=\"password\">\r\n          </label>\r\n          </div>\r\n          \r\n          <p *ngIf=\"formField.get('passwords.password').errors && formField.get('passwords.password').touched \" class=\"validationError\">Password isn't valid!</p>\r\n          <p *ngIf=\"formField.get('passwords.password').password?.errors?.minlength && formField.get('passwords.password').touched \" class=\"validationError\">Min length should be 4 !</p>\r\n          <p *ngIf=\"formField.get('passwords')?.errors?.doesMatchPassword && formField.get('passwords').touched \" class=\"validationError\">Passwords don't match!</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-6 col-xs-6\">\r\n          <div class=\"form-group\">\r\n            <label for=\"passwordRepeat\">\r\n              Repeat password:\r\n\r\n            <input type=\"text\"\r\n                   id=\"passwordRepeat\"\r\n                   name=\"passwordRepeat\"\r\n                   type=\"password\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Repeat password\"\r\n                   formControlName=\"passwordRepeat\">\r\n            </label>\r\n          </div>\r\n\r\n          <p *ngIf=\"formField.get('passwords.passwordRepeat').errors && formField.get('passwords.passwordRepeat').touched \" class=\"validationError\">Password isn't valid!</p>\r\n          <p *ngIf=\"formField.get('passwords.passwordRepeat')?.errors?.minlength && formField.get('passwords.passwordRepeat').touched \" class=\"validationError\">Min length should be 4 !</p>\r\n          <p *ngIf=\"formField.get('passwords')?.errors?.doesMatchPassword && formField.get('passwords').touched \" class=\"validationError\">Passwords don't match!</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"col-md-6 col-xs-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">\r\n          Email:\r\n        <input type=\"text\"\r\n               placeholder=\"Enter email\"\r\n               class=\"form-control\"\r\n               id=\"email\"\r\n               name=\"email\"\r\n               formControlName=\"email\">\r\n        </label>\r\n      </div>\r\n\r\n      <p *ngIf=\"formField.get('email').errors && formField.get('email').touched \" class=\"validationError\">Email isn't valid!</p>\r\n      <p *ngIf=\"formField.get('email')?.errors?.minlength && formField.get('email').touched \" class=\"validationError\">Min length should be 4 !</p>\r\n      <p *ngIf=\"formField.get('email')?.errors?.fieldIsForbidden && formField.get('email').touched \" class=\"validationError\">User with such email is already exist!</p>\r\n      <p *ngIf=\"formField.get('email')?.errors?.email && formField.get('email').touched \" class=\"validationError\">Email doensn't much the pattern!</p>\r\n      <p *ngIf=\"formField.get('email')?.errors?.isNetworkEnabled && formField.get('email').touched \" class=\"validationError\">There's no internet connection!</p>\r\n    </div>\r\n\r\n    <div class=\"col-md-6 col-xs-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"address\">\r\n          Address:\r\n        <input type=\"text\"\r\n               id=\"address\"\r\n               name=\"address\"\r\n               class=\"form-control\"\r\n               placeholder=\"Enter address\"\r\n               formControlName=\"address\">\r\n        </label>\r\n      </div>\r\n\r\n      <p *ngIf=\"formField.get('address').errors && formField.get('address').touched \" class=\"validationError\">Address isn't valid!</p>\r\n      <p *ngIf=\"formField.get('address')?.errors?.minlength && formField.get('address').touched \" class=\"validationError\">Min length should be 4 !</p>\r\n    </div>\r\n\r\n    </div>\r\n    <p *ngIf=\"!onlineMode\" class=\"validationError\">There's no internet connection!</p>\r\n\r\n    <button class=\"btn btn-success\"\r\n            type=\"submit\"\r\n            >\r\n      Sign Up\r\n    </button>\r\n  </form>\r\n</div>\r\n<!--[disabled]=\"!registrationForm.valid\"-->"

/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".validationError {\n  color: red;\n  font-weight: 600;\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLXVwL0Q6XFxBTkdVTEFSLU1BWElNSUxMSUFOLUNPVVJTRVxcZm9vZC1kZWxpdmVyeS9zcmNcXGFwcFxcYXV0aFxcc2lnbi11cFxcc2lnbi11cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFsaWRhdGlvbkVycm9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService) {
        this.authService = authService;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.onlineMode = navigator.onLine;
    };
    /**
     * Initialize 'sign up' form's controls and appropriate validators
     */
    SignUpComponent.prototype.initForm = function () {
        this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            "firstName": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]),
            "lastName": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]),
            "login": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)], this.checkDataUniquenessByField.bind(this)),
            passwords: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4),]),
                "passwordRepeat": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)]),
            }, {
                validators: this.validatePasswords.bind(this)
            }),
            "phone": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(10)]),
            "email": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4)], this.checkDataUniquenessByField.bind(this)),
            "address": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])
        });
    };
    Object.defineProperty(SignUpComponent.prototype, "formField", {
        get: function () {
            return this.registrationForm;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check existence user with the same login
     * @param {FormControl} user's login
     * @return {Promise | Observable} returns checking results
     */
    SignUpComponent.prototype.checkDataUniquenessByField = function (control) {
        var _this = this;
        var onlineMode = navigator.onLine;
        var maxFieldLength = 4;
        var forbiddenField = rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (forbiddenObserver) {
            var keyField = control.value;
            console.log(_this.registrationForm);
            var fieldName = _this.searchKeyField(control, keyField);
            if (onlineMode && keyField.length >= maxFieldLength) {
                _this.authService.checkFieldExistense(fieldName, keyField).subscribe(function (fieldCheckingRes) {
                    if (fieldCheckingRes[0]) {
                        if (fieldCheckingRes[0][fieldName] == keyField) {
                            forbiddenObserver.next({ 'fieldIsForbidden': true, 'isNetworkEnabled': false });
                            forbiddenObserver.complete();
                        }
                    }
                    else {
                        forbiddenObserver.next(null);
                        forbiddenObserver.complete();
                    }
                }, function (error) {
                    forbiddenObserver.error(error);
                    forbiddenObserver.complete();
                });
            }
        });
        return forbiddenField;
    };
    SignUpComponent.prototype.searchKeyField = function (control, keyField) {
        var field = control.value;
        var searchedField;
        var formFields = Object.entries(this.registrationForm.controls);
        for (var _i = 0, formFields_1 = formFields; _i < formFields_1.length; _i++) {
            var key = formFields_1[_i];
            if (key[1].value == field) {
                searchedField = key[0];
            }
        }
        return searchedField;
    };
    /**
     * Compare two passwords which were entered by user in appropriate fields
     * @param {FormGroup} users' passwords
     * @return {null || Obj} returns checking results
     */
    SignUpComponent.prototype.validatePasswords = function (registrationFormGroup) {
        var password = registrationFormGroup.controls.password.value;
        var repeatPassword = registrationFormGroup.controls.passwordRepeat.value;
        if (repeatPassword.length <= 0) {
            return null;
        }
        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
        return null;
    };
    /**
     * Create new user object and sign up it using 'authService'
     */
    SignUpComponent.prototype.onSignUp = function () {
        this.onlineMode = navigator.onLine;
        var userInfo = this.registrationForm.value;
        var newUser = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](userInfo.firstName, userInfo.lastName, userInfo.login, userInfo.passwords.password, userInfo.phone, userInfo.email, userInfo.address);
        if (this.registrationForm.valid && this.onlineMode) {
            this.authService.signUp(newUser);
        }
        else if (!this.onlineMode && !this.registrationForm.valid) {
            this.registrationForm.patchValue({ login: "", email: "" });
        }
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/auth/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/auth/sign-up/sign-up.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/auth/user.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(fName, lName, login, password, phone, email, address) {
        this.firstName = fName;
        this.lastName = lName;
        this.login = login;
        this.password = password;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.userId = this.randomId(1000, 1);
    }
    User.prototype.randomId = function (upperLimit, lowerLimit) {
        return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
    };
    return User;
}());



/***/ }),

/***/ "./src/app/cart/cart/cart.model.ts":
/*!*****************************************!*\
  !*** ./src/app/cart/cart/cart.model.ts ***!
  \*****************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
var Cart = /** @class */ (function () {
    function Cart(products) {
        this.products = products ? products : [];
        this.cartId = this.randomId(1, 10000);
        this.totalPrice = 0;
    }
    Cart.prototype.setUserId = function (userData) {
        this.id = userData.id;
        this.userId = userData.userId;
    };
    Cart.prototype.setCartId = function (id) {
        this.cartId = id;
    };
    Cart.prototype.getCartId = function () {
        return this.cartId;
    };
    Cart.prototype.getCart = function () {
        return this.products;
    };
    Cart.prototype.setProducts = function (products) {
        this.products = products;
    };
    Cart.prototype.addProduct = function (product) {
        var productId = product.id;
        if (!this.checkForDublicates(productId)) {
            product["productQuantity"] = product.productQuantity;
            this.products.push(product);
        }
        else {
            this.products.forEach(function (item) {
                if (item.id == productId) {
                    item["productQuantity"] += product.productQuantity;
                }
            });
        }
        this.calculateTotalPrice();
    };
    Cart.prototype.deleteProductById = function (id) {
        var deleteWithId;
        this.products.forEach(function (item, index) {
            if (item.id == id) {
                deleteWithId = index;
            }
        });
        this.products.splice(deleteWithId, 1);
    };
    Cart.prototype.addOneProductToCart = function (id) {
        this.products.forEach(function (product) {
            if (product.id == id) {
                ++product.productQuantity;
            }
        });
    };
    Cart.prototype.deleteOneProductFromCart = function (id) {
        this.products.forEach(function (product) {
            if (product.id == id && product.productQuantity != 1) {
                --product.productQuantity;
            }
        });
    };
    Cart.prototype.checkForDublicates = function (id) {
        var isDublicated = false;
        this.products.forEach(function (item) {
            if (item.id == id) {
                isDublicated = true;
            }
        });
        return isDublicated;
    };
    Cart.prototype.calculateTotalPrice = function () {
        var price = 0;
        this.products.forEach(function (item) {
            price += item.productPrice * item.productQuantity;
        });
        this.totalPrice = price;
    };
    Cart.prototype.getTotalPrice = function () {
        this.calculateTotalPrice();
        return this.totalPrice;
    };
    Cart.prototype.calculateProductsQuantity = function () {
        var productQuantity = 0;
        this.products.forEach(function (item) {
            productQuantity += item.productQuantity;
        });
        return productQuantity;
    };
    Cart.prototype.cleanCart = function () {
        this.products = [];
    };
    Cart.prototype.randomId = function (upperLimit, lowerLimit) {
        return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
    };
    return Cart;
}());



/***/ }),

/***/ "./src/app/shared/services/edit-modal.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/edit-modal.service.ts ***!
  \*******************************************************/
/*! exports provided: EditModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModalService", function() { return EditModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var EditModalService = /** @class */ (function () {
    function EditModalService() {
        this.editMode = false;
        this.onEditChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onEditChange.next(this.editMode);
    }
    /**
     * Toggle 'edit profile' popup
     */
    EditModalService.prototype.toggleEditMode = function () {
        this.editMode = !this.editMode;
        this.onEditChange.next(this.editMode);
    };
    EditModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditModalService);
    return EditModalService;
}());



/***/ }),

/***/ "./src/app/shared/services/error.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/error.service.ts ***!
  \**************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ErrorService = /** @class */ (function () {
    function ErrorService(router) {
        this.router = router;
        this.errorDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ErrorService.prototype.handleError = function (error) {
        this.errorStatus = error.status;
        this.errorMsg = error.statusText;
        this.errorDetails.next({
            errorCode: this.errorStatus,
            errorMsg: this.errorMsg
        });
        this.router.navigate(['dashboard/error']);
    };
    ErrorService.prototype.getErrorInfo = function () {
        return {
            errorCode: this.errorStatus,
            errorMsg: this.errorMsg
        };
    };
    ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "./src/app/shared/services/loading.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/loading.service.ts ***!
  \****************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _edit_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-modal.service */ "./src/app/shared/services/edit-modal.service.ts");




var LoadingService = /** @class */ (function () {
    function LoadingService(editModal) {
        this.editModal = editModal;
        this.isLoadingEnabled = false;
        this.onLoadingChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onLoadingChange.next(this.isLoadingEnabled);
    }
    LoadingService.prototype.toggleLoading = function () {
        this.isLoadingEnabled = !this.isLoadingEnabled;
        this.onLoadingChange.next(this.isLoadingEnabled);
    };
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_edit_modal_service__WEBPACK_IMPORTED_MODULE_3__["EditModalService"]])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/shared/services/orders.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/orders.service.ts ***!
  \***************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.service */ "./src/app/shared/services/loading.service.ts");
/* harmony import */ var _product_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-cart.service */ "./src/app/shared/services/product-cart.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _edit_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-modal.service */ "./src/app/shared/services/edit-modal.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error.service */ "./src/app/shared/services/error.service.ts");











var OrdersService = /** @class */ (function () {
    function OrdersService(authService, http, productCart, router, loadingService, editModal, errorService) {
        this.authService = authService;
        this.http = http;
        this.productCart = productCart;
        this.router = router;
        this.loadingService = loadingService;
        this.editModal = editModal;
        this.errorService = errorService;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.offlineOrders = [];
        this.checkOfflineOrders();
    }
    OrdersService.prototype.makeAnOrder = function (order) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Content-type": "application/json" });
        var id = this.authService.getCurrentUser().id;
        order.setUserId(id);
        console.log(order);
        this.order = order;
        if (navigator.onLine) {
            this.order.setOrderStatus("done");
            this.http
                .post(this.apiUrl + "/orders", order, { headers: headers })
                .subscribe(this.onMakeOrderSuccess.bind(this), this.onMakeOrderError.bind(this));
        }
        else {
            this.handleOfflineOrderOperation(order);
        }
    };
    OrdersService.prototype.handleOfflineOrderOperation = function (order) {
        this.order.setOrderStatus("pending");
        this.offlineOrders.push(order);
        localStorage.setItem("offlineOrders", JSON.stringify(this.offlineOrders));
        this.productCart.cleanCart();
        this.router.navigate(["dashboard/order-results", "offlineMode"]);
    };
    OrdersService.prototype.checkOfflineOrders = function () {
        var localOrders = JSON.parse(localStorage.getItem("offlineOrders"));
        var offlineOrders = localOrders ? localOrders : [];
        this.offlineOrders = offlineOrders.length > 0 ? offlineOrders : [];
    };
    OrdersService.prototype.syncOfflineOrdersWithServer = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Content-type": "application/json" });
        var localOrders = JSON.parse(localStorage.getItem("offlineOrders"));
        var offlineOrders = localOrders ? localOrders : [];
        if (offlineOrders.length > 0) {
            this.offlineOrders.forEach(function (item) {
                _this.http.post(_this.apiUrl + "/orders", item, { headers: headers }).subscribe();
            });
        }
        localStorage.removeItem("offlineOrders");
        this.offlineOrders = [];
    };
    OrdersService.prototype.onMakeOrderSuccess = function (orderStatus) {
        this.productCart.cleanCart();
        this.syncOfflineOrdersWithServer();
        this.router.navigate(["dashboard/order-results", "orderSuccess"]);
    };
    OrdersService.prototype.onMakeOrderError = function (error) {
        this.productCart.cleanCart();
        this.router.navigate(["dashboard/order-results", "orderFailure"]);
    };
    OrdersService.prototype.submitOrderFromOrderHistory = function (order) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Content-type": "application/json" });
        order.orderStatus = 'done';
        if (navigator.onLine) {
            this.http.put(this.apiUrl + "/orders/" + order['id'], order, { headers: headers }).subscribe(this.onSubmitPendingOrderSuccess.bind(this), this.onSubmitPendingOrderFailure.bind(this));
        }
        else {
            this.onSubmitPendingOrderFailure();
        }
    };
    OrdersService.prototype.onSubmitPendingOrderSuccess = function () {
        this.router.navigate(["dashboard/order-results", "submitSuccess"]);
    };
    OrdersService.prototype.onSubmitPendingOrderFailure = function () {
        this.router.navigate(["dashboard/order-results", "submitFailure"]);
    };
    OrdersService.prototype.getLastOrder = function () {
        return this.order;
    };
    OrdersService.prototype.getOrders = function () {
        var _this = this;
        var ordersObservable = rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].create(function (observer) {
            var onlineMode = navigator.onLine;
            if (onlineMode) {
                _this.getOrdersFromServer(observer);
            }
            else {
                _this.getOrdersFromLocalStorage(observer);
            }
        });
        return ordersObservable;
    };
    OrdersService.prototype.getOrdersFromServer = function (observer) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Content-type": "application/json" });
        var id = this.authService.getCurrentUser().id;
        this.http.get(this.apiUrl + "/orders?userId=" + id, { headers: headers }).subscribe(function (orders) {
            localStorage.setItem("orderHistory", JSON.stringify(orders));
            observer.next(orders);
        }, function (error) {
            observer.error(error);
            _this.errorService.handleError(error);
        });
    };
    OrdersService.prototype.getOrdersFromLocalStorage = function (observer) {
        var localOrderHistory = JSON.parse(localStorage.getItem("orderHistory"));
        if (localOrderHistory.length > 0) {
            observer.next(localOrderHistory);
        }
        else {
            observer.error("offline mode");
        }
    };
    OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _product_cart_service__WEBPACK_IMPORTED_MODULE_2__["ProductCart"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"],
            _edit_modal_service__WEBPACK_IMPORTED_MODULE_8__["EditModalService"],
            _error_service__WEBPACK_IMPORTED_MODULE_10__["ErrorService"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/shared/services/product-cart.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/product-cart.service.ts ***!
  \*********************************************************/
/*! exports provided: ProductCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCart", function() { return ProductCart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cart_cart_cart_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cart/cart/cart.model */ "./src/app/cart/cart/cart.model.ts");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error.service */ "./src/app/shared/services/error.service.ts");








var ProductCart = /** @class */ (function () {
    function ProductCart(authService, http, errorService) {
        this.authService = authService;
        this.http = http;
        this.errorService = errorService;
        this.cart = new _cart_cart_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"]();
        this.onProductAdded = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.gettingProducts = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.checkCartExistenseByUserId();
        this.getCartFromServer();
    }
    /**
     * Checking cart existense on the server
     */
    ProductCart.prototype.checkCartExistenseByUserId = function () {
        if (navigator.onLine) {
            this.cart.setUserId(this.authService.getCurrentUser());
            var userId = this.authService.getCurrentUser().id;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-type': 'application/json' });
            this.http.get(this.apiUrl + "/cart?id=" + userId, { headers: headers })
                .subscribe(this.onCheckCartExistenseSuccess.bind(this), this.onCheckCartExistenseFailure.bind(this));
        }
    };
    /**
     * Create cart on the server if it doesn't exist
     */
    ProductCart.prototype.onCheckCartExistenseSuccess = function (response) {
        if (response.length == 0) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-type': 'application/json' });
            this.http.post(this.apiUrl + "/cart", this.cart, { headers: headers })
                .subscribe(this.onCreateCartSuccess.bind(this), this.onCreateCartFailure.bind(this));
        }
    };
    ProductCart.prototype.onCheckCartExistenseFailure = function (error) {
        this.errorService.handleError(error);
    };
    ProductCart.prototype.onCreateCartSuccess = function (successRes) {
        console.log('Cart is created!');
        console.log(successRes);
    };
    ProductCart.prototype.onCreateCartFailure = function (error) {
        console.log("Something went wrong while creating cart!");
        //this.errorService.handleError(error); 
    };
    /**
     * Add products to the cart and sync it with server
     */
    ProductCart.prototype.addProducts = function (product) {
        console.log(product);
        console.log(this.cart);
        var onlineMode = navigator.onLine;
        this.cart.addProduct(product);
        this.onProductAdded.next(this.cart.getCart());
        if (onlineMode) {
            this.synchCartWithServer();
            localStorage.setItem('productCart', JSON.stringify(this.cart));
        }
        else {
            localStorage.setItem('productCart', JSON.stringify(this.cart));
        }
    };
    /**
     * Sync current cart with user's carton the server
     */
    ProductCart.prototype.synchCartWithServer = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-type': 'application/json' });
        this.http.put(this.apiUrl + "/cart/" + this.cart.id, this.cart, { headers: headers })
            .subscribe(this.onSynchCartWithServerSuccess.bind(this), this.onSynchCartWithServerFailure.bind(this));
    };
    ProductCart.prototype.onSynchCartWithServerSuccess = function (synchStatus) {
        console.log('Cart is successfully synchronized with server!');
        console.log(synchStatus);
    };
    ProductCart.prototype.onSynchCartWithServerFailure = function (error) {
        console.log('Error while synchronizing product cart with server!');
        this.errorService.handleError(error);
    };
    /**
     * Get appropriate cart from server
     */
    ProductCart.prototype.getCartFromServer = function () {
        if (navigator.onLine) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-type': 'application/json' });
            var userId = this.authService.getCurrentUser().id;
            this.gettingProducts = this.http.get(this.apiUrl + "/cart/" + userId, { headers: headers })
                .subscribe(this.onGetCartSuccess.bind(this), this.onGetCartFailure.bind(this));
        }
    };
    ProductCart.prototype.onGetCartSuccess = function (cart) {
        var localCart = JSON.parse(localStorage.getItem("productCart")) ? JSON.parse(localStorage.getItem("productCart")) : new _cart_cart_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"]();
        var localCartInstanse = new _cart_cart_cart_model__WEBPACK_IMPORTED_MODULE_1__["Cart"](localCart["products"]);
        this.setProductsToCartFromServerOrLocalSt(localCartInstanse ? localCart : cart);
        this.onProductAdded.next(this.cart.getCart());
        localStorage.setItem('productCart', JSON.stringify(this.cart));
    };
    ProductCart.prototype.setProductsToCartFromServerOrLocalSt = function (cart) {
        this.cart.setProducts(cart["products"]);
        this.cart.setCartId(cart["cartId"]);
    };
    ProductCart.prototype.onGetCartFailure = function (error) {
        console.log(error);
        alert('Error while getting cart from server!');
        this.errorService.handleError(error);
    };
    ProductCart.prototype.getCartFromLocalStorage = function () {
        var cart = JSON.parse(localStorage.getItem('productCart'));
        this.cart.setProducts(cart["products"]);
        this.cart.setCartId(cart["cartId"]);
        this.onProductAdded.next(this.cart);
        return this.cart.getCart();
    };
    /**
     * Calculate product's quantity in the cart
     * @return {number} product's quantity
     */
    ProductCart.prototype.calculateProductsQuantity = function () {
        return this.cart.calculateProductsQuantity();
    };
    /**
     * Get products from cart
     * @return {Cart} product's cart
     */
    ProductCart.prototype.getProducts = function () {
        return this.cart.getCart();
    };
    ProductCart.prototype.getCartId = function () {
        return this.cart.getCartId();
    };
    /**
     * Delete product with appropriate number
     * @param {number} product's number
     */
    ProductCart.prototype.deleteProductById = function (id) {
        this.cart.deleteProductById(id);
        this.onProductAdded.next(this.cart.getCart());
        this.syncCartWithServerAndLocalStorage();
    };
    ProductCart.prototype.syncCartWithServerAndLocalStorage = function () {
        var onlineMode = navigator.onLine;
        if (onlineMode) {
            this.synchCartWithServer();
        }
        localStorage.setItem('productCart', JSON.stringify(this.cart));
    };
    /**
     * Increase product quantity on 1 for appropriate product in the cart
     * @param {number} product's id
     */
    ProductCart.prototype.addOneProductToCart = function (id) {
        this.cart.addOneProductToCart(id);
        this.onProductAdded.next(this.cart.getCart());
        this.syncCartWithServerAndLocalStorage();
    };
    /**
     * Decrease product quantity on 1 for appropriate product in the cart
     * @param {number} product's id
     */
    ProductCart.prototype.deleteOneProductFromCart = function (id) {
        this.cart.deleteOneProductFromCart(id);
        this.onProductAdded.next(this.cart.getCart());
        this.syncCartWithServerAndLocalStorage();
    };
    /**
     * Get total cart's price
     * @return {number} total price
     */
    ProductCart.prototype.getTotalPrice = function () {
        return this.cart.getTotalPrice();
    };
    /**
     * Get product cart
     * @return {Cart} cart
     */
    ProductCart.prototype.getProductCart = function () {
        return this.cart;
    };
    /**
     * Clear product cart
     */
    ProductCart.prototype.cleanCart = function () {
        this.cart.cleanCart();
        this.syncCartWithServerAndLocalStorage();
        this.onProductAdded.next(this.cart);
    };
    ProductCart = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"]])
    ], ProductCart);
    return ProductCart;
}());



/***/ }),

/***/ "./src/app/shared/services/products.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/products.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.results = [];
        this.products = {};
        this.newProducts = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * Save products on the server
     */
    ProductService.prototype.saveProducts = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
        this.http.post(this.apiUrl, this.products, { headers: headers })
            .subscribe();
    };
    /**
     * Get all products from server
     * @return {Observable} return all products
     */
    ProductService.prototype.getProducts = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
        var productsObservable = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var onlineMode = navigator.onLine;
            if (onlineMode) {
                _this.http.get(_this.apiUrl + "/pizza", { headers: headers })
                    .subscribe(function (productList) {
                    observer.next(_this.onProductGetSuccess(productList));
                    localStorage.setItem("productList", JSON.stringify({ category: "pizza", products: productList }));
                }, function (err) {
                    observer.error('error while getting products! ' + err);
                });
            }
            else {
                observer.error("Offline mode!");
            }
        });
        return productsObservable;
    };
    ProductService.prototype.onProductGetSuccess = function (productList) {
        var products;
        if (productList.length > 0) {
            products = productList;
            this.products = productList;
        }
        return products;
    };
    /**
     * Get products according to selected category
     * @param {String} product's category
     * @return {Observable} products which are matched search query
     */
    ProductService.prototype.getProductsByCategory = function (category) {
        var _this = this;
        var productsObserver = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/json' });
            var online = navigator.onLine;
            if (online) {
                _this.http.get(_this.apiUrl + "/" + category, { headers: headers })
                    .subscribe(function (products) {
                    if (products.length > 0) {
                        observer.next(products);
                        localStorage.setItem("productList", JSON.stringify({ category: category, products: products }));
                    }
                    else {
                        observer.error('No Products!');
                    }
                }, function (err) {
                    observer.error(err);
                });
            }
            else {
                var productList = JSON.parse(localStorage.getItem('productList'));
                if (productList.category == category) {
                    observer.next(productList.products);
                }
                else {
                    observer.error('Offline mode!');
                }
            }
        });
        return productsObserver;
    };
    ProductService.prototype.setSelectedProduct = function (productInfo) {
        this.selectedProduct = productInfo;
    };
    ProductService.prototype.getSelectedProduct = function () {
        return this.selectedProduct;
    };
    ProductService.prototype.searchProducts = function (query) {
        var _this = this;
        var searchObservable = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var onlineMode = navigator.onLine;
            if (onlineMode) {
                _this.searchProductsOnline(query, observer);
            }
            else {
                _this.searchProductOffline(query, observer);
            }
        });
        return searchObservable;
    };
    ProductService.prototype.searchProductOffline = function (query, observer) {
        var productsDetail = JSON.parse(localStorage.getItem('productList'));
        var localeProductList = productsDetail.products;
        var searchRes = [];
        localeProductList.filter(function (item) {
            if (item.productTitle == query) {
                searchRes.push(item);
            }
        });
        if (searchRes.length > 0) {
            observer.next(searchRes);
        }
        else if (searchRes.length == 0) {
            observer.next([]);
        }
    };
    ProductService.prototype.searchProductsOnline = function (query, observer) {
        var _this = this;
        var requestedWords = query.split(' ');
        var queryTemplate = requestedWords.length > 1 ? requestedWords.join('%20') : query;
        var result = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.searchProductsByCategory('salads', queryTemplate), this.searchProductsByCategory('drinks', queryTemplate), this.searchProductsByCategory('pizza', queryTemplate));
        result.subscribe(function (searchResults) {
            var results = searchResults ? _this.getFormattedResults(searchResults) : [];
            observer.next(results);
        }, function (searchError) {
            console.log(searchError);
            observer.error('All');
        });
    };
    ProductService.prototype.getFormattedResults = function (searchResults) {
        var results = [];
        searchResults.forEach(function (searchResByProdCategory) {
            searchResByProdCategory.forEach(function (item) {
                results.push(item);
            });
        });
        return results;
    };
    ProductService.prototype.searchProductsByCategory = function (category, query) {
        return this.http.get(this.apiUrl + "/" + category + "?productTitle=" + query);
    };
    ProductService.prototype.getResults = function () {
        return this.results;
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
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
    production: false,
    apiUrl: 'https://f-deploy.herokuapp.com'
};
// 'https://f-deploy.herokuapp.com'
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ANGULAR-MAXIMILLIAN-COURSE\food-delivery\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map