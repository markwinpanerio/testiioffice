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
/******/ 	return __webpack_require__(__webpack_require__.s = 652);
/******/ })
/************************************************************************/
/******/ ({

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detailMap;
function detailMap() {
  var target = document.querySelector('#js-map-iioffice');
  if (!target) return;

  var targetAddress = target.getAttribute('data-address');
  google.maps.event.addDomListener(window, 'load', initMap);

  function initMap() {
    var map = new google.maps.Map(document.getElementById('js-map-iioffice'), {
      zoom: 6,
      center: { lat: 35.710280295646456, lng: 139.77718591690063 }
    });
    var geocoder = new google.maps.Geocoder();

    geocodeAddress(geocoder, map);
  }

  function geocodeAddress(geocoder, resultsMap) {
    geocoder.geocode({ 'address': targetAddress }, function (results, status) {
      if (status === 'OK') {
        resultsMap.setZoom(17);
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert('Address not found');
      }
    });
  }
}

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _detailMap = __webpack_require__(329);

var _detailMap2 = _interopRequireDefault(_detailMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _detailMap2.default)();

var editForm = document.querySelectorAll('.js-edit-form');
var editButton = void 0,
    cancelButton = void 0,
    updateButton = void 0,
    editInfoContainer = void 0,
    editInfoForm = void 0,
    editInput = void 0,
    editText = void 0;

for (var iEditFormButton = 0; iEditFormButton < editForm.length; iEditFormButton++) {
  editButton = editForm[iEditFormButton].querySelector('.js-edit-info');
  cancelButton = editForm[iEditFormButton].querySelector('.js-edit-cancel');
  updateButton = editForm[iEditFormButton].querySelector('.js-edit-update');

  editButton.addEventListener('click', function () {
    $('.is-active').removeClass('is-active');
    editInput = this.parentElement.parentElement.querySelectorAll('.js-edit-info-input');
    editText = this.parentElement.parentElement.querySelectorAll('.js-edit-info-text');
    editInfoContainer = this.parentElement.parentElement.querySelector('.js-select-item');
    editInfoForm = this.parentElement.parentElement.querySelector('.js-select-form');

    this.classList.add('is-active');
    this.parentElement.parentElement.querySelector('.js-edit-update').classList.add('is-active');
    this.parentElement.parentElement.querySelector('.js-edit-cancel').classList.add('is-active');
    if (editInfoContainer !== null && editInfoForm !== null) {
      editInfoContainer.classList.add('is-active');
      editInfoForm.classList.add('is-active');
    }

    for (var iEditInputCount = 0; iEditInputCount < editInput.length; iEditInputCount++) {
      editInput[iEditInputCount].classList.toggle('is-active');
      editText[iEditInputCount].classList.toggle('is-active');
    }
  });

  cancelButton.addEventListener('click', function () {
    $('.is-active').removeClass('is-active');
  });
}

//start of checkbox script//
//move checked items
function movingCheckedItems() {
  var checkboxItem = document.querySelectorAll('.js-checkbox-item');
  var allCheckedItem = document.querySelector('#js-checked-item');
  var notCheckedItem = document.querySelector('#js-not-checked-item');

  for (var iCheckBoxItem = 0; iCheckBoxItem < checkboxItem.length; iCheckBoxItem++) {
    checkboxItem[iCheckBoxItem].addEventListener('click', function () {

      if (this.checked) {
        allCheckedItem.appendChild(this.parentElement.parentElement);
      } else {
        notCheckedItem.appendChild(this.parentElement.parentElement);
      }
    });
  }
}

function createCheckBoxElement() {
  var inputAddedItemValue = inputForCreatingCheckboxElement.value;

  if (inputAddedItemValue === null || inputAddedItemValue === '') return;

  movingCheckedItems();
  var checkboxContainer = document.querySelector('#js-not-checked-item');

  //create container element for checkbox
  var checkBoxInnerParent = document.createElement('div');
  checkBoxInnerParent.classList.add('checkbox');
  var checkboxInnerContainer = document.createElement('label');

  //add -for- attribute in checkbox label tag
  checkboxInnerContainer.setAttribute('for', 'checkbox');

  //create checkbox
  var checkboxElement = document.createElement('input');

  //set -type- attribute in checkbox
  checkboxElement.setAttribute('type', 'checkbox');
  checkboxElement.setAttribute('name', 'amenities[]');
  checkboxElement.setAttribute('value', inputAddedItemValue);
  checkboxElement.classList.add('js-checkbox-item');

  //add text value in checkbox label tag
  var text = document.createTextNode(inputAddedItemValue);
  checkboxInnerContainer.appendChild(checkboxElement);
  checkboxInnerContainer.appendChild(text);
  checkBoxInnerParent.appendChild(checkboxInnerContainer);

  checkboxContainer.appendChild(checkBoxInnerParent);

  inputForCreatingCheckboxElement.value = '';
}

var submitForCreatingCheckboxElement = document.querySelector('#js-add-item');
var inputForCreatingCheckboxElement = document.querySelector('#js-input-add-item');

if (submitForCreatingCheckboxElement && inputForCreatingCheckboxElement) {
  movingCheckedItems();
  submitForCreatingCheckboxElement.addEventListener('click', createCheckBoxElement);
  submitForCreatingCheckboxElement.addEventListener('click', movingCheckedItems);
}
//end of checkbox script//

/***/ }

/******/ });
//# sourceMappingURL=maps/detail.map