/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/like.png */ "./src/images/like.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/heart.png */ "./src/images/heart.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/close.png */ "./src/images/close.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: block;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.logo {\n  width: 60px;\n  margin: 0 40px 0 1rem;\n}\n\n.logo-img {\n  width: 100%;\n}\n\n.nav-bar {\n  display: flex;\n  max-width: 90%;\n  margin: 10px auto;\n  padding: 5px 5px 50px 5px;\n  align-items: center;\n}\n\n.navigation {\n  display: flex;\n  list-style: none;\n}\n.navigation .link {\n  text-decoration: none;\n  color: #000;\n  font-weight: 500;\n}\n.navigation .link:hover,\n.navigation .active {\n  color: #d5a100;\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n.contact-link {\n  margin-right: 10px;\n}\n\n.add-new-link {\n  padding: 0 20px;\n  margin: 0 20px;\n}\n\n.menu-btn {\n  display: none;\n}\n\n#cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  height: 200px;\n  margin-bottom: 1rem;\n  background: radial-gradient(circle, #fff, #5EBDFC, #5EBDFC, #1C4CBD, #fff);\n  box-shadow: 3px 3px #536e87;\n  box-shadow: rgba(0, 0, 0, 0.024) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px 0px, rgba(0, 0, 0, 0.1) 0px 20px 30px 0px;\n}\n\n.poke-img {\n  width: 80%;\n  height: 80%;\n}\n\n.card-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  margin-bottom: 2.5rem;\n}\n\n.card-title {\n  display: flex;\n  align-items: center;\n}\n\n.title {\n  padding-right: 3rem;\n}\n\n.like {\n  border: none;\n  background: none;\n  cursor: pointer;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 30px;\n  height: 30px;\n}\n\n.like:hover {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.count {\n  display: contents;\n}\n\n.likes-count {\n  align-self: end;\n  padding: 0.5rem 0 0.2rem;\n}\n\n.btns {\n  display: flex;\n  flex-direction: column;\n}\n\n.comment,\n.reservation {\n  background: none;\n  border: 2px solid black;\n  box-shadow: 3px 3px #536e87;\n  cursor: pointer;\n  margin: 0.5rem 0;\n  padding: 5px;\n}\n\n.comment:hover,\n.reservation:hover {\n  background: #536e87;\n  color: #fff;\n}\n\nfooter {\n  max-width: 100%;\n  padding: 20px 5px 20px 15px;\n  border: 2px solid #000;\n  color: #fff;\n  margin-top: 2rem;\n  background-color: #0A285F;\n}\n\n.modalBackground {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  align-content: center;\n}\n\n.modalContainer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 95%;\n  width: 95%;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  background-color: #fff;\n  border: 3px solid #000;\n  align-content: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: 28px;\n}\n\n.scroll {\n  overflow-y: hidden;\n}\n\n.image-popup {\n  display: flex;\n  justify-content: center;\n}\n\n.popup-img {\n  padding-top: 20px;\n  width: 25%;\n  height: 25%;\n}\n\n.poke-title {\n  font-size: 3em;\n}\n\n.pokeInfo {\n  gap: 10px;\n  text-align: left;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: auto auto;\n  grid-row-gap: 10px;\n  grid-column-gap: 77px;\n  font-weight: bold;\n}\n\n.pop-title {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 30px;\n}\n\n.form {\n  display: grid;\n  grid-template-rows: auto;\n  grid-row-gap: 20px;\n  width: 300px;\n  justify-content: center;\n}\n\n.formName,\n.formInsight {\n  border: 2px solid;\n  padding: 2px;\n}\n\n.formButton {\n  background: none;\n  border: 2px solid black;\n  box-shadow: 3px 3px #536e87;\n  cursor: pointer;\n  margin: 0.5rem 0;\n  padding: 5px;\n  width: 200px;\n}\n\n.formContain {\n  display: flex;\n  justify-content: center;\n}\n\n.commentContain {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.commentTitle {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.commentInfo {\n  display: flex;\n  justify-content: center;\n}\n\n.closeBtn {\n  display: block;\n  position: absolute;\n  right: 10px;\n  transition: 0.3s;\n  border: none;\n  background: none;\n  cursor: pointer;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 30px;\n  height: 30px;\n  margin-top: 10px;\n}\n\n.ulComment {\n  text-decoration: none;\n  list-style: none;\n}\n\n@media only screen and (max-width: 768px) {\n  #cards {\n    grid-template-columns: repeat(2, 1fr);\n    margin: 1rem 1rem 0;\n  }\n\n  .image-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 150px;\n    height: 150px;\n  }\n\n  .poke-img {\n    width: 80%;\n    height: 80%;\n  }\n\n  .title {\n    padding-right: 0.5rem;\n  }\n\n  .logo {\n    position: absolute;\n    top: 16px;\n    left: 77%;\n  }\n\n  .nav-bar {\n    margin: 0;\n    padding: 0;\n  }\n\n  .navigation {\n    position: fixed;\n    flex-direction: column;\n    left: -100%;\n    top: 0;\n    padding-top: 5rem;\n    align-items: flex-start;\n    padding-inline-start: 0;\n    margin-top: 0;\n    background-color: #0075be;\n    opacity: 0.95;\n    list-style-type: none;\n    width: 100%;\n    height: 100%;\n    transition: 0.3s;\n  }\n  .navigation .link {\n    font-family: Lato, sans-serif;\n    font-weight: 700;\n    font-size: 2.5em;\n    line-height: 1em;\n    margin: 2rem;\n  }\n\n  .nav-link {\n    margin-bottom: 2rem;\n  }\n\n  .show {\n    display: none;\n  }\n\n  .overflow-hidden {\n    overflow-y: hidden;\n  }\n\n  .navigation.active {\n    left: 0;\n  }\n\n  .menu-btn {\n    display: block;\n    cursor: pointer;\n    padding: 1.5rem;\n  }\n\n  .menu-icon {\n    border: none;\n    background: none;\n  }\n\n  .close-menu {\n    top: 2rem;\n    position: fixed;\n    left: 90%;\n  }\n\n  .add-new-link {\n    padding: 0;\n    margin: 0;\n    margin-bottom: 2rem;\n  }\n\n  .modalContainer {\n    margin-left: 12px;\n    margin-right: 12px;\n  }\n\n  .pokeInfo {\n    grid-column-gap: 30px;\n  }\n\n  .popup-img {\n    width: 50%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["$shadow: #536e87;\n$btn-hover: #536e87;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: block;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Poppins', sans-serif;\n}\n\n.logo {\n  width: 60px;\n  margin: 0 40px 0 1rem;\n}\n\n.logo-img {\n  width: 100%;\n}\n\n.nav-bar {\n  display: flex;\n  max-width: 90%;\n  margin: 10px auto;\n  padding: 5px 5px 50px 5px;\n  align-items: center;\n}\n\n.navigation {\n  display: flex;\n  list-style: none;\n\n  .link {\n    text-decoration: none;\n    color: #000;\n    font-weight: 500;\n  }\n\n  .link:hover,\n  .active {\n    color: #d5a100;\n    text-decoration: underline;\n    font-weight: bold;\n  }\n}\n\n.contact-link {\n  margin-right: 10px;\n}\n\n.add-new-link {\n  padding: 0 20px;\n  margin: 0 20px;\n}\n\n.menu-btn {\n  display: none;\n}\n\n\n#cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.image-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 200px;\n  height: 200px;\n  // border: 2px solid black;\n  margin-bottom: 1rem;\n  background: radial-gradient(circle, #fff,  #5EBDFC, #5EBDFC, #1C4CBD, #fff);\n  box-shadow: 3px 3px #536e87;\n  box-shadow:\n    rgba(0, 0, 0, 0.024) 0px 0px 0px 1px,\n    rgba(0, 0, 0, 0.05) 0px 1px 0px 0px,\n    rgba(0, 0, 0, 0.03) 0px 0px 8px 0px,\n    rgba(0, 0, 0, 0.1) 0px 20px 30px 0px;\n}\n\n.poke-img {\n  width: 80%;\n  height: 80%;\n}\n\n.card-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  margin-bottom: 2.5rem;\n}\n\n.card-title {\n  display: flex;\n  align-items: center;\n}\n\n.title {\n  padding-right: 3rem;\n}\n\n.like {\n  border: none;\n  background: none;\n  cursor: pointer;\n  background-image: url('./images/like.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 30px;\n  height: 30px;\n}\n\n.like:hover {\n  background-image: url('./images/heart.png');\n}\n\n.count {\n  display: contents;\n}\n\n.likes-count {\n  align-self: end;\n  padding: 0.5rem 0 0.2rem;\n}\n\n.btns {\n  display: flex;\n  flex-direction: column;\n}\n\n.comment,\n.reservation {\n  background: none;\n  border: 2px solid black;\n  box-shadow: 3px 3px $shadow;\n  cursor: pointer;\n  margin: 0.5rem 0;\n  padding: 5px;\n}\n\n.comment:hover,\n.reservation:hover {\n  background: $btn-hover;\n  color: #fff;\n}\n\nfooter {\n  max-width: 100%;\n  padding: 20px 5px 20px 15px;\n  border: 2px solid #000;\n  color: #fff;\n  margin-top: 2rem;\n  background-color: #0A285F;\n}\n\n.modalBackground {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #fff;\n  align-content: center;\n}\n\n.modalContainer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 95%;\n  width: 95%;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  background-color: #fff;\n  border: 3px solid #000;\n  align-content: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding-bottom: 28px;\n}\n\n.scroll {\n  overflow-y: hidden;\n}\n\n.image-popup {\n  display: flex;\n  justify-content: center;\n}\n\n.popup-img {\n  padding-top: 20px;\n  width: 25%;\n  height: 25%;\n}\n\n.poke-title {\n  font-size: 3em;\n}\n\n.pokeInfo {\n  gap: 10px;\n  text-align: left;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: auto auto;\n  grid-row-gap: 10px;\n  grid-column-gap: 77px;\n  font-weight: bold;\n}\n\n.pop-title {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 30px;\n}\n\n.form {\n  display: grid;\n  grid-template-rows: auto;\n  grid-row-gap: 20px;\n  width: 300px;\n  justify-content: center;\n}\n\n.formName,\n.formInsight {\n  border: 2px solid;\n  padding: 2px;\n}\n\n.formButton {\n  background: none;\n  border: 2px solid black;\n  box-shadow: 3px 3px $shadow;\n  cursor: pointer;\n  margin: 0.5rem 0;\n  padding: 5px;\n  width: 200px;\n}\n\n.formContain {\n  display: flex;\n  justify-content: center;\n}\n\n.commentContain {\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.commentTitle {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.commentInfo {\n  display: flex;\n  justify-content: center;\n}\n\n.closeBtn {\n  display: block;\n  position: absolute;\n  right: 10px;\n  transition: 0.3s;\n  border: none;\n  background: none;\n  cursor: pointer;\n  background-image: url('./images/close.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 30px;\n  height: 30px;\n  margin-top: 10px;\n}\n\n.ulComment {\n  text-decoration: none;\n  list-style: none;\n}\n\n@media only screen and (max-width: 768px) {\n  #cards {\n    grid-template-columns: repeat(2, 1fr);\n    margin: 1rem 1rem 0;\n  }\n  \n  .image-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 150px;\n    height: 150px;\n  }\n  \n  .poke-img {\n    width: 80%;\n    height: 80%;\n  }\n\n  .title {\n    padding-right: 0.5rem;\n  }\n\n  .logo {\n    position: absolute;\n    top: 16px;\n    left: 77%;\n  }\n\n  .nav-bar {\n    margin: 0;\n    padding: 0;\n  }\n  \n  .navigation {\n    position: fixed;\n    flex-direction: column;\n    left: -100%;\n    top: 0;\n    padding-top: 5rem;\n    align-items: flex-start;\n    padding-inline-start: 0;\n    margin-top: 0;\n    background-color: #0075be;\n    opacity: 0.95;\n    list-style-type: none;\n    width: 100%;\n    height: 100%;\n    transition: 0.3s;\n    .link {\n      font-family: Lato, sans-serif;\n      font-weight: 700;\n      font-size: 2.5em;\n      line-height: 1em;\n      margin: 2rem;\n    }\n  }\n\n  .nav-link {\n    margin-bottom: 2rem;\n  }\n\n  .show {\n    display: none;\n  }\n\n  .overflow-hidden {\n    overflow-y: hidden;\n  }\n  \n  .navigation.active {\n    left: 0;\n  }\n\n  .menu-btn {\n    display: block;\n    cursor: pointer;\n    padding: 1.5rem;\n  }\n\n  .menu-icon {\n    border: none;\n    background: none;\n  }\n\n  .close-menu {\n    top: 2rem;\n    position: fixed;\n    left: 90%;\n  }\n  \n  .add-new-link {\n    padding: 0;\n    margin: 0;\n    margin-bottom: 2rem;\n  }\n\n  .modalContainer {\n    margin-left: 12px;\n    margin-right: 12px;\n  }\n\n  .pokeInfo {\n    grid-column-gap: 30px;\n  }\n\n  .popup-img {\n    width: 50%;\n}\n}  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalized": () => (/* binding */ capitalized),
/* harmony export */   "commentsCounter": () => (/* binding */ commentsCounter),
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "createLikes": () => (/* binding */ createLikes),
/* harmony export */   "getComment": () => (/* binding */ getComment),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "getPokemon": () => (/* binding */ getPokemon),
/* harmony export */   "itemsCounter": () => (/* binding */ itemsCounter),
/* harmony export */   "sendComment": () => (/* binding */ sendComment),
/* harmony export */   "sendLike": () => (/* binding */ sendLike),
/* harmony export */   "updatelikes": () => (/* binding */ updatelikes)
/* harmony export */ });
/* harmony import */ var _id_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id.js */ "./src/modules/id.js");


const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qOXWiX52bylfo2qIChDX/likes/';
const urlComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qOXWiX52bylfo2qIChDX/comments';

const getPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};

const createApp = async () => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return response.json();
};

const createLikes = async (data) => {
  await fetch(urlLikes, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ item_id: data.item_id }),
  });
};

const getLikes = async () => {
  const response = await fetch(urlLikes);
  const likes = await response.json();
  return likes;
};

const createComment = async (data) => {
  await fetch(urlComments, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: data.item_id,
      username: data.username,
      comment: data.comment,
    }),
  });
};

const getComment = async (id) => {
  const response = await fetch(`${urlComments}?item_id=${id}`);
  const likes = await response.json();
  return likes;
};

const sendComment = async (pokemon, name, comments) => {
  const data = {
    item_id: pokemon,
    username: name,
    comment: comments,
  };
  Promise.resolve(await createComment(data));
};

const capitalized = (string) => {
  const capit = string.split('');
  capit[0] = capit[0].toUpperCase();
  return capit.join('');
};

const sendLike = async (pokemon) => {
  const data = {
    item_id: pokemon,
  };
  Promise.resolve(await createLikes(data));
};

const updatelikes = async (id) => {
  const data = await Promise.resolve(getLikes());
  const likeApi = data.find((x) => {
    if (x.item_id === id) return true;
    return false;
  });
  return likeApi.likes;
};

const itemsCounter = () => {
  const data = (0,_id_js__WEBPACK_IMPORTED_MODULE_0__.idArray)();
  const count = data.length;
  return count;
};

const commentsCounter = async (id) => {
  const dataComment = await getComment(id);
  const count = dataComment.length;
  return count;
};




/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");


const body = document.getElementById('body');

const nav = document.getElementById('menu');
const ul = document.createElement('ul');
ul.classList.add('navigation');
ul.innerHTML = `
          <li class="nav-link list-link"><a class="link active">Pokedex(${(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.itemsCounter)()})</a></li>
          <li class="nav-link add-new-link"><a class="link">Region</a></li>
          <li class="nav-link contact-link"><a class="link">Types</a></li>
`;
nav.appendChild(ul);

const navMenu = document.querySelector('.navigation');
const hamburguer = document.querySelector('#hamburguer');
const close = document.querySelector('#close');

hamburguer.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  close.classList.remove('show');
  document.querySelector('body').classList.toggle('overflow-hidden');
});

close.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  close.classList.add('show');
  document.querySelector('body').classList.toggle('overflow-hidden');
});

document.querySelectorAll('.item').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  close.classList.add('show');
  document.querySelector('body').classList.toggle('overflow-hidden');
}));

const alert = (message, className) => {
  const DIV = document.createElement('div');
  DIV.className = `alert alert-${className}`;
  DIV.appendChild(document.createTextNode(message));
  const CONTAINER = document.querySelector('.form');
  const PAGE = document.querySelector('.formButton');
  CONTAINER.insertBefore(DIV, PAGE);
  setTimeout(() => document.querySelector('.alert').remove(), 1500);
};

const cleanInput = () => {
  const formInsight = document.getElementById('formInsight');
  const formName = document.getElementById('formName');
  formInsight.value = '';
  formName.value = '';
};

const popupWindow = async (pokemon) => {
  const cardContainer = document.getElementById('cards');
  const modalBackground = document.createElement('section');
  modalBackground.className = 'modalBackground';
  cardContainer.appendChild(modalBackground);

  const modalContainer = document.createElement('section');
  modalContainer.className = 'modalContainer';

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('closeBtn');
  modalContainer.appendChild(closeBtn);

  closeBtn.addEventListener('click', () => {
    body.classList.toggle('scroll');
    modalBackground.remove();
  });

  const imageontainer = document.createElement('div');
  imageontainer.classList.add('image-popup');
  modalContainer.appendChild(imageontainer);

  const image = document.createElement('img');
  image.classList.add('popup-img');
  image.src = pokemon.sprites.other.dream_world.front_default;
  image.alt = pokemon.name;
  imageontainer.appendChild(image);

  const popTitle = document.createElement('div');
  popTitle.classList.add('pop-title');
  modalContainer.appendChild(popTitle);

  const title = document.createElement('h2');
  title.classList.add('poke-title');
  title.innerText = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.capitalized)(pokemon.name);
  popTitle.appendChild(title);

  const pokeInfo = document.createElement('div');
  pokeInfo.classList.add('pokeInfo');
  modalContainer.appendChild(pokeInfo);

  const weight = document.createElement('span');
  weight.classList.add('weight');
  weight.innerText = `Weight: ${pokemon.weight}`;

  pokeInfo.appendChild(weight);

  const pokeID = document.createElement('span');
  pokeID.classList.add('pokeId');
  pokeID.innerText = `id: ${pokemon.id} `;
  pokeInfo.appendChild(pokeID);

  const type = document.createElement('span');
  type.classList.add('type');
  type.innerText = `Type: ${pokemon.types[0].type.name}`;
  pokeInfo.appendChild(type);

  const ability1 = document.createElement('span');
  ability1.classList.add('ability1');
  ability1.innerText = `Ability 1: ${pokemon.abilities[0].ability.name}`;
  pokeInfo.appendChild(ability1);

  const ability2 = document.createElement('span');
  ability2.classList.add('ability2');
  ability2.innerText = `Ability 2: ${pokemon.abilities[1].ability.name}`;
  pokeInfo.appendChild(ability2);

  const commentContain = document.createElement('div');
  commentContain.classList.add('commentContain');
  modalContainer.appendChild(commentContain);

  const dataComment = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(pokemon.name);
  const count = 0;

  const commentTitle = document.createElement('h2');
  commentTitle.classList.add('commentTitle');
  if (dataComment.length === undefined) {
    commentTitle.textContent = `Comments(${count})`;
  } else {
    commentTitle.textContent = `Comments(${await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.commentsCounter)(pokemon.name)})`;
  }
  commentContain.appendChild(commentTitle);

  const commentInfo = document.createElement('div');
  commentInfo.classList.add('commentInfo');
  commentContain.appendChild(commentInfo);
  const ul = document.createElement('ul');
  ul.classList.add('ulComment');
  ul.id = 'comments';
  commentInfo.appendChild(ul);

  for (let i = 0; i < dataComment.length; i += 1) {
    const li = document.createElement('li');
    li.classList.add('liComment');
    li.innerHTML = `${dataComment[i].creation_date} ${dataComment[i].username}: ${dataComment[i].comment}`;
    ul.appendChild(li);
  }

  const formContain = document.createElement('div');
  formContain.classList.add('formContain');
  modalContainer.appendChild(formContain);

  const form = document.createElement('form');
  form.classList.add('form');

  const formTitle = document.createElement('h2');
  formTitle.classList.add('formTitle');
  formTitle.textContent = 'Add a comment';
  form.appendChild(formTitle);

  const formName = document.createElement('input');
  formName.classList.add('formName');
  formName.id = 'formName';
  formName.setAttribute('type', 'text');
  formName.setAttribute('name', 'name');
  formName.setAttribute('placeholder', 'Your name');
  form.appendChild(formName);

  const formInsight = document.createElement('textarea');
  formInsight.id = 'formInsight';
  formInsight.classList.add('formInsight');
  formInsight.setAttribute('type', 'textarea');
  formInsight.setAttribute('name', 'name');
  formInsight.setAttribute('placeholder', 'Your insight');
  form.appendChild(formInsight);

  const formButton = document.createElement('input');
  formButton.classList.add('formButton');
  formButton.setAttribute('type', 'submit');
  formButton.setAttribute('value', 'Comment');
  form.appendChild(formButton);

  formButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const formInsight = document.getElementById('formInsight').value;
    const formName = document.getElementById('formName').value;
    if (formInsight === '' && formName === '') {
      alert('Form cannot be empty', 'danger');
    } else {
      await Promise.resolve((0,_api_js__WEBPACK_IMPORTED_MODULE_0__.sendComment)(pokemon.name, formName, formInsight));
      const dataComment = await Promise.resolve((0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(pokemon.name));
      const ul = document.getElementById('comments');
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      }
      body.classList.toggle('scroll');
      dataComment.forEach((comment) => {
        const li = document.createElement('li');
        li.classList.add('liComment');
        li.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
        ul.appendChild(li);
      });
    }
    body.classList.toggle('scroll');
    cleanInput();
  });

  formContain.appendChild(form);
  modalBackground.appendChild(modalContainer);
};

const display = async (monster) => {
  const pokemon = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPokemon)(monster);
  const cardContainer = document.getElementById('cards');
  const card = document.createElement('div');
  card.classList.add('card-container');
  cardContainer.appendChild(card);

  const imageontainer = document.createElement('div');
  imageontainer.classList.add('image-container');
  card.appendChild(imageontainer);

  const image = document.createElement('img');
  image.classList.add('poke-img');
  image.src = pokemon.sprites.other.dream_world.front_default;
  image.alt = pokemon.name;
  imageontainer.appendChild(image);

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  card.appendChild(cardTitle);

  const title = document.createElement('h2');
  title.classList.add('title');
  title.innerText = (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.capitalized)(pokemon.name);
  cardTitle.appendChild(title);

  const like = document.createElement('button');
  like.classList.add('like');
  cardTitle.appendChild(like);

  const likesText = document.createElement('div');
  likesText.classList.add('count');
  card.appendChild(likesText);

  const likesCount = document.createElement('p');
  likesCount.classList.add('likes-count');
  likesCount.innerHTML = `${await Promise.resolve((0,_api_js__WEBPACK_IMPORTED_MODULE_0__.updatelikes)(pokemon.name))} likes`;
  likesText.appendChild(likesCount);

  like.addEventListener('click', async () => {
    await Promise.resolve((0,_api_js__WEBPACK_IMPORTED_MODULE_0__.sendLike)(pokemon.name));
    likesCount.innerHTML = `${await Promise.resolve((0,_api_js__WEBPACK_IMPORTED_MODULE_0__.updatelikes)(pokemon.name))} likes`;
  });

  const buttons = document.createElement('div');
  buttons.classList.add('btns');
  card.appendChild(buttons);

  const comments = document.createElement('button');
  comments.classList.add('comment');
  comments.id = 'comment-btn';
  comments.innerText = 'Comment';
  buttons.appendChild(comments);

  comments.addEventListener('click', () => {
    body.classList.toggle('scroll');
    popupWindow(pokemon);
  });

  const reservations = document.createElement('button');
  reservations.classList.add('reservation');
  reservations.id = 'reservation-btn';
  reservations.innerText = 'Reservations';
  buttons.appendChild(reservations);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);


/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/modules/dom.js");
/* harmony import */ var _id_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id.js */ "./src/modules/id.js");


// import { createLikes } from './api.js';

const monsters = (0,_id_js__WEBPACK_IMPORTED_MODULE_1__.idArray)();
const createCards = () => {
  monsters.forEach((pokemon) => {
    // createLikes(pokemon);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pokemon);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCards);


/***/ }),

/***/ "./src/modules/id.js":
/*!***************************!*\
  !*** ./src/modules/id.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIdArray": () => (/* binding */ createIdArray),
/* harmony export */   "idArray": () => (/* binding */ idArray)
/* harmony export */ });
const idArray = () => {
  const id = ['charizard', 'pikachu', 'ampharos', 'magmar', 'dragonite', 'mewtwo',
    'arcanine', 'lugia', 'altaria',
  ];
  return id;
};

const createIdArray = () => {
  const id = [
    { item_id: 'charizard' },
    { item_id: 'pikachu' },
    { item_id: 'ampharos' },
    { item_id: 'magmar' },
    { item_id: 'dragonite' },
    { item_id: 'mewtwo' },
    { item_id: 'arcanine' },
    { item_id: 'lugia' },
    { item_id: 'altaria' },
  ];
  return id;
};



/***/ }),

/***/ "./src/images/close.png":
/*!******************************!*\
  !*** ./src/images/close.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c623043a998c86047c46.png";

/***/ }),

/***/ "./src/images/heart.png":
/*!******************************!*\
  !*** ./src/images/heart.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4e47dce19955d2d5db5.png";

/***/ }),

/***/ "./src/images/like.png":
/*!*****************************!*\
  !*** ./src/images/like.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d07c665420f28d7064d2.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functions.js */ "./src/modules/functions.js");



document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtHQUFvQztBQUNoRiw0Q0FBNEMsaUhBQXFDO0FBQ2pGLDRDQUE0QyxpSEFBcUM7QUFDakYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLDZDQUE2QyxjQUFjLGVBQWUsMkJBQTJCLEdBQUcsVUFBVSxtQkFBbUIsNEJBQTRCLHdCQUF3Qix5Q0FBeUMsR0FBRyxXQUFXLGdCQUFnQiwwQkFBMEIsR0FBRyxlQUFlLGdCQUFnQixHQUFHLGNBQWMsa0JBQWtCLG1CQUFtQixzQkFBc0IsOEJBQThCLHdCQUF3QixHQUFHLGlCQUFpQixrQkFBa0IscUJBQXFCLEdBQUcscUJBQXFCLDBCQUEwQixnQkFBZ0IscUJBQXFCLEdBQUcsaURBQWlELG1CQUFtQiwrQkFBK0Isc0JBQXNCLEdBQUcsbUJBQW1CLHVCQUF1QixHQUFHLG1CQUFtQixvQkFBb0IsbUJBQW1CLEdBQUcsZUFBZSxrQkFBa0IsR0FBRyxZQUFZLGtCQUFrQiwwQ0FBMEMsR0FBRyxzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsaUJBQWlCLGtCQUFrQix3QkFBd0IsK0VBQStFLGdDQUFnQyxxS0FBcUssR0FBRyxlQUFlLGVBQWUsZ0JBQWdCLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGlCQUFpQiwwQkFBMEIsR0FBRyxpQkFBaUIsa0JBQWtCLHdCQUF3QixHQUFHLFlBQVksd0JBQXdCLEdBQUcsV0FBVyxpQkFBaUIscUJBQXFCLG9CQUFvQixzRUFBc0UsMkJBQTJCLGlDQUFpQyxnQ0FBZ0MsZ0JBQWdCLGlCQUFpQixHQUFHLGlCQUFpQixzRUFBc0UsR0FBRyxZQUFZLHNCQUFzQixHQUFHLGtCQUFrQixvQkFBb0IsNkJBQTZCLEdBQUcsV0FBVyxrQkFBa0IsMkJBQTJCLEdBQUcsNkJBQTZCLHFCQUFxQiw0QkFBNEIsZ0NBQWdDLG9CQUFvQixxQkFBcUIsaUJBQWlCLEdBQUcseUNBQXlDLHdCQUF3QixnQkFBZ0IsR0FBRyxZQUFZLG9CQUFvQixnQ0FBZ0MsMkJBQTJCLGdCQUFnQixxQkFBcUIsOEJBQThCLEdBQUcsc0JBQXNCLG9CQUFvQixXQUFXLFlBQVksaUJBQWlCLGdCQUFnQiwyQkFBMkIsMEJBQTBCLEdBQUcscUJBQXFCLG9CQUFvQixXQUFXLFlBQVksZ0JBQWdCLGVBQWUsc0JBQXNCLHVCQUF1Qix1QkFBdUIsMEJBQTBCLDJCQUEyQiwyQkFBMkIsMEJBQTBCLHVCQUF1QixxQkFBcUIseUJBQXlCLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxrQkFBa0Isa0JBQWtCLDRCQUE0QixHQUFHLGdCQUFnQixzQkFBc0IsZUFBZSxnQkFBZ0IsR0FBRyxpQkFBaUIsbUJBQW1CLEdBQUcsZUFBZSxjQUFjLHFCQUFxQixrQkFBa0IsNEJBQTRCLHFDQUFxQyx1QkFBdUIsMEJBQTBCLHNCQUFzQixHQUFHLGdCQUFnQixrQkFBa0IsNEJBQTRCLHlCQUF5QixHQUFHLFdBQVcsa0JBQWtCLDZCQUE2Qix1QkFBdUIsaUJBQWlCLDRCQUE0QixHQUFHLDhCQUE4QixzQkFBc0IsaUJBQWlCLEdBQUcsaUJBQWlCLHFCQUFxQiw0QkFBNEIsZ0NBQWdDLG9CQUFvQixxQkFBcUIsaUJBQWlCLGlCQUFpQixHQUFHLGtCQUFrQixrQkFBa0IsNEJBQTRCLEdBQUcscUJBQXFCLHFCQUFxQix3QkFBd0IsR0FBRyxtQkFBbUIsdUJBQXVCLHFCQUFxQixHQUFHLGtCQUFrQixrQkFBa0IsNEJBQTRCLEdBQUcsZUFBZSxtQkFBbUIsdUJBQXVCLGdCQUFnQixxQkFBcUIsaUJBQWlCLHFCQUFxQixvQkFBb0Isc0VBQXNFLDJCQUEyQixpQ0FBaUMsZ0NBQWdDLGdCQUFnQixpQkFBaUIscUJBQXFCLEdBQUcsZ0JBQWdCLDBCQUEwQixxQkFBcUIsR0FBRywrQ0FBK0MsWUFBWSw0Q0FBNEMsMEJBQTBCLEtBQUssd0JBQXdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG1CQUFtQixvQkFBb0IsS0FBSyxpQkFBaUIsaUJBQWlCLGtCQUFrQixLQUFLLGNBQWMsNEJBQTRCLEtBQUssYUFBYSx5QkFBeUIsZ0JBQWdCLGdCQUFnQixLQUFLLGdCQUFnQixnQkFBZ0IsaUJBQWlCLEtBQUssbUJBQW1CLHNCQUFzQiw2QkFBNkIsa0JBQWtCLGFBQWEsd0JBQXdCLDhCQUE4Qiw4QkFBOEIsb0JBQW9CLGdDQUFnQyxvQkFBb0IsNEJBQTRCLGtCQUFrQixtQkFBbUIsdUJBQXVCLEtBQUssdUJBQXVCLG9DQUFvQyx1QkFBdUIsdUJBQXVCLHVCQUF1QixtQkFBbUIsS0FBSyxpQkFBaUIsMEJBQTBCLEtBQUssYUFBYSxvQkFBb0IsS0FBSyx3QkFBd0IseUJBQXlCLEtBQUssMEJBQTBCLGNBQWMsS0FBSyxpQkFBaUIscUJBQXFCLHNCQUFzQixzQkFBc0IsS0FBSyxrQkFBa0IsbUJBQW1CLHVCQUF1QixLQUFLLG1CQUFtQixnQkFBZ0Isc0JBQXNCLGdCQUFnQixLQUFLLHFCQUFxQixpQkFBaUIsZ0JBQWdCLDBCQUEwQixLQUFLLHVCQUF1Qix3QkFBd0IseUJBQXlCLEtBQUssaUJBQWlCLDRCQUE0QixLQUFLLGtCQUFrQixpQkFBaUIsS0FBSyxHQUFHLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcs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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7OztBQ3JCc0I7QUFDMkI7O0FBRWpEO0FBQ0EsRUFBRSxpRUFBVztBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb2tlbW9uLUFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL1Bva2Vtb24tQXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLUFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1BcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLUFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1Bva2Vtb24tQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1Bva2Vtb24tQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1Bva2Vtb24tQXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1BcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLUFwcC8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLUFwcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLUFwcC8uL3NyYy9tb2R1bGVzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9Qb2tlbW9uLUFwcC8uL3NyYy9tb2R1bGVzL2lkLmpzIiwid2VicGFjazovL1Bva2Vtb24tQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1Bva2Vtb24tQXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1Bva2Vtb24tQXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Qb2tlbW9uLUFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL1Bva2Vtb24tQXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUG9rZW1vbi1BcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Qb2tlbW9uLUFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Qb2tlbW9uLUFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9Qb2tlbW9uLUFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbGlrZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9oZWFydC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jbG9zZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbjogMCA0MHB4IDAgMXJlbTtcXG59XFxuXFxuLmxvZ28taW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHBhZGRpbmc6IDVweCA1cHggNTBweCA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm5hdmlnYXRpb24gLmxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4ubmF2aWdhdGlvbiAubGluazpob3ZlcixcXG4ubmF2aWdhdGlvbiAuYWN0aXZlIHtcXG4gIGNvbG9yOiAjZDVhMTAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRhY3QtbGluayB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5hZGQtbmV3LWxpbmsge1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxufVxcblxcbi5tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmZiwgIzVFQkRGQywgIzVFQkRGQywgIzFDNENCRCwgI2ZmZik7XFxuICBib3gtc2hhZG93OiAzcHggM3B4ICM1MzZlODc7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDI0KSAwcHggMHB4IDBweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAwcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMDMpIDBweCAwcHggOHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAyMHB4IDMwcHggMHB4O1xcbn1cXG5cXG4ucG9rZS1pbWcge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDNyZW07XFxufVxcblxcbi5saWtlIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmxpa2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuLmNvdW50IHtcXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xcbn1cXG5cXG4ubGlrZXMtY291bnQge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgcGFkZGluZzogMC41cmVtIDAgMC4ycmVtO1xcbn1cXG5cXG4uYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbW1lbnQsXFxuLnJlc2VydmF0aW9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggIzUzNmU4NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jb21tZW50OmhvdmVyLFxcbi5yZXNlcnZhdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjNTM2ZTg3O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4IDVweCAyMHB4IDE1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBMjg1RjtcXG59XFxuXFxuLm1vZGFsQmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWxDb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogOTUlO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZy1ib3R0b206IDI4cHg7XFxufVxcblxcbi5zY3JvbGwge1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uaW1hZ2UtcG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAtaW1nIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMjUlO1xcbn1cXG5cXG4ucG9rZS10aXRsZSB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLnBva2VJbmZvIHtcXG4gIGdhcDogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIGdyaWQtcm93LWdhcDogMTBweDtcXG4gIGdyaWQtY29sdW1uLWdhcDogNzdweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9wLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JtTmFtZSxcXG4uZm9ybUluc2lnaHQge1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5mb3JtQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggIzUzNmU4NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5mb3JtQ29udGFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50Q29udGFpbiB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmNvbW1lbnRUaXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uY29tbWVudEluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2VCdG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4udWxDb21tZW50IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICNjYXJkcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIG1hcmdpbjogMXJlbSAxcmVtIDA7XFxuICB9XFxuXFxuICAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG5cXG4gIC5wb2tlLWltZyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgfVxcblxcbiAgLmxvZ28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTZweDtcXG4gICAgbGVmdDogNzclO1xcbiAgfVxcblxcbiAgLm5hdi1iYXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbGVmdDogLTEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZy10b3A6IDVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzViZTtcXG4gICAgb3BhY2l0eTogMC45NTtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcbiAgLm5hdmlnYXRpb24gLmxpbmsge1xcbiAgICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gICAgbWFyZ2luOiAycmVtO1xcbiAgfVxcblxcbiAgLm5hdi1saW5rIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIH1cXG5cXG4gIC5zaG93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5vdmVyZmxvdy1oaWRkZW4ge1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICB9XFxuXFxuICAubmF2aWdhdGlvbi5hY3RpdmUge1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcblxcbiAgLm1lbnUtYnRuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgfVxcblxcbiAgLm1lbnUtaWNvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gIH1cXG5cXG4gIC5jbG9zZS1tZW51IHtcXG4gICAgdG9wOiAycmVtO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDkwJTtcXG4gIH1cXG5cXG4gIC5hZGQtbmV3LWxpbmsge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB9XFxuXFxuICAubW9kYWxDb250YWluZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgfVxcblxcbiAgLnBva2VJbmZvIHtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAzMHB4O1xcbiAgfVxcblxcbiAgLnBvcHVwLWltZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FB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O1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbjogMCA0MHB4IDAgMXJlbTtcXG59XFxuXFxuLmxvZ28taW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHBhZGRpbmc6IDVweCA1cHggNTBweCA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2aWdhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gIC5saW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIH1cXG5cXG4gIC5saW5rOmhvdmVyLFxcbiAgLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZDVhMTAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxufVxcblxcbi5jb250YWN0LWxpbmsge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uYWRkLW5ldy1saW5rIHtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbn1cXG5cXG4ubWVudS1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuI2NhcmRzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgLy8gYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmZiwgICM1RUJERkMsICM1RUJERkMsICMxQzRDQkQsICNmZmYpO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAjNTM2ZTg3O1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjAyNCkgMHB4IDBweCAwcHggMXB4LFxcbiAgICByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCAxcHggMHB4IDBweCxcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjAzKSAwcHggMHB4IDhweCAwcHgsXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMjBweCAzMHB4IDBweDtcXG59XFxuXFxuLnBva2UtaW1nIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ubGlrZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9saWtlLnBuZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmxpa2U6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9oZWFydC5wbmcnKTtcXG59XFxuXFxuLmNvdW50IHtcXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xcbn1cXG5cXG4ubGlrZXMtY291bnQge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgcGFkZGluZzogMC41cmVtIDAgMC4ycmVtO1xcbn1cXG5cXG4uYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbW1lbnQsXFxuLnJlc2VydmF0aW9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggJHNoYWRvdztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jb21tZW50OmhvdmVyLFxcbi5yZXNlcnZhdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAkYnRuLWhvdmVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmZvb3RlciB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyMHB4IDVweCAyMHB4IDE1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBBMjg1RjtcXG59XFxuXFxuLm1vZGFsQmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWxDb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogOTUlO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgcGFkZGluZy1ib3R0b206IDI4cHg7XFxufVxcblxcbi5zY3JvbGwge1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4uaW1hZ2UtcG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAtaW1nIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMjUlO1xcbn1cXG5cXG4ucG9rZS10aXRsZSB7XFxuICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLnBva2VJbmZvIHtcXG4gIGdhcDogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIGdyaWQtcm93LWdhcDogMTBweDtcXG4gIGdyaWQtY29sdW1uLWdhcDogNzdweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucG9wLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JtTmFtZSxcXG4uZm9ybUluc2lnaHQge1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5mb3JtQnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggJHNoYWRvdztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5mb3JtQ29udGFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb21tZW50Q29udGFpbiB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmNvbW1lbnRUaXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4uY29tbWVudEluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2VCdG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9jbG9zZS5wbmcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4udWxDb21tZW50IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICNjYXJkcyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIG1hcmdpbjogMXJlbSAxcmVtIDA7XFxuICB9XFxuICBcXG4gIC5pbWFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgfVxcbiAgXFxuICAucG9rZS1pbWcge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gIH1cXG5cXG4gIC50aXRsZSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIH1cXG5cXG4gIC5sb2dvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE2cHg7XFxuICAgIGxlZnQ6IDc3JTtcXG4gIH1cXG5cXG4gIC5uYXYtYmFyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgXFxuICAubmF2aWdhdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbGVmdDogLTEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZy10b3A6IDVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzViZTtcXG4gICAgb3BhY2l0eTogMC45NTtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICAubGluayB7XFxuICAgICAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICBmb250LXNpemU6IDIuNWVtO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAgICAgbWFyZ2luOiAycmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAubmF2LWxpbmsge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgfVxcblxcbiAgLnNob3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLm92ZXJmbG93LWhpZGRlbiB7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gIH1cXG4gIFxcbiAgLm5hdmlnYXRpb24uYWN0aXZlIHtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5tZW51LWJ0biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5tZW51LWljb24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICB9XFxuXFxuICAuY2xvc2UtbWVudSB7XFxuICAgIHRvcDogMnJlbTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA5MCU7XFxuICB9XFxuICBcXG4gIC5hZGQtbmV3LWxpbmsge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB9XFxuXFxuICAubW9kYWxDb250YWluZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgfVxcblxcbiAgLnBva2VJbmZvIHtcXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAzMHB4O1xcbiAgfVxcblxcbiAgLnBvcHVwLWltZyB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcbn0gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaWRBcnJheSB9IGZyb20gJy4vaWQuanMnO1xuXG5jb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCB1cmxMaWtlcyA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9xT1hXaVg1MmJ5bGZvMnFJQ2hEWC9saWtlcy8nO1xuY29uc3QgdXJsQ29tbWVudHMgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvcU9YV2lYNTJieWxmbzJxSUNoRFgvY29tbWVudHMnO1xuXG5jb25zdCBnZXRQb2tlbW9uID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke2lkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwcCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChiYXNlVVJMLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpa2VzID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgYXdhaXQgZmV0Y2godXJsTGlrZXMsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBkYXRhLml0ZW1faWQgfSksXG4gIH0pO1xufTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsTGlrZXMpO1xuICBjb25zdCBsaWtlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGxpa2VzO1xufTtcblxuY29uc3QgY3JlYXRlQ29tbWVudCA9IGFzeW5jIChkYXRhKSA9PiB7XG4gIGF3YWl0IGZldGNoKHVybENvbW1lbnRzLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGRhdGEuaXRlbV9pZCxcbiAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxuICAgICAgY29tbWVudDogZGF0YS5jb21tZW50LFxuICAgIH0pLFxuICB9KTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmxDb21tZW50c30/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCBsaWtlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGxpa2VzO1xufTtcblxuY29uc3Qgc2VuZENvbW1lbnQgPSBhc3luYyAocG9rZW1vbiwgbmFtZSwgY29tbWVudHMpID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBpdGVtX2lkOiBwb2tlbW9uLFxuICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgIGNvbW1lbnQ6IGNvbW1lbnRzLFxuICB9O1xuICBQcm9taXNlLnJlc29sdmUoYXdhaXQgY3JlYXRlQ29tbWVudChkYXRhKSk7XG59O1xuXG5jb25zdCBjYXBpdGFsaXplZCA9IChzdHJpbmcpID0+IHtcbiAgY29uc3QgY2FwaXQgPSBzdHJpbmcuc3BsaXQoJycpO1xuICBjYXBpdFswXSA9IGNhcGl0WzBdLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiBjYXBpdC5qb2luKCcnKTtcbn07XG5cbmNvbnN0IHNlbmRMaWtlID0gYXN5bmMgKHBva2Vtb24pID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBpdGVtX2lkOiBwb2tlbW9uLFxuICB9O1xuICBQcm9taXNlLnJlc29sdmUoYXdhaXQgY3JlYXRlTGlrZXMoZGF0YSkpO1xufTtcblxuY29uc3QgdXBkYXRlbGlrZXMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShnZXRMaWtlcygpKTtcbiAgY29uc3QgbGlrZUFwaSA9IGRhdGEuZmluZCgoeCkgPT4ge1xuICAgIGlmICh4Lml0ZW1faWQgPT09IGlkKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gbGlrZUFwaS5saWtlcztcbn07XG5cbmNvbnN0IGl0ZW1zQ291bnRlciA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGlkQXJyYXkoKTtcbiAgY29uc3QgY291bnQgPSBkYXRhLmxlbmd0aDtcbiAgcmV0dXJuIGNvdW50O1xufTtcblxuY29uc3QgY29tbWVudHNDb3VudGVyID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGRhdGFDb21tZW50ID0gYXdhaXQgZ2V0Q29tbWVudChpZCk7XG4gIGNvbnN0IGNvdW50ID0gZGF0YUNvbW1lbnQubGVuZ3RoO1xuICByZXR1cm4gY291bnQ7XG59O1xuXG5leHBvcnQge1xuICBnZXRQb2tlbW9uLCBjcmVhdGVMaWtlcywgZ2V0TGlrZXMsIGdldENvbW1lbnQsIGNyZWF0ZUFwcCwgc2VuZENvbW1lbnQsIGl0ZW1zQ291bnRlcixcbiAgY2FwaXRhbGl6ZWQsIHNlbmRMaWtlLCB1cGRhdGVsaWtlcywgY29tbWVudHNDb3VudGVyLFxufTtcbiIsImltcG9ydCB7XG4gIGdldFBva2Vtb24sIGdldENvbW1lbnQsIHNlbmRDb21tZW50LFxuICBpdGVtc0NvdW50ZXIsIGNhcGl0YWxpemVkLCBzZW5kTGlrZSwgdXBkYXRlbGlrZXMsIGNvbW1lbnRzQ291bnRlcixcbn0gZnJvbSAnLi9hcGkuanMnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbmNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbnVsLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24nKTtcbnVsLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtbGluayBsaXN0LWxpbmtcIj48YSBjbGFzcz1cImxpbmsgYWN0aXZlXCI+UG9rZWRleCgke2l0ZW1zQ291bnRlcigpfSk8L2E+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtbGluayBhZGQtbmV3LWxpbmtcIj48YSBjbGFzcz1cImxpbmtcIj5SZWdpb248L2E+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtbGluayBjb250YWN0LWxpbmtcIj48YSBjbGFzcz1cImxpbmtcIj5UeXBlczwvYT48L2xpPlxuYDtcbm5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbmNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpO1xuY29uc3QgaGFtYnVyZ3VlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJndWVyJyk7XG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZScpO1xuXG5oYW1idXJndWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBjbG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVyZmxvdy1oaWRkZW4nKTtcbn0pO1xuXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbmF2TWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmZsb3ctaGlkZGVuJyk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKS5mb3JFYWNoKChuKSA9PiBuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVyZmxvdy1oaWRkZW4nKTtcbn0pKTtcblxuY29uc3QgYWxlcnQgPSAobWVzc2FnZSwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IERJViA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBESVYuY2xhc3NOYW1lID0gYGFsZXJ0IGFsZXJ0LSR7Y2xhc3NOYW1lfWA7XG4gIERJVi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtZXNzYWdlKSk7XG4gIGNvbnN0IENPTlRBSU5FUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gIGNvbnN0IFBBR0UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUJ1dHRvbicpO1xuICBDT05UQUlORVIuaW5zZXJ0QmVmb3JlKERJViwgUEFHRSk7XG4gIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0JykucmVtb3ZlKCksIDE1MDApO1xufTtcblxuY29uc3QgY2xlYW5JbnB1dCA9ICgpID0+IHtcbiAgY29uc3QgZm9ybUluc2lnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybUluc2lnaHQnKTtcbiAgY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybU5hbWUnKTtcbiAgZm9ybUluc2lnaHQudmFsdWUgPSAnJztcbiAgZm9ybU5hbWUudmFsdWUgPSAnJztcbn07XG5cbmNvbnN0IHBvcHVwV2luZG93ID0gYXN5bmMgKHBva2Vtb24pID0+IHtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkcycpO1xuICBjb25zdCBtb2RhbEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIG1vZGFsQmFja2dyb3VuZC5jbGFzc05hbWUgPSAnbW9kYWxCYWNrZ3JvdW5kJztcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbEJhY2tncm91bmQpO1xuXG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBtb2RhbENvbnRhaW5lci5jbGFzc05hbWUgPSAnbW9kYWxDb250YWluZXInO1xuXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlQnRuJyk7XG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3Njcm9sbCcpO1xuICAgIG1vZGFsQmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3QgaW1hZ2VvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZW9udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlLXBvcHVwJyk7XG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlb250YWluZXIpO1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWltZycpO1xuICBpbWFnZS5zcmMgPSBwb2tlbW9uLnNwcml0ZXMub3RoZXIuZHJlYW1fd29ybGQuZnJvbnRfZGVmYXVsdDtcbiAgaW1hZ2UuYWx0ID0gcG9rZW1vbi5uYW1lO1xuICBpbWFnZW9udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICBjb25zdCBwb3BUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3BUaXRsZS5jbGFzc0xpc3QuYWRkKCdwb3AtdGl0bGUnKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQocG9wVGl0bGUpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncG9rZS10aXRsZScpO1xuICB0aXRsZS5pbm5lclRleHQgPSBjYXBpdGFsaXplZChwb2tlbW9uLm5hbWUpO1xuICBwb3BUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgcG9rZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9rZUluZm8uY2xhc3NMaXN0LmFkZCgncG9rZUluZm8nKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQocG9rZUluZm8pO1xuXG4gIGNvbnN0IHdlaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgd2VpZ2h0LmNsYXNzTGlzdC5hZGQoJ3dlaWdodCcpO1xuICB3ZWlnaHQuaW5uZXJUZXh0ID0gYFdlaWdodDogJHtwb2tlbW9uLndlaWdodH1gO1xuXG4gIHBva2VJbmZvLmFwcGVuZENoaWxkKHdlaWdodCk7XG5cbiAgY29uc3QgcG9rZUlEID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBwb2tlSUQuY2xhc3NMaXN0LmFkZCgncG9rZUlkJyk7XG4gIHBva2VJRC5pbm5lclRleHQgPSBgaWQ6ICR7cG9rZW1vbi5pZH0gYDtcbiAgcG9rZUluZm8uYXBwZW5kQ2hpbGQocG9rZUlEKTtcblxuICBjb25zdCB0eXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0eXBlLmNsYXNzTGlzdC5hZGQoJ3R5cGUnKTtcbiAgdHlwZS5pbm5lclRleHQgPSBgVHlwZTogJHtwb2tlbW9uLnR5cGVzWzBdLnR5cGUubmFtZX1gO1xuICBwb2tlSW5mby5hcHBlbmRDaGlsZCh0eXBlKTtcblxuICBjb25zdCBhYmlsaXR5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYWJpbGl0eTEuY2xhc3NMaXN0LmFkZCgnYWJpbGl0eTEnKTtcbiAgYWJpbGl0eTEuaW5uZXJUZXh0ID0gYEFiaWxpdHkgMTogJHtwb2tlbW9uLmFiaWxpdGllc1swXS5hYmlsaXR5Lm5hbWV9YDtcbiAgcG9rZUluZm8uYXBwZW5kQ2hpbGQoYWJpbGl0eTEpO1xuXG4gIGNvbnN0IGFiaWxpdHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBhYmlsaXR5Mi5jbGFzc0xpc3QuYWRkKCdhYmlsaXR5MicpO1xuICBhYmlsaXR5Mi5pbm5lclRleHQgPSBgQWJpbGl0eSAyOiAke3Bva2Vtb24uYWJpbGl0aWVzWzFdLmFiaWxpdHkubmFtZX1gO1xuICBwb2tlSW5mby5hcHBlbmRDaGlsZChhYmlsaXR5Mik7XG5cbiAgY29uc3QgY29tbWVudENvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudENvbnRhaW4uY2xhc3NMaXN0LmFkZCgnY29tbWVudENvbnRhaW4nKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudENvbnRhaW4pO1xuXG4gIGNvbnN0IGRhdGFDb21tZW50ID0gYXdhaXQgZ2V0Q29tbWVudChwb2tlbW9uLm5hbWUpO1xuICBjb25zdCBjb3VudCA9IDA7XG5cbiAgY29uc3QgY29tbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29tbWVudFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRUaXRsZScpO1xuICBpZiAoZGF0YUNvbW1lbnQubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBjb21tZW50VGl0bGUudGV4dENvbnRlbnQgPSBgQ29tbWVudHMoJHtjb3VudH0pYDtcbiAgfSBlbHNlIHtcbiAgICBjb21tZW50VGl0bGUudGV4dENvbnRlbnQgPSBgQ29tbWVudHMoJHthd2FpdCBjb21tZW50c0NvdW50ZXIocG9rZW1vbi5uYW1lKX0pYDtcbiAgfVxuICBjb21tZW50Q29udGFpbi5hcHBlbmRDaGlsZChjb21tZW50VGl0bGUpO1xuXG4gIGNvbnN0IGNvbW1lbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbW1lbnRJbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRJbmZvJyk7XG4gIGNvbW1lbnRDb250YWluLmFwcGVuZENoaWxkKGNvbW1lbnRJbmZvKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB1bC5jbGFzc0xpc3QuYWRkKCd1bENvbW1lbnQnKTtcbiAgdWwuaWQgPSAnY29tbWVudHMnO1xuICBjb21tZW50SW5mby5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhQ29tbWVudC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdsaUNvbW1lbnQnKTtcbiAgICBsaS5pbm5lckhUTUwgPSBgJHtkYXRhQ29tbWVudFtpXS5jcmVhdGlvbl9kYXRlfSAke2RhdGFDb21tZW50W2ldLnVzZXJuYW1lfTogJHtkYXRhQ29tbWVudFtpXS5jb21tZW50fWA7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG5cbiAgY29uc3QgZm9ybUNvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9ybUNvbnRhaW4uY2xhc3NMaXN0LmFkZCgnZm9ybUNvbnRhaW4nKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW4pO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4gIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKCdmb3JtVGl0bGUnKTtcbiAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBhIGNvbW1lbnQnO1xuICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBmb3JtTmFtZS5jbGFzc0xpc3QuYWRkKCdmb3JtTmFtZScpO1xuICBmb3JtTmFtZS5pZCA9ICdmb3JtTmFtZSc7XG4gIGZvcm1OYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGZvcm1OYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG4gIGZvcm1OYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBuYW1lJyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybU5hbWUpO1xuXG4gIGNvbnN0IGZvcm1JbnNpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgZm9ybUluc2lnaHQuaWQgPSAnZm9ybUluc2lnaHQnO1xuICBmb3JtSW5zaWdodC5jbGFzc0xpc3QuYWRkKCdmb3JtSW5zaWdodCcpO1xuICBmb3JtSW5zaWdodC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dGFyZWEnKTtcbiAgZm9ybUluc2lnaHQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgZm9ybUluc2lnaHQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIGluc2lnaHQnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtSW5zaWdodCk7XG5cbiAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZvcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybUJ1dHRvbicpO1xuICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgZm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0NvbW1lbnQnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnV0dG9uKTtcblxuICBmb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybUluc2lnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybUluc2lnaHQnKS52YWx1ZTtcbiAgICBjb25zdCBmb3JtTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtTmFtZScpLnZhbHVlO1xuICAgIGlmIChmb3JtSW5zaWdodCA9PT0gJycgJiYgZm9ybU5hbWUgPT09ICcnKSB7XG4gICAgICBhbGVydCgnRm9ybSBjYW5ub3QgYmUgZW1wdHknLCAnZGFuZ2VyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IFByb21pc2UucmVzb2x2ZShzZW5kQ29tbWVudChwb2tlbW9uLm5hbWUsIGZvcm1OYW1lLCBmb3JtSW5zaWdodCkpO1xuICAgICAgY29uc3QgZGF0YUNvbW1lbnQgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2V0Q29tbWVudChwb2tlbW9uLm5hbWUpKTtcbiAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRzJyk7XG4gICAgICB3aGlsZSAodWwuZmlyc3RDaGlsZCkge1xuICAgICAgICB1bC5yZW1vdmVDaGlsZCh1bC5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2Nyb2xsJyk7XG4gICAgICBkYXRhQ29tbWVudC5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnbGlDb21tZW50Jyk7XG4gICAgICAgIGxpLmlubmVySFRNTCA9IGAke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50LnVzZXJuYW1lfTogJHtjb21tZW50LmNvbW1lbnR9YDtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2Nyb2xsJyk7XG4gICAgY2xlYW5JbnB1dCgpO1xuICB9KTtcblxuICBmb3JtQ29udGFpbi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgbW9kYWxCYWNrZ3JvdW5kLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGRpc3BsYXkgPSBhc3luYyAobW9uc3RlcikgPT4ge1xuICBjb25zdCBwb2tlbW9uID0gYXdhaXQgZ2V0UG9rZW1vbihtb25zdGVyKTtcbiAgY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkcycpO1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKTtcbiAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcblxuICBjb25zdCBpbWFnZW9udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltYWdlb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtY29udGFpbmVyJyk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2VvbnRhaW5lcik7XG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgncG9rZS1pbWcnKTtcbiAgaW1hZ2Uuc3JjID0gcG9rZW1vbi5zcHJpdGVzLm90aGVyLmRyZWFtX3dvcmxkLmZyb250X2RlZmF1bHQ7XG4gIGltYWdlLmFsdCA9IHBva2Vtb24ubmFtZTtcbiAgaW1hZ2VvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIHRpdGxlLmlubmVyVGV4dCA9IGNhcGl0YWxpemVkKHBva2Vtb24ubmFtZSk7XG4gIGNhcmRUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgbGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsaWtlLmNsYXNzTGlzdC5hZGQoJ2xpa2UnKTtcbiAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKGxpa2UpO1xuXG4gIGNvbnN0IGxpa2VzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaWtlc1RleHQuY2xhc3NMaXN0LmFkZCgnY291bnQnKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChsaWtlc1RleHQpO1xuXG4gIGNvbnN0IGxpa2VzQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxpa2VzQ291bnQuY2xhc3NMaXN0LmFkZCgnbGlrZXMtY291bnQnKTtcbiAgbGlrZXNDb3VudC5pbm5lckhUTUwgPSBgJHthd2FpdCBQcm9taXNlLnJlc29sdmUodXBkYXRlbGlrZXMocG9rZW1vbi5uYW1lKSl9IGxpa2VzYDtcbiAgbGlrZXNUZXh0LmFwcGVuZENoaWxkKGxpa2VzQ291bnQpO1xuXG4gIGxpa2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHNlbmRMaWtlKHBva2Vtb24ubmFtZSkpO1xuICAgIGxpa2VzQ291bnQuaW5uZXJIVE1MID0gYCR7YXdhaXQgUHJvbWlzZS5yZXNvbHZlKHVwZGF0ZWxpa2VzKHBva2Vtb24ubmFtZSkpfSBsaWtlc2A7XG4gIH0pO1xuXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidG5zJyk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29tbWVudHMuY2xhc3NMaXN0LmFkZCgnY29tbWVudCcpO1xuICBjb21tZW50cy5pZCA9ICdjb21tZW50LWJ0bic7XG4gIGNvbW1lbnRzLmlubmVyVGV4dCA9ICdDb21tZW50JztcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChjb21tZW50cyk7XG5cbiAgY29tbWVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdzY3JvbGwnKTtcbiAgICBwb3B1cFdpbmRvdyhwb2tlbW9uKTtcbiAgfSk7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2VydmF0aW9ucy5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbicpO1xuICByZXNlcnZhdGlvbnMuaWQgPSAncmVzZXJ2YXRpb24tYnRuJztcbiAgcmVzZXJ2YXRpb25zLmlubmVyVGV4dCA9ICdSZXNlcnZhdGlvbnMnO1xuICBidXR0b25zLmFwcGVuZENoaWxkKHJlc2VydmF0aW9ucyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xuIiwiaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgaWRBcnJheSB9IGZyb20gJy4vaWQuanMnO1xuLy8gaW1wb3J0IHsgY3JlYXRlTGlrZXMgfSBmcm9tICcuL2FwaS5qcyc7XG5cbmNvbnN0IG1vbnN0ZXJzID0gaWRBcnJheSgpO1xuY29uc3QgY3JlYXRlQ2FyZHMgPSAoKSA9PiB7XG4gIG1vbnN0ZXJzLmZvckVhY2goKHBva2Vtb24pID0+IHtcbiAgICAvLyBjcmVhdGVMaWtlcyhwb2tlbW9uKTtcbiAgICBkaXNwbGF5KHBva2Vtb24pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmRzO1xuIiwiY29uc3QgaWRBcnJheSA9ICgpID0+IHtcbiAgY29uc3QgaWQgPSBbJ2NoYXJpemFyZCcsICdwaWthY2h1JywgJ2FtcGhhcm9zJywgJ21hZ21hcicsICdkcmFnb25pdGUnLCAnbWV3dHdvJyxcbiAgICAnYXJjYW5pbmUnLCAnbHVnaWEnLCAnYWx0YXJpYScsXG4gIF07XG4gIHJldHVybiBpZDtcbn07XG5cbmNvbnN0IGNyZWF0ZUlkQXJyYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGlkID0gW1xuICAgIHsgaXRlbV9pZDogJ2NoYXJpemFyZCcgfSxcbiAgICB7IGl0ZW1faWQ6ICdwaWthY2h1JyB9LFxuICAgIHsgaXRlbV9pZDogJ2FtcGhhcm9zJyB9LFxuICAgIHsgaXRlbV9pZDogJ21hZ21hcicgfSxcbiAgICB7IGl0ZW1faWQ6ICdkcmFnb25pdGUnIH0sXG4gICAgeyBpdGVtX2lkOiAnbWV3dHdvJyB9LFxuICAgIHsgaXRlbV9pZDogJ2FyY2FuaW5lJyB9LFxuICAgIHsgaXRlbV9pZDogJ2x1Z2lhJyB9LFxuICAgIHsgaXRlbV9pZDogJ2FsdGFyaWEnIH0sXG4gIF07XG4gIHJldHVybiBpZDtcbn07XG5cbmV4cG9ydCB7IGlkQXJyYXksIGNyZWF0ZUlkQXJyYXkgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgY3JlYXRlQ2FyZHMgZnJvbSAnLi9tb2R1bGVzL2Z1bmN0aW9ucy5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNyZWF0ZUNhcmRzKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==