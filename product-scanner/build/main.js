webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(30);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(283);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(284);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history__ = __webpack_require__(201);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__history_history__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(202);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scan_scan__ = __webpack_require__(203);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__scan_scan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enteritem_enteritem__ = __webpack_require__(204);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__enteritem_enteritem__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_service__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__common_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale_service__ = __webpack_require__(277);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__locale_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webclient_service__ = __webpack_require__(278);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__webclient_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loadingview_service__ = __webpack_require__(282);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__loadingview_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommonService = /** @class */ (function () {
    function CommonService() {
        this.BASE_URL = "";
        this.requestItems = [];
    }
    CommonService.prototype.currentUserInfo = function () {
        return this.currentUser;
    };
    /**
     * It will return users is logged in or not
     * @memberOf CommonService
     */
    CommonService.prototype.isLoggedIn = function () {
        return (this.currentUser != null);
    };
    CommonService.prototype.updateHistoryData = function (scannedItems) {
        this.requestItems.splice(0, 0, {
            "requestDate": new Date(),
            "scannedItems": scannedItems
        });
    };
    CommonService.prototype.getHistoryData = function () {
        return this.requestItems;
    };
    /**
   * getDateFormat
   * @param dateTimestamp
   * @return // e.g. "24 Jul 1987 12:00 AM";
   */
    CommonService.prototype.getDateFormat = function (date) {
        var month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sep";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        var minutesString = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutesString + ampm;
        return (date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear() + " " + strTime);
    };
    CommonService.prototype.isNullOrEmpty = function (value) {
        if (value == null) {
            return true;
        }
        else if ((value || '').trim().length == 0) {
            return true;
        }
        return false;
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CommonService);
    return CommonService;
}());

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInjector; });
/* harmony export (immutable) */ __webpack_exports__["b"] = setAppInjector;
/**
 * Allows for retrieving singletons using `AppInjector.get(MyService)` (whereas
 * `ReflectiveInjector.resolveAndCreate(MyService)` would create a new instance
 * of the service).
 */
var AppInjector;
/**
 * Helper to set the exported {@link AppInjector}, needed as ES6 modules export
 * immutable bindings (see http://2ality.com/2015/07/es6-module-exports.html) for
 * which trying to make changes after using `import {AppInjector}` would throw:
 * "TS2539: Cannot assign to 'AppInjector' because it is not a variable".
 */
function setAppInjector(injector) {
    if (AppInjector) {
        // Should not happen
        console.error('Programming error: AppInjector was already set');
    }
    else {
        AppInjector = injector;
    }
}
//# sourceMappingURL=app-injector.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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



var HistoryPage = /** @class */ (function (_super) {
    __extends(HistoryPage, _super);
    function HistoryPage(navCtrl, events) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.events = events;
        _this.requestItems = [];
        _this.requestItems = _this.commonService.getHistoryData();
        return _this;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
    };
    HistoryPage.prototype.getDateFormat = function (requestDate) {
        return this.commonService.getDateFormat(requestDate);
    };
    HistoryPage.prototype.sendData = function (scanneditem) {
        this.showOkAlert("Added", function () { });
        this.events.publish('scan::additem', __assign({}, scanneditem));
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"/Users/admin/Downloads/dfgd/product-scanner/src/app/pages/history/history.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      History\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-content no-bounce *ngIf="requestItems.length == 0">\n    <ion-grid style="height: 100%">\n      <ion-row justify-content-center align-items-center style="height: 100%">\n        <ion-card>\n          <ion-card-content>\n            <h3 ion-text text-center color="danger">No data to show!</h3>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n\n\n\n\n  <ion-list class="historyitems-q" *ngIf="requestItems.length > 0">\n    <ng-template ngFor let-requestItem [ngForOf]="requestItems">\n      <ion-item-divider>{{getDateFormat(requestItem.requestDate)}}</ion-item-divider>\n      <ion-item class="historyitem" *ngFor="let scanneditem of requestItem.scannedItems; let i = index;">\n        <h2>{{scanneditem.name}}</h2>\n        <h3>Product Code : {{scanneditem.id}}</h3>\n        <p>{{scanneditem.details}}</p>\n        <button ion-button color="primary" clear (click)="sendData(scanneditem)">\n          <ion-icon name="add"></ion-icon>&nbsp;Add to request again\n        </button>\n        <div item-end class="quantityWrapper">\n          <ion-row>\n            <ion-col>\n              QTY:<br/>\n              {{scanneditem.quantity}}\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-item>\n    </ng-template>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Downloads/dfgd/product-scanner/src/app/pages/history/history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], HistoryPage);
    return HistoryPage;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* BasePage */]));

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function (_super) {
    __extends(ContactPage, _super);
    function ContactPage(navCtrl, events) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.events = events;
        return _this;
    }
    ContactPage.prototype.logout = function () {
        var self = this;
        self.showAlert(self.getLocale("ARE_U_SURE"), function () {
            self.events.publish('user::logout');
        }, self, "Logout");
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/admin/Downloads/dfgd/product-scanner/src/app/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Help\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <p>\n    Same information about app and contact detals will go here\n  </p>\n\n</ion-content>\n\n<ion-footer no-shadow>\n\n  <ion-grid>\n      <ion-row>\n      <ion-col col-1></ion-col>\n      <ion-col col-10>\n\n          <button ion-button color="danger" full (click)="logout()">\n              <ion-icon name="log-out"></ion-icon> &nbsp; Logout\n            </button>\n      </ion-col>\n      <ion-col col-1></ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/admin/Downloads/dfgd/product-scanner/src/app/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ContactPage);
    return ContactPage;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* BasePage */]));

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enteritem_enteritem__ = __webpack_require__(204);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScanPage = /** @class */ (function (_super) {
    __extends(ScanPage, _super);
    function ScanPage(navCtrl, modalCtrl, barcodeScanner, toastCtrl, events) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.barcodeScanner = barcodeScanner;
        _this.toastCtrl = toastCtrl;
        _this.events = events;
        _this.scannedItems = [];
        var self = _this;
        _this.events.subscribe('scan::additem', function (data) {
            if (data) {
                var existingItemName = self.getItemNameAlreadyPresent(data.id);
                if (existingItemName && existingItemName != "") {
                    self.IncreaseQuantityForProduct(data.id, data.quantity);
                }
                else {
                    self.scannedItems.push(data);
                }
            }
        });
        return _this;
    }
    ScanPage.prototype.quantityChanged = function (value, traget) {
        if (isNaN(value) || value == "0" || value == 0) {
            traget.value = "1";
        }
        else {
            traget.value = parseInt(traget.value).toString(); //If user enter float value.. covert to int
        }
    };
    /**
     * deleteItem  -- Delete item from list
     * @param index number
     */
    ScanPage.prototype.deleteItem = function (index) {
        var self = this;
        self.showAlert(self.getLocale("ARE_U_SURE"), function () {
            self.scannedItems.splice(index, 1);
        });
    };
    ScanPage.prototype.submitRequest = function () {
        var self = this;
        self.showLoader();
        setTimeout(function () {
            self.showOkAlert("Request submitted successfully", function () {
                self.commonService.updateHistoryData(self.scannedItems);
                self.scannedItems = [];
            });
        }, 1000);
    };
    ScanPage.prototype.startScanItem = function () {
        //TODO:Call Bar code Scanner ccode here
        //let barcode = (Math.floor(Math.random() * 10) + 1).toString();
        var self = this;
        this.barcodeScanner.scan({
            showFlipCameraButton: true,
            showTorchButton: true,
            prompt: "Place a barcode inside the scan area",
            resultDisplayDuration: 400,
            //formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            orientation: "portrait",
            disableAnimations: true,
            disableSuccessBeep: false // iOS and Android
        }).then(function (barcodeData) {
            if (barcodeData && barcodeData.text && barcodeData.text == "") {
                self.showOkAlert("Unable to scan item", function () { });
                return;
            }
            self.successScanCallback(barcodeData.text);
        }).catch(function (err) {
            self.showOkAlert("Unable to scan item", function () { });
        });
    };
    ScanPage.prototype.successScanCallback = function (barcode) {
        var self = this;
        var existingItemName = self.getItemNameAlreadyPresent(barcode);
        if (existingItemName && existingItemName != "") {
            self.showAlert(self.getLocaleFormatStringFunction("ITEM_ALREADY_SCANNED")(existingItemName), function () {
                self.IncreaseQuantityForProduct(barcode, 1);
            });
            return;
        }
        self.scannedItems.push({
            id: barcode + '',
            name: "Scan Item " + (self.scannedItems.length + 1),
            details: "Details if any",
            quantity: 1
        });
    };
    ScanPage.prototype.getItemNameAlreadyPresent = function (barcode) {
        var name = null;
        this.scannedItems.forEach(function (scannedItem) {
            if (barcode == scannedItem.id) {
                name = scannedItem.name;
            }
        });
        return name;
    };
    ScanPage.prototype.IncreaseQuantityForProduct = function (barcode, quantity, isManual) {
        var _this = this;
        var isPresent = false;
        this.scannedItems.map(function (scannedItem) {
            if (barcode == scannedItem.id) {
                scannedItem.quantity = (parseInt(scannedItem.quantity + '') + quantity);
                if (!isManual) {
                    var toast = _this.toastCtrl.create({
                        message: scannedItem.name + " item quantity increased to " + scannedItem.quantity,
                        duration: 2000
                    });
                    toast.present();
                }
            }
        });
        return isPresent;
    };
    ScanPage.prototype.enterItemDetail = function () {
        var _this = this;
        var itemDetailsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__enteritem_enteritem__["a" /* EnterItemPage */]);
        itemDetailsModal.onDidDismiss(function (data) {
            if (!data) {
                return;
            }
            var existingItemName = _this.getItemNameAlreadyPresent(data.id);
            if (existingItemName && existingItemName != "") {
                _this.showAlert(_this.getLocaleFormatStringFunction("ITEM_ALREADY_SCANNED")(existingItemName), function () {
                    _this.IncreaseQuantityForProduct(data.id, 1);
                });
                return;
            }
            _this.scannedItems.push(data);
        });
        itemDetailsModal.present();
    };
    ScanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scan',template:/*ion-inline-start:"/Users/admin/Downloads/dfgd/product-scanner/src/app/pages/scan/scan.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left *ngIf="scannedItems.length > 0">\n      <button color="secondary" ion-button icon-start (click)="enterItemDetail()">\n        <ion-icon name="help"></ion-icon>&nbsp;Enter\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Scan item(s)\n    </ion-title>\n\n\n\n    <ion-buttons end *ngIf="scannedItems.length > 0">\n      <button color="secondary" ion-button icon-start (click)="startScanItem()">\n        <ion-icon ios="ios-barcode-outline" md="md-barcode"></ion-icon>&nbsp;Scan\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-content no-bounce padding *ngIf="scannedItems.length == 0">\n    <ion-grid style="height: 100%">\n      <ion-row justify-content-center align-items-center style="height: 100%">\n        <button ion-button icon-start color="primary" class="firstItemScan" (click)="startScanItem()">\n          <ion-icon ios="ios-barcode-outline" md="md-barcode"></ion-icon>\n          Start Item Scanning\n        </button>\n        <button ion-button icon-start color="danger" class="firstItemEnter" (click)="enterItemDetail()">\n          <ion-icon name="help"></ion-icon>\n          Enter Item details\n        </button>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n\n\n\n  <ion-list class="scanneditems-q" *ngIf="scannedItems.length > 0">\n    <ion-item class="scanneditem" *ngFor="let scanneditem of scannedItems; let i = index;">\n      <h2>{{scanneditem.name}}</h2>\n      <h3>Product Code : {{scanneditem.id}}</h3>\n      <p>{{scanneditem.details}}</p>\n      <button ion-button color="danger" clear (click)="deleteItem(i)">\n        <ion-icon name="trash"></ion-icon>&nbsp;Remove item\n      </button>\n      <div item-end class="quantityWrapper">\n        <ion-row>\n          <ion-col width-50>&nbsp;</ion-col>\n          <ion-col width-50>\n            <button ion-button icon-only color="dark" full clear item-top (click)="IncreaseQuantityForProduct(scanneditem.id, 1, true)">\n              <ion-icon name="add"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col width-50>\n            QTY :\n          </ion-col>\n          <ion-col width-50>\n            <input type="number" text-center value="1" class="quantityTxt" [(ngModel)]="scanneditem.quantity" (change)="quantityChanged($event.target.value,$event.target)" />\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col width-50>&nbsp;</ion-col>\n          <ion-col width-50>\n            <button ion-button icon-only color="dark" full clear item-top [disabled]="scanneditem.quantity == 1"\n              (click)="IncreaseQuantityForProduct(scanneditem.id, -1, true)">\n              <ion-icon name="remove"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-item>\n  </ion-list>\n  <button ion-button color="primary" block *ngIf="scannedItems.length > 0" (click)="submitRequest()">Submit Request</button>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Downloads/dfgd/product-scanner/src/app/pages/scan/scan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ScanPage);
    return ScanPage;
}(__WEBPACK_IMPORTED_MODULE_3__base__["a" /* BasePage */]));

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models__ = __webpack_require__(285);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnterItemPage = /** @class */ (function (_super) {
    __extends(EnterItemPage, _super);
    function EnterItemPage(viewCtrl) {
        var _this = _super.call(this) || this;
        _this.viewCtrl = viewCtrl;
        _this.itemDetails = new __WEBPACK_IMPORTED_MODULE_3__models__["a" /* ScannedItem */]();
        return _this;
    }
    EnterItemPage.prototype.cancelPage = function () {
        this.viewCtrl.dismiss(null);
    };
    EnterItemPage.prototype.done = function () {
        this.viewCtrl.dismiss(this.itemDetails);
    };
    EnterItemPage.prototype.getDetailAboutItem = function () {
        var barcode = (Math.floor(Math.random() * 10) + 1).toString();
        this.itemDetails.name = "Entered Name " + barcode;
        this.itemDetails.details = "About item details here";
    };
    EnterItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enteritem',template:/*ion-inline-start:"/Users/admin/Downloads/dfgd/product-scanner/src/app/pages/enteritem/enteritem.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Enter Details\n    </ion-title>\n\n    <ion-buttons end>\n      <button color="secondary" ion-button (click)="cancelPage()">\n        Cancel\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form #itemDetailsForm="ngForm" autocomplete="off" class="itemDetails-form">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n\n          <ion-item>\n            <ion-label stacked>Product code</ion-label>\n            <ion-input type="text" placeholder="e.g. 12345" name="id" [(ngModel)]="itemDetails.id" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <button ion-button color="primary" full [disabled]="itemDetails.id.trim().length == 0" (click)="getDetailAboutItem(itemDetails.id)">\n              Get details\n            </button>\n          </ion-item>\n\n\n          <ion-item-divider>Or enter manually</ion-item-divider>\n\n          <ion-item>\n            <ion-label stacked>Product name</ion-label>\n            <ion-input type="text" placeholder="e.g. ABC 500mg" name="name" [(ngModel)]="itemDetails.name" required></ion-input>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label stacked>Product details</ion-label>\n            <ion-input type="text" placeholder="e.g. other details" name="details" [(ngModel)]="itemDetails.details"\n              required></ion-input>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-label stacked>quantity</ion-label>\n            <ion-input type="number" placeholder="e.g. 12" name="quantity" pattern="[0-9]+" [(ngModel)]="itemDetails.quantity"\n              required></ion-input>\n          </ion-item>\n\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="signup-col">\n        <button ion-button color="primary" full type="submit" [disabled]="!itemDetailsForm.form.valid" (click)="done(itemDetailsForm)">\n          <ion-icon name="add"></ion-icon> &nbsp;Add item\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Downloads/dfgd/product-scanner/src/app/pages/enteritem/enteritem.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], EnterItemPage);
    return EnterItemPage;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* BasePage */]));

//# sourceMappingURL=enteritem.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_injector__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//Pages

//Views

//Services

var AppModule = /** @class */ (function () {
    function AppModule(injector) {
        Object(__WEBPACK_IMPORTED_MODULE_7__app_injector__["b" /* setAppInjector */])(injector);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* TheScannerApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages__["d" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__views__["a" /* LogoView */],
                __WEBPACK_IMPORTED_MODULE_8__pages__["e" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages__["c" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages__["f" /* ScanPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages__["b" /* EnterItemPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* TheScannerApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* TheScannerApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages__["d" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages__["e" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages__["c" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages__["f" /* ScanPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages__["b" /* EnterItemPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["d" /* WebClientService */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["c" /* LocaleService */],
                __WEBPACK_IMPORTED_MODULE_10__providers__["b" /* LoadingViewService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injector */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheScannerApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TheScannerApp = /** @class */ (function () {
    function TheScannerApp(events, platform, statusBar, splashScreen, ionicApp, menu, alertCtrl) {
        var _this = this;
        this.events = events;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.ionicApp = ionicApp;
        this.menu = menu;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages__["e" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            if (platform.is('ios')) {
                statusBar.styleDefault();
            }
            else {
                // set status bar to white
                statusBar.backgroundColorByHexString('#078ef5');
            }
            // let status bar overlay webview
            statusBar.overlaysWebView(true);
            splashScreen.hide();
        });
        this.events.subscribe('user::login', function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages__["d" /* HomePage */];
        });
        this.events.subscribe('user::logout', function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages__["e" /* LoginPage */];
        });
        var ready = true;
        platform.registerBackButtonAction(function () {
            var activePortal = ionicApp._loadingPortal.getActive() ||
                ionicApp._modalPortal.getActive() ||
                ionicApp._toastPortal.getActive() ||
                ionicApp._overlayPortal.getActive();
            if (activePortal) {
                ready = false;
                activePortal.dismiss();
                activePortal.onDidDismiss(function () { ready = true; });
                return;
            }
            if (menu.isOpen()) {
                menu.close();
                return;
            }
            //let view = this.nav.getActive();
            //let page = view ? this.nav.getActive().instance : null;
            if (_this.nav.canGoBack()) {
                _this.nav.pop();
            }
            else {
                if (_this.appExitAlert) {
                    _this.appExitAlert.dismiss();
                    _this.appExitAlert = null;
                }
                else {
                    _this.showAppExitAlert();
                }
            }
        }, 1);
    }
    TheScannerApp.prototype.showAppExitAlert = function () {
        var _this = this;
        this.appExitAlert = this.alertCtrl.create({
            title: "Confirm",
            message: "Are you sure you want exit?",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        _this.appExitAlert = null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        this.appExitAlert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], TheScannerApp.prototype, "nav", void 0);
    TheScannerApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Downloads/dfgd/product-scanner/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/admin/Downloads/dfgd/product-scanner/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TheScannerApp);
    return TheScannerApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocaleService = /** @class */ (function () {
    function LocaleService() {
        this.locales = {};
        this.locales["APP_NAME"] = 'The Scanner';
        this.locales["APP_EXIT_MESSAGE"] = "Do you want Exit?";
        this.locales["APP_EXIT_TITLE"] = "Confirm Exit";
        this.locales["SOMETHING_WRONG"] = "Something went wrong!";
        this.locales["FAILED"] = "Failed";
        this.locales["THANK_YOU_SIGNUP"] = "Thank you!";
        this.locales["ITEM_ALREADY_SCANNED"] = function (itemName) {
            return "Item '" + itemName + "' already scanned, you want to increase quantity by one?";
        };
        this.locales["ARE_U_SURE"] = "Are you sure?";
    }
    LocaleService.prototype.get = function (label) {
        var localeText = "No Locale Text";
        localeText = this.locales[label] || localeText;
        return localeText;
    };
    LocaleService.prototype.getFormatStringFunction = function (label) {
        var localeFunc = function () { return 'No Locale Text'; };
        localeFunc = this.locales[label] || localeFunc;
        return localeFunc;
    };
    LocaleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocaleService);
    return LocaleService;
}());

//# sourceMappingURL=locale.service.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebClientService = /** @class */ (function () {
    function WebClientService(http, commonService) {
        this.http = http;
        this.commonService = commonService;
    }
    WebClientService.prototype.post = function (path, data, isAuthorization, options) {
        var _this = this;
        //return  Observable.throw( 'Internal Server error');
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.getCommonHeader() });
        if (options) {
            //TODO: Added them also to requestOptions
        }
        var map = this.http.post(this.commonService.BASE_URL + path, data, requestOptions).map(function (resp) {
            console.log('111');
            return _this.checkResponseValidation(resp);
        });
        return map;
    };
    WebClientService.prototype.get = function (path, isAuthorization, options) {
        var _this = this;
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.getCommonHeader() });
        if (options) {
            //TODO: Added them also to requestOptions
        }
        var map = this.http.get(this.commonService.BASE_URL + path, requestOptions).map(function (resp) {
            return _this.checkResponseValidation(resp);
        });
        return map;
    };
    WebClientService.prototype.getCommonHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        //headers.append('Content-Type', 'application/json');
        //headers.append('Accept', '*/*');
        //headers.append('Referer', 'http://localhost:3000/');
        /*
        if (isAuthorization) {
          headers.append('Authorization', `Bearer ${this.commonService.currentUser.accessToken}`);
        }
        */
        return headers;
    };
    WebClientService.prototype.checkResponseValidation = function (resp) {
        var data = resp.json();
        return data;
    };
    WebClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__common_service__["a" /* CommonService */]])
    ], WebClientService);
    return WebClientService;
}());

//# sourceMappingURL=webclient.service.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingViewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingViewService = /** @class */ (function () {
    function LoadingViewService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.defaultLoadingMessage = 'Please wait...';
    }
    LoadingViewService.prototype.showLoadingPopup = function (message) {
        if (this.isLoaderShowing) {
            this.loading.dismiss();
        }
        this.loading = this.loadingCtrl.create({
            content: message || this.defaultLoadingMessage,
            dismissOnPageChange: true
        });
        this.loading.present();
        this.isLoaderShowing = true;
    };
    LoadingViewService.prototype.dismissLoadingPopup = function () {
        try {
            if (this.loading) {
                this.loading.dismiss();
                this.loading = null;
            }
            this.isLoaderShowing = false;
        }
        catch (ex) {
        }
    };
    LoadingViewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoadingViewService);
    return LoadingViewService;
}());

//# sourceMappingURL=loadingview.service.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, events) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.events = events;
        _this.loginCredentials = { email: '', password: '' };
        return _this;
    }
    LoginPage.prototype.login = function (loginForm) {
        if (loginForm.valid) {
            this.events.publish('user::login');
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/admin/Downloads/dfgd/product-scanner/src/app/pages/login/login.html"*/'<ion-content no-bounce>\n    <ion-grid style="height: 100%">\n        <ion-row justify-content-center align-items-center style="height: 100%">\n            <ion-card class="login-signup-area">\n                <ion-card-header text-center>\n                  LOGIN\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col col-4 offset-4 text-center>\n                        <view-logo></view-logo>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n            \n                  <form #loginForm="ngForm" autocomplete="off" class="login-form">\n                    <ion-row>\n                      <ion-col>\n                        <ion-list inset>\n            \n                          <ion-item>\n                            <ion-label stacked>Email</ion-label>\n                            <ion-input type="email" placeholder="e.g. user@domain.com" name="email" [(ngModel)]="loginCredentials.email"\n                              required pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"></ion-input>\n                          </ion-item>\n            \n                          <ion-item>\n                            <ion-label stacked>Password</ion-label>\n                            <ion-input type="password" placeholder="password minimum 6 letters" name="password" [(ngModel)]="loginCredentials.password"\n                              required pattern="[A-Za-z0-9]{6,}"></ion-input>\n                          </ion-item>\n            \n                        </ion-list>\n                      </ion-col>\n                    </ion-row>\n            \n                    <ion-row>\n                      <ion-col class="signup-col">\n                        <button ion-button color="primary" full type="submit" [disabled]="!loginForm.form.valid" (click)="login(loginForm)">\n                          <ion-icon name="log-in"></ion-icon> &nbsp;Login\n                        </button>\n                      </ion-col>\n                    </ion-row>\n                  </form>\n            \n                </ion-card-content>\n              </ion-card>\n        </ion-row>\n      </ion-grid>\n\n  \n</ion-content>'/*ion-inline-end:"/Users/admin/Downloads/dfgd/product-scanner/src/app/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* BasePage */]));

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scan_scan__ = __webpack_require__(203);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__scan_scan__["a" /* ScanPage */];
        _this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__history_history__["a" /* HistoryPage */];
        _this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */];
        return _this;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/admin/Downloads/dfgd/product-scanner/src/app/pages/home/home.html"*/'<ion-tabs color="primary">\n    <ion-tab [root]="tab1Root" tabTitle="Scan" tabIcon="barcode"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="History" tabIcon="list"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Help" tabIcon="information-circle"></ion-tab>\n  </ion-tabs>'/*ion-inline-end:"/Users/admin/Downloads/dfgd/product-scanner/src/app/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* BasePage */]));

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(286);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scanneditem__ = __webpack_require__(287);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__scanneditem__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/**
 * User object
 * @export
 * @class User
 */
var User = /** @class */ (function () {
    function User(response) {
        this.id = response.userID;
        this.email = response.user.email;
        this.firstname = response.user.firstname;
        this.lastname = response.user.lastname;
        this._fullName = this.firstname + " " + this.lastname;
        this.displayLetters = ((this.lastname || "  ").substring(0, 1) + (this.lastname || "  ").substring(0, 1)).toUpperCase();
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannedItem; });
/**
 * Item object
 * @export
 * @class Item
 */
var ScannedItem = /** @class */ (function () {
    function ScannedItem() {
        this.id = "";
        this.name = "";
        this.details = "";
        this.quantity = 1;
    }
    return ScannedItem;
}());

//# sourceMappingURL=scanneditem.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logo_logo__ = __webpack_require__(289);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__logo_logo__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoView = /** @class */ (function () {
    function LogoView() {
    }
    LogoView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'view-logo',template:/*ion-inline-start:"/Users/admin/Downloads/dfgd/product-scanner/src/app/views/logo/logo.html"*/'<div class="logo-wrapper-view">\n    <img src="assets/imgs/appname.png" class="logo-img"/>\n</div>'/*ion-inline-end:"/Users/admin/Downloads/dfgd/product-scanner/src/app/views/logo/logo.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LogoView);
    return LogoView;
}());

//# sourceMappingURL=logo.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_injector__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BasePage = /** @class */ (function () {
    function BasePage() {
        this.loaderView = __WEBPACK_IMPORTED_MODULE_3__app_injector__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_1__providers__["b" /* LoadingViewService */]);
        this.commonAlertCtrl = __WEBPACK_IMPORTED_MODULE_3__app_injector__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]);
        this.locale = __WEBPACK_IMPORTED_MODULE_3__app_injector__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_1__providers__["c" /* LocaleService */]);
        this.commonService = __WEBPACK_IMPORTED_MODULE_3__app_injector__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_1__providers__["a" /* CommonService */]);
        this.commonEvents = __WEBPACK_IMPORTED_MODULE_3__app_injector__["a" /* AppInjector */].get(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]);
    }
    //#region "Loader code"
    BasePage.prototype.showLoaderWithMessage = function (message) {
        this.loaderView.showLoadingPopup(message);
    };
    BasePage.prototype.setDefaultLoadingMessage = function (message) {
        this.loaderView.defaultLoadingMessage = message;
    };
    BasePage.prototype.getDefaultLoadingMessage = function () {
        return this.loaderView.defaultLoadingMessage;
    };
    BasePage.prototype.showLoader = function () {
        this.loaderView.showLoadingPopup();
    };
    BasePage.prototype.dismissLoader = function () {
        var _this = this;
        setTimeout(function () {
            _this.loaderView.dismissLoadingPopup();
        }, 1700);
    };
    BasePage.prototype.isShowingLoader = function () {
        return this.loaderView.isLoaderShowing;
    };
    //#endregion "Loader code"
    //#region "Alert popup code"
    /**
    * Help to show alerts
    *
    * @param {string} text
    * @memberof BasePage
    */
    BasePage.prototype.showWaring = function (message, title) {
        this.dismissLoader();
        var alert = this.commonAlertCtrl.create({
            title: title || this.getLocale("APP_NAME"),
            message: message,
            cssClass: 'waring-alter-button',
            buttons: ['OK']
        });
        alert.present();
    };
    BasePage.prototype.showError = function (message, title) {
        this.dismissLoader();
        var alert = this.commonAlertCtrl.create({
            title: title || this.getLocale("APP_NAME"),
            message: message,
            cssClass: 'error-alter-button',
            buttons: ['OK']
        });
        alert.present();
    };
    BasePage.prototype.showOkAlert = function (message, yesHandler, caller, title) {
        this.dismissLoader();
        var alert = this.commonAlertCtrl.create({
            title: title || this.getLocale("APP_NAME"),
            message: message,
            cssClass: 'ok-cancel-alter-buttons',
            buttons: [
                {
                    text: 'OK',
                    handler: function () { return yesHandler(caller); }
                }
            ]
        });
        alert.present();
    };
    BasePage.prototype.showAlert = function (message, yesHandler, caller, title, noHandler) {
        this.dismissLoader();
        var alert = this.commonAlertCtrl.create({
            title: title || "Please Confirm",
            message: message,
            cssClass: 'ok-cancel-alter-buttons',
            buttons: [
                {
                    text: 'OK',
                    handler: function () { return yesHandler(caller); }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { if (noHandler)
                        noHandler(caller); }
                }
            ]
        });
        alert.present();
    };
    //#endregion "Alert popup code"
    //#region "Loader code"
    BasePage.prototype.getLocale = function (label) {
        return this.locale.get(label);
    };
    BasePage.prototype.getLocaleFormatStringFunction = function (label) {
        return this.locale.getFormatStringFunction(label);
    };
    //#endregion "Loader code"
    BasePage.prototype.requestHandleError = function (error) {
        if (error.status === 401) {
            this.commonService.currentUser = null;
            this.commonEvents.publish('user::logout');
        }
    };
    BasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BasePage);
    return BasePage;
}());

//# sourceMappingURL=base.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map