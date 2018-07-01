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
/******/ 	return __webpack_require__(__webpack_require__.s = 341);
/******/ })
/************************************************************************/
/******/ ({

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(342);


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function test() {
  console.log('Test');
}

function greeting() {
  console.log(this);
  console.log('Hello my name is, ' + this.name);
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = greeting;
}

function Developer(name, age, lang) {
  Person.call(this, name, age);
  this.lang = lang;
  this.develop = function () {
    console.log('Written code at ' + this.lang);
  };
}

function extend() {}

// function Car() {
//   this.fuel = 100;
// }
//
// Car.prototype.move = function () {
//   console.log('GO Not FAST!!!');
//   console.log('Fuel consumed', this.fuel -= 40);
// };
//
// Car.prototype.test = function () {
//   console.log('Fuel consumed', this.fuel -= 40);
// };

var Car = function () {
  function Car() {
    _classCallCheck(this, Car);

    this.fuel = 100;
  }

  _createClass(Car, [{
    key: 'move',
    value: function move() {
      console.log('GO Not FAST!!!');
      console.log('Fuel consumed', this.fuel -= 40);
    }
  }, {
    key: 'test',
    value: function test() {
      console.log('Fuel consumed', this.fuel -= 40);
    }
  }]);

  return Car;
}();

function SportCar() {
  Car.call(this);
}

SportCar.prototype = Object.create(Car.prototype);

SportCar.prototype.move = function () {
  console.log('GO FAST!!!');
  console.log('Fuel consumed', this.fuel -= 40);
};

/**
 * @param car Car
 * */
function Driver(car) {
  this.car = car;
  this.drive = function () {
    this.car.move();
  };
}

var ferrari = new SportCar();
var matiz = new Car();
var someDrive = new Driver(matiz);
debugger;
someDrive.drive();

/***/ })

/******/ });