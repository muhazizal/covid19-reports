/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([21,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(8);
            var content = __webpack_require__(9);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700&display=swap);"]);
// Module
exports.push([module.i, ":root {\r\n  --bg-color: #f8f4ff;\r\n  --font-color: #303663;\r\n  --font-hover-color: #6b77c5;\r\n  --card-shadow-color: #9db1ac;\r\n  --text-link-color: #227965;\r\n  font-size: 62.5%;\r\n}\r\n\r\n* { box-sizing: border-box; }\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  text-align: center;\r\n  font-family: 'Hind', sans-serif;\r\n  font-size: 1.6rem;\r\n  color: var(--font-color);\r\n  background-color: var(--bg-color);\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(bootstrap) {/* harmony import */ var _assets_github_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _assets_instagram_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _assets_twitter_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Navbar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Navbar, _HTMLElement);

  var _super = _createSuper(Navbar);

  function Navbar() {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }

  _createClass(Navbar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var github = 'github-icon.png';
      var instagram = 'instagram-icon.png';
      var twitter = 'twitter-icon.png';
      this.shadowDOM.innerHTML = "\n      <style>\n        ".concat(bootstrap, "\n        .container-fluid { border-bottom: 1px solid var(--font-color) }\n        \n        .navbar {\n          padding: 1.5rem 0rem;\n        }\n\n        .navbar-brand {\n          color: var(--font-color);\n          font-size: 2.4rem;\n          font-weight: 600;\n        }\n\n        .navbar-brand:hover { color: var(--font-hover-color) }\n\n        img { width: 50%; }\n      </style>\n\n      <section class=\"container-fluid\">\n        <nav class=\"navbar navbar-expand-lg justify-content-center\">\n          <a class=\"navbar-brand mr-auto\" href=\"#\">COVID-19</a>\n          <ul class=\"navbar-nav ml-auto flex-row\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://github.com/muhazizal\" target=\"_blank\">\n                <img src=\"").concat(github, "\" alt=\"Github Creator\" title=\"Github Creator\">\n              </a>\n            </li>\n\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://www.instagram.com/muhazizal/\" target=\"_blank\">\n                <img src=\"").concat(instagram, "\" alt=\"Instagram Creator\" title=\"Instagram Creator\">\n              </a>\n            </li>\n            \n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://twitter.com/muhazizal\" target=\"_blank\">\n                <img src=\"").concat(twitter, "\" alt=\"Twitter Creator\" title=\"Twitter Creator\">\n              </a>\n            </li>\n          </ul>\n        </nav>\n      </section>\n    ");
    }
  }]);

  return Navbar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('navbar-app', Navbar);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ("data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiZ2l0aHViLWljb24ucG5nIjs=");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ("data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiaW5zdGFncmFtLWljb24ucG5nIjs=");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ("data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAidHdpdHRlci1pY29uLnBuZyI7");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(bootstrap) {/* harmony import */ var _assets_reports_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Title = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Title, _HTMLElement);

  var _super = _createSuper(Title);

  function Title() {
    var _this;

    _classCallCheck(this, Title);

    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }

  _createClass(Title, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var reportsImg = 'reports.svg';
      this.shadowDOM.innerHTML = "\n      <style>\n        ".concat(bootstrap, "\n        .container { width: 90%; }\n\n        .title-desc,\n        .title-img {\n          margin-top: 5rem;\n        }\n\n        .title-desc { margin: 5rem auto 0 auto; }\n        .title-desc h1 { font-size: 3.2rem; }\n        .title-desc p { margin: 1.5rem auto 0 auto; }\n        img { width: 60%; }\n\n        @media (min-width: 768px) {\n          .title-desc { width: 80%; }\n          img { max-width: 375px !important; }\n        }\n\n        @media (min-width: 992px) {\n          .container { max-width: 960px; }\n\n          .title-desc {\n            margin: auto auto auto 0;\n            text-align: left;\n          }\n\n          .title-desc h1,\n          .title-desc p {\n            width: 50%;\n            margin: auto;\n          }\n          \n          .title-desc p { margin-top: 1.5rem; }\n        }\n      </style>\n\n      <section class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-lg-6 title-desc\">\n            <h1>Coronavirus Global Reports</h1>\n            <p>\n              Here is infected, death, or recovered patients report for coronavirus (COVID-19)\n              that has been recorded from the whole world (Up to Date).\n            </p>\n          </div>\n          \n          <figure class=\"col-xs-12 col-lg-6 title-img\">\n            <img src=\"").concat(reportsImg, "\" class=\"img-fluid\" alt=\"Global Reports\">\n          </figure>\n        </div>\n      </section>\n    ");
    }
  }]);

  return Title;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('title-app', Title);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ("data:image/svg+xml;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAicmVwb3J0cy5zdmciOw==");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(bootstrap) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var GlobalReports = /*#__PURE__*/function (_HTMLElement) {
  _inherits(GlobalReports, _HTMLElement);

  var _super = _createSuper(GlobalReports);

  function GlobalReports() {
    var _this;

    _classCallCheck(this, GlobalReports);

    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }

  _createClass(GlobalReports, [{
    key: "renderError",
    value: function renderError(message) {
      this.shadowDOM.innerHTML = "\n      <style>\n        ".concat(bootstrap, "\n      </style>\n\n      <div class=\"container\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <strong>").concat(message, "</strong>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "renderSuccess",
    value: function renderSuccess() {
      this.shadowDOM.innerHTML = "\n      <style>\n        ".concat(bootstrap, "\n        .container { width: 90%; }\n\n        .card {\n          width: 12.5rem;\n          margin: 1rem;\n          font-size: 2rem;\n        }\n        \n        p { letter-spacing: 1px; }\n\n        @media (min-width: 576px) {\n          .card { margin: 1rem 1.5rem; }\n        }\n\n        @media (min-width: 768px) {\n          .card {\n            width: 17.5rem;\n            margin: 1rem 2rem;\n          }\n        }\n\n        @media (min-width: 992px) {\n          .card { \n            width: 19.65rem;\n            margin: 1rem 2.5rem; \n          }\n        }\n      </style>\n\n      <section class=\"container my-5\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-xs-4\">\n            <div class=\"card bg-warning text-white\">\n              <div class=\"card-body\">\n                <h2>Confirmed</h2>\n                <p>").concat(this._reports.confirmed.value, "</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-xs-4\">\n            <div class=\"card bg-success text-white\">\n              <div class=\"card-body\">\n                <h2>Recovered</h2>\n                <p>").concat(this._reports.recovered.value, "</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-xs-4\">\n            <div class=\"card bg-danger text-white\">\n              <div class=\"card-body\">\n                <h2>Deaths</h2>\n                <p>").concat(this._reports.deaths.value, "</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    ");
    }
  }, {
    key: "reports",
    set: function set(reports) {
      this._reports = reports;
      this.renderSuccess();
    }
  }]);

  return GlobalReports;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('global-reports-app', GlobalReports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(bootstrap) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Searchbar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Searchbar, _HTMLElement);

  var _super = _createSuper(Searchbar);

  function Searchbar() {
    var _this;

    _classCallCheck(this, Searchbar);

    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }

  _createClass(Searchbar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowDOM.innerHTML = "\n      <style>\n        ".concat(bootstrap, "\n        .container { width: 90%; }\n        .form-inline { flex-wrap: nowrap; }\n\n        .form-control {\n          width: 100% !important;\n          padding: 2.5rem 1.5rem;\n          margin-right: 0.5rem;\n          font-size: 1.4rem;\n        }\n\n        .btn {\n          padding: 1.45rem 2.5rem;\n          font-size: 1.4rem;\n          font-weight: 600;\n        }\n\n        @media (min-width: 992px) {\n          .container { max-width: 720px; }\n        }\n      </style>\n      \n      <div class=\"container\">\n        <form class=\"form-inline my-5\">\n          <input class=\"form-control\" type=\"search\" id=\"searchElement\" placeholder=\"Search your country\" aria-label=\"Search\">\n          <button class=\"btn btn-outline-primary my-sm-0\" id=\"searchBtnElement\" type=\"submit\">Search</button>\n        </form>\n      </div>\n    ");
      this.shadowDOM.querySelector('#searchBtnElement').addEventListener('click', function (event) {
        event.preventDefault();
      });
      this.shadowDOM.querySelector('#searchBtnElement').addEventListener('click', this._clickEvent);
    }
  }, {
    key: "clickEvent",
    set: function set(event) {
      this._clickEvent = event;
      this.render();
    }
  }, {
    key: "value",
    get: function get() {
      return this.shadowDOM.querySelector('#searchElement').value;
    }
  }]);

  return Searchbar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('searchbar-app', Searchbar);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(bootstrap) {/* harmony import */ var _country_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _country_item__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_country_item__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CountryList = /*#__PURE__*/function (_HTMLElement) {
  _inherits(CountryList, _HTMLElement);

  var _super = _createSuper(CountryList);

  function CountryList() {
    var _this;

    _classCallCheck(this, CountryList);

    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }

  _createClass(CountryList, [{
    key: "renderError",
    value: function renderError(message) {
      this.shadowDOM.innerHTML = "\n      <style>\n        ".concat(bootstrap, "\n      </style>\n      \n      <div class=\"container\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          <strong>").concat(message, "</strong>\n        </div>\n      </div>\n    ");
    }
  }, {
    key: "renderSuccess",
    value: function renderSuccess() {
      this.shadowDOM.innerHTML = "";
      var countryItemElement = document.createElement('country-item');
      countryItemElement.country = this._countries;
      this.shadowDOM.appendChild(countryItemElement);
    }
  }, {
    key: "countries",
    set: function set(countries) {
      this._countries = countries;
      this.renderSuccess();
    }
  }]);

  return CountryList;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('country-list', CountryList);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(bootstrap) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CountryItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(CountryItem, _HTMLElement);

  var _super = _createSuper(CountryItem);

  function CountryItem() {
    var _this;

    _classCallCheck(this, CountryItem);

    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }

  _createClass(CountryItem, [{
    key: "render",
    value: function render() {
      this.shadowDOM.innerHTML = "\n      <style>\n        ".concat(bootstrap, "\n        .container {\n          width: 90%;\n          margin-bottom: 5rem;\n        }\n\n        .card { border: 1px solid lightgrey; }\n\n        .card-header {\n          background-color: #EAE6FF;\n          font-weight: 600;\n          font-size: 2rem;\n        }\n\n        .list-group-item {\n          margin: 1rem;\n          padding: 1rem;\n          letter-spacing: 1px;\n        }\n\n        @media (max-width: 430px) {\n          .list-group-horizontal {\n            flex-direction: column;\n          }\n        }\n\n        @media (min-width: 768px) {\n          .list-group-item { margin: 1rem 1.5rem; }\n        }\n\n        @media (min-width: 992px) {\n          .container {\n            max-width: 720px;\n            margin: 0 auto 5rem auto;;\n          }\n\n          .list-group-item { margin: 1rem 2rem; }\n        }\n      </style>\n\n      <section class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"card \">\n              <div class=\"card-header\">").concat(this._country.countryRegion, "</div>\n              <div class=\"card-body\">\n                <ul class=\"list-group list-group-horizontal text-center text-white justify-content-center\">\n                  <li class=\"list-group-item bg-warning\">Confirmed ").concat(this._country.confirmed, "</li>\n                  <li class=\"list-group-item bg-success\">Recovered ").concat(this._country.recovered, "</li>\n                  <li class=\"list-group-item bg-danger\">Deaths ").concat(this._country.deaths, "</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    ");
    }
  }, {
    key: "country",
    set: function set(country) {
      this._country = country;
      this.render();
    }
  }]);

  return CountryItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('country-item', CountryItem);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.js
var bootstrap = __webpack_require__(4);

// EXTERNAL MODULE: ./src/styles/style.css
var style = __webpack_require__(7);

// EXTERNAL MODULE: ./src/scripts/component/navbar.js
var navbar = __webpack_require__(10);

// EXTERNAL MODULE: ./src/scripts/component/title.js
var title = __webpack_require__(15);

// EXTERNAL MODULE: ./src/scripts/component/global-reports.js
var global_reports = __webpack_require__(17);

// EXTERNAL MODULE: ./src/scripts/component/searchbar.js
var searchbar = __webpack_require__(18);

// EXTERNAL MODULE: ./src/scripts/component/country-list.js
var country_list = __webpack_require__(19);

// CONCATENATED MODULE: ./src/scripts/data/data-source.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataSource = /*#__PURE__*/function () {
  function DataSource() {
    _classCallCheck(this, DataSource);
  }

  _createClass(DataSource, null, [{
    key: "globalReports",
    value: function globalReports() {
      return fetch("https://covid19.mathdro.id/api/").then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        if (responseJson) {
          return Promise.resolve(responseJson);
        }
      })["catch"](function () {
        return Promise.reject(console.log('Data Failed to Load'));
      });
    }
  }, {
    key: "searchCountry",
    value: function searchCountry(keyword) {
      return fetch("https://covid19.mathdro.id/api/countries/".concat(keyword, "/confirmed")).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        if (responseJson) {
          if (responseJson[0].countryRegion) {
            return Promise.resolve(responseJson[0]);
          }
        }
      })["catch"](function () {
        return Promise.reject("".concat(keyword, " not found, please enter correctly"));
      });
    }
  }]);

  return DataSource;
}();

/* harmony default export */ var data_source = (DataSource);
// CONCATENATED MODULE: ./src/scripts/view/main.js







var main_main = function main() {
  // Global Reports
  var globalReportsElement = document.querySelector('global-reports-app');

  var showReports = function showReports(results) {
    globalReportsElement.reports = results;
  };

  var showFallbackMessage = function showFallbackMessage(message) {
    globalReportsElement.renderError(message);
  };

  if (data_source) {
    data_source.globalReports().then(showReports)["catch"](showFallbackMessage);
  } // Search Country


  var searchBar = document.querySelector('searchbar-app');
  var countryList = document.querySelector('country-list');

  var searchSuccess = function searchSuccess(results) {
    countryList.countries = results;
  };

  var searchFailed = function searchFailed(message) {
    countryList.renderError(message);
  };

  var btnSearchClicked = function btnSearchClicked() {
    data_source.searchCountry(searchBar.value).then(searchSuccess)["catch"](searchFailed);
  };

  searchBar.clickEvent = btnSearchClicked;
};

/* harmony default export */ var view_main = (main_main);
// CONCATENATED MODULE: ./src/app.js



document.addEventListener('DOMContentLoaded', view_main);

/***/ })
/******/ ]);