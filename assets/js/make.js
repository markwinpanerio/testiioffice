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
/******/ 	return __webpack_require__(__webpack_require__.s = 192);
/******/ })
/************************************************************************/
/******/ ({

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = dynamicMap;
function dynamicMap() {
  google.maps.event.addDomListener(window, 'load', initMap);
  let japan;

  if (!japan) {
    japan = '100-3982, Taito-ku, Higashi Ueno, Tokyo, Japan';
  }

  function initMap() {
    let map = new google.maps.Map(document.getElementById('js-map-iioffice'), {
      zoom: 6,
      'fullscreenControl': false,
      'keyboardShortcuts': false,
      'mapMaker': false,
      'mapTypeControl': false,
      'rotateControl': false,
      'scaleControl': false,
      'scrollwheel': false,
      'liControl': false,
      'streetViewControl': false,
      'zoomControl': false,
      center: { lat: 35.710280295646456, lng: 139.77718591690063 }
    });
    let geocoder = new google.maps.Geocoder();

    geocodeAddress(geocoder, map);
  }

  function geocodeAddress(geocoder, resultsMap) {
    const setPinButton = document.querySelector('#js-address-map-button');
    const setPinAddress = document.querySelectorAll('.js-address-map');
    // let pinAddress;

    // pinAddress

    setPinButton.addEventListener('click', function (e) {
      e.preventDefault();
      let pinAddress = '';
      for (let iPinAddressValue = 0; iPinAddressValue < setPinAddress.length; iPinAddressValue++) {
        if (setPinAddress[iPinAddressValue].value !== '') {
          if (setPinAddress.length !== iPinAddressValue) {
            if (pinAddress === '') {
              pinAddress = setPinAddress[iPinAddressValue].value;
            } else {
              pinAddress = pinAddress + ', ' + setPinAddress[iPinAddressValue].value;
            }
          }
        }
      }

      let address = pinAddress;
      geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
          resultsMap.setZoom(17);
          resultsMap.setCenter(results[0].geometry.location);
          //comment out for the time being and will apply this after receiving google map key
          let marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
          });
        }
      });
    });
  }
}

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_dynamic_map__ = __webpack_require__(143);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__components_dynamic_map__["a" /* default */])();

//start of checkbox script//
//move checked items
function movingCheckedItems() {
  const checkboxItem = document.querySelectorAll('.js-checkbox-item');
  const allCheckedItem = document.querySelector('#js-checked-item');
  const notCheckedItem = document.querySelector('#js-not-checked-item');

  for (let iCheckBoxItem = 0; iCheckBoxItem < checkboxItem.length; iCheckBoxItem++) {
    checkboxItem[iCheckBoxItem].addEventListener('click', function () {

      if (this.checked) {
        // console.log();
        this.setAttribute('checked', 'checked');
        allCheckedItem.appendChild(this.parentElement.parentElement);
        // this.parentElement;
      } else {
        this.removeAttribute('checked');
        notCheckedItem.appendChild(this.parentElement.parentElement);
      }
    });
  }
}
function createCheckBoxElement() {
  let inputAddedItemValue = inputForCreatingCheckboxElement.value;

  if (inputAddedItemValue === null || inputAddedItemValue === '') return;

  movingCheckedItems();
  let checkboxContainer = document.querySelector('#js-not-checked-item');

  //create container element for checkbox
  let checkBoxInnerParent = document.createElement('div');
  checkBoxInnerParent.classList.add('checkbox');
  let checkboxInnerContainer = document.createElement('label');

  //add -for- attribute in checkbox label tag
  checkboxInnerContainer.setAttribute('for', 'checkbox');

  //create checkbox
  let checkboxElement = document.createElement('input');

  //set -type- attribute in checkbox
  checkboxElement.setAttribute('type', 'checkbox');
  checkboxElement.classList.add('js-checkbox-item');
  checkboxElement.setAttribute('name', 'amenities[]');
  checkboxElement.setAttribute('value', inputAddedItemValue);

  //add text value in checkbox label tag
  let text = document.createTextNode(inputAddedItemValue);
  checkboxInnerContainer.appendChild(checkboxElement);
  checkboxInnerContainer.appendChild(text);
  checkBoxInnerParent.appendChild(checkboxInnerContainer);

  checkboxContainer.appendChild(checkBoxInnerParent);
  inputForCreatingCheckboxElement.value = '';
}

const submitForCreatingCheckboxElement = document.querySelector('#js-add-item');
const inputForCreatingCheckboxElement = document.querySelector('#js-input-add-item');

movingCheckedItems();
submitForCreatingCheckboxElement.addEventListener('click', createCheckBoxElement);
submitForCreatingCheckboxElement.addEventListener('click', movingCheckedItems);
//end of checkbox script//

//start of cloning services//
const makeBranchService = document.querySelectorAll('.js-make-branch-service');
const makeBranchServiceFirstChild = makeBranchService[0];
const makeBranchServiceParent = document.querySelector('#js-make-branch-parent');
const makeBranchServiceButton = document.querySelector('#js-add-service');
let makeBranchClone;
let name = 1;

makeBranchServiceButton.addEventListener('click', function () {
  makeBranchClone = makeBranchServiceFirstChild.cloneNode(true);
  makeBranchClone.querySelector('.js-select').setAttribute('name', `plans[${name}][name]`);
  makeBranchClone.querySelector('.js-input').setAttribute('name', `plans[${name}][price]`);
  name++;
  makeBranchServiceParent.appendChild(makeBranchClone);
});
const $timePicker = $('.timepicker');

$timePicker.each(function () {
  $(this).timepicker({
    showInputs: true
  });
});

/***/ }

/******/ });
//# sourceMappingURL=maps/make.map