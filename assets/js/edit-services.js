console.warn("This script is development version.");
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/assets/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 653);
/******/ })
/************************************************************************/
/******/ ({

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var editServiceInput = document.querySelectorAll('.js-edit-service-input');
var editServiceButton = document.querySelector('#js-edit-service-button');
var editServiceModal = document.querySelector('#js-modal-body');
var editServiceInputOldValue = [];

function addCommas(value) {
  value += '';
  value = value.replace(',', '');value = value.replace(',', '');value = value.replace(',', '');
  value = value.replace(',', '');value = value.replace(',', '');value = value.replace(',', '');
  var x = value.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }return x1 + x2;
}

for (var iEditServiceInputCount = 0; iEditServiceInputCount < editServiceInput.length; iEditServiceInputCount++) {
  editServiceInputOldValue.push({
    oldValue: editServiceInput[iEditServiceInputCount].getAttribute('data-value'),
    name: editServiceInput[iEditServiceInputCount].getAttribute('data-name')
  });

  editServiceInput[iEditServiceInputCount].addEventListener('keyup', function () {
    var value = this.value;
    this.value = addCommas(value);
  });
}

editServiceButton.addEventListener('click', function () {
  var editServiceInputNewValue = [];
  editServiceModal.innerHTML = '';

  for (var iCompareChanges = 0; iCompareChanges < editServiceInput.length; iCompareChanges++) {

    //check if value are the same
    //push new array of objects with the name, new value and old value
    editServiceInputNewValue.push({
      name: editServiceInput[iCompareChanges].getAttribute('data-name'),
      oldValue: editServiceInputOldValue[iCompareChanges].oldValue,
      newValue: '￥' + editServiceInput[iCompareChanges].value
    });

    // console.log(editServiceInputNewValue[iCompareChanges].newValue);
    // console.log(== editServiceInputNewValue[iCompareChanges].oldValue)

    if (editServiceInputNewValue[iCompareChanges].newValue !== editServiceInputNewValue[iCompareChanges].oldValue && editServiceInput[iCompareChanges].value !== '') {
      this.classList.toggle('is-active');
      var title = document.createElement('h3');
      title.classList.add('modal-title');
      var titleName = editServiceInputOldValue[iCompareChanges].name;
      title.innerHTML = titleName;

      //create and element for comparing the two price
      var compareValueContainer = document.createElement('h4');
      compareValueContainer.classList.add('modal-text');
      var compareValueValue = editServiceInputOldValue[iCompareChanges].oldValue + ' <span class="edit-services-arrow"></span> ' + editServiceInputNewValue[iCompareChanges].newValue;
      compareValueContainer.innerHTML = compareValueValue;

      editServiceModal.appendChild(title);
      editServiceModal.appendChild(compareValueContainer);
    } else {
      this.classList.toggle('is-active');
      var _title = document.createElement('h3');
      _title.classList.add('modal-title');
      var _titleName = editServiceInputOldValue[iCompareChanges].name;
      _title.innerHTML = _titleName;

      //create and element for comparing the two price
      var _compareValueContainer = document.createElement('h4');
      _compareValueContainer.classList.add('modal-text');
      var _compareValueValue = editServiceInputOldValue[iCompareChanges].oldValue + ' <span class="edit-services-arrow"></span> ' + editServiceInputNewValue[iCompareChanges].oldValue;
      _compareValueContainer.innerHTML = _compareValueValue;

      editServiceModal.appendChild(_title);
      editServiceModal.appendChild(_compareValueContainer);
    }
  }

  $('#modal-default').modal('toggle');
});

/***/ }

/******/ });
//# sourceMappingURL=maps/edit-services.map