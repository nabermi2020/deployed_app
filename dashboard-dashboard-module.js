(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart/cart.component.ts");
/* harmony import */ var _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-confirmation/order-confirmation.component */ "./src/app/cart/order-confirmation/order-confirmation.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _order_results_order_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-results/order-results.component */ "./src/app/cart/order-results/order-results.component.ts");








var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"],
                _order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["OrderConfirmationComponent"],
                _order_results_order_results_component__WEBPACK_IMPORTED_MODULE_7__["OrderResultsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: []
        })
    ], CartModule);
    return CartModule;
}());



/***/ }),

/***/ "./src/app/cart/cart/cart.component.html":
/*!***********************************************!*\
  !*** ./src/app/cart/cart/cart.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"productCart\">\r\n    <div id=\"productCartHeader\">\r\n        <header> \r\n            <h4>Product Cart</h4>\r\n        </header>\r\n    </div>\r\n\r\n    <div id=\"products\" class=\"align-middle\">\r\n        <div id=\"emptyCart\" *ngIf=\"cart.length == 0\" >\r\n            <h2>Cart is empty</h2>\r\n        </div>\r\n\r\n        <div *ngFor=\"let product of cart\"\r\n              class=\"product\">\r\n            <div class=\"productLogoWrapper\" (click)=\"navigateToProductDetailsPage(product)\">\r\n                <img [src]=\"product.imgPath\" class=\"img-responsive\"  >\r\n            </div>\r\n\r\n            <div class=\"productTitle\">\r\n                <h5> {{ product.productTitle }} </h5>\r\n            </div>\r\n\r\n            <div class=\"productPrice\">\r\n                <h5>{{ product.productPrice * product.productQuantity}} $</h5>\r\n            </div>\r\n\r\n            <div class=\"productQuantity\">\r\n                <button (click)=\"deleteOneProduct(product)\">-</button>\r\n                <input type=\"text\"\r\n                       [value]=\"product.productQuantity\"\r\n                       class=\"prodQuantity\"\r\n                       disabled>\r\n                <button (click)=\"addOneProduct(product)\">+</button>\r\n            </div>\r\n\r\n            <div class=\"deleteItem\">\r\n                <button class=\"btn btn-danger\" (click)=\"deleteCurrentProduct(product.id)\">X</button>\r\n            </div>\r\n             \r\n        </div>     \r\n    </div>\r\n\r\n    <div id=\"controls\" *ngIf=\"cart.length\">\r\n        <button class=\"btn btn-success\" id=\"buyProducts\" style=\"min-width:180px\"(click)=\"makeAnOrder()\">BUY</button>\r\n        <div id=\"totalPrice\">{{ totalPrice }} $</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/cart/cart/cart.component.scss":
/*!***********************************************!*\
  !*** ./src/app/cart/cart/cart.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#productCart {\n  width: 75%;\n  min-height: 290px;\n  height: auto;\n  margin: 0 auto;\n  position: relative;\n  margin-top: 4%;\n  box-shadow: 0 0 10px black;\n  margin-bottom: 50px; }\n  #productCart #productCartHeader {\n    height: 35px;\n    width: 100%;\n    background: #f15151;\n    color: white;\n    text-align: center; }\n  #productCart #products {\n    width: 100%;\n    height: 100%; }\n  #productCart #products #emptyCart {\n      text-align: center;\n      position: absolute;\n      left: 40%;\n      top: 37%;\n      color: lightgray;\n      height: 100%;\n      line-height: 100%; }\n  #productCart #products .product {\n      height: 150px;\n      width: 100%; }\n  #productCart #products .product:last-child {\n        margin-bottom: 40px; }\n  #productCart #products .product .productTitle {\n        width: 50%;\n        display: inline-block;\n        text-align: center;\n        line-height: 100%; }\n  #productCart #products .product .productPrice {\n        width: 10%;\n        display: inline-block; }\n  #productCart #products .product .productQuantity {\n        width: 100px;\n        display: inline-block;\n        height: 32px;\n        margin-top: 15px;\n        position: relative;\n        top: 0%;\n        text-align: center; }\n  #productCart #products .product .productQuantity .prodQuantity {\n          width: 30px;\n          text-align: center; }\n  #productCart #products .product .deleteItem {\n        text-align: center;\n        width: 10%;\n        display: inline-block; }\n  #productCart #products .product .productLogoWrapper {\n        width: 130px;\n        height: 100%;\n        opacity: 0.9;\n        display: inline-block;\n        line-height: 130px;\n        background-size: cover; }\n  #productCart #products .product .productLogoWrapper:hover {\n          cursor: pointer;\n          opacity: 1;\n          transform: scale(1.02, 1.02); }\n  #productCart #products .product .productLogoWrapper img {\n          width: 100%; }\n  #productCart #controls {\n    width: 100%;\n    height: 70px;\n    text-align: center;\n    line-height: 70px;\n    position: relative;\n    bottom: 0; }\n  #productCart #controls #totalPrice {\n      display: inline-block;\n      border: 1px solid #6838ec;\n      position: absolute;\n      right: 0;\n      width: 100px;\n      height: 100%;\n      background: #6838ec;\n      color: white;\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0L0Q6XFxBTkdVTEFSLU1BWElNSUxMSUFOLUNPVVJTRVxcZm9vZC1kZWxpdmVyeS9zcmNcXGFwcFxcY2FydFxcY2FydFxcY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUdaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixtQkFBbUIsRUFBQTtFQVZ2QjtJQWFRLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQTRCO0lBQzVCLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQWpCMUI7SUFxQlEsV0FBVztJQUNYLFlBQVksRUFBQTtFQXRCcEI7TUEyQlksa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsUUFBUTtNQUNSLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osaUJBQWlCLEVBQUE7RUFqQzdCO01BcUNZLGFBQWE7TUFDYixXQUFXLEVBQUE7RUF0Q3ZCO1FBeUNnQixtQkFBbUIsRUFBQTtFQXpDbkM7UUE4Q2dCLFVBQVU7UUFDVixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGlCQUFpQixFQUFBO0VBakRqQztRQXFEZ0IsVUFBVTtRQUNWLHFCQUFxQixFQUFBO0VBdERyQztRQTBEZ0IsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1Asa0JBQWtCLEVBQUE7RUFoRWxDO1VBb0VvQixXQUFXO1VBQ1gsa0JBQWtCLEVBQUE7RUFyRXRDO1FBNEVnQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLHFCQUFxQixFQUFBO0VBOUVyQztRQWtGZ0IsWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUVsQixzQkFBc0IsRUFBQTtFQXhGdEM7VUEyRm9CLGVBQWU7VUFDZixVQUFVO1VBQ1YsNEJBQTRCLEVBQUE7RUE3RmhEO1VBaUdvQixXQUFXLEVBQUE7RUFqRy9CO0lBeUdRLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUyxFQUFBO0VBOUdqQjtNQWtIVyxxQkFBcUI7TUFDckIseUJBQW1DO01BQ25DLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsWUFBWTtNQUNaLFlBQVk7TUFDWixtQkFBNkI7TUFDN0IsWUFBWTtNQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZHVjdENhcnQge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1pbi1oZWlnaHQ6IDI5MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIFxyXG5cclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogNCU7IFxyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuICAgICNwcm9kdWN0Q2FydEhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDgxLCA4MSk7IFxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgI3Byb2R1Y3RzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgIFxyXG5cclxuICAgICAgICAjZW1wdHlDYXJ0IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICAgICAgdG9wOiAzNyU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZHVjdHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2R1Y3RUaXRsZSB7XHJcbiAgICAgICAgICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2R1Y3RQcmljZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJvZHVjdFF1YW50aXR5IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2RRdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRlbGV0ZUl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJvZHVjdExvZ29XcmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICAgICAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIsIDEuMDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRyb2xzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcblxyXG4gICAgICAgI3RvdGFsUHJpY2Uge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTA0LCA1NiwgMjM2KTtcclxuICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTA0LCA1NiwgMjM2KTtcclxuICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart/cart.component.ts":
/*!*********************************************!*\
  !*** ./src/app/cart/cart/cart.component.ts ***!
  \*********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/products.service */ "./src/app/shared/services/products.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_product_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/product-cart.service */ "./src/app/shared/services/product-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CartComponent = /** @class */ (function () {
    function CartComponent(productCart, router, productService) {
        this.productCart = productCart;
        this.router = router;
        this.productService = productService;
        this.cart = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getCartInfo();
    };
    CartComponent.prototype.getCartInfo = function () {
        this.cart = !navigator.onLine ? this.productCart.getProducts() : this.productCart.getCartFromLocalStorage();
        this.totalPrice = this.productCart.getTotalPrice();
    };
    CartComponent.prototype.deleteCurrentProduct = function (productId) {
        this.productCart.deleteProductById(productId);
        this.totalPrice = this.productCart.getTotalPrice();
    };
    CartComponent.prototype.makeAnOrder = function () {
        this.router.navigate(["/dashboard/order-confirmation"]);
    };
    CartComponent.prototype.addOneProduct = function (product) {
        var productId = product.id;
        this.productCart.addOneProductToCart(productId);
        this.totalPrice = this.productCart.getTotalPrice();
    };
    CartComponent.prototype.deleteOneProduct = function (product) {
        var productId = product.id;
        this.productCart.deleteOneProductFromCart(productId);
        this.totalPrice = this.productCart.getTotalPrice();
    };
    CartComponent.prototype.navigateToProductDetailsPage = function (product) {
        this.productService.setSelectedProduct(product);
        this.router.navigate(["dashboard/product-details/" + product.id]);
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-cart",
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart/cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_product_cart_service__WEBPACK_IMPORTED_MODULE_3__["ProductCart"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/cart/order-confirmation/order-confirmation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/cart/order-confirmation/order-confirmation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orderConfirmation\">\r\n        \r\n  <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n          <div id=\"orderDetail\">\r\n            \r\n            <div id=\"orderDetailHeader\">\r\n                <h4>Enter delivery info</h4>\r\n            </div>\r\n            <form id=\"order\"\r\n                  #form=ngForm\r\n                  (ngSubmit)=\"showConfirmationPopUp(form)\">\r\n                  <div id=\"orderInfo\">\r\n                  <div class=\"row\">\r\n\r\n                  <div class=\"col-md-6 col-xs-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"firstName\">\r\n                            First Name:\r\n                            <input type=\"text\"\r\n                                   placeholder=\"Enter first name\"\r\n                                   class=\"form-control\"\r\n                                   id=\"firstName\"\r\n                                   required\r\n                                   firstName\r\n                                   #firstName=\"ngModel\"\r\n                                   name=\"firstName\"\r\n                                   ngModel>\r\n                        </label>\r\n                        <div *ngIf=\"!firstName.valid && firstName.touched\" class=\"validationErrors\">First name isn't valid!</div>\r\n                    </div>\r\n                </div>\r\n\r\n             \r\n                <div class=\"col-md-6 col-xs-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"Last Name\">\r\n                            Last Name:\r\n                            <input type=\"text\"\r\n                                   placeholder=\"Enter last name\"\r\n                                   class=\"form-control\"\r\n                                   id=\"lastName\"\r\n                                   required\r\n                                   lastName\r\n                                   #lastName=\"ngModel\"\r\n                                   name=\"lastName\"\r\n                                   ngModel>\r\n                        </label>\r\n                        <div *ngIf=\"!lastName.valid && lastName.touched\" class=\"validationErrors\">Last name isn't valid!</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 col-xs-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"email\">\r\n                            Email:\r\n                            <input type=\"email\"\r\n                                   placeholder=\"Enter email\"\r\n                                   class=\"form-control\"\r\n                                   id=\"email\"\r\n                                   required\r\n                                   email\r\n                                   #email=\"ngModel\"\r\n                                   name=\"email\"\r\n                                   ngModel>\r\n                        </label>\r\n                        <div *ngIf=\"!email.valid && email.touched\" class=\"validationErrors\">Email isn't valid!</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 col-xs-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"phone\">\r\n                            Phone:\r\n                            <input type=\"text\"\r\n                                   placeholder=\"Enter phone\"\r\n                                   class=\"form-control\"\r\n                                   id=\"phone\"\r\n                                   required\r\n                                   phone\r\n                                   #phone=\"ngModel\"\r\n                                   name=\"phone\"\r\n                                   ngModel>\r\n                        </label>\r\n                        <div *ngIf=\"!phone.valid && phone.touched\" class=\"validationErrors\">Phone isn't valid!</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 col-xs-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"address\">\r\n                                Address:\r\n                                <input type=\"text\"\r\n                                       placeholder=\"Enter address\"\r\n                                       class=\"form-control\"\r\n                                       id=\"address\"\r\n                                       required\r\n                                       address\r\n                                       #address=\"ngModel\"\r\n                                       name=\"address\"\r\n                                       ngModel>\r\n                            </label>\r\n                            <div *ngIf=\"!address.valid && address.touched\" class=\"validationErrors\">Address isn't valid!</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6 col-xs-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"orderTime\">\r\n                                    Order time:\r\n                                    <select name=\"orderTime\"\r\n                                            id=\"orderTime\"\r\n                                            required\r\n                                            orderTime\r\n                                            #orderTime=\"ngModel\"\r\n                                            class=\"form-control\"\r\n                                            ngModel>\r\n                                        <option value=\"1200\">12 00</option>\r\n                                        <option value=\"1300\">13 00</option>\r\n                                        <option value=\"1400\">14 00</option>\r\n                                        <option value=\"1500\">15 00</option>\r\n                                        <option value=\"1600\">16 00</option>\r\n                                        <option value=\"1700\">17 00</option>    \r\n                                    </select>\r\n                                    <div *ngIf=\"!orderTime.valid && orderTime.touched\" class=\"validationErrors\">Delivery time is required!</div>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n\r\n                  </div>\r\n                  <div class=\"controlWrapper\">\r\n                    <button class=\"btn btn-danger\"\r\n                        type=\"submit\"\r\n                        id=\"orderControl\" \r\n                        [disabled]=\"!form.valid\">Order</button>\r\n                  </div>\r\n                  \r\n                </div>\r\n                  \r\n                \r\n            </form>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n          <div id=\"cartWidget\">\r\n              <div id=\"cartWidgetHeader\">\r\n                  <h5>Cart</h5>\r\n              </div>\r\n             \r\n              <div id=\"productList\">\r\n                <div *ngFor=\"let product of cart\" class=\"productItem\">\r\n                    <div class=\"productImgWrapper\" (click)=\"navigateToProductDetailPage(product)\">\r\n                        <img [src]=\"product.imgPath\"  >\r\n                    </div>\r\n\r\n                    <div class=\"productTitle\">\r\n                        {{ product.productTitle }} X {{ product.productQuantity || ''}}\r\n                    </div>\r\n\r\n                    <div class=\"productPrice\">\r\n                        {{ product.productPrice * product.productQuantity }} $\r\n                    </div>\r\n\r\n                    <div class=\"deleteItem\">\r\n                        <button class=\"btn btn-danger btn-sm\" (click)=\"deleteProductFromList(product)\">X</button>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div id=\"cartWidgetFooter\">\r\n                  <div id=\"totalPriceWrapper\">\r\n                      Total\r\n                  </div>\r\n\r\n                  <div id=\"totalPrice\">\r\n                        {{ totalPrice}} $\r\n                    </div>\r\n              </div>\r\n\r\n              \r\n          </div>\r\n      </div>\r\n  </div>\r\n  \r\n</div>\r\n\r\n<ng-container *ngIf=\"isConfirmationPopUpEnabled\">\r\n    <app-confirmation-popup (orderConfirmed)=\"onOrderSubmit(this.formData)\"></app-confirmation-popup>\r\n</ng-container>\r\n\r\n<app-loading></app-loading>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/cart/order-confirmation/order-confirmation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/cart/order-confirmation/order-confirmation.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderConfirmation {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  margin-top: 15px; }\n  #orderConfirmation #orderDetail {\n    width: 92%;\n    box-shadow: 0 0 10px black;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    margin-left: 15px;\n    min-height: 400px;\n    height: auto; }\n  #orderConfirmation #orderDetail #orderInfo {\n      margin-left: 15px; }\n  #orderConfirmation #orderDetail #orderDetailHeader {\n      width: 100%;\n      height: 40px;\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px;\n      background: #4cac4c;\n      color: white;\n      text-align: center; }\n  #orderConfirmation #orderDetail .controlWrapper {\n      text-align: center; }\n  #orderConfirmation #orderDetail .controlWrapper #orderControl {\n        width: 150px;\n        line-height: 40px; }\n  #orderConfirmation #cartWidget {\n    width: 90%;\n    position: relative;\n    box-shadow: 0 0 10px black;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    min-height: 600px;\n    height: auto; }\n  #orderConfirmation #cartWidget #cartWidgetHeader {\n      width: 100%;\n      height: 40px;\n      text-align: center;\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px;\n      background: #eb64b2;\n      color: white; }\n  #orderConfirmation #cartWidget #productList .productItem {\n      width: 100%;\n      height: 55px;\n      line-height: 55px;\n      border-bottom: 1px solid lightgray; }\n  #orderConfirmation #cartWidget #productList .productItem .productImgWrapper {\n        width: 50px;\n        position: relative;\n        display: inline-block;\n        background-size: cover;\n        opacity: 0.9; }\n  #orderConfirmation #cartWidget #productList .productItem .productImgWrapper:hover {\n          cursor: pointer;\n          opacity: 1;\n          transform: scale(1.015, 1.015); }\n  #orderConfirmation #cartWidget #productList .productItem .productImgWrapper img {\n          width: 50px; }\n  #orderConfirmation #cartWidget #productList .productItem .productTitle {\n        width: 50%;\n        display: inline-block;\n        text-align: center;\n        line-height: 100%;\n        font-size: 10px; }\n  #orderConfirmation #cartWidget #productList .productItem .productPrice {\n        width: 20%;\n        display: inline-block; }\n  #orderConfirmation #cartWidget #productList .productItem .deleteItem {\n        text-align: center;\n        width: 10%;\n        display: inline-block; }\n  #orderConfirmation #cartWidget #cartWidgetFooter {\n      position: absolute;\n      width: 100%;\n      bottom: 0;\n      height: 60px; }\n  #orderConfirmation #cartWidget #cartWidgetFooter #totalPriceWrapper {\n        width: 50%;\n        display: inline-block;\n        height: 100%;\n        background: lightgray;\n        color: black;\n        text-align: center;\n        line-height: 60px;\n        font-weight: 600; }\n  #orderConfirmation #cartWidget #cartWidgetFooter #totalPrice {\n        width: 50%;\n        display: inline-block;\n        height: 100%;\n        background: #cc3232;\n        color: white;\n        text-align: center;\n        line-height: 60px; }\n  .validationErrors {\n  color: #8a2222 197, 31, 31;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9vcmRlci1jb25maXJtYXRpb24vRDpcXEFOR1VMQVItTUFYSU1JTExJQU4tQ09VUlNFXFxmb29kLWRlbGl2ZXJ5L3NyY1xcYXBwXFxjYXJ0XFxvcmRlci1jb25maXJtYXRpb25cXG9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQixFQUFBO0VBSnBCO0lBT1EsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWSxFQUFBO0VBYnBCO01BZ0JZLGlCQUFpQixFQUFBO0VBaEI3QjtNQW9CWSxXQUFXO01BQ1gsWUFBWTtNQUNaLDRCQUE0QjtNQUM1Qiw2QkFBNkI7TUFDN0IsbUJBQTRCO01BQzVCLFlBQVk7TUFDWixrQkFBa0IsRUFBQTtFQTFCOUI7TUE4Qlksa0JBQWtCLEVBQUE7RUE5QjlCO1FBaUNnQixZQUFZO1FBQ1osaUJBQWlCLEVBQUE7RUFsQ2pDO0lBd0NRLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLFlBQVksRUFBQTtFQTlDcEI7TUFpRFksV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsNEJBQTRCO01BQzVCLDZCQUE2QjtNQUM3QixtQkFBOEI7TUFDOUIsWUFBWSxFQUFBO0VBdkR4QjtNQTZEZ0IsV0FBVztNQUNYLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsa0NBQWtDLEVBQUE7RUFoRWxEO1FBbUVvQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsWUFBWSxFQUFBO0VBdkVoQztVQTBFd0IsZUFBZTtVQUNmLFVBQVU7VUFDViw4QkFBOEIsRUFBQTtFQTVFdEQ7VUFnRndCLFdBQVcsRUFBQTtFQWhGbkM7UUFxRm9CLFVBQVU7UUFDVixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixlQUFlLEVBQUE7RUF6Rm5DO1FBNkZvQixVQUFVO1FBQ1YscUJBQXFCLEVBQUE7RUE5RnpDO1FBa0dvQixrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLHFCQUFxQixFQUFBO0VBcEd6QztNQTBHWSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFNBQVM7TUFDVCxZQUFZLEVBQUE7RUE3R3hCO1FBZ0hnQixVQUFVO1FBQ1YscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCLEVBQUE7RUF2SGhDO1FBMkhnQixVQUFVO1FBQ1YscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixtQkFBNEI7UUFDNUIsWUFBVztRQUNYLGtCQUFrQjtRQUNsQixpQkFBaUIsRUFBQTtFQU9qQztFQUNJLDBCQUFtQztFQUNuQyxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcnQvb3JkZXItY29uZmlybWF0aW9uL29yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvcmRlckNvbmZpcm1hdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICAjb3JkZXJEZXRhaWwge1xyXG4gICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAgICNvcmRlckluZm8ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNvcmRlckRldGFpbEhlYWRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNzYsIDE3MiwgNzYpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAuY29udHJvbFdyYXBwZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAjb3JkZXJDb250cm9sIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjY2FydFdpZGdldCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAgICNjYXJ0V2lkZ2V0SGVhZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIzNSwgMTAwLCAxNzgpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjcHJvZHVjdExpc3Qge1xyXG5cclxuICAgICAgICAgICAgLnByb2R1Y3RJdGVtIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG5cclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0SW1nV3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMTUsIDEuMDE1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0VGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2R1Y3RQcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRlbGV0ZUl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY2FydFdpZGdldEZvb3RlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG5cclxuICAgICAgICAgICAgI3RvdGFsUHJpY2VXcmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICN0b3RhbFByaWNle1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDUwLCA1MCk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi52YWxpZGF0aW9uRXJyb3JzIHtcclxuICAgIGNvbG9yOiByZ2IoMTM4LCAzNCwgMzQpKDE5NywgMzEsIDMxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cart/order-confirmation/order-confirmation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/cart/order-confirmation/order-confirmation.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrderConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderConfirmationComponent", function() { return OrderConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/products.service */ "./src/app/shared/services/products.service.ts");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var src_app_shared_services_product_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/product-cart.service */ "./src/app/shared/services/product-cart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order.model */ "./src/app/cart/order.model.ts");
/* harmony import */ var src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/orders.service */ "./src/app/shared/services/orders.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/edit-modal.service */ "./src/app/shared/services/edit-modal.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");











var OrderConfirmationComponent = /** @class */ (function () {
    function OrderConfirmationComponent(productCart, ordersService, authService, router, editModal, productsService) {
        this.productCart = productCart;
        this.ordersService = ordersService;
        this.authService = authService;
        this.router = router;
        this.editModal = editModal;
        this.productsService = productsService;
        this.cart = [];
        this.isConfirmationPopUpEnabled = false;
        this.editModalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"]();
    }
    OrderConfirmationComponent.prototype.ngOnInit = function () {
        this.cart = this.productCart.getProducts();
        this.totalPrice = this.productCart.getTotalPrice();
        this.userData = this.authService.getCurrentUser();
        this.preFillForm();
        this.subscribeToModalToggling();
    };
    OrderConfirmationComponent.prototype.subscribeToModalToggling = function () {
        var _this = this;
        this.editModalSubscription = this.editModal.onEditChange.subscribe(function (res) {
            _this.isConfirmationPopUpEnabled = res;
        });
    };
    /**
     * Prefill order confirmation screen
     */
    OrderConfirmationComponent.prototype.preFillForm = function () {
        var _this = this;
        setTimeout(function () {
            _this.form.setValue({
                address: _this.userData.address,
                email: _this.userData.email,
                firstName: _this.userData.firstName,
                lastName: _this.userData.lastName,
                phone: _this.userData.phone,
                orderTime: ''
            });
        });
    };
    /**
     * Order confirmation
     * @param {ngForm} form data
     */
    OrderConfirmationComponent.prototype.onOrderSubmit = function (form) {
        // create interface
        var _a = form.value, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, phone = _a.phone, address = _a.address, orderTime = _a.orderTime;
        var order = new _order_model__WEBPACK_IMPORTED_MODULE_5__["Order"](firstName, lastName, email, phone, address, orderTime, this.productCart.getProductCart());
        this.ordersService.makeAnOrder(order);
        // if (navigator.onLine) {
        //   this.ordersService.makeAnOrder(order);
        // //Should be modified
        // } else {
        //   let activeCategory = JSON.parse(localStorage.getItem("productList")).category;
        //   this.router.navigate([`dashboard/products/${activeCategory}`]);
        // }
    };
    OrderConfirmationComponent.prototype.showConfirmationPopUp = function (form) {
        this.formData = form;
        this.isConfirmationPopUpEnabled = !this.isConfirmationPopUpEnabled;
        this.editModal.toggleEditMode();
    };
    /**
     * Delete product by id
     * @param {Product} selected product
     */
    OrderConfirmationComponent.prototype.deleteProductFromList = function (product) {
        var productId = product.id;
        this.productCart.deleteProductById(productId);
        this.totalPrice = this.productCart.getTotalPrice();
        if (this.cart.length == 0) {
            this.router.navigate(['dashboard/products/pizza']);
        }
    };
    OrderConfirmationComponent.prototype.navigateToProductDetailPage = function (product) {
        this.productsService.setSelectedProduct(product);
        this.router.navigate(["dashboard/product-details/" + product.id]);
    };
    OrderConfirmationComponent.prototype.ngOnDestroy = function () {
        this.editModalSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('form'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"])
    ], OrderConfirmationComponent.prototype, "form", void 0);
    OrderConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-order-confirmation',
            template: __webpack_require__(/*! ./order-confirmation.component.html */ "./src/app/cart/order-confirmation/order-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./order-confirmation.component.scss */ "./src/app/cart/order-confirmation/order-confirmation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_product_cart_service__WEBPACK_IMPORTED_MODULE_3__["ProductCart"],
            src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"],
            _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_9__["EditModalService"],
            _shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], OrderConfirmationComponent);
    return OrderConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/cart/order-results/order-results.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/cart/order-results/order-results.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orderResultsWrapper\">\r\n  <div class=\"orderLogoWrapper\">\r\n    <img [src]=\"orderLogoStatus\" class=\"orderStatusImg\" *ngIf=\"!isNetworkDisabled\">\r\n  </div>  \r\n  <div id=\"orderDetails\">\r\n    <div id=\"orderId\" *ngIf=\"orderStatus === 'orderSuccess'\">Order Number: {{ order.orderId }}</div>\r\n    <div id=\"totalPrice\" *ngIf=\"orderStatus === 'orderSuccess'\">Total Amount: {{ order.totalPrice }}$</div>\r\n    <div id=\"orderStatusMsg\">{{ orderStatusMsg }}</div> \r\n    <button id=\"goToDashboard\" \r\n            class=\"btn btn-danger\"\r\n            (click)=\"navToDashboard()\">To Dashboard</button> \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cart/order-results/order-results.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/cart/order-results/order-results.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderResultsWrapper .orderLogoWrapper {\n  text-align: center;\n  position: relative;\n  margin-top: 14%; }\n  #orderResultsWrapper .orderLogoWrapper .orderStatusImg {\n    width: 140px;\n    height: 150px; }\n  #orderResultsWrapper #orderDetails {\n  width: 60%;\n  text-align: center;\n  margin: 0 auto;\n  line-height: 35px;\n  font-weight: 300;\n  font-family: 'Arial';\n  font-size: 18px; }\n  #orderResultsWrapper #orderDetails #goToDashboard {\n    margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9vcmRlci1yZXN1bHRzL0Q6XFxBTkdVTEFSLU1BWElNSUxMSUFOLUNPVVJTRVxcZm9vZC1kZWxpdmVyeS9zcmNcXGFwcFxcY2FydFxcb3JkZXItcmVzdWx0c1xcb3JkZXItcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdRLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0VBTHZCO0lBUVksWUFBWTtJQUNaLGFBQWEsRUFBQTtFQVR6QjtFQWNRLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGVBQWUsRUFBQTtFQXBCdkI7SUF1QlksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L29yZGVyLXJlc3VsdHMvb3JkZXItcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvcmRlclJlc3VsdHNXcmFwcGVyIHtcclxuICAgIFxyXG4gICAgLm9yZGVyTG9nb1dyYXBwZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTQlO1xyXG5cclxuICAgICAgICAub3JkZXJTdGF0dXNJbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNvcmRlckRldGFpbHMge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG5cclxuICAgICAgICAjZ29Ub0Rhc2hib2FyZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/cart/order-results/order-results.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/cart/order-results/order-results.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderResultsComponent", function() { return OrderResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/orders.service */ "./src/app/shared/services/orders.service.ts");




var OrderResultsComponent = /** @class */ (function () {
    function OrderResultsComponent(activeRoute, orderService, router) {
        this.activeRoute = activeRoute;
        this.orderService = orderService;
        this.router = router;
        this.isNetworkDisabled = false;
        this.orderSuccessLogoPath = './../../../assets/success.png';
        this.orderFailureLogoPath = './../../../assets/orderError.png';
    }
    OrderResultsComponent.prototype.ngOnInit = function () {
        this.checkOrderStatus();
        this.updateOrderStatus();
        this.checkLastOrder();
    };
    OrderResultsComponent.prototype.updateOrderStatus = function () {
        switch (this.orderStatus) {
            case 'orderSuccess':
                this.orderLogoStatus = this.orderSuccessLogoPath;
                this.isNetworkDisabled = false;
                this.orderStatusMsg = 'You\'ve successfully made an order :)';
                break;
            case 'orderFailure':
                this.orderLogoStatus = this.orderFailureLogoPath;
                this.isNetworkDisabled = false;
                this.orderStatusMsg = 'Something went wrong(';
                break;
            case 'offlineMode':
                this.isNetworkDisabled = true;
                this.orderStatusMsg = 'You\'re in the offline mode(:';
                break;
            case 'submitSuccess':
                this.isNetworkDisabled = true;
                this.orderStatusMsg = 'Order has been successfully submitted';
                break;
            case 'submitFailure':
                this.isNetworkDisabled = true;
                this.orderStatusMsg = 'Something went wrong( You\'re in offline mode';
                break;
        }
    };
    OrderResultsComponent.prototype.checkLastOrder = function () {
        this.order = this.orderService.getLastOrder();
        console.log(this.orderStatus);
    };
    OrderResultsComponent.prototype.checkOrderStatus = function () {
        var _this = this;
        this.activeRoute.children[0].params
            .subscribe(function (orderStatus) {
            _this.orderStatus = orderStatus.orderStatus;
        });
    };
    OrderResultsComponent.prototype.navToDashboard = function () {
        this.router.navigate(['dashboard/products/pizza']);
    };
    OrderResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-order-results',
            template: __webpack_require__(/*! ./order-results.component.html */ "./src/app/cart/order-results/order-results.component.html"),
            styles: [__webpack_require__(/*! ./order-results.component.scss */ "./src/app/cart/order-results/order-results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OrderResultsComponent);
    return OrderResultsComponent;
}());



/***/ }),

/***/ "./src/app/cart/order.model.ts":
/*!*************************************!*\
  !*** ./src/app/cart/order.model.ts ***!
  \*************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(firstName, lastName, email, phone, address, deliveryTime, cart) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.deliveryTime = deliveryTime;
        this.orderTime = new Date();
        this.orderId = this.generateOrderId(1, 1000);
        this.totalPrice = cart.getTotalPrice();
        this.products = cart.getCart();
    }
    Order.prototype.setUserId = function (id) {
        this.userId = id;
    };
    Order.prototype.setOrderStatus = function (status) {
        this.orderStatus = status;
    };
    Order.prototype.generateOrderId = function (upperLimit, lowerLimit) {
        return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
    };
    return Order;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pdp_pdp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pdp/pdp.component */ "./src/app/dashboard/pdp/pdp.component.ts");
/* harmony import */ var _cart_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../cart/order-confirmation/order-confirmation.component */ "./src/app/cart/order-confirmation/order-confirmation.component.ts");
/* harmony import */ var _cart_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart/cart/cart.component */ "./src/app/cart/cart/cart.component.ts");
/* harmony import */ var _userprofile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../userprofile/profile-detail/profile-detail.component */ "./src/app/userprofile/profile-detail/profile-detail.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _userprofile_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../userprofile/profile/profile.component */ "./src/app/userprofile/profile/profile.component.ts");
/* harmony import */ var _product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-dashboard/product-dashboard.component */ "./src/app/dashboard/product-dashboard/product-dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_grid_product_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-grid/product-grid.component */ "./src/app/dashboard/product-grid/product-grid.component.ts");
/* harmony import */ var _userprofile_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../userprofile/order-history/order-history.component */ "./src/app/userprofile/order-history/order-history.component.ts");
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/error/error.component */ "./src/app/shared/error/error.component.ts");
/* harmony import */ var _cart_order_results_order_results_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../cart/order-results/order-results.component */ "./src/app/cart/order-results/order-results.component.ts");














var dashboardRoutes = [
    {
        path: '',
        component: _product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["ProductDashboardComponent"],
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            {
                path: 'profile',
                component: _userprofile_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                children: [
                    {
                        path: 'user-info',
                        component: _userprofile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProfileDetailComponent"]
                    },
                    {
                        path: 'order-history',
                        component: _userprofile_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_11__["OrderHistoryComponent"]
                    },
                ]
            },
            {
                path: "products",
                component: _product_grid_product_grid_component__WEBPACK_IMPORTED_MODULE_10__["ProductGridComponent"],
                children: [
                    {
                        path: ':cat',
                        component: _product_grid_product_grid_component__WEBPACK_IMPORTED_MODULE_10__["ProductGridComponent"],
                        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
                    },
                ]
            },
            {
                path: 'cart',
                component: _cart_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
            },
            {
                path: 'product-details',
                component: _pdp_pdp_component__WEBPACK_IMPORTED_MODULE_1__["PdpComponent"],
                children: [
                    {
                        path: ':id',
                        component: _pdp_pdp_component__WEBPACK_IMPORTED_MODULE_1__["PdpComponent"]
                    }
                ]
            },
            {
                path: 'order-confirmation',
                component: _cart_order_confirmation_order_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["OrderConfirmationComponent"]
            },
            {
                path: 'order-results',
                component: _cart_order_results_order_results_component__WEBPACK_IMPORTED_MODULE_13__["OrderResultsComponent"],
                children: [
                    {
                        path: ':orderStatus',
                        component: _cart_order_results_order_results_component__WEBPACK_IMPORTED_MODULE_13__["OrderResultsComponent"]
                    }
                ]
            },
            {
                path: 'error',
                component: _shared_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
                children: [
                    {
                        path: ':id',
                        component: _shared_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"]
                    }
                ]
            }
        ]
    },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(dashboardRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]
            ]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../cart/cart.module */ "./src/app/cart/cart.module.ts");
/* harmony import */ var _userprofile_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../userprofile/profile.module */ "./src/app/userprofile/profile.module.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-dashboard/product-dashboard.component */ "./src/app/dashboard/product-dashboard/product-dashboard.component.ts");
/* harmony import */ var _product_grid_product_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-grid/product-grid.component */ "./src/app/dashboard/product-grid/product-grid.component.ts");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-item/product-item.component */ "./src/app/dashboard/product-item/product-item.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/dashboard/filters/filters.component.ts");
/* harmony import */ var _filter_products_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filter-products.pipe */ "./src/app/dashboard/filter-products.pipe.ts");
/* harmony import */ var _pdp_pdp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pdp/pdp.component */ "./src/app/dashboard/pdp/pdp.component.ts");
/* harmony import */ var _product_search_product_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-search/product-search.component */ "./src/app/dashboard/product-search/product-search.component.ts");















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _product_dashboard_product_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["ProductDashboardComponent"],
                _product_grid_product_grid_component__WEBPACK_IMPORTED_MODULE_9__["ProductGridComponent"],
                _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_10__["ProductItemComponent"],
                _filters_filters_component__WEBPACK_IMPORTED_MODULE_11__["FiltersComponent"],
                _filter_products_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterProductsPipe"],
                _pdp_pdp_component__WEBPACK_IMPORTED_MODULE_13__["PdpComponent"],
                _product_search_product_search_component__WEBPACK_IMPORTED_MODULE_14__["ProductSearchComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"],
                _userprofile_profile_module__WEBPACK_IMPORTED_MODULE_4__["ProfileModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _cart_cart_module__WEBPACK_IMPORTED_MODULE_3__["CartModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            exports: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/filter-products.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/filter-products.pipe.ts ***!
  \***************************************************/
/*! exports provided: FilterProductsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProductsPipe", function() { return FilterProductsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterProductsPipe = /** @class */ (function () {
    function FilterProductsPipe() {
    }
    FilterProductsPipe.prototype.transform = function (value, category) {
        var filteredProducts = [];
        if (value) {
            value.forEach(function (item) {
                if (item.productCategories.includes(category)) {
                    filteredProducts.push(item);
                }
            });
        }
        return filteredProducts;
    };
    FilterProductsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterProducts'
        })
    ], FilterProductsPipe);
    return FilterProductsPipe;
}());



/***/ }),

/***/ "./src/app/dashboard/filters/filters.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/filters/filters.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"productsFilter\">\n    <li *ngFor=\"let filter of activeFilter\"  [ngClass]=\"activeCategory == filter ? 'activeCat' : ''\" (click)=\"filterProductsByCategory(filter)\">\n        {{ filter }}\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/dashboard/filters/filters.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/filters/filters.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productsFilter {\n  text-decoration: none;\n  margin-top: 20px; }\n  .productsFilter li {\n    display: inline-block;\n    padding-left: 10px;\n    padding-right: 10px;\n    border: 1px solid lightgrey;\n    background: #dce5e9;\n    opacity: 0.7;\n    text-align: center; }\n  .productsFilter li:hover {\n      cursor: pointer;\n      opacity: 1;\n      background: #fa8080;\n      color: white; }\n  .productsFilter .activeCat {\n    opacity: 1;\n    background: #fa8080;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2ZpbHRlcnMvRDpcXEFOR1VMQVItTUFYSU1JTExJQU4tQ09VUlNFXFxmb29kLWRlbGl2ZXJ5L3NyY1xcYXBwXFxkYXNoYm9hcmRcXGZpbHRlcnNcXGZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7RUFGcEI7SUFLUSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQThCO0lBQzlCLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQVgxQjtNQWNZLGVBQWU7TUFDZixVQUFVO01BQ1YsbUJBQThCO01BQzlCLFlBQVksRUFBQTtFQWpCeEI7SUF1QlEsVUFBVTtJQUNWLG1CQUE4QjtJQUM5QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RzRmlsdGVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDIyMCwgMjI5LCAyMzMpO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDEyOCwgMTI4KTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlQ2F0IHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDEyOCwgMTI4KTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7ICAgIFxyXG4gICAgfVxyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/filters/filters.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/filters/filters.component.ts ***!
  \********************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(activeRoute) {
        this.activeRoute = activeRoute;
        this.activeCategory = 'All';
        this.activeCategorySelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeFilterSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.filters = {
            'pizza': ['All', 'Vegetarian', 'With Meat', 'With seafood', 'With Cheese'],
            'drinks': ['All', 'Alcoholic', 'Non alcoholic', 'Lemonades'],
            'salads': ['All', 'Vegetarian', 'Seafood', 'With Meat']
        };
    }
    FiltersComponent.prototype.ngOnInit = function () {
        this.subscribeToActiveRoute();
    };
    FiltersComponent.prototype.subscribeToActiveRoute = function () {
        var _this = this;
        this.activeFilterSubscription = this.activeRoute.children[0].params
            .subscribe(function (res) {
            _this.activeCategory = res["cat"];
            _this.activeFilter = _this.filters[_this.activeCategory];
            _this.activeCategory = 'All';
        });
    };
    /**
     * Set active category
     * @param {String} product's category
     */
    FiltersComponent.prototype.filterProductsByCategory = function (filter) {
        this.activeCategory = filter;
        this.activeCategorySelected.emit(filter);
    };
    FiltersComponent.prototype.ngOnDestroy = function () {
        this.activeFilterSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltersComponent.prototype, "activeCategorySelected", void 0);
    FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/dashboard/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/dashboard/filters/filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/pdp/pdp.component.html":
/*!**************************************************!*\
  !*** ./src/app/dashboard/pdp/pdp.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"productDetailWrapper\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"logoWrapper\">\r\n          <img [src]=\"productDetails.imgPath\" [alt]=\"productDetails.productTitle\">\r\n        </div></div>\r\n      <div class=\"col-md-9\">\r\n          <div class=\"productInfoWrapper\">\r\n            <div class=\"productTitle\">\r\n               {{ productDetails.productTitle  }}\r\n            </div>\r\n\r\n            <div class=\"productPrice\">\r\n                {{ productDetails.productPrice }} $\r\n            </div>\r\n\r\n            <div class=\"productQuantityWrapper\">\r\n              <button id=\"decreaseProductQuantity\"\r\n                      (click)=\"decreaseProdCounterOnOne()\">-</button>\r\n              <input type=\"text\"\r\n                     class=\"productQuantity\"\r\n                     disabled\r\n                     value=\"1\"\r\n                     [(ngModel)]=\"productQuantity\">\r\n              <button id=\"increaseProdQuantity\"\r\n                      (click)=\"increaseProductCounterOnOne()\">+</button>\r\n            </div>\r\n\r\n            <div class=\"addToCartWrapper\">\r\n              <button class=\"btn btn-success\" (click)=\"addToCart()\">Add To Cart</button>\r\n            </div>\r\n\r\n            <div class=\"sizeAndWeightWrapper\">\r\n                {{ productDetails.productSize }}sm {{ productDetails.productWeight }}gram\r\n            </div>\r\n  \r\n          </div>\r\n    \r\n      </div>\r\n\r\n       \r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"ingredientsWrapper\">\r\n          <h4>Ingredients:</h4>\r\n          <ul>\r\n            <li *ngFor=\"let ingredient of ingredients\">\r\n              {{ ingredient }}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-9\">\r\n        <div class=\"productRecipe\">\r\n          <h4>Description</h4>\r\n          {{  productDetails.productsDetails }}\r\n        </div>\r\n        \r\n      </div>\r\n    </div> \r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/pdp/pdp.component.scss":
/*!**************************************************!*\
  !*** ./src/app/dashboard/pdp/pdp.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#productDetailWrapper {\n  width: 100%;\n  min-height: 700px;\n  height: auto;\n  margin-top: 25px;\n  position: relative; }\n  #productDetailWrapper .logoWrapper {\n    width: 280px;\n    height: 250px;\n    position: relative;\n    left: 2.5%;\n    top: 2%;\n    display: inline-block; }\n  #productDetailWrapper .logoWrapper img {\n      width: 280px;\n      height: 250px; }\n  #productDetailWrapper .productInfoWrapper {\n    margin-left: 50px; }\n  #productDetailWrapper .productInfoWrapper .productTitle {\n      display: inline-block;\n      width: 50%;\n      font-weight: 600;\n      font-size: 32px; }\n  #productDetailWrapper .productInfoWrapper .productPrice {\n      margin-top: 20px;\n      font-weight: 600;\n      font-size: 30px;\n      color: #e91919; }\n  #productDetailWrapper .productInfoWrapper .productQuantityWrapper {\n      display: inline-block;\n      height: 30px; }\n  #productDetailWrapper .productInfoWrapper .productQuantityWrapper .productQuantity {\n        width: 45px;\n        text-align: center;\n        font-weight: 600; }\n  #productDetailWrapper .productInfoWrapper .addToCartWrapper {\n      margin-top: 25px; }\n  #productDetailWrapper .productInfoWrapper .sizeAndWeightWrapper {\n      margin-top: 20px;\n      font-weight: 600;\n      font-size: 18px; }\n  #productDetailWrapper .ingredientsWrapper {\n    margin-top: 25px;\n    margin-left: 10px; }\n  #productDetailWrapper .productRecipe {\n    margin-top: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3BkcC9EOlxcQU5HVUxBUi1NQVhJTUlMTElBTi1DT1VSU0VcXGZvb2QtZGVsaXZlcnkvc3JjXFxhcHBcXGRhc2hib2FyZFxccGRwXFxwZHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7RUFMdEI7SUFTUSxZQUFZO0lBQ1osYUFBYTtJQUViLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLHFCQUFxQixFQUFBO0VBZjdCO01Ba0JZLFlBQVk7TUFDWixhQUFhLEVBQUE7RUFuQnpCO0lBMEJRLGlCQUFpQixFQUFBO0VBMUJ6QjtNQTZCWSxxQkFBcUI7TUFDckIsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixlQUFlLEVBQUE7RUFoQzNCO01BcUNZLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGNBQXVCLEVBQUE7RUF4Q25DO01BNkNZLHFCQUFxQjtNQUVyQixZQUFZLEVBQUE7RUEvQ3hCO1FBa0RnQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGdCQUFnQixFQUFBO0VBcERoQztNQTBEWSxnQkFBZ0IsRUFBQTtFQTFENUI7TUErRFksZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixlQUFlLEVBQUE7RUFqRTNCO0lBeUVRLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtFQTFFekI7SUErRVEsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcGRwL3BkcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9kdWN0RGV0YWlsV3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG5cclxuICAgIC5sb2dvV3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMi41JTtcclxuICAgICAgICB0b3A6IDIlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucHJvZHVjdEluZm9XcmFwcGVyIHtcclxuICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuXHJcbiAgICAgICAgLnByb2R1Y3RUaXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0UHJpY2Uge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjMzLCAyNSwgMjUpO1xyXG4gICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnByb2R1Y3RRdWFudGl0eVdyYXBwZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgICAgICAucHJvZHVjdFF1YW50aXR5IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGRUb0NhcnRXcmFwcGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l6ZUFuZFdlaWdodFdyYXBwZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZ3JlZGllbnRzV3JhcHBlciB7IFxyXG4gICAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3RSZWNpcGUge1xyXG4gICAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/pdp/pdp.component.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/pdp/pdp.component.ts ***!
  \************************************************/
/*! exports provided: PdpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdpComponent", function() { return PdpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/products.service */ "./src/app/shared/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_product_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/product-cart.service */ "./src/app/shared/services/product-cart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var PdpComponent = /** @class */ (function () {
    function PdpComponent(activeRoute, productService, productCartService) {
        this.activeRoute = activeRoute;
        this.productService = productService;
        this.productCartService = productCartService;
        this.productQuantity = 1;
        this.activeRouteSub = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
    }
    PdpComponent.prototype.ngOnInit = function () {
        this.productDetails = this.productService.getSelectedProduct();
        this.getIngredients();
        this.subscribeToUrlChanges();
        document.getElementById('rightSection').scrollTo(0, 0);
    };
    PdpComponent.prototype.subscribeToUrlChanges = function () {
        this.activeRouteSub = this.activeRoute.children[0].params
            .subscribe(function (res) {
            console.log(res);
        });
    };
    PdpComponent.prototype.addToCart = function () {
        console.log(this.productDetails);
        this.productDetails.productQuantity = this.productQuantity;
        this.productCartService.addProducts(this.productDetails);
        this.productQuantity = 1;
    };
    PdpComponent.prototype.getIngredients = function () {
        this.ingredients = this.productDetails.productDescription.split(', ');
    };
    PdpComponent.prototype.decreaseProdCounterOnOne = function () {
        if (this.productQuantity != 1) {
            --this.productQuantity;
        }
        this.productDetails.productQuantity = this.productQuantity;
    };
    PdpComponent.prototype.increaseProductCounterOnOne = function () {
        ++this.productQuantity;
        this.productDetails.productQuantity = this.productQuantity;
    };
    PdpComponent.prototype.ngOnDestroy = function () {
        this.activeRouteSub.unsubscribe();
    };
    PdpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-pdp',
            template: __webpack_require__(/*! ./pdp.component.html */ "./src/app/dashboard/pdp/pdp.component.html"),
            styles: [__webpack_require__(/*! ./pdp.component.scss */ "./src/app/dashboard/pdp/pdp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            src_app_shared_services_product_cart_service__WEBPACK_IMPORTED_MODULE_4__["ProductCart"]])
    ], PdpComponent);
    return PdpComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/product-dashboard/product-dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/product-dashboard/product-dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard\" >\r\n  <ng-container *ngIf=\"isModalEnabled\" >\r\n      <div id=\"edit-modal-shadow\">\r\n      </div>\r\n  </ng-container>\r\n\r\n  <app-loading></app-loading>\r\n  <div id=\"leftSection\">\r\n      <app-side-bar></app-side-bar>\r\n  </div>\r\n  \r\n  <div id=\"rightSection\" (scroll)=\"onDashboardScroll($event)\">\r\n    <div id=\"wrapper\">\r\n      <app-header></app-header>\r\n      <router-outlet></router-outlet>\r\n      <app-footer></app-footer>\r\n    </div>\r\n    \r\n  </div> \r\n  \r\n\r\n  \r\n  \r\n \r\n</div>\r\n\r\n \r\n"

/***/ }),

/***/ "./src/app/dashboard/product-dashboard/product-dashboard.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/product-dashboard/product-dashboard.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboard {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n  #dashboard #edit-modal-shadow {\n    width: 100%;\n    position: absolute;\n    z-index: 10;\n    background: rgba(94, 84, 84, 0.596);\n    height: 100%; }\n  #leftSection {\n  width: 15%;\n  position: relative;\n  background-color: black;\n  height: 100%; }\n  #rightSection {\n  width: 85%;\n  height: 100%;\n  margin: 0 auto;\n  background-color: white;\n  position: absolute;\n  left: 15%;\n  overflow-x: hidden;\n  top: 0; }\n  #rightSection #wrapper {\n    position: relative;\n    min-height: 100%;\n    padding-bottom: 350px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3QtZGFzaGJvYXJkL0Q6XFxBTkdVTEFSLU1BWElNSUxMSUFOLUNPVVJTRVxcZm9vZC1kZWxpdmVyeS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxwcm9kdWN0LWRhc2hib2FyZFxccHJvZHVjdC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0VBSHRCO0lBTVEsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLFlBQVksRUFBQTtFQUlwQjtFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTtFQUdoQjtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUdkLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixNQUFNLEVBQUE7RUFWVjtJQWFRLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcHJvZHVjdC1kYXNoYm9hcmQvcHJvZHVjdC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGFzaGJvYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICNlZGl0LW1vZGFsLXNoYWRvdyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoOTQsIDg0LCA4NCwgMC41OTYpO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuI2xlZnRTZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNyaWdodFNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgIFxyXG4gICAvLyBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTUlO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdG9wOiAwOyBcclxuXHJcbiAgICAjd3JhcHBlcnsgXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDM1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/product-dashboard/product-dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/product-dashboard/product-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDashboardComponent", function() { return ProductDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_product_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product-cart.service */ "./src/app/shared/services/product-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/products.service */ "./src/app/shared/services/products.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/edit-modal.service */ "./src/app/shared/services/edit-modal.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var ProductDashboardComponent = /** @class */ (function () {
    function ProductDashboardComponent(productsService, route, editModal, cartService, changeDetector) {
        this.productsService = productsService;
        this.route = route;
        this.editModal = editModal;
        this.cartService = cartService;
        this.changeDetector = changeDetector;
        this.isModalEnabled = false;
        this.editMode = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ProductDashboardComponent.prototype.ngOnInit = function () {
        this.subscribeToModalToggling();
        this.cartService.checkCartExistenseByUserId();
        this.cartService.getCartFromServer();
    };
    ProductDashboardComponent.prototype.ngOnDestroy = function () {
        this.editMode.unsubscribe();
    };
    ProductDashboardComponent.prototype.subscribeToModalToggling = function () {
        var _this = this;
        this.editMode = this.editModal.onEditChange.subscribe(function (isEditModalEnabled) {
            _this.isModalEnabled = isEditModalEnabled;
            _this.changeDetector.detectChanges();
        });
    };
    ProductDashboardComponent.prototype.onDashboardScroll = function (event) {
        var _this = this;
        if (event.target.offsetHeight + event.target.scrollTop == event.target.scrollHeight) {
            this.route.children[0].children[0].params.subscribe(function (category) {
                if (category["cat"] == "pizza" ||
                    category["cat"] == "drinks" ||
                    category["cat"] == "salads") {
                    _this.productsService.newProducts.next(true);
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"])('scroll', ['$event.target']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ProductDashboardComponent.prototype, "onDashboardScroll", null);
    ProductDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-product-dashboard',
            template: __webpack_require__(/*! ./product-dashboard.component.html */ "./src/app/dashboard/product-dashboard/product-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./product-dashboard.component.scss */ "./src/app/dashboard/product-dashboard/product-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_5__["EditModalService"],
            _shared_services_product_cart_service__WEBPACK_IMPORTED_MODULE_1__["ProductCart"],
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]])
    ], ProductDashboardComponent);
    return ProductDashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/product-grid/product-grid.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/product-grid/product-grid.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"products-grid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <app-filters (activeCategorySelected)=\"setFilterCategory($event)\" *ngIf=\"isSearchFailure && onlineMode\"></app-filters>\r\n    </div>\r\n    <div class=\"col-md-6\" *ngIf=\"onlineMode\">\r\n      <app-product-search (searchDone)=\"setProducts($event)\" ></app-product-search>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n    <div class=\"row\" *ngIf=\"onlineMode\">\r\n       \r\n          <div class=\"col-md-4 col-sm-6\" *ngFor=\"let product of products | filterProducts:activeFilter\">\r\n              <app-product-item [productData]='product'></app-product-item>\r\n          </div>\r\n          \r\n          <div *ngIf=\"!isSearchFailure\" class=\"noProducts\"> \r\n            <img src=\"../../../assets/Error_Empty states.png\" style=\"width: 42%;\r\n            min-width: 450px; margin-top: -59px;\">\r\n          </div>\r\n          \r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"!onlineMode\">\r\n      <img src=\"../../../assets/no-internet-connection.png\" class=\"networkConnectionError\">\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/product-grid/product-grid.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/product-grid/product-grid.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#products-grid {\n  padding-left: 7px;\n  padding-bottom: 20px; }\n\n.noProducts {\n  color: #acabab;\n  text-align: center;\n  margin: 0 auto;\n  top: 16%;\n  margin-top: 15%; }\n\n.networkConnectionError {\n  position: relative;\n  margin: 0 auto;\n  width: 40%;\n  margin-top: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3QtZ3JpZC9EOlxcQU5HVUxBUi1NQVhJTUlMTElBTi1DT1VSU0VcXGZvb2QtZGVsaXZlcnkvc3JjXFxhcHBcXGRhc2hib2FyZFxccHJvZHVjdC1ncmlkXFxwcm9kdWN0LWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksY0FBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9kdWN0LWdyaWQvcHJvZHVjdC1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2R1Y3RzLWdyaWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm5vUHJvZHVjdHMge1xyXG4gICAgY29sb3I6IHJnYigxNzIsIDE3MSwgMTcxKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdG9wOiAxNiU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuXHJcbi5uZXR3b3JrQ29ubmVjdGlvbkVycm9yIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvOyBcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/product-grid/product-grid.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/product-grid/product-grid.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductGridComponent", function() { return ProductGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/loading.service */ "./src/app/shared/services/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/products.service */ "./src/app/shared/services/products.service.ts");
/* harmony import */ var src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/edit-modal.service */ "./src/app/shared/services/edit-modal.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var ProductGridComponent = /** @class */ (function () {
    function ProductGridComponent(productsService, route, router, loadingService, editModal) {
        this.productsService = productsService;
        this.route = route;
        this.router = router;
        this.loadingService = loadingService;
        this.editModal = editModal;
        //| string;
        this.isSearchFailure = true;
        this.activeCategory = "pizza";
        this.activeFilter = "All";
        this.onlineMode = true;
        this.searchAvailability = true;
        this.urlParSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.productSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.productsByCategorySubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
    }
    ProductGridComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.checkSearchAvailability();
        this.getProductByCategory();
        this.subscribeToProductLoadOnScrollDown();
    };
    ProductGridComponent.prototype.ngOnDestroy = function () {
        this.urlParSubscription.unsubscribe();
        this.productSubscription.unsubscribe();
        this.productsByCategorySubscription.unsubscribe();
    };
    ProductGridComponent.prototype.subscribeToProductLoadOnScrollDown = function () {
        var _this = this;
        this.productsService.newProducts.subscribe(function (isEndOfPage) {
            //fake implementation, using mock
            //new extend existing logic in product service
            _this.products = _this.products.concat(_this.products);
        });
    };
    ProductGridComponent.prototype.checkSearchAvailability = function () {
        var localProductList = localStorage.getItem("productList");
        if (localProductList) {
            this.searchAvailability =
                JSON.parse(localStorage.getItem("productList")).products.length > 0;
        }
    };
    ProductGridComponent.prototype.getProductByCategory = function () {
        var _this = this;
        this.urlParSubscription = this.route.firstChild.params.subscribe(function (par) {
            _this.activeCategory = par["cat"];
            _this.isSearchFailure = true;
            _this.loadingService.toggleLoading();
            _this.editModal.toggleEditMode();
            _this.getProductByActiveCategory();
            document.getElementById('rightSection').scrollTo(0, 0);
        });
    };
    ProductGridComponent.prototype.getProductByActiveCategory = function () {
        this.productsByCategorySubscription = this.productsService
            .getProductsByCategory(this.activeCategory)
            .subscribe(this.onGetProductByActiveCategorySuccess.bind(this), this.onGetProductError.bind(this));
    };
    ProductGridComponent.prototype.onGetProductByActiveCategorySuccess = function (productList) {
        this.onlineMode = productList.length > 0 ? true : false;
        this.products = productList;
        this.activeFilter = "All";
        this.loadingService.toggleLoading();
        this.editModal.toggleEditMode();
    };
    ProductGridComponent.prototype.getProducts = function () {
        this.loadingService.toggleLoading();
        this.editModal.toggleEditMode();
        this.productSubscription = this.productsService
            .getProducts()
            .subscribe(this.onGetProductsSuccess.bind(this), this.onGetProductError.bind(this));
    };
    ProductGridComponent.prototype.onGetProductsSuccess = function (products) {
        this.products = products;
        this.onlineMode = true;
        this.loadingService.toggleLoading();
        this.editModal.toggleEditMode();
    };
    ProductGridComponent.prototype.onGetProductError = function (err) {
        this.onlineMode = false;
        this.loadingService.toggleLoading();
        this.editModal.toggleEditMode();
    };
    ProductGridComponent.prototype.setFilterCategory = function (cat) {
        this.activeFilter = cat;
    };
    ProductGridComponent.prototype.setProducts = function (products) {
        if (products.length > 0 && products != "All") {
            this.handleAllSearchRes(products);
        }
        else if (products == "All") {
            this.handleOfflineAndOnlineSuccessSearchRes();
        }
        else {
            this.handleFailureSearchRes();
        }
    };
    ProductGridComponent.prototype.handleAllSearchRes = function (products) {
        this.products = products;
        this.isSearchFailure = true;
    };
    ProductGridComponent.prototype.handleOfflineAndOnlineSuccessSearchRes = function () {
        if (!navigator.onLine) {
            this.getProducts();
        }
        else {
            this.loadingService.toggleLoading();
            this.editModal.toggleEditMode();
            this.getProductByActiveCategory();
        }
        this.isSearchFailure = true;
    };
    ProductGridComponent.prototype.handleFailureSearchRes = function () {
        this.products = [];
        this.isSearchFailure = false;
    };
    ProductGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-product-grid",
            template: __webpack_require__(/*! ./product-grid.component.html */ "./src/app/dashboard/product-grid/product-grid.component.html"),
            styles: [__webpack_require__(/*! ./product-grid.component.scss */ "./src/app/dashboard/product-grid/product-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"],
            src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_5__["EditModalService"]])
    ], ProductGridComponent);
    return ProductGridComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/product-item/product-item.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/product-item/product-item.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product\">\r\n  <div class=\"imgWrapper\" (click)=\"navigateToPdp()\">\r\n    <img [src]= 'productData.imgPath' alt=\"pizza1\">\r\n  </div>\r\n\r\n  <div class=\"productDescription\">\r\n    <div class=\"productInfoAndPrice\">\r\n      <div class=\"productWeight\">{{ productData.productWeight }} gram {{ productData.productSize }} sm</div>\r\n      <div class=\"prPrice\">{{ productData.productPrice }} $</div>\r\n    </div>\r\n  \r\n    <div class=\"productTitle\"><h4>{{ productData.productTitle }}</h4></div>\r\n    <div class=\"ingredients\">{{ productData.productDescription }}</div>\r\n  </div>\r\n\r\n  <div class=\"addToCartWrapper\" [ngStyle]=\"{'background-color': success ? 'green' : 'red'}\">\r\n    <div class=\"productQuantity\">\r\n      <button id=\"decreaseProdQuantity\"\r\n              (click)=\"decreaseProdCounterOnOne()\">-</button>\r\n      <input type=\"text\"\r\n             class=\"prodQuantity\"\r\n             disabled\r\n             value=\"1\"\r\n             [(ngModel)]=\"productQuantity\">\r\n      <button id=\"increaseProdQuantity\"\r\n              (click)=\"increaseProdCounterOnOne()\">+</button>\r\n    </div>\r\n\r\n    <div class=\"addToCart\" (click)=\"addProductToCart()\">\r\n      {{ success ? 'Product is added!': 'Add To Cart'}}\r\n    </div>\r\n\r\n    <div class=\"productPrice\" *ngIf=\"!success\">\r\n      {{ productData.productPrice }} $\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/product-item/product-item.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/product-item/product-item.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product {\n  width: 90%;\n  height: 370px;\n  overflow: hidden;\n  text-align: center;\n  margin-top: 20px;\n  position: relative; }\n\n.product:hover .imgWrapper {\n  cursor: pointer;\n  transition: all 0.25s ease-in-out .05s;\n  transform: scale(1.1);\n  opacity: 0.85; }\n\n.imgWrapper img {\n  width: 100%;\n  height: 270px;\n  overflow: hidden; }\n\n.product > .productDescription {\n  background: black;\n  width: 100%;\n  height: 30%;\n  position: absolute;\n  color: white; }\n\n.addToCartWrapper {\n  background: #f74168;\n  visibility: hidden;\n  text-align: center;\n  position: absolute;\n  height: 15%;\n  line-height: 40px;\n  bottom: 0;\n  width: 100%;\n  opacity: 0; }\n\n.product:hover .addToCartWrapper {\n  visibility: visible;\n  transition: opacity .15s ease-in .05s;\n  opacity: 1;\n  cursor: pointer; }\n\n.productQuantity {\n  width: 33%;\n  position: relative;\n  top: 14%;\n  height: 35px;\n  float: left;\n  color: white; }\n\n.productQuantity .prodQuantity {\n    width: 35px;\n    height: 35px;\n    position: relative;\n    top: -1px;\n    background: black;\n    color: white;\n    text-align: center;\n    outline-offset: 0;\n    border: 0;\n    font-weight: 600; }\n\n.productQuantity #increaseProdQuantity,\n  .productQuantity #decreaseProdQuantity {\n    height: 35px;\n    text-align: center;\n    line-height: 25px;\n    font-weight: 600;\n    background: transparent;\n    border: 0;\n    outline: 0;\n    font-size: 22px; }\n\n.productQuantity #increaseProdQuantity:hover,\n    .productQuantity #decreaseProdQuantity:hover {\n      color: white; }\n\n.addToCart {\n  float: left;\n  width: 40%;\n  height: 47px;\n  line-height: 47px;\n  color: white;\n  transition: margin-top .5s ease-in .3s; }\n\n.productPrice {\n  float: left;\n  width: 25%;\n  height: 100%;\n  color: white;\n  height: 47px;\n  line-height: 47px;\n  font-weight: 600; }\n\n.productInfoAndPrice {\n  width: 100%;\n  height: 25px;\n  line-height: 25px;\n  position: relative; }\n\n.productWeight {\n  position: absolute;\n  padding-left: 1.5%;\n  width: 50%; }\n\n.prPrice {\n  position: absolute;\n  right: 0;\n  padding-right: 1.5%;\n  width: 50%;\n  color: #e92121;\n  font-size: 18px;\n  font-weight: 600;\n  text-align: end; }\n\n.productTitle {\n  width: 100%;\n  text-align: left;\n  position: relative;\n  left: 10%;\n  width: 90%;\n  height: 30px; }\n\n.ingredients {\n  position: relative;\n  left: 10%;\n  width: 90%;\n  height: 45px;\n  line-height: 18px;\n  font-size: 11px;\n  text-align: start;\n  word-wrap: break-word; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3QtaXRlbS9EOlxcQU5HVUxBUi1NQVhJTUlMTElBTi1DT1VSU0VcXGZvb2QtZGVsaXZlcnkvc3JjXFxhcHBcXGRhc2hib2FyZFxccHJvZHVjdC1pdGVtXFxwcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMscUJBQXFCO0VBQ3JCLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksbUJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUVaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBUGhCO0lBVVEsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsZ0JBQWdCLEVBQUE7O0FBbkJ4Qjs7SUF3QlEsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWUsRUFBQTs7QUEvQnZCOztNQWtDWSxZQUFZLEVBQUE7O0FBT3hCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQ0FBc0MsRUFBQTs7QUFHMUM7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixjQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDM3MHB4OyBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgIFxyXG59XHJcblxyXG4ucHJvZHVjdDpob3ZlciAuaW1nV3JhcHBlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQgLjA1cztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbn1cclxuXHJcbi5pbWdXcmFwcGVyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiBcclxuLnByb2R1Y3QgPi5wcm9kdWN0RGVzY3JpcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWRkVG9DYXJ0V3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCA2NSwgMTA0KTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxNSU7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnByb2R1Y3Q6aG92ZXIgLmFkZFRvQ2FydFdyYXBwZXIge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBlYXNlLWluIC4wNXM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdFF1YW50aXR5IHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE0JTsgXHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAvL2JvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgLnByb2RRdWFudGl0eSB7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0xcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBvdXRsaW5lLW9mZnNldDogMDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAjaW5jcmVhc2VQcm9kUXVhbnRpdHksXHJcbiAgICAjZGVjcmVhc2VQcm9kUXVhbnRpdHkge1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5hZGRUb0NhcnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ3cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIC41cyBlYXNlLWluIC4zcztcclxufVxyXG5cclxuLnByb2R1Y3RQcmljZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0SW5mb0FuZFByaWNlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9kdWN0V2VpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMS41JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5wclByaWNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBjb2xvcjogcmdiKDIzMywgMzMsIDMzKTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0VGl0bGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmluZ3JlZGllbnRzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/product-item/product-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/product-item/product-item.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/products.service */ "./src/app/shared/services/products.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/product.model */ "./src/app/shared/product.model.ts");
/* harmony import */ var src_app_shared_services_product_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/product-cart.service */ "./src/app/shared/services/product-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ProductItemComponent = /** @class */ (function () {
    function ProductItemComponent(productCartService, router, productService) {
        this.productCartService = productCartService;
        this.router = router;
        this.productService = productService;
        this.success = false;
        this.productQuantity = 1;
    }
    ProductItemComponent.prototype.ngOnInit = function () { };
    /**
     * Add product to cart
     */
    ProductItemComponent.prototype.addProductToCart = function () {
        var _this = this;
        this.success = true;
        this.productData.productQuantity = this.productQuantity;
        this.productCartService.addProducts(this.productData);
        setTimeout(function () {
            _this.success = false;
        }, 1000);
        this.productQuantity = 1;
    };
    ProductItemComponent.prototype.navigateToPdp = function () {
        this.productService.setSelectedProduct(this.productData);
        this.router.navigate(['dashboard/product-details', this.productData.id]);
    };
    ProductItemComponent.prototype.increaseProdCounterOnOne = function () {
        ++this.productQuantity;
        this.productData.productQuantity = this.productQuantity;
    };
    ProductItemComponent.prototype.decreaseProdCounterOnOne = function () {
        if (this.productQuantity != 1) {
            --this.productQuantity;
        }
        this.productData.productQuantity = this.productQuantity;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_product_model__WEBPACK_IMPORTED_MODULE_3__["Product"])
    ], ProductItemComponent.prototype, "productData", void 0);
    ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-product-item',
            template: __webpack_require__(/*! ./product-item.component.html */ "./src/app/dashboard/product-item/product-item.component.html"),
            styles: [__webpack_require__(/*! ./product-item.component.scss */ "./src/app/dashboard/product-item/product-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_product_cart_service__WEBPACK_IMPORTED_MODULE_4__["ProductCart"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductItemComponent);
    return ProductItemComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/product-search/product-search.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/product-search/product-search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"product-search\">\r\n  <div id=\"loopIconWrapper\">\r\n    <img src=\"../../../assets/loop.png\" id=\"searchIcon\">\r\n  </div>\r\n  <input type=\"text\"\r\n         id=\"searchQuery\"\r\n         #query\r\n         (keydown.enter)=\"searchProducts(query)\"\r\n         (keyup)=\"searchProducts(query)\">\r\n   <button class=\"btn btn-success\"\r\n           id=\"search\"\r\n           (click)=\"searchProducts(query)\"\r\n           >Search</button>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/product-search/product-search.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/product-search/product-search.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#product-search {\n  width: 250px;\n  height: 35px;\n  position: absolute;\n  right: 18.5%;\n  top: 8%;\n  display: inline-block; }\n  #product-search #searchQuery {\n    width: 250px;\n    height: 35px;\n    padding-left: 35px; }\n  #product-search #loopIconWrapper {\n    width: 15px;\n    height: 15px;\n    position: relative; }\n  #product-search #loopIconWrapper #searchIcon {\n      width: 15px;\n      height: 15px;\n      position: absolute;\n      top: 25px;\n      left: 10px; }\n  #product-search #search {\n    width: 75px;\n    height: 35px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3Qtc2VhcmNoL0Q6XFxBTkdVTEFSLU1BWElNSUxMSUFOLUNPVVJTRVxcZm9vZC1kZWxpdmVyeS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxwcm9kdWN0LXNlYXJjaFxccHJvZHVjdC1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osT0FBTztFQUNQLHFCQUFxQixFQUFBO0VBTnpCO0lBU1EsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQVgxQjtJQWVRLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUFqQjFCO01Bb0JZLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxVQUFVLEVBQUE7RUF4QnRCO0lBOEJRLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9kdWN0LXNlYXJjaC9wcm9kdWN0LXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9kdWN0LXNlYXJjaCB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTguNSU7XHJcbiAgICB0b3A6IDglO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICNzZWFyY2hRdWVyeXtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzVweDsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgI2xvb3BJY29uV3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgI3NlYXJjaEljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMjVweDtcclxuICAgICAgICAgICAgbGVmdDogMTBweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNzZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/product-search/product-search.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/product-search/product-search.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSearchComponent", function() { return ProductSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/products.service */ "./src/app/shared/services/products.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ProductSearchComponent = /** @class */ (function () {
    function ProductSearchComponent(productService) {
        this.productService = productService;
        this.searchDone = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.minQueryLength = 3;
    }
    ProductSearchComponent.prototype.ngOnInit = function () { };
    ProductSearchComponent.prototype.searchProducts = function (requestedQuery) {
        var query = (requestedQuery.value).trim().replace(/(\s\s\s*)/g, ' ');
        this.results = [];
        if (query.length >= this.minQueryLength) {
            this.productService.searchProducts(query)
                .subscribe(this.onGetSearchResultsSuccess.bind(this), this.onGetSearchResultsFailure.bind(this));
        }
        else if (query.length == 0) {
            this.searchDone.emit('All');
        }
    };
    ProductSearchComponent.prototype.onGetSearchResultsSuccess = function (searchResults) {
        this.results = searchResults;
        this.searchDone.emit(this.results);
    };
    ProductSearchComponent.prototype.onGetSearchResultsFailure = function (searchError) {
        console.log(searchError);
        this.searchDone.emit(searchError);
    };
    ProductSearchComponent.prototype.getFormattedResults = function (searchResults) {
        var results = [];
        searchResults.forEach(function (searchResByProdCategory) {
            searchResByProdCategory.forEach(function (item) {
                results.push(item);
            });
        });
        return results;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductSearchComponent.prototype, "searchDone", void 0);
    ProductSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-product-search',
            template: __webpack_require__(/*! ./product-search.component.html */ "./src/app/dashboard/product-search/product-search.component.html"),
            styles: [__webpack_require__(/*! ./product-search.component.scss */ "./src/app/dashboard/product-search/product-search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/confirmation-popup/confirmation-popup.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/confirmation-popup/confirmation-popup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"confirmationPopUp\">\r\n  <div id=\"closePopImgWrapper\" (click)=\"closePopUp()\"><b>X</b></div>\r\n  <div id=\"confirmationMsg\">\r\n    Are you sure you want to make an order?\r\n  </div>\r\n  <div id=\"popUpControls\">\r\n    <button id=\"confirm\" (click)=\"confirmAnOrder()\">YES</button>\r\n    <button id=\"cancel\" (click)=\"closePopUp()\">NO</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/confirmation-popup/confirmation-popup.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/confirmation-popup/confirmation-popup.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#confirmationPopUp {\n  position: fixed;\n  background: white;\n  z-index: 20;\n  min-height: 200px;\n  height: auto;\n  min-width: 300px;\n  width: 40%;\n  margin: 0;\n  top: 47%;\n  left: 46.5%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%); }\n  #confirmationPopUp #closePopImgWrapper {\n    position: absolute;\n    right: 15px;\n    top: 5px; }\n  #confirmationPopUp #closePopImgWrapper:hover {\n      cursor: pointer; }\n  #confirmationPopUp #confirmationMsg {\n    text-align: center;\n    margin-top: 80px;\n    font-size: 18px;\n    color: #584f4f; }\n  #confirmationPopUp #popUpControls {\n    width: 100%;\n    height: 45px;\n    position: absolute;\n    bottom: 0; }\n  #confirmationPopUp #popUpControls #confirm, #confirmationPopUp #popUpControls #cancel {\n      width: 50%;\n      border: none;\n      outline: none;\n      color: white;\n      height: 100%; }\n  #confirmationPopUp #popUpControls #confirm {\n      background: #d16060; }\n  #confirmationPopUp #popUpControls #confirm:hover {\n        background: #a83e3e; }\n  #confirmationPopUp #popUpControls #cancel {\n      background: #8d8989; }\n  #confirmationPopUp #popUpControls #cancel:hover {\n        background: #615a5a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbmZpcm1hdGlvbi1wb3B1cC9EOlxcQU5HVUxBUi1NQVhJTUlMTElBTi1DT1VSU0VcXGZvb2QtZGVsaXZlcnkvc3JjXFxhcHBcXHNoYXJlZFxcY29uZmlybWF0aW9uLXBvcHVwXFxjb25maXJtYXRpb24tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdDQUFnQyxFQUFBO0VBWnBDO0lBZVEsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRLEVBQUE7RUFqQmhCO01BcUJZLGVBQWUsRUFBQTtFQXJCM0I7SUEyQlEsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBc0IsRUFBQTtFQTlCOUI7SUFvQ1EsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsU0FBUyxFQUFBO0VBdkNqQjtNQTBDWSxVQUFVO01BQ1YsWUFBWTtNQUNaLGFBQWE7TUFDYixZQUFZO01BQ1osWUFBWSxFQUFBO0VBOUN4QjtNQWtEWSxtQkFBNEIsRUFBQTtFQWxEeEM7UUFxRGdCLG1CQUE2QixFQUFBO0VBckQ3QztNQTBEWSxtQkFBOEIsRUFBQTtFQTFEMUM7UUE2RGdCLG1CQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbmZpcm1hdGlvbi1wb3B1cC9jb25maXJtYXRpb24tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29uZmlybWF0aW9uUG9wVXAge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4OyBcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0b3A6IDQ3JTtcclxuICAgIGxlZnQ6IDQ2LjUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgI2Nsb3NlUG9wSW1nV3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjY29uZmlybWF0aW9uTXNnIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYig4OCwgNzksIDc5KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI3BvcFVwQ29udHJvbHMge1xyXG4gICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcblxyXG4gICAgICAgICNjb25maXJtLCAjY2FuY2VseyBcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTsgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY29uZmlybSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyMDksIDk2LCA5Nik7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICByZ2IoMTY4LCA2MiwgNjIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY2FuY2VsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE0MSwgMTM3LCAxMzcpO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoOTcsIDkwLCA5MCk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/confirmation-popup/confirmation-popup.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/confirmation-popup/confirmation-popup.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConfirmationPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPopupComponent", function() { return ConfirmationPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/shared/services/loading.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/edit-modal.service */ "./src/app/shared/services/edit-modal.service.ts");




var ConfirmationPopupComponent = /** @class */ (function () {
    function ConfirmationPopupComponent(editModal, loadingService) {
        this.editModal = editModal;
        this.loadingService = loadingService;
        this.orderConfirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isOrderConfirmed = false;
    }
    ConfirmationPopupComponent.prototype.ngOnInit = function () { };
    ConfirmationPopupComponent.prototype.confirmAnOrder = function () {
        this.isOrderConfirmed = true;
        this.orderConfirmed.emit(this.isOrderConfirmed);
        this.closePopUp();
    };
    ConfirmationPopupComponent.prototype.closePopUp = function () {
        this.editModal.toggleEditMode();
        this.isOrderConfirmed = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ConfirmationPopupComponent.prototype, "orderConfirmed", void 0);
    ConfirmationPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-confirmation-popup',
            template: __webpack_require__(/*! ./confirmation-popup.component.html */ "./src/app/shared/confirmation-popup/confirmation-popup.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-popup.component.scss */ "./src/app/shared/confirmation-popup/confirmation-popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_3__["EditModalService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]])
    ], ConfirmationPopupComponent);
    return ConfirmationPopupComponent;
}());



/***/ }),

/***/ "./src/app/shared/error/error.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/error/error.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"errorWrapper\">\r\n  <img src=\"../../../assets/error.png\" class=\"errorCode\">\r\n  <div id=\"errorCode\">{{ errorCode }}</div>\r\n  <div id=\"errorMsg\">{{ errorMsg }}</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/error/error.component.scss":
/*!***************************************************!*\
  !*** ./src/app/shared/error/error.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errorWrapper {\n  width: 100%;\n  text-align: center;\n  height: 50px;\n  margin: 0 auto;\n  margin-top: 10%; }\n  .errorWrapper .errorCode {\n    width: 150px; }\n  .errorWrapper #errorCode {\n    font-size: 22px;\n    font-weight: 600;\n    margin-top: 15px; }\n  .errorWrapper #errorMsg {\n    font-size: 18px;\n    font-weight: 400;\n    margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Vycm9yL0Q6XFxBTkdVTEFSLU1BWElNSUxMSUFOLUNPVVJTRVxcZm9vZC1kZWxpdmVyeS9zcmNcXGFwcFxcc2hhcmVkXFxlcnJvclxcZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZSxFQUFBO0VBTm5CO0lBU1EsWUFBWSxFQUFBO0VBVHBCO0lBYVEsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFQWZ4QjtJQW1CUSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcldyYXBwZXIge1xyXG4gICAvLyBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgXHJcbiAgICAuZXJyb3JDb2RlIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Vycm9yQ29kZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAjZXJyb3JNc2cge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDsgICBcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/error/error.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/error/error.component.ts ***!
  \*************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/loading.service */ "./src/app/shared/services/loading.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_edit_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/edit-modal.service */ "./src/app/shared/services/edit-modal.service.ts");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/error.service */ "./src/app/shared/services/error.service.ts");






var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(loadingService, editModal, route, errorService) {
        this.loadingService = loadingService;
        this.editModal = editModal;
        this.route = route;
        this.errorService = errorService;
        this.errorCode = 404;
        this.errorMsg = "Something Went Wrong(";
    }
    ErrorComponent.prototype.ngOnInit = function () {
        this.bindErrorDetails();
    };
    ErrorComponent.prototype.bindErrorDetails = function () {
        var errorDetails = this.errorService.getErrorInfo();
        this.errorMsg = errorDetails.errorMsg;
        this.errorCode = errorDetails.errorCode;
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/shared/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/shared/error/error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"],
            _services_edit_modal_service__WEBPACK_IMPORTED_MODULE_4__["EditModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div id=\"logoWrapper\">\r\n      <img src=\"../../../assets/logo.png\" id=\"footerLogo\" (click)=\"navigateToDashboard()\">\r\n      <div id=\"footerTextWrapper\">\r\n        The best service for you\r\n      </div>\r\n      <div id=\"copyRight\">\r\n        &copy; {{ getCurrentYear() }} Food Delivery\r\n      </div>\r\n\r\n      <div id=\"developedBy\">\r\n          Developed by {{ author }}\r\n      </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  width: 100%;\n  height: 200px;\n  position: absolute;\n  bottom: 0;\n  background: lightgray; }\n  footer #logoWrapper {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    padding-top: 30px; }\n  footer #logoWrapper #footerLogo {\n      width: 100px;\n      height: 100px; }\n  footer #logoWrapper #footerLogo:hover {\n        cursor: pointer; }\n  footer #logoWrapper #footerTextWrapper {\n      font-weight: 600;\n      font-family: 'Mansalva';\n      font-size: 16px; }\n  footer #logoWrapper #copyRight {\n      font-weight: 600;\n      font-size: 14px; }\n  footer #logoWrapper #developedBy {\n      position: absolute;\n      right: 1.5%;\n      font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9EOlxcQU5HVUxBUi1NQVhJTUlMTElBTi1DT1VSU0VcXGZvb2QtZGVsaXZlcnkvc3JjXFxhcHBcXHNoYXJlZFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QscUJBQXFCLEVBQUE7RUFMekI7SUFRUSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7RUFaekI7TUFlWSxZQUFZO01BQ1osYUFBYSxFQUFBO0VBaEJ6QjtRQW1CZ0IsZUFBZSxFQUFBO0VBbkIvQjtNQXdCWSxnQkFBZ0I7TUFDaEIsdUJBQXVCO01BQ3ZCLGVBQWUsRUFBQTtFQTFCM0I7TUE4QlksZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQTtFQS9CM0I7TUFtQ1ksa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7ICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuXHJcbiAgICAjbG9nb1dyYXBwZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG5cclxuICAgICAgICAjZm9vdGVyTG9nbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvb3RlclRleHRXcmFwcGVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNYW5zYWx2YSc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjb3B5UmlnaHQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZGV2ZWxvcGVkQnkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxLjUlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxuIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.author = 'M.Naberezhnyi';
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.prototype.getCurrentYear = function () {
        return new Date().getFullYear();
    };
    FooterComponent.prototype.navigateToDashboard = function () {
        this.router.navigate(['dashboard/products/pizza']);
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/format-phone.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/format-phone.pipe.ts ***!
  \*********************************************/
/*! exports provided: FormatPhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatPhonePipe", function() { return FormatPhonePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormatPhonePipe = /** @class */ (function () {
    function FormatPhonePipe() {
    }
    FormatPhonePipe.prototype.transform = function (value, args) {
        return '(' + value.substr(0, 3) + ')' + value.substr(3, 2) + '-' + value.substr(5, 2) + '-' + value.substr(7, 4);
    };
    FormatPhonePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'formatPhone'
        })
    ], FormatPhonePipe);
    return FormatPhonePipe;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"headerSection\">\r\n  <div id=\"activeCategory\">\r\n    <h2>{{ activeCategory }}</h2>\r\n  </div>\r\n  <div id=\"controlsWrapper\">\r\n    <div id=\"activeUser\">\r\n      Hello <a [routerLink]=\"['profile', 'user-info']\"><b>{{ activeUser.firstName}} {{ activeUser.lastName | shorten:1 }}</b></a> / \r\n      <a (click)=\"logOut()\">Log Out</a>\r\n    </div>\r\n    <div id=\"cart\" (click)=\"openCart()\">\r\n      <span id=\"cartCounter\" *ngIf=\"productsQuantity != 0\">{{ productsQuantity || 0 }}</span>\r\n     <!--\r\n      <div id=\"price\">\r\n          {{ totalPrice || 0 }}  $\r\n        </div>\r\n        -->\r\n      <img src=\"./../../../assets/cart.png\">\r\n       \r\n      \r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#headerSection {\n  height: 50px;\n  width: 100%;\n  position: relative;\n  background: white(214, 205, 183);\n  box-shadow: 0 0 10px black; }\n  #headerSection #activeCategory {\n    left: 2%;\n    line-height: 50px;\n    position: absolute;\n    text-align: center;\n    width: 150px;\n    margin-right: 15px;\n    color: lightslategray; }\n  #headerSection #controlsWrapper {\n    width: 40%;\n    height: 100%;\n    position: absolute;\n    line-height: 50px;\n    right: 0; }\n  #headerSection #controlsWrapper a:hover {\n      cursor: pointer;\n      color: #3051e4;\n      text-decoration: underline; }\n  #headerSection #controlsWrapper #cart {\n      height: 100%;\n      text-align: center;\n      line-height: 50px;\n      width: 20%;\n      display: inline-block;\n      position: relative; }\n  #headerSection #controlsWrapper #cart #cartCounter {\n        position: absolute;\n        background: red;\n        color: white;\n        border-radius: 50% 50%;\n        width: 20px;\n        height: 20px;\n        font-size: 10px;\n        line-height: 20px;\n        right: 17%; }\n  #headerSection #controlsWrapper #cart #price {\n        display: inline-block;\n        font-weight: 600;\n        margin-right: 20px; }\n  #headerSection #controlsWrapper #cart:hover {\n        cursor: pointer; }\n  #headerSection #controlsWrapper #cart img {\n        height: 90%;\n        width: 45px; }\n  #headerSection #controlsWrapper #activeUser {\n      width: 60%;\n      display: inline-block;\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9EOlxcQU5HVUxBUi1NQVhJTUlMTElBTi1DT1VSU0VcXGZvb2QtZGVsaXZlcnkvc3JjXFxhcHBcXHNoYXJlZFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsMEJBQTBCLEVBQUE7RUFMOUI7SUFRUSxRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUIsRUFBQTtFQWQ3QjtJQWtCUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsUUFBUSxFQUFBO0VBdEJoQjtNQTBCZ0IsZUFBZTtNQUNmLGNBQXVCO01BQ3ZCLDBCQUEwQixFQUFBO0VBNUIxQztNQWlDWSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixVQUFVO01BQ1YscUJBQXFCO01BRXJCLGtCQUFrQixFQUFBO0VBdkM5QjtRQTBDZ0Isa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixVQUFVLEVBQUE7RUFsRDFCO1FBdURnQixxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGtCQUFrQixFQUFBO0VBekRsQztRQTZEZ0IsZUFBZSxFQUFBO0VBN0QvQjtRQWlFZ0IsV0FBVztRQUNYLFdBQVcsRUFBQTtFQWxFM0I7TUF3RVksVUFBVTtNQUNWLHFCQUFxQjtNQUNyQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlclNlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSgyMTQsIDIwNSwgMTgzKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xyXG5cclxuICAgICNhY3RpdmVDYXRlZ29yeSB7XHJcbiAgICAgICAgbGVmdDogMiU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiBsaWdodHNsYXRlZ3JheTtcclxuICAgIH1cclxuXHJcbiAgICAjY29udHJvbHNXcmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoNDgsIDgxLCAyMjgpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjYXJ0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAjY2FydENvdW50ZXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNyU7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNhY3RpdmVVc2VyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_product_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product-cart.service */ "./src/app/shared/services/product-cart.service.ts");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, productCartService) {
        this.authService = authService;
        this.router = router;
        this.productCartService = productCartService;
        this.userDataSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.checkProdutsSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
        this.productsQuantity = this.productCartService.calculateProductsQuantity();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.activeUser = this.authService.getCurrentUser();
        this.getUserData();
        this.id = this.activeUser.userId;
        this.onProdAdded();
    };
    HeaderComponent.prototype.getUserData = function () {
        this.userDataSubscription = this.authService.userData
            .subscribe(this.onGetUserDataSuccess.bind(this), this.onGetUserDataFailure.bind(this));
    };
    HeaderComponent.prototype.onGetUserDataSuccess = function (userData) {
        this.activeUser = this.authService.getCurrentUser();
        this.productsQuantity = this.productCartService.calculateProductsQuantity();
    };
    HeaderComponent.prototype.onGetUserDataFailure = function (error) {
        alert('Something went wrong!');
        console.log(error);
    };
    HeaderComponent.prototype.onProdAdded = function () {
        this.checkProdutsSubscription = this.productCartService.onProductAdded
            .subscribe(this.onProdAddedSuccess.bind(this), this.onProdAddedFailure.bind(this));
    };
    HeaderComponent.prototype.onProdAddedSuccess = function (prodAddStatus) {
        this.productsQuantity = this.productCartService.calculateProductsQuantity();
        this.totalPrice = this.productCartService.getTotalPrice();
    };
    HeaderComponent.prototype.onProdAddedFailure = function (error) {
        alert('something went wrong!');
    };
    /**
     * Provide logout option and navigating to 'Auth screen'
     */
    HeaderComponent.prototype.logOut = function () {
        this.authService.logOut();
        this.userDataSubscription.unsubscribe();
        this.checkProdutsSubscription.unsubscribe();
        this.router.navigate(['/']);
        // this.productCartService.onProductAdded.unsubscribe(); 
    };
    /**
     * Navigate tp 'cart' component
     */
    HeaderComponent.prototype.openCart = function () {
        this.router.navigate(['dashboard/cart']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_product_cart_service__WEBPACK_IMPORTED_MODULE_1__["ProductCart"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/loading/loading.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/loading/loading.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loading\"\n     *ngIf=\"showLoading\">\n  <div class=\"lds-roller\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/loading/loading.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/loading/loading.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loading {\n  z-index: 10;\n  position: absolute;\n  text-align: center;\n  height: 100%;\n  left: 50%; }\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  top: 43%;\n  width: 64px;\n  height: 64px; }\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px; }\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fff;\n  margin: -3px 0 0 -3px; }\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s; }\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px; }\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s; }\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px; }\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s; }\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px; }\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s; }\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px; }\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s; }\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px; }\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s; }\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px; }\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s; }\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px; }\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s; }\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px; }\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmcvRDpcXEFOR1VMQVItTUFYSU1JTExJQU4tQ09VUlNFXFxmb29kLWRlbGl2ZXJ5L3NyY1xcYXBwXFxzaGFyZWRcXGxvYWRpbmdcXGxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUyxFQUFBOztBQUdiO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixRQUFRO0VBRVIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLHdFQUFnRTtVQUFoRSxnRUFBZ0U7RUFDaEUsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUVaO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QixFQUFBOztBQUUxQjtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBRVo7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCLEVBQUE7O0FBRTFCO0VBQ0UsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFFWjtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUVaO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBRVo7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCLEVBQUE7O0FBRTFCO0VBQ0UsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFFWjtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTs7QUFFMUI7RUFDRSxTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUVaO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QixFQUFBOztBQUUxQjtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBRVo7RUFDRTtJQUNFLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UseUJBQXlCLEVBQUEsRUFBQTs7QUFMN0I7RUFDRTtJQUNFLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UseUJBQXlCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9hZGluZyB7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLmxkcy1yb2xsZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0MyU7XHJcbiAgICBcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXYge1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDMycHggMzJweDtcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAtM3B4IDAgMCAtM3B4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XHJcbiAgICB0b3A6IDU0cHg7XHJcbiAgICBsZWZ0OiA0NXB4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XHJcbiAgICB0b3A6IDU3cHg7XHJcbiAgICBsZWZ0OiAzOXB4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XHJcbiAgICB0b3A6IDU4cHg7XHJcbiAgICBsZWZ0OiAzMnB4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcclxuICAgIHRvcDogNTdweDtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcclxuICAgIHRvcDogNTRweDtcclxuICAgIGxlZnQ6IDE5cHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGxlZnQ6IDE0cHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcclxuICAgIHRvcDogNDVweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/loading/loading.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loading.service */ "./src/app/shared/services/loading.service.ts");
/* harmony import */ var src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/edit-modal.service */ "./src/app/shared/services/edit-modal.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(editProfile, loadingService, changeDetector) {
        this.editProfile = editProfile;
        this.loadingService = loadingService;
        this.changeDetector = changeDetector;
        this.showLoading = false;
    }
    LoadingComponent.prototype.ngOnInit = function () {
        this.changeDetector.detectChanges();
        this.subscribeToLoadingChange();
    };
    LoadingComponent.prototype.subscribeToLoadingChange = function () {
        var _this = this;
        this.loadingService.onLoadingChange
            .subscribe(function (res) {
            _this.showLoading = res;
        });
    };
    LoadingComponent.prototype.ngOnDestroy = function () {
        this.showLoading = true;
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/shared/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/shared/loading/loading.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_2__["EditModalService"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/product.model.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/product.model.ts ***!
  \*****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(title, imgSrc, productWeight, productSize, productDescription, price) {
        this.id = this.randomId(1000, 1);
        this.productTitle = title;
        this.imgPath = imgSrc;
        this.productWeight = productWeight;
        this.productSize = productSize;
        this.productDescription = productDescription;
        this.productPrice = price;
    }
    Product.prototype.randomId = function (upperLimit, lowerLimit) {
        return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
    };
    return Product;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/side-bar/side-bar.component */ "./src/app/shared/side-bar/side-bar.component.ts");
/* harmony import */ var _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../dashboard/dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shorten_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shorten.pipe */ "./src/app/shared/shorten.pipe.ts");
/* harmony import */ var _format_phone_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./format-phone.pipe */ "./src/app/shared/format-phone.pipe.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/error.component */ "./src/app/shared/error/error.component.ts");
/* harmony import */ var _confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirmation-popup/confirmation-popup.component */ "./src/app/shared/confirmation-popup/confirmation-popup.component.ts");












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__["SideBarComponent"],
                _shorten_pipe__WEBPACK_IMPORTED_MODULE_6__["ShortenPipe"],
                _format_phone_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatPhonePipe"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"],
                _confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationPopupComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
            ],
            exports: [
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__["SideBarComponent"],
                _format_phone_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatPhonePipe"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"],
                _confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmationPopupComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/shorten.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/shared/shorten.pipe.ts ***!
  \****************************************/
/*! exports provided: ShortenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShortenPipe = /** @class */ (function () {
    function ShortenPipe() {
    }
    ShortenPipe.prototype.transform = function (value, limit) {
        return limit ? value.substr(0, limit) + '.' : value;
    };
    ShortenPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'shorten'
        })
    ], ShortenPipe);
    return ShortenPipe;
}());



/***/ }),

/***/ "./src/app/shared/side-bar/side-bar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sideBar\">\r\n  <nav id=\"productCategory\">\r\n    \r\n    <div id=\"logo\">\r\n      <a [routerLink]=\"['/dashboard/products', 'pizza']\">\r\n        <img src=\"../../../assets/logo.png\" class=\"sideBarLogo\">\r\n      </a>\r\n    </div>\r\n    <ul>\r\n      <li routerLinkActive = \"activeTab\" [routerLink]=\"['/dashboard', 'products', 'pizza']\"  ><a  >{{ 'Pizza' | uppercase }}</a></li>\r\n      <li routerLinkActive = \"activeTab\" [routerLink]=\"['/dashboard/products/', 'drinks']\"><a >{{ 'Drinks' | uppercase }}</a></li>\r\n      <li routerLinkActive = \"activeTab\" [routerLink]=\"['/dashboard/products/', 'salads']\"><a >{{ 'Salads' | uppercase }}</a></li>\r\n  </ul>\r\n  </nav>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/side-bar/side-bar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sideBar {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: black;\n  border: 1px solid black;\n  position: relative; }\n  #sideBar #productCategory {\n    width: 100%;\n    position: relative;\n    top: 100px; }\n  #sideBar #productCategory .activeTab {\n      color: white;\n      background-color: rgba(255, 86, 86, 0.76);\n      opacity: 1; }\n  #sideBar #productCategory #logo {\n      text-align: center; }\n  #sideBar #productCategory #logo .sideBarLogo {\n        width: 150px; }\n  #sideBar #productCategory ul {\n      margin-left: 0;\n      list-style-position: inside;\n      width: 100%;\n      height: 100%;\n      padding-left: 0;\n      display: block;\n      text-decoration: none;\n      list-style-type: none;\n      color: white;\n      height: 211px; }\n  #sideBar #productCategory ul li {\n        display: flexbox;\n        list-style-type: none;\n        opacity: 1;\n        line-height: 40px;\n        width: 100%;\n        text-align: center; }\n  #sideBar #productCategory ul li:hover {\n          cursor: pointer;\n          background-color: #313131; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGUtYmFyL0Q6XFxBTkdVTEFSLU1BWElNSUxMSUFOLUNPVVJTRVxcZm9vZC1kZWxpdmVyeS9zcmNcXGFwcFxcc2hhcmVkXFxzaWRlLWJhclxcc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBO0VBTnZCO0lBU1EsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUFYbEI7TUFjWSxZQUFZO01BQ1oseUNBQXlDO01BQ3pDLFVBQVUsRUFBQTtFQWhCdEI7TUFvQlksa0JBQWtCLEVBQUE7RUFwQjlCO1FBdUJnQixZQUFZLEVBQUE7RUF2QjVCO01BNEJZLGNBQWM7TUFDZCwyQkFBMkI7TUFDM0IsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO01BQ2YsY0FBYTtNQUNiLHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIsWUFBWTtNQUNaLGFBQWEsRUFBQTtFQXJDekI7UUF3Q2dCLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7RUE3Q2xDO1VBZ0RvQixlQUFlO1VBQ2YseUJBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lkZUJhciB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICBcclxuICBcclxuICAgICNwcm9kdWN0Q2F0ZWdvcnkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG5cclxuICAgICAgICAuYWN0aXZlVGFie1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA4NiwgODYsIDAuNzYpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2xvZ28ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc2lkZUJhckxvZ28ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS1wb3NpdGlvbjogaW5zaWRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjExcHg7ICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhib3g7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/shared/side-bar/side-bar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (params) {
        });
    };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/shared/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.scss */ "./src/app/shared/side-bar/side-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/edit-profile/edit-profile.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/userprofile/edit-profile/edit-profile.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"editModal\">\r\n    <div id=\"editModalHeader\">\r\n        <header> \r\n            <h4 id=\"editModalTitle\">Edit profile</h4>\r\n            <button class=\"btn btn-danger\" (click)=\"closeModal()\">X</button>\r\n        </header> \r\n    </div>\r\n \r\n    <form [formGroup]=\"editForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-xs-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"First Name\">\r\n                        First Name:\r\n                        \r\n                        <input type=\"text\"\r\n                               placeholder=\"Enter First Name\"\r\n                               class=\"form-control\"\r\n                               id=\"firstName\"\r\n                               name=\"firstName\"\r\n                               formControlName=\"firstName\">\r\n                      </label>\r\n                      <div *ngIf=\"getDataByFieldName('firstName').touched\">\r\n                        <p *ngIf=\"getDataByFieldName('firstName').errors\" class=\"validationError\">First Name isn't valid!</p>\r\n                        <p *ngIf=\"getDataByFieldName('firstName')?.errors?.minlength\" class=\"validationError\">Min length should be 4 !</p>\r\n                      </div>\r\n                </div>\r\n          \r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-xs-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"Last Name\">\r\n                        Last Name:\r\n                        \r\n                        <input type=\"text\"\r\n                               placeholder=\"Enter Last Name\"\r\n                               class=\"form-control\"\r\n                               id=\"lastName\"\r\n                               name=\"lastName\"\r\n                               formControlName=\"lastName\">\r\n                      </label>\r\n                      <div *ngIf=\"getDataByFieldName('lastName').touched\">\r\n                        <p *ngIf=\"getDataByFieldName('lastName').errors\" class=\"validationError\">Last Name isn't valid!</p>\r\n                        <p *ngIf=\"getDataByFieldName('lastName')?.errors?.minlength\" class=\"validationError\">Min length should be 4 !</p>\r\n                      </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-xs-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"phone\">\r\n                        Phone:\r\n                        \r\n                        <input type=\"text\"\r\n                               placeholder=\"Enter phone\"\r\n                               class=\"form-control\"\r\n                               id=\"phone\"\r\n                               name=\"phone\"\r\n                               formControlName=\"phone\">\r\n                      </label>\r\n                      <div *ngIf=\"getDataByFieldName('phone').touched\">\r\n                        <p *ngIf=\"getDataByFieldName('phone').errors\" class=\"validationError\">Phone isn't valid!</p>\r\n                        <p *ngIf=\"getDataByFieldName('phone')?.errors?.minlength\" class=\"validationError\">Min length should be 10 !</p>\r\n                      </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-xs-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"address\">\r\n                        Address:\r\n                        \r\n                        <input type=\"text\"\r\n                               placeholder=\"Enter address\"\r\n                               class=\"form-control\"\r\n                               id=\"address\"\r\n                               name=\"address\"\r\n                               formControlName=\"address\">\r\n                      </label>\r\n                      <div *ngIf=\"getDataByFieldName('address').touched\">\r\n                        <p *ngIf=\"getDataByFieldName('address').errors\" class=\"validationError\">Address isn't valid!</p>\r\n                        <p *ngIf=\"getDataByFieldName('address')?.errors?.minlength\" class=\"validationError\">Min length should be 5 !</p>\r\n                      </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div formGroupName = passwords class=\"col-md-12 col-xs-12\" >\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-xs-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">\r\n                        Password:\r\n                        \r\n                        <input type=\"text\"\r\n                               placeholder=\"Enter password\"\r\n                               class=\"form-control\"\r\n                               id=\"password\"\r\n                               type=\"password\"\r\n                               name=\"password\"\r\n                               formControlName=\"password\">\r\n                      </label>\r\n                </div>\r\n                <div *ngIf=\"getDataByFieldName('passwords.password').touched\">\r\n                    <p *ngIf=\"getDataByFieldName('passwords.password').errors\" class=\"validationError\">Password isn't valid!</p>\r\n                    <p *ngIf=\"getDataByFieldName('passwords.password')?.errors?.minlength\" class=\"validationError\">Min length should be 4 !</p>\r\n                    <p *ngIf=\"getDataByFieldName('passwords')?.errors?.doesMatchPassword\" class=\"validationError\">Passwords don't match!</p>     \r\n                </div>\r\n               \r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-xs-6\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"passwordRepeat\">\r\n                        Repeat Password:\r\n                        \r\n                        <input type=\"text\"\r\n                               placeholder=\"Repeat password\"\r\n                               class=\"form-control\"\r\n                               id=\"passwordRepeat\"\r\n                               type=\"password\"\r\n                               name=\"passwordRepeat\"\r\n                               formControlName=\"passwordRepeat\">\r\n                      </label>\r\n                </div>\r\n               \r\n                <div *ngIf=\"getDataByFieldName('passwords.passwordRepeat').touched\">\r\n                    <p *ngIf=\"getDataByFieldName('passwords.passwordRepeat').errors\" class=\"validationError\">Password isn't valid!</p>\r\n                    <p *ngIf=\"getDataByFieldName('passwords.passwordRepeat')?.errors?.minlength\" class=\"validationError\">Min length should be 4 !</p>\r\n                    <p *ngIf=\"getDataByFieldName('passwords')?.errors?.doesMatchPassword\" class=\"validationError\">Passwords don't match!</p>\r\n                </div>\r\n            </div>\r\n\r\n           \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 col-xs-12 \" style=\"text-align: center\">\r\n                <button class=\"btn btn-success\"\r\n                        type=\"button\"\r\n                        (click)=\"saveChanges()\"\r\n                        [disabled]=\"!editForm.valid\">Save</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    \r\n   \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/userprofile/edit-profile/edit-profile.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/userprofile/edit-profile/edit-profile.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#editModal {\n  position: absolute;\n  background: white;\n  z-index: 20;\n  min-height: 350px;\n  height: auto;\n  width: 60%;\n  top: 8%;\n  left: 15%; }\n  #editModal #editModalHeader {\n    height: 35px;\n    width: 100%;\n    background: #7f50d8;\n    color: white;\n    text-align: center; }\n  #editModal #editModalHeader #editModalTitle {\n      display: inline-block; }\n  #editModal #editModalHeader button {\n      position: absolute;\n      right: 0;\n      height: 35px; }\n  #editModal #editModalHeader .controls {\n      text-align: center; }\n  form {\n  padding-left: 20px;\n  padding-top: 10px; }\n  .validationError {\n  color: red;\n  font-weight: 600;\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvZWRpdC1wcm9maWxlL0Q6XFxBTkdVTEFSLU1BWElNSUxMSUFOLUNPVVJTRVxcZm9vZC1kZWxpdmVyeS9zcmNcXGFwcFxcdXNlcnByb2ZpbGVcXGVkaXQtcHJvZmlsZVxcZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsT0FBTztFQUNQLFNBQVMsRUFBQTtFQVJiO0lBV1EsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBNkI7SUFDN0IsWUFBWTtJQUNaLGtCQUFrQixFQUFBO0VBZjFCO01Ba0JZLHFCQUFxQixFQUFBO0VBbEJqQztNQXNCWSxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFlBQVksRUFBQTtFQXhCeEI7TUE0Qlksa0JBQWtCLEVBQUE7RUFPOUI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7RUFHckI7RUFDSSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXJwcm9maWxlL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZWRpdE1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHRvcDogOCU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcblxyXG4gICAgI2VkaXRNb2RhbEhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxMjcsIDgwLCAyMTYpOyBcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAjZWRpdE1vZGFsVGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udHJvbHMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnZhbGlkYXRpb25FcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/userprofile/edit-profile/edit-profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/userprofile/edit-profile/edit-profile.component.ts ***!
  \********************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/edit-modal.service */ "./src/app/shared/services/edit-modal.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(editProfile, route, router, authService) {
        this.editProfile = editProfile;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.checkUserInfoSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.checkRouteParamsSub = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.firstNameMinLength = 4;
        this.lastNameMinLength = 4;
        this.phoneMinLength = 10;
        this.addressMinLength = 5;
        this.passwordMinLength = 5;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.subscribeToRouteParams();
    };
    EditProfileComponent.prototype.ngOnDestroy = function () {
        this.checkUserInfoSubscription.unsubscribe();
        this.checkRouteParamsSub.unsubscribe();
    };
    EditProfileComponent.prototype.subscribeToRouteParams = function () {
        var _this = this;
        this.checkRouteParamsSub = this.route.params.subscribe(function (userData) {
            _this.id = userData["id"];
            _this.currentUser = _this.authService.getCurrentUser();
            _this.initForm();
        });
    };
    EditProfileComponent.prototype.initForm = function () {
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.currentUser["firstName"], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(this.firstNameMinLength)]),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.currentUser["lastName"], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(this.lastNameMinLength)]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.currentUser["phone"], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(this.phoneMinLength)]),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.currentUser["address"], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(this.addressMinLength)]),
            passwords: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(this.passwordMinLength)]),
                "passwordRepeat": new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(this.passwordMinLength)]),
            }, {
                validators: this.validatePasswords.bind(this)
            })
        });
    };
    EditProfileComponent.prototype.getDataByFieldName = function (data) {
        return this.editForm.get(data);
    };
    EditProfileComponent.prototype.validatePasswords = function (registrationFormGroup) {
        var _a = registrationFormGroup.value, password = _a.password, passwordRepeat = _a.passwordRepeat;
        if (passwordRepeat.length <= 0) {
            return null;
        }
        if (passwordRepeat !== password) {
            return {
                doesMatchPassword: true
            };
        }
        return null;
    };
    EditProfileComponent.prototype.closeModal = function () {
        this.editProfile.toggleEditMode();
    };
    EditProfileComponent.prototype.saveChanges = function () {
        var formData = this.editForm.value;
        this.checkUserInfoSubscription = this.authService.checkUserInfo(formData)
            .subscribe(this.onSaveChangesSuccess.bind(this), this.onSaveChangesFailure.bind(this));
    };
    EditProfileComponent.prototype.onSaveChangesSuccess = function () {
        this.authService.updateUserInfo(this.editForm.value)
            .subscribe(this.onUpdateUserInfoSuccess.bind(this), this.onUpdateUserInfoFailure.bind(this));
    };
    EditProfileComponent.prototype.onUpdateUserInfoSuccess = function () {
        this.closeModal();
        this.authService.updateUserData();
    };
    EditProfileComponent.prototype.onUpdateUserInfoFailure = function () {
        this.closeModal();
        var activeCategory = this.getLocalProductList().category;
        this.router.navigate(["dashboard/products/" + activeCategory]);
        console.log('something went wrong!');
    };
    EditProfileComponent.prototype.onSaveChangesFailure = function () {
        this.closeModal();
        var activeCategory = this.getLocalProductList().category;
        this.router.navigate(["dashboard/products/" + activeCategory]);
    };
    EditProfileComponent.prototype.getLocalProductList = function () {
        return JSON.parse(localStorage.getItem("productList"));
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/userprofile/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/userprofile/edit-profile/edit-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_5__["EditModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/order-history/order-history.component.html":
/*!************************************************************************!*\
  !*** ./src/app/userprofile/order-history/order-history.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"orderHistoryWrapper\">\r\n    <div *ngFor=\"let order of orders\">\r\n      <app-order-item [order]=\"order\" (onOrderConfirmed)=\"showConfirmationPopUp($event)\"></app-order-item>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"ordersPagination\" *ngIf=\"pages != 1 && pages != 0\">\r\n  \r\n  <button class=\"btn btn-success\"\r\n          *ngFor=\"let page of ordersForPages\"\r\n          (click)=\"getOrdersForPage(page.pageNumber)\">\r\n          {{ page.pageNumber }}\r\n  </button>\r\n\r\n\r\n  \r\n</div>\r\n\r\n<div *ngIf=\"!onlineMode\">\r\n  <img src=\"../../../assets/no-internet-connection.png\" class=\"networkConnectionError\">\r\n</div>\r\n\r\n<ng-container *ngIf=\"isConfirmationPopUpEnabled\">\r\n  <app-confirmation-popup (orderConfirmed)=\"onOrderSubmit()\"></app-confirmation-popup>\r\n  <!--(orderConfirmed)=\"onOrderSubmit(this.formData)\"-->\r\n</ng-container>\r\n \r\n"

/***/ }),

/***/ "./src/app/userprofile/order-history/order-history.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/userprofile/order-history/order-history.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#orderHistoryWrapper {\n  width: 100%;\n  height: 100%;\n  margin-top: -17px;\n  position: relative; }\n\n#ordersPagination {\n  width: 100%;\n  margin-top: 25px;\n  text-align: center;\n  position: relative;\n  bottom: 4%; }\n\n#ordersPagination .btn {\n    margin-left: 5px;\n    margin-top: 5px; }\n\n.networkConnectionError {\n  width: 55%;\n  position: relative;\n  left: 21%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvb3JkZXItaGlzdG9yeS9EOlxcQU5HVUxBUi1NQVhJTUlMTElBTi1DT1VSU0VcXGZvb2QtZGVsaXZlcnkvc3JjXFxhcHBcXHVzZXJwcm9maWxlXFxvcmRlci1oaXN0b3J5XFxvcmRlci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBS3RCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUVoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFOZDtJQVNRLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VycHJvZmlsZS9vcmRlci1oaXN0b3J5L29yZGVyLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjb3JkZXJIaXN0b3J5V3JhcHBlciB7XHJcbiAgLy8gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIFxyXG5cclxufVxyXG5cclxuI29yZGVyc1BhZ2luYXRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDQlO1xyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmV0d29ya0Nvbm5lY3Rpb25FcnJvciB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjElO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/userprofile/order-history/order-history.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/userprofile/order-history/order-history.component.ts ***!
  \**********************************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/loading.service */ "./src/app/shared/services/loading.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/orders.service */ "./src/app/shared/services/orders.service.ts");
/* harmony import */ var src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/edit-modal.service */ "./src/app/shared/services/edit-modal.service.ts");






var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent(orderService, loadingService, editModal) {
        this.orderService = orderService;
        this.loadingService = loadingService;
        this.editModal = editModal;
        this.onlineMode = navigator.onLine;
        this.ordersPerPage = 10;
        this.orderSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.isConfirmationPopUpEnabled = false;
        this.editModalSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
        this.getOrders();
        this.subscribeToModalToggling();
    };
    OrderHistoryComponent.prototype.ngOnDestroy = function () {
        this.orderSubscription.unsubscribe();
        this.editModalSubscription.unsubscribe();
    };
    OrderHistoryComponent.prototype.subscribeToModalToggling = function () {
        var _this = this;
        this.editModalSubscription = this.editModal.onEditChange.subscribe(function (res) {
            _this.isConfirmationPopUpEnabled = false;
        });
    };
    OrderHistoryComponent.prototype.showConfirmationPopUp = function (order) {
        this.offlineOrder = order;
        this.editModal.toggleEditMode();
        this.isConfirmationPopUpEnabled = true;
    };
    OrderHistoryComponent.prototype.onOrderSubmit = function () {
        console.log(this.offlineOrder);
        this.orderService.submitOrderFromOrderHistory(this.offlineOrder);
    };
    OrderHistoryComponent.prototype.calculatePagination = function () {
        this.pages = Math.ceil(this.orders.length / this.ordersPerPage);
        this.ordersOnLastPage = this.orders.length % this.ordersPerPage;
        var pageIndices = [];
        for (var i = 1; i <= this.pages; i++) {
            var currentPageOrders = {
                pageNumber: i,
                orders: this.getOrdersForCurrentPage(i)
            };
            pageIndices.push(currentPageOrders);
        }
        return pageIndices;
    };
    OrderHistoryComponent.prototype.getOrdersForCurrentPage = function (pageNumber) {
        var from = pageNumber * this.ordersPerPage - this.ordersPerPage;
        var to = pageNumber != this.pages ?
            from + this.ordersPerPage - 1 :
            from + this.ordersOnLastPage - 1;
        var orders = [];
        for (var i = from; i <= to; i++) {
            orders.push(this.orders[i]);
        }
        return orders;
    };
    OrderHistoryComponent.prototype.getOrdersForPage = function (pageNumber) {
        this.orders = this.ordersForPages[pageNumber - 1].orders;
    };
    OrderHistoryComponent.prototype.getOrders = function () {
        this.loadingService.toggleLoading();
        this.editModal.toggleEditMode();
        this.orderSubscription = this.orderService
            .getOrders()
            .subscribe(this.onGetOrderSuccess.bind(this), this.onGetOrderFailure.bind(this));
    };
    OrderHistoryComponent.prototype.onGetOrderSuccess = function (orders) {
        if (orders[0]) {
            this.orders = orders;
            this.editModal.toggleEditMode();
            this.loadingService.toggleLoading();
            this.ordersForPages = this.calculatePagination();
            this.orders = this.ordersForPages[0].orders;
            this.onlineMode = this.orders.length > 0;
        }
    };
    OrderHistoryComponent.prototype.onGetOrderFailure = function (err) {
        this.editModal.toggleEditMode();
        this.loadingService.toggleLoading();
        this.onlineMode = false;
    };
    OrderHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-order-history",
            template: __webpack_require__(/*! ./order-history.component.html */ "./src/app/userprofile/order-history/order-history.component.html"),
            styles: [__webpack_require__(/*! ./order-history.component.scss */ "./src/app/userprofile/order-history/order-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"],
            _shared_services_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"],
            src_app_shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_5__["EditModalService"]])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/order-item/order-item.component.html":
/*!******************************************************************!*\
  !*** ./src/app/userprofile/order-item/order-item.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orderItem\">\r\n  <div class=\"orderInfo\" (click)=\"toggleOrderDetail()\">\r\n    <div class=\"orderId\">№ {{ order.orderId }}</div>\r\n    <div class=\"orderDate\"> <b>Date:</b> {{ getDate(order.orderTime) }}</div>\r\n    <div class=\"totalOrderAmount\"><b>Total: </b> {{ order.totalPrice }} $</div>\r\n    <div class=\"productsQuantity\">{{ getProductsQuantity(order) }} <i>{{ getProductsQuantity(order) == 1 ? 'product' : 'products' }}</i></div> \r\n    <div class=\"orderStatus\" \r\n      [ngStyle]=\"{'color': order.orderStatus == 'done' ? 'green' : 'orange'}\">\r\n      <i>\r\n        {{ order.orderStatus }}\r\n      </i></div>\r\n    <div class=\"orderSubmit\" \r\n         *ngIf=\"order.orderStatus == 'pending'\"\r\n         (click)=\"submitOrder()\">submit</div>\r\n    <div class=\"orderTime\"> <b>Time:</b> {{ getTime(order.orderTime) }}</div>\r\n  </div>\r\n  \r\n  <div class=\"orderDetail\" *ngIf=\"isOrderDetailExpanded\">\r\n    <div class=\"orderedProducts\" *ngFor='let order of order.products'>\r\n      <div class=\"productImgWrapper\" (click)=\"navigateToProductDetailPage(order)\">\r\n        <img [src]=\"order.imgPath\"  >\r\n      </div>\r\n\r\n      <div class=\"productTitle\">\r\n        {{ order.productTitle }} X {{ order.productQuantity || ''}}\r\n      </div>\r\n\r\n      <div class=\"productPrice\">\r\n        {{ order.productPrice * order.productQuantity }} $\r\n      </div>\r\n    </div>\r\n  </div>\r\n   \r\n</div>"

/***/ }),

/***/ "./src/app/userprofile/order-item/order-item.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/userprofile/order-item/order-item.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".orderItem {\n  min-height: 45px;\n  height: auto;\n  line-height: 45px;\n  opacity: 0.9;\n  width: 100%;\n  position: relative;\n  background: white;\n  z-index: 5;\n  margin-bottom: 3px; }\n  .orderItem:first-child {\n    border-top: 1px solid lightgrey; }\n  .orderItem:last-child {\n    border-bottom: 0; }\n  .orderItem:hover {\n    cursor: pointer;\n    box-shadow: 1px 1px 10px;\n    opacity: 1; }\n  .orderItem .orderId {\n    display: inline-block;\n    padding-left: 15px; }\n  .orderItem .orderDate {\n    display: inline-block;\n    margin-left: 10%; }\n  .orderItem .orderTime {\n    display: inline-block;\n    position: absolute;\n    right: 5%; }\n  .orderItem .orderStatus {\n    display: inline-block;\n    margin-left: 10px;\n    color: green; }\n  .orderItem .orderSubmit {\n    color: red;\n    display: inline-block;\n    font-size: 14px;\n    margin-left: 25px; }\n  .orderItem .orderSubmit:hover {\n      cursor: pointer;\n      font-style: italic;\n      font-weight: bold; }\n  .orderItem .productsQuantity {\n    display: inline-block;\n    margin-left: 20px; }\n  .orderItem .totalOrderAmount {\n    display: inline-block;\n    margin-left: 25px; }\n  .orderItem .orderDetail {\n    position: relative;\n    right: 0;\n    min-height: 50px;\n    height: auto;\n    width: 100%; }\n  .orderItem .orderDetail .orderedProducts {\n      margin-bottom: 3px;\n      border-bottom: 1px solid lightgray; }\n  .orderItem .orderDetail .orderedProducts:last-child {\n        border-bottom: 0; }\n  .orderItem .orderDetail .orderedProducts:first-child {\n        border-top: 1px solid lightgray; }\n  .orderItem .orderDetail .orderedProducts .productImgWrapper {\n        width: 70px;\n        position: relative;\n        display: inline-block;\n        background-size: cover;\n        opacity: 0.9; }\n  .orderItem .orderDetail .orderedProducts .productImgWrapper:hover {\n          opacity: 1;\n          cursor: pointer;\n          transform: scale(1.015, 1.015); }\n  .orderItem .orderDetail .orderedProducts .productImgWrapper img {\n          width: 70px; }\n  .orderItem .orderDetail .orderedProducts .productTitle {\n        width: 50%;\n        display: inline-block;\n        text-align: center;\n        line-height: 100%;\n        font-size: 12px; }\n  .orderItem .orderDetail .orderedProducts .productPrice {\n        width: 10%;\n        display: inline-block;\n        position: absolute;\n        right: 2%;\n        text-align: center;\n        font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvb3JkZXItaXRlbS9EOlxcQU5HVUxBUi1NQVhJTUlMTElBTi1DT1VSU0VcXGZvb2QtZGVsaXZlcnkvc3JjXFxhcHBcXHVzZXJwcm9maWxlXFxvcmRlci1pdGVtXFxvcmRlci1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNHO0VBQ0MsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFFWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixrQkFBa0IsRUFBQTtFQVZuQjtJQWFLLCtCQUErQixFQUFBO0VBYnBDO0lBaUJLLGdCQUFnQixFQUFBO0VBakJyQjtJQXFCSyxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLFVBQVUsRUFBQTtFQXZCZjtJQTJCRSxxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7RUE1QnBCO0lBZ0NLLHFCQUFxQjtJQUNyQixnQkFBZ0IsRUFBQTtFQWpDckI7SUFxQ0sscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTLEVBQUE7RUF2Q2Q7SUEyQ0sscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7RUE3Q2pCO0lBaURLLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBcER0QjtNQXVEUyxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLGlCQUFpQixFQUFBO0VBekQxQjtJQThESyxxQkFBcUI7SUFDckIsaUJBQWlCLEVBQUE7RUEvRHRCO0lBbUVNLHFCQUFxQjtJQUNyQixpQkFBaUIsRUFBQTtFQXBFdkI7SUE0RUssa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVcsRUFBQTtFQWhGaEI7TUFxRlMsa0JBQWtCO01BQ2xCLGtDQUFrQyxFQUFBO0VBdEYzQztRQXlGYSxnQkFBZ0IsRUFBQTtFQXpGN0I7UUE2RmEsK0JBQStCLEVBQUE7RUE3RjVDO1FBaUdhLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixZQUFZLEVBQUE7RUFyR3pCO1VBd0dpQixVQUFVO1VBQ1YsZUFBZTtVQUNmLDhCQUE4QixFQUFBO0VBMUcvQztVQThHcUIsV0FBVyxFQUFBO0VBOUdoQztRQW1IYSxVQUFVO1FBQ1YscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZUFBZSxFQUFBO0VBdkg1QjtRQTJIYSxVQUFVO1FBQ1YscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlcnByb2ZpbGUvb3JkZXItaXRlbS9vcmRlci1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgIC5vcmRlckl0ZW0ge1xyXG4gICAgbWluLWhlaWdodDogNDVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcmRlcklkIHtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5vcmRlckRhdGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcmRlclRpbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcmRlclN0YXR1cyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXJTdWJtaXQge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3RzUXVhbnRpdHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvdGFsT3JkZXJBbW91bnQge1xyXG4gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAub3JkZXJJbmZvIHtcclxuICAgICAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLm9yZGVyRGV0YWlsIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcblxyXG4gICAgICAgIC5vcmRlcmVkUHJvZHVjdHMge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJvZHVjdEltZ1dyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDE1LCAxLjAxNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnByb2R1Y3RUaXRsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcm9kdWN0UHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/userprofile/order-item/order-item.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/userprofile/order-item/order-item.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemComponent", function() { return OrderItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/products.service */ "./src/app/shared/services/products.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var OrderItemComponent = /** @class */ (function () {
    function OrderItemComponent(productsService, router) {
        this.productsService = productsService;
        this.router = router;
        this.onOrderConfirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isOrderDetailExpanded = false;
    }
    OrderItemComponent.prototype.ngOnInit = function () { };
    OrderItemComponent.prototype.getDate = function (date) {
        var orderDate = new Date(date).toLocaleDateString();
        return orderDate;
    };
    OrderItemComponent.prototype.submitOrder = function () {
        this.onOrderConfirmed.emit(this.order);
    };
    OrderItemComponent.prototype.getTime = function (date) {
        var orderTime = new Date(date).toLocaleTimeString();
        return orderTime;
    };
    OrderItemComponent.prototype.getProductsQuantity = function (item) {
        var productQuantity = 0;
        item["products"].forEach(function (product) {
            productQuantity += product.productQuantity;
        });
        return productQuantity;
    };
    OrderItemComponent.prototype.toggleOrderDetail = function () {
        this.isOrderDetailExpanded = !this.isOrderDetailExpanded;
    };
    OrderItemComponent.prototype.navigateToProductDetailPage = function (product) {
        this.productsService.setSelectedProduct(product);
        this.router.navigate(["dashboard/product-details/" + product.id]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrderItemComponent.prototype, "order", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])("onOrderConfirmed"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OrderItemComponent.prototype, "onOrderConfirmed", void 0);
    OrderItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-order-item",
            template: __webpack_require__(/*! ./order-item.component.html */ "./src/app/userprofile/order-item/order-item.component.html"),
            styles: [__webpack_require__(/*! ./order-item.component.scss */ "./src/app/userprofile/order-item/order-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], OrderItemComponent);
    return OrderItemComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/profile-detail/profile-detail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/userprofile/profile-detail/profile-detail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"profileInfoWrapper\">\r\n    <div id=\"editProfile\" (click)=\"editProfile()\">Edit</div>\r\n\r\n    <div id=\"userDetail\">\r\n        <div class=\"row\" *ngFor=\"let key of objectKeys(userViewTemplate)\">\r\n            <div class=\"col-md-3\"><h5>{{key + ':' }}</h5></div>\r\n            <div class=\"col-md-6\" *ngIf=\"key != 'Phone'\"> {{ userViewTemplate[key]}}  </div>\r\n            <div class=\"col-md-6\" *ngIf=\"key == 'Phone'\"> {{ userViewTemplate[key] | formatPhone}}  </div>\r\n            <div class=\"col-md-3\"></div>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"editMode\">\r\n        <app-edit-profile></app-edit-profile>\r\n    </ng-container>\r\n     \r\n  </div>"

/***/ }),

/***/ "./src/app/userprofile/profile-detail/profile-detail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/userprofile/profile-detail/profile-detail.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#editProfile {\n  position: absolute;\n  display: inline-block;\n  right: 3%;\n  font-weight: 600;\n  color: red; }\n  #editProfile:hover {\n    cursor: pointer; }\n  #userDetail {\n  width: 80%;\n  height: 100%;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvcHJvZmlsZS1kZXRhaWwvRDpcXEFOR1VMQVItTUFYSU1JTExJQU4tQ09VUlNFXFxmb29kLWRlbGl2ZXJ5L3NyY1xcYXBwXFx1c2VycHJvZmlsZVxccHJvZmlsZS1kZXRhaWxcXHByb2ZpbGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTtFQUxkO0lBUVEsZUFBZSxFQUFBO0VBSXZCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VycHJvZmlsZS9wcm9maWxlLWRldGFpbC9wcm9maWxlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlZGl0UHJvZmlsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICByaWdodDogMyU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHJlZDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiN1c2VyRGV0YWlsIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/userprofile/profile-detail/profile-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/userprofile/profile-detail/profile-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: ProfileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailComponent", function() { return ProfileDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/edit-modal.service */ "./src/app/shared/services/edit-modal.service.ts");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ProfileDetailComponent = /** @class */ (function () {
    function ProfileDetailComponent(authService, editModal) {
        this.authService = authService;
        this.editModal = editModal;
        this.objectKeys = Object.keys;
        this.userViewTemplate = {
            'First Name': '',
            'Last Name': '',
            'login': '',
            'phone': '',
            'email': '',
            'address': ''
        };
    }
    ProfileDetailComponent.prototype.ngOnInit = function () {
        this.userData = this.authService.getCurrentUser();
        this.userDataMap();
        this.subscribeToModalToggling();
    };
    ProfileDetailComponent.prototype.ngOnDestroy = function () {
        this.editSubscription.unsubscribe();
    };
    ProfileDetailComponent.prototype.subscribeToModalToggling = function () {
        var _this = this;
        this.editSubscription = this.editModal.onEditChange.subscribe(function (togglingRes) {
            _this.editMode = togglingRes;
        });
    };
    ProfileDetailComponent.prototype.userDataMap = function () {
        for (var _i = 0, _a = [this.userViewTemplate]; _i < _a.length; _i++) {
            var _b = _a[_i], firstName = _b["First Name"], lastName = _b["Last Name"], login = _b.login, phone = _b.phone, email = _b.email, address = _b.address;
            var _c = this.userData, firstName_1 = _c.firstName, lastName_1 = _c.lastName, login_1 = _c.login, phone_1 = _c.phone, email_1 = _c.email, address_1 = _c.address;
            this.userViewTemplate = { 'First Name': firstName_1, 'Last Name': lastName_1, login: login_1, phone: phone_1, email: email_1, address: address_1 };
        }
    };
    ProfileDetailComponent.prototype.editProfile = function () {
        this.editModal.toggleEditMode();
    };
    ProfileDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-profile-detail',
            template: __webpack_require__(/*! ./profile-detail.component.html */ "./src/app/userprofile/profile-detail/profile-detail.component.html"),
            styles: [__webpack_require__(/*! ./profile-detail.component.scss */ "./src/app/userprofile/profile-detail/profile-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_services_edit_modal_service__WEBPACK_IMPORTED_MODULE_1__["EditModalService"]])
    ], ProfileDetailComponent);
    return ProfileDetailComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/profile.module.ts":
/*!***********************************************!*\
  !*** ./src/app/userprofile/profile.module.ts ***!
  \***********************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dashboard/dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/userprofile/profile/profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-detail/profile-detail.component */ "./src/app/userprofile/profile-detail/profile-detail.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/userprofile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-history/order-history.component */ "./src/app/userprofile/order-history/order-history.component.ts");
/* harmony import */ var _order_item_order_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-item/order-item.component */ "./src/app/userprofile/order-item/order-item.component.ts");











var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProfileDetailComponent"],
                _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__["EditProfileComponent"],
                _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_9__["OrderHistoryComponent"],
                _order_item_order_item_component__WEBPACK_IMPORTED_MODULE_10__["OrderItemComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _dashboard_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__["DashboardRoutingModule"]
            ],
            exports: []
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/userprofile/profile/profile.component.html":
/*!************************************************************!*\
  !*** ./src/app/userprofile/profile/profile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"profileInfoWrapper\">\r\n    <ul id=\"profileNav\">\r\n        <li routerLinkActive=\"activeTabs\">\r\n            <a [routerLink]=\"['user-info']\">Profile Info</a>\r\n        </li>\r\n\r\n        <li routerLinkActive=\"activeTabs\">\r\n            <a [routerLink]=\"['order-history']\">Order History</a>\r\n        </li>\r\n        \r\n    </ul>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/userprofile/profile/profile.component.scss":
/*!************************************************************!*\
  !*** ./src/app/userprofile/profile/profile.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profileInfoWrapper {\n  width: 80%;\n  min-height: 300px;\n  margin: 0 auto;\n  margin-top: 7%;\n  background: white;\n  border-radius: 8px;\n  padding-bottom: 15px;\n  box-shadow: 0 0 10px black;\n  position: relative; }\n  #profileInfoWrapper #profileNav {\n    height: 35px;\n    line-height: 35px;\n    border-top-right-radius: 8px;\n    border-top-left-radius: 8px;\n    background: #f15151;\n    color: black; }\n  #profileInfoWrapper #profileNav li {\n      list-style-type: none;\n      display: inline;\n      margin-left: 5px;\n      color: black; }\n  #profileInfoWrapper #profileNav .activeTabs {\n      color: white; }\n  #profileInfoWrapper #profileNav .activeTabs a {\n        margin-left: 5px;\n        color: white;\n        text-decoration: none; }\n  #profileInfoWrapper #profileNav .activeTabs a:hover {\n          cursor: pointer;\n          color: black; }\n  #profileInfoWrapper #profileNav a {\n      color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvcHJvZmlsZS9EOlxcQU5HVUxBUi1NQVhJTUlMTElBTi1DT1VSU0VcXGZvb2QtZGVsaXZlcnkvc3JjXFxhcHBcXHVzZXJwcm9maWxlXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixrQkFBa0IsRUFBQTtFQVR0QjtJQVlRLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixtQkFBNEI7SUFDNUIsWUFBWSxFQUFBO0VBakJwQjtNQXFCWSxxQkFBcUI7TUFDckIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixZQUFZLEVBQUE7RUF4QnhCO01BNkJZLFlBQVksRUFBQTtFQTdCeEI7UUFnQ1ksZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixxQkFBcUIsRUFBQTtFQWxDakM7VUFxQ2dCLGVBQWU7VUFDZixZQUFXLEVBQUE7RUF0QzNCO01BNkNZLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXJwcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9maWxlSW5mb1dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCBibGFjaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAjcHJvZmlsZU5hdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyNDEsIDgxLCA4MSk7IFxyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuXHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7IFxyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3RpdmVUYWJzIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgIFxyXG4gICAgfVxyXG4gXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/userprofile/profile/profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/userprofile/profile/profile.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/userprofile/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/userprofile/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map