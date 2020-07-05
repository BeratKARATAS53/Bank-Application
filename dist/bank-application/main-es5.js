function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponent */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponent", function () {
      return routingComponent;
    });
    /* harmony import */


    var _pages_ErrorPage_ErrorPage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pages/ErrorPage/ErrorPage.component */
    "./src/app/pages/ErrorPage/ErrorPage.component.ts");
    /* harmony import */


    var _pages_MainPage_MainPage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/MainPage/MainPage.component */
    "./src/app/pages/MainPage/MainPage.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pages_LoginPage_LoginPage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/LoginPage/LoginPage.component */
    "./src/app/pages/LoginPage/LoginPage.component.ts");
    /* harmony import */


    var _pages_TransfersPage_TransfersPage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/TransfersPage/TransfersPage.component */
    "./src/app/pages/TransfersPage/TransfersPage.component.ts");
    /* harmony import */


    var _pages_RegisterPage_RegisterPage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/RegisterPage/RegisterPage.component */
    "./src/app/pages/RegisterPage/RegisterPage.component.ts");
    /* harmony import */


    var _pages_AccountsPage_AccountsPage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/AccountsPage/AccountsPage.component */
    "./src/app/pages/AccountsPage/AccountsPage.component.ts");
    /* harmony import */


    var _pages_AccountDetailPage_AccountDetailPage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/AccountDetailPage/AccountDetailPage.component */
    "./src/app/pages/AccountDetailPage/AccountDetailPage.component.ts");
    /* harmony import */


    var _components_Sidebar_Sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/Sidebar/Sidebar.component */
    "./src/app/components/Sidebar/Sidebar.component.ts"); // @angular
    // components


    var routes = [{
      path: '',
      component: _components_Sidebar_Sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'main'
      }, {
        path: 'main',
        component: _pages_MainPage_MainPage_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"]
      }, {
        path: 'accounts',
        component: _pages_AccountsPage_AccountsPage_component__WEBPACK_IMPORTED_MODULE_8__["AccountsPageComponent"]
      }, {
        path: 'transfers',
        component: _pages_TransfersPage_TransfersPage_component__WEBPACK_IMPORTED_MODULE_6__["TransfersPageComponent"]
      }, {
        path: 'account/:accountNumber',
        component: _pages_AccountDetailPage_AccountDetailPage_component__WEBPACK_IMPORTED_MODULE_9__["AccountDetailPageComponent"]
      }, {
        path: 'error',
        component: _pages_ErrorPage_ErrorPage_component__WEBPACK_IMPORTED_MODULE_0__["ErrorPageComponent"]
      }]
    }, {
      path: 'login',
      component: _pages_LoginPage_LoginPage_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"]
    }, {
      path: 'register',
      component: _pages_RegisterPage_RegisterPage_component__WEBPACK_IMPORTED_MODULE_7__["RegisterPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        }]
      }], null, null);
    })();

    var routingComponent = [_components_Sidebar_Sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _pages_MainPage_MainPage_component__WEBPACK_IMPORTED_MODULE_1__["MainPageComponent"], _pages_AccountDetailPage_AccountDetailPage_component__WEBPACK_IMPORTED_MODULE_9__["AccountDetailPageComponent"], _pages_AccountsPage_AccountsPage_component__WEBPACK_IMPORTED_MODULE_8__["AccountsPageComponent"], _pages_LoginPage_LoginPage_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"], _pages_RegisterPage_RegisterPage_component__WEBPACK_IMPORTED_MODULE_7__["RegisterPageComponent"], _pages_TransfersPage_TransfersPage_component__WEBPACK_IMPORTED_MODULE_6__["TransfersPageComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/SessionService/SessionService.service */
    "./src/app/services/SessionService/SessionService.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _components_Sidebar_Sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/Sidebar/Sidebar.component */
    "./src/app/components/Sidebar/Sidebar.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, session, translate) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.session = session;
        this.translate = translate;
        this.title = 'bank-application';
        translate.addLangs(['tr', 'en']); // this language will be used as a fallback when a translation isn't found in the current language

        translate.setDefaultLang('tr'); // the lang to use, if the lang isn't available, it will use the current loader to get them

        translate.use('tr');

        if (!session.getToken()) {
          // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
          this.router.navigateByUrl('/login');
        }
      }

      _createClass(AppComponent, [{
        key: "changeLanguage",
        value: function changeLanguage(language) {
          this.translate.use(language);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-Sidebar");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_Sidebar_Sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pipes/myCurrency/myCurrency.pipe */
    "./src/app/pipes/myCurrency/myCurrency.pipe.ts");
    /* harmony import */


    var _pipes_absoluteValue_absoluteValue_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pipes/absoluteValue/absoluteValue.pipe */
    "./src/app/pipes/absoluteValue/absoluteValue.pipe.ts");
    /* harmony import */


    var _components_AccountCard_AccountCard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/AccountCard/AccountCard.component */
    "./src/app/components/AccountCard/AccountCard.component.ts");
    /* harmony import */


    var _components_Sidebar_Sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/Sidebar/Sidebar.component */
    "./src/app/components/Sidebar/Sidebar.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _pages_MainPage_MainPage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/MainPage/MainPage.component */
    "./src/app/pages/MainPage/MainPage.component.ts");
    /* harmony import */


    var _pages_AccountDetailPage_AccountDetailPage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/AccountDetailPage/AccountDetailPage.component */
    "./src/app/pages/AccountDetailPage/AccountDetailPage.component.ts");
    /* harmony import */


    var _pages_AccountsPage_AccountsPage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/AccountsPage/AccountsPage.component */
    "./src/app/pages/AccountsPage/AccountsPage.component.ts");
    /* harmony import */


    var _pages_LoginPage_LoginPage_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/LoginPage/LoginPage.component */
    "./src/app/pages/LoginPage/LoginPage.component.ts");
    /* harmony import */


    var _pages_RegisterPage_RegisterPage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/RegisterPage/RegisterPage.component */
    "./src/app/pages/RegisterPage/RegisterPage.component.ts");
    /* harmony import */


    var _pages_TransfersPage_TransfersPage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/TransfersPage/TransfersPage.component */
    "./src/app/pages/TransfersPage/TransfersPage.component.ts"); // AoT requires an exported function for factories


    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
        defaultLanguage: 'tr',
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_Sidebar_Sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _components_AccountCard_AccountCard_component__WEBPACK_IMPORTED_MODULE_2__["AccountCardComponent"], _pipes_absoluteValue_absoluteValue_pipe__WEBPACK_IMPORTED_MODULE_1__["AbsoluteValuePipe"], _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_0__["MyCurrencyPipe"], _components_Sidebar_Sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _pages_MainPage_MainPage_component__WEBPACK_IMPORTED_MODULE_14__["MainPageComponent"], _pages_AccountDetailPage_AccountDetailPage_component__WEBPACK_IMPORTED_MODULE_15__["AccountDetailPageComponent"], _pages_AccountsPage_AccountsPage_component__WEBPACK_IMPORTED_MODULE_16__["AccountsPageComponent"], _pages_LoginPage_LoginPage_component__WEBPACK_IMPORTED_MODULE_17__["LoginPageComponent"], _pages_RegisterPage_RegisterPage_component__WEBPACK_IMPORTED_MODULE_18__["RegisterPageComponent"], _pages_TransfersPage_TransfersPage_component__WEBPACK_IMPORTED_MODULE_19__["TransfersPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components_Sidebar_Sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _components_AccountCard_AccountCard_component__WEBPACK_IMPORTED_MODULE_2__["AccountCardComponent"], _pipes_absoluteValue_absoluteValue_pipe__WEBPACK_IMPORTED_MODULE_1__["AbsoluteValuePipe"], _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_0__["MyCurrencyPipe"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["routingComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
            defaultLanguage: 'tr',
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
              useFactory: createTranslateLoader,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
            }
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/AccountCard/AccountCard.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/AccountCard/AccountCard.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AccountCardComponent */

  /***/
  function srcAppComponentsAccountCardAccountCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountCardComponent", function () {
      return AccountCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/AccountService/AccountService.service */
    "./src/app/services/AccountService/AccountService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/SessionService/SessionService.service */
    "./src/app/services/SessionService/SessionService.service.ts");
    /* harmony import */


    var src_app_services_CurrencyConverter_CurrencyConverter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/CurrencyConverter/CurrencyConverter.service */
    "./src/app/services/CurrencyConverter/CurrencyConverter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/myCurrency/myCurrency.pipe */
    "./src/app/pipes/myCurrency/myCurrency.pipe.ts");

    function AccountCardComponent_div_0_div_1_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountCardComponent_div_0_div_1_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var account_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r6.deleteAccount(account_r4.accountNumber);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "account.deleteAccount"), " ");
      }
    }

    function AccountCardComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "myCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AccountCardComponent_div_0_div_1_button_15_Template, 3, 3, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountCardComponent_div_0_div_1_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var account_r4 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r9.gotoDetails(account_r4.accountNumber);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var account_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", account_r4.accountName, " (", account_r4.currency, ") ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 10, "account.accountName"), " ", account_r4.accountNumber, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 12, "account.rate"), ": %", account_r4.rate, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 14, "account.amount"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 16, account_r4.amount), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", account_r4.amount == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 18, "account.details"), " ");
      }
    }

    function AccountCardComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountCardComponent_div_0_div_1_Template, 19, 20, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.accounts);
      }
    }

    function AccountCardComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "account.noAccounts"));
      }
    }

    var AccountCardComponent = /*#__PURE__*/function () {
      function AccountCardComponent(route, router, session, accountService, currencyService) {
        _classCallCheck(this, AccountCardComponent);

        this.route = route;
        this.router = router;
        this.session = session;
        this.accountService = accountService;
        this.currencyService = currencyService;

        if (!session.getToken()) {
          // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
          this.router.navigateByUrl('/login');
        } else {
          this.getFirst(session.getToken());
        }
      }

      _createClass(AccountCardComponent, [{
        key: "getFirst",
        value: function getFirst(username) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.username = this.session.getToken(); // Token'dan kullanıcı ismi alınıp "username" değişkenine kaydedilir.

                    _context.next = 3;
                    return Object(src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__["userAccounts"])(username).then( // Kullanıcının hesapları "accounts" değişkenine kaydedilir.
                    function (resolve) {
                      return _this.accounts = resolve;
                    });

                  case 3:
                    _context.next = 5;
                    return Object(src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__["numberOfAccounts"])(username).then( // Kullanıcının hesap adeti "numberOfAccounts" değişkenine kaydedilir.
                    function (resolve) {
                      return _this.numberOfAccounts = resolve;
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deleteAccount",
        value: function deleteAccount(accountNumber) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var uniqueKey;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Object(src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__["getAccountKey"])(accountNumber).then(function (response) {
                      // Öncelikle hesabın primary key'i alınır.
                      uniqueKey = response[0];
                      console.log(response);
                    });

                  case 2:
                    this.accountService.deleteAccount(uniqueKey); // Alınan primary key ile hesap silinir.

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "gotoDetails",
        value: function gotoDetails(accountNumber) {
          // Detay Sayfasına Yönlendirme Fonksiyonu
          this.router.navigate(['/account/', accountNumber]);
        }
      }]);

      return AccountCardComponent;
    }();

    AccountCardComponent.ɵfac = function AccountCardComponent_Factory(t) {
      return new (t || AccountCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_CurrencyConverter_CurrencyConverter_service__WEBPACK_IMPORTED_MODULE_5__["CurrencyConverterService"]));
    };

    AccountCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AccountCardComponent,
      selectors: [["app-AccountCard"]],
      decls: 3,
      vars: 2,
      consts: [["class", "row card-group", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "row", "card-group"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "card"], [2, "margin", "20px"], [1, "card-title"], [1, "card-text"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
      template: function AccountCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AccountCardComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccountCardComponent_ng_template_1_Template, 3, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.numberOfAccounts)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_8__["MyCurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvQWNjb3VudENhcmQvQWNjb3VudENhcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-AccountCard',
          templateUrl: './AccountCard.component.html',
          styleUrls: ['./AccountCard.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }, {
          type: src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }, {
          type: src_app_services_CurrencyConverter_CurrencyConverter_service__WEBPACK_IMPORTED_MODULE_5__["CurrencyConverterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/Sidebar/Sidebar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/Sidebar/Sidebar.component.ts ***!
    \*********************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/AccountService/AccountService.service */
    "./src/app/services/AccountService/AccountService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/SessionService/SessionService.service */
    "./src/app/services/SessionService/SessionService.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function SidebarComponent_ng_template_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_ng_template_26_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_ng_template_26_Template_button_click_8_listener() {
          var modal_r2 = ctx.$implicit;
          return modal_r2.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "sidebar.modal.title"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "sidebar.modal.yes"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, "sidebar.modal.no"), " ");
      }
    }

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(route, router, session, accountService, modalService, translate) {
        _classCallCheck(this, SidebarComponent);

        this.route = route;
        this.router = router;
        this.session = session;
        this.accountService = accountService;
        this.modalService = modalService;
        this.translate = translate;

        if (!session.getToken()) {
          // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirilir.
          this.router.navigateByUrl('/login');
        } else {
          this.getFirst(session.getToken());
        }
      }

      _createClass(SidebarComponent, [{
        key: "getFirst",
        value: function getFirst(username) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.username = this.session.getToken(); // Token'dan kullanıcı ismi alınıp "username" değişkenine kaydedilir.

                    _context3.next = 3;
                    return Object(src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__["numberOfAccounts"])(username).then( // Kullanıcının hesap adeti "numberOfAccounts" değişkenine kaydedilir.
                    function (resolve) {
                      return _this2.numberOfAccounts = resolve;
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openModal",
        value: function openModal(content) {
          var _this3 = this;

          // Oturumu Kapat Modelini Açma Fonksiyonu
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true
          }).result.then(function (result) {
            _this3.closeResult = "Closed with: ".concat(result);
          });
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(language) {
          this.translate.use(language);
        }
      }, {
        key: "logOut",
        value: function logOut() {
          // Oturumu Kapatma Fonksiyonu
          this.session.logOut();
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-Sidebar"]],
      decls: 29,
      vars: 14,
      consts: [[1, "sidebar"], ["routerLink", "/main", "routerLinkActive", "selected"], ["routerLink", "/accounts", "routerLinkActive", "selected"], ["routerLink", "/transfers", "routerLinkActive", "selected"], ["role", "group", 1, "btn-group"], [1, "btn", "btn-danger", "btn-lg", 3, "click"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["logOutModal", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-footer"], [1, "btn", "btn-success", "btn-lg", 3, "click"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);

            return ctx.openModal(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_22_listener() {
            return ctx.changeLanguage("tr");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " T\xDCRK\xC7E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_24_listener() {
            return ctx.changeLanguage("en");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " ENGLISH ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SidebarComponent_ng_template_26_Template, 11, 9, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "sidebar.main"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, "sidebar.accounts"), " (", ctx.numberOfAccounts, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "sidebar.transfers"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 12, "sidebar.logout"), " ");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-Sidebar',
          templateUrl: './Sidebar.component.html',
          styleUrls: ['./Sidebar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }, {
          type: src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/Account.ts":
  /*!***********************************!*\
    !*** ./src/app/models/Account.ts ***!
    \***********************************/

  /*! exports provided: Account */

  /***/
  function srcAppModelsAccountTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Account", function () {
      return Account;
    });

    var Account = function Account() {
      _classCallCheck(this, Account);
    };
    /***/

  },

  /***/
  "./src/app/models/Customer.ts":
  /*!************************************!*\
    !*** ./src/app/models/Customer.ts ***!
    \************************************/

  /*! exports provided: Customer */

  /***/
  function srcAppModelsCustomerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Customer", function () {
      return Customer;
    });

    var Customer = function Customer() {
      _classCallCheck(this, Customer);
    };
    /***/

  },

  /***/
  "./src/app/models/Transfer.ts":
  /*!************************************!*\
    !*** ./src/app/models/Transfer.ts ***!
    \************************************/

  /*! exports provided: Transfer */

  /***/
  function srcAppModelsTransferTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Transfer", function () {
      return Transfer;
    });

    var Transfer = function Transfer() {
      _classCallCheck(this, Transfer);
    };
    /***/

  },

  /***/
  "./src/app/pages/AccountDetailPage/AccountDetailPage.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/AccountDetailPage/AccountDetailPage.component.ts ***!
    \************************************************************************/

  /*! exports provided: AccountDetailPageComponent */

  /***/
  function srcAppPagesAccountDetailPageAccountDetailPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountDetailPageComponent", function () {
      return AccountDetailPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_TransferService_TransferService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/TransferService/TransferService.service */
    "./src/app/services/TransferService/TransferService.service.ts");
    /* harmony import */


    var src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/AccountService/AccountService.service */
    "./src/app/services/AccountService/AccountService.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/SessionService/SessionService.service */
    "./src/app/services/SessionService/SessionService.service.ts");
    /* harmony import */


    var _components_Sidebar_Sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/Sidebar/Sidebar.component */
    "./src/app/components/Sidebar/Sidebar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../pipes/myCurrency/myCurrency.pipe */
    "./src/app/pipes/myCurrency/myCurrency.pipe.ts");
    /* harmony import */


    var _pipes_absoluteValue_absoluteValue_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../pipes/absoluteValue/absoluteValue.pipe */
    "./src/app/pipes/absoluteValue/absoluteValue.pipe.ts");

    function AccountDetailPageComponent_tr_61_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", transfer_r2.cReceiveAccountName, " ");
      }
    }

    function AccountDetailPageComponent_tr_61_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", transfer_r2.cReceiveAccountNumber, " ");
      }
    }

    function AccountDetailPageComponent_tr_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccountDetailPageComponent_tr_61_td_1_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AccountDetailPageComponent_tr_61_td_2_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "myCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "myCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transfer_r2.transferType === "Havale");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transfer_r2.transferType === "Virman");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 7, transfer_r2.amount), " ", transfer_r2.cSendAccountCurrency, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transfer_r2.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 9, transfer_r2.cSendAccountAmount));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transfer_r2.date);
      }
    }

    function AccountDetailPageComponent_tr_62_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", transfer_r7.cReceiveAccountName, " ");
      }
    }

    function AccountDetailPageComponent_tr_62_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", transfer_r7.cReceiveAccountNumber, " ");
      }
    }

    function AccountDetailPageComponent_tr_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccountDetailPageComponent_tr_62_td_1_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AccountDetailPageComponent_tr_62_td_2_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "myCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "absoluteValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "myCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transfer_r7.transferType === "Havale");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", transfer_r7.transferType === "Virman");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 9, transfer_r7.amount)), " ", transfer_r7.cSendAccountCurrency, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transfer_r7.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 11, transfer_r7.cReceiveAccountAmount));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transfer_r7.date);
      }
    }

    var AccountDetailPageComponent = /*#__PURE__*/function () {
      function AccountDetailPageComponent(route, router, session, accountService) {
        _classCallCheck(this, AccountDetailPageComponent);

        this.route = route;
        this.router = router;
        this.session = session;
        this.accountService = accountService;

        if (!session.getToken()) {
          // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirilir.
          this.router.navigateByUrl('/login');
        } else {
          this.getFirst(session.getToken());
        }
      }

      _createClass(AccountDetailPageComponent, [{
        key: "getFirst",
        value: function getFirst(username) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.username = this.session.getToken(); // Token'dan kullanıcı ismi alınıp "username" değişkenine kaydedilir.

                    _context4.next = 3;
                    return Object(src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__["getAccount"])( // Hesap bilgisi url'den gelen accountNumber değeri ile "account" değişkenine kaydedilir.
                    username, this.route.snapshot.params.accountNumber).then(function (resolve) {
                      _this4.account = resolve[0];
                    });

                  case 3:
                    _context4.next = 5;
                    return Object(_services_TransferService_TransferService_service__WEBPACK_IMPORTED_MODULE_1__["userAccountSendTransfers"])( // Kullanıcının gönderdiği transferler "accountSendTransfers" değişkenine kaydedilir.
                    username, this.route.snapshot.params.accountNumber).then(function (response) {
                      _this4.accountSendTransfers = response;
                    });

                  case 5:
                    _context4.next = 7;
                    return Object(_services_TransferService_TransferService_service__WEBPACK_IMPORTED_MODULE_1__["userAccountReceiveTransfers"])( // Kullanıcının aldığı transferler "accountReceiveTransfers" değişkenine kaydedilir.
                    username, this.route.snapshot.params.accountNumber).then(function (response) {
                      _this4.accountReceiveTransfers = response;
                    });

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccountDetailPageComponent;
    }();

    AccountDetailPageComponent.ɵfac = function AccountDetailPageComponent_Factory(t) {
      return new (t || AccountDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
    };

    AccountDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AccountDetailPageComponent,
      selectors: [["app-AccountDetailPage"]],
      decls: 63,
      vars: 46,
      consts: [[1, "main"], [1, "container-sm"], [1, "row"], [1, "col-3"], [1, "col-2"], [2, "color", "tomato"], [2, "color", "darkgrey"], [1, "table", "table-bordered"], [1, "thead-dark"], [4, "ngFor", "ngForOf"], [4, "ngIf"]],
      template: function AccountDetailPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-Sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "myCurrency");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "h5", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "thead", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](60, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, AccountDetailPageComponent_tr_61_Template, 13, 11, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, AccountDetailPageComponent_tr_62_Template, 14, 13, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 20, "account.accountDetail"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 22, "account.accountName"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.account.accountName, " (", ctx.account.currency, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 24, "account.accountNumber"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.account.accountNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 26, "account.balance"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 28, ctx.account.amount));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 30, "account.rate"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("%", ctx.account.rate, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 32, "account.date"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.account.date, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 34, "account.accountActions"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 36, "transfer.receiveAccountName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 38, "account.amount"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 40, "transfer.description"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 42, "account.balance"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 44, "account.date"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.accountSendTransfers);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.accountReceiveTransfers);
        }
      },
      directives: [_components_Sidebar_Sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_9__["MyCurrencyPipe"], _pipes_absoluteValue_absoluteValue_pipe__WEBPACK_IMPORTED_MODULE_10__["AbsoluteValuePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0FjY291bnREZXRhaWxQYWdlL0FjY291bnREZXRhaWxQYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AccountDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'app-AccountDetailPage',
          templateUrl: './AccountDetailPage.component.html',
          styleUrls: ['./AccountDetailPage.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }, {
          type: src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/AccountsPage/AccountsPage.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/AccountsPage/AccountsPage.component.ts ***!
    \**************************************************************/

  /*! exports provided: AccountsPageComponent */

  /***/
  function srcAppPagesAccountsPageAccountsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsPageComponent", function () {
      return AccountsPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _models_Account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../models/Account */
    "./src/app/models/Account.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/AccountService/AccountService.service */
    "./src/app/services/AccountService/AccountService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/SessionService/SessionService.service */
    "./src/app/services/SessionService/SessionService.service.ts");
    /* harmony import */


    var _services_CurrencyConverter_CurrencyConverter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../services/CurrencyConverter/CurrencyConverter.service */
    "./src/app/services/CurrencyConverter/CurrencyConverter.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../pipes/myCurrency/myCurrency.pipe */
    "./src/app/pipes/myCurrency/myCurrency.pipe.ts");

    function AccountsPageComponent_div_7_tr_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "myCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountsPageComponent_div_7_tr_22_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);

          var account_r6 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          return ctx_r7.gotoDetails(account_r6.accountNumber);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var account_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](account_r6.accountName);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](account_r6.accountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](account_r6.currency);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, account_r6.amount));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](account_r6.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 8, "account.details"), " ");
      }
    }

    function AccountsPageComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AccountsPageComponent_div_7_tr_22_Template, 16, 10, "tr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, "account.accountName"));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 9, "account.accountNumber"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 11, "account.currency.title"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 13, "account.amount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 15, "account.date"));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 17, "account.action"));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.accounts);
      }
    }

    function AccountsPageComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "account.noAccounts"), " ");
      }
    }

    function AccountsPageComponent_ng_template_14_div_10_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "account.modal.errors.accountNameRequired"), " ");
      }
    }

    function AccountsPageComponent_ng_template_14_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccountsPageComponent_ng_template_14_div_10_p_1_Template, 3, 3, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.accountName.errors.required);
      }
    }

    function AccountsPageComponent_ng_template_14_div_11_div_5_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "account.modal.errors.amountRequired"), " ");
      }
    }

    function AccountsPageComponent_ng_template_14_div_11_div_5_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "account.modal.errors.amountMin"), " ");
      }
    }

    function AccountsPageComponent_ng_template_14_div_11_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccountsPageComponent_ng_template_14_div_11_div_5_p_1_Template, 3, 3, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AccountsPageComponent_ng_template_14_div_11_div_5_p_2_Template, 3, 3, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.amount.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.amount.errors.min);
      }
    }

    function AccountsPageComponent_ng_template_14_div_11_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var account_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", account_r21.accountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate6"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 7, "account.accountNumber"), " ", account_r21.accountNumber, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 9, "account.accountNumber"), " ", account_r21.amount, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 11, "account.currency.title"), " ", account_r21.currency, " ");
      }
    }

    function AccountsPageComponent_ng_template_14_div_11_div_12_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "account.modal.errors.withdrawAccountRequired"), " ");
      }
    }

    function AccountsPageComponent_ng_template_14_div_11_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccountsPageComponent_ng_template_14_div_11_div_12_p_1_Template, 3, 3, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.otherAmount.errors.required);
      }
    }

    function AccountsPageComponent_ng_template_14_div_11_div_32_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "account.modal.errors.currencyRequired"), " ");
      }
    }

    function AccountsPageComponent_ng_template_14_div_11_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccountsPageComponent_ng_template_14_div_11_div_32_p_1_Template, 3, 3, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.currency.errors.required);
      }
    }

    function AccountsPageComponent_ng_template_14_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AccountsPageComponent_ng_template_14_div_11_div_5_Template, 3, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "select", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AccountsPageComponent_ng_template_14_div_11_option_11_Template, 5, 13, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AccountsPageComponent_ng_template_14_div_11_div_12_Template, 2, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "select", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "option", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AccountsPageComponent_ng_template_14_div_11_div_32_Template, 2, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 12, "account.amount"), " * ");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.amount.errors && (ctx_r11.amount.dirty || ctx_r11.amount.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 14, "account.withdrawAccount"), " * ");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.accounts);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.otherAmount.errors && (ctx_r11.otherAmount.dirty || ctx_r11.otherAmount.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 16, "account.modal.errors.currencyConvertion"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 18, "account.currency.title"), " * ");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 20, "account.currency.turkishLira"));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 22, "account.currency.dolar"));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 24, "account.currency.euro"));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 26, "account.currency.gold"));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.currency.errors && (ctx_r11.currency.dirty || ctx_r11.currency.touched));
      }
    }

    function AccountsPageComponent_ng_template_14_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " TL ");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, "account.amount"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, "account.modal.errors.firstAccount"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 7, "account.currency.title"), " ");
      }
    }

    function AccountsPageComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AccountsPageComponent_ng_template_14_Template_form_ngSubmit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          return ctx_r24.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AccountsPageComponent_ng_template_14_div_10_Template, 2, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AccountsPageComponent_ng_template_14_div_11_Template, 33, 28, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AccountsPageComponent_ng_template_14_ng_template_12_Template, 11, 9, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 7, "account.modal.addAccount"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r4.accountForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 9, "account.accountName"), " *");

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.accountName.errors && (ctx_r4.accountName.dirty || ctx_r4.accountName.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.numberOfAccounts != 0)("ngIfElse", _r12);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 11, "account.modal.addAccount"), " ");
      }
    }

    var AccountsPageComponent = /*#__PURE__*/function () {
      function AccountsPageComponent(formBuilder, route, router, session, accountService, currencyService, modalService) {
        _classCallCheck(this, AccountsPageComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.session = session;
        this.accountService = accountService;
        this.currencyService = currencyService;
        this.modalService = modalService;
        this.newAccount = new _models_Account__WEBPACK_IMPORTED_MODULE_1__["Account"](); // Açılacak Yeni Hesap

        this.firstAccount = false; // Açılacak Hesabın İlk Hesap Olup Olmadığını Tutan Değişken

        this.rate = 15; // Sabit Faiz Oranı

        this.now = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(new Date(), 'dd/MM/yyyy', 'en'); // Kayıt Tarihi İçin Tutulan Değişken

        if (!session.getToken()) {
          // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
          this.router.navigateByUrl('/login');
        } else {
          this.getFirst(session.getToken());
        }
      }

      _createClass(AccountsPageComponent, [{
        key: "getFirst",
        value: function getFirst(username) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.username = this.session.getToken(); // Token'dan kullanıcı ismi alınıp "username" değişkenine kaydedilir.

                    _context5.next = 3;
                    return Object(_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_5__["userAccounts"])(username).then( // Kullanıcının hesapları "accounts" değişkenine kaydedilir.
                    function (resolve) {
                      return _this5.accounts = resolve;
                    });

                  case 3:
                    _context5.next = 5;
                    return Object(_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_5__["numberOfAccounts"])(username).then( // Kullanıcının hesap adeti "numberOfAccounts" değişkenine kaydedilir.
                    function (resolve) {
                      return _this5.numberOfAccounts = resolve;
                    });

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.accountForm = this.formBuilder.group({
            // Form İle İlgili Validasyonları Belirleme
            accountName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: ['10000', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            currency: ['TL', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            otherAmount: [[]]
          });
        }
        /** Validasyon için form değerlerine ulaşmayı sağlayan get metodları */

      }, {
        key: "open",
        value: function open(content) {
          var _this6 = this;

          // Hesap Ekleme Modal'ını Açma Fonksiyonu
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this6.closeResult = "Closed with: ".concat(result);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this7 = this;

            var convertMoney, uniqueKey, accountNumber;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    // Hesap Ekleme Fonksiyonu
                    this.newAccount = this.accountForm.value; // Form'da validasyon hatası varsa geri döner.

                    if (!this.accountForm.invalid) {
                      _context6.next = 4;
                      break;
                    }

                    alert('Zorunlu Alanları Doldurun!');
                    return _context6.abrupt("return");

                  case 4:
                    if (!(this.numberOfAccounts !== 0)) {
                      _context6.next = 16;
                      break;
                    }

                    _context6.next = 7;
                    return Object(_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_5__["getAccount"])(this.username, this.otherAmount.value).then( // Hesaba yüklenecek paranın çekileceği hesap bilgisi
                    function (response) {
                      _this7.otherAccount = response[0];
                    });

                  case 7:
                    convertMoney = this.currencyService.convertForAddAccount( // Döviz Kuru'na göre para dönüştürme işlemleri
                    this.otherAccount.currency, this.newAccount.currency, this.newAccount.amount);

                    if (!(convertMoney > this.otherAccount.amount)) {
                      _context6.next = 13;
                      break;
                    }

                    // Dönüştürülen para çekilecek hesaptaki paradan fazla ise
                    alert('Paranın Çekileceği Hesabınızda Yeterli Bakiye Yok!');
                    return _context6.abrupt("return");

                  case 13:
                    _context6.next = 15;
                    return Object(_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_5__["getAccountKey"])(this.otherAccount.accountNumber).then(function (response) {
                      uniqueKey = response[0];
                    });

                  case 15:
                    this.accountService.updateAccount( // Diğer hesaptan yatırılacak para miktarı düşülür.
                    uniqueKey, this.otherAccount.amount - convertMoney);

                  case 16:
                    accountNumber = Math.floor( // Rastgele bir hesap numarası
                    Math.random() * (999999 - 100000 + 1) + 100000);
                    this.accountService.addAccount( // Hesap veritabanına eklenir.
                    this.username, this.newAccount.accountName, accountNumber, this.newAccount.amount, this.newAccount.currency, this.rate, this.now);

                  case 18:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "gotoDetails",
        value: function gotoDetails(accountNumber) {
          // Detay Sayfasına Yönlendirme Fonksiyonu
          this.router.navigate(['/account/', accountNumber]);
        }
      }, {
        key: "accountName",
        get: function get() {
          return this.accountForm.get('accountName');
        }
      }, {
        key: "amount",
        get: function get() {
          return this.accountForm.get('amount');
        }
      }, {
        key: "currency",
        get: function get() {
          return this.accountForm.get('currency');
        }
      }, {
        key: "otherAmount",
        get: function get() {
          return this.accountForm.get('otherAmount');
        }
      }]);

      return AccountsPageComponent;
    }();

    AccountsPageComponent.ɵfac = function AccountsPageComponent_Factory(t) {
      return new (t || AccountsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_CurrencyConverter_CurrencyConverter_service__WEBPACK_IMPORTED_MODULE_8__["CurrencyConverterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]));
    };

    AccountsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AccountsPageComponent,
      selectors: [["app-AccountsPage"]],
      decls: 16,
      vars: 8,
      consts: [[1, "main"], [1, "container-sm"], [1, "row"], [1, "col-10"], ["class", "row card-group", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "col-2"], [1, "btn", "btn-lg", "btn-primary", 3, "click"], ["addAccount", ""], [1, "row", "card-group"], [1, "table", "table-bordered"], [1, "thead-dark"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], ["for", "accountName"], ["type", "text", "formControlName", "accountName", "required", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "form-group", 4, "ngIf", "ngIfElse"], ["elseblock", ""], [1, "form-group"], [1, "btn", "btn-primary", "btn-lg", "btn-block"], [1, "alert", "alert-danger"], [4, "ngIf"], ["for", "amount"], ["type", "number", "formControlName", "amount", "min", "1", 1, "form-control"], ["for", "otherAmount"], ["formControlName", "otherAmount", 1, "custom-select", "custom-select-lg", "mb-3"], [3, "value", 4, "ngFor", "ngForOf"], [1, "alert", "alert-info"], ["for", "currency"], ["formControlName", "currency", 1, "custom-select", "custom-select-lg", "mb-3"], ["value", "TL"], ["value", "$"], ["value", "\u20AC"], ["value", "Alt\u0131n"], [3, "value"], ["role", "alert", 1, "alert", "alert-info"]],
      template: function AccountsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AccountsPageComponent_div_7_Template, 23, 19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AccountsPageComponent_ng_template_8_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountsPageComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);

            return ctx.open(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AccountsPageComponent_ng_template_14_Template, 18, 13, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, "sidebar.accounts"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.numberOfAccounts)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 6, "account.modal.addAccount"), " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_11__["MyCurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0FjY291bnRzUGFnZS9BY2NvdW50c1BhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AccountsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'app-AccountsPage',
          templateUrl: './AccountsPage.component.html',
          styleUrls: ['./AccountsPage.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
        }, {
          type: _services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]
        }, {
          type: _services_CurrencyConverter_CurrencyConverter_service__WEBPACK_IMPORTED_MODULE_8__["CurrencyConverterService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ErrorPage/ErrorPage.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/ErrorPage/ErrorPage.component.ts ***!
    \********************************************************/

  /*! exports provided: ErrorPageComponent */

  /***/
  function srcAppPagesErrorPageErrorPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function () {
      return ErrorPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrorPageComponent = /*#__PURE__*/function () {
      function ErrorPageComponent() {
        _classCallCheck(this, ErrorPageComponent);
      }

      _createClass(ErrorPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorPageComponent;
    }();

    ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) {
      return new (t || ErrorPageComponent)();
    };

    ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorPageComponent,
      selectors: [["app-ErrorPage"]],
      decls: 8,
      vars: 0,
      consts: [[1, "main"], [1, "container"], [1, "row"], ["src", "../../../assets/img/404.jpg", 1, "mx-auto", "d-block"], [1, "mx-auto", "d-block"], ["href", "/main", "role", "button", 1, "btn", "btn-primary"]],
      template: function ErrorPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " GO TO HOME PAGE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0Vycm9yUGFnZS9FcnJvclBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ErrorPage',
          templateUrl: './ErrorPage.component.html',
          styleUrls: ['./ErrorPage.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/LoginPage/LoginPage.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/LoginPage/LoginPage.component.ts ***!
    \********************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppPagesLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var _models_Customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../models/Customer */
    "./src/app/models/Customer.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/SessionService/SessionService.service */
    "./src/app/services/SessionService/SessionService.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function LoginPageComponent_div_10_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "login.errors.usernameRequired"), " ");
      }
    }

    function LoginPageComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginPageComponent_div_10_p_1_Template, 3, 3, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.username.errors.required);
      }
    }

    function LoginPageComponent_div_16_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "login.errors.passwordRequired"), " ");
      }
    }

    function LoginPageComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginPageComponent_div_16_p_1_Template, 3, 3, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.password.errors.required);
      }
    }

    var LoginPageComponent = /*#__PURE__*/function () {
      function LoginPageComponent(formBuilder, route, router, session) {
        _classCallCheck(this, LoginPageComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.session = session;
        this.customer = new _models_Customer__WEBPACK_IMPORTED_MODULE_0__["Customer"](); // Form İçin Kullanıcı Objesi

        if (session.getToken()) {
          // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
          this.router.navigateByUrl('/main');
        }
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            // Form İle İlgili Validasyonları Belirleme
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
        /** Validasyon için form değerlerine ulaşmayı sağlayan get metodları */

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // Oturum Açma Fonkiyonu
          this.customer = this.loginForm.value; // Eğer form'da herhangi bir validasyon hatası çıkarsa işlem yapılmaz!

          if (this.loginForm.invalid) {
            alert('Zorunlu Alanları Doldurun!');
            return;
          }

          this.session.login(this.customer.username, this.customer.password);
        }
      }, {
        key: "username",
        get: function get() {
          return this.loginForm.get('username');
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get('password');
        }
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]));
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-LoginPage"]],
      decls: 24,
      vars: 18,
      consts: [[1, "container-sm"], [1, "login-container"], [3, "formGroup", "ngSubmit"], ["for", "username"], ["type", "text", "formControlName", "username", "required", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["for", "password"], ["type", "password", "formControlName", "password", "required", "", 1, "form-control"], [1, "btn", "btn-primary", "btn-lg", "btn-block"], ["routerLink", "/register", 1, "btn", "btn-link", "btn-lg", "btn-block"], [1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginPageComponent_div_10_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginPageComponent_div_16_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 8, "login.login"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 10, "login.username"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.username.errors && (ctx.username.dirty || ctx.username.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 12, "login.password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password.errors && (ctx.password.dirty || ctx.password.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 14, "login.login"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 16, "login.register"), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0xvZ2luUGFnZS9Mb2dpblBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-LoginPage',
          templateUrl: './LoginPage.component.html',
          styleUrls: ['./LoginPage.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/MainPage/MainPage.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/MainPage/MainPage.component.ts ***!
    \******************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppPagesMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_TransferService_TransferService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/TransferService/TransferService.service */
    "./src/app/services/TransferService/TransferService.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/SessionService/SessionService.service */
    "./src/app/services/SessionService/SessionService.service.ts");
    /* harmony import */


    var _components_AccountCard_AccountCard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/AccountCard/AccountCard.component */
    "./src/app/components/AccountCard/AccountCard.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/myCurrency/myCurrency.pipe */
    "./src/app/pipes/myCurrency/myCurrency.pipe.ts");
    /* harmony import */


    var _pipes_absoluteValue_absoluteValue_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../pipes/absoluteValue/absoluteValue.pipe */
    "./src/app/pipes/absoluteValue/absoluteValue.pipe.ts");

    function MainPageComponent_div_14_tr_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "myCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](transfer_r5.cSendAccountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](transfer_r5.cReceiveAccountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, transfer_r5.amount), " ", transfer_r5.cSendAccountCurrency, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](transfer_r5.description);
      }
    }

    function MainPageComponent_div_14_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "myCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "absoluteValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](transfer_r6.cSendAccountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](transfer_r6.cReceiveAccountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, transfer_r6.amount)), " ", transfer_r6.cSendAccountCurrency, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](transfer_r6.description);
      }
    }

    function MainPageComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MainPageComponent_div_14_tr_16_Template, 10, 7, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MainPageComponent_div_14_tr_17_Template, 11, 9, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, "transfer.sendAccountNumber"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, "transfer.receiveAccountNumber"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 10, "account.amount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 12, "transfer.description"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.sendTransfers);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.receiveTransfers);
      }
    }

    function MainPageComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "transfer.noActivities"));
      }
    }

    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent(router, session) {
        _classCallCheck(this, MainPageComponent);

        this.router = router;
        this.session = session;

        if (!session.getToken()) {
          // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
          this.router.navigateByUrl('/login');
        } else {
          this.getFirst(session.getToken());
        }
      }

      _createClass(MainPageComponent, [{
        key: "getFirst",
        value: function getFirst(username) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.username = this.session.getToken(); // Token'dan kullanıcı ismi alınıp "username" değişkenine kaydedilir.

                    _context7.next = 3;
                    return Object(src_app_services_TransferService_TransferService_service__WEBPACK_IMPORTED_MODULE_2__["userSendTransfers"])(username).then( // Kullanıcının gönderdiği transferler "accountSendTransfers" değişkenine kaydedilir.
                    function (resolve) {
                      return _this8.sendTransfers = resolve;
                    });

                  case 3:
                    _context7.next = 5;
                    return Object(src_app_services_TransferService_TransferService_service__WEBPACK_IMPORTED_MODULE_2__["userReceiveTransfers"])(username).then( // Kullanıcının aldığı transferler "accountReceiveTransfers" değişkenine kaydedilir.
                    function (resolve) {
                      return _this8.receiveTransfers = resolve;
                    });

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
      return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]));
    };

    MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MainPageComponent,
      selectors: [["app-MainPage"]],
      decls: 30,
      vars: 20,
      consts: [[1, "main"], [1, "container-sm"], [1, "row"], [1, "col-10"], [4, "ngIf", "ngIfElse"], ["noTransfer", ""], [1, "col-2"], [1, "table", "table-bordered"], [1, "thead-dark"], [4, "ngFor", "ngForOf"]],
      template: function MainPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-AccountCard");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MainPageComponent_div_14_Template, 18, 14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MainPageComponent_ng_template_15_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, "sidebar.accounts"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 10, "transfer.lastActivities"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sendTransfers.length !== 0 || ctx.receiveTransfers.length !== 0)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 12, "exchangeRate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 14, "account.currency.dolar"), ": 6 TL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 16, "account.currency.euro"), ": 7 TL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 18, "account.currency.gold"), ": 390 TL");
        }
      },
      directives: [_components_AccountCard_AccountCard_component__WEBPACK_IMPORTED_MODULE_5__["AccountCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_8__["MyCurrencyPipe"], _pipes_absoluteValue_absoluteValue_pipe__WEBPACK_IMPORTED_MODULE_9__["AbsoluteValuePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL01haW5QYWdlL01haW5QYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-MainPage',
          templateUrl: './MainPage.component.html',
          styleUrls: ['./MainPage.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/RegisterPage/RegisterPage.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/RegisterPage/RegisterPage.component.ts ***!
    \**************************************************************/

  /*! exports provided: RegisterPageComponent */

  /***/
  function srcAppPagesRegisterPageRegisterPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function () {
      return RegisterPageComponent;
    });
    /* harmony import */


    var _models_Customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../models/Customer */
    "./src/app/models/Customer.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/SessionService/SessionService.service */
    "./src/app/services/SessionService/SessionService.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function RegisterPageComponent_div_10_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "login.errors.usernameRequired"), " ");
      }
    }

    function RegisterPageComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterPageComponent_div_10_p_1_Template, 3, 3, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.username.errors.required);
      }
    }

    function RegisterPageComponent_div_16_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "login.errors.passwordRequired"), " ");
      }
    }

    function RegisterPageComponent_div_16_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "login.errors.passwordMin"), " ");
      }
    }

    function RegisterPageComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterPageComponent_div_16_p_1_Template, 3, 3, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterPageComponent_div_16_p_2_Template, 3, 3, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.password.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.password.errors.minlength);
      }
    }

    var RegisterPageComponent = /*#__PURE__*/function () {
      function RegisterPageComponent(formBuilder, route, router, session) {
        _classCallCheck(this, RegisterPageComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.session = session;
        this.customer = new _models_Customer__WEBPACK_IMPORTED_MODULE_0__["Customer"](); // Form İçin Kullanıcı Objesi

        if (session.getToken()) {
          // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
          this.router.navigateByUrl('/main');
        }
      }

      _createClass(RegisterPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.formBuilder.group({
            // Form İle İlgili Validasyonları Belirleme
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
          });
        }
        /** Validasyon için form değerlerine ulaşmayı sağlayan get metodları */

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // Kullanıcı Kaydı Fonksiyonu
          this.customer = this.registerForm.value; // Eğer form'da herhangi bir validasyon hatası çıkarsa işlem yapılmaz!

          if (this.registerForm.invalid) {
            alert('Zorunlu Alanları Doldurun!');
            return;
          }

          this.session.register(this.customer.username, this.customer.password);
        }
      }, {
        key: "username",
        get: function get() {
          return this.registerForm.get('username');
        }
      }, {
        key: "password",
        get: function get() {
          return this.registerForm.get('password');
        }
      }]);

      return RegisterPageComponent;
    }();

    RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) {
      return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]));
    };

    RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterPageComponent,
      selectors: [["app-RegisterPage"]],
      decls: 24,
      vars: 18,
      consts: [[1, "container-sm"], [1, "login-container"], [3, "formGroup", "ngSubmit"], ["for", "username"], ["type", "text", "formControlName", "username", "required", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["for", "password"], ["type", "password", "formControlName", "password", "required", "", "minlength", "6", 1, "form-control"], [1, "btn", "btn-primary", "btn-lg", "btn-block"], ["routerLink", "/login", 1, "btn", "btn-link", "btn-lg", "btn-block"], [1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function RegisterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RegisterPageComponent_div_10_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RegisterPageComponent_div_16_Template, 3, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 8, "login.register"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 10, "login.username"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.username.errors && (ctx.username.dirty || ctx.username.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 12, "login.password"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password.errors && (ctx.password.dirty || ctx.password.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 14, "login.register"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 16, "login.login"), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1JlZ2lzdGVyUGFnZS9SZWdpc3RlclBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-RegisterPage',
          templateUrl: './RegisterPage.component.html',
          styleUrls: ['./RegisterPage.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/TransfersPage/TransfersPage.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/TransfersPage/TransfersPage.component.ts ***!
    \****************************************************************/

  /*! exports provided: TransfersPageComponent */

  /***/
  function srcAppPagesTransfersPageTransfersPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransfersPageComponent", function () {
      return TransfersPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/AccountService/AccountService.service */
    "./src/app/services/AccountService/AccountService.service.ts");
    /* harmony import */


    var _services_TransferService_TransferService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/TransferService/TransferService.service */
    "./src/app/services/TransferService/TransferService.service.ts");
    /* harmony import */


    var _models_Transfer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../models/Transfer */
    "./src/app/models/Transfer.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/SessionService/SessionService.service */
    "./src/app/services/SessionService/SessionService.service.ts");
    /* harmony import */


    var _services_CurrencyConverter_CurrencyConverter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../services/CurrencyConverter/CurrencyConverter.service */
    "./src/app/services/CurrencyConverter/CurrencyConverter.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../pipes/myCurrency/myCurrency.pipe */
    "./src/app/pipes/myCurrency/myCurrency.pipe.ts");
    /* harmony import */


    var _pipes_absoluteValue_absoluteValue_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../pipes/absoluteValue/absoluteValue.pipe */
    "./src/app/pipes/absoluteValue/absoluteValue.pipe.ts");

    function TransfersPageComponent_div_7_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "myCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transfer_r7.cSendAccountName);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transfer_r7.cSendAccountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transfer_r7.cReceiveAccountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transfer_r7.cSendAccountCurrency);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 7, transfer_r7.amount));

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transfer_r7.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transfer_r7.date);
      }
    }

    function TransfersPageComponent_div_7_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "myCurrency");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "absoluteValue");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var transfer_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transfer_r8.cSendAccountName);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transfer_r8.cSendAccountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transfer_r8.cReceiveAccountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transfer_r8.cSendAccountCurrency);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 9, transfer_r8.amount)), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transfer_r8.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transfer_r8.date);
      }
    }

    function TransfersPageComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, TransfersPageComponent_div_7_tr_25_Template, 16, 9, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, TransfersPageComponent_div_7_tr_26_Template, 17, 11, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 9, "transfer.sendAccountName"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 11, "transfer.sendAccountNumber"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 13, "transfer.receiveAccountNumber"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 15, "account.currency.title"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 17, "account.amount"));

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 19, "transfer.description"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 21, "account.date"));

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.sendTransfers);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.receiveTransfers);
      }
    }

    function TransfersPageComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "transfer.noTransfers"), " ");
      }
    }

    function TransfersPageComponent_ng_template_18_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var account_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", account_r17.accountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate6"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 7, "account.accountNumber"), " ", account_r17.accountNumber, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 9, "account.accountNumber"), " ", account_r17.amount, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 11, "account.currency.title"), " ", account_r17.currency, " ");
      }
    }

    function TransfersPageComponent_ng_template_18_div_11_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "transfer.modal.errors.sendRequired"), " ");
      }
    }

    function TransfersPageComponent_ng_template_18_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransfersPageComponent_ng_template_18_div_11_p_1_Template, 3, 3, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r11.cSendAccountNumber.errors.required);
      }
    }

    function TransfersPageComponent_ng_template_18_div_18_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var account_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", account_r20.accountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate6"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 7, "account.accountNumber"), " ", account_r20.accountNumber, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 9, "account.accountNumber"), " ", account_r20.amount, ", ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 11, "account.currency.title"), " ", account_r20.currency, " ");
      }
    }

    function TransfersPageComponent_ng_template_18_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "select", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransfersPageComponent_ng_template_18_div_18_option_2_Template, 5, 13, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r12.accounts);
      }
    }

    function TransfersPageComponent_ng_template_18_ng_template_19_div_1_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "transfer.modal.errors.receiveRequired"), " ");
      }
    }

    function TransfersPageComponent_ng_template_18_ng_template_19_div_1_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "transfer.modal.errors.numberMin"), " ");
      }
    }

    function TransfersPageComponent_ng_template_18_ng_template_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransfersPageComponent_ng_template_18_ng_template_19_div_1_p_1_Template, 3, 3, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransfersPageComponent_ng_template_18_ng_template_19_div_1_p_2_Template, 3, 3, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r21.cReceiveAccountNumber.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r21.cReceiveAccountNumber.errors.min);
      }
    }

    function TransfersPageComponent_ng_template_18_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransfersPageComponent_ng_template_18_ng_template_19_div_1_Template, 3, 2, "div", 19);
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.cReceiveAccountNumber.errors && (ctx_r14.cReceiveAccountNumber.dirty || ctx_r14.cReceiveAccountNumber.touched));
      }
    }

    function TransfersPageComponent_ng_template_18_div_25_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "account.modal.errors.amountRequired"), " ");
      }
    }

    function TransfersPageComponent_ng_template_18_div_25_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "account.modal.errors.amountMin"), " ");
      }
    }

    function TransfersPageComponent_ng_template_18_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransfersPageComponent_ng_template_18_div_25_p_1_Template, 3, 3, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransfersPageComponent_ng_template_18_div_25_p_2_Template, 3, 3, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.amount.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.amount.errors.min);
      }
    }

    function TransfersPageComponent_ng_template_18_div_30_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "transfer.modal.errors.descriptionRequired"), " ");
      }
    }

    function TransfersPageComponent_ng_template_18_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransfersPageComponent_ng_template_18_div_30_p_1_Template, 3, 3, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.description.errors.required);
      }
    }

    function TransfersPageComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "form", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function TransfersPageComponent_ng_template_18_Template_form_ngSubmit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          return ctx_r27.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "select", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, TransfersPageComponent_ng_template_18_option_10_Template, 5, 13, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TransfersPageComponent_ng_template_18_div_11_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, TransfersPageComponent_ng_template_18_div_18_Template, 3, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, TransfersPageComponent_ng_template_18_ng_template_19_Template, 2, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, TransfersPageComponent_ng_template_18_div_25_Template, 3, 2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, TransfersPageComponent_ng_template_18_div_30_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 14, ctx_r4.getParamFromURL()), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r4.transferForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 16, "transfer.sendAccountNumber"), " * ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.accounts);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.cSendAccountNumber.errors && (ctx_r4.cSendAccountNumber.dirty || ctx_r4.cSendAccountNumber.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 18, "account.modal.errors.currencyConvertion"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 20, "transfer.receiveAccountNumber"), " * ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.getParamFromURL() === "Virman")("ngIfElse", _r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 22, "account.amount"), " *");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.amount.errors && (ctx_r4.amount.dirty || ctx_r4.amount.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 24, "transfer.description"), " * ");

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.description.errors && (ctx_r4.description.dirty || ctx_r4.description.touched));

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 26, "transfer.modal.add"), " ");
      }
    }

    var TransfersPageComponent = /*#__PURE__*/function () {
      function TransfersPageComponent(formBuilder, route, router, session, transferSErvice, accountService, currencyService, modalService) {
        _classCallCheck(this, TransfersPageComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.session = session;
        this.transferSErvice = transferSErvice;
        this.accountService = accountService;
        this.currencyService = currencyService;
        this.modalService = modalService;
        this.newTransfer = new _models_Transfer__WEBPACK_IMPORTED_MODULE_3__["Transfer"](); // Form İçin Transfer Objesi Tanımlama

        this.rate = 15; // Faiz Oranı

        this.now = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'dd/MM/yyyy', 'en'); // Kayıt Tarihi İçin Tutulan Değişken

        if (!session.getToken()) {
          // Eğer giriş yapan kullanıcı yoksa Login sayfasına yönlendirir.
          this.router.navigateByUrl('/login');
        } else {
          this.getFirst(session.getToken());
        }
      }

      _createClass(TransfersPageComponent, [{
        key: "getFirst",
        value: function getFirst(username) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.username = this.session.getToken(); // Token'dan kullanıcı ismi alınıp "username" değişkenine kaydedilir.

                    _context8.next = 3;
                    return Object(src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_1__["userAccounts"])(username).then( // Kullanıcının hesapları "accounts" değişkenine kaydedilir.
                    function (resolve) {
                      return _this9.accounts = resolve;
                    });

                  case 3:
                    _context8.next = 5;
                    return Object(_services_TransferService_TransferService_service__WEBPACK_IMPORTED_MODULE_2__["userSendTransfers"])(username).then( // Kullanıcının gönderdiği transferler "accountSendTransfers" değişkenine kaydedilir.
                    function (resolve) {
                      return _this9.sendTransfers = resolve;
                    });

                  case 5:
                    _context8.next = 7;
                    return Object(_services_TransferService_TransferService_service__WEBPACK_IMPORTED_MODULE_2__["userReceiveTransfers"])(username).then( // Kullanıcının aldığı transferler "accountReceiveTransfers" değişkenine kaydedilir.
                    function (resolve) {
                      return _this9.receiveTransfers = resolve;
                    });

                  case 7:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.transferForm = this.formBuilder.group({
            // Form İle İlgili Validasyonları Belirleme
            cSendAccountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]],
            cReceiveAccountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
        }
        /** Validasyon için form değerlerine ulaşmayı sağlayan get metodları */

      }, {
        key: "open",
        value: function open(content, transferType) {
          var _this10 = this;

          // Transfer Ekleme Modal'ını Açma
          this.addParamToURL(transferType);
          this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this10.closeResult = "Closed with: ".concat(result);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var customerSendAccount, customerReceiveAccount, convertMoney, customerSendKey, customerReceiveKey;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    // Transfer Ekleme Fonksiyonu
                    this.newTransfer = this.transferForm.value;
                    console.log(this.newTransfer); // Eğer form'da herhangi bir validasyon hatası çıkarsa işlem yapılmaz!

                    if (!this.transferForm.invalid) {
                      _context9.next = 5;
                      break;
                    }

                    alert('Zorunlu Alanları Doldurun!');
                    return _context9.abrupt("return");

                  case 5:
                    _context9.next = 7;
                    return Object(src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_1__["getAccount"])(this.username, this.newTransfer.cSendAccountNumber).then(function (response) {
                      console.log(response);
                      customerSendAccount = response[0];
                    });

                  case 7:
                    if (!(this.getParamFromURL() === 'Virman')) {
                      _context9.next = 13;
                      break;
                    }

                    // Eğer hesap türü "Virman" ise alıcı hesabı bilgisi kullanıcın diğer hesaplarından seçilir.
                    console.log('virman');
                    _context9.next = 11;
                    return Object(src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_1__["getAccount"])(this.username, this.newTransfer.cReceiveAccountNumber).then(function (response) {
                      customerReceiveAccount = response[0];
                    });

                  case 11:
                    _context9.next = 15;
                    break;

                  case 13:
                    _context9.next = 15;
                    return Object(src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_1__["getAccountAnotherUser"])(this.username, this.newTransfer.cReceiveAccountNumber).then(function (response) {
                      if (response.length === 0) {
                        alert('Alan Kullanıcı Hesabı Bulunamadı!');
                        return;
                      } else {
                        customerReceiveAccount = response[0];
                      }
                    })["catch"](function (error) {
                      return console.log(error);
                    });

                  case 15:
                    if (!(customerReceiveAccount !== null)) {
                      _context9.next = 28;
                      break;
                    }

                    // Eğer alıcı hesap bilgisi doğru ise;
                    convertMoney = this.currencyService.convertForAddTransfer( // Para dönüşümü yapılır.
                    customerSendAccount.currency, customerReceiveAccount.currency, this.newTransfer.amount);

                    if (!(this.newTransfer.amount > customerSendAccount.amount)) {
                      _context9.next = 22;
                      break;
                    }

                    // Bakiye'nin yeterli olup olmadığı kontrol edilir.
                    alert('Paranın Çekileceği Hesabınızda Yeterli Bakiye Yok!');
                    return _context9.abrupt("return");

                  case 22:
                    _context9.next = 24;
                    return Object(src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_1__["getAccountKey"])(customerSendAccount.accountNumber).then(function (response) {
                      customerSendKey = response[0];
                    });

                  case 24:
                    _context9.next = 26;
                    return Object(src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_1__["getAccountKey"])(customerReceiveAccount.accountNumber).then(function (response) {
                      customerReceiveKey = response[0];
                    });

                  case 26:
                    this.accountService.updateAccountByTransfer( // Hesaplara gerekli parasal güncellemeler yapılır.
                    customerSendKey, customerReceiveKey, customerSendAccount.amount - this.newTransfer.amount, customerReceiveAccount.amount + convertMoney);
                    this.transferSErvice.addTransfer( // Transfer Eklenir.
                    this.getParamFromURL(), this.username, customerSendAccount.accountName, customerSendAccount.accountNumber, customerSendAccount.amount - this.newTransfer.amount, customerSendAccount.currency, customerReceiveAccount.customerName, customerReceiveAccount.accountName, customerReceiveAccount.accountNumber, customerReceiveAccount.amount + convertMoney, -this.newTransfer.amount, this.newTransfer.description, this.now);

                  case 28:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "addParamToURL",
        value: function addParamToURL(transferType) {
          // Form'da gerekli yerleri değiştirmek için transfer türünü url'e ekleme fonksiyonu
          this.router.navigate([], {
            queryParams: {
              transferType: transferType
            },
            queryParamsHandling: 'merge'
          });
        }
      }, {
        key: "getParamFromURL",
        value: function getParamFromURL() {
          // Form'da gerekli yerleri değiştirmek için transfer türünü url'den alma fonksiyonu
          var transferType;
          this.route.queryParams.subscribe(function (params) {
            transferType = params['transferType'];
          });
          return transferType;
        }
      }, {
        key: "cSendAccountNumber",
        get: function get() {
          return this.transferForm.get('cSendAccountNumber');
        }
      }, {
        key: "cReceiveAccountNumber",
        get: function get() {
          return this.transferForm.get('cReceiveAccountNumber');
        }
      }, {
        key: "amount",
        get: function get() {
          return this.transferForm.get('amount');
        }
      }, {
        key: "description",
        get: function get() {
          return this.transferForm.get('description');
        }
      }]);

      return TransfersPageComponent;
    }();

    TransfersPageComponent.ɵfac = function TransfersPageComponent_Factory(t) {
      return new (t || TransfersPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_TransferService_TransferService_service__WEBPACK_IMPORTED_MODULE_2__["TransferService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_CurrencyConverter_CurrencyConverter_service__WEBPACK_IMPORTED_MODULE_9__["CurrencyConverterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]));
    };

    TransfersPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: TransfersPageComponent,
      selectors: [["app-TransfersPage"]],
      decls: 20,
      vars: 11,
      consts: [[1, "main"], [1, "container-sm"], [1, "row"], [1, "col-10"], [4, "ngIf", "ngIfElse"], ["noTransfer", ""], [1, "col-2"], [1, "btn", "btn-lg", "btn-primary", 3, "click"], ["addTransfer", ""], [1, "table", "table-bordered"], [1, "thead-dark"], [4, "ngFor", "ngForOf"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], ["for", "cSendAccountNumber"], ["formControlName", "cSendAccountNumber", 1, "custom-select", "custom-select-lg", "mb-3"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-info"], ["for", "cReceiveAccountNumber"], ["havaleBlock", ""], ["for", "amount"], ["type", "number", "formControlName", "amount", "min", "1", 1, "form-control"], ["for", "description"], ["type", "text", "formControlName", "description", 1, "form-control"], [1, "form-group"], [1, "btn", "btn-primary", "btn-lg", "btn-block"], [3, "value"], [1, "alert", "alert-danger"], [4, "ngIf"], ["formControlName", "cReceiveAccountNumber", 1, "custom-select", "custom-select-lg", "mb-3"], ["type", "number", "formControlName", "cReceiveAccountNumber", "required", "", 1, "form-control"]],
      template: function TransfersPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TransfersPageComponent_div_7_Template, 27, 23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TransfersPageComponent_ng_template_8_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransfersPageComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);

            return ctx.open(_r3, "Virman");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransfersPageComponent_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);

            return ctx.open(_r3, "Havale");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, TransfersPageComponent_ng_template_18_Template, 35, 28, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, "sidebar.transfers"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sendTransfers.length !== 0 || ctx.receiveTransfers.length !== 0)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 7, "transfer.modal.virman"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 9, "transfer.modal.havale"), " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], _pipes_myCurrency_myCurrency_pipe__WEBPACK_IMPORTED_MODULE_12__["MyCurrencyPipe"], _pipes_absoluteValue_absoluteValue_pipe__WEBPACK_IMPORTED_MODULE_13__["AbsoluteValuePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1RyYW5zZmVyc1BhZ2UvVHJhbnNmZXJzUGFnZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](TransfersPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
          selector: 'app-TransfersPage',
          templateUrl: './TransfersPage.component.html',
          styleUrls: ['./TransfersPage.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: src_app_services_SessionService_SessionService_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          type: _services_TransferService_TransferService_service__WEBPACK_IMPORTED_MODULE_2__["TransferService"]
        }, {
          type: src_app_services_AccountService_AccountService_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
        }, {
          type: _services_CurrencyConverter_CurrencyConverter_service__WEBPACK_IMPORTED_MODULE_9__["CurrencyConverterService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/absoluteValue/absoluteValue.pipe.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pipes/absoluteValue/absoluteValue.pipe.ts ***!
    \***********************************************************/

  /*! exports provided: AbsoluteValuePipe */

  /***/
  function srcAppPipesAbsoluteValueAbsoluteValuePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbsoluteValuePipe", function () {
      return AbsoluteValuePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AbsoluteValuePipe = /*#__PURE__*/function () {
      function AbsoluteValuePipe() {
        _classCallCheck(this, AbsoluteValuePipe);
      }

      _createClass(AbsoluteValuePipe, [{
        key: "transform",
        // Negatif değerleri pozitif değerlere dönüştürme işlemi
        value: function transform(value, args) {
          return value < 0 ? Math.abs(value) : value;
        }
      }]);

      return AbsoluteValuePipe;
    }();

    AbsoluteValuePipe.ɵfac = function AbsoluteValuePipe_Factory(t) {
      return new (t || AbsoluteValuePipe)();
    };

    AbsoluteValuePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "absoluteValue",
      type: AbsoluteValuePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbsoluteValuePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'absoluteValue'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/myCurrency/myCurrency.pipe.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pipes/myCurrency/myCurrency.pipe.ts ***!
    \*****************************************************/

  /*! exports provided: MyCurrencyPipe */

  /***/
  function srcAppPipesMyCurrencyMyCurrencyPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCurrencyPipe", function () {
      return MyCurrencyPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MyCurrencyPipe = /*#__PURE__*/function () {
      function MyCurrencyPipe() {
        _classCallCheck(this, MyCurrencyPipe);
      }

      _createClass(MyCurrencyPipe, [{
        key: "transform",
        // Nokta'dan sonra 2 basamak gösterme işlemi
        value: function transform(value) {
          var result = Math.round(value * 100) / 100;
          return result;
        }
      }]);

      return MyCurrencyPipe;
    }();

    MyCurrencyPipe.ɵfac = function MyCurrencyPipe_Factory(t) {
      return new (t || MyCurrencyPipe)();
    };

    MyCurrencyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "myCurrency",
      type: MyCurrencyPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCurrencyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'myCurrency'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/AccountService/AccountService.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/services/AccountService/AccountService.service.ts ***!
    \*******************************************************************/

  /*! exports provided: AccountService, getAccountName, userAccounts, userAnotherAccounts, numberOfAccounts, getAccountKey, getAccount, getAccountAnotherUser */

  /***/
  function srcAppServicesAccountServiceAccountServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return AccountService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccountName", function () {
      return getAccountName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userAccounts", function () {
      return userAccounts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userAnotherAccounts", function () {
      return userAnotherAccounts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "numberOfAccounts", function () {
      return numberOfAccounts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccountKey", function () {
      return getAccountKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccount", function () {
      return getAccount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccountAnotherUser", function () {
      return getAccountAnotherUser;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../DexieService/BankApplicationDB */
    "./src/app/services/DexieService/BankApplicationDB.ts");

    var AccountService = /*#__PURE__*/function () {
      function AccountService() {
        _classCallCheck(this, AccountService);
      }

      _createClass(AccountService, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addAccount",
        value: function addAccount( // Hesap Ekleme Fonksiyonu
        customerName, accountName, accountNumber, amount, currency, rate, date) {
          _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].accounts.put({
            customerName: customerName,
            accountName: accountName,
            accountNumber: accountNumber,
            amount: amount,
            currency: currency,
            rate: rate,
            date: date
          }).then(function () {
            alert('Hesap Başarıyla Eklendi.');
            window.location.reload();
          })["catch"](function (error) {
            alert('Hata Oluştu: ' + error);
          });
        }
      }, {
        key: "updateAccount",
        value: function updateAccount(accountID, amount) {
          // Hesap Güncelleme Fonksiyonu
          _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].accounts.update(accountID, {
            amount: amount
          }).then(function (response) {
            console.log('Güncellendi', '-', response);
          })["catch"](function (error) {
            alert('Hata Oluştu: ' + error);
          });
        }
      }, {
        key: "updateAccountByTransfer",
        value: function updateAccountByTransfer( // Transfer Eklerken Hesap Güncelleme Fonksiyonu
        sendId, receiveId, amountSend, amountReceive) {
          _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].accounts.update(sendId, {
            amount: amountSend
          }).then(function (response) {
            _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].accounts.update(receiveId, {
              amount: amountReceive
            }).then(function (response) {
              console.log('Güncellendi, Alıcı', '-', response);
            })["catch"](function (err) {
              return console.log('Alan Kullanıcı Hatası', err);
            });

            console.log('Güncellendi, Gönderen', '-', response);
          })["catch"](function (error) {
            alert('Gönderen Kullanıcı Hatası: ' + error);
          });
        }
      }, {
        key: "deleteAccount",
        value: function deleteAccount(accountID) {
          // Hesap Silme Fonksiyonu
          _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].accounts["delete"](accountID).then(function () {
            alert('Hesap Başarıyla Silindi.');
            window.location.reload();
          })["catch"](function (error) {
            alert('Hata Oluştu: ' + error);
          });
        }
      }]);

      return AccountService;
    }();

    AccountService.ɵfac = function AccountService_Factory(t) {
      return new (t || AccountService)();
    };

    AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AccountService,
      factory: AccountService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    function getAccountName(accountNumber) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].accounts.where('accountNumber').equals(accountNumber).toArray();

              case 2:
                return _context10.abrupt("return", _context10.sent);

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));
    }

    function userAccounts(username) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].accounts.where('customerName').equalsIgnoreCase(username).reverse().toArray();

              case 2:
                return _context11.abrupt("return", _context11.sent);

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));
    }

    function userAnotherAccounts(username) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].accounts.where('customerName').notEqual(username).reverse().toArray();

              case 2:
                return _context12.abrupt("return", _context12.sent);

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }));
    }

    function numberOfAccounts(username) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].accounts.where('customerName').equalsIgnoreCase(username).count();

              case 2:
                return _context13.abrupt("return", _context13.sent);

              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));
    }

    function getAccountKey(accountNumber) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].accounts.where('accountNumber').equals(accountNumber).primaryKeys();

              case 2:
                return _context14.abrupt("return", _context14.sent);

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));
    }

    function getAccount(username, accountNumber) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].accounts.where({
                  customerName: username
                }).and(function (account) {
                  return account.accountNumber == accountNumber;
                }).toArray();

              case 2:
                return _context15.abrupt("return", _context15.sent);

              case 3:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15);
      }));
    }

    function getAccountAnotherUser(username, accountNumber) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].accounts.where({
                  accountNumber: accountNumber
                }).and(function (account) {
                  return account.customerName != username;
                }).toArray();

              case 2:
                return _context16.abrupt("return", _context16.sent);

              case 3:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16);
      }));
    }
    /***/

  },

  /***/
  "./src/app/services/CurrencyConverter/CurrencyConverter.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/services/CurrencyConverter/CurrencyConverter.service.ts ***!
    \*************************************************************************/

  /*! exports provided: CurrencyConverterService */

  /***/
  function srcAppServicesCurrencyConverterCurrencyConverterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyConverterService", function () {
      return CurrencyConverterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CurrencyConverterService = /*#__PURE__*/function () {
      function CurrencyConverterService() {
        _classCallCheck(this, CurrencyConverterService);

        this.currencies = {
          $: 6,
          '€': 7,
          Altın: 390,
          TL: 1
        }; // Her Bir Para Biriminin TL Karşılığı
      }

      _createClass(CurrencyConverterService, [{
        key: "convertForAddAccount",
        value: function convertForAddAccount( // Para Miktarını Girilen Birimlere Göre Çevirme İşlemi
        oldAccountCurrency, newAccountCurrency, newAccountAmount) {
          var rate = this.currencies[newAccountCurrency] / this.currencies[oldAccountCurrency];
          var convertedMoney = newAccountAmount * rate;
          return convertedMoney;
        }
      }, {
        key: "convertForAddTransfer",
        value: function convertForAddTransfer( // Para Miktarını Girilen Birimlere Göre Çevirme İşlemi
        oldAccountCurrency, newAccountCurrency, newAccountAmount) {
          var rate = this.currencies[newAccountCurrency] / this.currencies[oldAccountCurrency];
          var convertedMoney = newAccountAmount / rate;
          return convertedMoney;
        }
      }]);

      return CurrencyConverterService;
    }();

    CurrencyConverterService.ɵfac = function CurrencyConverterService_Factory(t) {
      return new (t || CurrencyConverterService)();
    };

    CurrencyConverterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CurrencyConverterService,
      factory: CurrencyConverterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrencyConverterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/DexieService/BankApplicationDB.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/DexieService/BankApplicationDB.ts ***!
    \************************************************************/

  /*! exports provided: BankApplicationDB, database */

  /***/
  function srcAppServicesDexieServiceBankApplicationDBTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankApplicationDB", function () {
      return BankApplicationDB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "database", function () {
      return database;
    });
    /* harmony import */


    var _models_Transfer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../models/Transfer */
    "./src/app/models/Transfer.ts");
    /* harmony import */


    var _models_Account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/Account */
    "./src/app/models/Account.ts");
    /* harmony import */


    var _models_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/Customer */
    "./src/app/models/Customer.ts");
    /* harmony import */


    var dexie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dexie */
    "./node_modules/dexie/dist/dexie.mjs");

    var BankApplicationDB = /*#__PURE__*/function (_dexie__WEBPACK_IMPOR) {
      _inherits(BankApplicationDB, _dexie__WEBPACK_IMPOR);

      var _super = _createSuper(BankApplicationDB);

      function BankApplicationDB() {
        var _this11;

        _classCallCheck(this, BankApplicationDB);

        _this11 = _super.call(this, 'BankApplicationDB');

        var db = _assertThisInitialized(_this11); // Tabloları Tanımlama


        db.version(1).stores({
          customers: '++id,[&username+password]',
          accounts: '++id,customerName,accountName,&accountNumber,amount,currency,rate,date',
          transfers: '++id,transferType,cSendName,cSendAccountName,cSendAccountNumber,cSendAccountAmount,cSendAccountCurrency,cReceiveName,cReceiveAccountName,cReceiveAccountNumber,cReceiveAccountAmount,amount,description,date'
        }); // Tabloları halihazırdaki model'lere eşitleme

        db.customers.mapToClass(_models_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]);
        db.accounts.mapToClass(_models_Account__WEBPACK_IMPORTED_MODULE_1__["Account"]);
        db.transfers.mapToClass(_models_Transfer__WEBPACK_IMPORTED_MODULE_0__["Transfer"]);
        return _this11;
      }

      return BankApplicationDB;
    }(dexie__WEBPACK_IMPORTED_MODULE_3__["default"]);

    var database = new BankApplicationDB();
    /***/
  },

  /***/
  "./src/app/services/SessionService/SessionService.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/services/SessionService/SessionService.service.ts ***!
    \*******************************************************************/

  /*! exports provided: TOKEN_NAME, SessionService */

  /***/
  function srcAppServicesSessionServiceSessionServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOKEN_NAME", function () {
      return TOKEN_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionService", function () {
      return SessionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../DexieService/BankApplicationDB */
    "./src/app/services/DexieService/BankApplicationDB.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TOKEN_NAME = 'token';

    var SessionService = /*#__PURE__*/function () {
      function SessionService(router) {
        _classCallCheck(this, SessionService);

        this.router = router;
      }

      _createClass(SessionService, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getToken",
        value: function getToken() {
          // Giriş yapan kullanıcının tokenını local storage'dan çekme işlemi
          return localStorage.getItem(TOKEN_NAME);
        }
      }, {
        key: "setToken",
        value: function setToken(token) {
          // Giriş yapan kullanıcının tokenını local storage'a kaydetme işlemi
          // ! Backend olmadığından gerçek bir token yerine kullanıcı adını local storage'a ekliyorum.
          localStorage.setItem(TOKEN_NAME, token);
        }
      }, {
        key: "register",
        value: function register(username, password) {
          var _this12 = this;

          // Kayıt Olma Fonksiyonu
          _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_1__["database"].customers.put({
            username: username,
            password: password
          }).then(function () {
            alert('Kayıt Başarılı'); // Eğer veritabanında böyle bir kullanıcı yoksa yeni kullanıcıyı eklenir ve login sayfasına yönlendirilir.

            _this12.router.navigateByUrl('/login');
          })["catch"](function (error) {
            alert('Bu İsim Kullanılmakta! Başka Bir Kullanıcı Adı Deneyiniz!');
          });
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var _this13 = this;

          // Giriş Yapma Fonksiyonu
          _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_1__["database"].customers.where({
            username: username,
            password: password
          }).toArray().then(function (list) {
            if (list.length === 0) {
              // Eğer bu bilgilere sahip bir kayıtlı kullanıcı yoksa,
              alert('Hatalı Ya Da Eksik Bilgi Girdiniz!');
            } else {
              // Eğer bu bilgilere sahip bir kayıtlı kullanıcı varsa,
              list.forEach(function (item) {
                if (item) {
                  alert('Giriş Başarılı');

                  _this13.setToken(item.username); // Eğer giriş başarılı ise token local storage'a kaydedilir.


                  _this13.router.navigateByUrl('/'); // Ardından Ana Sayfaya yönlendiriyorum.

                }
              });
            }
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "logOut",
        value: function logOut() {
          // Oturumdan Çıkış Fonksiyonu
          localStorage.clear(); // Local Storage'dan token temizlenir.

          window.location.reload(); // Sayfa yenilenerek otomatikman login sayfasına yönlendirilir.
        }
      }]);

      return SessionService;
    }();

    SessionService.ɵfac = function SessionService_Factory(t) {
      return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SessionService,
      factory: SessionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/TransferService/TransferService.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/services/TransferService/TransferService.service.ts ***!
    \*********************************************************************/

  /*! exports provided: TransferService, userSendTransfers, userReceiveTransfers, userTransfersLimitTen, userAccountSendTransfers, userAccountReceiveTransfers */

  /***/
  function srcAppServicesTransferServiceTransferServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferService", function () {
      return TransferService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userSendTransfers", function () {
      return userSendTransfers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userReceiveTransfers", function () {
      return userReceiveTransfers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userTransfersLimitTen", function () {
      return userTransfersLimitTen;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userAccountSendTransfers", function () {
      return userAccountSendTransfers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userAccountReceiveTransfers", function () {
      return userAccountReceiveTransfers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../DexieService/BankApplicationDB */
    "./src/app/services/DexieService/BankApplicationDB.ts");

    var TransferService = /*#__PURE__*/function () {
      function TransferService() {
        _classCallCheck(this, TransferService);
      }

      _createClass(TransferService, [{
        key: "addTransfer",
        value: function addTransfer( // Transfer Ekleme Fonksiyonu
        transferType, cSendName, cSendAccountName, cSendAccountNumber, cSendAccountAmount, cSendAccountCurrency, cReceiveName, cReceiveAccountName, cReceiveAccountNumber, cReceiveAccountAmount, amount, description, date) {
          _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].transfers.put({
            transferType: transferType,
            cSendName: cSendName,
            cSendAccountName: cSendAccountName,
            cSendAccountNumber: cSendAccountNumber,
            cSendAccountAmount: cSendAccountAmount,
            cSendAccountCurrency: cSendAccountCurrency,
            cReceiveName: cReceiveName,
            cReceiveAccountName: cReceiveAccountName,
            cReceiveAccountNumber: cReceiveAccountNumber,
            cReceiveAccountAmount: cReceiveAccountAmount,
            amount: amount,
            description: description,
            date: date
          }).then(function () {
            alert('Transfer Başarıyla Eklendi.');
            window.location.reload();
          })["catch"](function (error) {
            alert('Hata Oluştu: ' + error);
          });
        }
      }]);

      return TransferService;
    }();

    TransferService.ɵfac = function TransferService_Factory(t) {
      return new (t || TransferService)();
    };

    TransferService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TransferService,
      factory: TransferService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TransferService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();

    function userSendTransfers(username) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].transfers.where('cSendName').equalsIgnoreCase(username).reverse().toArray();

              case 2:
                return _context17.abrupt("return", _context17.sent);

              case 3:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17);
      }));
    }

    function userReceiveTransfers(username) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].transfers.where('cReceiveName').equalsIgnoreCase(username).and(function (transfer) {
                  return transfer.cSendName !== username;
                }).reverse().toArray();

              case 2:
                return _context18.abrupt("return", _context18.sent);

              case 3:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18);
      }));
    }

    function userTransfersLimitTen(username) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].transfers.where('cSendName').equalsIgnoreCase(username).reverse().limit(10).toArray();

              case 2:
                return _context19.abrupt("return", _context19.sent);

              case 3:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));
    }

    function userAccountSendTransfers(username, accountNumber) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].transfers.where({
                  cSendName: username
                }).and(function (transfer) {
                  return transfer.cSendAccountNumber == accountNumber;
                }).reverse().toArray();

              case 2:
                return _context20.abrupt("return", _context20.sent);

              case 3:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));
    }

    function userAccountReceiveTransfers(username, accountNumber) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return _DexieService_BankApplicationDB__WEBPACK_IMPORTED_MODULE_2__["database"].transfers.where({
                  cReceiveName: username
                }).and(function (transfer) {
                  return transfer.cReceiveAccountNumber == accountNumber;
                }).reverse().toArray();

              case 2:
                return _context21.abrupt("return", _context21.sent);

              case 3:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }));
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Berat\Documents\GitHub\bank-application\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map