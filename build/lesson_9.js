/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 336);
/******/ })
/************************************************************************/
/******/ ({

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(338);

var _lighter = __webpack_require__(339);

var lighterElement = document.querySelector('#lighter1');
var lighterElement2 = document.querySelector('#lighter2');
var lighterElement3 = document.querySelector('#lighter3');

(0, _lighter.lighter)(lighterElement);
(0, _lighter.lighter)(lighterElement2);
(0, _lighter.lighter)(lighterElement3);

function notificationBar() {

  var notificationBarElement = document.querySelector('.notification-bar');
  var control = document.querySelector('.notification-bar__btn');

  console.log(control);
  console.log(notificationBarElement);

  function toggleMessage() {
    notificationBarElement.classList.toggle('notification-bar_active');
  }

  control.addEventListener('click', toggleMessage);
}

notificationBar();

var products = [{
  title: 'TEst',
  price: '2500dfghjhgf'
}, {
  title: 'TEst',
  price: '2500'
}, {
  title: 'TEst',
  price: '2500'
}];

function calcTotal(arrayOfNumbers) {
  var total = 0;

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    var number = Number(arrayOfNumbers[i].price);

    if (isNaN(number) === false) {
      total += number;
    }
  }

  return total;
}

var totalPrice = calcTotal(products);
console.log(totalPrice);

/***/ }),

/***/ 338:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lighter = lighter;

__webpack_require__(340);

function lighter(lighterElement) {
  var lights = lighterElement.querySelectorAll('.street-lighter__light');

  function switchOff() {
    for (var i = 0; i < lights.length; i++) {
      var light = lights[i];
      light.classList.remove('street-lighter__light_active');
    }
  }

  function switchOn(element) {
    console.log('ENABLED');
    element.classList.add('street-lighter__light_active');
  }

  function clickHandler(element) {
    switchOff();
    switchOn(element);
  }

  var _loop = function _loop(i) {
    var light = lights[i];
    light.addEventListener('click', function () {
      clickHandler(light);
    });
  };

  for (var i = 0; i < lights.length; i++) {
    _loop(i);
  }
}

function isEmpty(obj) {}

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });