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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"main": 0
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
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/accordion/accordion.js":
/*!******************************************************!*\
  !*** ./src/blocks/components/accordion/accordion.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var accordion = document.getElementById('salon-item__accordion');\n  [].forEach.call(document.querySelectorAll('.accordion__item'), function (item) {\n    item.addEventListener('click', function (e) {\n      display = this.nextElementSibling.style.display == 'block' ? 'none' : 'block';\n      [].forEach.call(this.parentNode.querySelectorAll('.accordion__content'), function (panels) {\n        panels.style.display = 'none';\n      });\n      this.nextElementSibling.style.display = display;\n    });\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzPzU4NWEiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFjY29yZGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYWxvbi1pdGVtX19hY2NvcmRpb24nKTtcbiAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2l0ZW0nKSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRpc3BsYXkgPSB0aGlzLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID09ICdibG9jaycgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKHRoaXMucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19jb250ZW50JyksIGZ1bmN0aW9uIChwYW5lbHMpIHtcbiAgICAgICAgcGFuZWxzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuICAgIH0pO1xuICB9KTtcbn0pKCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/components/accordion/accordion.js\n");

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci5qcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/modules/footer/footer.js\n");

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21vZHVsZXMvaGVhZGVyL2hlYWRlci5qcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/modules/header/header.js\n");

/***/ }),

/***/ "./src/blocks/modules/main-salon-cards/main-salon-cards.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/main-salon-cards/main-salon-cards.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel */ \"./node_modules/owl.carousel/dist/owl.carousel.js\");\n/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_1__);\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#salon-item-slider').owlCarousel({\n    loop: true,\n    margin: 10,\n    nav: false,\n    dots: false,\n    smartSpeed: 700,\n    responsive: {\n      0: {\n        items: 2\n      },\n      600: {\n        items: 3\n      },\n      900: {\n        items: 4\n      },\n      1200: {\n        items: 5\n      }\n    }\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#salon-item__promo-slider').owlCarousel({\n    loop: true,\n    margin: 10,\n    nav: false,\n    dots: false,\n    smartSpeed: 700,\n    responsive: {\n      0: {\n        items: 1,\n        dots: true\n      },\n      750: {\n        items: 2,\n        dots: false\n      },\n      900: {\n        items: 2\n      }\n    }\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#2').owlCarousel({\n    loop: true,\n    margin: 10,\n    nav: false,\n    dots: false,\n    smartSpeed: 700,\n    responsive: {\n      0: {\n        items: 1,\n        dots: true\n      },\n      600: {\n        dots: false\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21vZHVsZXMvbWFpbi1zYWxvbi1jYXJkcy9tYWluLXNhbG9uLWNhcmRzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tb2R1bGVzL21haW4tc2Fsb24tY2FyZHMvbWFpbi1zYWxvbi1jYXJkcy5qcz81ODYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ293bC5jYXJvdXNlbCc7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoJyNzYWxvbi1pdGVtLXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICBsb29wOiB0cnVlLFxuICAgIG1hcmdpbjogMTAsXG4gICAgbmF2OiBmYWxzZSxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBzbWFydFNwZWVkOiA3MDAsXG4gICAgcmVzcG9uc2l2ZToge1xuICAgICAgMDoge1xuICAgICAgICBpdGVtczogMlxuICAgICAgfSxcbiAgICAgIDYwMDoge1xuICAgICAgICBpdGVtczogM1xuICAgICAgfSxcbiAgICAgIDkwMDoge1xuICAgICAgICBpdGVtczogNFxuICAgICAgfSxcbiAgICAgIDEyMDA6IHtcbiAgICAgICAgaXRlbXM6IDVcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAkKCcjc2Fsb24taXRlbV9fcHJvbW8tc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xuICAgIGxvb3A6IHRydWUsXG4gICAgbWFyZ2luOiAxMCxcbiAgICBuYXY6IGZhbHNlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIHNtYXJ0U3BlZWQ6IDcwMCxcbiAgICByZXNwb25zaXZlOiB7XG4gICAgICAwOiB7XG4gICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICBkb3RzOiB0cnVlXG4gICAgICB9LFxuICAgICAgNzUwOiB7XG4gICAgICAgIGl0ZW1zOiAyLFxuICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIDkwMDoge1xuICAgICAgICBpdGVtczogMlxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gICQoJyMyJykub3dsQ2Fyb3VzZWwoe1xuICAgIGxvb3A6IHRydWUsXG4gICAgbWFyZ2luOiAxMCxcbiAgICBuYXY6IGZhbHNlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIHNtYXJ0U3BlZWQ6IDcwMCxcbiAgICByZXNwb25zaXZlOiB7XG4gICAgICAwOiB7XG4gICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICBkb3RzOiB0cnVlXG4gICAgICB9LFxuICAgICAgNjAwOiB7XG4gICAgICAgIGRvdHM6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/blocks/modules/main-salon-cards/main-salon-cards.js\n");

/***/ }),

/***/ "./src/blocks/modules/main/main.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/main/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#service-btn-prev').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#service-slider').trigger('prev.owl.carousel');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#service-btn-next').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#service-slider').trigger('next.owl.carousel');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#promo-btn-prev').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#promo').trigger('prev.owl.carousel');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#promo-btn-next').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#promo').trigger('next.owl.carousel');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#comment-btn-prev').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#comment-slider').trigger('prev.owl.carousel');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#comment-btn-next').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#comment-slider').trigger('next.owl.carousel');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#salon-item-prev').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#salon-item-slider').trigger('prev.owl.carousel');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#salon-item-next').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#salon-item-slider').trigger('next.owl.carousel');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#salon-item-btn-prev').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#salon-item__promo-slider').trigger('prev.owl.carousel');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#salon-item-btn-next').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#salon-item__promo-slider').trigger('next.owl.carousel');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21vZHVsZXMvbWFpbi9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tb2R1bGVzL21haW4vbWFpbi5qcz8yZmFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoJyNzZXJ2aWNlLWJ0bi1wcmV2JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJyNzZXJ2aWNlLXNsaWRlcicpLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gIH0pO1xuICAkKCcjc2VydmljZS1idG4tbmV4dCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjc2VydmljZS1zbGlkZXInKS50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xuICB9KTtcbiAgJCgnI3Byb21vLWJ0bi1wcmV2JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJyNwcm9tbycpLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gIH0pO1xuICAkKCcjcHJvbW8tYnRuLW5leHQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnI3Byb21vJykudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgfSk7XG4gICQoJyNjb21tZW50LWJ0bi1wcmV2JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJyNjb21tZW50LXNsaWRlcicpLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gIH0pO1xuICAkKCcjY29tbWVudC1idG4tbmV4dCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjY29tbWVudC1zbGlkZXInKS50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xuICB9KTtcbiAgJCgnI3NhbG9uLWl0ZW0tcHJldicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjc2Fsb24taXRlbS1zbGlkZXInKS50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xuICB9KTtcbiAgJCgnI3NhbG9uLWl0ZW0tbmV4dCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjc2Fsb24taXRlbS1zbGlkZXInKS50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xuICB9KTtcbiAgJCgnI3NhbG9uLWl0ZW0tYnRuLXByZXYnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnI3NhbG9uLWl0ZW1fX3Byb21vLXNsaWRlcicpLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gIH0pO1xuICAkKCcjc2Fsb24taXRlbS1idG4tbmV4dCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjc2Fsb24taXRlbV9fcHJvbW8tc2xpZGVyJykudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgfSk7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/modules/main/main.js\n");

/***/ }),

/***/ "./src/blocks/section/comments/comments.js":
/*!*************************************************!*\
  !*** ./src/blocks/section/comments/comments.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel */ \"./node_modules/owl.carousel/dist/owl.carousel.js\");\n/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_1__);\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#comment-slider').owlCarousel({\n    loop: true,\n    margin: 30,\n    dots: true,\n    dotsEach: true,\n    smartSpeed: 700,\n    responsive: {\n      0: {\n        items: 1\n      },\n      900: {\n        items: 2\n      },\n      1200: {\n        items: 2,\n        dots: false\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL3NlY3Rpb24vY29tbWVudHMvY29tbWVudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NlY3Rpb24vY29tbWVudHMvY29tbWVudHMuanM/ZTdmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdvd2wuY2Fyb3VzZWwnO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCcjY29tbWVudC1zbGlkZXInKS5vd2xDYXJvdXNlbCh7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBtYXJnaW46IDMwLFxuICAgIGRvdHM6IHRydWUsXG4gICAgZG90c0VhY2g6IHRydWUsXG4gICAgc21hcnRTcGVlZDogNzAwLFxuICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgIDA6IHtcbiAgICAgICAgaXRlbXM6IDFcbiAgICAgIH0sXG4gICAgICA5MDA6IHtcbiAgICAgICAgaXRlbXM6IDJcbiAgICAgIH0sXG4gICAgICAxMjAwOiB7XG4gICAgICAgIGl0ZW1zOiAyLFxuICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/blocks/section/comments/comments.js\n");

/***/ }),

/***/ "./src/blocks/section/news-block/news-block.js":
/*!*****************************************************!*\
  !*** ./src/blocks/section/news-block/news-block.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotdotdot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotdotdot-js */ \"./node_modules/dotdotdot-js/dist/dotdotdot.esm.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var wrapperTitle = document.querySelectorAll('.news__title');\n  var optionsTitle = {\n    ellipsis: \"\\u2026\",\n    height: 48\n  };\n  var wrapper = document.querySelectorAll('.news__text');\n  var options = {\n    ellipsis: ' ',\n    height: 76,\n    keep: '.news__text-link'\n  };\n  wrapperTitle.forEach(function (el) {\n    return new dotdotdot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](el, optionsTitle);\n  });\n  wrapper.forEach(function (el) {\n    return new dotdotdot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](el, options);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL3NlY3Rpb24vbmV3cy1ibG9jay9uZXdzLWJsb2NrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zZWN0aW9uL25ld3MtYmxvY2svbmV3cy1ibG9jay5qcz9mNmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRG90ZG90ZG90IGZyb20gJ2RvdGRvdGRvdC1qcyc7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICB2YXIgd3JhcHBlclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld3NfX3RpdGxlJyk7XG4gIHZhciBvcHRpb25zVGl0bGUgPSB7XG4gICAgZWxsaXBzaXM6IFwiXFx1MjAyNlwiLFxuICAgIGhlaWdodDogNDhcbiAgfTtcbiAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3c19fdGV4dCcpO1xuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBlbGxpcHNpczogJyAnLFxuICAgIGhlaWdodDogNzYsXG4gICAga2VlcDogJy5uZXdzX190ZXh0LWxpbmsnXG4gIH07XG4gIHdyYXBwZXJUaXRsZS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBuZXcgRG90ZG90ZG90KGVsLCBvcHRpb25zVGl0bGUpO1xuICB9KTtcbiAgd3JhcHBlci5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBuZXcgRG90ZG90ZG90KGVsLCBvcHRpb25zKTtcbiAgfSk7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/blocks/section/news-block/news-block.js\n");

/***/ }),

/***/ "./src/blocks/section/promo/promo.js":
/*!*******************************************!*\
  !*** ./src/blocks/section/promo/promo.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel */ \"./node_modules/owl.carousel/dist/owl.carousel.js\");\n/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_1__);\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#promo').owlCarousel({\n    loop: true,\n    margin: 30,\n    dots: true,\n    dotsEach: true,\n    smartSpeed: 700,\n    responsive: {\n      0: {\n        items: 1\n      },\n      700: {\n        items: 2,\n        margin: 10\n      },\n      1200: {\n        items: 3\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL3NlY3Rpb24vcHJvbW8vcHJvbW8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3NlY3Rpb24vcHJvbW8vcHJvbW8uanM/NDk0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdvd2wuY2Fyb3VzZWwnO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCcjcHJvbW8nKS5vd2xDYXJvdXNlbCh7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBtYXJnaW46IDMwLFxuICAgIGRvdHM6IHRydWUsXG4gICAgZG90c0VhY2g6IHRydWUsXG4gICAgc21hcnRTcGVlZDogNzAwLFxuICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgIDA6IHtcbiAgICAgICAgaXRlbXM6IDFcbiAgICAgIH0sXG4gICAgICA3MDA6IHtcbiAgICAgICAgaXRlbXM6IDIsXG4gICAgICAgIG1hcmdpbjogMTBcbiAgICAgIH0sXG4gICAgICAxMjAwOiB7XG4gICAgICAgIGl0ZW1zOiAzXG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/section/promo/promo.js\n");

/***/ }),

/***/ "./src/blocks/section/service/service.js":
/*!***********************************************!*\
  !*** ./src/blocks/section/service/service.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! owl.carousel */ \"./node_modules/owl.carousel/dist/owl.carousel.js\");\n/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_1__);\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#service-slider').owlCarousel({\n    loop: true,\n    margin: 10,\n    dots: true,\n    dotsEach: true,\n    smartSpeed: 700,\n    responsive: {\n      0: {\n        items: 2\n      },\n      600: {\n        items: 3\n      },\n      900: {\n        items: 4\n      },\n      1200: {\n        items: 5\n      }\n    }\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#service-link-slider').owlCarousel({\n    loop: true,\n    margin: 10,\n    dots: true,\n    dotsEach: true,\n    smartSpeed: 700,\n    responsive: {\n      0: {\n        items: 1\n      },\n      600: {\n        items: 1\n      },\n      1200: {\n        items: 1\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL3NlY3Rpb24vc2VydmljZS9zZXJ2aWNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zZWN0aW9uL3NlcnZpY2Uvc2VydmljZS5qcz84Mjk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ293bC5jYXJvdXNlbCc7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoJyNzZXJ2aWNlLXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICBsb29wOiB0cnVlLFxuICAgIG1hcmdpbjogMTAsXG4gICAgZG90czogdHJ1ZSxcbiAgICBkb3RzRWFjaDogdHJ1ZSxcbiAgICBzbWFydFNwZWVkOiA3MDAsXG4gICAgcmVzcG9uc2l2ZToge1xuICAgICAgMDoge1xuICAgICAgICBpdGVtczogMlxuICAgICAgfSxcbiAgICAgIDYwMDoge1xuICAgICAgICBpdGVtczogM1xuICAgICAgfSxcbiAgICAgIDkwMDoge1xuICAgICAgICBpdGVtczogNFxuICAgICAgfSxcbiAgICAgIDEyMDA6IHtcbiAgICAgICAgaXRlbXM6IDVcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAkKCcjc2VydmljZS1saW5rLXNsaWRlcicpLm93bENhcm91c2VsKHtcbiAgICBsb29wOiB0cnVlLFxuICAgIG1hcmdpbjogMTAsXG4gICAgZG90czogdHJ1ZSxcbiAgICBkb3RzRWFjaDogdHJ1ZSxcbiAgICBzbWFydFNwZWVkOiA3MDAsXG4gICAgcmVzcG9uc2l2ZToge1xuICAgICAgMDoge1xuICAgICAgICBpdGVtczogMVxuICAgICAgfSxcbiAgICAgIDYwMDoge1xuICAgICAgICBpdGVtczogMVxuICAgICAgfSxcbiAgICAgIDEyMDA6IHtcbiAgICAgICAgaXRlbXM6IDFcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/section/service/service.js\n");

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_components_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/components/accordion/accordion.js */ \"./src/blocks/components/accordion/accordion.js\");\n/* harmony import */ var _blocks_components_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW1wb3J0L2NvbXBvbmVudHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW1wb3J0L2NvbXBvbmVudHMuanM/OGI0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi8uLi9ibG9ja3MvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzXCI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/import/components.js\n");

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header.js */ \"./src/blocks/modules/header/header.js\");\n/* harmony import */ var _modules_header_header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_footer_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer.js */ \"./src/blocks/modules/footer/footer.js\");\n/* harmony import */ var _modules_footer_footer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_main_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/main/main.js */ \"./src/blocks/modules/main/main.js\");\n/* harmony import */ var _blocks_modules_main_salon_cards_main_salon_cards_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/modules/main-salon-cards/main-salon-cards.js */ \"./src/blocks/modules/main-salon-cards/main-salon-cards.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW1wb3J0L21vZHVsZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW1wb3J0L21vZHVsZXMuanM/MmVhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIlbW9kdWxlcyUvaGVhZGVyL2hlYWRlci5qc1wiO1xuaW1wb3J0IFwiJW1vZHVsZXMlL2Zvb3Rlci9mb290ZXIuanNcIjtcbmltcG9ydCBcIiVtb2R1bGVzJS9tYWluL21haW4uanNcIjtcbmltcG9ydCBcIi4uLy4uL2Jsb2Nrcy9tb2R1bGVzL21haW4tc2Fsb24tY2FyZHMvbWFpbi1zYWxvbi1jYXJkcy5qc1wiOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/import/modules.js\n");

/***/ }),

/***/ "./src/js/import/section.js":
/*!**********************************!*\
  !*** ./src/js/import/section.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_section_service_service_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/section/service/service.js */ \"./src/blocks/section/service/service.js\");\n/* harmony import */ var _blocks_section_promo_promo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/section/promo/promo.js */ \"./src/blocks/section/promo/promo.js\");\n/* harmony import */ var _blocks_section_comments_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/section/comments/comments.js */ \"./src/blocks/section/comments/comments.js\");\n/* harmony import */ var _blocks_section_news_block_news_block_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/section/news-block/news-block.js */ \"./src/blocks/section/news-block/news-block.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW1wb3J0L3NlY3Rpb24uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW1wb3J0L3NlY3Rpb24uanM/ZGY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi8uLi9ibG9ja3Mvc2VjdGlvbi9zZXJ2aWNlL3NlcnZpY2UuanNcIjtcbmltcG9ydCBcIi4uLy4uL2Jsb2Nrcy9zZWN0aW9uL3Byb21vL3Byb21vLmpzXCI7XG5pbXBvcnQgXCIuLi8uLi9ibG9ja3Mvc2VjdGlvbi9jb21tZW50cy9jb21tZW50cy5qc1wiO1xuaW1wb3J0IFwiLi4vLi4vYmxvY2tzL3NlY3Rpb24vbmV3cy1ibG9jay9uZXdzLWJsb2NrLmpzXCI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/import/section.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _import_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules.js */ \"./src/js/import/modules.js\");\n/* harmony import */ var _import_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components.js */ \"./src/js/import/components.js\");\n/* harmony import */ var _import_section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/section.js */ \"./src/js/import/section.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/Mzg4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2ltcG9ydC9tb2R1bGVzLmpzXCI7XG5pbXBvcnQgXCIuL2ltcG9ydC9jb21wb25lbnRzLmpzXCI7XG5pbXBvcnQgXCIuL2ltcG9ydC9zZWN0aW9uLmpzXCI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });