/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Aleo:wght@500&family=Dancing+Script:wght@400;500;600;700&family=Gloria+Hallelujah&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  font-family: 'Gloria Hallelujah', cursive;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: #8cb5b7;\r\n}\r\n\r\n/* styling for the header section starts */\r\n.header-nav {\r\n  background-color: #a9d5e6;\r\n  height: 110px;\r\n}\r\n\r\n.top-one {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.logo{\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-left: -10px;\r\n}\r\n\r\n.top-two {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.menu {\r\n  margin-right: 5%;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.closeMenu,\r\n.search-section,\r\n.menu.active,\r\n.nav-section {\r\n  display: none;\r\n}\r\n\r\n.nav-section.active {\r\n  display: block;\r\n}\r\n\r\n.header-nav.active {\r\n  height: 550px;\r\n}\r\n\r\n.closeMenu.active {\r\n  display: block;\r\n  margin-right: 5%;\r\n  margin-top: 1.5rem;\r\n}\r\n\r\n.search-section.active {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.search-section input {\r\n  font-size: 0.9rem;\r\n  padding: 0;\r\n  width: 12rem;\r\n  border: none;\r\n  margin-right: 1%;\r\n  border-bottom: 2px solid rgb(31, 127, 149);\r\n  outline: none;\r\n  background-color: #a9d5e6;\r\n}\r\n\r\n.search-section button {\r\n  font-size: 0.9em;\r\n  width: 6rem;\r\n  margin-top: 10px;\r\n  background-color: rgb(31, 127, 149);\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 2em;\r\n}\r\n\r\n.nav-section ul {\r\n  margin: 1rem 2rem 0 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.nav-section ul li {\r\n  margin-bottom: 2rem;\r\n  font-size: 1.1rem;\r\n  color: #593b3b;\r\n}\r\n\r\n.count-On-display {\r\n  display: block;\r\n  margin-top: 0.5rem;\r\n  text-align: center;\r\n  color: greenyellow;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.search-section button:hover {\r\n  color: black;\r\n  background-color: rgb(49, 169, 133);\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-section ul li:hover {\r\n  color: rgb(21, 156, 186);\r\n  cursor: pointer;\r\n  border-bottom: 2px solid rgb(21, 156, 186);\r\n  border-radius: 0.5em;\r\n}\r\n\r\n/* styling for the header section ends */\r\n\r\n/* styling for the main section starts */\r\n.card-secton {\r\n  margin-top: 5rem;\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  justify-items: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.country-Container {\r\n  background-color: #a0bcc6;\r\n  border: 3px solid rgb(101, 101, 101);\r\n  padding: 15px;\r\n  border-radius: 1em;\r\n}\r\n\r\n.card-secton.active {\r\n  margin: 2% 5%;\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  gap: 2rem;\r\n}\r\n\r\n.pop-Container {\r\n  position: relative;\r\n  margin-top: 4rem;\r\n  background-color: #628490;\r\n  border: none;\r\n  padding: 15px;\r\n  border-radius: 1em;\r\n}\r\n\r\n.flag {\r\n  margin-top: 10px;\r\n  width: 100%;\r\n  height: 200px;\r\n}\r\n\r\n.country-Name {\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: center;\r\n}\r\n\r\n.commentLike {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.fl-active {\r\n  margin-top: 1rem;\r\n  margin-left: 5%;\r\n  margin-right: 4%;\r\n  width: 90%;\r\n  height: auto;\r\n}\r\n\r\n.commentBtn {\r\n  font-size: 1.1em;\r\n  background-color: rgb(31, 127, 149);\r\n  color: #fff;\r\n  padding: 0.1em 1em;\r\n  border: none;\r\n  border-radius: 0.6em;\r\n}\r\n\r\n.Usrcomments {\r\n  color: white;\r\n}\r\n\r\n#remove {\r\n  color: #183343;\r\n  position: absolute;\r\n  right: -10px;\r\n  top: 0.5px;\r\n}\r\n\r\n.country-description h2 {\r\n  text-align: center;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.country-description h2,\r\n.country-span {\r\n  color: greenyellow;\r\n}\r\n\r\nfooter p {\r\n  margin: 1rem;\r\n}\r\n\r\n.country-description p {\r\n  font-size: 15px;\r\n  color: #fff;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.country-description .wiki-link a {\r\n  color: blue;\r\n}\r\n\r\n.commentLike-Pop {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.commentContainer h2 {\r\n  text-align: center;\r\n}\r\n\r\n#userName {\r\n  font-size: 1em;\r\n  padding: 0;\r\n  width: 50%;\r\n  padding-left: 10px;\r\n  border: none;\r\n  border-bottom: 2px solid rgb(5, 7, 7);\r\n  outline: none;\r\n  color: white;\r\n  background-color: #628490;\r\n}\r\n\r\n#userName::placeholder {\r\n  color: aliceblue;\r\n}\r\n\r\n.form-Container form textarea {\r\n  width: 90%;\r\n  height: 120px;\r\n  margin-top: 2rem;\r\n  padding-left: 10px;\r\n  padding-top: 8px;\r\n  border: 3px solid black;\r\n  border-radius: 1em;\r\n  color: black;\r\n}\r\n\r\n.form-Container form textarea::placeholder {\r\n  color: rgb(150, 138, 138);\r\n}\r\n\r\n.form-Container .submit-comment {\r\n  margin-top: 1rem;\r\n  margin-left: 53%;\r\n  background-color: rgb(49, 169, 133);\r\n}\r\n\r\n.commentBtn:hover {\r\n  background-color: rgb(49, 169, 133);\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-heart:hover,\r\n.fa-circle-xmark:hover,\r\n#remove:hover {\r\n  color: #9e3333;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-Container .submit-comment:hover {\r\n  background-color: rgb(23, 197, 50);\r\n  cursor: pointer;\r\n}\r\n\r\n/* styling for the main section ends */\r\n\r\n/* styling for the footer section starts */\r\nfooter {\r\n  font-size: 20px;\r\n  text-align: center;\r\n  margin: 1rem 5% 1rem 5%;\r\n  color: rgb(255, 255, 255);\r\n  background: rgb(31, 127, 149);\r\n  border: 0.5px solid black;\r\n  border-radius: 2%;\r\n}\r\n\r\n.insertLike {\r\n  color: rgb(255, 89, 0);\r\n  font-size: 1.5rem;\r\n  margin-right: 5px;\r\n}\r\n\r\n/* styling for the footer section ends */\r\n\r\n@media screen and (min-width: 768px) {\r\n  /* styling for the header section starts */\r\n  .header-nav {\r\n    display: flex;\r\n    padding-right: 2%;\r\n  }\r\n\r\n  .top-one {\r\n    margin-left: 3%;\r\n  }\r\n\r\n  .menu,\r\n  .closeMenu {\r\n    display: none;\r\n  }\r\n\r\n  .top-two {\r\n    flex-direction: row;\r\n    margin-left: 3%;\r\n  }\r\n\r\n  .search-section {\r\n    display: flex;\r\n    width: 30vw;\r\n    margin-top: 1.75rem;\r\n    margin-bottom: 2rem;\r\n    margin-right: 2vw;\r\n  }\r\n\r\n  .search-section input {\r\n    font-size: 1em;\r\n  }\r\n\r\n  .count-On-display {\r\n    display: flex;\r\n    margin-top: 4rem;\r\n    margin-right: 5vw;\r\n    color: rgb(31, 127, 149);\r\n    font-size: 2vw;\r\n  }\r\n\r\n  .nav-section {\r\n    display: flex;\r\n    margin-top: 1.75rem;\r\n  }\r\n\r\n  .nav-section ul {\r\n    flex-direction: row;\r\n    list-style: none;\r\n    margin-right: 3vw;\r\n  }\r\n\r\n  .nav-section ul li {\r\n    margin-right: 15%;\r\n    margin-bottom: 2.7rem;\r\n    font-size: 1.75vw;\r\n    color: #848484;\r\n  }\r\n\r\n  /* styling for the header section ends */\r\n\r\n  /* styling for the main section starts */\r\n\r\n  .card-secton {\r\n    margin: 2% 5%;\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .pop-Container {\r\n    position: relative;\r\n    margin: 4% 0 4% 0;\r\n    width: 85%;\r\n  }\r\n\r\n  .fl-active {\r\n    margin-left: 3%;\r\n    width: 40%;\r\n  }\r\n\r\n  .commentLike {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 5px 5%;\r\n  }\r\n\r\n  .img-and-desc {\r\n    display: flex;\r\n  }\r\n\r\n  .commentLike-Pop {\r\n    display: grid;\r\n    grid-template-columns: 50% 50%;\r\n    gap: 2rem;\r\n    margin: 2% 5%;\r\n  }\r\n\r\n  /* styling for the main section ends */\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://WhereTO/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://WhereTO/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://WhereTO/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://WhereTO/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://WhereTO/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://WhereTO/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://WhereTO/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://WhereTO/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://WhereTO/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://WhereTO/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _asset_logo_img_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/logo-img.gif */ \"./src/asset/logo-img.gif\");\n/* harmony import */ var _modules_DomValues_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DomValues.js */ \"./src/modules/DomValues.js\");\n/* harmony import */ var _modules_loder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/loder.js */ \"./src/modules/loder.js\");\n\n\n\n\n\n\nconst myIcon = new Image();\nmyIcon.src = _asset_logo_img_gif__WEBPACK_IMPORTED_MODULE_1__;\n\n_modules_DomValues_js__WEBPACK_IMPORTED_MODULE_2__.logoContainer.appendChild(myIcon);\n\n(0,_modules_loder_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://WhereTO/./src/index.js?");

/***/ }),

/***/ "./src/modules/DomValues.js":
/*!**********************************!*\
  !*** ./src/modules/DomValues.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Africabtn: () => (/* binding */ Africabtn),\n/* harmony export */   Americasbtn: () => (/* binding */ Americasbtn),\n/* harmony export */   Asiabtn: () => (/* binding */ Asiabtn),\n/* harmony export */   Europebtn: () => (/* binding */ Europebtn),\n/* harmony export */   allCountriesbtn: () => (/* binding */ allCountriesbtn),\n/* harmony export */   cardContainer: () => (/* binding */ cardContainer),\n/* harmony export */   cardSection: () => (/* binding */ cardSection),\n/* harmony export */   closemenuBtn: () => (/* binding */ closemenuBtn),\n/* harmony export */   countryInp: () => (/* binding */ countryInp),\n/* harmony export */   displayCountOnPage: () => (/* binding */ displayCountOnPage),\n/* harmony export */   headerNav: () => (/* binding */ headerNav),\n/* harmony export */   logoContainer: () => (/* binding */ logoContainer),\n/* harmony export */   menuBtn: () => (/* binding */ menuBtn),\n/* harmony export */   navSection: () => (/* binding */ navSection),\n/* harmony export */   searchBtn: () => (/* binding */ searchBtn),\n/* harmony export */   searchContainer: () => (/* binding */ searchContainer)\n/* harmony export */ });\nconst searchBtn = document.getElementById('search-btn');\nconst countryInp = document.getElementById('country-inp');\nconst logoContainer = document.querySelector('.logo');\nconst allCountriesbtn = document.querySelector('.nav-all-Coun');\nconst Americasbtn = document.querySelector('.nav-Americas');\nconst Asiabtn = document.querySelector('.nav-Asia');\nconst Africabtn = document.querySelector('.nav-Africa');\nconst Europebtn = document.querySelector('.nav-Europe');\nconst cardSection = document.getElementById('result');\nconst cardContainer = document.querySelector('.main-container');\nconst menuBtn = document.querySelector('.menu');\nconst closemenuBtn = document.querySelector('.closeMenu');\nconst searchContainer = document.querySelector('.search-section');\nconst headerNav = document.querySelector('.header-nav');\nconst navSection = document.getElementsByClassName('nav-section')[0];\nconst displayCountOnPage = document.querySelector('.count-On-display');\n\n\n\n\n//# sourceURL=webpack://WhereTO/./src/modules/DomValues.js?");

/***/ }),

/***/ "./src/modules/getApiData.js":
/*!***********************************!*\
  !*** ./src/modules/getApiData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   baseURL: () => (/* binding */ baseURL),\n/* harmony export */   involvmentApiComments: () => (/* binding */ involvmentApiComments),\n/* harmony export */   involvmentApiLikes: () => (/* binding */ involvmentApiLikes)\n/* harmony export */ });\nconst baseURL = 'https://restcountries.com/v3.1/all';\nconst involvmentApiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Itard3RCLyUY3Uv4wxbU/likes';\nconst involvmentApiComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Itard3RCLyUY3Uv4wxbU/comments';\n\n\n\n//# sourceURL=webpack://WhereTO/./src/modules/getApiData.js?");

/***/ }),

/***/ "./src/modules/loder.js":
/*!******************************!*\
  !*** ./src/modules/loder.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DomValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomValues.js */ \"./src/modules/DomValues.js\");\n/* harmony import */ var _populate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populate.js */ \"./src/modules/populate.js\");\n/* harmony import */ var _popupwindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popupwindow.js */ \"./src/modules/popupwindow.js\");\n/* harmony import */ var _submitLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./submitLikes.js */ \"./src/modules/submitLikes.js\");\n/* harmony import */ var _submitComment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./submitComment.js */ \"./src/modules/submitComment.js\");\n/* harmony import */ var _mobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile.js */ \"./src/modules/mobile.js\");\n\n\n\n\n\n\n\nconst loadOnPage = () => {\n  window.addEventListener('load', () => {\n    (0,_mobile_js__WEBPACK_IMPORTED_MODULE_5__.mobileMenu)();\n    (0,_populate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('allcountries');\n  });\n\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.allCountriesbtn.addEventListener('click', () => {\n    (0,_mobile_js__WEBPACK_IMPORTED_MODULE_5__.hideMenu)();\n    (0,_populate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('allcountries');\n  });\n\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.Europebtn.addEventListener('click', () => {\n    (0,_mobile_js__WEBPACK_IMPORTED_MODULE_5__.hideMenu)();\n    (0,_populate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Europe');\n  });\n\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.Africabtn.addEventListener('click', () => {\n    (0,_mobile_js__WEBPACK_IMPORTED_MODULE_5__.hideMenu)();\n    (0,_populate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Africa');\n  });\n\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.Asiabtn.addEventListener('click', () => {\n    (0,_mobile_js__WEBPACK_IMPORTED_MODULE_5__.hideMenu)();\n    (0,_populate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Asia');\n  });\n\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.Americasbtn.addEventListener('click', () => {\n    (0,_mobile_js__WEBPACK_IMPORTED_MODULE_5__.hideMenu)();\n    (0,_populate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Americas');\n  });\n\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.searchBtn.addEventListener('click', () => {\n    (0,_mobile_js__WEBPACK_IMPORTED_MODULE_5__.hideMenu)();\n    (0,_popupwindow_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_DomValues_js__WEBPACK_IMPORTED_MODULE_0__.countryInp.value);\n    window.scroll();\n  });\n\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.cardContainer.addEventListener('click', (e) => {\n    e.preventDefault();\n    if (e.target.className === 'commentBtn') {\n      setTimeout(async () => {\n        const comments = await (0,_submitComment_js__WEBPACK_IMPORTED_MODULE_4__.fetchComments)(e.target.id);\n        (0,_popupwindow_js__WEBPACK_IMPORTED_MODULE_2__.displayComments)(comments);\n        (0,_popupwindow_js__WEBPACK_IMPORTED_MODULE_2__.displayCommentCount)(comments.length);\n      }, 500);\n      (0,_popupwindow_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.target.id);\n    }\n\n    if (e.target.id === 'remove') {\n      window.location.reload(); \n    }\n\n    if (e.target.className === 'fa-regular fa-heart fa-2xl') {\n      (0,_submitLikes_js__WEBPACK_IMPORTED_MODULE_3__.addLike)(e.target.id);\n      const likeValue = Number(e.target.parentElement.children[1].innerHTML);\n      e.target.parentElement.children[1].innerHTML = likeValue + 1;\n    }\n\n    if (e.target.className === 'commentBtn submit-comment') {\n      const countryName = e.target.id;\n      const userName = document.getElementById('userName').value;\n      const userComment = document.getElementById('userComment').value;\n      \n      (0,_submitComment_js__WEBPACK_IMPORTED_MODULE_4__.postComment)(countryName, userName, userComment);\n      document.getElementById('userName').value = '';\n      document.getElementById('userComment').value = '';\n\n      setTimeout(async () => {\n        const comments = await (0,_submitComment_js__WEBPACK_IMPORTED_MODULE_4__.fetchComments)(countryName);\n        (0,_popupwindow_js__WEBPACK_IMPORTED_MODULE_2__.displayComments)(comments);\n        (0,_popupwindow_js__WEBPACK_IMPORTED_MODULE_2__.displayCommentCount)(comments.length);\n      }, 500);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadOnPage);\n\n//# sourceURL=webpack://WhereTO/./src/modules/loder.js?");

/***/ }),

/***/ "./src/modules/mobile.js":
/*!*******************************!*\
  !*** ./src/modules/mobile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideMenu: () => (/* binding */ hideMenu),\n/* harmony export */   mobileMenu: () => (/* binding */ mobileMenu)\n/* harmony export */ });\n/* harmony import */ var _DomValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomValues.js */ \"./src/modules/DomValues.js\");\n\n\nconst mobileMenu = () => {\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.menuBtn.addEventListener('click', () => {\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.closemenuBtn.classList.toggle('active');\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.menuBtn.classList.toggle('active');\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.searchContainer.classList.add('active');\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.headerNav.classList.add('active');\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.navSection.classList.add('active');\n  });\n\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.closemenuBtn.addEventListener('click', () => {\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.closemenuBtn.classList.toggle('active');\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.menuBtn.classList.toggle('active');\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.searchContainer.classList.remove('active');\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.headerNav.classList.remove('active');\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.navSection.classList.remove('active');\n  });\n  window.onscroll = () => {\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.closemenuBtn.classList.remove('active');\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.menuBtn.classList.remove('active');\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.searchContainer.classList.remove('active');\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.headerNav.classList.remove('active');\n    _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.navSection.classList.remove('active');\n  };\n};\n\nconst hideMenu = () => {\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.closemenuBtn.classList.remove('active');\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.menuBtn.classList.remove('active');\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.searchContainer.classList.remove('active');\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.headerNav.classList.remove('active');\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_0__.navSection.classList.remove('active');\n};\n\n\n\n\n//# sourceURL=webpack://WhereTO/./src/modules/mobile.js?");

/***/ }),

/***/ "./src/modules/populate.js":
/*!*********************************!*\
  !*** ./src/modules/populate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getApiData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getApiData.js */ \"./src/modules/getApiData.js\");\n/* harmony import */ var _DomValues_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomValues.js */ \"./src/modules/DomValues.js\");\n/* harmony import */ var _submitLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submitLikes.js */ \"./src/modules/submitLikes.js\");\n\n\n\n\nlet likevalue = 0;\nlet tempCount = 0;\nconst getCountry = (country, selected, likeData) => {\n  \n  likeData.forEach((element) => {\n    if (element.item_id === country.name.common) {\n      likevalue = element.likes;\n    }\n  });\n\n  if (selected === 'allcountries') {\n    tempCount += 1;\n    return `\n            <div class=\"country-Container\">\n                <img class=\"flag\" src=\"${country.flags.png}\">\n                <h2 class = \"country-Name\">${country.name.common}</h2>\n                 <div class=\"commentLike\">\n                    <button id=\"${country.name.common}\" class=\"commentBtn\" type=\"text\">Comment</button>\n\n                    <div class=\"countLikes\">\n                        <i id=\"${country.name.common}\"  class=\"fa-regular fa-heart fa-2xl\"></i>\n                     <span class=\"insertLike\">${likevalue}</span><span>likes</span>\n                    </div>\n                 </div>\n           </div>\n          `;\n  }\n\n  if (country.region === selected) {\n    tempCount += 1;\n    return `\n              <div class=\"country-Container\">\n                <img class=\"flag\" src=\"${country.flags.png}\">\n                <h2 class = \"country-Name\">${country.name.common}</h2>\n                <div class=\"commentLike\">\n                <button id=\"${country.name.common}\" class=\"commentBtn\" type=\"text\">Comment</button>\n      \n                    <div class=\"countLikes\">\n                        <i id=\"${country.name.common}\"  class=\"fa-regular fa-heart fa-2xl\"></i>\n                        <span class=\"insertLike\">${likevalue}</span><span>likes</span>\n                    </div>\n                    \n                </div>\n            </div>\n          `;\n  }\n  return '';\n};\n\nconst displayCountries = (countries, selected, likeData) => {\n  tempCount = 0;\n  const countriesHTML = countries.map((country) => getCountry(country, selected, likeData));\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_1__.cardSection.innerHTML = countriesHTML.join('');\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_1__.displayCountOnPage.innerHTML = tempCount;\n};\n\nconst loadCountries = async (selected) => {\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_1__.cardSection.classList.remove('active');\n  const likeData = await (0,_submitLikes_js__WEBPACK_IMPORTED_MODULE_2__.getLikeData)();\n  await fetch(_getApiData_js__WEBPACK_IMPORTED_MODULE_0__.baseURL)\n    .then((response) => response.json())\n    .then((data) => displayCountries(data, selected, likeData));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadCountries);\n\n//# sourceURL=webpack://WhereTO/./src/modules/populate.js?");

/***/ }),

/***/ "./src/modules/popupwindow.js":
/*!************************************!*\
  !*** ./src/modules/popupwindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   displayCommentCount: () => (/* binding */ displayCommentCount),\n/* harmony export */   displayComments: () => (/* binding */ displayComments)\n/* harmony export */ });\n/* harmony import */ var _getApiData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getApiData.js */ \"./src/modules/getApiData.js\");\n/* harmony import */ var _DomValues_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomValues.js */ \"./src/modules/DomValues.js\");\n\n\n\nconst getCountry = (country, Name) => {\n  let capitalCity = `${country.capital}`;\n  capitalCity = capitalCity.toLowerCase();\n  const countryName = country.name.common.toLowerCase();\n\n  if ((capitalCity === Name) || (countryName === Name)) {\n    const timeZ = country.timezones[0];\n    const popultion = country.population.toLocaleString();\n\n    return `\n      <div class=\"pop-Container\">\n            <i class=\"fa-solid fa-circle-xmark fa-2xl\" id=\"remove\"></i>\n            <div class=\"img-and-desc\">\n               <img class=\"fl-active\" src=\"${country.flags.png}\">\n\n               <div class=\"country-description\">\n                  <h2>${country.name.common}</h2>\n                  <p>Offical-Name -> <span class=\"country-span\">${country.name.official}</span></p>\n                  <p>Capital-City -> <span class=\"country-span\">${country.capital}</span></p>\n                  <p>currencies -> <span class=\"country-span\">${country.currencies[Object.keys(country.currencies)].symbol} - ${country.currencies[Object.keys(country.currencies)].name}</span></p>\n                  <p>sub-region -> <span class=\"country-span\">${country.subregion}</span></p>\n                  <p>Languages -> <span class=\"country-span\">${country.languages[Object.keys(country.languages)]}</span></p>\n                  <p>Population -> <span class=\"country-span\">${popultion}</span></p>\n                  <p>Time-zone -> <span class=\"country-span\">${timeZ}</span></p>\n                  <p class=\"wiki-link\">For more Info Visit -> <a href=\"https://en.wikipedia.org/wiki/${country.name.common}\">${country.name.common}</a> </p>\n               </div>\n             </div> \n          \n            <div class=\"commentLike-Pop\">\n\n              <div class=\"commentContainer\">\n                  <h2>Comments (<span class=\"comment-count\">0</span>)</h2>\n                  <div class=\"allComments\">\n\n                  </div>\n              </div> \n                \n                <div class=\"form-Container\">\n                    <h3>Add a Comment</h3>\n                    <form action=\"#\">\n                        <input type=\"text\" name=\"name\" id=\"userName\" placeholder=\"Enter Your name\" required>\n                        <textarea type=\"text\" id=\"userComment\" rows=\"10\" cols=\"40\" placeholder=\"Enter Your Comment here...\" required></textarea>\n                        <button id=\"${country.name.common}\" class=\"commentBtn submit-comment\" type=\"text\">Comment</button>\n                    </form>\n                    \n                </div>\n                \n            </div>\n       </div>\n    `;\n  }\n  return '';\n};\n\nconst displayCountries = (countries, Name) => {\n  const countriesHTML = countries.map((country) => getCountry(country, Name));\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_1__.cardSection.innerHTML = countriesHTML.join('');\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_1__.cardSection.classList.add('active');\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_1__.displayCountOnPage.innerHTML = 1;\n};\n\nconst displayCommentCount = (count) => {\n  const commentCountElement = document.querySelector('.comment-count');\n  commentCountElement.textContent = count;\n};\n\nconst displayComments = (comments) => {\n  const allCommentsElement = document.querySelector('.allComments');\n  allCommentsElement.innerHTML = '';\n\n  comments.forEach((comment) => {\n    const commentElement = document.createElement('div');\n    commentElement.className = \"Usrcomments\";\n    if(comment.creation_date !== '' && comment.username !== '' && comment.comment !== '') {\n      commentElement.textContent = `${comment.creation_date}- ${comment.username}: ${comment.comment}`;\n      allCommentsElement.appendChild(commentElement);\n    }\n\n  });\n};\n\nconst searchandFind = async (value) => {\n  _DomValues_js__WEBPACK_IMPORTED_MODULE_1__.countryInp.value = '';\n  const Name = value.toLowerCase();\n  await fetch(_getApiData_js__WEBPACK_IMPORTED_MODULE_0__.baseURL)\n    .then((response) => response.json())\n    .then((data) => displayCountries(data, Name));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchandFind);\n\n//# sourceURL=webpack://WhereTO/./src/modules/popupwindow.js?");

/***/ }),

/***/ "./src/modules/submitComment.js":
/*!**************************************!*\
  !*** ./src/modules/submitComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchComments: () => (/* binding */ fetchComments),\n/* harmony export */   postComment: () => (/* binding */ postComment)\n/* harmony export */ });\n/* harmony import */ var _getApiData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getApiData.js */ \"./src/modules/getApiData.js\");\n\n\nconst postComment = async (countryName, userName, userComment) => {\n  const commentData = {\n    item_id: countryName,\n    username: userName,\n    comment: userComment,\n  };\n\n  try {\n    const response = await fetch(_getApiData_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApiComments, {\n      method: 'POST',\n      body: JSON.stringify(commentData),\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n\n    if (response.ok) {\n      return ('Comment posted successfully!');\n    }\n    return ('Failed to post comment');\n  } catch (error) {\n    return ('Error:', error.message);\n  }\n};\n\nconst fetchComments = async (countryName) => {\n  try {\n    const response = await fetch(`${_getApiData_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApiComments}?item_id=${countryName}`);\n\n    if (response.ok) {\n      const comments = await response.json();\n      return comments;\n    }\n    return [];\n  } catch (error) {\n    return [];\n  }\n};\n\n\n//# sourceURL=webpack://WhereTO/./src/modules/submitComment.js?");

/***/ }),

/***/ "./src/modules/submitLikes.js":
/*!************************************!*\
  !*** ./src/modules/submitLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   getLikeData: () => (/* binding */ getLikeData)\n/* harmony export */ });\n/* harmony import */ var _getApiData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getApiData.js */ \"./src/modules/getApiData.js\");\n\n\nconst addLike = async (countryName) => {\n  try {\n    await fetch(_getApiData_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApiLikes, {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n      body: JSON.stringify({\n        item_id: countryName,\n      }),\n    });\n    return 'Recived all data';\n  } catch (error) {\n    return `Adding Likes error:${error}`;\n  }\n};\n\nconst getLikeData = async () => {\n  try {\n    const response = await fetch(_getApiData_js__WEBPACK_IMPORTED_MODULE_0__.involvmentApiLikes, {\n      method: 'GET',\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    });\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    return [];\n  }\n};\n\n\n\n//# sourceURL=webpack://WhereTO/./src/modules/submitLikes.js?");

/***/ }),

/***/ "./src/asset/logo-img.gif":
/*!********************************!*\
  !*** ./src/asset/logo-img.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"75205c86dad9a3ddb63b.gif\";\n\n//# sourceURL=webpack://WhereTO/./src/asset/logo-img.gif?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;