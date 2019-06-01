(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("null"), require("{\"implForWrapper\":null}"), require("{\"Canvas\":null}"), require("{\"DOMParser\":null}"));
	else if(typeof define === 'function' && define.amd)
		define(["null", "{\"implForWrapper\":null}", "{\"Canvas\":null}", "{\"DOMParser\":null}"], factory);
	else if(typeof exports === 'object')
		exports["CanvasEditor"] = factory(require("null"), require("{\"implForWrapper\":null}"), require("{\"Canvas\":null}"), require("{\"DOMParser\":null}"));
	else
		root["CanvasEditor"] = factory(root["null"], root["{\"implForWrapper\":null}"], root["{\"Canvas\":null}"], root["{\"DOMParser\":null}"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasEditor", function() { return CanvasEditor; });
/* harmony import */ var _fabric_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _fabric_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fabric_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_freeContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _components_toolsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _css_main_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _css_main_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_main_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_freeContainer_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _css_freeContainer_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_freeContainer_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_inputs_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _css_inputs_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_inputs_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_contextmenu_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var _css_contextmenu_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_contextmenu_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_res_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
/* harmony import */ var _css_res_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_res_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_html_element_js_src_css_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36);
/* harmony import */ var _node_modules_html_element_js_src_css_main_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_element_js_src_css_main_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_contextmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var blueimp_canvas_to_blob__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38);
/* harmony import */ var blueimp_canvas_to_blob__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(blueimp_canvas_to_blob__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
/* harmony import */ var _node_modules_html_element_js_src_rangeSlider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16);
/* harmony import */ var a_color_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39);
/* harmony import */ var a_color_picker__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(a_color_picker__WEBPACK_IMPORTED_MODULE_13__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }















/**
 * 
 * @param {Element} parentel
 * @param {Object} [opts]
 */

function CanvasEditor(parentel) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!parentel) return console.error('Parent element is undefined!');
  var fontLoader = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
    textContent: 'loading font',
    id: 'CE_font-loader'
  });
  var fontloaderTimeout;
  var requireFonts = [];
  var clickCatchMask = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["div"]({
    className: 'CE_click-catch-mask'
  });
  var mainWrapper = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["create"]('div', {
    id: 'CE_wrapper'
  });
  var canvasContainer = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["create"]('div', {
    id: 'CE_canvasContainer'
  });
  var objectFillColor = '#000';
  var strokeColor = '#000';
  var colorPickerContainer = null;
  var colorPicker = null;
  var canvasContextMenuOptions = {
    background: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Background color'
    }),
    "delete": _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Delete'
    }),
    paste: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Paste'
    }),
    unlockAll: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Unlock All'
    })
  };
  var objectContextMenuOptions = {
    arrange: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Arrange',
      children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["create"]('i', {
        className: 'CE_icon select-down',
        style: {
          transform: 'rotate(-90deg)'
        }
      })],
      attr: {
        'data-expandable': 'true'
      }
    }),
    align: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Align',
      children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["create"]('i', {
        className: 'CE_icon select-down',
        style: {
          transform: 'rotate(-90deg)'
        }
      })],
      attr: {
        'data-expandable': 'true'
      }
    }),
    cut: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Cut'
    }),
    copy: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Copy'
    }),
    deleteBtn: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Delete'
    }),
    group: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Group'
    }),
    lock: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Lock'
    })
  };
  var arrangeOptions = {
    sendBackwards: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Send backward'
    }),
    bringForward: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Bring forward'
    }),
    bringToFront: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Bring front'
    }),
    sendToBack: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Send back'
    })
  };
  var alignOptions = {
    center: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Center'
    }),
    hCenter: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Horizontally center'
    }),
    vCenter: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
      textContent: 'Vertically center'
    })
  };
  var canvasContextMenu = Object(_components_contextmenu__WEBPACK_IMPORTED_MODULE_9__["contextMenu"])(Object.values(canvasContextMenuOptions));
  var objectContextMenu = Object(_components_contextmenu__WEBPACK_IMPORTED_MODULE_9__["contextMenu"])(Object.values(objectContextMenuOptions));
  var arrangeContextMenu = Object(_components_contextmenu__WEBPACK_IMPORTED_MODULE_9__["contextMenu"])(Object.values(arrangeOptions));
  var alignContextMenu = Object(_components_contextmenu__WEBPACK_IMPORTED_MODULE_9__["contextMenu"])(Object.values(alignOptions));
  var copiedObject;
  var mouseEvent;
  var pages = {};
  pages.page = {};
  pages.length = 0;
  var activeCanvas;
  /**
   * @type {toolsContainer}
   */

  var alltools;
  /**
   * @type {fabric.ActiveSelection[]}
   */

  var lockedObjects = [];
  var scale = 1;
  var translate = {};
  var zoom = Object(_node_modules_html_element_js_src_rangeSlider__WEBPACK_IMPORTED_MODULE_12__["rangeSlider"])({
    min: 0.001,
    max: 2,
    value: 1,
    step: 0.001
  });
  init();

  function init() {
    fabric.Object.prototype.set({
      transparentCorners: false,
      cornerColor: '#88f',
      borderColor: '#88f',
      cornerSize: 6,
      strokeWidth: 0
    });
    fabric.Canvas.prototype.preserveObjectStacking = true;
    fabric.Object.prototype.onSelect = objectOnSelect;
    mainWrapper.appendChild(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["div"]({
      id: 'CE_zoom',
      children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
        className: 'CE_icon zoom-out',
        onmousedown: function onmousedown() {
          scale = parseFloat((scale + '').substr(0, 3));
          if (scale > 0.5) scale -= 0.1;
          zoom.setvalue(scale);
        }
      }), zoom, _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["span"]({
        className: 'CE_icon zoom-in',
        onmousedown: function onmousedown() {
          scale = parseFloat((scale + '').substr(0, 3));
          if (scale < 2) scale += 0.1;
          zoom.setvalue(scale);
        }
      })]
    }));
    mainWrapper.appendChild(clickCatchMask);
    mainWrapper.appendChild(canvasContainer);
    parentel.appendChild(mainWrapper);

    zoom.onchange = function (value) {
      updateScaling(value);
    };

    clickCatchMask.addEventListener('click', deselectObjects);
    /**
     * @type {tools}
     */

    alltools = Object(_components_toolsContainer__WEBPACK_IMPORTED_MODULE_2__["toolsContainer"])();
    addPage();
    initTools();
    initContextMenu();
    fixPagesContainerPosition();
    window.addEventListener('resize', fixPagesContainerPosition);
    var containerWrapper = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["get"]('#CE_container-wrapper');
    colorPickerContainer = Object(_components_freeContainer__WEBPACK_IMPORTED_MODULE_1__["freeContainer"])({
      parentElement: containerWrapper,
      title: 'Color picker',
      disableCloseBtn: true,
      enableMask: true,
      center: true
    });
    colorPicker = a_color_picker__WEBPACK_IMPORTED_MODULE_13__["createPicker"](colorPickerContainer.DOMElements.body, {
      showHSL: false,
      palette: 'PALETTE_MATERIAL_CHROME',
      showAlpha: true,
      showHEX: true,
      color: 'rgb(205, 220, 57)',
      paletteEditable: true
    });

    if ('fonts' in sessionStorage && alltools) {
      var fonts = sessionStorage.getItem('fonts');

      try {
        fonts = JSON.parse(fonts);

        if (Array.isArray(fonts)) {
          var fontFamily = alltools.textSettings.fontFamily;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = fonts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var font = _step.value;
              fontFamily.appendChild(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["create"]('option', {
                value: font,
                textContent: font
              }));
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  function addText(value, props) {
    value = value || 'hello';
    props = props || {
      editable: true,
      fontSize: 40,
      top: 100,
      left: 100,
      fill: objectFillColor,
      stroke: strokeColor
    };
    var text = new fabric.Textbox(value, props);
    activeCanvas.add(text);
    activeCanvas.centerObject(text);
    activeCanvas.setActiveObject(text);
  }

  function addImage(img, props) {
    props = props || {
      left: 0,
      top: 0
    };
    var image = new fabric.Image(img, props);
    activeCanvas.add(image);
    var width = image.getScaledWidth();
    var height = image.getScaledHeight();
    var canvasWidth = activeCanvas.getWidth();
    var canvasHeight = activeCanvas.getHeight();

    if (width > canvasWidth) {
      var diff = width - canvasWidth;
      width = width - diff;
      image.scaleToWidth(width);
    }

    if (height > canvasHeight) {
      var _diff = height - canvasHeight;

      height = height - _diff;
      image.scaleToHeight(height);
    }

    activeCanvas.setActiveObject(image);
  }

  function addRect(props) {
    props = props || {
      fill: objectFillColor,
      width: 50,
      height: 50,
      stroke: strokeColor
    };
    var rect = new fabric.Rect(props);
    activeCanvas.add(rect);
    activeCanvas.centerObject(rect);
    activeCanvas.setActiveObject(rect);
  }

  function addCircle(props) {
    props = props || {
      fill: objectFillColor,
      radius: 25,
      stroke: strokeColor
    };
    var circle = new fabric.Circle(props);
    activeCanvas.add(circle);
    activeCanvas.centerObject(circle);
    activeCanvas.setActiveObject(circle);
  }

  function addTriangle(props) {
    props = props || {
      fill: objectFillColor,
      height: 50,
      width: 50,
      strokeColor: strokeColor
    };
    var triangle = new fabric.Triangle(props);
    activeCanvas.add(triangle);
    activeCanvas.centerObject(triangle);
    activeCanvas.setActiveObject(triangle);
  }

  function addPage() {
    var page = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["create"]('canvas');
    var canvas = new fabric.Canvas();
    canvasContainer.appendChild(page);
    canvas.initialize(page);
    canvas.setBackgroundColor('#fff');
    var height = alltools.pageSettings.pageHeight.value;
    var width = alltools.pageSettings.pageWidth.value;
    canvas.setHeight(height);
    canvas.setWidth(width);
    var i = canvasContainer.childElementCount;
    var pageName = 'page-' + i;
    ++pages.length;
    canvas.page = {
      DOMElement: page,
      name: pageName
    };
    /**
     * @type {fabric.Canvas}
     */

    pages.page[pageName] = canvas;
    canvas.on('mouse:down', updateActiveCanvas);
    var element = canvas.getElement().parentElement;
    element.setAttribute('data-name', pageName);
    element.addEventListener('contextmenu', canvasContextMenuTrigger);
    fixPagesContainerPosition();
    updateActiveCanvas(canvas);
  }
  /**
   * 
   * @param {fabric.Canvas} canvas 
   */


  function updateActiveCanvas(canvas) {
    canvas = canvas instanceof fabric.Canvas ? canvas : this;
    if (activeCanvas === canvas) return;

    if (pages.length === 1) {
      canvasContextMenuOptions["delete"].classList.add('CE_disabled');
    } else {
      canvasContextMenuOptions["delete"].classList.remove('CE_disabled');
    }

    deselectObjects();
    updateActiveContainer(canvas);
    activeCanvas = canvas;
    var height = activeCanvas.getHeight();
    var width = activeCanvas.getWidth();
    var pageName = activeCanvas.page.name;
    var pageSettings = alltools.pageSettings;
    pageSettings.pageHeight.value = height;
    pageSettings.pageWidth.value = width;
    pageSettings.pageName.value = pageName;
  }

  function deselectObjects() {
    if (activeCanvas) {
      activeCanvas.discardActiveObject();
      activeCanvas.renderAll();
    }

    ;
  }

  function initTools() {
    var _alltools = alltools,
        tools = _alltools.tools,
        textSettings = _alltools.textSettings,
        pageSettings = _alltools.pageSettings,
        objectSettings = _alltools.objectSettings;

    (function initPrimitiveTools() {
      tools.addPage.addEventListener('click', function () {
        return addPage();
      });
      tools.circle.addEventListener('click', function () {
        return addCircle();
      });
      tools.rectangle.addEventListener('click', function () {
        return addRect();
      });
      tools.triangle.addEventListener('click', function () {
        return addTriangle();
      });
      tools.addText.addEventListener('click', function () {
        return addText();
      });
      tools.openImage.addEventListener('change', handleImage);
      tools.loadSVG.addEventListener('change', handleSVG);
      tools.backgroundColor.addEventListener('click', function (e) {
        colorPickerContainer.setTitle('Color picker - fill');
        colorPickerContainer.setVisiblity(true);

        colorPicker.onchange = function (e, color) {
          var activeObject = activeCanvas.getActiveObject();
          objectFillColor = color;
          applyStyle(activeObject, 'fill', color);
        };
      });
      tools.grab.addEventListener('click', function () {
        canvasContainer.style.cursor = 'grab';
        var children = canvasContainer.children;
        var start = {
          x: 0,
          y: 0
        };
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var child = _step2.value;
            child.style.pointerEvents = 'none';
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        canvasContainer.onmousedown = mousedown;
        canvasContainer.ontouchstart = mousedown;
        /**
         * 
         * @param {MouseEvent | TouchEvent} e 
         */

        function mousedown(e) {
          canvasContainer.style.cursor = 'grabbing';
          start.x = e.clientX || e.touches[0].clientX;
          start.y = e.clientY || e.touches[0].clientY;
          document.onmousemove = mousemove;
          document.ontouchmove = mousemove;
          document.onmouseup = mouseup;
          document.ontouchend = mouseup;
        }
        /**
         * 
         * @param {MouseEvent | TouchEvent} e 
         */


        function mousemove(e) {
          var x = e.clientX || e.touches[0].clientX;
          var y = e.clientY || e.touches[0].clientY;
          var dsX = x - start.x;
          var dsY = y - start.y;
          start = {
            x: x,
            y: y
          };
          var cc = /translate\((.*),(.*)\)/g.exec(canvasContainer.style.transform);
          var transform = {
            x: parseFloat(cc[1]),
            y: parseFloat(cc[2])
          };
          translate = {
            x: transform.x + dsX,
            y: transform.y + dsY
          };
          canvasContainer.style.transform = "translate(".concat(translate.x, "px, ").concat(translate.y, "px) scale(").concat(scale, ")");
        }

        function mouseup() {
          canvasContainer.style.cursor = 'grab';
          document.onmousemove = null;
          document.onmouseup = null;
          document.ontouchmove = null;
          document.ontouchend = null;
        }
      });
      tools.selection.addEventListener('click', function () {
        canvasContainer.style.cursor = 'default';
        var children = canvasContainer.children;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var child = _step3.value;
            child.style.removeProperty('pointer-events');
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        canvasContainer.onmousedown = null;
        canvasContainer.ontouchstart = null;
      });
    })();

    (function initTextSettings() {
      textSettings.fontFamily.onchange = function (value) {
        if (fontloaderTimeout) clearTimeout(fontloaderTimeout);
        var fontFamily = value;
        var activeObject = activeCanvas.getActiveObject();
        if (activeObject && activeObject.type !== 'textbox' || !activeObject) return;

        if (!fontLoader) {
          mainWrapper.appendChild(fontLoader);
        }

        fontLoader.style.fontWeight = activeObject.fontWeight;
        fontLoader.style.fontFamily = value;
        fontLoader.style.opacity = 1;

        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(function () {
            applyStyle(activeObject, 'fontFamily', fontFamily);
            fontLoader.style.opacity = 0 + '';
          });
        } else {
          setTimeout(function () {
            applyStyle(activeObject, 'fontFamily', fontFamily);
            fontLoader.style.opacity = 0 + '';
          }, 100);
        }
      };

      textSettings.fontSize.oninput = function () {
        var fontSize = this.value;
        var activeObject = activeCanvas.getActiveObject();
        if (activeObject.type !== 'textbox') return;
        applyStyle(activeObject, 'fontSize', fontSize);
      };

      textSettings.fontWeight.onchange = function (value) {
        if (fontloaderTimeout) clearTimeout(fontloaderTimeout);
        var fontWeight = value;
        var activeObject = activeCanvas.getActiveObject();
        if (activeObject && activeObject.type !== 'textbox' || !activeObject) return;
        fontLoader.style.fontWeight = value;
        fontLoader.style.fontFamily = activeObject.fontFamily;
        fontLoader.style.opacity = 1;

        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(function () {
            applyStyle(activeObject, 'fontWeight', fontWeight);
            fontLoader.style.opacity = 0 + '';
          });
        } else {
          setTimeout(function () {
            applyStyle(activeObject, 'fontWeight', fontWeight);
            fontLoader.style.opacity = 0 + '';
          }, 100);
        }
      };

      textSettings.underline.addEventListener('click', function () {
        var activeObject = activeCanvas.getActiveObject();
        if (activeObject.type !== 'textbox') return;

        if (activeObject.underline) {
          this.classList.remove('active');
          applyStyle(activeObject, 'underline', false);
        } else {
          this.classList.add('active');
          applyStyle(activeObject, 'underline', true);
        }
      });
      textSettings.italic.addEventListener('click', function () {
        var activeObject = activeCanvas.getActiveObject();
        if (activeObject.type !== 'textbox') return;

        if (activeObject.fontStyle === 'italic') {
          this.classList.remove('active');
          applyStyle(activeObject, 'fontStyle', 'normal');
        } else {
          this.classList.add('active');
          applyStyle(activeObject, 'fontStyle', 'italic');
        }
      });
      textSettings.strikethrough.addEventListener('click', function () {
        var activeObject = activeCanvas.getActiveObject();
        if (activeObject.type !== 'textbox') return;

        if (activeObject.linethrough) {
          this.classList.remove('active');
          applyStyle(activeObject, 'linethrough', false);
        } else {
          this.classList.add('active');
          applyStyle(activeObject, 'linethrough', true);
        }
      });
    })();

    (function initPageSettings() {
      pageSettings.pageHeight.addEventListener('blur', function () {
        var height = parseFloat(this.value);
        activeCanvas.setHeight(height);
        activeCanvas.renderAll();
        fixPagesContainerPosition();
      });
      pageSettings.pageWidth.addEventListener('blur', function () {
        var width = parseFloat(this.value);
        activeCanvas.setWidth(width);
        activeCanvas.renderAll();
        fixPagesContainerPosition();
      });
      pageSettings.pageName.addEventListener('blur', function () {
        activeCanvas.page.name = this.value;
      });
    })();

    (function initObjectSettings() {
      objectSettings.opacity.onchange = function (value) {
        var activeObjects = activeCanvas.getActiveObjects();
        if (activeObjects.length === 0) return;else {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = activeObjects[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var object = _step4.value;
              object.set('opacity', value);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                _iterator4["return"]();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
        activeCanvas.renderAll();
      };

      objectSettings.dropShadow.onchange = function () {
        var activeObjects = activeCanvas.getActiveObjects();
        if (activeObjects.length === 0) return;
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = activeObjects[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var object = _step5.value;

            if (this.value) {
              object.setShadow({
                color: '#000',
                blur: objectSettings.blur.value,
                offsetX: objectSettings.offsetX.value,
                offsetY: objectSettings.offsetY.value
              });
            } else {
              object.setShadow(null);
            }
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        activeCanvas.renderAll();
      };

      objectSettings.offsetX.oninput = function () {
        var activeObjects = activeCanvas.getActiveObjects();
        if (activeObjects.length === 0) return;
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = activeObjects[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var object = _step6.value;
            object.shadow.offsetX = this.value;
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
              _iterator6["return"]();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        activeCanvas.renderAll();
      };

      objectSettings.offsetY.oninput = function () {
        var activeObjects = activeCanvas.getActiveObjects();
        if (activeObjects.length === 0) return;
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = activeObjects[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var object = _step7.value;
            if (!object.shadow) return;
            object.shadow.offsetY = this.value;
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
              _iterator7["return"]();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        activeCanvas.renderAll();
      };

      objectSettings.blur.oninput = function () {
        var activeObjects = activeCanvas.getActiveObjects();
        if (activeObjects.length === 0) return;
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = activeObjects[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var object = _step8.value;
            if (!object.shadow) return;
            object.shadow.blur = this.value;
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
              _iterator8["return"]();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        activeCanvas.renderAll();
      };

      objectSettings.color.onclick = function () {
        colorPickerContainer.setTitle('Color picker - shadow');
        colorPickerContainer.setVisiblity(true);

        colorPicker.onchange = function (e, color) {
          var activeObjects = activeCanvas.getActiveObjects();
          if (activeObjects.length === 0) return;
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = activeObjects[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var object = _step9.value;
              if (!object.shadow) return;
              object.shadow.color = color;
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                _iterator9["return"]();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }

          activeCanvas.renderAll();
        };
      };

      objectSettings.strokeColor.addEventListener('click', function () {
        colorPickerContainer.setTitle('Color picker - stroke');
        colorPickerContainer.setVisiblity(true);

        colorPicker.onchange = function (e, color) {
          var activeObject = activeCanvas.getActiveObject();
          strokeColor = color;
          applyStyle(activeObject, 'stroke', strokeColor);
        };
      });

      objectSettings.strokeToggle.onchange = function () {
        if (this.value) {
          var width = parseFloat(objectSettings.strokeWidth.value.substr(0, 3)) || 1;
          applyStyle(activeCanvas.getActiveObject(), 'strokeWidth', width);
        } else {
          applyStyle(activeCanvas.getActiveObject(), 'strokeWidth', 0);
        }
      };

      objectSettings.strokeWidth.oninput = function () {
        var width = parseFloat(this.value.substr(0, 3));
        applyStyle(activeCanvas.getActiveObject(), 'strokeWidth', width);
      };
    })();
  }

  function initContextMenu() {
    var align = objectContextMenuOptions.align,
        arrange = objectContextMenuOptions.arrange,
        copy = objectContextMenuOptions.copy,
        cut = objectContextMenuOptions.cut,
        deleteBtn = objectContextMenuOptions.deleteBtn,
        lock = objectContextMenuOptions.lock;
    objectContextMenu.childMenu(Object.values(arrangeOptions), arrange);
    objectContextMenu.childMenu(Object.values(alignOptions), align);

    arrangeContextMenu.itemOnclick = alignContextMenu.itemOnclick = arrangeContextMenu.maskOnclick = alignContextMenu.maskOnclick = function () {
      objectContextMenu.hide();
    };

    canvasContextMenuOptions["delete"].addEventListener('click', deleteCanvas);
    canvasContextMenuOptions.paste.addEventListener('click', pasteObject);
    canvasContextMenuOptions.unlockAll.addEventListener('click', unlockObjects);
    canvasContextMenuOptions.background.addEventListener('click', function () {
      colorPickerContainer.setTitle('Color picker - background');
      colorPickerContainer.setVisiblity(true);

      colorPicker.onchange = function (e, color) {
        activeCanvas.setBackgroundColor(color, activeCanvas.renderAll.bind(activeCanvas));
      };
    });
    copy.addEventListener('click', copyObject);
    cut.addEventListener('click', cutObject);
    deleteBtn.addEventListener('click', deleteObject);
    lock.addEventListener('click', lockObject);

    var _loop = function _loop(key) {
      arrangeOptions[key].addEventListener('click', function () {
        var activeObject = activeCanvas.getActiveObject();
        activeObject[key]();
      });
    };

    for (var key in arrangeOptions) {
      _loop(key);
    }

    var _loop2 = function _loop2(key) {
      alignOptions[key].addEventListener('click', function () {
        setObjectAlignment(key);
      });
    };

    for (var key in alignOptions) {
      _loop2(key);
    }
  }

  function setObjectAlignment(alignment) {
    var activeObject = activeCanvas.getActiveObject();

    switch (alignment) {
      case 'center':
        activeCanvas.centerObject(activeObject);
        break;

      case 'hCenter':
        activeCanvas.centerObjectH(activeObject);
        break;

      case 'vCenter':
        activeCanvas.centerObjectV(activeObject);
        break;
    }

    activeCanvas.renderAll();
  }

  function copyObject() {
    if (!activeCanvas) return;
    var activeObject = activeCanvas.getActiveObject();
    copiedObject = null;
    activeObject.clone(function (object) {
      copiedObject = object;
    });
  }

  function cutObject() {
    copyObject();
    deleteObject();
  }

  function pasteObject() {
    if (!activeCanvas) return;

    if (mouseEvent) {
      var location = activeCanvas.getPointer(mouseEvent);
      var pos = new fabric.Point(location.x, location.y);
      copiedObject.setPositionByOrigin(pos, 'center', 'center');

      if (copiedObject.type !== 'activeSelection') {
        activeCanvas.add(copiedObject);
      } else {
        var _activeCanvas;

        (_activeCanvas = activeCanvas).add.apply(_activeCanvas, _toConsumableArray(copiedObject.getObjects()));
      }
    } else {
      if (copiedObject.type !== 'activeSelection') {
        activeCanvas.add(copiedObject);
      } else {
        var _activeCanvas2;

        (_activeCanvas2 = activeCanvas).add.apply(_activeCanvas2, _toConsumableArray(copiedObject.getObjects()));
      }
    }

    activeCanvas.setActiveObject(copiedObject);
    copyObject();
    activeCanvas.renderAll();
  }

  function deleteCanvas() {
    if (pages.length === 1) return;
    var page = activeCanvas.page;
    if (!confirm('Delete ' + page.name + '?')) return;
    activeCanvas.page = null;
    activeCanvas.dispose();
    activeCanvas = null;
    --pages.length;
    page.DOMElement.parentElement.removeChild(page.DOMElement);
    delete pages.page[page.name];

    for (var key in pages.page) {
      if (key !== 'length') {
        updateActiveCanvas(pages.page[key]);
        break;
      }
    }

    fixPagesContainerPosition();
  }

  function deleteObject() {
    var activeObject = activeCanvas.getActiveObject();

    if (activeObject.type === 'activeSelection') {
      var _activeCanvas3;

      (_activeCanvas3 = activeCanvas).remove.apply(_activeCanvas3, _toConsumableArray(activeObject.getObjects()));
    } else {
      activeCanvas.remove(activeObject);
    }
  }

  function lockObject() {
    var activeObject = activeCanvas.getActiveObject();

    if (activeObject.type !== 'activeSelection') {
      lock(activeObject);
    } else {
      var objects = activeObject.getObjects();
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = objects[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var object = _step10.value;
          lock(object);
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
            _iterator10["return"]();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }
    }

    activeCanvas.discardActiveObject();
    activeCanvas.renderAll();

    function lock(object) {
      object.selectable = false;
      lockedObjects.push(object);
    }
  }

  function unlockObjects() {
    if (lockedObjects.length === 0) return;

    while (lockedObjects.length > 0) {
      lockedObjects.pop().selectable = true;
    }
  }
  /**
   * 
   * @param {MouseEvent} e 
   */


  function canvasContextMenuTrigger(e) {
    e.preventDefault();
    mouseEvent = e;
    var pageName = this.getAttribute('data-name');

    if (activeCanvas.page.pageName !== pageName) {
      updateActiveCanvas(pages.page[pageName]);
    }

    var group = objectContextMenuOptions.group;
    var activeObject = activeCanvas.getActiveObject();
    var length = activeCanvas.getActiveObjects().length;

    if (activeObject) {
      objectContextMenu.show(e);

      if (length > 1 && activeObject.type === 'activeSelection') {
        group.classList.remove('CE_disabled');
        group.textContent = 'Group';

        group.onclick = function () {
          activeObject.toGroup();
        };
      } else if (activeObject.type === 'group') {
        group.classList.remove('CE_disabled');
        group.textContent = 'Ungroup';

        group.onclick = function () {
          activeObject.toActiveSelection();
        };
      } else {
        group.textContent = 'Group';
        group.classList.add('CE_disabled');
      }

      if (activeObject.lockUniScaling) {
        objectContextMenuOptions.lock.textContent = 'Unlock';
      } else {
        objectContextMenuOptions.lock.textContent = 'Lock';
      }
    } else {
      if (copiedObject) {
        canvasContextMenuOptions.paste.classList.remove('CE_disabled');
      } else {
        canvasContextMenuOptions.paste.classList.add('CE_disabled');
      }

      if (lockedObjects.length > 0) {
        canvasContextMenuOptions.unlockAll.classList.remove('CE_disabled');
      } else {
        canvasContextMenuOptions.unlockAll.classList.add('CE_disabled');
      }

      canvasContextMenu.show(e);
    }
  }

  function fixPagesContainerPosition() {
    var ContainerClient = canvasContainer.getBoundingClientRect();
    var ContainerParentClient = canvasContainer.parentElement.getBoundingClientRect();
    var y = ContainerParentClient.height / 2 - ContainerClient.height / 2;
    var x = ContainerParentClient.width / 2 - ContainerClient.width / 2;
    translate = {
      x: x,
      y: y
    };
    canvasContainer.style.transform = "translate(".concat(x, "px, ").concat(y, "px) scale(").concat(scale, ")");
  }

  function updateScaling(val) {
    scale = val;
    canvasContainer.style.transform = "translate(".concat(translate.x, "px, ").concat(translate.y, "px) scale(").concat(scale, ")");
  }

  function handleImage() {
    var reader = new FileReader();
    reader.onload = readerOnLoad;

    function readerOnLoad(e) {
      var imgObj = new Image();
      imgObj.src = e.target.result;

      imgObj.onload = function imgonload() {
        addImage(imgObj);
      };
    }

    reader.readAsDataURL(this.files[0]);
  }

  function handleSVG() {
    mainWrapper.style.pointerEvents = 'none';
    mainWrapper.style.cursor = 'progress';
    var reader = new FileReader();
    reader.onload = readerOnLoad;

    function readerOnLoad(e) {
      var svg = e.target.result;
      fabric.loadSVGFromString(svg, function (result, options) {
        var _activeCanvas4;

        if (activeCanvas.getObjects().length !== 0) {
          addPage();
        }

        activeCanvas.setHeight(options.height);
        activeCanvas.setWidth(options.width);

        (_activeCanvas4 = activeCanvas).add.apply(_activeCanvas4, _toConsumableArray(result));

        mainWrapper.style.removeProperty('pointer-events');
        mainWrapper.style.removeProperty('cursor');
      });
    }

    reader.readAsText(this.files[0]);
  }
  /**
   * 
   * @param {fabric.Canvas} canvas 
   */


  function updateActiveContainer(canvas) {
    if (activeCanvas) {
      var _pageName = activeCanvas.page.name;

      var _el = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["get"]("div[data-name=".concat(_pageName, "]"));

      if (_el) _el.classList.remove('active');
    }

    var pageName = canvas.page.name;
    var el = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_11__["get"]("div[data-name=".concat(pageName, "]"));
    if (el) el.classList.add('active');
  }

  function objectOnSelect() {
    var activeObject = this || activeCanvas.getActiveObject();
    if (['activeSelection', 'group'].indexOf(activeObject.type) > -1) return;
    colorPickerContainer.setVisiblity(false);
    var textSettings = alltools.textSettings;
    var objectSettings = alltools.objectSettings;

    if (activeObject.type === 'text') {
      var text = activeObject.text;
      var textobj = activeObject.toObject();
      delete textobj.text;
      delete textobj.type;
      var clonedtextobj = JSON.parse(JSON.stringify(textobj));
      var textbox = new fabric.Textbox(text, clonedtextobj);
      deleteObject();
      activeObject = textbox;
      activeCanvas.add(textbox);
      activeCanvas.setActiveObject(textbox);
    }

    if (activeObject.type === 'textbox') {
      var fontSize = activeObject.fontSize;
      var fontFamily = activeObject.fontFamily;
      var fontWeight = activeObject.fontWeight;

      if (activeObject.underline) {
        textSettings.underline.classList.add('active');
      } else {
        textSettings.underline.classList.remove('active');
      }

      if (activeObject.fontStyle === 'italic') {
        textSettings.italic.classList.add('active');
      } else {
        textSettings.italic.classList.remove('active');
      }

      if (activeObject.linethrough) {
        textSettings.strikethrough.classList.add('active');
      } else {
        textSettings.strikethrough.classList.remove('active');
      }

      textSettings.fontFamily.setvalue(fontFamily);
      textSettings.fontWeight.setvalue(fontWeight);
      textSettings.fontSize.value = fontSize;
    }

    if (activeObject.strokeWidth > 0) {
      objectSettings.strokeToggle.setvalue(true);
      objectSettings.strokeWidth.value = activeObject.strokeWidth;
    } else {
      objectSettings.strokeToggle.setvalue(false);
    }

    objectSettings.opacity.setvalue(activeObject.opacity);

    if (activeObject.shadow) {
      objectSettings.offsetX.value = activeObject.shadow.offsetX;
      objectSettings.offsetY.value = activeObject.shadow.offsetY;
      objectSettings.blur.value = activeObject.shadow.blur;
    }

    if (!activeObject.get('shadow')) {
      objectSettings.dropShadow.setvalue(false);
    } else {
      objectSettings.dropShadow.setvalue(true);
    }
  }
  /**
   * 
   * @param {Object} object
   * @param {String} style 
   * @param {String|Number|Boolean} value
   */


  function applyStyle(object, style, value) {
    if (object.type === 'activeSelection' || object.type === 'group') {
      return false;
    } else {
      object[style] = value;
      object.set({
        dirty: true
      });
    }

    activeCanvas.renderAll();
  }

  function addFont(font, weight) {
    if (fontloaderTimeout) clearTimeout(fontloaderTimeout);
    alltools.textSettings.fontFamily.addOption(font, font);
    fontLoader.style.fontFamily = font;

    if (weight) {
      fontLoader.style.fontWeight = weight;
    }

    if (!fontLoader.parentElement) {
      if (mainWrapper.parentElement) {
        mainWrapper.appendChild(fontLoader);
      } else if (parentel.parentElement) {
        parentel.appendChild(fontLoader);
      } else {
        document.body.appendChild(fontLoader);
      }
    }

    fontLoader.style.opacity = '1';
    fontloaderTimeout = setTimeout(function () {
      fontLoader.style.opacity = '0';
    }, 1500);
  }

  function removeFont(font) {
    alltools.textSettings.fontFamily.removeOption(font);
  }

  function onFontScrollEnd(fun) {
    alltools.textSettings.fontFamily.customSelect.onscroll = function (e) {
      if (this.offsetHeight + this.scrollTop >= this.scrollHeight) {
        fun();
      }
    };
  }
  /**
   *
   * @param {Number} [quality=1]
   * @param {Number} [scaling=1]
   * @param {Boolean} [retinaScaling=true]
   */


  function saveAsPNG() {
    var scaling = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var retinaScaling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var quality = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var images = saveAsBase64({
      quality: quality,
      multiplier: scaling,
      enableRetinaScaling: retinaScaling
    });
    var blobs = {};

    for (var image in images) {
      blobs[image] = blueimp_canvas_to_blob__WEBPACK_IMPORTED_MODULE_10___default()(images[image]);
    }

    return blobs;
  }
  /**
   * 
   * @param {Number} [quality=0.9]  
   * @param {Number} [scaling=1]
   * @param {Boolean} [retinaScaling=true] 
   */


  function saveAsJPEG() {
    var quality = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.9;
    var scaling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var retinaScaling = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var images = saveAsBase64({
      format: 'jpeg',
      quality: quality,
      multiplier: scaling,
      enableRetinaScaling: retinaScaling
    });
    var blobs = {};

    for (var image in images) {
      blobs[image] = blueimp_canvas_to_blob__WEBPACK_IMPORTED_MODULE_10___default()(images[image]);
    }

    return blobs;
  }
  /**
   * 
   * @param {Object} [options]
   * @param {String} [options.format] image format possible value 'jpeg' of 'png'
   * @param {Number} [options.quality] quality for jpeg min 0 max 1
   * @param {Number} [options.multiplier] Multiplier to scale by, to have consistent
   * @param {Number} [options.left] Cropping left offset
   * @param {Number} [options.right] Cropping right offset
   * @param {Number} [options.width] Cropping width offset
   * @param {Number} [options.height] Cropping height offset
   * @param {Boolean} [options.enableRetinaScaling] Enable retina scaling for clone image
   */


  function saveAsBase64(options) {
    var images = {};
    var canvases = pages.page;

    for (var page in canvases) {
      images[page] = pages.page[page].toDataURL(options);
    }

    return images;
  }

  function toJSON() {
    var json = {};
    var canvases = pages.page;

    for (var page in canvases) {
      json[page] = {};
      json[page].name = pages.page[page].page.name;
      json[page].data = pages.page[page].toJSON();
      json[page].data.width = pages.page[page].getWidth();
      json[page].data.height = pages.page[page].getHeight();
    }

    return JSON.stringify(json);
  }

  function loadJSON(json) {
    try {
      json = JSON.parse(json);
      mainWrapper.style.cursor = 'progress';
      mainWrapper.style.pointerEvents = 'none';
      render(json);
      mainWrapper.style.removeProperty('cursor');
      mainWrapper.style.removeProperty('pointer-events');
      fixPagesContainerPosition();
    } catch (error) {
      alert('Cannot load json, Error: ' + error);
    }

    function render(json) {
      var page = {};
      var key = Object.keys(json)[0];
      if (!key) return;else {
        page = json[key];
        delete json[key];
      }

      if (activeCanvas.getObjects().length !== 0) {
        addPage();
      }

      activeCanvas.page.name = page.name;
      activeCanvas.setWidth(page.data.width);
      activeCanvas.setHeight(page.data.height);
      activeCanvas.loadFromJSON(page.data, function () {
        activeCanvas.renderAll();
        var allObjects = activeCanvas.getObjects();
        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
          for (var _iterator11 = allObjects[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var object = _step11.value;

            if (object.type && (object.type === 'textbox' || object.type === 'text' || object.type === 'itext')) {
              requireFonts.push(object.fontFamily);
            }
          }
        } catch (err) {
          _didIteratorError11 = true;
          _iteratorError11 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
              _iterator11["return"]();
            }
          } finally {
            if (_didIteratorError11) {
              throw _iteratorError11;
            }
          }
        }

        render(json);
      });
    }
  }

  function getRequireFonts(loadfont) {
    function exec() {
      for (var key in pages.page) {
        pages.page[key].renderAll();
        console.log("page: " + key + " rendered.");
      }
    }

    loadfont(_toConsumableArray(new Set(requireFonts)), exec);
  }

  return {
    saveAsBase64: saveAsBase64,
    saveAsPNG: saveAsPNG,
    saveAsJPEG: saveAsJPEG,
    toJSON: toJSON,
    loadJSON: loadJSON,
    addFont: addFont,
    onFontScrollEnd: onFontScrollEnd,
    getRequireFonts: getRequireFonts,
    removeFont: removeFont
  };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fabric = fabric || {
  version: "2.4.6"
};
 true ? exports.fabric = fabric : undefined, "undefined" != typeof document && "undefined" != typeof window ? (fabric.document = document, fabric.window = window) : (fabric.document = __webpack_require__(7).jsdom(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"), {
  features: {
    FetchExternalResources: ["img"]
  }
}), fabric.jsdomImplForWrapper = __webpack_require__(8).implForWrapper, fabric.nodeCanvas = __webpack_require__(9).Canvas, fabric.window = fabric.document.defaultView, DOMParser = __webpack_require__(10).DOMParser), fabric.isTouchSupported = "ontouchstart" in fabric.window || "ontouchstart" in fabric.document || fabric.window && fabric.window.navigator && fabric.window.navigator.maxTouchPoints > 0, fabric.isLikelyNode = "undefined" != typeof Buffer && "undefined" == typeof window, fabric.SHARED_ATTRIBUTES = ["display", "transform", "fill", "fill-opacity", "fill-rule", "opacity", "stroke", "stroke-dasharray", "stroke-linecap", "stroke-dashoffset", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "instantiated_by_use", "clip-path"], fabric.DPI = 96, fabric.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:e[-+]?\\d+)?)", fabric.fontPaths = {}, fabric.iMatrix = [1, 0, 0, 1, 0, 0], fabric.canvasModule = "canvas", fabric.perfLimitSizeTotal = 2097152, fabric.maxCacheSideLimit = 4096, fabric.minCacheSideLimit = 256, fabric.charWidthsCache = {}, fabric.textureSize = 2048, fabric.enableGLFiltering = !0, fabric.devicePixelRatio = fabric.window.devicePixelRatio || fabric.window.webkitDevicePixelRatio || fabric.window.mozDevicePixelRatio || 1, fabric.browserShadowBlurConstant = 1, fabric.arcToSegmentsCache = {}, fabric.boundsOfCurveCache = {}, fabric.cachesBoundsOfCurve = !0, fabric.initFilterBackend = function () {
  return fabric.enableGLFiltering && fabric.isWebglSupported && fabric.isWebglSupported(fabric.textureSize) ? (console.log("max texture size: " + fabric.maxTextureSize), new fabric.WebglFilterBackend({
    tileSize: fabric.textureSize
  })) : fabric.Canvas2dFilterBackend ? new fabric.Canvas2dFilterBackend() : void 0;
};
"undefined" != typeof document && "undefined" != typeof window && (window.fabric = fabric);
if ("undefined" == typeof eventjs) var eventjs = {};
if (function (t) {
  "use strict";

  t.modifyEventListener = !1, t.modifySelectors = !1, t.configure = function (e) {
    isFinite(e.modifyEventListener) && (t.modifyEventListener = e.modifyEventListener), isFinite(e.modifySelectors) && (t.modifySelectors = e.modifySelectors), d === !1 && t.modifyEventListener && g(), p === !1 && t.modifySelectors && v();
  }, t.add = function (t, e, r, n) {
    return i(t, e, r, n, "add");
  }, t.remove = function (t, e, r, n) {
    return i(t, e, r, n, "remove");
  }, t.returnFalse = function () {
    return !1;
  }, t.stop = function (t) {
    t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0, t.cancelBubbleCount = 0);
  }, t.prevent = function (t) {
    t && (t.preventDefault ? t.preventDefault() : t.preventManipulation ? t.preventManipulation() : t.returnValue = !1);
  }, t.cancel = function (e) {
    t.stop(e), t.prevent(e);
  }, t.blur = function () {
    var t = document.activeElement;

    if (t) {
      var e = document.activeElement.nodeName;
      ("INPUT" === e || "TEXTAREA" === e || "true" === t.contentEditable) && t.blur && t.blur();
    }
  }, t.getEventSupport = function (t, e) {
    if ("string" == typeof t && (e = t, t = window), e = "on" + e, e in t) return !0;

    if (t.setAttribute || (t = document.createElement("div")), t.setAttribute && t.removeAttribute) {
      t.setAttribute(e, "");
      var i = "function" == typeof t[e];
      return "undefined" != typeof t[e] && (t[e] = null), t.removeAttribute(e), i;
    }
  };

  var e = function e(t) {
    if (!t || "object" != _typeof(t)) return t;
    var i = new t.constructor();

    for (var r in t) {
      i[r] = t[r] && "object" == _typeof(t[r]) ? e(t[r]) : t[r];
    }

    return i;
  },
      i = function i(s, o, h, d, g, p) {
    if (d = d || {}, "[object Object]" === String(s)) {
      var v = s;

      if (s = v.target, delete v.target, !v.type || !v.listener) {
        for (var b in v) {
          var m = v[b];
          "function" != typeof m && (d[b] = m);
        }

        var y = {};

        for (var _ in v) {
          var b = _.split(","),
              C = v[_],
              x = {};

          for (var w in d) {
            x[w] = d[w];
          }

          if ("function" == typeof C) var h = C;else {
            if ("function" != typeof C.listener) continue;
            var h = C.listener;

            for (var w in C) {
              "function" != typeof C[w] && (x[w] = C[w]);
            }
          }

          for (var S = 0; S < b.length; S++) {
            y[_] = eventjs.add(s, b[S], h, x, g);
          }
        }

        return y;
      }

      o = v.type, delete v.type, h = v.listener, delete v.listener;

      for (var _ in v) {
        d[_] = v[_];
      }
    }

    if (s && o && h) {
      if ("string" == typeof s && "ready" === o) {
        if (!window.eventjs_stallOnReady) {
          var O = new Date().getTime(),
              j = d.timeout,
              T = d.interval || 1e3 / 60,
              k = window.setInterval(function () {
            new Date().getTime() - O > j && window.clearInterval(k), document.querySelector(s) && (window.clearInterval(k), setTimeout(h, 1));
          }, T);
          return;
        }

        o = "load", s = window;
      }

      if ("string" == typeof s) {
        if (s = document.querySelectorAll(s), 0 === s.length) return n("Missing target on listener!", arguments);
        1 === s.length && (s = s[0]);
      }

      var P,
          E = {};

      if (s.length > 0 && s !== window) {
        for (var A = 0, D = s.length; D > A; A++) {
          P = i(s[A], o, h, e(d), g), P && (E[A] = P);
        }

        return r(E);
      }

      if ("string" == typeof o && (o = o.toLowerCase(), -1 !== o.indexOf(" ") ? o = o.split(" ") : -1 !== o.indexOf(",") && (o = o.split(","))), "string" != typeof o) {
        if ("number" == typeof o.length) for (var F = 0, M = o.length; M > F; F++) {
          P = i(s, o[F], h, e(d), g), P && (E[o[F]] = P);
        } else for (var _ in o) {
          P = "function" == typeof o[_] ? i(s, _, o[_], e(d), g) : i(s, _, o[_].listener, e(o[_]), g), P && (E[_] = P);
        }
        return r(E);
      }

      if (0 === o.indexOf("on") && (o = o.substr(2)), "object" != _typeof(s)) return n("Target is not defined!", arguments);
      if ("function" != typeof h) return n("Listener is not a function!", arguments);
      var R = d.useCapture || !1,
          L = l(s) + "." + l(h) + "." + (R ? 1 : 0);

      if (t.Gesture && t.Gesture._gestureHandlers[o]) {
        if (L = o + L, "remove" === g) {
          if (!c[L]) return;
          c[L].remove(), delete c[L];
        } else if ("add" === g) {
          if (c[L]) return c[L].add(), c[L];

          if (d.useCall && !t.modifyEventListener) {
            var I = h;

            h = function h(t, e) {
              for (var i in e) {
                t[i] = e[i];
              }

              return I.call(s, t);
            };
          }

          d.gesture = o, d.target = s, d.listener = h, d.fromOverwrite = p, c[L] = t.proxy[o](d);
        }

        return c[L];
      }

      for (var X, B = a(o), S = 0; S < B.length; S++) {
        if (o = B[S], X = o + "." + L, "remove" === g) {
          if (!c[X]) continue;
          s[f](o, h, R), delete c[X];
        } else if ("add" === g) {
          if (c[X]) return c[X];
          s[u](o, h, R), c[X] = {
            id: X,
            type: o,
            target: s,
            listener: h,
            remove: function remove() {
              for (var e = 0; e < B.length; e++) {
                t.remove(s, B[e], h, d);
              }
            }
          };
        }
      }

      return c[X];
    }
  },
      r = function r(t) {
    return {
      remove: function remove() {
        for (var e in t) {
          t[e].remove();
        }
      },
      add: function add() {
        for (var e in t) {
          t[e].add();
        }
      }
    };
  },
      n = function n(t, e) {
    "undefined" != typeof console && "undefined" != typeof console.error && console.error(t, e);
  },
      s = {
    msPointer: ["MSPointerDown", "MSPointerMove", "MSPointerUp"],
    touch: ["touchstart", "touchmove", "touchend"],
    mouse: ["mousedown", "mousemove", "mouseup"]
  },
      o = {
    MSPointerDown: 0,
    MSPointerMove: 1,
    MSPointerUp: 2,
    touchstart: 0,
    touchmove: 1,
    touchend: 2,
    mousedown: 0,
    mousemove: 1,
    mouseup: 2
  },
      a = (function () {
    t.supports = {}, window.navigator.msPointerEnabled && (t.supports.msPointer = !0), t.getEventSupport("touchstart") && (t.supports.touch = !0), t.getEventSupport("mousedown") && (t.supports.mouse = !0);
  }(), function () {
    return function (e) {
      var i = document.addEventListener ? "" : "on",
          r = o[e];

      if (isFinite(r)) {
        var n = [];

        for (var a in t.supports) {
          n.push(i + s[a][r]);
        }

        return n;
      }

      return [i + e];
    };
  }()),
      c = {},
      h = 0,
      l = function l(t) {
    return t === window ? "#window" : t === document ? "#document" : (t.uniqueID || (t.uniqueID = "e" + h++), t.uniqueID);
  },
      u = document.addEventListener ? "addEventListener" : "attachEvent",
      f = document.removeEventListener ? "removeEventListener" : "detachEvent";

  t.createPointerEvent = function (e, i, r) {
    var n = i.gesture,
        s = i.target,
        o = e.changedTouches || t.proxy.getCoords(e);

    if (o.length) {
      var a = o[0];
      i.pointers = r ? [] : o, i.pageX = a.pageX, i.pageY = a.pageY, i.x = i.pageX, i.y = i.pageY;
    }

    var c = document.createEvent("Event");
    c.initEvent(n, !0, !0), c.originalEvent = e;

    for (var h in i) {
      "target" !== h && (c[h] = i[h]);
    }

    var l = c.type;
    t.Gesture && t.Gesture._gestureHandlers[l] && i.oldListener.call(s, c, i, !1);
  };

  var d = !1,
      g = function g() {
    if (window.HTMLElement) {
      var e = function e(_e) {
        var r = function r(_r) {
          var n = _r + "EventListener",
              s = _e[n];

          _e[n] = function (e, n, o) {
            if (t.Gesture && t.Gesture._gestureHandlers[e]) {
              var c = o;
              "object" == _typeof(o) ? c.useCall = !0 : c = {
                useCall: !0,
                useCapture: o
              }, i(this, e, n, c, _r, !0);
            } else for (var h = a(e), l = 0; l < h.length; l++) {
              s.call(this, h[l], n, o);
            }
          };
        };

        r("add"), r("remove");
      };

      navigator.userAgent.match(/Firefox/) ? (e(HTMLDivElement.prototype), e(HTMLCanvasElement.prototype)) : e(HTMLElement.prototype), e(document), e(window);
    }
  },
      p = !1,
      v = function v() {
    var t = NodeList.prototype;
    t.removeEventListener = function (t, e, i) {
      for (var r = 0, n = this.length; n > r; r++) {
        this[r].removeEventListener(t, e, i);
      }
    }, t.addEventListener = function (t, e, i) {
      for (var r = 0, n = this.length; n > r; r++) {
        this[r].addEventListener(t, e, i);
      }
    };
  };

  return t;
}(eventjs), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function (t) {
  "use strict";

  t.pointerSetup = function (t, e) {
    t.target = t.target || window, t.doc = t.target.ownerDocument || t.target, t.minFingers = t.minFingers || t.fingers || 1, t.maxFingers = t.maxFingers || t.fingers || 1 / 0, t.position = t.position || "relative", delete t.fingers, e = e || {}, e.enabled = !0, e.gesture = t.gesture, e.target = t.target, e.env = t.env, eventjs.modifyEventListener && t.fromOverwrite && (t.oldListener = t.listener, t.listener = eventjs.createPointerEvent);
    var i = 0,
        r = 0 === e.gesture.indexOf("pointer") && eventjs.modifyEventListener ? "pointer" : "mouse";
    return t.oldListener && (e.oldListener = t.oldListener), e.listener = t.listener, e.proxy = function (i) {
      e.defaultListener = t.listener, t.listener = i, i(t.event, e);
    }, e.add = function () {
      e.enabled !== !0 && (t.onPointerDown && eventjs.add(t.target, r + "down", t.onPointerDown), t.onPointerMove && eventjs.add(t.doc, r + "move", t.onPointerMove), t.onPointerUp && eventjs.add(t.doc, r + "up", t.onPointerUp), e.enabled = !0);
    }, e.remove = function () {
      e.enabled !== !1 && (t.onPointerDown && eventjs.remove(t.target, r + "down", t.onPointerDown), t.onPointerMove && eventjs.remove(t.doc, r + "move", t.onPointerMove), t.onPointerUp && eventjs.remove(t.doc, r + "up", t.onPointerUp), e.reset(), e.enabled = !1);
    }, e.pause = function (e) {
      !t.onPointerMove || e && !e.move || eventjs.remove(t.doc, r + "move", t.onPointerMove), !t.onPointerUp || e && !e.up || eventjs.remove(t.doc, r + "up", t.onPointerUp), i = t.fingers, t.fingers = 0;
    }, e.resume = function (e) {
      !t.onPointerMove || e && !e.move || eventjs.add(t.doc, r + "move", t.onPointerMove), !t.onPointerUp || e && !e.up || eventjs.add(t.doc, r + "up", t.onPointerUp), t.fingers = i;
    }, e.reset = function () {
      t.tracker = {}, t.fingers = 0;
    }, e;
  };

  var e = eventjs.supports;
  eventjs.isMouse = !!e.mouse, eventjs.isMSPointer = !!e.touch, eventjs.isTouch = !!e.msPointer, t.pointerStart = function (e, i, r) {
    var n = (e.type || "mousedown").toUpperCase();
    0 === n.indexOf("MOUSE") ? (eventjs.isMouse = !0, eventjs.isTouch = !1, eventjs.isMSPointer = !1) : 0 === n.indexOf("TOUCH") ? (eventjs.isMouse = !1, eventjs.isTouch = !0, eventjs.isMSPointer = !1) : 0 === n.indexOf("MSPOINTER") && (eventjs.isMouse = !1, eventjs.isTouch = !1, eventjs.isMSPointer = !0);

    var s = function s(t, e) {
      var i = r.bbox,
          n = a[e] = {};

      switch (r.position) {
        case "absolute":
          n.offsetX = 0, n.offsetY = 0;
          break;

        case "differenceFromLast":
          n.offsetX = t.pageX, n.offsetY = t.pageY;
          break;

        case "difference":
          n.offsetX = t.pageX, n.offsetY = t.pageY;
          break;

        case "move":
          n.offsetX = t.pageX - i.x1, n.offsetY = t.pageY - i.y1;
          break;

        default:
          n.offsetX = i.x1 - i.scrollLeft, n.offsetY = i.y1 - i.scrollTop;
      }

      var s = t.pageX - n.offsetX,
          o = t.pageY - n.offsetY;
      n.rotation = 0, n.scale = 1, n.startTime = n.moveTime = new Date().getTime(), n.move = {
        x: s,
        y: o
      }, n.start = {
        x: s,
        y: o
      }, r.fingers++;
    };

    r.event = e, i.defaultListener && (r.listener = i.defaultListener, delete i.defaultListener);

    for (var o = !r.fingers, a = r.tracker, c = e.changedTouches || t.getCoords(e), h = c.length, l = 0; h > l; l++) {
      var u = c[l],
          f = u.identifier || 1 / 0;

      if (r.fingers) {
        if (r.fingers >= r.maxFingers) {
          var d = [];

          for (var f in r.tracker) {
            d.push(f);
          }

          return i.identifier = d.join(","), o;
        }

        var g = 0;

        for (var p in a) {
          if (a[p].up) {
            delete a[p], s(u, f), r.cancel = !0;
            break;
          }

          g++;
        }

        if (a[f]) continue;
        s(u, f);
      } else a = r.tracker = {}, i.bbox = r.bbox = t.getBoundingBox(r.target), r.fingers = 0, r.cancel = !1, s(u, f);
    }

    var d = [];

    for (var f in r.tracker) {
      d.push(f);
    }

    return i.identifier = d.join(","), o;
  }, t.pointerEnd = function (t, e, i, r) {
    for (var n = t.touches || [], s = n.length, o = {}, a = 0; s > a; a++) {
      var c = n[a],
          h = c.identifier;
      o[h || 1 / 0] = !0;
    }

    for (var h in i.tracker) {
      var l = i.tracker[h];
      o[h] || l.up || (r && r({
        pageX: l.pageX,
        pageY: l.pageY,
        changedTouches: [{
          pageX: l.pageX,
          pageY: l.pageY,
          identifier: "Infinity" === h ? 1 / 0 : h
        }]
      }, "up"), l.up = !0, i.fingers--);
    }

    if (0 !== i.fingers) return !1;
    var u = [];
    i.gestureFingers = 0;

    for (var h in i.tracker) {
      i.gestureFingers++, u.push(h);
    }

    return e.identifier = u.join(","), !0;
  }, t.getCoords = function (e) {
    return t.getCoords = "undefined" != typeof e.pageX ? function (t) {
      return Array({
        type: "mouse",
        x: t.pageX,
        y: t.pageY,
        pageX: t.pageX,
        pageY: t.pageY,
        identifier: t.pointerId || 1 / 0
      });
    } : function (t) {
      var e = document.documentElement;
      return t = t || window.event, Array({
        type: "mouse",
        x: t.clientX + e.scrollLeft,
        y: t.clientY + e.scrollTop,
        pageX: t.clientX + e.scrollLeft,
        pageY: t.clientY + e.scrollTop,
        identifier: 1 / 0
      });
    }, t.getCoords(e);
  }, t.getCoord = function (e) {
    if ("ontouchstart" in window) {
      var i = 0,
          r = 0;

      t.getCoord = function (t) {
        var e = t.changedTouches;
        return e && e.length ? {
          x: i = e[0].pageX,
          y: r = e[0].pageY
        } : {
          x: i,
          y: r
        };
      };
    } else t.getCoord = "undefined" != typeof e.pageX && "undefined" != typeof e.pageY ? function (t) {
      return {
        x: t.pageX,
        y: t.pageY
      };
    } : function (t) {
      var e = document.documentElement;
      return t = t || window.event, {
        x: t.clientX + e.scrollLeft,
        y: t.clientY + e.scrollTop
      };
    };

    return t.getCoord(e);
  };

  var i = function i(t, e) {
    var i = parseFloat(t.getPropertyValue(e), 10);
    return isFinite(i) ? i : 0;
  };

  return t.getBoundingBox = function (t) {
    (t === window || t === document) && (t = document.body);
    var e = {},
        r = t.getBoundingClientRect();
    e.width = r.width, e.height = r.height, e.x1 = r.left, e.y1 = r.top, e.scaleX = r.width / t.offsetWidth || 1, e.scaleY = r.height / t.offsetHeight || 1, e.scrollLeft = 0, e.scrollTop = 0;
    var n = window.getComputedStyle(t),
        s = "border-box" === n.getPropertyValue("box-sizing");

    if (s === !1) {
      var o = i(n, "border-left-width"),
          a = i(n, "border-right-width"),
          c = i(n, "border-bottom-width"),
          h = i(n, "border-top-width");
      e.border = [o, a, h, c], e.x1 += o, e.y1 += h, e.width -= a + o, e.height -= c + h;
    }

    e.x2 = e.x1 + e.width, e.y2 = e.y1 + e.height;

    for (var l = n.getPropertyValue("position"), u = "fixed" === l ? t : t.parentNode; null !== u && u !== document.body && void 0 !== u.scrollTop;) {
      var n = window.getComputedStyle(u),
          l = n.getPropertyValue("position");
      if ("absolute" === l) ;else {
        if ("fixed" === l) {
          e.scrollTop -= u.parentNode.scrollTop, e.scrollLeft -= u.parentNode.scrollLeft;
          break;
        }

        e.scrollLeft += u.scrollLeft, e.scrollTop += u.scrollTop;
      }
      u = u.parentNode;
    }

    return e.scrollBodyLeft = void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft, e.scrollBodyTop = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, e.scrollLeft -= e.scrollBodyLeft, e.scrollTop -= e.scrollBodyTop, e;
  }, function () {
    var e,
        i = navigator.userAgent.toLowerCase(),
        r = -1 !== i.indexOf("macintosh");
    e = r && -1 !== i.indexOf("khtml") ? {
      91: !0,
      93: !0
    } : r && -1 !== i.indexOf("firefox") ? {
      224: !0
    } : {
      17: !0
    }, (t.metaTrackerReset = function () {
      eventjs.fnKey = t.fnKey = !1, eventjs.metaKey = t.metaKey = !1, eventjs.escKey = t.escKey = !1, eventjs.ctrlKey = t.ctrlKey = !1, eventjs.shiftKey = t.shiftKey = !1, eventjs.altKey = t.altKey = !1;
    })(), t.metaTracker = function (i) {
      var r = "keydown" === i.type;
      27 === i.keyCode && (eventjs.escKey = t.escKey = r), e[i.keyCode] && (eventjs.metaKey = t.metaKey = r), eventjs.ctrlKey = t.ctrlKey = i.ctrlKey, eventjs.shiftKey = t.shiftKey = i.shiftKey, eventjs.altKey = t.altKey = i.altKey;
    };
  }(), t;
}(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if (eventjs.MutationObserver = function () {
  var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
      e = !t && function () {
    var t = document.createElement("p"),
        e = !1,
        i = function i() {
      e = !0;
    };

    if (t.addEventListener) t.addEventListener("DOMAttrModified", i, !1);else {
      if (!t.attachEvent) return !1;
      t.attachEvent("onDOMAttrModified", i);
    }
    return t.setAttribute("id", "target"), e;
  }();

  return function (i, r) {
    if (t) {
      var n = {
        subtree: !1,
        attributes: !0
      },
          s = new t(function (t) {
        t.forEach(function (t) {
          r.call(t.target, t.attributeName);
        });
      });
      s.observe(i, n);
    } else e ? eventjs.add(i, "DOMAttrModified", function (t) {
      r.call(i, t.attrName);
    }) : "onpropertychange" in document.body && eventjs.add(i, "propertychange", function () {
      r.call(i, window.event.propertyName);
    });
  };
}(), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function (t) {
  "use strict";

  return t.click = function (e) {
    e.gesture = e.gesture || "click", e.maxFingers = e.maxFingers || e.fingers || 1, e.onPointerDown = function (r) {
      t.pointerStart(r, i, e) && eventjs.add(e.target, "mouseup", e.onPointerUp);
    }, e.onPointerUp = function (r) {
      if (t.pointerEnd(r, i, e)) {
        eventjs.remove(e.target, "mouseup", e.onPointerUp);
        var n = r.changedTouches || t.getCoords(r),
            s = n[0],
            o = e.bbox,
            a = t.getBoundingBox(e.target),
            c = s.pageY - a.scrollBodyTop,
            h = s.pageX - a.scrollBodyLeft;

        if (h > o.x1 && c > o.y1 && h < o.x2 && c < o.y2 && o.scrollTop === a.scrollTop) {
          for (var l in e.tracker) {
            break;
          }

          var u = e.tracker[l];
          i.x = u.start.x, i.y = u.start.y, e.listener(r, i);
        }
      }
    };
    var i = t.pointerSetup(e);
    return i.state = "click", eventjs.add(e.target, "mousedown", e.onPointerDown), i;
  }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.click = t.click, t;
}(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function (t) {
  "use strict";

  return t.dbltap = t.dblclick = function (e) {
    e.gesture = e.gesture || "dbltap", e.maxFingers = e.maxFingers || e.fingers || 1;
    var i,
        r,
        n,
        s,
        o,
        a = 700;
    e.onPointerDown = function (h) {
      var l = h.changedTouches || t.getCoords(h);
      i && !r ? (o = l[0], r = new Date().getTime() - i) : (s = l[0], i = new Date().getTime(), r = 0, clearTimeout(n), n = setTimeout(function () {
        i = 0;
      }, a)), t.pointerStart(h, c, e) && (eventjs.add(e.target, "mousemove", e.onPointerMove).listener(h), eventjs.add(e.target, "mouseup", e.onPointerUp));
    }, e.onPointerMove = function (a) {
      if (i && !r) {
        var c = a.changedTouches || t.getCoords(a);
        o = c[0];
      }

      var h = e.bbox,
          l = o.pageX - h.x1,
          u = o.pageY - h.y1;
      l > 0 && l < h.width && u > 0 && u < h.height && Math.abs(o.pageX - s.pageX) <= 25 && Math.abs(o.pageY - s.pageY) <= 25 || (eventjs.remove(e.target, "mousemove", e.onPointerMove), clearTimeout(n), i = r = 0);
    }, e.onPointerUp = function (s) {
      if (t.pointerEnd(s, c, e) && (eventjs.remove(e.target, "mousemove", e.onPointerMove), eventjs.remove(e.target, "mouseup", e.onPointerUp)), i && r) {
        if (a >= r) {
          c.state = e.gesture;

          for (var o in e.tracker) {
            break;
          }

          var h = e.tracker[o];
          c.x = h.start.x, c.y = h.start.y, e.listener(s, c);
        }

        clearTimeout(n), i = r = 0;
      }
    };
    var c = t.pointerSetup(e);
    return c.state = "dblclick", eventjs.add(e.target, "mousedown", e.onPointerDown), c;
  }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.dbltap = t.dbltap, eventjs.Gesture._gestureHandlers.dblclick = t.dblclick, t;
}(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function (t) {
  "use strict";

  return t.dragElement = function (e, i) {
    t.drag({
      event: i,
      target: e,
      position: "move",
      listener: function listener(t, i) {
        e.style.left = i.x + "px", e.style.top = i.y + "px", eventjs.prevent(t);
      }
    });
  }, t.drag = function (e) {
    e.gesture = "drag", e.onPointerDown = function (r) {
      t.pointerStart(r, i, e) && (e.monitor || (eventjs.add(e.doc, "mousemove", e.onPointerMove), eventjs.add(e.doc, "mouseup", e.onPointerUp))), e.onPointerMove(r, "down");
    }, e.onPointerMove = function (r, n) {
      if (!e.tracker) return e.onPointerDown(r);

      for (var s = (e.bbox, r.changedTouches || t.getCoords(r)), o = s.length, a = 0; o > a; a++) {
        var c = s[a],
            h = c.identifier || 1 / 0,
            l = e.tracker[h];
        l && (l.pageX = c.pageX, l.pageY = c.pageY, i.state = n || "move", i.identifier = h, i.start = l.start, i.fingers = e.fingers, "differenceFromLast" === e.position ? (i.x = l.pageX - l.offsetX, i.y = l.pageY - l.offsetY, l.offsetX = l.pageX, l.offsetY = l.pageY) : (i.x = l.pageX - l.offsetX, i.y = l.pageY - l.offsetY), e.listener(r, i));
      }
    }, e.onPointerUp = function (r) {
      t.pointerEnd(r, i, e, e.onPointerMove) && (e.monitor || (eventjs.remove(e.doc, "mousemove", e.onPointerMove), eventjs.remove(e.doc, "mouseup", e.onPointerUp)));
    };
    var i = t.pointerSetup(e);
    return e.event ? e.onPointerDown(e.event) : (eventjs.add(e.target, "mousedown", e.onPointerDown), e.monitor && (eventjs.add(e.doc, "mousemove", e.onPointerMove), eventjs.add(e.doc, "mouseup", e.onPointerUp))), i;
  }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.drag = t.drag, t;
}(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function (t) {
  "use strict";

  var e = Math.PI / 180,
      i = function i(t, e) {
    var i = 0,
        r = 0,
        n = 0;

    for (var s in e) {
      var o = e[s];
      o.up || (i += o.move.x, r += o.move.y, n++);
    }

    return t.x = i /= n, t.y = r /= n, t;
  };

  return t.gesture = function (r) {
    r.gesture = r.gesture || "gesture", r.minFingers = r.minFingers || r.fingers || 2, r.onPointerDown = function (e) {
      var s = r.fingers;

      if (t.pointerStart(e, n, r) && (eventjs.add(r.doc, "mousemove", r.onPointerMove), eventjs.add(r.doc, "mouseup", r.onPointerUp)), r.fingers === r.minFingers && s !== r.fingers) {
        n.fingers = r.minFingers, n.scale = 1, n.rotation = 0, n.state = "start";
        var o = "";

        for (var a in r.tracker) {
          o += a;
        }

        n.identifier = parseInt(o), i(n, r.tracker), r.listener(e, n);
      }
    }, r.onPointerMove = function (s) {
      for (var o = r.bbox, a = r.tracker, c = s.changedTouches || t.getCoords(s), h = c.length, l = 0; h > l; l++) {
        var u = c[l],
            f = u.identifier || 1 / 0,
            d = a[f];
        d && (d.move.x = u.pageX - o.x1, d.move.y = u.pageY - o.y1);
      }

      if (!(r.fingers < r.minFingers)) {
        var c = [],
            g = 0,
            p = 0;
        i(n, a);

        for (var f in a) {
          var u = a[f];

          if (!u.up) {
            var v = u.start;

            if (!v.distance) {
              var b = v.x - n.x,
                  m = v.y - n.y;
              v.distance = Math.sqrt(b * b + m * m), v.angle = Math.atan2(b, m) / e;
            }

            var b = u.move.x - n.x,
                m = u.move.y - n.y,
                y = Math.sqrt(b * b + m * m);
            g += y / v.distance;

            var _ = Math.atan2(b, m) / e,
                C = (v.angle - _ + 360) % 360 - 180;

            u.DEG2 = u.DEG1, u.DEG1 = C > 0 ? C : -C, "undefined" != typeof u.DEG2 && (C > 0 ? u.rotation += u.DEG1 - u.DEG2 : u.rotation -= u.DEG1 - u.DEG2, p += u.rotation), c.push(u.move);
          }
        }

        n.touches = c, n.fingers = r.fingers, n.scale = g / r.fingers, n.rotation = p / r.fingers, n.state = "change", r.listener(s, n);
      }
    }, r.onPointerUp = function (e) {
      var i = r.fingers;
      t.pointerEnd(e, n, r) && (eventjs.remove(r.doc, "mousemove", r.onPointerMove), eventjs.remove(r.doc, "mouseup", r.onPointerUp)), i === r.minFingers && r.fingers < r.minFingers && (n.fingers = r.fingers, n.state = "end", r.listener(e, n));
    };
    var n = t.pointerSetup(r);
    return eventjs.add(r.target, "mousedown", r.onPointerDown), n;
  }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.gesture = t.gesture, t;
}(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function (t) {
  "use strict";

  return t.pointerdown = t.pointermove = t.pointerup = function (e) {
    if (e.gesture = e.gesture || "pointer", !e.target.isPointerEmitter) {
      var i = !0;
      e.onPointerDown = function (t) {
        i = !1, r.gesture = "pointerdown", e.listener(t, r);
      }, e.onPointerMove = function (t) {
        r.gesture = "pointermove", e.listener(t, r, i);
      }, e.onPointerUp = function (t) {
        i = !0, r.gesture = "pointerup", e.listener(t, r, !0);
      };
      var r = t.pointerSetup(e);
      return eventjs.add(e.target, "mousedown", e.onPointerDown), eventjs.add(e.target, "mousemove", e.onPointerMove), eventjs.add(e.doc, "mouseup", e.onPointerUp), e.target.isPointerEmitter = !0, r;
    }
  }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.pointerdown = t.pointerdown, eventjs.Gesture._gestureHandlers.pointermove = t.pointermove, eventjs.Gesture._gestureHandlers.pointerup = t.pointerup, t;
}(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function (t) {
  "use strict";

  return t.shake = function (t) {
    var e = {
      gesture: "devicemotion",
      acceleration: {},
      accelerationIncludingGravity: {},
      target: t.target,
      listener: t.listener,
      remove: function remove() {
        window.removeEventListener("devicemotion", h, !1);
      }
    },
        i = 4,
        r = 1e3,
        n = 200,
        s = 3,
        o = new Date().getTime(),
        a = {
      x: 0,
      y: 0,
      z: 0
    },
        c = {
      x: {
        count: 0,
        value: 0
      },
      y: {
        count: 0,
        value: 0
      },
      z: {
        count: 0,
        value: 0
      }
    },
        h = function h(_h) {
      var l = .8,
          u = _h.accelerationIncludingGravity;
      if (a.x = l * a.x + (1 - l) * u.x, a.y = l * a.y + (1 - l) * u.y, a.z = l * a.z + (1 - l) * u.z, e.accelerationIncludingGravity = a, e.acceleration.x = u.x - a.x, e.acceleration.y = u.y - a.y, e.acceleration.z = u.z - a.z, "devicemotion" === t.gesture) return void t.listener(_h, e);

      for (var f = "xyz", d = new Date().getTime(), g = 0, p = f.length; p > g; g++) {
        var v = f[g],
            b = e.acceleration[v],
            m = c[v],
            y = Math.abs(b);

        if (!(r > d - o) && y > i) {
          var _ = d * b / y,
              C = Math.abs(_ + m.value);

          m.value && n > C ? (m.value = _, m.count++, m.count === s && (t.listener(_h, e), o = d, m.value = 0, m.count = 0)) : (m.value = _, m.count = 1);
        }
      }
    };

    return window.addEventListener ? (window.addEventListener("devicemotion", h, !1), e) : void 0;
  }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.shake = t.shake, t;
}(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function (t) {
  "use strict";

  var e = Math.PI / 180;
  return t.swipe = function (i) {
    i.snap = i.snap || 90, i.threshold = i.threshold || 1, i.gesture = i.gesture || "swipe", i.onPointerDown = function (e) {
      t.pointerStart(e, r, i) && (eventjs.add(i.doc, "mousemove", i.onPointerMove).listener(e), eventjs.add(i.doc, "mouseup", i.onPointerUp));
    }, i.onPointerMove = function (e) {
      for (var r = e.changedTouches || t.getCoords(e), n = r.length, s = 0; n > s; s++) {
        var o = r[s],
            a = o.identifier || 1 / 0,
            c = i.tracker[a];
        c && (c.move.x = o.pageX, c.move.y = o.pageY, c.moveTime = new Date().getTime());
      }
    }, i.onPointerUp = function (n) {
      if (t.pointerEnd(n, r, i)) {
        eventjs.remove(i.doc, "mousemove", i.onPointerMove), eventjs.remove(i.doc, "mouseup", i.onPointerUp);
        var s,
            o,
            a,
            c,
            h = {
          x: 0,
          y: 0
        },
            l = 0,
            u = 0,
            f = 0;

        for (var d in i.tracker) {
          var g = i.tracker[d],
              p = g.move.x - g.start.x,
              v = g.move.y - g.start.y;
          l += g.move.x, u += g.move.y, h.x += g.start.x, h.y += g.start.y, f++;
          var b = Math.sqrt(p * p + v * v),
              m = g.moveTime - g.startTime,
              c = Math.atan2(p, v) / e + 180,
              o = m ? b / m : 0;
          if ("undefined" == typeof a) a = c, s = o;else {
            if (!(Math.abs(c - a) <= 20)) return;
            a = (a + c) / 2, s = (s + o) / 2;
          }
        }

        var y = i.gestureFingers;
        i.minFingers <= y && i.maxFingers >= y && s > i.threshold && (h.x /= f, h.y /= f, r.start = h, r.x = l / f, r.y = u / f, r.angle = -(((a / i.snap + .5 >> 0) * i.snap || 360) - 360), r.velocity = s, r.fingers = y, r.state = "swipe", i.listener(n, r));
      }
    };
    var r = t.pointerSetup(i);
    return eventjs.add(i.target, "mousedown", i.onPointerDown), r;
  }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.swipe = t.swipe, t;
}(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function (t) {
  "use strict";

  return t.longpress = function (e) {
    return e.gesture = "longpress", t.tap(e);
  }, t.tap = function (e) {
    e.delay = e.delay || 500, e.timeout = e.timeout || 250, e.driftDeviance = e.driftDeviance || 10, e.gesture = e.gesture || "tap";
    var i, r;
    e.onPointerDown = function (s) {
      if (t.pointerStart(s, n, e)) {
        if (i = new Date().getTime(), eventjs.add(e.doc, "mousemove", e.onPointerMove).listener(s), eventjs.add(e.doc, "mouseup", e.onPointerUp), "longpress" !== e.gesture) return;
        r = setTimeout(function () {
          if (!(s.cancelBubble && ++s.cancelBubbleCount > 1)) {
            var t = 0;

            for (var i in e.tracker) {
              var r = e.tracker[i];
              if (r.end === !0) return;
              if (e.cancel) return;
              t++;
            }

            e.minFingers <= t && e.maxFingers >= t && (n.state = "start", n.fingers = t, n.x = r.start.x, n.y = r.start.y, e.listener(s, n));
          }
        }, e.delay);
      }
    }, e.onPointerMove = function (i) {
      for (var r = e.bbox, n = i.changedTouches || t.getCoords(i), s = n.length, o = 0; s > o; o++) {
        var a = n[o],
            c = a.identifier || 1 / 0,
            h = e.tracker[c];

        if (h) {
          var l = a.pageX - r.x1,
              u = a.pageY - r.y1,
              f = l - h.start.x,
              d = u - h.start.y,
              g = Math.sqrt(f * f + d * d);
          if (!(l > 0 && l < r.width && u > 0 && u < r.height && g <= e.driftDeviance)) return eventjs.remove(e.doc, "mousemove", e.onPointerMove), void (e.cancel = !0);
        }
      }
    }, e.onPointerUp = function (s) {
      if (t.pointerEnd(s, n, e)) {
        if (clearTimeout(r), eventjs.remove(e.doc, "mousemove", e.onPointerMove), eventjs.remove(e.doc, "mouseup", e.onPointerUp), s.cancelBubble && ++s.cancelBubbleCount > 1) return;
        if ("longpress" === e.gesture) return void ("start" === n.state && (n.state = "end", e.listener(s, n)));
        if (e.cancel) return;
        if (new Date().getTime() - i > e.timeout) return;
        var o = e.gestureFingers;
        e.minFingers <= o && e.maxFingers >= o && (n.state = "tap", n.fingers = e.gestureFingers, e.listener(s, n));
      }
    };
    var n = t.pointerSetup(e);
    return eventjs.add(e.target, "mousedown", e.onPointerDown), n;
  }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.tap = t.tap, eventjs.Gesture._gestureHandlers.longpress = t.longpress, t;
}(eventjs.proxy), "undefined" == typeof eventjs) var eventjs = {};
if ("undefined" == typeof eventjs.proxy && (eventjs.proxy = {}), eventjs.proxy = function (t) {
  "use strict";

  return t.wheelPreventElasticBounce = function (t) {
    t && ("string" == typeof t && (t = document.querySelector(t)), eventjs.add(t, "wheel", function (t, e) {
      e.preventElasticBounce(), eventjs.stop(t);
    }));
  }, t.wheel = function (t) {
    var e,
        i = t.timeout || 150,
        r = 0,
        n = {
      gesture: "wheel",
      state: "start",
      wheelDelta: 0,
      target: t.target,
      listener: t.listener,
      preventElasticBounce: function preventElasticBounce(t) {
        var e = this.target,
            i = e.scrollTop,
            r = i + e.offsetHeight,
            n = e.scrollHeight;
        r === n && this.wheelDelta <= 0 ? eventjs.cancel(t) : 0 === i && this.wheelDelta >= 0 && eventjs.cancel(t), eventjs.stop(t);
      },
      add: function add() {
        t.target[o](c, s, !1);
      },
      remove: function remove() {
        t.target[a](c, s, !1);
      }
    },
        s = function s(_s) {
      _s = _s || window.event, n.state = r++ ? "change" : "start", n.wheelDelta = _s.detail ? -20 * _s.detail : _s.wheelDelta, t.listener(_s, n), clearTimeout(e), e = setTimeout(function () {
        r = 0, n.state = "end", n.wheelDelta = 0, t.listener(_s, n);
      }, i);
    },
        o = document.addEventListener ? "addEventListener" : "attachEvent",
        a = document.removeEventListener ? "removeEventListener" : "detachEvent",
        c = eventjs.getEventSupport("mousewheel") ? "mousewheel" : "DOMMouseScroll";

    return t.target[o](c, s, !1), n;
  }, eventjs.Gesture = eventjs.Gesture || {}, eventjs.Gesture._gestureHandlers = eventjs.Gesture._gestureHandlers || {}, eventjs.Gesture._gestureHandlers.wheel = t.wheel, t;
}(eventjs.proxy), "undefined" == typeof Event) var Event = {};
"undefined" == typeof Event.proxy && (Event.proxy = {}), Event.proxy = function (t) {
  "use strict";

  return t.orientation = function (t) {
    var e = {
      gesture: "orientationchange",
      previous: null,
      current: window.orientation,
      target: t.target,
      listener: t.listener,
      remove: function remove() {
        window.removeEventListener("orientationchange", i, !1);
      }
    },
        i = function i(_i) {
      return e.previous = e.current, e.current = window.orientation, null !== e.previous && e.previous != e.current ? void t.listener(_i, e) : void 0;
    };

    return window.DeviceOrientationEvent && window.addEventListener("orientationchange", i, !1), e;
  }, Event.Gesture = Event.Gesture || {}, Event.Gesture._gestureHandlers = Event.Gesture._gestureHandlers || {}, Event.Gesture._gestureHandlers.orientation = t.orientation, t;
}(Event.proxy);
!function () {
  function t(t, e) {
    if (this.__eventListeners[t]) {
      var i = this.__eventListeners[t];
      e ? i[i.indexOf(e)] = !1 : fabric.util.array.fill(i, !1);
    }
  }

  function e(t, e) {
    if (this.__eventListeners || (this.__eventListeners = {}), 1 === arguments.length) for (var i in t) {
      this.on(i, t[i]);
    } else this.__eventListeners[t] || (this.__eventListeners[t] = []), this.__eventListeners[t].push(e);
    return this;
  }

  function i(e, i) {
    if (this.__eventListeners) {
      if (0 === arguments.length) for (e in this.__eventListeners) {
        t.call(this, e);
      } else if (1 === arguments.length && "object" == _typeof(arguments[0])) for (var r in e) {
        t.call(this, r, e[r]);
      } else t.call(this, e, i);
      return this;
    }
  }

  function r(t, e) {
    if (this.__eventListeners) {
      var i = this.__eventListeners[t];

      if (i) {
        for (var r = 0, n = i.length; n > r; r++) {
          i[r] && i[r].call(this, e || {});
        }

        return this.__eventListeners[t] = i.filter(function (t) {
          return t !== !1;
        }), this;
      }
    }
  }

  fabric.Observable = {
    observe: e,
    stopObserving: i,
    fire: r,
    on: e,
    off: i,
    trigger: r
  };
}();
fabric.Collection = {
  _objects: [],
  add: function add() {
    if (this._objects.push.apply(this._objects, arguments), this._onObjectAdded) for (var t = 0, e = arguments.length; e > t; t++) {
      this._onObjectAdded(arguments[t]);
    }
    return this.renderOnAddRemove && this.requestRenderAll(), this;
  },
  insertAt: function insertAt(t, e, i) {
    var r = this._objects;
    return i ? r[e] = t : r.splice(e, 0, t), this._onObjectAdded && this._onObjectAdded(t), this.renderOnAddRemove && this.requestRenderAll(), this;
  },
  remove: function remove() {
    for (var t, e = this._objects, i = !1, r = 0, n = arguments.length; n > r; r++) {
      t = e.indexOf(arguments[r]), -1 !== t && (i = !0, e.splice(t, 1), this._onObjectRemoved && this._onObjectRemoved(arguments[r]));
    }

    return this.renderOnAddRemove && i && this.requestRenderAll(), this;
  },
  forEachObject: function forEachObject(t, e) {
    for (var i = this.getObjects(), r = 0, n = i.length; n > r; r++) {
      t.call(e, i[r], r, i);
    }

    return this;
  },
  getObjects: function getObjects(t) {
    return "undefined" == typeof t ? this._objects.concat() : this._objects.filter(function (e) {
      return e.type === t;
    });
  },
  item: function item(t) {
    return this._objects[t];
  },
  isEmpty: function isEmpty() {
    return 0 === this._objects.length;
  },
  size: function size() {
    return this._objects.length;
  },
  contains: function contains(t) {
    return this._objects.indexOf(t) > -1;
  },
  complexity: function complexity() {
    return this._objects.reduce(function (t, e) {
      return t += e.complexity ? e.complexity() : 0;
    }, 0);
  }
};
fabric.CommonMethods = {
  _setOptions: function _setOptions(t) {
    for (var e in t) {
      this.set(e, t[e]);
    }
  },
  _initGradient: function _initGradient(t, e) {
    !t || !t.colorStops || t instanceof fabric.Gradient || this.set(e, new fabric.Gradient(t));
  },
  _initPattern: function _initPattern(t, e, i) {
    !t || !t.source || t instanceof fabric.Pattern ? i && i() : this.set(e, new fabric.Pattern(t, i));
  },
  _initClipping: function _initClipping(t) {
    if (t.clipTo && "string" == typeof t.clipTo) {
      var e = fabric.util.getFunctionBody(t.clipTo);
      "undefined" != typeof e && (this.clipTo = new Function("ctx", e));
    }
  },
  _setObject: function _setObject(t) {
    for (var e in t) {
      this._set(e, t[e]);
    }
  },
  set: function set(t, e) {
    return "object" == _typeof(t) ? this._setObject(t) : "function" == typeof e && "clipTo" !== t ? this._set(t, e(this.get(t))) : this._set(t, e), this;
  },
  _set: function _set(t, e) {
    this[t] = e;
  },
  toggle: function toggle(t) {
    var e = this.get(t);
    return "boolean" == typeof e && this.set(t, !e), this;
  },
  get: function get(t) {
    return this[t];
  }
};
!function (t) {
  var e = Math.sqrt,
      i = Math.atan2,
      r = Math.pow,
      n = Math.abs,
      s = Math.PI / 180,
      o = Math.PI / 2;
  fabric.util = {
    cos: function cos(t) {
      if (0 === t) return 1;
      0 > t && (t = -t);
      var e = t / o;

      switch (e) {
        case 1:
        case 3:
          return 0;

        case 2:
          return -1;
      }

      return Math.cos(t);
    },
    sin: function sin(t) {
      if (0 === t) return 0;
      var e = t / o,
          i = 1;

      switch (0 > t && (i = -1), e) {
        case 1:
          return i;

        case 2:
          return 0;

        case 3:
          return -i;
      }

      return Math.sin(t);
    },
    removeFromArray: function removeFromArray(t, e) {
      var i = t.indexOf(e);
      return -1 !== i && t.splice(i, 1), t;
    },
    getRandomInt: function getRandomInt(t, e) {
      return Math.floor(Math.random() * (e - t + 1)) + t;
    },
    degreesToRadians: function degreesToRadians(t) {
      return t * s;
    },
    radiansToDegrees: function radiansToDegrees(t) {
      return t / s;
    },
    rotatePoint: function rotatePoint(t, e, i) {
      t.subtractEquals(e);
      var r = fabric.util.rotateVector(t, i);
      return new fabric.Point(r.x, r.y).addEquals(e);
    },
    rotateVector: function rotateVector(t, e) {
      var i = fabric.util.sin(e),
          r = fabric.util.cos(e),
          n = t.x * r - t.y * i,
          s = t.x * i + t.y * r;
      return {
        x: n,
        y: s
      };
    },
    transformPoint: function transformPoint(t, e, i) {
      return i ? new fabric.Point(e[0] * t.x + e[2] * t.y, e[1] * t.x + e[3] * t.y) : new fabric.Point(e[0] * t.x + e[2] * t.y + e[4], e[1] * t.x + e[3] * t.y + e[5]);
    },
    makeBoundingBoxFromPoints: function makeBoundingBoxFromPoints(t) {
      var e = [t[0].x, t[1].x, t[2].x, t[3].x],
          i = fabric.util.array.min(e),
          r = fabric.util.array.max(e),
          n = r - i,
          s = [t[0].y, t[1].y, t[2].y, t[3].y],
          o = fabric.util.array.min(s),
          a = fabric.util.array.max(s),
          c = a - o;
      return {
        left: i,
        top: o,
        width: n,
        height: c
      };
    },
    invertTransform: function invertTransform(t) {
      var e = 1 / (t[0] * t[3] - t[1] * t[2]),
          i = [e * t[3], -e * t[1], -e * t[2], e * t[0]],
          r = fabric.util.transformPoint({
        x: t[4],
        y: t[5]
      }, i, !0);
      return i[4] = -r.x, i[5] = -r.y, i;
    },
    toFixed: function toFixed(t, e) {
      return parseFloat(Number(t).toFixed(e));
    },
    parseUnit: function parseUnit(t, e) {
      var i = /\D{0,2}$/.exec(t),
          r = parseFloat(t);

      switch (e || (e = fabric.Text.DEFAULT_SVG_FONT_SIZE), i[0]) {
        case "mm":
          return r * fabric.DPI / 25.4;

        case "cm":
          return r * fabric.DPI / 2.54;

        case "in":
          return r * fabric.DPI;

        case "pt":
          return r * fabric.DPI / 72;

        case "pc":
          return r * fabric.DPI / 72 * 12;

        case "em":
          return r * e;

        default:
          return r;
      }
    },
    falseFunction: function falseFunction() {
      return !1;
    },
    getKlass: function getKlass(t, e) {
      return t = fabric.util.string.camelize(t.charAt(0).toUpperCase() + t.slice(1)), fabric.util.resolveNamespace(e)[t];
    },
    getSvgAttributes: function getSvgAttributes(t) {
      var e = ["instantiated_by_use", "style", "id", "class"];

      switch (t) {
        case "linearGradient":
          e = e.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
          break;

        case "radialGradient":
          e = e.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
          break;

        case "stop":
          e = e.concat(["offset", "stop-color", "stop-opacity"]);
      }

      return e;
    },
    resolveNamespace: function resolveNamespace(e) {
      if (!e) return fabric;
      var i,
          r = e.split("."),
          n = r.length,
          s = t || fabric.window;

      for (i = 0; n > i; ++i) {
        s = s[r[i]];
      }

      return s;
    },
    loadImage: function loadImage(t, e, i, r) {
      if (!t) return void (e && e.call(i, t));

      var n = fabric.util.createImage(),
          s = function s() {
        e && e.call(i, n), n = n.onload = n.onerror = null;
      };

      n.onload = s, n.onerror = function () {
        fabric.log("Error loading " + n.src), e && e.call(i, null, !0), n = n.onload = n.onerror = null;
      }, 0 !== t.indexOf("data") && r && (n.crossOrigin = r), "data:image/svg" === t.substring(0, 14) && (n.onload = null, fabric.util.loadImageInDom(n, s)), n.src = t;
    },
    loadImageInDom: function loadImageInDom(t, e) {
      var i = fabric.document.createElement("div");
      i.style.width = i.style.height = "1px", i.style.left = i.style.top = "-100%", i.style.position = "absolute", i.appendChild(t), fabric.document.querySelector("body").appendChild(i), t.onload = function () {
        e(), i.parentNode.removeChild(i), i = null;
      };
    },
    enlivenObjects: function enlivenObjects(t, e, i, r) {
      function n() {
        ++o === a && e && e(s);
      }

      t = t || [];
      var s = [],
          o = 0,
          a = t.length;
      return a ? void t.forEach(function (t, e) {
        if (!t || !t.type) return void n();
        var o = fabric.util.getKlass(t.type, i);
        o.fromObject(t, function (i, o) {
          o || (s[e] = i), r && r(t, i, o), n();
        });
      }) : void (e && e(s));
    },
    enlivenPatterns: function enlivenPatterns(t, e) {
      function i() {
        ++n === s && e && e(r);
      }

      t = t || [];
      var r = [],
          n = 0,
          s = t.length;
      return s ? void t.forEach(function (t, e) {
        t && t.source ? new fabric.Pattern(t, function (t) {
          r[e] = t, i();
        }) : (r[e] = t, i());
      }) : void (e && e(r));
    },
    groupSVGElements: function groupSVGElements(t, e, i) {
      var r;
      return t && 1 === t.length ? t[0] : (e && (e.width && e.height ? e.centerPoint = {
        x: e.width / 2,
        y: e.height / 2
      } : (delete e.width, delete e.height)), r = new fabric.Group(t, e), "undefined" != typeof i && (r.sourcePath = i), r);
    },
    populateWithProperties: function populateWithProperties(t, e, i) {
      if (i && "[object Array]" === Object.prototype.toString.call(i)) for (var r = 0, n = i.length; n > r; r++) {
        i[r] in t && (e[i[r]] = t[i[r]]);
      }
    },
    drawDashedLine: function drawDashedLine(t, r, n, s, o, a) {
      var c = s - r,
          h = o - n,
          l = e(c * c + h * h),
          u = i(h, c),
          f = a.length,
          d = 0,
          g = !0;

      for (t.save(), t.translate(r, n), t.moveTo(0, 0), t.rotate(u), r = 0; l > r;) {
        r += a[d++ % f], r > l && (r = l), t[g ? "lineTo" : "moveTo"](r, 0), g = !g;
      }

      t.restore();
    },
    createCanvasElement: function createCanvasElement() {
      return fabric.document.createElement("canvas");
    },
    copyCanvasElement: function copyCanvasElement(t) {
      var e = fabric.util.createCanvasElement();
      return e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0), e;
    },
    createImage: function createImage() {
      return fabric.document.createElement("img");
    },
    clipContext: function clipContext(t, e) {
      e.save(), e.beginPath(), t.clipTo(e), e.clip();
    },
    multiplyTransformMatrices: function multiplyTransformMatrices(t, e, i) {
      return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], i ? 0 : t[0] * e[4] + t[2] * e[5] + t[4], i ? 0 : t[1] * e[4] + t[3] * e[5] + t[5]];
    },
    qrDecompose: function qrDecompose(t) {
      var n = i(t[1], t[0]),
          o = r(t[0], 2) + r(t[1], 2),
          a = e(o),
          c = (t[0] * t[3] - t[2] * t[1]) / a,
          h = i(t[0] * t[2] + t[1] * t[3], o);
      return {
        angle: n / s,
        scaleX: a,
        scaleY: c,
        skewX: h / s,
        skewY: 0,
        translateX: t[4],
        translateY: t[5]
      };
    },
    customTransformMatrix: function customTransformMatrix(t, e, i) {
      var r = [1, 0, n(Math.tan(i * s)), 1],
          o = [n(t), 0, 0, n(e)];
      return fabric.util.multiplyTransformMatrices(o, r, !0);
    },
    resetObjectTransform: function resetObjectTransform(t) {
      t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.flipX = !1, t.flipY = !1, t.rotate(0);
    },
    saveObjectTransform: function saveObjectTransform(t) {
      return {
        scaleX: t.scaleX,
        scaleY: t.scaleY,
        skewX: t.skewX,
        skewY: t.skewY,
        angle: t.angle,
        left: t.left,
        flipX: t.flipX,
        flipY: t.flipY,
        top: t.top
      };
    },
    getFunctionBody: function getFunctionBody(t) {
      return (String(t).match(/function[^{]*\{([\s\S]*)\}/) || {})[1];
    },
    isTransparent: function isTransparent(t, e, i, r) {
      r > 0 && (e > r ? e -= r : e = 0, i > r ? i -= r : i = 0);
      var n,
          s,
          o = !0,
          a = t.getImageData(e, i, 2 * r || 1, 2 * r || 1),
          c = a.data.length;

      for (n = 3; c > n && (s = a.data[n], o = 0 >= s, o !== !1); n += 4) {
        ;
      }

      return a = null, o;
    },
    parsePreserveAspectRatioAttribute: function parsePreserveAspectRatioAttribute(t) {
      var e,
          i = "meet",
          r = "Mid",
          n = "Mid",
          s = t.split(" ");
      return s && s.length && (i = s.pop(), "meet" !== i && "slice" !== i ? (e = i, i = "meet") : s.length && (e = s.pop())), r = "none" !== e ? e.slice(1, 4) : "none", n = "none" !== e ? e.slice(5, 8) : "none", {
        meetOrSlice: i,
        alignX: r,
        alignY: n
      };
    },
    clearFabricFontCache: function clearFabricFontCache(t) {
      t = (t || "").toLowerCase(), t ? fabric.charWidthsCache[t] && delete fabric.charWidthsCache[t] : fabric.charWidthsCache = {};
    },
    limitDimsByArea: function limitDimsByArea(t, e) {
      var i = Math.sqrt(e * t),
          r = Math.floor(e / i);
      return {
        x: Math.floor(i),
        y: r
      };
    },
    capValue: function capValue(t, e, i) {
      return Math.max(t, Math.min(e, i));
    },
    findScaleToFit: function findScaleToFit(t, e) {
      return Math.min(e.width / t.width, e.height / t.height);
    },
    findScaleToCover: function findScaleToCover(t, e) {
      return Math.max(e.width / t.width, e.height / t.height);
    }
  };
}( true ? exports : undefined);
!function () {
  function t(t, r, s, o, a, c, l) {
    var h = n.call(arguments);
    if (fabric.arcToSegmentsCache[h]) return fabric.arcToSegmentsCache[h];
    var u = Math.PI,
        f = l * u / 180,
        d = fabric.util.sin(f),
        g = fabric.util.cos(f),
        p = 0,
        v = 0;
    s = Math.abs(s), o = Math.abs(o);

    var b = -g * t * .5 - d * r * .5,
        m = -g * r * .5 + d * t * .5,
        y = s * s,
        _ = o * o,
        C = m * m,
        x = b * b,
        w = y * _ - y * C - _ * x,
        S = 0;

    if (0 > w) {
      var O = Math.sqrt(1 - w / (y * _));
      s *= O, o *= O;
    } else S = (a === c ? -1 : 1) * Math.sqrt(w / (y * C + _ * x));

    var T = S * s * m / o,
        k = -S * o * b / s,
        j = g * T - d * k + .5 * t,
        A = d * T + g * k + .5 * r,
        E = i(1, 0, (b - T) / s, (m - k) / o),
        P = i((b - T) / s, (m - k) / o, (-b - T) / s, (-m - k) / o);
    0 === c && P > 0 ? P -= 2 * u : 1 === c && 0 > P && (P += 2 * u);

    for (var D = Math.ceil(Math.abs(P / u * 2)), F = [], M = P / D, R = 8 / 3 * Math.sin(M / 4) * Math.sin(M / 4) / Math.sin(M / 2), L = E + M, I = 0; D > I; I++) {
      F[I] = e(E, L, g, d, s, o, j, A, R, p, v), p = F[I][4], v = F[I][5], E = L, L += M;
    }

    return fabric.arcToSegmentsCache[h] = F, F;
  }

  function e(t, e, i, r, n, s, o, a, c, l, h) {
    var u = fabric.util.cos(t),
        f = fabric.util.sin(t),
        d = fabric.util.cos(e),
        g = fabric.util.sin(e),
        p = i * n * d - r * s * g + o,
        v = r * n * d + i * s * g + a,
        b = l + c * (-i * n * f - r * s * u),
        m = h + c * (-r * n * f + i * s * u),
        y = p + c * (i * n * g + r * s * d),
        _ = v + c * (r * n * g - i * s * d);

    return [b, m, y, _, p, v];
  }

  function i(t, e, i, r) {
    var n = Math.atan2(e, t),
        s = Math.atan2(r, i);
    return s >= n ? s - n : 2 * Math.PI - (n - s);
  }

  function r(t, e, i, r, s, o, a, c) {
    var l;
    if (fabric.cachesBoundsOfCurve && (l = n.call(arguments), fabric.boundsOfCurveCache[l])) return fabric.boundsOfCurveCache[l];
    var h,
        u,
        f,
        d,
        g,
        p,
        v,
        b,
        m = Math.sqrt,
        y = Math.min,
        _ = Math.max,
        C = Math.abs,
        x = [],
        w = [[], []];
    u = 6 * t - 12 * i + 6 * s, h = -3 * t + 9 * i - 9 * s + 3 * a, f = 3 * i - 3 * t;

    for (var S = 0; 2 > S; ++S) {
      if (S > 0 && (u = 6 * e - 12 * r + 6 * o, h = -3 * e + 9 * r - 9 * o + 3 * c, f = 3 * r - 3 * e), C(h) < 1e-12) {
        if (C(u) < 1e-12) continue;
        d = -f / u, d > 0 && 1 > d && x.push(d);
      } else v = u * u - 4 * f * h, 0 > v || (b = m(v), g = (-u + b) / (2 * h), g > 0 && 1 > g && x.push(g), p = (-u - b) / (2 * h), p > 0 && 1 > p && x.push(p));
    }

    for (var O, T, k, j = x.length, A = j; j--;) {
      d = x[j], k = 1 - d, O = k * k * k * t + 3 * k * k * d * i + 3 * k * d * d * s + d * d * d * a, w[0][j] = O, T = k * k * k * e + 3 * k * k * d * r + 3 * k * d * d * o + d * d * d * c, w[1][j] = T;
    }

    w[0][A] = t, w[1][A] = e, w[0][A + 1] = a, w[1][A + 1] = c;
    var E = [{
      x: y.apply(null, w[0]),
      y: y.apply(null, w[1])
    }, {
      x: _.apply(null, w[0]),
      y: _.apply(null, w[1])
    }];
    return fabric.cachesBoundsOfCurve && (fabric.boundsOfCurveCache[l] = E), E;
  }

  var n = Array.prototype.join;
  fabric.util.drawArc = function (e, i, r, n) {
    for (var s = n[0], o = n[1], a = n[2], c = n[3], l = n[4], h = n[5], u = n[6], f = [[], [], [], []], d = t(h - i, u - r, s, o, c, l, a), g = 0, p = d.length; p > g; g++) {
      f[g][0] = d[g][0] + i, f[g][1] = d[g][1] + r, f[g][2] = d[g][2] + i, f[g][3] = d[g][3] + r, f[g][4] = d[g][4] + i, f[g][5] = d[g][5] + r, e.bezierCurveTo.apply(e, f[g]);
    }
  }, fabric.util.getBoundsOfArc = function (e, i, n, s, o, a, c, l, h) {
    for (var u, f = 0, d = 0, g = [], p = t(l - e, h - i, n, s, a, c, o), v = 0, b = p.length; b > v; v++) {
      u = r(f, d, p[v][0], p[v][1], p[v][2], p[v][3], p[v][4], p[v][5]), g.push({
        x: u[0].x + e,
        y: u[0].y + i
      }), g.push({
        x: u[1].x + e,
        y: u[1].y + i
      }), f = p[v][4], d = p[v][5];
    }

    return g;
  }, fabric.util.getBoundsOfCurve = r;
}();
!function () {
  function t(t, e) {
    for (var i = s.call(arguments, 2), r = [], n = 0, o = t.length; o > n; n++) {
      r[n] = i.length ? t[n][e].apply(t[n], i) : t[n][e].call(t[n]);
    }

    return r;
  }

  function e(t, e) {
    return n(t, e, function (t, e) {
      return t >= e;
    });
  }

  function i(t, e) {
    return n(t, e, function (t, e) {
      return e > t;
    });
  }

  function r(t, e) {
    for (var i = t.length; i--;) {
      t[i] = e;
    }

    return t;
  }

  function n(t, e, i) {
    if (t && 0 !== t.length) {
      var r = t.length - 1,
          n = e ? t[r][e] : t[r];
      if (e) for (; r--;) {
        i(t[r][e], n) && (n = t[r][e]);
      } else for (; r--;) {
        i(t[r], n) && (n = t[r]);
      }
      return n;
    }
  }

  var s = Array.prototype.slice;
  fabric.util.array = {
    fill: r,
    invoke: t,
    min: i,
    max: e
  };
}();
!function () {
  function t(e, i, r) {
    if (r) {
      if (!fabric.isLikelyNode && i instanceof Element) e = i;else if (i instanceof Array) {
        e = [];

        for (var n = 0, s = i.length; s > n; n++) {
          e[n] = t({}, i[n], r);
        }
      } else if (i && "object" == _typeof(i)) for (var o in i) {
        "canvas" === o ? e[o] = t({}, i[o]) : i.hasOwnProperty(o) && (e[o] = t({}, i[o], r));
      } else e = i;
    } else for (var o in i) {
      e[o] = i[o];
    }
    return e;
  }

  function e(e, i) {
    return t({}, e, i);
  }

  fabric.util.object = {
    extend: t,
    clone: e
  }, fabric.util.object.extend(fabric.util, fabric.Observable);
}();
!function () {
  function t(t) {
    return t.replace(/-+(.)?/g, function (t, e) {
      return e ? e.toUpperCase() : "";
    });
  }

  function e(t, e) {
    return t.charAt(0).toUpperCase() + (e ? t.slice(1) : t.slice(1).toLowerCase());
  }

  function i(t) {
    return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function r(t) {
    var e,
        i = 0,
        r = [];

    for (i = 0, e; i < t.length; i++) {
      (e = n(t, i)) !== !1 && r.push(e);
    }

    return r;
  }

  function n(t, e) {
    var i = t.charCodeAt(e);
    if (isNaN(i)) return "";
    if (55296 > i || i > 57343) return t.charAt(e);

    if (i >= 55296 && 56319 >= i) {
      if (t.length <= e + 1) throw "High surrogate without following low surrogate";
      var r = t.charCodeAt(e + 1);
      if (56320 > r || r > 57343) throw "High surrogate without following low surrogate";
      return t.charAt(e) + t.charAt(e + 1);
    }

    if (0 === e) throw "Low surrogate without preceding high surrogate";
    var n = t.charCodeAt(e - 1);
    if (55296 > n || n > 56319) throw "Low surrogate without preceding high surrogate";
    return !1;
  }

  fabric.util.string = {
    camelize: t,
    capitalize: e,
    escapeXml: i,
    graphemeSplit: r
  };
}();
!function () {
  function t() {}

  function e(t) {
    for (var e = null, i = this; i.constructor.superclass;) {
      var n = i.constructor.superclass.prototype[t];

      if (i[t] !== n) {
        e = n;
        break;
      }

      i = i.constructor.superclass.prototype;
    }

    return e ? arguments.length > 1 ? e.apply(this, r.call(arguments, 1)) : e.call(this) : console.log("tried to callSuper " + t + ", method not found in prototype chain", this);
  }

  function i() {
    function i() {
      this.initialize.apply(this, arguments);
    }

    var s = null,
        a = r.call(arguments, 0);
    "function" == typeof a[0] && (s = a.shift()), i.superclass = s, i.subclasses = [], s && (t.prototype = s.prototype, i.prototype = new t(), s.subclasses.push(i));

    for (var c = 0, h = a.length; h > c; c++) {
      o(i, a[c], s);
    }

    return i.prototype.initialize || (i.prototype.initialize = n), i.prototype.constructor = i, i.prototype.callSuper = e, i;
  }

  var r = Array.prototype.slice,
      n = function n() {},
      s = function () {
    for (var t in {
      toString: 1
    }) {
      if ("toString" === t) return !1;
    }

    return !0;
  }(),
      o = function o(t, e, i) {
    for (var r in e) {
      t.prototype[r] = r in t.prototype && "function" == typeof t.prototype[r] && (e[r] + "").indexOf("callSuper") > -1 ? function (t) {
        return function () {
          var r = this.constructor.superclass;
          this.constructor.superclass = i;
          var n = e[t].apply(this, arguments);
          return this.constructor.superclass = r, "initialize" !== t ? n : void 0;
        };
      }(r) : e[r], s && (e.toString !== Object.prototype.toString && (t.prototype.toString = e.toString), e.valueOf !== Object.prototype.valueOf && (t.prototype.valueOf = e.valueOf));
    }
  };

  fabric.util.createClass = i;
}();
!function () {
  function t(t) {
    var e,
        i,
        r = Array.prototype.slice.call(arguments, 1),
        n = r.length;

    for (i = 0; n > i; i++) {
      if (e = _typeof(t[r[i]]), !/^(?:function|object|unknown)$/.test(e)) return !1;
    }

    return !0;
  }

  function e(t, e) {
    return {
      handler: e,
      wrappedHandler: i(t, e)
    };
  }

  function i(t, e) {
    return function (i) {
      e.call(o(t), i || fabric.window.event);
    };
  }

  function r(t, e) {
    return function (i) {
      if (p[t] && p[t][e]) for (var r = p[t][e], n = 0, s = r.length; s > n; n++) {
        r[n].call(this, i || fabric.window.event);
      }
    };
  }

  function n(t) {
    t || (t = fabric.window.event);
    var e = t.target || (_typeof(t.srcElement) !== c ? t.srcElement : null),
        i = fabric.util.getScrollLeftTop(e);
    return {
      x: v(t) + i.left,
      y: b(t) + i.top
    };
  }

  function s(t, e, i) {
    var r,
        n = "touchend" === t.type ? "changedTouches" : "touches",
        s = t[n];
    return s && s[0] && (r = s[0][i]), "undefined" == typeof r && (r = t[i]), r;
  }

  var o,
      a,
      c = "unknown",
      h = function () {
    var t = 0;
    return function (e) {
      return e.__uniqueID || (e.__uniqueID = "uniqueID__" + t++);
    };
  }();

  !function () {
    var t = {};
    o = function o(e) {
      return t[e];
    }, a = function a(e, i) {
      t[e] = i;
    };
  }();
  var l,
      u,
      f = t(fabric.document.documentElement, "addEventListener", "removeEventListener") && t(fabric.window, "addEventListener", "removeEventListener"),
      d = t(fabric.document.documentElement, "attachEvent", "detachEvent") && t(fabric.window, "attachEvent", "detachEvent"),
      g = {},
      p = {};
  f ? (l = function l(t, e, i, r) {
    t && t.addEventListener(e, i, d ? !1 : r);
  }, u = function u(t, e, i, r) {
    t && t.removeEventListener(e, i, d ? !1 : r);
  }) : d ? (l = function l(t, i, r) {
    if (t) {
      var n = h(t);
      a(n, t), g[n] || (g[n] = {}), g[n][i] || (g[n][i] = []);
      var s = e(n, r);
      g[n][i].push(s), t.attachEvent("on" + i, s.wrappedHandler);
    }
  }, u = function u(t, e, i) {
    if (t) {
      var r,
          n = h(t);
      if (g[n] && g[n][e]) for (var s = 0, o = g[n][e].length; o > s; s++) {
        r = g[n][e][s], r && r.handler === i && (t.detachEvent("on" + e, r.wrappedHandler), g[n][e][s] = null);
      }
    }
  }) : (l = function l(t, e, i) {
    if (t) {
      var n = h(t);

      if (p[n] || (p[n] = {}), !p[n][e]) {
        p[n][e] = [];
        var s = t["on" + e];
        s && p[n][e].push(s), t["on" + e] = r(n, e);
      }

      p[n][e].push(i);
    }
  }, u = function u(t, e, i) {
    if (t) {
      var r = h(t);
      if (p[r] && p[r][e]) for (var n = p[r][e], s = 0, o = n.length; o > s; s++) {
        n[s] === i && n.splice(s, 1);
      }
    }
  }), fabric.util.addListener = l, fabric.util.removeListener = u;

  var v = function v(t) {
    return t.clientX;
  },
      b = function b(t) {
    return t.clientY;
  };

  fabric.isTouchSupported && (v = function v(t) {
    return s(t, "pageX", "clientX");
  }, b = function b(t) {
    return s(t, "pageY", "clientY");
  }), fabric.util.getPointer = n;
}();
!function () {
  function t(t, e) {
    var i = t.style;
    if (!i) return t;
    if ("string" == typeof e) return t.style.cssText += ";" + e, e.indexOf("opacity") > -1 ? s(t, e.match(/opacity:\s*(\d?\.?\d*)/)[1]) : t;

    for (var r in e) {
      if ("opacity" === r) s(t, e[r]);else {
        var n = "float" === r || "cssFloat" === r ? "undefined" == typeof i.styleFloat ? "cssFloat" : "styleFloat" : r;
        i[n] = e[r];
      }
    }

    return t;
  }

  var e = fabric.document.createElement("div"),
      i = "string" == typeof e.style.opacity,
      r = "string" == typeof e.style.filter,
      n = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/,
      s = function s(t) {
    return t;
  };

  i ? s = function s(t, e) {
    return t.style.opacity = e, t;
  } : r && (s = function s(t, e) {
    var i = t.style;
    return t.currentStyle && !t.currentStyle.hasLayout && (i.zoom = 1), n.test(i.filter) ? (e = e >= .9999 ? "" : "alpha(opacity=" + 100 * e + ")", i.filter = i.filter.replace(n, e)) : i.filter += " alpha(opacity=" + 100 * e + ")", t;
  }), fabric.util.setStyle = t;
}();
!function () {
  function t(t) {
    return "string" == typeof t ? fabric.document.getElementById(t) : t;
  }

  function e(t, e) {
    var i = fabric.document.createElement(t);

    for (var r in e) {
      "class" === r ? i.className = e[r] : "for" === r ? i.htmlFor = e[r] : i.setAttribute(r, e[r]);
    }

    return i;
  }

  function i(t, e) {
    t && -1 === (" " + t.className + " ").indexOf(" " + e + " ") && (t.className += (t.className ? " " : "") + e);
  }

  function r(t, i, r) {
    return "string" == typeof i && (i = e(i, r)), t.parentNode && t.parentNode.replaceChild(i, t), i.appendChild(t), i;
  }

  function n(t) {
    for (var e = 0, i = 0, r = fabric.document.documentElement, n = fabric.document.body || {
      scrollLeft: 0,
      scrollTop: 0
    }; t && (t.parentNode || t.host) && (t = t.parentNode || t.host, t === fabric.document ? (e = n.scrollLeft || r.scrollLeft || 0, i = n.scrollTop || r.scrollTop || 0) : (e += t.scrollLeft || 0, i += t.scrollTop || 0), 1 !== t.nodeType || "fixed" !== t.style.position);) {
      ;
    }

    return {
      left: e,
      top: i
    };
  }

  function s(t) {
    var e,
        i,
        r = t && t.ownerDocument,
        s = {
      left: 0,
      top: 0
    },
        o = {
      left: 0,
      top: 0
    },
        a = {
      borderLeftWidth: "left",
      borderTopWidth: "top",
      paddingLeft: "left",
      paddingTop: "top"
    };
    if (!r) return o;

    for (var c in a) {
      o[a[c]] += parseInt(f(t, c), 10) || 0;
    }

    return e = r.documentElement, "undefined" != typeof t.getBoundingClientRect && (s = t.getBoundingClientRect()), i = n(t), {
      left: s.left + i.left - (e.clientLeft || 0) + o.left,
      top: s.top + i.top - (e.clientTop || 0) + o.top
    };
  }

  function o(t) {
    var e = fabric.jsdomImplForWrapper(t);
    return e._canvas || e._image;
  }

  function a(t) {
    if (fabric.isLikelyNode) {
      var e = fabric.jsdomImplForWrapper(t);
      e && (e._image = null, e._canvas = null, e._currentSrc = null, e._attributes = null, e._classList = null);
    }
  }

  var c,
      h = Array.prototype.slice,
      l = function l(t) {
    return h.call(t, 0);
  };

  try {
    c = l(fabric.document.childNodes) instanceof Array;
  } catch (u) {}

  c || (l = function l(t) {
    for (var e = new Array(t.length), i = t.length; i--;) {
      e[i] = t[i];
    }

    return e;
  });
  var f;
  f = fabric.document.defaultView && fabric.document.defaultView.getComputedStyle ? function (t, e) {
    var i = fabric.document.defaultView.getComputedStyle(t, null);
    return i ? i[e] : void 0;
  } : function (t, e) {
    var i = t.style[e];
    return !i && t.currentStyle && (i = t.currentStyle[e]), i;
  }, function () {
    function t(t) {
      return "undefined" != typeof t.onselectstart && (t.onselectstart = fabric.util.falseFunction), r ? t.style[r] = "none" : "string" == typeof t.unselectable && (t.unselectable = "on"), t;
    }

    function e(t) {
      return "undefined" != typeof t.onselectstart && (t.onselectstart = null), r ? t.style[r] = "" : "string" == typeof t.unselectable && (t.unselectable = ""), t;
    }

    var i = fabric.document.documentElement.style,
        r = "userSelect" in i ? "userSelect" : "MozUserSelect" in i ? "MozUserSelect" : "WebkitUserSelect" in i ? "WebkitUserSelect" : "KhtmlUserSelect" in i ? "KhtmlUserSelect" : "";
    fabric.util.makeElementUnselectable = t, fabric.util.makeElementSelectable = e;
  }(), function () {
    function t(t, e) {
      var i = fabric.document.getElementsByTagName("head")[0],
          r = fabric.document.createElement("script"),
          n = !0;
      r.onload = r.onreadystatechange = function (t) {
        if (n) {
          if ("string" == typeof this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState) return;
          n = !1, e(t || fabric.window.event), r = r.onload = r.onreadystatechange = null;
        }
      }, r.src = t, i.appendChild(r);
    }

    fabric.util.getScript = t;
  }(), fabric.util.getById = t, fabric.util.toArray = l, fabric.util.makeElement = e, fabric.util.addClass = i, fabric.util.wrapElement = r, fabric.util.getScrollLeftTop = n, fabric.util.getElementOffset = s, fabric.util.getElementStyle = f, fabric.util.getNodeCanvas = o, fabric.util.cleanUpJsdomNode = a;
}();
!function () {
  function t(t, e) {
    return t + (/\?/.test(t) ? "&" : "?") + e;
  }

  function e() {}

  function i(i, r) {
    r || (r = {});

    var n = r.method ? r.method.toUpperCase() : "GET",
        s = r.onComplete || function () {},
        o = new fabric.window.XMLHttpRequest(),
        a = r.body || r.parameters;

    return o.onreadystatechange = function () {
      4 === o.readyState && (s(o), o.onreadystatechange = e);
    }, "GET" === n && (a = null, "string" == typeof r.parameters && (i = t(i, r.parameters))), o.open(n, i, !0), ("POST" === n || "PUT" === n) && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send(a), o;
  }

  fabric.util.request = i;
}();
fabric.log = function () {}, fabric.warn = function () {}, "undefined" != typeof console && ["log", "warn"].forEach(function (t) {
  "undefined" != typeof console[t] && "function" == typeof console[t].apply && (fabric[t] = function () {
    return console[t].apply(console, arguments);
  });
});
!function () {
  function t() {
    return !1;
  }

  function e(e) {
    i(function (r) {
      e || (e = {});

      var n,
          s = r || +new Date(),
          o = e.duration || 500,
          a = s + o,
          c = e.onChange || t,
          h = e.abort || t,
          l = e.onComplete || t,
          u = e.easing || function (t, e, i, r) {
        return -i * Math.cos(t / r * (Math.PI / 2)) + i + e;
      },
          f = "startValue" in e ? e.startValue : 0,
          d = "endValue" in e ? e.endValue : 100,
          g = e.byValue || d - f;

      e.onStart && e.onStart(), function p(t) {
        if (h()) return void l(d, 1, 1);
        n = t || +new Date();
        var r = n > a ? o : n - s,
            v = r / o,
            b = u(r, f, g, o),
            m = Math.abs((b - f) / g);
        return c(b, m, v), n > a ? void (e.onComplete && e.onComplete()) : void i(p);
      }(s);
    });
  }

  function i() {
    return n.apply(fabric.window, arguments);
  }

  function r() {
    return s.apply(fabric.window, arguments);
  }

  var n = fabric.window.requestAnimationFrame || fabric.window.webkitRequestAnimationFrame || fabric.window.mozRequestAnimationFrame || fabric.window.oRequestAnimationFrame || fabric.window.msRequestAnimationFrame || function (t) {
    return fabric.window.setTimeout(t, 1e3 / 60);
  },
      s = fabric.window.cancelAnimationFrame || fabric.window.clearTimeout;

  fabric.util.animate = e, fabric.util.requestAnimFrame = i, fabric.util.cancelAnimFrame = r;
}();
!function () {
  function t(t, e, i) {
    var r = "rgba(" + parseInt(t[0] + i * (e[0] - t[0]), 10) + "," + parseInt(t[1] + i * (e[1] - t[1]), 10) + "," + parseInt(t[2] + i * (e[2] - t[2]), 10);
    return r += "," + (t && e ? parseFloat(t[3] + i * (e[3] - t[3])) : 1), r += ")";
  }

  function e(e, i, r, n) {
    var s = new fabric.Color(e).getSource(),
        o = new fabric.Color(i).getSource();
    n = n || {}, fabric.util.animate(fabric.util.object.extend(n, {
      duration: r || 500,
      startValue: s,
      endValue: o,
      byValue: o,
      easing: function easing(e, i, r, s) {
        var o = n.colorEasing ? n.colorEasing(e, s) : 1 - Math.cos(e / s * (Math.PI / 2));
        return t(i, r, o);
      }
    }));
  }

  fabric.util.animateColor = e;
}();
!function (t) {
  "use strict";

  function e(t) {
    return t in j ? j[t] : t;
  }

  function i(t, e, i, r) {
    var n,
        s = "[object Array]" === Object.prototype.toString.call(e);
    if ("fill" !== t && "stroke" !== t || "none" !== e) {
      if ("strokeDashArray" === t) e = "none" === e ? null : e.replace(/,/g, " ").split(/\s+/).map(parseFloat);else if ("transformMatrix" === t) e = i && i.transformMatrix ? x(i.transformMatrix, b.parseTransformAttribute(e)) : b.parseTransformAttribute(e);else if ("visible" === t) e = "none" !== e && "hidden" !== e, i && i.visible === !1 && (e = !1);else if ("opacity" === t) e = parseFloat(e), i && "undefined" != typeof i.opacity && (e *= i.opacity);else if ("textAnchor" === t) e = "start" === e ? "left" : "end" === e ? "right" : "center";else if ("charSpacing" === t) n = C(e, r) / r * 1e3;else if ("paintFirst" === t) {
        var o = e.indexOf("fill"),
            a = e.indexOf("stroke"),
            e = "fill";
        o > -1 && a > -1 && o > a ? e = "stroke" : -1 === o && a > -1 && (e = "stroke");
      } else {
        if ("href" === t || "xlink:href" === t) return e;
        n = s ? e.map(C) : C(e, r);
      }
    } else e = "";
    return !s && isNaN(n) ? e : n;
  }

  function r(t) {
    return new RegExp("^(" + t.join("|") + ")\\b", "i");
  }

  function n(t) {
    for (var e in k) {
      if ("undefined" != typeof t[k[e]] && "" !== t[e]) {
        if ("undefined" == typeof t[e]) {
          if (!b.Object.prototype[e]) continue;
          t[e] = b.Object.prototype[e];
        }

        if (0 !== t[e].indexOf("url(")) {
          var i = new b.Color(t[e]);
          t[e] = i.setAlpha(_(i.getAlpha() * t[k[e]], 2)).toRgba();
        }
      }
    }

    return t;
  }

  function s(t, e) {
    var i,
        r,
        n,
        s,
        o = [];

    for (n = 0, s = e.length; s > n; n++) {
      i = e[n], r = t.getElementsByTagName(i), o = o.concat(Array.prototype.slice.call(r));
    }

    return o;
  }

  function o(t, e) {
    var i, r;
    t.replace(/;\s*$/, "").split(";").forEach(function (t) {
      var n = t.split(":");
      i = n[0].trim().toLowerCase(), r = n[1].trim(), e[i] = r;
    });
  }

  function a(t, e) {
    var i, r;

    for (var n in t) {
      "undefined" != typeof t[n] && (i = n.toLowerCase(), r = t[n], e[i] = r);
    }
  }

  function c(t, e) {
    var i = {};

    for (var r in b.cssRules[e]) {
      if (l(t, r.split(" "))) for (var n in b.cssRules[e][r]) {
        i[n] = b.cssRules[e][r][n];
      }
    }

    return i;
  }

  function l(t, e) {
    var i,
        r = !0;
    return i = u(t, e.pop()), i && e.length && (r = h(t, e)), i && r && 0 === e.length;
  }

  function h(t, e) {
    for (var i, r = !0; t.parentNode && 1 === t.parentNode.nodeType && e.length;) {
      r && (i = e.pop()), t = t.parentNode, r = u(t, i);
    }

    return 0 === e.length;
  }

  function u(t, e) {
    var i,
        r,
        n = t.nodeName,
        s = t.getAttribute("class"),
        o = t.getAttribute("id");
    if (i = new RegExp("^" + n, "i"), e = e.replace(i, ""), o && e.length && (i = new RegExp("#" + o + "(?![a-zA-Z\\-]+)", "i"), e = e.replace(i, "")), s && e.length) for (s = s.split(" "), r = s.length; r--;) {
      i = new RegExp("\\." + s[r] + "(?![a-zA-Z\\-]+)", "i"), e = e.replace(i, "");
    }
    return 0 === e.length;
  }

  function f(t, e) {
    var i;
    if (t.getElementById && (i = t.getElementById(e)), i) return i;
    var r,
        n,
        s,
        o = t.getElementsByTagName("*");

    for (n = 0, s = o.length; s > n; n++) {
      if (r = o[n], e === r.getAttribute("id")) return r;
    }
  }

  function d(t) {
    for (var e = s(t, ["use", "svg:use"]), i = 0; e.length && i < e.length;) {
      var r,
          n,
          o,
          a,
          c,
          l = e[i],
          h = (l.getAttribute("xlink:href") || l.getAttribute("href")).substr(1),
          u = l.getAttribute("x") || 0,
          d = l.getAttribute("y") || 0,
          p = f(t, h).cloneNode(!0),
          v = (p.getAttribute("transform") || "") + " translate(" + u + ", " + d + ")",
          b = e.length;

      if (g(p), /^svg$/i.test(p.nodeName)) {
        var m = p.ownerDocument.createElement("g");

        for (o = 0, a = p.attributes, c = a.length; c > o; o++) {
          n = a.item(o), m.setAttribute(n.nodeName, n.nodeValue);
        }

        for (; p.firstChild;) {
          m.appendChild(p.firstChild);
        }

        p = m;
      }

      for (o = 0, a = l.attributes, c = a.length; c > o; o++) {
        n = a.item(o), "x" !== n.nodeName && "y" !== n.nodeName && "xlink:href" !== n.nodeName && "href" !== n.nodeName && ("transform" === n.nodeName ? v = n.nodeValue + " " + v : p.setAttribute(n.nodeName, n.nodeValue));
      }

      p.setAttribute("transform", v), p.setAttribute("instantiated_by_use", "1"), p.removeAttribute("id"), r = l.parentNode, r.replaceChild(p, l), e.length === b && i++;
    }
  }

  function g(t) {
    var e,
        i,
        r,
        n,
        s = t.getAttribute("viewBox"),
        o = 1,
        a = 1,
        c = 0,
        l = 0,
        h = t.getAttribute("width"),
        u = t.getAttribute("height"),
        f = t.getAttribute("x") || 0,
        d = t.getAttribute("y") || 0,
        g = t.getAttribute("preserveAspectRatio") || "",
        p = !s || !b.svgViewBoxElementsRegEx.test(t.nodeName) || !(s = s.match(A)),
        v = !h || !u || "100%" === h || "100%" === u,
        m = p && v,
        y = {},
        _ = "",
        x = 0,
        w = 0;
    if (y.width = 0, y.height = 0, y.toBeParsed = m, m) return y;
    if (p) return y.width = C(h), y.height = C(u), y;
    if (c = -parseFloat(s[1]), l = -parseFloat(s[2]), e = parseFloat(s[3]), i = parseFloat(s[4]), v ? (y.width = e, y.height = i) : (y.width = C(h), y.height = C(u), o = y.width / e, a = y.height / i), g = b.util.parsePreserveAspectRatioAttribute(g), "none" !== g.alignX && ("meet" === g.meetOrSlice && (a = o = o > a ? a : o), "slice" === g.meetOrSlice && (a = o = o > a ? o : a), x = y.width - e * o, w = y.height - i * o, "Mid" === g.alignX && (x /= 2), "Mid" === g.alignY && (w /= 2), "Min" === g.alignX && (x = 0), "Min" === g.alignY && (w = 0)), 1 === o && 1 === a && 0 === c && 0 === l && 0 === f && 0 === d) return y;

    if ((f || d) && (_ = " translate(" + C(f) + " " + C(d) + ") "), r = _ + " matrix(" + o + " 0 0 " + a + " " + (c * o + x) + " " + (l * a + w) + ") ", y.viewboxTransform = b.parseTransformAttribute(r), "svg" === t.nodeName) {
      for (n = t.ownerDocument.createElement("g"); t.firstChild;) {
        n.appendChild(t.firstChild);
      }

      t.appendChild(n);
    } else n = t, r = n.getAttribute("transform") + r;

    return n.setAttribute("transform", r), y;
  }

  function p(t, e) {
    for (; t && (t = t.parentNode);) {
      if (t.nodeName && e.test(t.nodeName.replace("svg:", "")) && !t.getAttribute("instantiated_by_use")) return !0;
    }

    return !1;
  }

  function v(t, e) {
    var i = ["gradientTransform", "x1", "x2", "y1", "y2", "gradientUnits", "cx", "cy", "r", "fx", "fy"],
        r = "xlink:href",
        n = e.getAttribute(r).substr(1),
        s = f(t, n);
    if (s && s.getAttribute(r) && v(t, s), i.forEach(function (t) {
      e.hasAttribute(t) || e.setAttribute(t, s.getAttribute(t));
    }), !e.children.length) for (var o = s.cloneNode(!0); o.firstChild;) {
      e.appendChild(o.firstChild);
    }
    e.removeAttribute(r);
  }

  var b = t.fabric || (t.fabric = {}),
      m = b.util.object.extend,
      y = b.util.object.clone,
      _ = b.util.toFixed,
      C = b.util.parseUnit,
      x = b.util.multiplyTransformMatrices,
      w = ["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text"],
      S = ["symbol", "image", "marker", "pattern", "view", "svg"],
      O = ["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"],
      T = ["symbol", "g", "a", "svg", "clipPath", "defs"],
      j = {
    cx: "left",
    x: "left",
    r: "radius",
    cy: "top",
    y: "top",
    display: "visible",
    visibility: "visible",
    transform: "transformMatrix",
    "fill-opacity": "fillOpacity",
    "fill-rule": "fillRule",
    "font-family": "fontFamily",
    "font-size": "fontSize",
    "font-style": "fontStyle",
    "font-weight": "fontWeight",
    "letter-spacing": "charSpacing",
    "paint-order": "paintFirst",
    "stroke-dasharray": "strokeDashArray",
    "stroke-dashoffset": "strokeDashOffset",
    "stroke-linecap": "strokeLineCap",
    "stroke-linejoin": "strokeLineJoin",
    "stroke-miterlimit": "strokeMiterLimit",
    "stroke-opacity": "strokeOpacity",
    "stroke-width": "strokeWidth",
    "text-decoration": "textDecoration",
    "text-anchor": "textAnchor",
    opacity: "opacity",
    "clip-path": "clipPath",
    "clip-rule": "clipRule"
  },
      k = {
    stroke: "strokeOpacity",
    fill: "fillOpacity"
  };
  b.svgValidTagNamesRegEx = r(w), b.svgViewBoxElementsRegEx = r(S), b.svgInvalidAncestorsRegEx = r(O), b.svgValidParentsRegEx = r(T), b.cssRules = {}, b.gradientDefs = {}, b.clipPaths = {}, b.parseTransformAttribute = function () {
    function t(t, e) {
      var i = b.util.cos(e[0]),
          r = b.util.sin(e[0]),
          n = 0,
          s = 0;
      3 === e.length && (n = e[1], s = e[2]), t[0] = i, t[1] = r, t[2] = -r, t[3] = i, t[4] = n - (i * n - r * s), t[5] = s - (r * n + i * s);
    }

    function e(t, e) {
      var i = e[0],
          r = 2 === e.length ? e[1] : e[0];
      t[0] = i, t[3] = r;
    }

    function i(t, e, i) {
      t[i] = Math.tan(b.util.degreesToRadians(e[0]));
    }

    function r(t, e) {
      t[4] = e[0], 2 === e.length && (t[5] = e[1]);
    }

    var n = b.iMatrix,
        s = b.reNum,
        o = "(?:\\s+,?\\s*|,\\s*)",
        a = "(?:(skewX)\\s*\\(\\s*(" + s + ")\\s*\\))",
        c = "(?:(skewY)\\s*\\(\\s*(" + s + ")\\s*\\))",
        l = "(?:(rotate)\\s*\\(\\s*(" + s + ")(?:" + o + "(" + s + ")" + o + "(" + s + "))?\\s*\\))",
        h = "(?:(scale)\\s*\\(\\s*(" + s + ")(?:" + o + "(" + s + "))?\\s*\\))",
        u = "(?:(translate)\\s*\\(\\s*(" + s + ")(?:" + o + "(" + s + "))?\\s*\\))",
        f = "(?:(matrix)\\s*\\(\\s*(" + s + ")" + o + "(" + s + ")" + o + "(" + s + ")" + o + "(" + s + ")" + o + "(" + s + ")" + o + "(" + s + ")\\s*\\))",
        d = "(?:" + f + "|" + u + "|" + h + "|" + l + "|" + a + "|" + c + ")",
        g = "(?:" + d + "(?:" + o + "*" + d + ")*)",
        p = "^\\s*(?:" + g + "?)\\s*$",
        v = new RegExp(p),
        m = new RegExp(d, "g");
    return function (s) {
      var o = n.concat(),
          a = [];
      if (!s || s && !v.test(s)) return o;
      s.replace(m, function (s) {
        var c = new RegExp(d).exec(s).filter(function (t) {
          return !!t;
        }),
            l = c[1],
            h = c.slice(2).map(parseFloat);

        switch (l) {
          case "translate":
            r(o, h);
            break;

          case "rotate":
            h[0] = b.util.degreesToRadians(h[0]), t(o, h);
            break;

          case "scale":
            e(o, h);
            break;

          case "skewX":
            i(o, h, 2);
            break;

          case "skewY":
            i(o, h, 1);
            break;

          case "matrix":
            o = h;
        }

        a.push(o.concat()), o = n.concat();
      });

      for (var c = a[0]; a.length > 1;) {
        a.shift(), c = b.util.multiplyTransformMatrices(c, a[0]);
      }

      return c;
    };
  }();
  var A = new RegExp("^\\s*(" + b.reNum + "+)\\s*,?\\s*(" + b.reNum + "+)\\s*,?\\s*(" + b.reNum + "+)\\s*,?\\s*(" + b.reNum + "+)\\s*$");

  b.parseSVGDocument = function (t, e, i, r) {
    if (t) {
      d(t);
      var n,
          s,
          o = b.Object.__uid++,
          a = g(t),
          c = b.util.toArray(t.getElementsByTagName("*"));

      if (a.crossOrigin = r && r.crossOrigin, a.svgUid = o, 0 === c.length && b.isLikelyNode) {
        c = t.selectNodes('//*[name(.)!="svg"]');
        var l = [];

        for (n = 0, s = c.length; s > n; n++) {
          l[n] = c[n];
        }

        c = l;
      }

      var h = c.filter(function (t) {
        return g(t), b.svgValidTagNamesRegEx.test(t.nodeName.replace("svg:", "")) && !p(t, b.svgInvalidAncestorsRegEx);
      });
      if (!h || h && !h.length) return void (e && e([], {}));
      var u = {};
      c.filter(function (t) {
        return "clipPath" === t.nodeName.replace("svg:", "");
      }).forEach(function (t) {
        var e = t.getAttribute("id");
        u[e] = b.util.toArray(t.getElementsByTagName("*")).filter(function (t) {
          return b.svgValidTagNamesRegEx.test(t.nodeName.replace("svg:", ""));
        });
      }), b.gradientDefs[o] = b.getGradientDefs(t), b.cssRules[o] = b.getCSSRules(t), b.clipPaths[o] = u, b.parseElements(h, function (t, i) {
        e && (e(t, a, i, c), delete b.gradientDefs[o], delete b.cssRules[o], delete b.clipPaths[o]);
      }, y(a), i, r);
    }
  };

  var E = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + b.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + b.reNum + "))?\\s+(.*)");
  m(b, {
    parseFontDeclaration: function parseFontDeclaration(t, e) {
      var i = t.match(E);

      if (i) {
        var r = i[1],
            n = i[3],
            s = i[4],
            o = i[5],
            a = i[6];
        r && (e.fontStyle = r), n && (e.fontWeight = isNaN(parseFloat(n)) ? n : parseFloat(n)), s && (e.fontSize = C(s)), a && (e.fontFamily = a), o && (e.lineHeight = "normal" === o ? 1 : o);
      }
    },
    getGradientDefs: function getGradientDefs(t) {
      var e,
          i = ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"],
          r = s(t, i),
          n = 0,
          o = {};

      for (n = r.length; n--;) {
        e = r[n], e.getAttribute("xlink:href") && v(t, e), o[e.getAttribute("id")] = e;
      }

      return o;
    },
    parseAttributes: function parseAttributes(t, r, s) {
      if (t) {
        var o,
            a,
            l,
            h = {};
        "undefined" == typeof s && (s = t.getAttribute("svgUid")), t.parentNode && b.svgValidParentsRegEx.test(t.parentNode.nodeName) && (h = b.parseAttributes(t.parentNode, r, s));
        var u = r.reduce(function (e, i) {
          return o = t.getAttribute(i), o && (e[i] = o), e;
        }, {});
        u = m(u, m(c(t, s), b.parseStyleAttribute(t))), a = l = h.fontSize || b.Text.DEFAULT_SVG_FONT_SIZE, u["font-size"] && (u["font-size"] = a = C(u["font-size"], l));
        var f,
            d,
            g = {};

        for (var p in u) {
          f = e(p), d = i(f, u[p], h, a), g[f] = d;
        }

        g && g.font && b.parseFontDeclaration(g.font, g);
        var v = m(h, g);
        return b.svgValidParentsRegEx.test(t.nodeName) ? v : n(v);
      }
    },
    parseElements: function parseElements(t, e, i, r, n) {
      new b.ElementsParser(t, e, i, r, n).parse();
    },
    parseStyleAttribute: function parseStyleAttribute(t) {
      var e = {},
          i = t.getAttribute("style");
      return i ? ("string" == typeof i ? o(i, e) : a(i, e), e) : e;
    },
    parsePointsAttribute: function parsePointsAttribute(t) {
      if (!t) return null;
      t = t.replace(/,/g, " ").trim(), t = t.split(/\s+/);
      var e,
          i,
          r = [];

      for (e = 0, i = t.length; i > e; e += 2) {
        r.push({
          x: parseFloat(t[e]),
          y: parseFloat(t[e + 1])
        });
      }

      return r;
    },
    getCSSRules: function getCSSRules(t) {
      var e,
          i,
          r,
          n = t.getElementsByTagName("style"),
          s = {};

      for (e = 0, i = n.length; i > e; e++) {
        var o = n[e].textContent || n[e].text;
        o = o.replace(/\/\*[\s\S]*?\*\//g, ""), "" !== o.trim() && (r = o.match(/[^{]*\{[\s\S]*?\}/g), r = r.map(function (t) {
          return t.trim();
        }), r.forEach(function (t) {
          var r = t.match(/([\s\S]*?)\s*\{([^}]*)\}/),
              n = {},
              o = r[2].trim(),
              a = o.replace(/;$/, "").split(/\s*;\s*/);

          for (e = 0, i = a.length; i > e; e++) {
            var c = a[e].split(/\s*:\s*/),
                l = c[0],
                h = c[1];
            n[l] = h;
          }

          t = r[1], t.split(",").forEach(function (t) {
            t = t.replace(/^svg/i, "").trim(), "" !== t && (s[t] ? b.util.object.extend(s[t], n) : s[t] = b.util.object.clone(n));
          });
        }));
      }

      return s;
    },
    loadSVGFromURL: function loadSVGFromURL(t, e, i, r) {
      function n(t) {
        var n = t.responseXML;
        return n && !n.documentElement && b.window.ActiveXObject && t.responseText && (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, ""))), n && n.documentElement ? void b.parseSVGDocument(n.documentElement, function (t, i, r, n) {
          e && e(t, i, r, n);
        }, i, r) : (e && e(null), !1);
      }

      t = t.replace(/^\n\s*/, "").trim(), new b.util.request(t, {
        method: "get",
        onComplete: n
      });
    },
    loadSVGFromString: function loadSVGFromString(t, e, i, r) {
      t = t.trim();
      var n;

      if ("undefined" != typeof DOMParser) {
        var s = new DOMParser();
        s && s.parseFromString && (n = s.parseFromString(t, "text/xml"));
      } else b.window.ActiveXObject && (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, "")));

      b.parseSVGDocument(n.documentElement, function (t, i, r, n) {
        e(t, i, r, n);
      }, i, r);
    }
  });
}( true ? exports : undefined);
fabric.ElementsParser = function (t, e, i, r, n) {
  this.elements = t, this.callback = e, this.options = i, this.reviver = r, this.svgUid = i && i.svgUid || 0, this.parsingOptions = n, this.regexUrl = /^url\(['"]?#([^'"]+)['"]?\)/g;
}, function (t) {
  t.parse = function () {
    this.instances = new Array(this.elements.length), this.numElements = this.elements.length, this.createObjects();
  }, t.createObjects = function () {
    var t = this;
    this.elements.forEach(function (e, i) {
      e.setAttribute("svgUid", t.svgUid), t.createObject(e, i);
    });
  }, t.findTag = function (t) {
    return fabric[fabric.util.string.capitalize(t.tagName.replace("svg:", ""))];
  }, t.createObject = function (t, e) {
    var i = this.findTag(t);
    if (i && i.fromElement) try {
      i.fromElement(t, this.createCallback(e, t), this.options);
    } catch (r) {
      fabric.log(r);
    } else this.checkIfDone();
  }, t.createCallback = function (t, e) {
    var i = this;
    return function (r) {
      var n;
      i.resolveGradient(r, "fill"), i.resolveGradient(r, "stroke"), r instanceof fabric.Image && r._originalElement && (n = r.parsePreserveAspectRatioAttribute(e)), r._removeTransformMatrix(n), i.resolveClipPath(r), i.reviver && i.reviver(e, r), i.instances[t] = r, i.checkIfDone();
    };
  }, t.extractPropertyDefinition = function (t, e, i) {
    var r = t[e];

    if (/^url\(/.test(r)) {
      var n = this.regexUrl.exec(r)[1];
      return this.regexUrl.lastIndex = 0, fabric[i][this.svgUid][n];
    }
  }, t.resolveGradient = function (t, e) {
    var i = this.extractPropertyDefinition(t, e, "gradientDefs");
    i && t.set(e, fabric.Gradient.fromElement(i, t));
  }, t.createClipPathCallback = function (t, e) {
    return function (t) {
      t._removeTransformMatrix(), t.fillRule = t.clipRule, e.push(t);
    };
  }, t.resolveClipPath = function (t) {
    var e,
        i,
        r,
        n,
        s,
        o,
        a = this.extractPropertyDefinition(t, "clipPath", "clipPaths");

    if (a) {
      n = [], r = fabric.util.invertTransform(t.calcTransformMatrix());

      for (var c = 0; c < a.length; c++) {
        e = a[c], i = this.findTag(e), i.fromElement(e, this.createClipPathCallback(t, n), this.options);
      }

      a = 1 === n.length ? n[0] : new fabric.Group(n), s = fabric.util.multiplyTransformMatrices(r, a.calcTransformMatrix());
      var o = fabric.util.qrDecompose(s);
      a.flipX = !1, a.flipY = !1, a.set("scaleX", o.scaleX), a.set("scaleY", o.scaleY), a.angle = o.angle, a.skewX = o.skewX, a.skewY = 0, a.setPositionByOrigin({
        x: o.translateX,
        y: o.translateY
      }, "center", "center"), t.clipPath = a;
    }
  }, t.checkIfDone = function () {
    0 === --this.numElements && (this.instances = this.instances.filter(function (t) {
      return null != t;
    }), this.callback(this.instances, this.elements));
  };
}(fabric.ElementsParser.prototype);
!function (t) {
  "use strict";

  function e(t, e) {
    this.x = t, this.y = e;
  }

  var i = t.fabric || (t.fabric = {});
  return i.Point ? void i.warn("fabric.Point is already defined") : (i.Point = e, void (e.prototype = {
    type: "point",
    constructor: e,
    add: function add(t) {
      return new e(this.x + t.x, this.y + t.y);
    },
    addEquals: function addEquals(t) {
      return this.x += t.x, this.y += t.y, this;
    },
    scalarAdd: function scalarAdd(t) {
      return new e(this.x + t, this.y + t);
    },
    scalarAddEquals: function scalarAddEquals(t) {
      return this.x += t, this.y += t, this;
    },
    subtract: function subtract(t) {
      return new e(this.x - t.x, this.y - t.y);
    },
    subtractEquals: function subtractEquals(t) {
      return this.x -= t.x, this.y -= t.y, this;
    },
    scalarSubtract: function scalarSubtract(t) {
      return new e(this.x - t, this.y - t);
    },
    scalarSubtractEquals: function scalarSubtractEquals(t) {
      return this.x -= t, this.y -= t, this;
    },
    multiply: function multiply(t) {
      return new e(this.x * t, this.y * t);
    },
    multiplyEquals: function multiplyEquals(t) {
      return this.x *= t, this.y *= t, this;
    },
    divide: function divide(t) {
      return new e(this.x / t, this.y / t);
    },
    divideEquals: function divideEquals(t) {
      return this.x /= t, this.y /= t, this;
    },
    eq: function eq(t) {
      return this.x === t.x && this.y === t.y;
    },
    lt: function lt(t) {
      return this.x < t.x && this.y < t.y;
    },
    lte: function lte(t) {
      return this.x <= t.x && this.y <= t.y;
    },
    gt: function gt(t) {
      return this.x > t.x && this.y > t.y;
    },
    gte: function gte(t) {
      return this.x >= t.x && this.y >= t.y;
    },
    lerp: function lerp(t, i) {
      return "undefined" == typeof i && (i = .5), i = Math.max(Math.min(1, i), 0), new e(this.x + (t.x - this.x) * i, this.y + (t.y - this.y) * i);
    },
    distanceFrom: function distanceFrom(t) {
      var e = this.x - t.x,
          i = this.y - t.y;
      return Math.sqrt(e * e + i * i);
    },
    midPointFrom: function midPointFrom(t) {
      return this.lerp(t);
    },
    min: function min(t) {
      return new e(Math.min(this.x, t.x), Math.min(this.y, t.y));
    },
    max: function max(t) {
      return new e(Math.max(this.x, t.x), Math.max(this.y, t.y));
    },
    toString: function toString() {
      return this.x + "," + this.y;
    },
    setXY: function setXY(t, e) {
      return this.x = t, this.y = e, this;
    },
    setX: function setX(t) {
      return this.x = t, this;
    },
    setY: function setY(t) {
      return this.y = t, this;
    },
    setFromPoint: function setFromPoint(t) {
      return this.x = t.x, this.y = t.y, this;
    },
    swap: function swap(t) {
      var e = this.x,
          i = this.y;
      this.x = t.x, this.y = t.y, t.x = e, t.y = i;
    },
    clone: function clone() {
      return new e(this.x, this.y);
    }
  }));
}( true ? exports : undefined);
!function (t) {
  "use strict";

  function e(t) {
    this.status = t, this.points = [];
  }

  var i = t.fabric || (t.fabric = {});
  return i.Intersection ? void i.warn("fabric.Intersection is already defined") : (i.Intersection = e, i.Intersection.prototype = {
    constructor: e,
    appendPoint: function appendPoint(t) {
      return this.points.push(t), this;
    },
    appendPoints: function appendPoints(t) {
      return this.points = this.points.concat(t), this;
    }
  }, i.Intersection.intersectLineLine = function (t, r, n, s) {
    var o,
        a = (s.x - n.x) * (t.y - n.y) - (s.y - n.y) * (t.x - n.x),
        c = (r.x - t.x) * (t.y - n.y) - (r.y - t.y) * (t.x - n.x),
        l = (s.y - n.y) * (r.x - t.x) - (s.x - n.x) * (r.y - t.y);

    if (0 !== l) {
      var h = a / l,
          u = c / l;
      h >= 0 && 1 >= h && u >= 0 && 1 >= u ? (o = new e("Intersection"), o.appendPoint(new i.Point(t.x + h * (r.x - t.x), t.y + h * (r.y - t.y)))) : o = new e();
    } else o = new e(0 === a || 0 === c ? "Coincident" : "Parallel");

    return o;
  }, i.Intersection.intersectLinePolygon = function (t, i, r) {
    var n,
        s,
        o,
        a,
        c = new e(),
        l = r.length;

    for (a = 0; l > a; a++) {
      n = r[a], s = r[(a + 1) % l], o = e.intersectLineLine(t, i, n, s), c.appendPoints(o.points);
    }

    return c.points.length > 0 && (c.status = "Intersection"), c;
  }, i.Intersection.intersectPolygonPolygon = function (t, i) {
    var r,
        n = new e(),
        s = t.length;

    for (r = 0; s > r; r++) {
      var o = t[r],
          a = t[(r + 1) % s],
          c = e.intersectLinePolygon(o, a, i);
      n.appendPoints(c.points);
    }

    return n.points.length > 0 && (n.status = "Intersection"), n;
  }, void (i.Intersection.intersectPolygonRectangle = function (t, r, n) {
    var s = r.min(n),
        o = r.max(n),
        a = new i.Point(o.x, s.y),
        c = new i.Point(s.x, o.y),
        l = e.intersectLinePolygon(s, a, t),
        h = e.intersectLinePolygon(a, o, t),
        u = e.intersectLinePolygon(o, c, t),
        f = e.intersectLinePolygon(c, s, t),
        d = new e();
    return d.appendPoints(l.points), d.appendPoints(h.points), d.appendPoints(u.points), d.appendPoints(f.points), d.points.length > 0 && (d.status = "Intersection"), d;
  }));
}( true ? exports : undefined);
!function (t) {
  "use strict";

  function e(t) {
    t ? this._tryParsingColor(t) : this.setSource([0, 0, 0, 1]);
  }

  function i(t, e, i) {
    return 0 > i && (i += 1), i > 1 && (i -= 1), 1 / 6 > i ? t + 6 * (e - t) * i : .5 > i ? e : 2 / 3 > i ? t + (e - t) * (2 / 3 - i) * 6 : t;
  }

  var r = t.fabric || (t.fabric = {});
  return r.Color ? void r.warn("fabric.Color is already defined.") : (r.Color = e, r.Color.prototype = {
    _tryParsingColor: function _tryParsingColor(t) {
      var i;
      t in e.colorNameMap && (t = e.colorNameMap[t]), "transparent" === t && (i = [255, 255, 255, 0]), i || (i = e.sourceFromHex(t)), i || (i = e.sourceFromRgb(t)), i || (i = e.sourceFromHsl(t)), i || (i = [0, 0, 0, 1]), i && this.setSource(i);
    },
    _rgbToHsl: function _rgbToHsl(t, e, i) {
      t /= 255, e /= 255, i /= 255;
      var n,
          s,
          o,
          a = r.util.array.max([t, e, i]),
          c = r.util.array.min([t, e, i]);
      if (o = (a + c) / 2, a === c) n = s = 0;else {
        var l = a - c;

        switch (s = o > .5 ? l / (2 - a - c) : l / (a + c), a) {
          case t:
            n = (e - i) / l + (i > e ? 6 : 0);
            break;

          case e:
            n = (i - t) / l + 2;
            break;

          case i:
            n = (t - e) / l + 4;
        }

        n /= 6;
      }
      return [Math.round(360 * n), Math.round(100 * s), Math.round(100 * o)];
    },
    getSource: function getSource() {
      return this._source;
    },
    setSource: function setSource(t) {
      this._source = t;
    },
    toRgb: function toRgb() {
      var t = this.getSource();
      return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")";
    },
    toRgba: function toRgba() {
      var t = this.getSource();
      return "rgba(" + t[0] + "," + t[1] + "," + t[2] + "," + t[3] + ")";
    },
    toHsl: function toHsl() {
      var t = this.getSource(),
          e = this._rgbToHsl(t[0], t[1], t[2]);

      return "hsl(" + e[0] + "," + e[1] + "%," + e[2] + "%)";
    },
    toHsla: function toHsla() {
      var t = this.getSource(),
          e = this._rgbToHsl(t[0], t[1], t[2]);

      return "hsla(" + e[0] + "," + e[1] + "%," + e[2] + "%," + t[3] + ")";
    },
    toHex: function toHex() {
      var t,
          e,
          i,
          r = this.getSource();
      return t = r[0].toString(16), t = 1 === t.length ? "0" + t : t, e = r[1].toString(16), e = 1 === e.length ? "0" + e : e, i = r[2].toString(16), i = 1 === i.length ? "0" + i : i, t.toUpperCase() + e.toUpperCase() + i.toUpperCase();
    },
    toHexa: function toHexa() {
      var t,
          e = this.getSource();
      return t = Math.round(255 * e[3]), t = t.toString(16), t = 1 === t.length ? "0" + t : t, this.toHex() + t.toUpperCase();
    },
    getAlpha: function getAlpha() {
      return this.getSource()[3];
    },
    setAlpha: function setAlpha(t) {
      var e = this.getSource();
      return e[3] = t, this.setSource(e), this;
    },
    toGrayscale: function toGrayscale() {
      var t = this.getSource(),
          e = parseInt((.3 * t[0] + .59 * t[1] + .11 * t[2]).toFixed(0), 10),
          i = t[3];
      return this.setSource([e, e, e, i]), this;
    },
    toBlackWhite: function toBlackWhite(t) {
      var e = this.getSource(),
          i = (.3 * e[0] + .59 * e[1] + .11 * e[2]).toFixed(0),
          r = e[3];
      return t = t || 127, i = Number(i) < Number(t) ? 0 : 255, this.setSource([i, i, i, r]), this;
    },
    overlayWith: function overlayWith(t) {
      t instanceof e || (t = new e(t));
      var i,
          r = [],
          n = this.getAlpha(),
          s = .5,
          o = this.getSource(),
          a = t.getSource();

      for (i = 0; 3 > i; i++) {
        r.push(Math.round(o[i] * (1 - s) + a[i] * s));
      }

      return r[3] = n, this.setSource(r), this;
    }
  }, r.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i, r.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/i, r.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, r.Color.colorNameMap = {
    aliceblue: "#F0F8FF",
    antiquewhite: "#FAEBD7",
    aqua: "#00FFFF",
    aquamarine: "#7FFFD4",
    azure: "#F0FFFF",
    beige: "#F5F5DC",
    bisque: "#FFE4C4",
    black: "#000000",
    blanchedalmond: "#FFEBCD",
    blue: "#0000FF",
    blueviolet: "#8A2BE2",
    brown: "#A52A2A",
    burlywood: "#DEB887",
    cadetblue: "#5F9EA0",
    chartreuse: "#7FFF00",
    chocolate: "#D2691E",
    coral: "#FF7F50",
    cornflowerblue: "#6495ED",
    cornsilk: "#FFF8DC",
    crimson: "#DC143C",
    cyan: "#00FFFF",
    darkblue: "#00008B",
    darkcyan: "#008B8B",
    darkgoldenrod: "#B8860B",
    darkgray: "#A9A9A9",
    darkgrey: "#A9A9A9",
    darkgreen: "#006400",
    darkkhaki: "#BDB76B",
    darkmagenta: "#8B008B",
    darkolivegreen: "#556B2F",
    darkorange: "#FF8C00",
    darkorchid: "#9932CC",
    darkred: "#8B0000",
    darksalmon: "#E9967A",
    darkseagreen: "#8FBC8F",
    darkslateblue: "#483D8B",
    darkslategray: "#2F4F4F",
    darkslategrey: "#2F4F4F",
    darkturquoise: "#00CED1",
    darkviolet: "#9400D3",
    deeppink: "#FF1493",
    deepskyblue: "#00BFFF",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1E90FF",
    firebrick: "#B22222",
    floralwhite: "#FFFAF0",
    forestgreen: "#228B22",
    fuchsia: "#FF00FF",
    gainsboro: "#DCDCDC",
    ghostwhite: "#F8F8FF",
    gold: "#FFD700",
    goldenrod: "#DAA520",
    gray: "#808080",
    grey: "#808080",
    green: "#008000",
    greenyellow: "#ADFF2F",
    honeydew: "#F0FFF0",
    hotpink: "#FF69B4",
    indianred: "#CD5C5C",
    indigo: "#4B0082",
    ivory: "#FFFFF0",
    khaki: "#F0E68C",
    lavender: "#E6E6FA",
    lavenderblush: "#FFF0F5",
    lawngreen: "#7CFC00",
    lemonchiffon: "#FFFACD",
    lightblue: "#ADD8E6",
    lightcoral: "#F08080",
    lightcyan: "#E0FFFF",
    lightgoldenrodyellow: "#FAFAD2",
    lightgray: "#D3D3D3",
    lightgrey: "#D3D3D3",
    lightgreen: "#90EE90",
    lightpink: "#FFB6C1",
    lightsalmon: "#FFA07A",
    lightseagreen: "#20B2AA",
    lightskyblue: "#87CEFA",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#B0C4DE",
    lightyellow: "#FFFFE0",
    lime: "#00FF00",
    limegreen: "#32CD32",
    linen: "#FAF0E6",
    magenta: "#FF00FF",
    maroon: "#800000",
    mediumaquamarine: "#66CDAA",
    mediumblue: "#0000CD",
    mediumorchid: "#BA55D3",
    mediumpurple: "#9370DB",
    mediumseagreen: "#3CB371",
    mediumslateblue: "#7B68EE",
    mediumspringgreen: "#00FA9A",
    mediumturquoise: "#48D1CC",
    mediumvioletred: "#C71585",
    midnightblue: "#191970",
    mintcream: "#F5FFFA",
    mistyrose: "#FFE4E1",
    moccasin: "#FFE4B5",
    navajowhite: "#FFDEAD",
    navy: "#000080",
    oldlace: "#FDF5E6",
    olive: "#808000",
    olivedrab: "#6B8E23",
    orange: "#FFA500",
    orangered: "#FF4500",
    orchid: "#DA70D6",
    palegoldenrod: "#EEE8AA",
    palegreen: "#98FB98",
    paleturquoise: "#AFEEEE",
    palevioletred: "#DB7093",
    papayawhip: "#FFEFD5",
    peachpuff: "#FFDAB9",
    peru: "#CD853F",
    pink: "#FFC0CB",
    plum: "#DDA0DD",
    powderblue: "#B0E0E6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#FF0000",
    rosybrown: "#BC8F8F",
    royalblue: "#4169E1",
    saddlebrown: "#8B4513",
    salmon: "#FA8072",
    sandybrown: "#F4A460",
    seagreen: "#2E8B57",
    seashell: "#FFF5EE",
    sienna: "#A0522D",
    silver: "#C0C0C0",
    skyblue: "#87CEEB",
    slateblue: "#6A5ACD",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#FFFAFA",
    springgreen: "#00FF7F",
    steelblue: "#4682B4",
    tan: "#D2B48C",
    teal: "#008080",
    thistle: "#D8BFD8",
    tomato: "#FF6347",
    turquoise: "#40E0D0",
    violet: "#EE82EE",
    wheat: "#F5DEB3",
    white: "#FFFFFF",
    whitesmoke: "#F5F5F5",
    yellow: "#FFFF00",
    yellowgreen: "#9ACD32"
  }, r.Color.fromRgb = function (t) {
    return e.fromSource(e.sourceFromRgb(t));
  }, r.Color.sourceFromRgb = function (t) {
    var i = t.match(e.reRGBa);

    if (i) {
      var r = parseInt(i[1], 10) / (/%$/.test(i[1]) ? 100 : 1) * (/%$/.test(i[1]) ? 255 : 1),
          n = parseInt(i[2], 10) / (/%$/.test(i[2]) ? 100 : 1) * (/%$/.test(i[2]) ? 255 : 1),
          s = parseInt(i[3], 10) / (/%$/.test(i[3]) ? 100 : 1) * (/%$/.test(i[3]) ? 255 : 1);
      return [parseInt(r, 10), parseInt(n, 10), parseInt(s, 10), i[4] ? parseFloat(i[4]) : 1];
    }
  }, r.Color.fromRgba = e.fromRgb, r.Color.fromHsl = function (t) {
    return e.fromSource(e.sourceFromHsl(t));
  }, r.Color.sourceFromHsl = function (t) {
    var r = t.match(e.reHSLa);

    if (r) {
      var n,
          s,
          o,
          a = (parseFloat(r[1]) % 360 + 360) % 360 / 360,
          c = parseFloat(r[2]) / (/%$/.test(r[2]) ? 100 : 1),
          l = parseFloat(r[3]) / (/%$/.test(r[3]) ? 100 : 1);
      if (0 === c) n = s = o = l;else {
        var h = .5 >= l ? l * (c + 1) : l + c - l * c,
            u = 2 * l - h;
        n = i(u, h, a + 1 / 3), s = i(u, h, a), o = i(u, h, a - 1 / 3);
      }
      return [Math.round(255 * n), Math.round(255 * s), Math.round(255 * o), r[4] ? parseFloat(r[4]) : 1];
    }
  }, r.Color.fromHsla = e.fromHsl, r.Color.fromHex = function (t) {
    return e.fromSource(e.sourceFromHex(t));
  }, r.Color.sourceFromHex = function (t) {
    if (t.match(e.reHex)) {
      var i = t.slice(t.indexOf("#") + 1),
          r = 3 === i.length || 4 === i.length,
          n = 8 === i.length || 4 === i.length,
          s = r ? i.charAt(0) + i.charAt(0) : i.substring(0, 2),
          o = r ? i.charAt(1) + i.charAt(1) : i.substring(2, 4),
          a = r ? i.charAt(2) + i.charAt(2) : i.substring(4, 6),
          c = n ? r ? i.charAt(3) + i.charAt(3) : i.substring(6, 8) : "FF";
      return [parseInt(s, 16), parseInt(o, 16), parseInt(a, 16), parseFloat((parseInt(c, 16) / 255).toFixed(2))];
    }
  }, void (r.Color.fromSource = function (t) {
    var i = new e();
    return i.setSource(t), i;
  }));
}( true ? exports : undefined);
!function () {
  function t(t) {
    var e,
        i,
        r,
        n,
        s = t.getAttribute("style"),
        o = t.getAttribute("offset") || 0;

    if (o = parseFloat(o) / (/%$/.test(o) ? 100 : 1), o = 0 > o ? 0 : o > 1 ? 1 : o, s) {
      var a = s.split(/\s*;\s*/);

      for ("" === a[a.length - 1] && a.pop(), n = a.length; n--;) {
        var c = a[n].split(/\s*:\s*/),
            l = c[0].trim(),
            h = c[1].trim();
        "stop-color" === l ? e = h : "stop-opacity" === l && (r = h);
      }
    }

    return e || (e = t.getAttribute("stop-color") || "rgb(0,0,0)"), r || (r = t.getAttribute("stop-opacity")), e = new fabric.Color(e), i = e.getAlpha(), r = isNaN(parseFloat(r)) ? 1 : parseFloat(r), r *= i, {
      offset: o,
      color: e.toRgb(),
      opacity: r
    };
  }

  function e(t) {
    return {
      x1: t.getAttribute("x1") || 0,
      y1: t.getAttribute("y1") || 0,
      x2: t.getAttribute("x2") || "100%",
      y2: t.getAttribute("y2") || 0
    };
  }

  function i(t) {
    return {
      x1: t.getAttribute("fx") || t.getAttribute("cx") || "50%",
      y1: t.getAttribute("fy") || t.getAttribute("cy") || "50%",
      r1: 0,
      x2: t.getAttribute("cx") || "50%",
      y2: t.getAttribute("cy") || "50%",
      r2: t.getAttribute("r") || "50%"
    };
  }

  function r(t, e, i) {
    var r,
        n = 0,
        s = 1,
        o = "";

    for (var a in e) {
      "Infinity" === e[a] ? e[a] = 1 : "-Infinity" === e[a] && (e[a] = 0), r = parseFloat(e[a], 10), s = "string" == typeof e[a] && /^(\d+\.\d+)%|(\d+)%$/.test(e[a]) ? .01 : 1, "x1" === a || "x2" === a || "r2" === a ? (s *= "objectBoundingBox" === i ? t.width : 1, n = "objectBoundingBox" === i ? t.left || 0 : 0) : ("y1" === a || "y2" === a) && (s *= "objectBoundingBox" === i ? t.height : 1, n = "objectBoundingBox" === i ? t.top || 0 : 0), e[a] = r * s + n;
    }

    if ("ellipse" === t.type && null !== e.r2 && "objectBoundingBox" === i && t.rx !== t.ry) {
      var c = t.ry / t.rx;
      o = " scale(1, " + c + ")", e.y1 && (e.y1 /= c), e.y2 && (e.y2 /= c);
    }

    return o;
  }

  var n = fabric.util.object.clone;
  fabric.Gradient = fabric.util.createClass({
    offsetX: 0,
    offsetY: 0,
    initialize: function initialize(t) {
      t || (t = {});
      var e = {};
      this.id = fabric.Object.__uid++, this.type = t.type || "linear", e = {
        x1: t.coords.x1 || 0,
        y1: t.coords.y1 || 0,
        x2: t.coords.x2 || 0,
        y2: t.coords.y2 || 0
      }, "radial" === this.type && (e.r1 = t.coords.r1 || 0, e.r2 = t.coords.r2 || 0), this.coords = e, this.colorStops = t.colorStops.slice(), t.gradientTransform && (this.gradientTransform = t.gradientTransform), this.offsetX = t.offsetX || this.offsetX, this.offsetY = t.offsetY || this.offsetY;
    },
    addColorStop: function addColorStop(t) {
      for (var e in t) {
        var i = new fabric.Color(t[e]);
        this.colorStops.push({
          offset: parseFloat(e),
          color: i.toRgb(),
          opacity: i.getAlpha()
        });
      }

      return this;
    },
    toObject: function toObject(t) {
      var e = {
        type: this.type,
        coords: this.coords,
        colorStops: this.colorStops,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
      };
      return fabric.util.populateWithProperties(this, e, t), e;
    },
    toSVG: function toSVG(t) {
      var e,
          i,
          r,
          s,
          o = n(this.coords, !0),
          a = n(this.colorStops, !0),
          c = o.r1 > o.r2,
          l = t.width / 2,
          h = t.height / 2;
      a.sort(function (t, e) {
        return t.offset - e.offset;
      }), "path" === t.type && (l -= t.pathOffset.x, h -= t.pathOffset.y);

      for (var u in o) {
        "x1" === u || "x2" === u ? o[u] += this.offsetX - l : ("y1" === u || "y2" === u) && (o[u] += this.offsetY - h);
      }

      if (s = 'id="SVGID_' + this.id + '" gradientUnits="userSpaceOnUse"', this.gradientTransform && (s += ' gradientTransform="matrix(' + this.gradientTransform.join(" ") + ')" '), "linear" === this.type ? r = ["<linearGradient ", s, ' x1="', o.x1, '" y1="', o.y1, '" x2="', o.x2, '" y2="', o.y2, '">\n'] : "radial" === this.type && (r = ["<radialGradient ", s, ' cx="', c ? o.x1 : o.x2, '" cy="', c ? o.y1 : o.y2, '" r="', c ? o.r1 : o.r2, '" fx="', c ? o.x2 : o.x1, '" fy="', c ? o.y2 : o.y1, '">\n']), "radial" === this.type) {
        if (c) for (a = a.concat(), a.reverse(), e = 0, i = a.length; i > e; e++) {
          a[e].offset = 1 - a[e].offset;
        }
        var f = Math.min(o.r1, o.r2);

        if (f > 0) {
          var d = Math.max(o.r1, o.r2),
              g = f / d;

          for (e = 0, i = a.length; i > e; e++) {
            a[e].offset += g * (1 - a[e].offset);
          }
        }
      }

      for (e = 0, i = a.length; i > e; e++) {
        var p = a[e];
        r.push("<stop ", 'offset="', 100 * p.offset + "%", '" style="stop-color:', p.color, "undefined" != typeof p.opacity ? ";stop-opacity: " + p.opacity : ";", '"/>\n');
      }

      return r.push("linear" === this.type ? "</linearGradient>\n" : "</radialGradient>\n"), r.join("");
    },
    toLive: function toLive(t) {
      var e,
          i,
          r,
          n = fabric.util.object.clone(this.coords);

      if (this.type) {
        for ("linear" === this.type ? e = t.createLinearGradient(n.x1, n.y1, n.x2, n.y2) : "radial" === this.type && (e = t.createRadialGradient(n.x1, n.y1, n.r1, n.x2, n.y2, n.r2)), i = 0, r = this.colorStops.length; r > i; i++) {
          var s = this.colorStops[i].color,
              o = this.colorStops[i].opacity,
              a = this.colorStops[i].offset;
          "undefined" != typeof o && (s = new fabric.Color(s).setAlpha(o).toRgba()), e.addColorStop(a, s);
        }

        return e;
      }
    }
  }), fabric.util.object.extend(fabric.Gradient, {
    fromElement: function fromElement(n, s) {
      var o,
          a,
          c,
          l,
          h = n.getElementsByTagName("stop"),
          u = n.getAttribute("gradientUnits") || "objectBoundingBox",
          f = n.getAttribute("gradientTransform"),
          d = [];

      for (o = "linearGradient" === n.nodeName || "LINEARGRADIENT" === n.nodeName ? "linear" : "radial", "linear" === o ? a = e(n) : "radial" === o && (a = i(n)), l = h.length; l--;) {
        d.push(t(h[l]));
      }

      c = r(s, a, u);
      var g = new fabric.Gradient({
        type: o,
        coords: a,
        colorStops: d,
        offsetX: -s.left,
        offsetY: -s.top
      });
      return (f || "" !== c) && (g.gradientTransform = fabric.parseTransformAttribute((f || "") + c)), g;
    },
    forObject: function forObject(t, e) {
      return e || (e = {}), r(t, e.coords, "userSpaceOnUse"), new fabric.Gradient(e);
    }
  });
}();
!function (t) {
  "use strict";

  var e = t.fabric || (t.fabric = {}),
      i = e.util.toFixed;
  return e.Shadow ? void e.warn("fabric.Shadow is already defined.") : (e.Shadow = e.util.createClass({
    color: "rgb(0,0,0)",
    blur: 0,
    offsetX: 0,
    offsetY: 0,
    affectStroke: !1,
    includeDefaultValues: !0,
    initialize: function initialize(t) {
      "string" == typeof t && (t = this._parseShadow(t));

      for (var i in t) {
        this[i] = t[i];
      }

      this.id = e.Object.__uid++;
    },
    _parseShadow: function _parseShadow(t) {
      var i = t.trim(),
          r = e.Shadow.reOffsetsAndBlur.exec(i) || [],
          n = i.replace(e.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)";
      return {
        color: n.trim(),
        offsetX: parseInt(r[1], 10) || 0,
        offsetY: parseInt(r[2], 10) || 0,
        blur: parseInt(r[3], 10) || 0
      };
    },
    toString: function toString() {
      return [this.offsetX, this.offsetY, this.blur, this.color].join("px ");
    },
    toSVG: function toSVG(t) {
      var r = 40,
          n = 40,
          s = e.Object.NUM_FRACTION_DIGITS,
          o = e.util.rotateVector({
        x: this.offsetX,
        y: this.offsetY
      }, e.util.degreesToRadians(-t.angle)),
          a = 20,
          c = new e.Color(this.color);
      return t.width && t.height && (r = 100 * i((Math.abs(o.x) + this.blur) / t.width, s) + a, n = 100 * i((Math.abs(o.y) + this.blur) / t.height, s) + a), t.flipX && (o.x *= -1), t.flipY && (o.y *= -1), '<filter id="SVGID_' + this.id + '" y="-' + n + '%" height="' + (100 + 2 * n) + '%" x="-' + r + '%" width="' + (100 + 2 * r) + '%" >\n	<feGaussianBlur in="SourceAlpha" stdDeviation="' + i(this.blur ? this.blur / 2 : 0, s) + '"></feGaussianBlur>\n	<feOffset dx="' + i(o.x, s) + '" dy="' + i(o.y, s) + '" result="oBlur" ></feOffset>\n	<feFlood flood-color="' + c.toRgb() + '" flood-opacity="' + c.getAlpha() + '"/>\n	<feComposite in2="oBlur" operator="in" />\n	<feMerge>\n		<feMergeNode></feMergeNode>\n		<feMergeNode in="SourceGraphic"></feMergeNode>\n	</feMerge>\n</filter>\n';
    },
    toObject: function toObject() {
      if (this.includeDefaultValues) return {
        color: this.color,
        blur: this.blur,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        affectStroke: this.affectStroke
      };
      var t = {},
          i = e.Shadow.prototype;
      return ["color", "blur", "offsetX", "offsetY", "affectStroke"].forEach(function (e) {
        this[e] !== i[e] && (t[e] = this[e]);
      }, this), t;
    }
  }), void (e.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/));
}( true ? exports : undefined);
!function () {
  "use strict";

  if (fabric.StaticCanvas) return void fabric.warn("fabric.StaticCanvas is already defined.");
  var t = fabric.util.object.extend,
      e = fabric.util.getElementOffset,
      i = fabric.util.removeFromArray,
      r = fabric.util.toFixed,
      n = fabric.util.transformPoint,
      s = fabric.util.invertTransform,
      o = fabric.util.getNodeCanvas,
      a = fabric.util.createCanvasElement,
      c = new Error("Could not initialize `canvas` element");
  fabric.StaticCanvas = fabric.util.createClass(fabric.CommonMethods, {
    initialize: function initialize(t, e) {
      e || (e = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(t, e);
    },
    backgroundColor: "",
    backgroundImage: null,
    overlayColor: "",
    overlayImage: null,
    includeDefaultValues: !0,
    stateful: !1,
    renderOnAddRemove: !0,
    clipTo: null,
    controlsAboveOverlay: !1,
    allowTouchScrolling: !1,
    imageSmoothingEnabled: !0,
    viewportTransform: fabric.iMatrix.concat(),
    backgroundVpt: !0,
    overlayVpt: !0,
    onBeforeScaleRotate: function onBeforeScaleRotate() {},
    enableRetinaScaling: !0,
    vptCoords: {},
    skipOffscreen: !0,
    clipPath: void 0,
    _initStatic: function _initStatic(t, e) {
      var i = this.requestRenderAllBound;
      this._objects = [], this._createLowerCanvas(t), this._initOptions(e), this._setImageSmoothing(), this.interactive || this._initRetinaScaling(), e.overlayImage && this.setOverlayImage(e.overlayImage, i), e.backgroundImage && this.setBackgroundImage(e.backgroundImage, i), e.backgroundColor && this.setBackgroundColor(e.backgroundColor, i), e.overlayColor && this.setOverlayColor(e.overlayColor, i), this.calcOffset();
    },
    _isRetinaScaling: function _isRetinaScaling() {
      return 1 !== fabric.devicePixelRatio && this.enableRetinaScaling;
    },
    getRetinaScaling: function getRetinaScaling() {
      return this._isRetinaScaling() ? fabric.devicePixelRatio : 1;
    },
    _initRetinaScaling: function _initRetinaScaling() {
      this._isRetinaScaling() && (this.lowerCanvasEl.setAttribute("width", this.width * fabric.devicePixelRatio), this.lowerCanvasEl.setAttribute("height", this.height * fabric.devicePixelRatio), this.contextContainer.scale(fabric.devicePixelRatio, fabric.devicePixelRatio));
    },
    calcOffset: function calcOffset() {
      return this._offset = e(this.lowerCanvasEl), this;
    },
    setOverlayImage: function setOverlayImage(t, e, i) {
      return this.__setBgOverlayImage("overlayImage", t, e, i);
    },
    setBackgroundImage: function setBackgroundImage(t, e, i) {
      return this.__setBgOverlayImage("backgroundImage", t, e, i);
    },
    setOverlayColor: function setOverlayColor(t, e) {
      return this.__setBgOverlayColor("overlayColor", t, e);
    },
    setBackgroundColor: function setBackgroundColor(t, e) {
      return this.__setBgOverlayColor("backgroundColor", t, e);
    },
    _setImageSmoothing: function _setImageSmoothing() {
      var t = this.getContext();
      t.imageSmoothingEnabled = t.imageSmoothingEnabled || t.webkitImageSmoothingEnabled || t.mozImageSmoothingEnabled || t.msImageSmoothingEnabled || t.oImageSmoothingEnabled, t.imageSmoothingEnabled = this.imageSmoothingEnabled;
    },
    __setBgOverlayImage: function __setBgOverlayImage(t, e, i, r) {
      return "string" == typeof e ? fabric.util.loadImage(e, function (e) {
        if (e) {
          var n = new fabric.Image(e, r);
          this[t] = n, n.canvas = this;
        }

        i && i(e);
      }, this, r && r.crossOrigin) : (r && e.setOptions(r), this[t] = e, e && (e.canvas = this), i && i(e)), this;
    },
    __setBgOverlayColor: function __setBgOverlayColor(t, e, i) {
      return this[t] = e, this._initGradient(e, t), this._initPattern(e, t, i), this;
    },
    _createCanvasElement: function _createCanvasElement() {
      var t = a();
      if (!t) throw c;
      if (t.style || (t.style = {}), "undefined" == typeof t.getContext) throw c;
      return t;
    },
    _initOptions: function _initOptions(t) {
      var e = this.lowerCanvasEl;
      this._setOptions(t), this.width = this.width || parseInt(e.width, 10) || 0, this.height = this.height || parseInt(e.height, 10) || 0, this.lowerCanvasEl.style && (e.width = this.width, e.height = this.height, e.style.width = this.width + "px", e.style.height = this.height + "px", this.viewportTransform = this.viewportTransform.slice());
    },
    _createLowerCanvas: function _createLowerCanvas(t) {
      this.lowerCanvasEl = t && t.getContext ? t : fabric.util.getById(t) || this._createCanvasElement(), fabric.util.addClass(this.lowerCanvasEl, "lower-canvas"), this.interactive && this._applyCanvasStyle(this.lowerCanvasEl), this.contextContainer = this.lowerCanvasEl.getContext("2d");
    },
    getWidth: function getWidth() {
      return this.width;
    },
    getHeight: function getHeight() {
      return this.height;
    },
    setWidth: function setWidth(t, e) {
      return this.setDimensions({
        width: t
      }, e);
    },
    setHeight: function setHeight(t, e) {
      return this.setDimensions({
        height: t
      }, e);
    },
    setDimensions: function setDimensions(t, e) {
      var i;
      e = e || {};

      for (var r in t) {
        i = t[r], e.cssOnly || (this._setBackstoreDimension(r, t[r]), i += "px", this.hasLostContext = !0), e.backstoreOnly || this._setCssDimension(r, i);
      }

      return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(), this._initRetinaScaling(), this._setImageSmoothing(), this.calcOffset(), e.cssOnly || this.requestRenderAll(), this;
    },
    _setBackstoreDimension: function _setBackstoreDimension(t, e) {
      return this.lowerCanvasEl[t] = e, this.upperCanvasEl && (this.upperCanvasEl[t] = e), this.cacheCanvasEl && (this.cacheCanvasEl[t] = e), this[t] = e, this;
    },
    _setCssDimension: function _setCssDimension(t, e) {
      return this.lowerCanvasEl.style[t] = e, this.upperCanvasEl && (this.upperCanvasEl.style[t] = e), this.wrapperEl && (this.wrapperEl.style[t] = e), this;
    },
    getZoom: function getZoom() {
      return this.viewportTransform[0];
    },
    setViewportTransform: function setViewportTransform(t) {
      var e,
          i,
          r,
          n = this._activeObject,
          s = !1,
          o = !0;

      for (this.viewportTransform = t, i = 0, r = this._objects.length; r > i; i++) {
        e = this._objects[i], e.group || e.setCoords(s, o);
      }

      return n && "activeSelection" === n.type && n.setCoords(s, o), this.calcViewportBoundaries(), this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    zoomToPoint: function zoomToPoint(t, e) {
      var i = t,
          r = this.viewportTransform.slice(0);
      t = n(t, s(this.viewportTransform)), r[0] = e, r[3] = e;
      var o = n(t, r);
      return r[4] += i.x - o.x, r[5] += i.y - o.y, this.setViewportTransform(r);
    },
    setZoom: function setZoom(t) {
      return this.zoomToPoint(new fabric.Point(0, 0), t), this;
    },
    absolutePan: function absolutePan(t) {
      var e = this.viewportTransform.slice(0);
      return e[4] = -t.x, e[5] = -t.y, this.setViewportTransform(e);
    },
    relativePan: function relativePan(t) {
      return this.absolutePan(new fabric.Point(-t.x - this.viewportTransform[4], -t.y - this.viewportTransform[5]));
    },
    getElement: function getElement() {
      return this.lowerCanvasEl;
    },
    _onObjectAdded: function _onObjectAdded(t) {
      this.stateful && t.setupState(), t._set("canvas", this), t.setCoords(), this.fire("object:added", {
        target: t
      }), t.fire("added");
    },
    _onObjectRemoved: function _onObjectRemoved(t) {
      this.fire("object:removed", {
        target: t
      }), t.fire("removed"), delete t.canvas;
    },
    clearContext: function clearContext(t) {
      return t.clearRect(0, 0, this.width, this.height), this;
    },
    getContext: function getContext() {
      return this.contextContainer;
    },
    clear: function clear() {
      return this._objects.length = 0, this.backgroundImage = null, this.overlayImage = null, this.backgroundColor = "", this.overlayColor = "", this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler), this._iTextInstances = null, this._hasITextHandlers = !1), this.clearContext(this.contextContainer), this.fire("canvas:cleared"), this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    renderAll: function renderAll() {
      var t = this.contextContainer;
      return this.renderCanvas(t, this._objects), this;
    },
    renderAndReset: function renderAndReset() {
      this.isRendering = 0, this.renderAll();
    },
    requestRenderAll: function requestRenderAll() {
      return this.isRendering || (this.isRendering = fabric.util.requestAnimFrame(this.renderAndResetBound)), this;
    },
    calcViewportBoundaries: function calcViewportBoundaries() {
      var t = {},
          e = this.width,
          i = this.height,
          r = s(this.viewportTransform);
      return t.tl = n({
        x: 0,
        y: 0
      }, r), t.br = n({
        x: e,
        y: i
      }, r), t.tr = new fabric.Point(t.br.x, t.tl.y), t.bl = new fabric.Point(t.tl.x, t.br.y), this.vptCoords = t, t;
    },
    cancelRequestedRender: function cancelRequestedRender() {
      this.isRendering && (fabric.util.cancelAnimFrame(this.isRendering), this.isRendering = 0);
    },
    renderCanvas: function renderCanvas(t, e) {
      var i = this.viewportTransform,
          r = this.clipPath;
      this.cancelRequestedRender(), this.calcViewportBoundaries(), this.clearContext(t), this.fire("before:render", {
        ctx: t
      }), this.clipTo && fabric.util.clipContext(this, t), this._renderBackground(t), t.save(), t.transform(i[0], i[1], i[2], i[3], i[4], i[5]), this._renderObjects(t, e), t.restore(), !this.controlsAboveOverlay && this.interactive && this.drawControls(t), this.clipTo && t.restore(), r && (r.canvas = this, r.shouldCache(), r._transformDone = !0, r.renderCache({
        forClipping: !0
      }), this.drawClipPathOnCanvas(t)), this._renderOverlay(t), this.controlsAboveOverlay && this.interactive && this.drawControls(t), this.fire("after:render", {
        ctx: t
      });
    },
    drawClipPathOnCanvas: function drawClipPathOnCanvas(t) {
      var e = this.viewportTransform,
          i = this.clipPath;
      t.save(), t.transform(e[0], e[1], e[2], e[3], e[4], e[5]), t.globalCompositeOperation = "destination-in", i.transform(t), t.scale(1 / i.zoomX, 1 / i.zoomY), t.drawImage(i._cacheCanvas, -i.cacheTranslationX, -i.cacheTranslationY), t.restore();
    },
    _renderObjects: function _renderObjects(t, e) {
      var i, r;

      for (i = 0, r = e.length; r > i; ++i) {
        e[i] && e[i].render(t);
      }
    },
    _renderBackgroundOrOverlay: function _renderBackgroundOrOverlay(t, e) {
      var i,
          r = this[e + "Color"];
      r && (t.fillStyle = r.toLive ? r.toLive(t, this) : r, t.fillRect(r.offsetX || 0, r.offsetY || 0, this.width, this.height)), r = this[e + "Image"], r && (this[e + "Vpt"] && (i = this.viewportTransform, t.save(), t.transform(i[0], i[1], i[2], i[3], i[4], i[5])), r.render(t), this[e + "Vpt"] && t.restore());
    },
    _renderBackground: function _renderBackground(t) {
      this._renderBackgroundOrOverlay(t, "background");
    },
    _renderOverlay: function _renderOverlay(t) {
      this._renderBackgroundOrOverlay(t, "overlay");
    },
    getCenter: function getCenter() {
      return {
        top: this.height / 2,
        left: this.width / 2
      };
    },
    centerObjectH: function centerObjectH(t) {
      return this._centerObject(t, new fabric.Point(this.getCenter().left, t.getCenterPoint().y));
    },
    centerObjectV: function centerObjectV(t) {
      return this._centerObject(t, new fabric.Point(t.getCenterPoint().x, this.getCenter().top));
    },
    centerObject: function centerObject(t) {
      var e = this.getCenter();
      return this._centerObject(t, new fabric.Point(e.left, e.top));
    },
    viewportCenterObject: function viewportCenterObject(t) {
      var e = this.getVpCenter();
      return this._centerObject(t, e);
    },
    viewportCenterObjectH: function viewportCenterObjectH(t) {
      var e = this.getVpCenter();
      return this._centerObject(t, new fabric.Point(e.x, t.getCenterPoint().y)), this;
    },
    viewportCenterObjectV: function viewportCenterObjectV(t) {
      var e = this.getVpCenter();
      return this._centerObject(t, new fabric.Point(t.getCenterPoint().x, e.y));
    },
    getVpCenter: function getVpCenter() {
      var t = this.getCenter(),
          e = s(this.viewportTransform);
      return n({
        x: t.left,
        y: t.top
      }, e);
    },
    _centerObject: function _centerObject(t, e) {
      return t.setPositionByOrigin(e, "center", "center"), t.setCoords(), this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    toDatalessJSON: function toDatalessJSON(t) {
      return this.toDatalessObject(t);
    },
    toObject: function toObject(t) {
      return this._toObjectMethod("toObject", t);
    },
    toDatalessObject: function toDatalessObject(t) {
      return this._toObjectMethod("toDatalessObject", t);
    },
    _toObjectMethod: function _toObjectMethod(e, i) {
      var r = this.clipPath,
          n = {
        version: fabric.version,
        objects: this._toObjects(e, i)
      };
      return r && (r = r.toObject(i)), t(n, this.__serializeBgOverlay(e, i)), fabric.util.populateWithProperties(this, n, i), n;
    },
    _toObjects: function _toObjects(t, e) {
      return this._objects.filter(function (t) {
        return !t.excludeFromExport;
      }).map(function (i) {
        return this._toObject(i, t, e);
      }, this);
    },
    _toObject: function _toObject(t, e, i) {
      var r;
      this.includeDefaultValues || (r = t.includeDefaultValues, t.includeDefaultValues = !1);
      var n = t[e](i);
      return this.includeDefaultValues || (t.includeDefaultValues = r), n;
    },
    __serializeBgOverlay: function __serializeBgOverlay(t, e) {
      var i = {},
          r = this.backgroundImage,
          n = this.overlayImage;
      return this.backgroundColor && (i.background = this.backgroundColor.toObject ? this.backgroundColor.toObject(e) : this.backgroundColor), this.overlayColor && (i.overlay = this.overlayColor.toObject ? this.overlayColor.toObject(e) : this.overlayColor), r && !r.excludeFromExport && (i.backgroundImage = this._toObject(r, t, e)), n && !n.excludeFromExport && (i.overlayImage = this._toObject(n, t, e)), i;
    },
    svgViewportTransformation: !0,
    toSVG: function toSVG(t, e) {
      t || (t = {}), t.reviver = e;
      var i = [];
      return this._setSVGPreamble(i, t), this._setSVGHeader(i, t), this.clipPath && i.push('<g clip-path="url(#' + this.clipPath.clipPathId + ')" >\n'), this._setSVGBgOverlayColor(i, "backgroundColor"), this._setSVGBgOverlayImage(i, "backgroundImage", e), this._setSVGObjects(i, e), this.clipPath && i.push("</g>\n"), this._setSVGBgOverlayColor(i, "overlayColor"), this._setSVGBgOverlayImage(i, "overlayImage", e), i.push("</svg>"), i.join("");
    },
    _setSVGPreamble: function _setSVGPreamble(t, e) {
      e.suppressPreamble || t.push('<?xml version="1.0" encoding="', e.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n');
    },
    _setSVGHeader: function _setSVGHeader(t, e) {
      var i,
          n = e.width || this.width,
          s = e.height || this.height,
          o = 'viewBox="0 0 ' + this.width + " " + this.height + '" ',
          a = fabric.Object.NUM_FRACTION_DIGITS;
      e.viewBox ? o = 'viewBox="' + e.viewBox.x + " " + e.viewBox.y + " " + e.viewBox.width + " " + e.viewBox.height + '" ' : this.svgViewportTransformation && (i = this.viewportTransform, o = 'viewBox="' + r(-i[4] / i[0], a) + " " + r(-i[5] / i[3], a) + " " + r(this.width / i[0], a) + " " + r(this.height / i[3], a) + '" '), t.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', n, '" ', 'height="', s, '" ', o, 'xml:space="preserve">\n', "<desc>Created with Fabric.js ", fabric.version, "</desc>\n", "<defs>\n", this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), this.createSVGClipPathMarkup(e), "</defs>\n");
    },
    createSVGClipPathMarkup: function createSVGClipPathMarkup(t) {
      var e = this.clipPath;
      return e ? (e.clipPathId = "CLIPPATH_" + fabric.Object.__uid++, '<clipPath id="' + e.clipPathId + '" >\n' + this.clipPath.toClipPathSVG(t.reviver) + "</clipPath>\n") : "";
    },
    createSVGRefElementsMarkup: function createSVGRefElementsMarkup() {
      var t = this,
          e = ["backgroundColor", "overlayColor"].map(function (e) {
        var i = t[e];
        return i && i.toLive ? i.toSVG(t, !1) : void 0;
      });
      return e.join("");
    },
    createSVGFontFacesMarkup: function createSVGFontFacesMarkup() {
      var t,
          e,
          i,
          r,
          n,
          s,
          o,
          a,
          c,
          l = "",
          h = {},
          u = fabric.fontPaths,
          f = this._objects;

      for (a = 0, c = f.length; c > a; a++) {
        if (t = f[a], e = t.fontFamily, -1 !== t.type.indexOf("text") && !h[e] && u[e] && (h[e] = !0, t.styles)) {
          i = t.styles;

          for (n in i) {
            r = i[n];

            for (o in r) {
              s = r[o], e = s.fontFamily, !h[e] && u[e] && (h[e] = !0);
            }
          }
        }
      }

      for (var d in h) {
        l += ["		@font-face {\n", "			font-family: '", d, "';\n", "			src: url('", u[d], "');\n", "		}\n"].join("");
      }

      return l && (l = ['	<style type="text/css">', "<![CDATA[\n", l, "]]>", "</style>\n"].join("")), l;
    },
    _setSVGObjects: function _setSVGObjects(t, e) {
      var i,
          r,
          n,
          s = this._objects;

      for (r = 0, n = s.length; n > r; r++) {
        i = s[r], i.excludeFromExport || this._setSVGObject(t, i, e);
      }
    },
    _setSVGObject: function _setSVGObject(t, e, i) {
      t.push(e.toSVG(i));
    },
    _setSVGBgOverlayImage: function _setSVGBgOverlayImage(t, e, i) {
      this[e] && !this[e].excludeFromExport && this[e].toSVG && t.push(this[e].toSVG(i));
    },
    _setSVGBgOverlayColor: function _setSVGBgOverlayColor(t, e) {
      var i = this[e],
          r = this.viewportTransform,
          n = this.width / r[0],
          s = this.height / r[3];
      if (i) if (i.toLive) {
        var o = i.repeat;
        t.push('<rect transform="translate(', n / 2, ",", s / 2, ')"', ' x="', i.offsetX - n / 2, '" y="', i.offsetY - s / 2, '" ', 'width="', "repeat-y" === o || "no-repeat" === o ? i.source.width : n, '" height="', "repeat-x" === o || "no-repeat" === o ? i.source.height : s, '" fill="url(#SVGID_' + i.id + ')"', "></rect>\n");
      } else t.push('<rect x="0" y="0" width="100%" height="100%" ', 'fill="', this[e], '"', "></rect>\n");
    },
    sendToBack: function sendToBack(t) {
      if (!t) return this;
      var e,
          r,
          n,
          s = this._activeObject;
      if (t === s && "activeSelection" === t.type) for (n = s._objects, e = n.length; e--;) {
        r = n[e], i(this._objects, r), this._objects.unshift(r);
      } else i(this._objects, t), this._objects.unshift(t);
      return this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    bringToFront: function bringToFront(t) {
      if (!t) return this;
      var e,
          r,
          n,
          s = this._activeObject;
      if (t === s && "activeSelection" === t.type) for (n = s._objects, e = 0; e < n.length; e++) {
        r = n[e], i(this._objects, r), this._objects.push(r);
      } else i(this._objects, t), this._objects.push(t);
      return this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    sendBackwards: function sendBackwards(t, e) {
      if (!t) return this;
      var r,
          n,
          s,
          o,
          a,
          c = this._activeObject,
          l = 0;
      if (t === c && "activeSelection" === t.type) for (a = c._objects, r = 0; r < a.length; r++) {
        n = a[r], s = this._objects.indexOf(n), s > 0 + l && (o = s - 1, i(this._objects, n), this._objects.splice(o, 0, n)), l++;
      } else s = this._objects.indexOf(t), 0 !== s && (o = this._findNewLowerIndex(t, s, e), i(this._objects, t), this._objects.splice(o, 0, t));
      return this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    _findNewLowerIndex: function _findNewLowerIndex(t, e, i) {
      var r, n;
      if (i) for (r = e, n = e - 1; n >= 0; --n) {
        var s = t.intersectsWithObject(this._objects[n]) || t.isContainedWithinObject(this._objects[n]) || this._objects[n].isContainedWithinObject(t);

        if (s) {
          r = n;
          break;
        }
      } else r = e - 1;
      return r;
    },
    bringForward: function bringForward(t, e) {
      if (!t) return this;
      var r,
          n,
          s,
          o,
          a,
          c = this._activeObject,
          l = 0;
      if (t === c && "activeSelection" === t.type) for (a = c._objects, r = a.length; r--;) {
        n = a[r], s = this._objects.indexOf(n), s < this._objects.length - 1 - l && (o = s + 1, i(this._objects, n), this._objects.splice(o, 0, n)), l++;
      } else s = this._objects.indexOf(t), s !== this._objects.length - 1 && (o = this._findNewUpperIndex(t, s, e), i(this._objects, t), this._objects.splice(o, 0, t));
      return this.renderOnAddRemove && this.requestRenderAll(), this;
    },
    _findNewUpperIndex: function _findNewUpperIndex(t, e, i) {
      var r, n, s;
      if (i) for (r = e, n = e + 1, s = this._objects.length; s > n; ++n) {
        var o = t.intersectsWithObject(this._objects[n]) || t.isContainedWithinObject(this._objects[n]) || this._objects[n].isContainedWithinObject(t);

        if (o) {
          r = n;
          break;
        }
      } else r = e + 1;
      return r;
    },
    moveTo: function moveTo(t, e) {
      return i(this._objects, t), this._objects.splice(e, 0, t), this.renderOnAddRemove && this.requestRenderAll();
    },
    dispose: function dispose() {
      return this.isRendering && (fabric.util.cancelAnimFrame(this.isRendering), this.isRendering = 0), this.forEachObject(function (t) {
        t.dispose && t.dispose();
      }), this._objects = [], this.backgroundImage && this.backgroundImage.dispose && this.backgroundImage.dispose(), this.backgroundImage = null, this.overlayImage && this.overlayImage.dispose && this.overlayImage.dispose(), this.overlayImage = null, this._iTextInstances = null, this.contextContainer = null, fabric.util.cleanUpJsdomNode(this.lowerCanvasEl), this.lowerCanvasEl = void 0, this;
    },
    toString: function toString() {
      return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this._objects.length + " }>";
    }
  }), t(fabric.StaticCanvas.prototype, fabric.Observable), t(fabric.StaticCanvas.prototype, fabric.Collection), t(fabric.StaticCanvas.prototype, fabric.DataURLExporter), t(fabric.StaticCanvas, {
    EMPTY_JSON: '{"objects": [], "background": "white"}',
    supports: function supports(t) {
      var e = a();
      if (!e || !e.getContext) return null;
      var i = e.getContext("2d");
      if (!i) return null;

      switch (t) {
        case "getImageData":
          return "undefined" != typeof i.getImageData;

        case "setLineDash":
          return "undefined" != typeof i.setLineDash;

        case "toDataURL":
          return "undefined" != typeof e.toDataURL;

        case "toDataURLWithQuality":
          try {
            return e.toDataURL("image/jpeg", 0), !0;
          } catch (r) {}

          return !1;

        default:
          return null;
      }
    }
  }), fabric.StaticCanvas.prototype.toJSON = fabric.StaticCanvas.prototype.toObject, fabric.isLikelyNode && (fabric.StaticCanvas.prototype.createPNGStream = function () {
    var t = o(this.lowerCanvasEl);
    return t && t.createPNGStream();
  }, fabric.StaticCanvas.prototype.createJPEGStream = function (t) {
    var e = o(this.lowerCanvasEl);
    return e && e.createJPEGStream(t);
  });
}();
fabric.BaseBrush = fabric.util.createClass({
  color: "rgb(0, 0, 0)",
  width: 1,
  shadow: null,
  strokeLineCap: "round",
  strokeLineJoin: "round",
  strokeMiterLimit: 10,
  strokeDashArray: null,
  setShadow: function setShadow(t) {
    return this.shadow = new fabric.Shadow(t), this;
  },
  _setBrushStyles: function _setBrushStyles() {
    var t = this.canvas.contextTop;
    t.strokeStyle = this.color, t.lineWidth = this.width, t.lineCap = this.strokeLineCap, t.miterLimit = this.strokeMiterLimit, t.lineJoin = this.strokeLineJoin, fabric.StaticCanvas.supports("setLineDash") && t.setLineDash(this.strokeDashArray || []);
  },
  _saveAndTransform: function _saveAndTransform(t) {
    var e = this.canvas.viewportTransform;
    t.save(), t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
  },
  _setShadow: function _setShadow() {
    if (this.shadow) {
      var t = this.canvas.contextTop,
          e = this.canvas.getZoom();
      t.shadowColor = this.shadow.color, t.shadowBlur = this.shadow.blur * e, t.shadowOffsetX = this.shadow.offsetX * e, t.shadowOffsetY = this.shadow.offsetY * e;
    }
  },
  _resetShadow: function _resetShadow() {
    var t = this.canvas.contextTop;
    t.shadowColor = "", t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0;
  }
});
!function () {
  fabric.PencilBrush = fabric.util.createClass(fabric.BaseBrush, {
    initialize: function initialize(t) {
      this.canvas = t, this._points = [];
    },
    _drawSegment: function _drawSegment(t, e, i) {
      var r = e.midPointFrom(i);
      return t.quadraticCurveTo(e.x, e.y, r.x, r.y), r;
    },
    onMouseDown: function onMouseDown(t) {
      this._prepareForDrawing(t), this._captureDrawingPath(t), this._render();
    },
    onMouseMove: function onMouseMove(t) {
      if (this._captureDrawingPath(t) && this._points.length > 1) if (this.needsFullRender) this.canvas.clearContext(this.canvas.contextTop), this._render();else {
        var e = this._points,
            i = e.length,
            r = this.canvas.contextTop;
        this._saveAndTransform(r), this.oldEnd && (r.beginPath(), r.moveTo(this.oldEnd.x, this.oldEnd.y)), this.oldEnd = this._drawSegment(r, e[i - 2], e[i - 1], !0), r.stroke(), r.restore();
      }
    },
    onMouseUp: function onMouseUp() {
      this.oldEnd = void 0, this._finalizeAndAddPath();
    },
    _prepareForDrawing: function _prepareForDrawing(t) {
      var e = new fabric.Point(t.x, t.y);
      this._reset(), this._addPoint(e), this.canvas.contextTop.moveTo(e.x, e.y);
    },
    _addPoint: function _addPoint(t) {
      return this._points.length > 1 && t.eq(this._points[this._points.length - 1]) ? !1 : (this._points.push(t), !0);
    },
    _reset: function _reset() {
      this._points.length = 0, this._setBrushStyles();
      var t = new fabric.Color(this.color);
      this.needsFullRender = t.getAlpha() < 1, this._setShadow();
    },
    _captureDrawingPath: function _captureDrawingPath(t) {
      var e = new fabric.Point(t.x, t.y);
      return this._addPoint(e);
    },
    _render: function _render() {
      var t,
          e,
          i = this.canvas.contextTop,
          r = this._points[0],
          n = this._points[1];

      if (this._saveAndTransform(i), i.beginPath(), 2 === this._points.length && r.x === n.x && r.y === n.y) {
        var s = this.width / 1e3;
        r = new fabric.Point(r.x, r.y), n = new fabric.Point(n.x, n.y), r.x -= s, n.x += s;
      }

      for (i.moveTo(r.x, r.y), t = 1, e = this._points.length; e > t; t++) {
        this._drawSegment(i, r, n), r = this._points[t], n = this._points[t + 1];
      }

      i.lineTo(r.x, r.y), i.stroke(), i.restore();
    },
    convertPointsToSVGPath: function convertPointsToSVGPath(t) {
      var e,
          i = [],
          r = this.width / 1e3,
          n = new fabric.Point(t[0].x, t[0].y),
          s = new fabric.Point(t[1].x, t[1].y),
          o = t.length,
          a = 1,
          c = 1,
          h = o > 2;

      for (h && (a = t[2].x < s.x ? -1 : t[2].x === s.x ? 0 : 1, c = t[2].y < s.y ? -1 : t[2].y === s.y ? 0 : 1), i.push("M ", n.x - a * r, " ", n.y - c * r, " "), e = 1; o > e; e++) {
        if (!n.eq(s)) {
          var l = n.midPointFrom(s);
          i.push("Q ", n.x, " ", n.y, " ", l.x, " ", l.y, " ");
        }

        n = t[e], e + 1 < t.length && (s = t[e + 1]);
      }

      return h && (a = n.x > t[e - 2].x ? 1 : n.x === t[e - 2].x ? 0 : -1, c = n.y > t[e - 2].y ? 1 : n.y === t[e - 2].y ? 0 : -1), i.push("L ", n.x + a * r, " ", n.y + c * r), i;
    },
    createPath: function createPath(t) {
      var e = new fabric.Path(t, {
        fill: null,
        stroke: this.color,
        strokeWidth: this.width,
        strokeLineCap: this.strokeLineCap,
        strokeMiterLimit: this.strokeMiterLimit,
        strokeLineJoin: this.strokeLineJoin,
        strokeDashArray: this.strokeDashArray
      }),
          i = new fabric.Point(e.left + e.width / 2, e.top + e.height / 2);
      return i = e.translateToGivenOrigin(i, "center", "center", e.originX, e.originY), e.top = i.y, e.left = i.x, this.shadow && (this.shadow.affectStroke = !0, e.setShadow(this.shadow)), e;
    },
    _finalizeAndAddPath: function _finalizeAndAddPath() {
      var t = this.canvas.contextTop;
      t.closePath();
      var e = this.convertPointsToSVGPath(this._points).join("");
      if ("M 0 0 Q 0 0 0 0 L 0 0" === e) return void this.canvas.requestRenderAll();
      var i = this.createPath(e);
      this.canvas.clearContext(this.canvas.contextTop), this.canvas.add(i), this.canvas.renderAll(), i.setCoords(), this._resetShadow(), this.canvas.fire("path:created", {
        path: i
      });
    }
  });
}();
fabric.CircleBrush = fabric.util.createClass(fabric.BaseBrush, {
  width: 10,
  initialize: function initialize(t) {
    this.canvas = t, this.points = [];
  },
  drawDot: function drawDot(t) {
    var e = this.addPoint(t),
        i = this.canvas.contextTop;
    this._saveAndTransform(i), i.fillStyle = e.fill, i.beginPath(), i.arc(e.x, e.y, e.radius, 0, 2 * Math.PI, !1), i.closePath(), i.fill(), i.restore();
  },
  onMouseDown: function onMouseDown(t) {
    this.points.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.drawDot(t);
  },
  _render: function _render() {
    var t,
        e,
        i,
        r = this.canvas.contextTop,
        n = this.points;

    for (this._saveAndTransform(r), t = 0, e = n.length; e > t; t++) {
      i = n[t], r.fillStyle = i.fill, r.beginPath(), r.arc(i.x, i.y, i.radius, 0, 2 * Math.PI, !1), r.closePath(), r.fill();
    }

    r.restore();
  },
  onMouseMove: function onMouseMove(t) {
    this.drawDot(t);
  },
  onMouseUp: function onMouseUp() {
    var t,
        e,
        i = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = !1;
    var r = [];

    for (t = 0, e = this.points.length; e > t; t++) {
      var n = this.points[t],
          s = new fabric.Circle({
        radius: n.radius,
        left: n.x,
        top: n.y,
        originX: "center",
        originY: "center",
        fill: n.fill
      });
      this.shadow && s.setShadow(this.shadow), r.push(s);
    }

    var o = new fabric.Group(r);
    o.canvas = this.canvas, this.canvas.add(o), this.canvas.fire("path:created", {
      path: o
    }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = i, this.canvas.requestRenderAll();
  },
  addPoint: function addPoint(t) {
    var e = new fabric.Point(t.x, t.y),
        i = fabric.util.getRandomInt(Math.max(0, this.width - 20), this.width + 20) / 2,
        r = new fabric.Color(this.color).setAlpha(fabric.util.getRandomInt(0, 100) / 100).toRgba();
    return e.radius = i, e.fill = r, this.points.push(e), e;
  }
});
fabric.SprayBrush = fabric.util.createClass(fabric.BaseBrush, {
  width: 10,
  density: 20,
  dotWidth: 1,
  dotWidthVariance: 1,
  randomOpacity: !1,
  optimizeOverlapping: !0,
  initialize: function initialize(t) {
    this.canvas = t, this.sprayChunks = [];
  },
  onMouseDown: function onMouseDown(t) {
    this.sprayChunks.length = 0, this.canvas.clearContext(this.canvas.contextTop), this._setShadow(), this.addSprayChunk(t), this.render(this.sprayChunkPoints);
  },
  onMouseMove: function onMouseMove(t) {
    this.addSprayChunk(t), this.render(this.sprayChunkPoints);
  },
  onMouseUp: function onMouseUp() {
    var t = this.canvas.renderOnAddRemove;
    this.canvas.renderOnAddRemove = !1;

    for (var e = [], i = 0, r = this.sprayChunks.length; r > i; i++) {
      for (var n = this.sprayChunks[i], s = 0, o = n.length; o > s; s++) {
        var a = new fabric.Rect({
          width: n[s].width,
          height: n[s].width,
          left: n[s].x + 1,
          top: n[s].y + 1,
          originX: "center",
          originY: "center",
          fill: this.color
        });
        e.push(a);
      }
    }

    this.optimizeOverlapping && (e = this._getOptimizedRects(e));
    var c = new fabric.Group(e);
    this.shadow && c.setShadow(this.shadow), this.canvas.add(c), this.canvas.fire("path:created", {
      path: c
    }), this.canvas.clearContext(this.canvas.contextTop), this._resetShadow(), this.canvas.renderOnAddRemove = t, this.canvas.requestRenderAll();
  },
  _getOptimizedRects: function _getOptimizedRects(t) {
    var e,
        i,
        r,
        n = {};

    for (i = 0, r = t.length; r > i; i++) {
      e = t[i].left + "" + t[i].top, n[e] || (n[e] = t[i]);
    }

    var s = [];

    for (e in n) {
      s.push(n[e]);
    }

    return s;
  },
  render: function render(t) {
    var e,
        i,
        r = this.canvas.contextTop;

    for (r.fillStyle = this.color, this._saveAndTransform(r), e = 0, i = t.length; i > e; e++) {
      var n = t[e];
      "undefined" != typeof n.opacity && (r.globalAlpha = n.opacity), r.fillRect(n.x, n.y, n.width, n.width);
    }

    r.restore();
  },
  _render: function _render() {
    var t,
        e,
        i = this.canvas.contextTop;

    for (i.fillStyle = this.color, this._saveAndTransform(i), t = 0, e = this.sprayChunks.length; e > t; t++) {
      this.render(this.sprayChunks[t]);
    }

    i.restore();
  },
  addSprayChunk: function addSprayChunk(t) {
    this.sprayChunkPoints = [];
    var e,
        i,
        r,
        n,
        s = this.width / 2;

    for (n = 0; n < this.density; n++) {
      e = fabric.util.getRandomInt(t.x - s, t.x + s), i = fabric.util.getRandomInt(t.y - s, t.y + s), r = this.dotWidthVariance ? fabric.util.getRandomInt(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth;
      var o = new fabric.Point(e, i);
      o.width = r, this.randomOpacity && (o.opacity = fabric.util.getRandomInt(0, 100) / 100), this.sprayChunkPoints.push(o);
    }

    this.sprayChunks.push(this.sprayChunkPoints);
  }
});
fabric.PatternBrush = fabric.util.createClass(fabric.PencilBrush, {
  getPatternSrc: function getPatternSrc() {
    var t = 20,
        e = 5,
        i = fabric.util.createCanvasElement(),
        r = i.getContext("2d");
    return i.width = i.height = t + e, r.fillStyle = this.color, r.beginPath(), r.arc(t / 2, t / 2, t / 2, 0, 2 * Math.PI, !1), r.closePath(), r.fill(), i;
  },
  getPatternSrcFunction: function getPatternSrcFunction() {
    return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"');
  },
  getPattern: function getPattern() {
    return this.canvas.contextTop.createPattern(this.source || this.getPatternSrc(), "repeat");
  },
  _setBrushStyles: function _setBrushStyles() {
    this.callSuper("_setBrushStyles"), this.canvas.contextTop.strokeStyle = this.getPattern();
  },
  createPath: function createPath(t) {
    var e = this.callSuper("createPath", t),
        i = e._getLeftTopCoords().scalarAdd(e.strokeWidth / 2);

    return e.stroke = new fabric.Pattern({
      source: this.source || this.getPatternSrcFunction(),
      offsetX: -i.x,
      offsetY: -i.y
    }), e;
  }
});
!function () {
  var t = fabric.util.getPointer,
      e = fabric.util.degreesToRadians,
      i = fabric.util.radiansToDegrees,
      r = Math.atan2,
      n = Math.abs,
      s = fabric.StaticCanvas.supports("setLineDash"),
      o = .5;
  fabric.Canvas = fabric.util.createClass(fabric.StaticCanvas, {
    initialize: function initialize(t, e) {
      e || (e = {}), this.renderAndResetBound = this.renderAndReset.bind(this), this.requestRenderAllBound = this.requestRenderAll.bind(this), this._initStatic(t, e), this._initInteractive(), this._createCacheCanvas();
    },
    uniScaleTransform: !1,
    uniScaleKey: "shiftKey",
    centeredScaling: !1,
    centeredRotation: !1,
    centeredKey: "altKey",
    altActionKey: "shiftKey",
    interactive: !0,
    selection: !0,
    selectionKey: "shiftKey",
    altSelectionKey: null,
    selectionColor: "rgba(100, 100, 255, 0.3)",
    selectionDashArray: [],
    selectionBorderColor: "rgba(255, 255, 255, 0.3)",
    selectionLineWidth: 1,
    selectionFullyContained: !1,
    hoverCursor: "move",
    moveCursor: "move",
    defaultCursor: "default",
    freeDrawingCursor: "crosshair",
    rotationCursor: "crosshair",
    notAllowedCursor: "not-allowed",
    containerClass: "canvas-container",
    perPixelTargetFind: !1,
    targetFindTolerance: 0,
    skipTargetFind: !1,
    isDrawingMode: !1,
    preserveObjectStacking: !1,
    snapAngle: 0,
    snapThreshold: null,
    stopContextMenu: !1,
    fireRightClick: !1,
    fireMiddleClick: !1,
    _initInteractive: function _initInteractive() {
      this._currentTransform = null, this._groupSelector = null, this._initWrapperElement(), this._createUpperCanvas(), this._initEventListeners(), this._initRetinaScaling(), this.freeDrawingBrush = fabric.PencilBrush && new fabric.PencilBrush(this), this.calcOffset();
    },
    _chooseObjectsToRender: function _chooseObjectsToRender() {
      var t,
          e,
          i,
          r = this.getActiveObjects();

      if (r.length > 0 && !this.preserveObjectStacking) {
        e = [], i = [];

        for (var n = 0, s = this._objects.length; s > n; n++) {
          t = this._objects[n], -1 === r.indexOf(t) ? e.push(t) : i.push(t);
        }

        r.length > 1 && (this._activeObject._objects = i), e.push.apply(e, i);
      } else e = this._objects;

      return e;
    },
    renderAll: function renderAll() {
      !this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop), this.contextTopDirty = !1), this.hasLostContext && this.renderTopLayer(this.contextTop);
      var t = this.contextContainer;
      return this.renderCanvas(t, this._chooseObjectsToRender()), this;
    },
    renderTopLayer: function renderTopLayer(t) {
      t.save(), this.isDrawingMode && this._isCurrentlyDrawing && (this.freeDrawingBrush && this.freeDrawingBrush._render(), this.contextTopDirty = !0), this.selection && this._groupSelector && (this._drawSelection(t), this.contextTopDirty = !0), t.restore();
    },
    renderTop: function renderTop() {
      var t = this.contextTop;
      return this.clearContext(t), this.renderTopLayer(t), this.fire("after:render"), this;
    },
    _resetCurrentTransform: function _resetCurrentTransform() {
      var t = this._currentTransform;
      t.target.set({
        scaleX: t.original.scaleX,
        scaleY: t.original.scaleY,
        skewX: t.original.skewX,
        skewY: t.original.skewY,
        left: t.original.left,
        top: t.original.top
      }), this._shouldCenterTransform(t.target) ? ("center" !== t.originX && (t.mouseXSign = "right" === t.originX ? -1 : 1), "center" !== t.originY && (t.mouseYSign = "bottom" === t.originY ? -1 : 1), t.originX = "center", t.originY = "center") : (t.originX = t.original.originX, t.originY = t.original.originY);
    },
    containsPoint: function containsPoint(t, e, i) {
      var r,
          n = !0,
          s = i || this.getPointer(t, n);
      return r = e.group && e.group === this._activeObject && "activeSelection" === e.group.type ? this._normalizePointer(e.group, s) : {
        x: s.x,
        y: s.y
      }, e.containsPoint(r) || e._findTargetCorner(s);
    },
    _normalizePointer: function _normalizePointer(t, e) {
      var i = t.calcTransformMatrix(),
          r = fabric.util.invertTransform(i),
          n = this.restorePointerVpt(e);
      return fabric.util.transformPoint(n, r);
    },
    isTargetTransparent: function isTargetTransparent(t, e, i) {
      if (t.shouldCache() && t._cacheCanvas) {
        var r = this._normalizePointer(t, {
          x: e,
          y: i
        }),
            n = t.cacheTranslationX + r.x * t.zoomX,
            s = t.cacheTranslationY + r.y * t.zoomY,
            o = fabric.util.isTransparent(t._cacheContext, n, s, this.targetFindTolerance);

        return o;
      }

      var a = this.contextCache,
          c = t.selectionBackgroundColor,
          l = this.viewportTransform;
      t.selectionBackgroundColor = "", this.clearContext(a), a.save(), a.transform(l[0], l[1], l[2], l[3], l[4], l[5]), t.render(a), a.restore(), t === this._activeObject && t._renderControls(a, {
        hasBorders: !1,
        transparentCorners: !1
      }, {
        hasBorders: !1
      }), t.selectionBackgroundColor = c;
      var o = fabric.util.isTransparent(a, e, i, this.targetFindTolerance);
      return o;
    },
    _isSelectionKeyPressed: function _isSelectionKeyPressed(t) {
      var e = !1;
      return e = "[object Array]" === Object.prototype.toString.call(this.selectionKey) ? !!this.selectionKey.find(function (e) {
        return t[e] === !0;
      }) : t[this.selectionKey];
    },
    _shouldClearSelection: function _shouldClearSelection(t, e) {
      var i = this.getActiveObjects(),
          r = this._activeObject;
      return !e || e && r && i.length > 1 && -1 === i.indexOf(e) && r !== e && !this._isSelectionKeyPressed(t) || e && !e.evented || e && !e.selectable && r && r !== e;
    },
    _shouldCenterTransform: function _shouldCenterTransform(t) {
      if (t) {
        var e,
            i = this._currentTransform;
        return "scale" === i.action || "scaleX" === i.action || "scaleY" === i.action ? e = this.centeredScaling || t.centeredScaling : "rotate" === i.action && (e = this.centeredRotation || t.centeredRotation), e ? !i.altKey : i.altKey;
      }
    },
    _getOriginFromCorner: function _getOriginFromCorner(t, e) {
      var i = {
        x: t.originX,
        y: t.originY
      };
      return "ml" === e || "tl" === e || "bl" === e ? i.x = "right" : ("mr" === e || "tr" === e || "br" === e) && (i.x = "left"), "tl" === e || "mt" === e || "tr" === e ? i.y = "bottom" : ("bl" === e || "mb" === e || "br" === e) && (i.y = "top"), i;
    },
    _getActionFromCorner: function _getActionFromCorner(t, e, i) {
      if (!e || !t) return "drag";

      switch (e) {
        case "mtr":
          return "rotate";

        case "ml":
        case "mr":
          return i[this.altActionKey] ? "skewY" : "scaleX";

        case "mt":
        case "mb":
          return i[this.altActionKey] ? "skewX" : "scaleY";

        default:
          return "scale";
      }
    },
    _setupCurrentTransform: function _setupCurrentTransform(t, i, r) {
      if (i) {
        var n = this.getPointer(t),
            s = i._findTargetCorner(this.getPointer(t, !0)),
            o = this._getActionFromCorner(r, s, t),
            a = this._getOriginFromCorner(i, s);

        this._currentTransform = {
          target: i,
          action: o,
          corner: s,
          scaleX: i.scaleX,
          scaleY: i.scaleY,
          skewX: i.skewX,
          skewY: i.skewY,
          offsetX: n.x - i.left,
          offsetY: n.y - i.top,
          originX: a.x,
          originY: a.y,
          ex: n.x,
          ey: n.y,
          lastX: n.x,
          lastY: n.y,
          theta: e(i.angle),
          width: i.width * i.scaleX,
          mouseXSign: 1,
          mouseYSign: 1,
          shiftKey: t.shiftKey,
          altKey: t[this.centeredKey],
          original: fabric.util.saveObjectTransform(i)
        }, this._currentTransform.original.originX = a.x, this._currentTransform.original.originY = a.y, this._resetCurrentTransform(), this._beforeTransform(t);
      }
    },
    _translateObject: function _translateObject(t, e) {
      var i = this._currentTransform,
          r = i.target,
          n = t - i.offsetX,
          s = e - i.offsetY,
          o = !r.get("lockMovementX") && r.left !== n,
          a = !r.get("lockMovementY") && r.top !== s;
      return o && r.set("left", n), a && r.set("top", s), o || a;
    },
    _changeSkewTransformOrigin: function _changeSkewTransformOrigin(t, e, i) {
      var r = "originX",
          n = {
        0: "center"
      },
          s = e.target.skewX,
          o = "left",
          a = "right",
          c = "mt" === e.corner || "ml" === e.corner ? 1 : -1,
          l = 1;
      t = t > 0 ? 1 : -1, "y" === i && (s = e.target.skewY, o = "top", a = "bottom", r = "originY"), n[-1] = o, n[1] = a, e.target.flipX && (l *= -1), e.target.flipY && (l *= -1), 0 === s ? (e.skewSign = -c * t * l, e[r] = n[-t]) : (s = s > 0 ? 1 : -1, e.skewSign = s, e[r] = n[s * c * l]);
    },
    _skewObject: function _skewObject(t, e, i) {
      var r = this._currentTransform,
          n = r.target,
          s = !1,
          o = n.get("lockSkewingX"),
          a = n.get("lockSkewingY");
      if (o && "x" === i || a && "y" === i) return !1;

      var c,
          l,
          h = n.getCenterPoint(),
          u = n.toLocalPoint(new fabric.Point(t, e), "center", "center")[i],
          f = n.toLocalPoint(new fabric.Point(r.lastX, r.lastY), "center", "center")[i],
          d = n._getTransformedDimensions();

      return this._changeSkewTransformOrigin(u - f, r, i), c = n.toLocalPoint(new fabric.Point(t, e), r.originX, r.originY)[i], l = n.translateToOriginPoint(h, r.originX, r.originY), s = this._setObjectSkew(c, r, i, d), r.lastX = t, r.lastY = e, n.setPositionByOrigin(l, r.originX, r.originY), s;
    },
    _setObjectSkew: function _setObjectSkew(t, e, i, r) {
      var n,
          s,
          o,
          a,
          c,
          l,
          h,
          u,
          f,
          d = e.target,
          g = !1,
          p = e.skewSign;
      return "x" === i ? (a = "y", c = "Y", l = "X", u = 0, f = d.skewY) : (a = "x", c = "X", l = "Y", u = d.skewX, f = 0), o = d._getTransformedDimensions(u, f), h = 2 * Math.abs(t) - o[i], 2 >= h ? n = 0 : (n = p * Math.atan(h / d["scale" + l] / (o[a] / d["scale" + c])), n = fabric.util.radiansToDegrees(n)), g = d["skew" + l] !== n, d.set("skew" + l, n), 0 !== d["skew" + c] && (s = d._getTransformedDimensions(), n = r[a] / s[a] * d["scale" + c], d.set("scale" + c, n)), g;
    },
    _scaleObject: function _scaleObject(t, e, i) {
      var r = this._currentTransform,
          n = r.target,
          s = n.lockScalingX,
          o = n.lockScalingY,
          a = n.lockScalingFlip;
      if (s && o) return !1;

      var c = n.translateToOriginPoint(n.getCenterPoint(), r.originX, r.originY),
          l = n.toLocalPoint(new fabric.Point(t, e), r.originX, r.originY),
          h = n._getTransformedDimensions(),
          u = !1;

      return this._setLocalMouse(l, r), u = this._setObjectScale(l, r, s, o, i, a, h), n.setPositionByOrigin(c, r.originX, r.originY), u;
    },
    _setObjectScale: function _setObjectScale(t, e, i, r, n, s, o) {
      var a,
          c,
          l,
          h,
          u = e.target,
          f = !1,
          d = !1,
          g = !1;
      return l = t.x * u.scaleX / o.x, h = t.y * u.scaleY / o.y, a = u.scaleX !== l, c = u.scaleY !== h, s && 0 >= l && l < u.scaleX && (f = !0, t.x = 0), s && 0 >= h && h < u.scaleY && (d = !0, t.y = 0), "equally" !== n || i || r ? n ? "x" !== n || u.get("lockUniScaling") ? "y" !== n || u.get("lockUniScaling") || d || r || u.set("scaleY", h) && (g = g || c) : f || i || u.set("scaleX", l) && (g = g || a) : (f || i || u.set("scaleX", l) && (g = g || a), d || r || u.set("scaleY", h) && (g = g || c)) : g = this._scaleObjectEqually(t, u, e, o), e.newScaleX = l, e.newScaleY = h, f || d || this._flipObject(e, n), g;
    },
    _scaleObjectEqually: function _scaleObjectEqually(t, e, i, r) {
      var n,
          s = t.y + t.x,
          o = r.y * i.original.scaleY / e.scaleY + r.x * i.original.scaleX / e.scaleX,
          a = t.x < 0 ? -1 : 1,
          c = t.y < 0 ? -1 : 1;
      return i.newScaleX = a * Math.abs(i.original.scaleX * s / o), i.newScaleY = c * Math.abs(i.original.scaleY * s / o), n = i.newScaleX !== e.scaleX || i.newScaleY !== e.scaleY, e.set("scaleX", i.newScaleX), e.set("scaleY", i.newScaleY), n;
    },
    _flipObject: function _flipObject(t, e) {
      t.newScaleX < 0 && "y" !== e && ("left" === t.originX ? t.originX = "right" : "right" === t.originX && (t.originX = "left")), t.newScaleY < 0 && "x" !== e && ("top" === t.originY ? t.originY = "bottom" : "bottom" === t.originY && (t.originY = "top"));
    },
    _setLocalMouse: function _setLocalMouse(t, e) {
      var i = e.target,
          r = this.getZoom(),
          s = i.padding / r;
      "right" === e.originX ? t.x *= -1 : "center" === e.originX && (t.x *= 2 * e.mouseXSign, t.x < 0 && (e.mouseXSign = -e.mouseXSign)), "bottom" === e.originY ? t.y *= -1 : "center" === e.originY && (t.y *= 2 * e.mouseYSign, t.y < 0 && (e.mouseYSign = -e.mouseYSign)), n(t.x) > s ? t.x < 0 ? t.x += s : t.x -= s : t.x = 0, n(t.y) > s ? t.y < 0 ? t.y += s : t.y -= s : t.y = 0;
    },
    _rotateObject: function _rotateObject(t, e) {
      var n,
          s = this._currentTransform,
          o = s.target,
          n = o.translateToOriginPoint(o.getCenterPoint(), s.originX, s.originY);
      if (o.lockRotation) return !1;
      var a = r(s.ey - n.y, s.ex - n.x),
          c = r(e - n.y, t - n.x),
          l = i(c - a + s.theta),
          h = !0;

      if (o.snapAngle > 0) {
        var u = o.snapAngle,
            f = o.snapThreshold || u,
            d = Math.ceil(l / u) * u,
            g = Math.floor(l / u) * u;
        Math.abs(l - g) < f ? l = g : Math.abs(l - d) < f && (l = d);
      }

      return 0 > l && (l = 360 + l), l %= 360, o.angle === l ? h = !1 : (o.angle = l, o.setPositionByOrigin(n, s.originX, s.originY)), h;
    },
    setCursor: function setCursor(t) {
      this.upperCanvasEl.style.cursor = t;
    },
    _drawSelection: function _drawSelection(t) {
      var e = this._groupSelector,
          i = e.left,
          r = e.top,
          a = n(i),
          c = n(r);
      if (this.selectionColor && (t.fillStyle = this.selectionColor, t.fillRect(e.ex - (i > 0 ? 0 : -i), e.ey - (r > 0 ? 0 : -r), a, c)), this.selectionLineWidth && this.selectionBorderColor) if (t.lineWidth = this.selectionLineWidth, t.strokeStyle = this.selectionBorderColor, this.selectionDashArray.length > 1 && !s) {
        var l = e.ex + o - (i > 0 ? 0 : a),
            h = e.ey + o - (r > 0 ? 0 : c);
        t.beginPath(), fabric.util.drawDashedLine(t, l, h, l + a, h, this.selectionDashArray), fabric.util.drawDashedLine(t, l, h + c - 1, l + a, h + c - 1, this.selectionDashArray), fabric.util.drawDashedLine(t, l, h, l, h + c, this.selectionDashArray), fabric.util.drawDashedLine(t, l + a - 1, h, l + a - 1, h + c, this.selectionDashArray), t.closePath(), t.stroke();
      } else fabric.Object.prototype._setLineDash.call(this, t, this.selectionDashArray), t.strokeRect(e.ex + o - (i > 0 ? 0 : a), e.ey + o - (r > 0 ? 0 : c), a, c);
    },
    findTarget: function findTarget(t, e) {
      if (!this.skipTargetFind) {
        var i,
            r,
            n = !0,
            s = this.getPointer(t, n),
            o = this._activeObject,
            a = this.getActiveObjects();
        if (this.targets = [], a.length > 1 && !e && o === this._searchPossibleTargets([o], s)) return o;
        if (1 === a.length && o._findTargetCorner(s)) return o;

        if (1 === a.length && o === this._searchPossibleTargets([o], s)) {
          if (!this.preserveObjectStacking) return o;
          i = o, r = this.targets, this.targets = [];
        }

        var c = this._searchPossibleTargets(this._objects, s);

        return t[this.altSelectionKey] && c && i && c !== i && (c = i, this.targets = r), c;
      }
    },
    _checkTarget: function _checkTarget(t, e, i) {
      if (e && e.visible && e.evented && this.containsPoint(null, e, t)) {
        if (!this.perPixelTargetFind && !e.perPixelTargetFind || e.isEditing) return !0;
        var r = this.isTargetTransparent(e, i.x, i.y);
        if (!r) return !0;
      }
    },
    _searchPossibleTargets: function _searchPossibleTargets(t, e) {
      for (var i, r, n = t.length; n--;) {
        var s = t[n],
            o = s.group && "activeSelection" !== s.group.type ? this._normalizePointer(s.group, e) : e;

        if (this._checkTarget(o, s, e)) {
          i = t[n], i.subTargetCheck && i instanceof fabric.Group && (r = this._searchPossibleTargets(i._objects, e), r && this.targets.push(r));
          break;
        }
      }

      return i;
    },
    restorePointerVpt: function restorePointerVpt(t) {
      return fabric.util.transformPoint(t, fabric.util.invertTransform(this.viewportTransform));
    },
    getPointer: function getPointer(e, i) {
      if (this._absolutePointer && !i) return this._absolutePointer;
      if (this._pointer && i) return this._pointer;
      var r,
          n = t(e),
          s = this.upperCanvasEl,
          o = s.getBoundingClientRect(),
          a = o.width || 0,
          c = o.height || 0;
      return a && c || ("top" in o && "bottom" in o && (c = Math.abs(o.top - o.bottom)), "right" in o && "left" in o && (a = Math.abs(o.right - o.left))), this.calcOffset(), n.x = n.x - this._offset.left, n.y = n.y - this._offset.top, i || (n = this.restorePointerVpt(n)), r = 0 === a || 0 === c ? {
        width: 1,
        height: 1
      } : {
        width: s.width / a,
        height: s.height / c
      }, {
        x: n.x * r.width,
        y: n.y * r.height
      };
    },
    _createUpperCanvas: function _createUpperCanvas() {
      var t = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, "");
      this.upperCanvasEl ? this.upperCanvasEl.className = "" : this.upperCanvasEl = this._createCanvasElement(), fabric.util.addClass(this.upperCanvasEl, "upper-canvas " + t), this.wrapperEl.appendChild(this.upperCanvasEl), this._copyCanvasStyle(this.lowerCanvasEl, this.upperCanvasEl), this._applyCanvasStyle(this.upperCanvasEl), this.contextTop = this.upperCanvasEl.getContext("2d");
    },
    _createCacheCanvas: function _createCacheCanvas() {
      this.cacheCanvasEl = this._createCanvasElement(), this.cacheCanvasEl.setAttribute("width", this.width), this.cacheCanvasEl.setAttribute("height", this.height), this.contextCache = this.cacheCanvasEl.getContext("2d");
    },
    _initWrapperElement: function _initWrapperElement() {
      this.wrapperEl = fabric.util.wrapElement(this.lowerCanvasEl, "div", {
        "class": this.containerClass
      }), fabric.util.setStyle(this.wrapperEl, {
        width: this.width + "px",
        height: this.height + "px",
        position: "relative"
      }), fabric.util.makeElementUnselectable(this.wrapperEl);
    },
    _applyCanvasStyle: function _applyCanvasStyle(t) {
      var e = this.width || t.width,
          i = this.height || t.height;
      fabric.util.setStyle(t, {
        position: "absolute",
        width: e + "px",
        height: i + "px",
        left: 0,
        top: 0,
        "touch-action": this.allowTouchScrolling ? "manipulation" : "none"
      }), t.width = e, t.height = i, fabric.util.makeElementUnselectable(t);
    },
    _copyCanvasStyle: function _copyCanvasStyle(t, e) {
      e.style.cssText = t.style.cssText;
    },
    getSelectionContext: function getSelectionContext() {
      return this.contextTop;
    },
    getSelectionElement: function getSelectionElement() {
      return this.upperCanvasEl;
    },
    getActiveObject: function getActiveObject() {
      return this._activeObject;
    },
    getActiveObjects: function getActiveObjects() {
      var t = this._activeObject;
      return t ? "activeSelection" === t.type && t._objects ? t._objects.slice(0) : [t] : [];
    },
    _onObjectRemoved: function _onObjectRemoved(t) {
      t === this._activeObject && (this.fire("before:selection:cleared", {
        target: t
      }), this._discardActiveObject(), this.fire("selection:cleared", {
        target: t
      }), t.fire("deselected")), this._hoveredTarget === t && (this._hoveredTarget = null), this.callSuper("_onObjectRemoved", t);
    },
    _fireSelectionEvents: function _fireSelectionEvents(t, e) {
      var i = !1,
          r = this.getActiveObjects(),
          n = [],
          s = [],
          o = {
        e: e
      };
      t.forEach(function (t) {
        -1 === r.indexOf(t) && (i = !0, t.fire("deselected", o), s.push(t));
      }), r.forEach(function (e) {
        -1 === t.indexOf(e) && (i = !0, e.fire("selected", o), n.push(e));
      }), t.length > 0 && r.length > 0 ? (o.selected = n, o.deselected = s, o.updated = n[0] || s[0], o.target = this._activeObject, i && this.fire("selection:updated", o)) : r.length > 0 ? (1 === r.length && (o.target = n[0], this.fire("object:selected", o)), o.selected = n, o.target = this._activeObject, this.fire("selection:created", o)) : t.length > 0 && (o.deselected = s, this.fire("selection:cleared", o));
    },
    setActiveObject: function setActiveObject(t, e) {
      var i = this.getActiveObjects();
      return this._setActiveObject(t, e), this._fireSelectionEvents(i, e), this;
    },
    _setActiveObject: function _setActiveObject(t, e) {
      return this._activeObject === t ? !1 : this._discardActiveObject(e, t) ? t.onSelect({
        e: e
      }) ? !1 : (this._activeObject = t, !0) : !1;
    },
    _discardActiveObject: function _discardActiveObject(t, e) {
      var i = this._activeObject;

      if (i) {
        if (i.onDeselect({
          e: t,
          object: e
        })) return !1;
        this._activeObject = null;
      }

      return !0;
    },
    discardActiveObject: function discardActiveObject(t) {
      var e = this.getActiveObjects();
      return e.length && this.fire("before:selection:cleared", {
        target: e[0],
        e: t
      }), this._discardActiveObject(t), this._fireSelectionEvents(e, t), this;
    },
    dispose: function dispose() {
      var t = this.wrapperEl;
      return this.removeListeners(), t.removeChild(this.upperCanvasEl), t.removeChild(this.lowerCanvasEl), this.contextCache = null, this.contextTop = null, ["upperCanvasEl", "cacheCanvasEl"].forEach(function (t) {
        fabric.util.cleanUpJsdomNode(this[t]), this[t] = void 0;
      }.bind(this)), t.parentNode && t.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl), delete this.wrapperEl, fabric.StaticCanvas.prototype.dispose.call(this), this;
    },
    clear: function clear() {
      return this.discardActiveObject(), this.clearContext(this.contextTop), this.callSuper("clear");
    },
    drawControls: function drawControls(t) {
      var e = this._activeObject;
      e && e._renderControls(t);
    },
    _toObject: function _toObject(t, e, i) {
      var r = this._realizeGroupTransformOnObject(t),
          n = this.callSuper("_toObject", t, e, i);

      return this._unwindGroupTransformOnObject(t, r), n;
    },
    _realizeGroupTransformOnObject: function _realizeGroupTransformOnObject(t) {
      if (t.group && "activeSelection" === t.group.type && this._activeObject === t.group) {
        var e = ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"],
            i = {};
        return e.forEach(function (e) {
          i[e] = t[e];
        }), this._activeObject.realizeTransform(t), i;
      }

      return null;
    },
    _unwindGroupTransformOnObject: function _unwindGroupTransformOnObject(t, e) {
      e && t.set(e);
    },
    _setSVGObject: function _setSVGObject(t, e, i) {
      var r = this._realizeGroupTransformOnObject(e);

      this.callSuper("_setSVGObject", t, e, i), this._unwindGroupTransformOnObject(e, r);
    },
    setViewportTransform: function setViewportTransform(t) {
      this.renderOnAddRemove && this._activeObject && this._activeObject.isEditing && this._activeObject.clearContextTop(), fabric.StaticCanvas.prototype.setViewportTransform.call(this, t);
    }
  });

  for (var a in fabric.StaticCanvas) {
    "prototype" !== a && (fabric.Canvas[a] = fabric.StaticCanvas[a]);
  }

  fabric.isTouchSupported && (fabric.Canvas.prototype._setCursorFromEvent = function () {});
}();
!function () {
  function t(t, e) {
    return "which" in t ? t.which === e : t.button === e - 1;
  }

  var e = {
    mt: 0,
    tr: 1,
    mr: 2,
    br: 3,
    mb: 4,
    bl: 5,
    ml: 6,
    tl: 7
  },
      i = fabric.util.addListener,
      r = fabric.util.removeListener,
      n = 3,
      s = 2,
      o = 1,
      a = {
    passive: !1
  };
  fabric.util.object.extend(fabric.Canvas.prototype, {
    cursorMap: ["n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize"],
    _initEventListeners: function _initEventListeners() {
      this.removeListeners(), this._bindEvents(), this.addOrRemove(i, "add");
    },
    addOrRemove: function addOrRemove(t, e) {
      t(fabric.window, "resize", this._onResize), t(this.upperCanvasEl, "mousedown", this._onMouseDown), t(this.upperCanvasEl, "mousemove", this._onMouseMove, a), t(this.upperCanvasEl, "mouseout", this._onMouseOut), t(this.upperCanvasEl, "mouseenter", this._onMouseEnter), t(this.upperCanvasEl, "wheel", this._onMouseWheel), t(this.upperCanvasEl, "contextmenu", this._onContextMenu), t(this.upperCanvasEl, "dblclick", this._onDoubleClick), t(this.upperCanvasEl, "touchstart", this._onMouseDown, a), t(this.upperCanvasEl, "touchmove", this._onMouseMove, a), t(this.upperCanvasEl, "dragover", this._onDragOver), t(this.upperCanvasEl, "dragenter", this._onDragEnter), t(this.upperCanvasEl, "dragleave", this._onDragLeave), t(this.upperCanvasEl, "drop", this._onDrop), "undefined" != typeof eventjs && e in eventjs && (eventjs[e](this.upperCanvasEl, "gesture", this._onGesture), eventjs[e](this.upperCanvasEl, "drag", this._onDrag), eventjs[e](this.upperCanvasEl, "orientation", this._onOrientationChange), eventjs[e](this.upperCanvasEl, "shake", this._onShake), eventjs[e](this.upperCanvasEl, "longpress", this._onLongPress));
    },
    removeListeners: function removeListeners() {
      this.addOrRemove(r, "remove"), r(fabric.document, "mouseup", this._onMouseUp), r(fabric.document, "touchend", this._onMouseUp, a), r(fabric.document, "mousemove", this._onMouseMove, a), r(fabric.document, "touchmove", this._onMouseMove, a);
    },
    _bindEvents: function _bindEvents() {
      this.eventsBound || (this._onMouseDown = this._onMouseDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this._onMouseUp = this._onMouseUp.bind(this), this._onResize = this._onResize.bind(this), this._onGesture = this._onGesture.bind(this), this._onDrag = this._onDrag.bind(this), this._onShake = this._onShake.bind(this), this._onLongPress = this._onLongPress.bind(this), this._onOrientationChange = this._onOrientationChange.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this._onMouseOut = this._onMouseOut.bind(this), this._onMouseEnter = this._onMouseEnter.bind(this), this._onContextMenu = this._onContextMenu.bind(this), this._onDoubleClick = this._onDoubleClick.bind(this), this._onDragOver = this._onDragOver.bind(this), this._onDragEnter = this._simpleEventHandler.bind(this, "dragenter"), this._onDragLeave = this._simpleEventHandler.bind(this, "dragleave"), this._onDrop = this._simpleEventHandler.bind(this, "drop"), this.eventsBound = !0);
    },
    _onGesture: function _onGesture(t, e) {
      this.__onTransformGesture && this.__onTransformGesture(t, e);
    },
    _onDrag: function _onDrag(t, e) {
      this.__onDrag && this.__onDrag(t, e);
    },
    _onMouseWheel: function _onMouseWheel(t) {
      this.__onMouseWheel(t);
    },
    _onMouseOut: function _onMouseOut(t) {
      var e = this._hoveredTarget;
      this.fire("mouse:out", {
        target: e,
        e: t
      }), this._hoveredTarget = null, e && e.fire("mouseout", {
        e: t
      }), this._iTextInstances && this._iTextInstances.forEach(function (t) {
        t.isEditing && t.hiddenTextarea.focus();
      });
    },
    _onMouseEnter: function _onMouseEnter(t) {
      this.findTarget(t) || (this.fire("mouse:over", {
        target: null,
        e: t
      }), this._hoveredTarget = null);
    },
    _onOrientationChange: function _onOrientationChange(t, e) {
      this.__onOrientationChange && this.__onOrientationChange(t, e);
    },
    _onShake: function _onShake(t, e) {
      this.__onShake && this.__onShake(t, e);
    },
    _onLongPress: function _onLongPress(t, e) {
      this.__onLongPress && this.__onLongPress(t, e);
    },
    _onDragOver: function _onDragOver(t) {
      t.preventDefault();

      var e = this._simpleEventHandler("dragover", t);

      this._fireEnterLeaveEvents(e, t);
    },
    _onContextMenu: function _onContextMenu(t) {
      return this.stopContextMenu && (t.stopPropagation(), t.preventDefault()), !1;
    },
    _onDoubleClick: function _onDoubleClick(t) {
      this._cacheTransformEventData(t), this._handleEvent(t, "dblclick"), this._resetTransformEventData(t);
    },
    _onMouseDown: function _onMouseDown(t) {
      this.__onMouseDown(t), this._resetTransformEventData(), i(fabric.document, "touchend", this._onMouseUp, a), i(fabric.document, "touchmove", this._onMouseMove, a), r(this.upperCanvasEl, "mousemove", this._onMouseMove, a), r(this.upperCanvasEl, "touchmove", this._onMouseMove, a), "touchstart" === t.type ? r(this.upperCanvasEl, "mousedown", this._onMouseDown) : (i(fabric.document, "mouseup", this._onMouseUp), i(fabric.document, "mousemove", this._onMouseMove, a));
    },
    _onMouseUp: function _onMouseUp(t) {
      if (this.__onMouseUp(t), this._resetTransformEventData(), r(fabric.document, "mouseup", this._onMouseUp), r(fabric.document, "touchend", this._onMouseUp, a), r(fabric.document, "mousemove", this._onMouseMove, a), r(fabric.document, "touchmove", this._onMouseMove, a), i(this.upperCanvasEl, "mousemove", this._onMouseMove, a), i(this.upperCanvasEl, "touchmove", this._onMouseMove, a), "touchend" === t.type) {
        var e = this;
        setTimeout(function () {
          i(e.upperCanvasEl, "mousedown", e._onMouseDown);
        }, 400);
      }
    },
    _onMouseMove: function _onMouseMove(t) {
      !this.allowTouchScrolling && t.preventDefault && t.preventDefault(), this.__onMouseMove(t);
    },
    _onResize: function _onResize() {
      this.calcOffset();
    },
    _shouldRender: function _shouldRender(t) {
      var e = this._activeObject;
      return !!e != !!t || e && t && e !== t ? !0 : e && e.isEditing ? !1 : !1;
    },
    __onMouseUp: function __onMouseUp(e) {
      var i,
          r = this._currentTransform,
          a = this._groupSelector,
          c = !1,
          h = !a || 0 === a.left && 0 === a.top;
      return this._cacheTransformEventData(e), i = this._target, this._handleEvent(e, "up:before"), t(e, n) ? void (this.fireRightClick && this._handleEvent(e, "up", n, h)) : t(e, s) ? (this.fireMiddleClick && this._handleEvent(e, "up", s, h), void this._resetTransformEventData()) : this.isDrawingMode && this._isCurrentlyDrawing ? void this._onMouseUpInDrawingMode(e) : (r && (this._finalizeCurrentTransform(e), c = r.actionPerformed), h || (this._maybeGroupObjects(e), c || (c = this._shouldRender(i))), i && (i.isMoving = !1), this._setCursorFromEvent(e, i), this._handleEvent(e, "up", o, h), this._groupSelector = null, this._currentTransform = null, i && (i.__corner = 0), void (c ? this.requestRenderAll() : h || this.renderTop()));
    },
    _simpleEventHandler: function _simpleEventHandler(t, e) {
      var i = this.findTarget(e),
          r = this.targets,
          n = {
        e: e,
        target: i,
        subTargets: r
      };
      if (this.fire(t, n), i && i.fire(t, n), !r) return i;

      for (var s = 0; s < r.length; s++) {
        r[s].fire(t, n);
      }

      return i;
    },
    _handleEvent: function _handleEvent(t, e, i, r) {
      var n = this._target,
          s = this.targets || [],
          a = {
        e: t,
        target: n,
        subTargets: s,
        button: i || o,
        isClick: r || !1,
        pointer: this._pointer,
        absolutePointer: this._absolutePointer,
        transform: this._currentTransform
      };
      this.fire("mouse:" + e, a), n && n.fire("mouse" + e, a);

      for (var c = 0; c < s.length; c++) {
        s[c].fire("mouse" + e, a);
      }
    },
    _finalizeCurrentTransform: function _finalizeCurrentTransform(t) {
      var e,
          i = this._currentTransform,
          r = i.target,
          n = {
        e: t,
        target: r,
        transform: i
      };
      r._scaling && (r._scaling = !1), r.setCoords(), (i.actionPerformed || this.stateful && r.hasStateChanged()) && (i.actionPerformed && (e = this._addEventOptions(n, i), this._fire(e, n)), this._fire("modified", n));
    },
    _addEventOptions: function _addEventOptions(t, e) {
      var i, r;

      switch (e.action) {
        case "scaleX":
          i = "scaled", r = "x";
          break;

        case "scaleY":
          i = "scaled", r = "y";
          break;

        case "skewX":
          i = "skewed", r = "x";
          break;

        case "skewY":
          i = "skewed", r = "y";
          break;

        case "scale":
          i = "scaled", r = "equally";
          break;

        case "rotate":
          i = "rotated";
          break;

        case "drag":
          i = "moved";
      }

      return t.by = r, i;
    },
    _onMouseDownInDrawingMode: function _onMouseDownInDrawingMode(t) {
      this._isCurrentlyDrawing = !0, this.getActiveObject() && this.discardActiveObject(t).requestRenderAll(), this.clipTo && fabric.util.clipContext(this, this.contextTop);
      var e = this.getPointer(t);
      this.freeDrawingBrush.onMouseDown(e), this._handleEvent(t, "down");
    },
    _onMouseMoveInDrawingMode: function _onMouseMoveInDrawingMode(t) {
      if (this._isCurrentlyDrawing) {
        var e = this.getPointer(t);
        this.freeDrawingBrush.onMouseMove(e);
      }

      this.setCursor(this.freeDrawingCursor), this._handleEvent(t, "move");
    },
    _onMouseUpInDrawingMode: function _onMouseUpInDrawingMode(t) {
      this._isCurrentlyDrawing = !1, this.clipTo && this.contextTop.restore(), this.freeDrawingBrush.onMouseUp(), this._handleEvent(t, "up");
    },
    __onMouseDown: function __onMouseDown(e) {
      this._cacheTransformEventData(e), this._handleEvent(e, "down:before");
      var i = this._target;
      if (t(e, n)) return void (this.fireRightClick && this._handleEvent(e, "down", n));
      if (t(e, s)) return void (this.fireMiddleClick && this._handleEvent(e, "down", s));
      if (this.isDrawingMode) return void this._onMouseDownInDrawingMode(e);

      if (!this._currentTransform) {
        var r = this._pointer;
        this._previousPointer = r;

        var o = this._shouldRender(i),
            a = this._shouldGroup(e, i);

        if (this._shouldClearSelection(e, i) ? this.discardActiveObject(e) : a && (this._handleGrouping(e, i), i = this._activeObject), !this.selection || i && (i.selectable || i.isEditing || i === this._activeObject) || (this._groupSelector = {
          ex: r.x,
          ey: r.y,
          top: 0,
          left: 0
        }), i) {
          var c = i === this._activeObject;
          i.selectable && this.setActiveObject(i, e), i !== this._activeObject || !i.__corner && a || this._setupCurrentTransform(e, i, c);
        }

        this._handleEvent(e, "down"), (o || a) && this.requestRenderAll();
      }
    },
    _resetTransformEventData: function _resetTransformEventData() {
      this._target = null, this._pointer = null, this._absolutePointer = null;
    },
    _cacheTransformEventData: function _cacheTransformEventData(t) {
      this._resetTransformEventData(), this._pointer = this.getPointer(t, !0), this._absolutePointer = this.restorePointerVpt(this._pointer), this._target = this._currentTransform ? this._currentTransform.target : this.findTarget(t) || null;
    },
    _beforeTransform: function _beforeTransform(t) {
      var e = this._currentTransform;
      this.stateful && e.target.saveState(), this.fire("before:transform", {
        e: t,
        transform: e
      }), e.corner && this.onBeforeScaleRotate(e.target);
    },
    __onMouseMove: function __onMouseMove(t) {
      this._handleEvent(t, "move:before"), this._cacheTransformEventData(t);
      var e, i;
      if (this.isDrawingMode) return void this._onMouseMoveInDrawingMode(t);

      if (!("undefined" != typeof t.touches && t.touches.length > 1)) {
        var r = this._groupSelector;
        r ? (i = this._pointer, r.left = i.x - r.ex, r.top = i.y - r.ey, this.renderTop()) : this._currentTransform ? this._transformObject(t) : (e = this.findTarget(t) || null, this._setCursorFromEvent(t, e), this._fireOverOutEvents(e, t)), this._handleEvent(t, "move"), this._resetTransformEventData();
      }
    },
    _fireOverOutEvents: function _fireOverOutEvents(t, e) {
      this.fireSynteticInOutEvents(t, e, {
        targetName: "_hoveredTarget",
        canvasEvtOut: "mouse:out",
        evtOut: "mouseout",
        canvasEvtIn: "mouse:over",
        evtIn: "mouseover"
      });
    },
    _fireEnterLeaveEvents: function _fireEnterLeaveEvents(t, e) {
      this.fireSynteticInOutEvents(t, e, {
        targetName: "_draggedoverTarget",
        evtOut: "dragleave",
        evtIn: "dragenter"
      });
    },
    fireSynteticInOutEvents: function fireSynteticInOutEvents(t, e, i) {
      var r,
          n,
          s,
          o,
          a = this[i.targetName],
          c = a !== t,
          h = i.canvasEvtIn,
          l = i.canvasEvtOut;
      c && (r = {
        e: e,
        target: t,
        previousTarget: a
      }, n = {
        e: e,
        target: a,
        nextTarget: t
      }, this[i.targetName] = t), o = t && c, s = a && c, s && (l && this.fire(l, n), a.fire(i.evtOut, n)), o && (h && this.fire(h, r), t.fire(i.evtIn, r));
    },
    __onMouseWheel: function __onMouseWheel(t) {
      this._cacheTransformEventData(t), this._handleEvent(t, "wheel"), this._resetTransformEventData();
    },
    _transformObject: function _transformObject(t) {
      var e = this.getPointer(t),
          i = this._currentTransform;
      i.reset = !1, i.target.isMoving = !0, i.shiftKey = t.shiftKey, i.altKey = t[this.centeredKey], this._beforeScaleTransform(t, i), this._performTransformAction(t, i, e), i.actionPerformed && this.requestRenderAll();
    },
    _performTransformAction: function _performTransformAction(t, e, i) {
      var r = i.x,
          n = i.y,
          s = e.action,
          o = !1,
          a = {
        target: e.target,
        e: t,
        transform: e,
        pointer: i
      };
      "rotate" === s ? (o = this._rotateObject(r, n)) && this._fire("rotating", a) : "scale" === s ? (o = this._onScale(t, e, r, n)) && this._fire("scaling", a) : "scaleX" === s ? (o = this._scaleObject(r, n, "x")) && this._fire("scaling", a) : "scaleY" === s ? (o = this._scaleObject(r, n, "y")) && this._fire("scaling", a) : "skewX" === s ? (o = this._skewObject(r, n, "x")) && this._fire("skewing", a) : "skewY" === s ? (o = this._skewObject(r, n, "y")) && this._fire("skewing", a) : (o = this._translateObject(r, n), o && (this._fire("moving", a), this.setCursor(a.target.moveCursor || this.moveCursor))), e.actionPerformed = e.actionPerformed || o;
    },
    _fire: function _fire(t, e) {
      this.fire("object:" + t, e), e.target.fire(t, e);
    },
    _beforeScaleTransform: function _beforeScaleTransform(t, e) {
      if ("scale" === e.action || "scaleX" === e.action || "scaleY" === e.action) {
        var i = this._shouldCenterTransform(e.target);

        (i && ("center" !== e.originX || "center" !== e.originY) || !i && "center" === e.originX && "center" === e.originY) && (this._resetCurrentTransform(), e.reset = !0);
      }
    },
    _onScale: function _onScale(t, e, i, r) {
      return this._isUniscalePossible(t, e.target) ? (e.currentAction = "scale", this._scaleObject(i, r)) : (e.reset || "scale" !== e.currentAction || this._resetCurrentTransform(), e.currentAction = "scaleEqually", this._scaleObject(i, r, "equally"));
    },
    _isUniscalePossible: function _isUniscalePossible(t, e) {
      return (t[this.uniScaleKey] || this.uniScaleTransform) && !e.get("lockUniScaling");
    },
    _setCursorFromEvent: function _setCursorFromEvent(t, e) {
      if (!e) return this.setCursor(this.defaultCursor), !1;

      var i = e.hoverCursor || this.hoverCursor,
          r = this._activeObject && "activeSelection" === this._activeObject.type ? this._activeObject : null,
          n = (!r || !r.contains(e)) && e._findTargetCorner(this.getPointer(t, !0));

      this.setCursor(n ? this.getCornerCursor(n, e, t) : i);
    },
    getCornerCursor: function getCornerCursor(t, i, r) {
      return this.actionIsDisabled(t, i, r) ? this.notAllowedCursor : t in e ? this._getRotatedCornerCursor(t, i, r) : "mtr" === t && i.hasRotatingPoint ? this.rotationCursor : this.defaultCursor;
    },
    actionIsDisabled: function actionIsDisabled(t, e, i) {
      return "mt" === t || "mb" === t ? i[this.altActionKey] ? e.lockSkewingX : e.lockScalingY : "ml" === t || "mr" === t ? i[this.altActionKey] ? e.lockSkewingY : e.lockScalingX : "mtr" === t ? e.lockRotation : this._isUniscalePossible(i, e) ? e.lockScalingX && e.lockScalingY : e.lockScalingX || e.lockScalingY;
    },
    _getRotatedCornerCursor: function _getRotatedCornerCursor(t, i, r) {
      var n = Math.round(i.angle % 360 / 45);
      return 0 > n && (n += 8), n += e[t], r[this.altActionKey] && e[t] % 2 === 0 && (n += 2), n %= 8, this.cursorMap[n];
    }
  });
}();
!function () {
  var t = Math.min,
      e = Math.max;
  fabric.util.object.extend(fabric.Canvas.prototype, {
    _shouldGroup: function _shouldGroup(t, e) {
      var i = this._activeObject;
      return i && this._isSelectionKeyPressed(t) && e && e.selectable && this.selection && (i !== e || "activeSelection" === i.type) && !e.onSelect({
        e: t
      });
    },
    _handleGrouping: function _handleGrouping(t, e) {
      var i = this._activeObject;
      i.__corner || (e !== i || (e = this.findTarget(t, !0), e && e.selectable)) && (i && "activeSelection" === i.type ? this._updateActiveSelection(e, t) : this._createActiveSelection(e, t));
    },
    _updateActiveSelection: function _updateActiveSelection(t, e) {
      var i = this._activeObject,
          r = i._objects.slice(0);

      i.contains(t) ? (i.removeWithUpdate(t), this._hoveredTarget = t, 1 === i.size() && this._setActiveObject(i.item(0), e)) : (i.addWithUpdate(t), this._hoveredTarget = i), this._fireSelectionEvents(r, e);
    },
    _createActiveSelection: function _createActiveSelection(t, e) {
      var i = this.getActiveObjects(),
          r = this._createGroup(t);

      this._hoveredTarget = r, this._setActiveObject(r, e), this._fireSelectionEvents(i, e);
    },
    _createGroup: function _createGroup(t) {
      var e = this._objects,
          i = e.indexOf(this._activeObject) < e.indexOf(t),
          r = i ? [this._activeObject, t] : [t, this._activeObject];
      return this._activeObject.isEditing && this._activeObject.exitEditing(), new fabric.ActiveSelection(r, {
        canvas: this
      });
    },
    _groupSelectedObjects: function _groupSelectedObjects(t) {
      var e,
          i = this._collectObjects(t);

      1 === i.length ? this.setActiveObject(i[0], t) : i.length > 1 && (e = new fabric.ActiveSelection(i.reverse(), {
        canvas: this
      }), this.setActiveObject(e, t));
    },
    _collectObjects: function _collectObjects(i) {
      for (var r, n = [], s = this._groupSelector.ex, o = this._groupSelector.ey, a = s + this._groupSelector.left, c = o + this._groupSelector.top, h = new fabric.Point(t(s, a), t(o, c)), l = new fabric.Point(e(s, a), e(o, c)), u = !this.selectionFullyContained, f = s === a && o === c, d = this._objects.length; d-- && (r = this._objects[d], !(r && r.selectable && r.visible && !r.onSelect({
        e: i
      }) && (u && r.intersectsWithRect(h, l) || r.isContainedWithinRect(h, l) || u && r.containsPoint(h) || u && r.containsPoint(l)) && (n.push(r), f)));) {
        ;
      }

      return n;
    },
    _maybeGroupObjects: function _maybeGroupObjects(t) {
      this.selection && this._groupSelector && this._groupSelectedObjects(t), this.setCursor(this.defaultCursor), this._groupSelector = null;
    }
  });
}();
!function () {
  var t = fabric.StaticCanvas.supports("toDataURLWithQuality");
  fabric.util.object.extend(fabric.StaticCanvas.prototype, {
    toDataURL: function toDataURL(t) {
      t || (t = {});
      var e = t.format || "png",
          i = t.quality || 1,
          r = (t.multiplier || 1) * (t.enableRetinaScaling ? 1 : 1 / this.getRetinaScaling()),
          n = {
        left: t.left || 0,
        top: t.top || 0,
        width: t.width || 0,
        height: t.height || 0
      };
      return this.__toDataURLWithMultiplier(e, i, n, r);
    },
    __toDataURLWithMultiplier: function __toDataURLWithMultiplier(t, e, i, r) {
      var n = this.width,
          s = this.height,
          o = (i.width || this.width) * r,
          a = (i.height || this.height) * r,
          c = this.getZoom(),
          h = c * r,
          l = this.viewportTransform,
          u = (l[4] - i.left) * r,
          f = (l[5] - i.top) * r,
          d = [h, 0, 0, h, u, f],
          g = this.interactive,
          p = this.skipOffscreen,
          v = n !== o || s !== a;
      this.viewportTransform = d, this.skipOffscreen = !1, this.interactive = !1, v && this.setDimensions({
        width: o,
        height: a
      }, {
        backstoreOnly: !0
      }), this.renderAll();

      var b = this.__toDataURL(t, e, i);

      return this.interactive = g, this.skipOffscreen = p, this.viewportTransform = l, v && this.setDimensions({
        width: n,
        height: s
      }, {
        backstoreOnly: !0
      }), this.renderAll(), b;
    },
    __toDataURL: function __toDataURL(e, i) {
      var r = this.contextContainer.canvas,
          n = t ? r.toDataURL("image/" + e, i) : r.toDataURL("image/" + e);
      return n;
    }
  });
}();
fabric.util.object.extend(fabric.StaticCanvas.prototype, {
  loadFromDatalessJSON: function loadFromDatalessJSON(t, e, i) {
    return this.loadFromJSON(t, e, i);
  },
  loadFromJSON: function loadFromJSON(t, e, i) {
    if (t) {
      var r = "string" == typeof t ? JSON.parse(t) : fabric.util.object.clone(t),
          n = this,
          s = this.renderOnAddRemove;
      return this.renderOnAddRemove = !1, this._enlivenObjects(r.objects, function (t) {
        n.clear(), n._setBgOverlay(r, function () {
          t.forEach(function (t, e) {
            n.insertAt(t, e);
          }), n.renderOnAddRemove = s, delete r.objects, delete r.backgroundImage, delete r.overlayImage, delete r.background, delete r.overlay, n._setOptions(r), n.renderAll(), e && e();
        });
      }, i), this;
    }
  },
  _setBgOverlay: function _setBgOverlay(t, e) {
    var i = {
      backgroundColor: !1,
      overlayColor: !1,
      backgroundImage: !1,
      overlayImage: !1
    };
    if (!(t.backgroundImage || t.overlayImage || t.background || t.overlay)) return void (e && e());

    var r = function r() {
      i.backgroundImage && i.overlayImage && i.backgroundColor && i.overlayColor && e && e();
    };

    this.__setBgOverlay("backgroundImage", t.backgroundImage, i, r), this.__setBgOverlay("overlayImage", t.overlayImage, i, r), this.__setBgOverlay("backgroundColor", t.background, i, r), this.__setBgOverlay("overlayColor", t.overlay, i, r);
  },
  __setBgOverlay: function __setBgOverlay(t, e, i, r) {
    var n = this;
    return e ? void ("backgroundImage" === t || "overlayImage" === t ? fabric.util.enlivenObjects([e], function (e) {
      n[t] = e[0], i[t] = !0, r && r();
    }) : this["set" + fabric.util.string.capitalize(t, !0)](e, function () {
      i[t] = !0, r && r();
    })) : (i[t] = !0, void (r && r()));
  },
  _enlivenObjects: function _enlivenObjects(t, e, i) {
    return t && 0 !== t.length ? void fabric.util.enlivenObjects(t, function (t) {
      e && e(t);
    }, null, i) : void (e && e([]));
  },
  _toDataURL: function _toDataURL(t, e) {
    this.clone(function (i) {
      e(i.toDataURL(t));
    });
  },
  _toDataURLWithMultiplier: function _toDataURLWithMultiplier(t, e, i) {
    this.clone(function (r) {
      i(r.toDataURLWithMultiplier(t, e));
    });
  },
  clone: function clone(t, e) {
    var i = JSON.stringify(this.toJSON(e));
    this.cloneWithoutData(function (e) {
      e.loadFromJSON(i, function () {
        t && t(e);
      });
    });
  },
  cloneWithoutData: function cloneWithoutData(t) {
    var e = fabric.util.createCanvasElement();
    e.width = this.width, e.height = this.height;
    var i = new fabric.Canvas(e);
    i.clipTo = this.clipTo, this.backgroundImage ? (i.setBackgroundImage(this.backgroundImage.src, function () {
      i.renderAll(), t && t(i);
    }), i.backgroundImageOpacity = this.backgroundImageOpacity, i.backgroundImageStretch = this.backgroundImageStretch) : t && t(i);
  }
});
!function () {
  var t = fabric.util.degreesToRadians,
      e = fabric.util.radiansToDegrees;
  fabric.util.object.extend(fabric.Canvas.prototype, {
    __onTransformGesture: function __onTransformGesture(t, e) {
      if (!this.isDrawingMode && t.touches && 2 === t.touches.length && "gesture" === e.gesture) {
        var i = this.findTarget(t);
        "undefined" != typeof i && (this.__gesturesParams = {
          e: t,
          self: e,
          target: i
        }, this.__gesturesRenderer()), this.fire("touch:gesture", {
          target: i,
          e: t,
          self: e
        });
      }
    },
    __gesturesParams: null,
    __gesturesRenderer: function __gesturesRenderer() {
      if (null !== this.__gesturesParams && null !== this._currentTransform) {
        var t = this.__gesturesParams.self,
            e = this._currentTransform,
            i = this.__gesturesParams.e;
        e.action = "scale", e.originX = e.originY = "center", this._scaleObjectBy(t.scale, i), 0 !== t.rotation && (e.action = "rotate", this._rotateObjectByAngle(t.rotation, i)), this.requestRenderAll(), e.action = "drag";
      }
    },
    __onDrag: function __onDrag(t, e) {
      this.fire("touch:drag", {
        e: t,
        self: e
      });
    },
    __onOrientationChange: function __onOrientationChange(t, e) {
      this.fire("touch:orientation", {
        e: t,
        self: e
      });
    },
    __onShake: function __onShake(t, e) {
      this.fire("touch:shake", {
        e: t,
        self: e
      });
    },
    __onLongPress: function __onLongPress(t, e) {
      this.fire("touch:longpress", {
        e: t,
        self: e
      });
    },
    _scaleObjectBy: function _scaleObjectBy(t, e) {
      var i = this._currentTransform,
          r = i.target,
          n = r.get("lockScalingX"),
          s = r.get("lockScalingY");

      if (!n || !s) {
        r._scaling = !0;

        var o = r.translateToOriginPoint(r.getCenterPoint(), i.originX, i.originY),
            a = r._getTransformedDimensions();

        this._setObjectScale(new fabric.Point(i.scaleX * a.x * t / r.scaleX, i.scaleY * a.y * t / r.scaleY), i, n, s, null, r.get("lockScalingFlip"), a), r.setPositionByOrigin(o, i.originX, i.originY), this._fire("scaling", {
          target: r,
          e: e,
          transform: i
        });
      }
    },
    _rotateObjectByAngle: function _rotateObjectByAngle(i, r) {
      var n = this._currentTransform;
      n.target.get("lockRotation") || (n.target.rotate(e(t(i) + n.theta)), this._fire("rotating", {
        target: n.target,
        e: r,
        transform: n
      }));
    }
  });
}();
!function (t) {
  "use strict";

  var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      r = e.util.object.clone,
      n = e.util.toFixed,
      s = e.util.string.capitalize,
      o = e.util.degreesToRadians,
      a = e.StaticCanvas.supports("setLineDash"),
      c = !e.isLikelyNode,
      h = 2;
  e.Object || (e.Object = e.util.createClass(e.CommonMethods, {
    type: "object",
    originX: "left",
    originY: "top",
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    scaleX: 1,
    scaleY: 1,
    flipX: !1,
    flipY: !1,
    opacity: 1,
    angle: 0,
    skewX: 0,
    skewY: 0,
    cornerSize: 13,
    transparentCorners: !0,
    hoverCursor: null,
    moveCursor: null,
    padding: 0,
    borderColor: "rgba(102,153,255,0.75)",
    borderDashArray: null,
    cornerColor: "rgba(102,153,255,0.5)",
    cornerStrokeColor: null,
    cornerStyle: "rect",
    cornerDashArray: null,
    centeredScaling: !1,
    centeredRotation: !0,
    fill: "rgb(0,0,0)",
    fillRule: "nonzero",
    globalCompositeOperation: "source-over",
    backgroundColor: "",
    selectionBackgroundColor: "",
    stroke: null,
    strokeWidth: 1,
    strokeDashArray: null,
    strokeDashOffset: 0,
    strokeLineCap: "butt",
    strokeLineJoin: "miter",
    strokeMiterLimit: 4,
    shadow: null,
    borderOpacityWhenMoving: .4,
    borderScaleFactor: 1,
    transformMatrix: null,
    minScaleLimit: 0,
    selectable: !0,
    evented: !0,
    visible: !0,
    hasControls: !0,
    hasBorders: !0,
    hasRotatingPoint: !0,
    rotatingPointOffset: 40,
    perPixelTargetFind: !1,
    includeDefaultValues: !0,
    clipTo: null,
    lockMovementX: !1,
    lockMovementY: !1,
    lockRotation: !1,
    lockScalingX: !1,
    lockScalingY: !1,
    lockUniScaling: !1,
    lockSkewingX: !1,
    lockSkewingY: !1,
    lockScalingFlip: !1,
    excludeFromExport: !1,
    objectCaching: c,
    statefullCache: !1,
    noScaleCache: !0,
    dirty: !0,
    __corner: 0,
    paintFirst: "fill",
    stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow clipTo visible backgroundColor skewX skewY fillRule paintFirst clipPath".split(" "),
    cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeLineCap strokeDashOffset strokeLineJoin strokeMiterLimit backgroundColor clipPath".split(" "),
    clipPath: void 0,
    inverted: !1,
    absolutePositioned: !1,
    initialize: function initialize(t) {
      t && this.setOptions(t);
    },
    _createCacheCanvas: function _createCacheCanvas() {
      this._cacheProperties = {}, this._cacheCanvas = e.util.createCanvasElement(), this._cacheContext = this._cacheCanvas.getContext("2d"), this._updateCacheCanvas(), this.dirty = !0;
    },
    _limitCacheSize: function _limitCacheSize(t) {
      var i = e.perfLimitSizeTotal,
          r = t.width,
          n = t.height,
          s = e.maxCacheSideLimit,
          o = e.minCacheSideLimit;
      if (s >= r && s >= n && i >= r * n) return o > r && (t.width = o), o > n && (t.height = o), t;
      var a = r / n,
          c = e.util.limitDimsByArea(a, i),
          h = e.util.capValue,
          l = h(o, c.x, s),
          u = h(o, c.y, s);
      return r > l && (t.zoomX /= r / l, t.width = l, t.capped = !0), n > u && (t.zoomY /= n / u, t.height = u, t.capped = !0), t;
    },
    _getCacheCanvasDimensions: function _getCacheCanvasDimensions() {
      var t = this.getTotalObjectScaling(),
          e = this._getNonTransformedDimensions(),
          i = t.scaleX,
          r = t.scaleY,
          n = e.x * i,
          s = e.y * r;

      return {
        width: n + h,
        height: s + h,
        zoomX: i,
        zoomY: r,
        x: e.x,
        y: e.y
      };
    },
    _updateCacheCanvas: function _updateCacheCanvas() {
      var t = this.canvas;

      if (this.noScaleCache && t && t._currentTransform) {
        var i = t._currentTransform.target,
            r = t._currentTransform.action;
        if (this === i && r.slice && "scale" === r.slice(0, 5)) return !1;
      }

      var n,
          s,
          o = this._cacheCanvas,
          a = this._limitCacheSize(this._getCacheCanvasDimensions()),
          c = e.minCacheSideLimit,
          h = a.width,
          l = a.height,
          u = a.zoomX,
          f = a.zoomY,
          d = h !== this.cacheWidth || l !== this.cacheHeight,
          g = this.zoomX !== u || this.zoomY !== f,
          p = d || g,
          v = 0,
          b = 0,
          m = !1;

      if (d) {
        var y = this._cacheCanvas.width,
            _ = this._cacheCanvas.height,
            C = h > y || l > _,
            w = (.9 * y > h || .9 * _ > l) && y > c && _ > c;
        m = C || w, C && !a.capped && (h > c || l > c) && (v = .1 * h, b = .1 * l);
      }

      return p ? (m ? (o.width = Math.ceil(h + v), o.height = Math.ceil(l + b)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0), this._cacheContext.clearRect(0, 0, o.width, o.height)), n = a.x * u / 2, s = a.y * f / 2, this.cacheTranslationX = Math.round(o.width / 2 - n) + n, this.cacheTranslationY = Math.round(o.height / 2 - s) + s, this.cacheWidth = h, this.cacheHeight = l, this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY), this._cacheContext.scale(u, f), this.zoomX = u, this.zoomY = f, !0) : !1;
    },
    setOptions: function setOptions(t) {
      this._setOptions(t), this._initGradient(t.fill, "fill"), this._initGradient(t.stroke, "stroke"), this._initClipping(t), this._initPattern(t.fill, "fill"), this._initPattern(t.stroke, "stroke");
    },
    transform: function transform(t) {
      var e;
      e = this.group && !this.group._transformDone ? this.calcTransformMatrix() : this.calcOwnMatrix(), t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
    },
    toObject: function toObject(t) {
      var i = e.Object.NUM_FRACTION_DIGITS,
          r = {
        type: this.type,
        version: e.version,
        originX: this.originX,
        originY: this.originY,
        left: n(this.left, i),
        top: n(this.top, i),
        width: n(this.width, i),
        height: n(this.height, i),
        fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill,
        stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke,
        strokeWidth: n(this.strokeWidth, i),
        strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
        strokeLineCap: this.strokeLineCap,
        strokeDashOffset: this.strokeDashOffset,
        strokeLineJoin: this.strokeLineJoin,
        strokeMiterLimit: n(this.strokeMiterLimit, i),
        scaleX: n(this.scaleX, i),
        scaleY: n(this.scaleY, i),
        angle: n(this.angle, i),
        flipX: this.flipX,
        flipY: this.flipY,
        opacity: n(this.opacity, i),
        shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
        visible: this.visible,
        clipTo: this.clipTo && String(this.clipTo),
        backgroundColor: this.backgroundColor,
        fillRule: this.fillRule,
        paintFirst: this.paintFirst,
        globalCompositeOperation: this.globalCompositeOperation,
        transformMatrix: this.transformMatrix ? this.transformMatrix.concat() : null,
        skewX: n(this.skewX, i),
        skewY: n(this.skewY, i)
      };
      return this.clipPath && (r.clipPath = this.clipPath.toObject(t), r.clipPath.inverted = this.clipPath.inverted, r.clipPath.absolutePositioned = this.clipPath.absolutePositioned), e.util.populateWithProperties(this, r, t), this.includeDefaultValues || (r = this._removeDefaultValues(r)), r;
    },
    toDatalessObject: function toDatalessObject(t) {
      return this.toObject(t);
    },
    _removeDefaultValues: function _removeDefaultValues(t) {
      var i = e.util.getKlass(t.type).prototype,
          r = i.stateProperties;
      return r.forEach(function (e) {
        t[e] === i[e] && delete t[e];
        var r = "[object Array]" === Object.prototype.toString.call(t[e]) && "[object Array]" === Object.prototype.toString.call(i[e]);
        r && 0 === t[e].length && 0 === i[e].length && delete t[e];
      }), t;
    },
    toString: function toString() {
      return "#<fabric." + s(this.type) + ">";
    },
    getObjectScaling: function getObjectScaling() {
      var t = this.scaleX,
          e = this.scaleY;

      if (this.group) {
        var i = this.group.getObjectScaling();
        t *= i.scaleX, e *= i.scaleY;
      }

      return {
        scaleX: t,
        scaleY: e
      };
    },
    getTotalObjectScaling: function getTotalObjectScaling() {
      var t = this.getObjectScaling(),
          e = t.scaleX,
          i = t.scaleY;

      if (this.canvas) {
        var r = this.canvas.getZoom(),
            n = this.canvas.getRetinaScaling();
        e *= r * n, i *= r * n;
      }

      return {
        scaleX: e,
        scaleY: i
      };
    },
    getObjectOpacity: function getObjectOpacity() {
      var t = this.opacity;
      return this.group && (t *= this.group.getObjectOpacity()), t;
    },
    _set: function _set(t, i) {
      var r = "scaleX" === t || "scaleY" === t,
          n = this[t] !== i,
          s = !1;
      return r && (i = this._constrainScale(i)), "scaleX" === t && 0 > i ? (this.flipX = !this.flipX, i *= -1) : "scaleY" === t && 0 > i ? (this.flipY = !this.flipY, i *= -1) : "shadow" !== t || !i || i instanceof e.Shadow ? "dirty" === t && this.group && this.group.set("dirty", i) : i = new e.Shadow(i), this[t] = i, n && (s = this.group && this.group.isOnACache(), this.cacheProperties.indexOf(t) > -1 ? (this.dirty = !0, s && this.group.set("dirty", !0)) : s && this.stateProperties.indexOf(t) > -1 && this.group.set("dirty", !0)), this;
    },
    setOnGroup: function setOnGroup() {},
    getViewportTransform: function getViewportTransform() {
      return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : e.iMatrix.concat();
    },
    isNotVisible: function isNotVisible() {
      return 0 === this.opacity || 0 === this.width && 0 === this.height && 0 === this.strokeWidth || !this.visible;
    },
    render: function render(t) {
      this.isNotVisible() || (!this.canvas || !this.canvas.skipOffscreen || this.group || this.isOnScreen()) && (t.save(), this._setupCompositeOperation(t), this.drawSelectionBackground(t), this.transform(t), this._setOpacity(t), this._setShadow(t, this), this.transformMatrix && t.transform.apply(t, this.transformMatrix), this.clipTo && e.util.clipContext(this, t), this.shouldCache() ? (this.renderCache(), this.drawCacheOnCanvas(t)) : (this._removeCacheCanvas(), this.dirty = !1, this.drawObject(t), this.objectCaching && this.statefullCache && this.saveState({
        propertySet: "cacheProperties"
      })), this.clipTo && t.restore(), t.restore());
    },
    renderCache: function renderCache(t) {
      t = t || {}, this._cacheCanvas || this._createCacheCanvas(), this.isCacheDirty() && (this.statefullCache && this.saveState({
        propertySet: "cacheProperties"
      }), this.drawObject(this._cacheContext, t.forClipping), this.dirty = !1);
    },
    _removeCacheCanvas: function _removeCacheCanvas() {
      this._cacheCanvas = null, this.cacheWidth = 0, this.cacheHeight = 0;
    },
    needsItsOwnCache: function needsItsOwnCache() {
      return "stroke" === this.paintFirst && "object" == _typeof(this.shadow) ? !0 : this.clipPath ? !0 : !1;
    },
    shouldCache: function shouldCache() {
      return this.ownCaching = this.objectCaching && (!this.group || this.needsItsOwnCache() || !this.group.isOnACache()), this.ownCaching;
    },
    willDrawShadow: function willDrawShadow() {
      return !!this.shadow && (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY);
    },
    drawClipPathOnCache: function drawClipPathOnCache(t) {
      var i = this.clipPath;

      if (t.save(), t.globalCompositeOperation = i.inverted ? "destination-out" : "destination-in", i.absolutePositioned) {
        var r = e.util.invertTransform(this.calcTransformMatrix());
        t.transform(r[0], r[1], r[2], r[3], r[4], r[5]);
      }

      i.transform(t), t.scale(1 / i.zoomX, 1 / i.zoomY), t.drawImage(i._cacheCanvas, -i.cacheTranslationX, -i.cacheTranslationY), t.restore();
    },
    drawObject: function drawObject(t, e) {
      e ? this._setClippingProperties(t) : (this._renderBackground(t), this._setStrokeStyles(t, this), this._setFillStyles(t, this)), this._render(t), this._drawClipPath(t);
    },
    _drawClipPath: function _drawClipPath(t) {
      var e = this.clipPath;
      e && (e.canvas = this.canvas, e.shouldCache(), e._transformDone = !0, e.renderCache({
        forClipping: !0
      }), this.drawClipPathOnCache(t));
    },
    drawCacheOnCanvas: function drawCacheOnCanvas(t) {
      t.scale(1 / this.zoomX, 1 / this.zoomY), t.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY);
    },
    isCacheDirty: function isCacheDirty(t) {
      if (this.isNotVisible()) return !1;
      if (this._cacheCanvas && !t && this._updateCacheCanvas()) return !0;

      if (this.dirty || this.clipPath && this.clipPath.absolutePositioned || this.statefullCache && this.hasStateChanged("cacheProperties")) {
        if (this._cacheCanvas && !t) {
          var e = this.cacheWidth / this.zoomX,
              i = this.cacheHeight / this.zoomY;

          this._cacheContext.clearRect(-e / 2, -i / 2, e, i);
        }

        return !0;
      }

      return !1;
    },
    _renderBackground: function _renderBackground(t) {
      if (this.backgroundColor) {
        var e = this._getNonTransformedDimensions();

        t.fillStyle = this.backgroundColor, t.fillRect(-e.x / 2, -e.y / 2, e.x, e.y), this._removeShadow(t);
      }
    },
    _setOpacity: function _setOpacity(t) {
      this.group && !this.group._transformDone ? t.globalAlpha = this.getObjectOpacity() : t.globalAlpha *= this.opacity;
    },
    _setStrokeStyles: function _setStrokeStyles(t, e) {
      e.stroke && (t.lineWidth = e.strokeWidth, t.lineCap = e.strokeLineCap, t.lineDashOffset = e.strokeDashOffset, t.lineJoin = e.strokeLineJoin, t.miterLimit = e.strokeMiterLimit, t.strokeStyle = e.stroke.toLive ? e.stroke.toLive(t, this) : e.stroke);
    },
    _setFillStyles: function _setFillStyles(t, e) {
      e.fill && (t.fillStyle = e.fill.toLive ? e.fill.toLive(t, this) : e.fill);
    },
    _setClippingProperties: function _setClippingProperties(t) {
      t.globalAlpha = 1, t.strokeStyle = "transparent", t.fillStyle = "#000000";
    },
    _setLineDash: function _setLineDash(t, e, i) {
      e && (1 & e.length && e.push.apply(e, e), a ? t.setLineDash(e) : i && i(t));
    },
    _renderControls: function _renderControls(t, i) {
      var r,
          n,
          s,
          a = this.getViewportTransform(),
          c = this.calcTransformMatrix();
      i = i || {}, n = "undefined" != typeof i.hasBorders ? i.hasBorders : this.hasBorders, s = "undefined" != typeof i.hasControls ? i.hasControls : this.hasControls, c = e.util.multiplyTransformMatrices(a, c), r = e.util.qrDecompose(c), t.save(), t.translate(r.translateX, r.translateY), t.lineWidth = 1 * this.borderScaleFactor, this.group || (t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1), i.forActiveSelection ? (t.rotate(o(r.angle)), n && this.drawBordersInGroup(t, r, i)) : (t.rotate(o(this.angle)), n && this.drawBorders(t, i)), s && this.drawControls(t, i), t.restore();
    },
    _setShadow: function _setShadow(t) {
      if (this.shadow) {
        var i = this.canvas && this.canvas.viewportTransform[0] || 1,
            r = this.canvas && this.canvas.viewportTransform[3] || 1,
            n = this.getObjectScaling();
        this.canvas && this.canvas._isRetinaScaling() && (i *= e.devicePixelRatio, r *= e.devicePixelRatio), t.shadowColor = this.shadow.color, t.shadowBlur = this.shadow.blur * e.browserShadowBlurConstant * (i + r) * (n.scaleX + n.scaleY) / 4, t.shadowOffsetX = this.shadow.offsetX * i * n.scaleX, t.shadowOffsetY = this.shadow.offsetY * r * n.scaleY;
      }
    },
    _removeShadow: function _removeShadow(t) {
      this.shadow && (t.shadowColor = "", t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0);
    },
    _applyPatternGradientTransform: function _applyPatternGradientTransform(t, e) {
      if (!e || !e.toLive) return {
        offsetX: 0,
        offsetY: 0
      };
      var i = e.gradientTransform || e.patternTransform,
          r = -this.width / 2 + e.offsetX || 0,
          n = -this.height / 2 + e.offsetY || 0;
      return t.translate(r, n), i && t.transform(i[0], i[1], i[2], i[3], i[4], i[5]), {
        offsetX: r,
        offsetY: n
      };
    },
    _renderPaintInOrder: function _renderPaintInOrder(t) {
      "stroke" === this.paintFirst ? (this._renderStroke(t), this._renderFill(t)) : (this._renderFill(t), this._renderStroke(t));
    },
    _renderFill: function _renderFill(t) {
      this.fill && (t.save(), this._applyPatternGradientTransform(t, this.fill), "evenodd" === this.fillRule ? t.fill("evenodd") : t.fill(), t.restore());
    },
    _renderStroke: function _renderStroke(t) {
      this.stroke && 0 !== this.strokeWidth && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this._setLineDash(t, this.strokeDashArray, this._renderDashedStroke), this._applyPatternGradientTransform(t, this.stroke), t.stroke(), t.restore());
    },
    _findCenterFromElement: function _findCenterFromElement() {
      return {
        x: this.left + this.width / 2,
        y: this.top + this.height / 2
      };
    },
    _assignTransformMatrixProps: function _assignTransformMatrixProps() {
      if (this.transformMatrix) {
        var t = e.util.qrDecompose(this.transformMatrix);
        this.flipX = !1, this.flipY = !1, this.set("scaleX", t.scaleX), this.set("scaleY", t.scaleY), this.angle = t.angle, this.skewX = t.skewX, this.skewY = 0;
      }
    },
    _removeTransformMatrix: function _removeTransformMatrix(t) {
      var i = this._findCenterFromElement();

      this.transformMatrix && (this._assignTransformMatrixProps(), i = e.util.transformPoint(i, this.transformMatrix)), this.transformMatrix = null, t && (this.scaleX *= t.scaleX, this.scaleY *= t.scaleY, this.cropX = t.cropX, this.cropY = t.cropY, i.x += t.offsetLeft, i.y += t.offsetTop, this.width = t.width, this.height = t.height), this.setPositionByOrigin(i, "center", "center");
    },
    clone: function clone(t, i) {
      var r = this.toObject(i);
      this.constructor.fromObject ? this.constructor.fromObject(r, t) : e.Object._fromObject("Object", r, t);
    },
    cloneAsImage: function cloneAsImage(t, i) {
      var r = this.toDataURL(i);
      return e.util.loadImage(r, function (i) {
        t && t(new e.Image(i));
      }), this;
    },
    toDataURL: function toDataURL(t) {
      t || (t = {});
      var i = e.util,
          r = i.saveObjectTransform(this),
          n = this.shadow,
          s = Math.abs;
      t.withoutTransform && i.resetObjectTransform(this), t.withoutShadow && (this.shadow = null);
      var o,
          a,
          c = e.util.createCanvasElement(),
          h = this.getBoundingRect(!0, !0),
          l = this.shadow,
          u = {
        x: 0,
        y: 0
      };
      l && (a = l.blur, o = this.getObjectScaling(), u.x = 2 * Math.round((s(l.offsetX) + a) * s(o.scaleX)), u.y = 2 * Math.round((s(l.offsetY) + a) * s(o.scaleY))), c.width = h.width + u.x, c.height = h.height + u.y, c.width += c.width % 2 ? 2 - c.width % 2 : 0, c.height += c.height % 2 ? 2 - c.height % 2 : 0;
      var f = new e.StaticCanvas(c, {
        enableRetinaScaling: t.enableRetinaScaling,
        renderOnAddRemove: !1,
        skipOffscreen: !1
      });
      "jpeg" === t.format && (f.backgroundColor = "#fff"), this.setPositionByOrigin(new e.Point(f.width / 2, f.height / 2), "center", "center");
      var d = this.canvas;
      f.add(this);
      var g = f.toDataURL(t);
      return this.shadow = n, this.set(r).setCoords(), this.canvas = d, f._objects = [], f.dispose(), f = null, g;
    },
    isType: function isType(t) {
      return this.type === t;
    },
    complexity: function complexity() {
      return 1;
    },
    toJSON: function toJSON(t) {
      return this.toObject(t);
    },
    setGradient: function setGradient(t, i) {
      i || (i = {});
      var r = {
        colorStops: []
      };
      return r.type = i.type || (i.r1 || i.r2 ? "radial" : "linear"), r.coords = {
        x1: i.x1,
        y1: i.y1,
        x2: i.x2,
        y2: i.y2
      }, (i.r1 || i.r2) && (r.coords.r1 = i.r1, r.coords.r2 = i.r2), r.gradientTransform = i.gradientTransform, e.Gradient.prototype.addColorStop.call(r, i.colorStops), this.set(t, e.Gradient.forObject(this, r));
    },
    setPatternFill: function setPatternFill(t, i) {
      return this.set("fill", new e.Pattern(t, i));
    },
    setShadow: function setShadow(t) {
      return this.set("shadow", t ? new e.Shadow(t) : null);
    },
    setColor: function setColor(t) {
      return this.set("fill", t), this;
    },
    rotate: function rotate(t) {
      var e = ("center" !== this.originX || "center" !== this.originY) && this.centeredRotation;
      return e && this._setOriginToCenter(), this.set("angle", t), e && this._resetOrigin(), this;
    },
    centerH: function centerH() {
      return this.canvas && this.canvas.centerObjectH(this), this;
    },
    viewportCenterH: function viewportCenterH() {
      return this.canvas && this.canvas.viewportCenterObjectH(this), this;
    },
    centerV: function centerV() {
      return this.canvas && this.canvas.centerObjectV(this), this;
    },
    viewportCenterV: function viewportCenterV() {
      return this.canvas && this.canvas.viewportCenterObjectV(this), this;
    },
    center: function center() {
      return this.canvas && this.canvas.centerObject(this), this;
    },
    viewportCenter: function viewportCenter() {
      return this.canvas && this.canvas.viewportCenterObject(this), this;
    },
    getLocalPointer: function getLocalPointer(t, i) {
      i = i || this.canvas.getPointer(t);

      var r = new e.Point(i.x, i.y),
          n = this._getLeftTopCoords();

      return this.angle && (r = e.util.rotatePoint(r, n, o(-this.angle))), {
        x: r.x - n.x,
        y: r.y - n.y
      };
    },
    _setupCompositeOperation: function _setupCompositeOperation(t) {
      this.globalCompositeOperation && (t.globalCompositeOperation = this.globalCompositeOperation);
    }
  }), e.util.createAccessors && e.util.createAccessors(e.Object), i(e.Object.prototype, e.Observable), e.Object.NUM_FRACTION_DIGITS = 2, e.Object._fromObject = function (t, i, n, s) {
    var o = e[t];
    i = r(i, !0), e.util.enlivenPatterns([i.fill, i.stroke], function (t) {
      "undefined" != typeof t[0] && (i.fill = t[0]), "undefined" != typeof t[1] && (i.stroke = t[1]), e.util.enlivenObjects([i.clipPath], function (t) {
        i.clipPath = t[0];
        var e = s ? new o(i[s], i) : new o(i);
        n && n(e);
      });
    });
  }, e.Object.__uid = 0);
}( true ? exports : undefined);
!function () {
  var t = fabric.util.degreesToRadians,
      e = {
    left: -.5,
    center: 0,
    right: .5
  },
      i = {
    top: -.5,
    center: 0,
    bottom: .5
  };
  fabric.util.object.extend(fabric.Object.prototype, {
    translateToGivenOrigin: function translateToGivenOrigin(t, r, n, s, o) {
      var a,
          c,
          h,
          l = t.x,
          u = t.y;
      return "string" == typeof r ? r = e[r] : r -= .5, "string" == typeof s ? s = e[s] : s -= .5, a = s - r, "string" == typeof n ? n = i[n] : n -= .5, "string" == typeof o ? o = i[o] : o -= .5, c = o - n, (a || c) && (h = this._getTransformedDimensions(), l = t.x + a * h.x, u = t.y + c * h.y), new fabric.Point(l, u);
    },
    translateToCenterPoint: function translateToCenterPoint(e, i, r) {
      var n = this.translateToGivenOrigin(e, i, r, "center", "center");
      return this.angle ? fabric.util.rotatePoint(n, e, t(this.angle)) : n;
    },
    translateToOriginPoint: function translateToOriginPoint(e, i, r) {
      var n = this.translateToGivenOrigin(e, "center", "center", i, r);
      return this.angle ? fabric.util.rotatePoint(n, e, t(this.angle)) : n;
    },
    getCenterPoint: function getCenterPoint() {
      var t = new fabric.Point(this.left, this.top);
      return this.translateToCenterPoint(t, this.originX, this.originY);
    },
    getPointByOrigin: function getPointByOrigin(t, e) {
      var i = this.getCenterPoint();
      return this.translateToOriginPoint(i, t, e);
    },
    toLocalPoint: function toLocalPoint(e, i, r) {
      var n,
          s,
          o = this.getCenterPoint();
      return n = "undefined" != typeof i && "undefined" != typeof r ? this.translateToGivenOrigin(o, "center", "center", i, r) : new fabric.Point(this.left, this.top), s = new fabric.Point(e.x, e.y), this.angle && (s = fabric.util.rotatePoint(s, o, -t(this.angle))), s.subtractEquals(n);
    },
    setPositionByOrigin: function setPositionByOrigin(t, e, i) {
      var r = this.translateToCenterPoint(t, e, i),
          n = this.translateToOriginPoint(r, this.originX, this.originY);
      this.set("left", n.x), this.set("top", n.y);
    },
    adjustPosition: function adjustPosition(i) {
      var r,
          n,
          s = t(this.angle),
          o = this.getScaledWidth(),
          a = fabric.util.cos(s) * o,
          c = fabric.util.sin(s) * o;
      r = "string" == typeof this.originX ? e[this.originX] : this.originX - .5, n = "string" == typeof i ? e[i] : i - .5, this.left += a * (n - r), this.top += c * (n - r), this.setCoords(), this.originX = i;
    },
    _setOriginToCenter: function _setOriginToCenter() {
      this._originalOriginX = this.originX, this._originalOriginY = this.originY;
      var t = this.getCenterPoint();
      this.originX = "center", this.originY = "center", this.left = t.x, this.top = t.y;
    },
    _resetOrigin: function _resetOrigin() {
      var t = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);
      this.originX = this._originalOriginX, this.originY = this._originalOriginY, this.left = t.x, this.top = t.y, this._originalOriginX = null, this._originalOriginY = null;
    },
    _getLeftTopCoords: function _getLeftTopCoords() {
      return this.translateToOriginPoint(this.getCenterPoint(), "left", "top");
    }
  });
}();
!function () {
  function t(t) {
    return [new fabric.Point(t.tl.x, t.tl.y), new fabric.Point(t.tr.x, t.tr.y), new fabric.Point(t.br.x, t.br.y), new fabric.Point(t.bl.x, t.bl.y)];
  }

  var e = fabric.util.degreesToRadians,
      i = fabric.util.multiplyTransformMatrices,
      r = fabric.util.transformPoint;
  fabric.util.object.extend(fabric.Object.prototype, {
    oCoords: null,
    aCoords: null,
    ownMatrixCache: null,
    matrixCache: null,
    getCoords: function getCoords(e, i) {
      this.oCoords || this.setCoords();
      var r = e ? this.aCoords : this.oCoords;
      return t(i ? this.calcCoords(e) : r);
    },
    intersectsWithRect: function intersectsWithRect(t, e, i, r) {
      var n = this.getCoords(i, r),
          s = fabric.Intersection.intersectPolygonRectangle(n, t, e);
      return "Intersection" === s.status;
    },
    intersectsWithObject: function intersectsWithObject(t, e, i) {
      var r = fabric.Intersection.intersectPolygonPolygon(this.getCoords(e, i), t.getCoords(e, i));
      return "Intersection" === r.status || t.isContainedWithinObject(this, e, i) || this.isContainedWithinObject(t, e, i);
    },
    isContainedWithinObject: function isContainedWithinObject(t, e, i) {
      for (var r = this.getCoords(e, i), n = 0, s = t._getImageLines(i ? t.calcCoords(e) : e ? t.aCoords : t.oCoords); 4 > n; n++) {
        if (!t.containsPoint(r[n], s)) return !1;
      }

      return !0;
    },
    isContainedWithinRect: function isContainedWithinRect(t, e, i, r) {
      var n = this.getBoundingRect(i, r);
      return n.left >= t.x && n.left + n.width <= e.x && n.top >= t.y && n.top + n.height <= e.y;
    },
    containsPoint: function containsPoint(t, e, i, r) {
      var e = e || this._getImageLines(r ? this.calcCoords(i) : i ? this.aCoords : this.oCoords),
          n = this._findCrossPoints(t, e);

      return 0 !== n && n % 2 === 1;
    },
    isOnScreen: function isOnScreen(t) {
      if (!this.canvas) return !1;

      for (var e, i = this.canvas.vptCoords.tl, r = this.canvas.vptCoords.br, n = this.getCoords(!0, t), s = 0; 4 > s; s++) {
        if (e = n[s], e.x <= r.x && e.x >= i.x && e.y <= r.y && e.y >= i.y) return !0;
      }

      return this.intersectsWithRect(i, r, !0, t) ? !0 : this._containsCenterOfCanvas(i, r, t);
    },
    _containsCenterOfCanvas: function _containsCenterOfCanvas(t, e, i) {
      var r = {
        x: (t.x + e.x) / 2,
        y: (t.y + e.y) / 2
      };
      return this.containsPoint(r, null, !0, i) ? !0 : !1;
    },
    isPartiallyOnScreen: function isPartiallyOnScreen(t) {
      if (!this.canvas) return !1;
      var e = this.canvas.vptCoords.tl,
          i = this.canvas.vptCoords.br;
      return this.intersectsWithRect(e, i, !0, t) ? !0 : this._containsCenterOfCanvas(e, i, t);
    },
    _getImageLines: function _getImageLines(t) {
      return {
        topline: {
          o: t.tl,
          d: t.tr
        },
        rightline: {
          o: t.tr,
          d: t.br
        },
        bottomline: {
          o: t.br,
          d: t.bl
        },
        leftline: {
          o: t.bl,
          d: t.tl
        }
      };
    },
    _findCrossPoints: function _findCrossPoints(t, e) {
      var i,
          r,
          n,
          s,
          o,
          a,
          c = 0;

      for (var h in e) {
        if (a = e[h], !(a.o.y < t.y && a.d.y < t.y || a.o.y >= t.y && a.d.y >= t.y || (a.o.x === a.d.x && a.o.x >= t.x ? o = a.o.x : (i = 0, r = (a.d.y - a.o.y) / (a.d.x - a.o.x), n = t.y - i * t.x, s = a.o.y - r * a.o.x, o = -(n - s) / (i - r)), o >= t.x && (c += 1), 2 !== c))) break;
      }

      return c;
    },
    getBoundingRect: function getBoundingRect(t, e) {
      var i = this.getCoords(t, e);
      return fabric.util.makeBoundingBoxFromPoints(i);
    },
    getScaledWidth: function getScaledWidth() {
      return this._getTransformedDimensions().x;
    },
    getScaledHeight: function getScaledHeight() {
      return this._getTransformedDimensions().y;
    },
    _constrainScale: function _constrainScale(t) {
      return Math.abs(t) < this.minScaleLimit ? 0 > t ? -this.minScaleLimit : this.minScaleLimit : 0 === t ? 1e-4 : t;
    },
    scale: function scale(t) {
      return this._set("scaleX", t), this._set("scaleY", t), this.setCoords();
    },
    scaleToWidth: function scaleToWidth(t, e) {
      var i = this.getBoundingRect(e).width / this.getScaledWidth();
      return this.scale(t / this.width / i);
    },
    scaleToHeight: function scaleToHeight(t, e) {
      var i = this.getBoundingRect(e).height / this.getScaledHeight();
      return this.scale(t / this.height / i);
    },
    calcCoords: function calcCoords(t) {
      var n = this._calcRotateMatrix(),
          s = this._calcTranslateMatrix(),
          o = i(s, n),
          a = this.getViewportTransform(),
          c = t ? o : i(a, o),
          h = this._getTransformedDimensions(),
          l = h.x / 2,
          u = h.y / 2,
          f = r({
        x: -l,
        y: -u
      }, c),
          d = r({
        x: l,
        y: -u
      }, c),
          g = r({
        x: -l,
        y: u
      }, c),
          p = r({
        x: l,
        y: u
      }, c);

      if (!t) {
        var v = this.padding,
            b = e(this.angle),
            m = fabric.util.cos(b),
            y = fabric.util.sin(b),
            _ = m * v,
            C = y * v,
            x = _ + C,
            w = _ - C;

        v && (f.x -= w, f.y -= x, d.x += x, d.y -= w, g.x -= x, g.y += w, p.x += w, p.y += x);
        var S = new fabric.Point((f.x + g.x) / 2, (f.y + g.y) / 2),
            O = new fabric.Point((d.x + f.x) / 2, (d.y + f.y) / 2),
            T = new fabric.Point((p.x + d.x) / 2, (p.y + d.y) / 2),
            k = new fabric.Point((p.x + g.x) / 2, (p.y + g.y) / 2),
            j = new fabric.Point(O.x + y * this.rotatingPointOffset, O.y - m * this.rotatingPointOffset);
      }

      var E = {
        tl: f,
        tr: d,
        br: p,
        bl: g
      };
      return t || (E.ml = S, E.mt = O, E.mr = T, E.mb = k, E.mtr = j), E;
    },
    setCoords: function setCoords(t, e) {
      return this.oCoords = this.calcCoords(t), e || (this.aCoords = this.calcCoords(!0)), t || this._setCornerCoords && this._setCornerCoords(), this;
    },
    _calcRotateMatrix: function _calcRotateMatrix() {
      if (this.angle) {
        var t = e(this.angle),
            i = fabric.util.cos(t),
            r = fabric.util.sin(t);
        return [i, r, -r, i, 0, 0];
      }

      return fabric.iMatrix.concat();
    },
    _calcTranslateMatrix: function _calcTranslateMatrix() {
      var t = this.getCenterPoint();
      return [1, 0, 0, 1, t.x, t.y];
    },
    transformMatrixKey: function transformMatrixKey(t) {
      var e = "_",
          i = "";
      return !t && this.group && (i = this.group.transformMatrixKey(t) + e), i + this.top + e + this.left + e + this.scaleX + e + this.scaleY + e + this.skewX + e + this.skewY + e + this.angle + e + this.originX + e + this.originY + e + this.width + e + this.height + e + this.strokeWidth + this.flipX + this.flipY;
    },
    calcTransformMatrix: function calcTransformMatrix(t) {
      if (t) return this.calcOwnMatrix();
      var e = this.transformMatrixKey(),
          r = this.matrixCache || (this.matrixCache = {});
      if (r.key === e) return r.value;
      var n = this.calcOwnMatrix();
      return this.group && (n = i(this.group.calcTransformMatrix(), n)), r.key = e, r.value = n, n;
    },
    calcOwnMatrix: function calcOwnMatrix() {
      var t = this.transformMatrixKey(!0),
          e = this.ownMatrixCache || (this.ownMatrixCache = {});
      if (e.key === t) return e.value;

      var r,
          n = this._calcTranslateMatrix(),
          s = this._calcDimensionsTransformMatrix(this.skewX, this.skewY, !0);

      return this.angle && (r = this._calcRotateMatrix(), n = i(n, r)), n = i(n, s), e.key = t, e.value = n, n;
    },
    _calcDimensionsTransformMatrix: function _calcDimensionsTransformMatrix(t, r, n) {
      var s,
          o = this.scaleX * (n && this.flipX ? -1 : 1),
          a = this.scaleY * (n && this.flipY ? -1 : 1),
          c = [o, 0, 0, a, 0, 0];
      return t && (s = [1, 0, Math.tan(e(t)), 1], c = i(c, s, !0)), r && (s = [1, Math.tan(e(r)), 0, 1], c = i(c, s, !0)), c;
    },
    _getNonTransformedDimensions: function _getNonTransformedDimensions() {
      var t = this.strokeWidth,
          e = this.width + t,
          i = this.height + t;
      return {
        x: e,
        y: i
      };
    },
    _getTransformedDimensions: function _getTransformedDimensions(t, e) {
      "undefined" == typeof t && (t = this.skewX), "undefined" == typeof e && (e = this.skewY);

      var i = this._getNonTransformedDimensions();

      if (0 === t && 0 === e) return {
        x: i.x * this.scaleX,
        y: i.y * this.scaleY
      };

      var r,
          n,
          s = i.x / 2,
          o = i.y / 2,
          a = [{
        x: -s,
        y: -o
      }, {
        x: s,
        y: -o
      }, {
        x: -s,
        y: o
      }, {
        x: s,
        y: o
      }],
          c = this._calcDimensionsTransformMatrix(t, e, !1);

      for (r = 0; r < a.length; r++) {
        a[r] = fabric.util.transformPoint(a[r], c);
      }

      return n = fabric.util.makeBoundingBoxFromPoints(a), {
        x: n.width,
        y: n.height
      };
    },
    _calculateCurrentDimensions: function _calculateCurrentDimensions() {
      var t = this.getViewportTransform(),
          e = this._getTransformedDimensions(),
          i = fabric.util.transformPoint(e, t, !0);

      return i.scalarAdd(2 * this.padding);
    }
  });
}();
fabric.util.object.extend(fabric.Object.prototype, {
  sendToBack: function sendToBack() {
    return this.group ? fabric.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas.sendToBack(this), this;
  },
  bringToFront: function bringToFront() {
    return this.group ? fabric.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas.bringToFront(this), this;
  },
  sendBackwards: function sendBackwards(t) {
    return this.group ? fabric.StaticCanvas.prototype.sendBackwards.call(this.group, this, t) : this.canvas.sendBackwards(this, t), this;
  },
  bringForward: function bringForward(t) {
    return this.group ? fabric.StaticCanvas.prototype.bringForward.call(this.group, this, t) : this.canvas.bringForward(this, t), this;
  },
  moveTo: function moveTo(t) {
    return this.group && "activeSelection" !== this.group.type ? fabric.StaticCanvas.prototype.moveTo.call(this.group, this, t) : this.canvas.moveTo(this, t), this;
  }
});
!function () {
  function t(t, e) {
    if (e) {
      if (e.toLive) return t + ": url(#SVGID_" + e.id + "); ";
      var i = new fabric.Color(e),
          r = t + ": " + i.toRgb() + "; ",
          n = i.getAlpha();
      return 1 !== n && (r += t + "-opacity: " + n.toString() + "; "), r;
    }

    return t + ": none; ";
  }

  var e = fabric.util.toFixed;
  fabric.util.object.extend(fabric.Object.prototype, {
    getSvgStyles: function getSvgStyles(e) {
      var i = this.fillRule ? this.fillRule : "nonzero",
          r = this.strokeWidth ? this.strokeWidth : "0",
          n = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none",
          s = this.strokeDashOffset ? this.strokeDashOffset : "0",
          o = this.strokeLineCap ? this.strokeLineCap : "butt",
          a = this.strokeLineJoin ? this.strokeLineJoin : "miter",
          c = this.strokeMiterLimit ? this.strokeMiterLimit : "4",
          h = "undefined" != typeof this.opacity ? this.opacity : "1",
          l = this.visible ? "" : " visibility: hidden;",
          u = e ? "" : this.getSvgFilter(),
          f = t("fill", this.fill),
          d = t("stroke", this.stroke);
      return [d, "stroke-width: ", r, "; ", "stroke-dasharray: ", n, "; ", "stroke-linecap: ", o, "; ", "stroke-dashoffset: ", s, "; ", "stroke-linejoin: ", a, "; ", "stroke-miterlimit: ", c, "; ", f, "fill-rule: ", i, "; ", "opacity: ", h, ";", u, l].join("");
    },
    getSvgSpanStyles: function getSvgSpanStyles(e, i) {
      var r = "; ",
          n = e.fontFamily ? "font-family: " + (-1 === e.fontFamily.indexOf("'") && -1 === e.fontFamily.indexOf('"') ? "'" + e.fontFamily + "'" : e.fontFamily) + r : "",
          s = e.strokeWidth ? "stroke-width: " + e.strokeWidth + r : "",
          n = n,
          o = e.fontSize ? "font-size: " + e.fontSize + "px" + r : "",
          a = e.fontStyle ? "font-style: " + e.fontStyle + r : "",
          c = e.fontWeight ? "font-weight: " + e.fontWeight + r : "",
          h = e.fill ? t("fill", e.fill) : "",
          l = e.stroke ? t("stroke", e.stroke) : "",
          u = this.getSvgTextDecoration(e),
          f = e.deltaY ? "baseline-shift: " + -e.deltaY + "; " : "";
      return u && (u = "text-decoration: " + u + r), [l, s, n, o, a, c, u, h, f, i ? "white-space: pre; " : ""].join("");
    },
    getSvgTextDecoration: function getSvgTextDecoration(t) {
      return "overline" in t || "underline" in t || "linethrough" in t ? (t.overline ? "overline " : "") + (t.underline ? "underline " : "") + (t.linethrough ? "line-through " : "") : "";
    },
    getSvgFilter: function getSvgFilter() {
      return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : "";
    },
    getSvgCommons: function getSvgCommons() {
      return [this.id ? 'id="' + this.id + '" ' : "", this.clipPath ? 'clip-path="url(#' + this.clipPath.clipPathId + ')" ' : ""].join("");
    },
    getSvgTransform: function getSvgTransform(t, i) {
      var r = t ? this.calcTransformMatrix() : this.calcOwnMatrix(),
          n = r.map(function (t) {
        return e(t, fabric.Object.NUM_FRACTION_DIGITS);
      }).join(" ");
      return 'transform="matrix(' + n + ")" + (i || "") + this.getSvgTransformMatrix() + '" ';
    },
    getSvgTransformMatrix: function getSvgTransformMatrix() {
      return this.transformMatrix ? " matrix(" + this.transformMatrix.join(" ") + ")" : "";
    },
    _setSVGBg: function _setSVGBg(t) {
      if (this.backgroundColor) {
        var i = fabric.Object.NUM_FRACTION_DIGITS;
        t.push("		<rect ", this._getFillAttributes(this.backgroundColor), ' x="', e(-this.width / 2, i), '" y="', e(-this.height / 2, i), '" width="', e(this.width, i), '" height="', e(this.height, i), '"></rect>\n');
      }
    },
    toSVG: function toSVG(t) {
      return this._createBaseSVGMarkup(this._toSVG(), {
        reviver: t
      });
    },
    toClipPathSVG: function toClipPathSVG(t) {
      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), {
        reviver: t
      });
    },
    _createBaseClipPathSVGMarkup: function _createBaseClipPathSVGMarkup(t, e) {
      e = e || {};
      var i = e.reviver,
          r = e.additionalTransform || "",
          n = [this.getSvgTransform(!0, r), this.getSvgCommons()].join(""),
          s = t.indexOf("COMMON_PARTS");
      return t[s] = n, i ? i(t.join("")) : t.join("");
    },
    _createBaseSVGMarkup: function _createBaseSVGMarkup(t, e) {
      e = e || {};
      var i,
          r,
          n = e.noStyle,
          s = e.withShadow,
          o = e.reviver,
          a = n ? "" : 'style="' + this.getSvgStyles() + '" ',
          c = s ? 'style="' + this.getSvgFilter() + '" ' : "",
          h = this.clipPath,
          l = this.clipPath && this.clipPath.absolutePositioned,
          u = [],
          f = t.indexOf("COMMON_PARTS"),
          d = e.additionalTransform;
      return h && (h.clipPathId = "CLIPPATH_" + fabric.Object.__uid++, r = '<clipPath id="' + h.clipPathId + '" >\n' + this.clipPath.toClipPathSVG(o) + "</clipPath>\n"), l && u.push("<g ", c, this.getSvgCommons(), " >\n"), u.push("<g ", this.getSvgTransform(!1), l ? "" : c + this.getSvgCommons(), " >\n"), i = [a, n ? "" : this.addPaintOrder(), " ", d ? 'transform="' + d + '" ' : ""].join(""), t[f] = i, this.fill && this.fill.toLive && u.push(this.fill.toSVG(this, !1)), this.stroke && this.stroke.toLive && u.push(this.stroke.toSVG(this, !1)), this.shadow && u.push(this.shadow.toSVG(this)), h && u.push(r), u.push(t.join("")), u.push("</g>\n"), l && u.push("</g>\n"), o ? o(u.join("")) : u.join("");
    },
    addPaintOrder: function addPaintOrder() {
      return "fill" !== this.paintFirst ? ' paint-order="' + this.paintFirst + '" ' : "";
    }
  });
}();
!function () {
  function t(t, e, r) {
    var n = {},
        s = !0;
    r.forEach(function (e) {
      n[e] = t[e];
    }), i(t[e], n, s);
  }

  function e(t, i, r) {
    if (t === i) return !0;

    if (Array.isArray(t)) {
      if (!Array.isArray(i) || t.length !== i.length) return !1;

      for (var n = 0, s = t.length; s > n; n++) {
        if (!e(t[n], i[n])) return !1;
      }

      return !0;
    }

    if (t && "object" == _typeof(t)) {
      var o,
          a = Object.keys(t);
      if (!i || "object" != _typeof(i) || !r && a.length !== Object.keys(i).length) return !1;

      for (var n = 0, s = a.length; s > n; n++) {
        if (o = a[n], "canvas" !== o && !e(t[o], i[o])) return !1;
      }

      return !0;
    }
  }

  var i = fabric.util.object.extend,
      r = "stateProperties";
  fabric.util.object.extend(fabric.Object.prototype, {
    hasStateChanged: function hasStateChanged(t) {
      t = t || r;
      var i = "_" + t;
      return Object.keys(this[i]).length < this[t].length ? !0 : !e(this[i], this, !0);
    },
    saveState: function saveState(e) {
      var i = e && e.propertySet || r,
          n = "_" + i;
      return this[n] ? (t(this, n, this[i]), e && e.stateProperties && t(this, n, e.stateProperties), this) : this.setupState(e);
    },
    setupState: function setupState(t) {
      t = t || {};
      var e = t.propertySet || r;
      return t.propertySet = e, this["_" + e] = {}, this.saveState(t), this;
    }
  });
}();
!function () {
  var t = fabric.util.degreesToRadians;
  fabric.util.object.extend(fabric.Object.prototype, {
    _controlsVisibility: null,
    _findTargetCorner: function _findTargetCorner(t) {
      if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this) return !1;
      var e,
          i,
          r = t.x,
          n = t.y;
      this.__corner = 0;

      for (var s in this.oCoords) {
        if (this.isControlVisible(s) && ("mtr" !== s || this.hasRotatingPoint) && (!this.get("lockUniScaling") || "mt" !== s && "mr" !== s && "mb" !== s && "ml" !== s) && (i = this._getImageLines(this.oCoords[s].corner), e = this._findCrossPoints({
          x: r,
          y: n
        }, i), 0 !== e && e % 2 === 1)) return this.__corner = s, s;
      }

      return !1;
    },
    _setCornerCoords: function _setCornerCoords() {
      var e,
          i,
          r = this.oCoords,
          n = t(45 - this.angle),
          s = .707106 * this.cornerSize,
          o = s * fabric.util.cos(n),
          a = s * fabric.util.sin(n);

      for (var c in r) {
        e = r[c].x, i = r[c].y, r[c].corner = {
          tl: {
            x: e - a,
            y: i - o
          },
          tr: {
            x: e + o,
            y: i - a
          },
          bl: {
            x: e - o,
            y: i + a
          },
          br: {
            x: e + a,
            y: i + o
          }
        };
      }
    },
    drawSelectionBackground: function drawSelectionBackground(e) {
      if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this) return this;
      e.save();

      var i = this.getCenterPoint(),
          r = this._calculateCurrentDimensions(),
          n = this.canvas.viewportTransform;

      return e.translate(i.x, i.y), e.scale(1 / n[0], 1 / n[3]), e.rotate(t(this.angle)), e.fillStyle = this.selectionBackgroundColor, e.fillRect(-r.x / 2, -r.y / 2, r.x, r.y), e.restore(), this;
    },
    drawBorders: function drawBorders(t, e) {
      e = e || {};

      var i = this._calculateCurrentDimensions(),
          r = 1 / this.borderScaleFactor,
          n = i.x + r,
          s = i.y + r,
          o = "undefined" != typeof e.hasRotatingPoint ? e.hasRotatingPoint : this.hasRotatingPoint,
          a = "undefined" != typeof e.hasControls ? e.hasControls : this.hasControls,
          c = "undefined" != typeof e.rotatingPointOffset ? e.rotatingPointOffset : this.rotatingPointOffset;

      if (t.save(), t.strokeStyle = e.borderColor || this.borderColor, this._setLineDash(t, e.borderDashArray || this.borderDashArray, null), t.strokeRect(-n / 2, -s / 2, n, s), o && this.isControlVisible("mtr") && a) {
        var h = -s / 2;
        t.beginPath(), t.moveTo(0, h), t.lineTo(0, h - c), t.stroke();
      }

      return t.restore(), this;
    },
    drawBordersInGroup: function drawBordersInGroup(t, e, i) {
      i = i || {};

      var r = this._getNonTransformedDimensions(),
          n = fabric.util.customTransformMatrix(e.scaleX, e.scaleY, e.skewX),
          s = fabric.util.transformPoint(r, n),
          o = 1 / this.borderScaleFactor,
          a = s.x + o,
          c = s.y + o;

      return t.save(), this._setLineDash(t, i.borderDashArray || this.borderDashArray, null), t.strokeStyle = i.borderColor || this.borderColor, t.strokeRect(-a / 2, -c / 2, a, c), t.restore(), this;
    },
    drawControls: function drawControls(t, e) {
      e = e || {};

      var i = this._calculateCurrentDimensions(),
          r = i.x,
          n = i.y,
          s = e.cornerSize || this.cornerSize,
          o = -(r + s) / 2,
          a = -(n + s) / 2,
          c = "undefined" != typeof e.transparentCorners ? e.transparentCorners : this.transparentCorners,
          h = "undefined" != typeof e.hasRotatingPoint ? e.hasRotatingPoint : this.hasRotatingPoint,
          l = c ? "stroke" : "fill";

      return t.save(), t.strokeStyle = t.fillStyle = e.cornerColor || this.cornerColor, this.transparentCorners || (t.strokeStyle = e.cornerStrokeColor || this.cornerStrokeColor), this._setLineDash(t, e.cornerDashArray || this.cornerDashArray, null), this._drawControl("tl", t, l, o, a, e), this._drawControl("tr", t, l, o + r, a, e), this._drawControl("bl", t, l, o, a + n, e), this._drawControl("br", t, l, o + r, a + n, e), this.get("lockUniScaling") || (this._drawControl("mt", t, l, o + r / 2, a, e), this._drawControl("mb", t, l, o + r / 2, a + n, e), this._drawControl("mr", t, l, o + r, a + n / 2, e), this._drawControl("ml", t, l, o, a + n / 2, e)), h && this._drawControl("mtr", t, l, o + r / 2, a - this.rotatingPointOffset, e), t.restore(), this;
    },
    _drawControl: function _drawControl(t, e, i, r, n, s) {
      if (s = s || {}, this.isControlVisible(t)) {
        var o = this.cornerSize,
            a = !this.transparentCorners && this.cornerStrokeColor;

        switch (s.cornerStyle || this.cornerStyle) {
          case "circle":
            e.beginPath(), e.arc(r + o / 2, n + o / 2, o / 2, 0, 2 * Math.PI, !1), e[i](), a && e.stroke();
            break;

          default:
            this.transparentCorners || e.clearRect(r, n, o, o), e[i + "Rect"](r, n, o, o), a && e.strokeRect(r, n, o, o);
        }
      }
    },
    isControlVisible: function isControlVisible(t) {
      return this._getControlsVisibility()[t];
    },
    setControlVisible: function setControlVisible(t, e) {
      return this._getControlsVisibility()[t] = e, this;
    },
    setControlsVisibility: function setControlsVisibility(t) {
      t || (t = {});

      for (var e in t) {
        this.setControlVisible(e, t[e]);
      }

      return this;
    },
    _getControlsVisibility: function _getControlsVisibility() {
      return this._controlsVisibility || (this._controlsVisibility = {
        tl: !0,
        tr: !0,
        br: !0,
        bl: !0,
        ml: !0,
        mt: !0,
        mr: !0,
        mb: !0,
        mtr: !0
      }), this._controlsVisibility;
    },
    onDeselect: function onDeselect() {},
    onSelect: function onSelect() {}
  });
}();
fabric.util.object.extend(fabric.StaticCanvas.prototype, {
  FX_DURATION: 500,
  fxCenterObjectH: function fxCenterObjectH(t, e) {
    e = e || {};

    var i = function i() {},
        r = e.onComplete || i,
        n = e.onChange || i,
        s = this;

    return fabric.util.animate({
      startValue: t.left,
      endValue: this.getCenter().left,
      duration: this.FX_DURATION,
      onChange: function onChange(e) {
        t.set("left", e), s.requestRenderAll(), n();
      },
      onComplete: function onComplete() {
        t.setCoords(), r();
      }
    }), this;
  },
  fxCenterObjectV: function fxCenterObjectV(t, e) {
    e = e || {};

    var i = function i() {},
        r = e.onComplete || i,
        n = e.onChange || i,
        s = this;

    return fabric.util.animate({
      startValue: t.top,
      endValue: this.getCenter().top,
      duration: this.FX_DURATION,
      onChange: function onChange(e) {
        t.set("top", e), s.requestRenderAll(), n();
      },
      onComplete: function onComplete() {
        t.setCoords(), r();
      }
    }), this;
  },
  fxRemove: function fxRemove(t, e) {
    e = e || {};

    var i = function i() {},
        r = e.onComplete || i,
        n = e.onChange || i,
        s = this;

    return fabric.util.animate({
      startValue: t.opacity,
      endValue: 0,
      duration: this.FX_DURATION,
      onChange: function onChange(e) {
        t.set("opacity", e), s.requestRenderAll(), n();
      },
      onComplete: function onComplete() {
        s.remove(t), r();
      }
    }), this;
  }
}), fabric.util.object.extend(fabric.Object.prototype, {
  animate: function animate() {
    if (arguments[0] && "object" == _typeof(arguments[0])) {
      var t,
          e,
          i = [];

      for (t in arguments[0]) {
        i.push(t);
      }

      for (var r = 0, n = i.length; n > r; r++) {
        t = i[r], e = r !== n - 1, this._animate(t, arguments[0][t], arguments[1], e);
      }
    } else this._animate.apply(this, arguments);

    return this;
  },
  _animate: function _animate(t, e, i, r) {
    var n,
        s = this;
    e = e.toString(), i = i ? fabric.util.object.clone(i) : {}, ~t.indexOf(".") && (n = t.split("."));
    var o = n ? this.get(n[0])[n[1]] : this.get(t);
    "from" in i || (i.from = o), e = ~e.indexOf("=") ? o + parseFloat(e.replace("=", "")) : parseFloat(e), fabric.util.animate({
      startValue: i.from,
      endValue: e,
      byValue: i.by,
      easing: i.easing,
      duration: i.duration,
      abort: i.abort && function () {
        return i.abort.call(s);
      },
      onChange: function onChange(e, o, a) {
        n ? s[n[0]][n[1]] = e : s.set(t, e), r || i.onChange && i.onChange(e, o, a);
      },
      onComplete: function onComplete(t, e, n) {
        r || (s.setCoords(), i.onComplete && i.onComplete(t, e, n));
      }
    });
  }
});
!function (t) {
  "use strict";

  function e(t, e) {
    var i = t.origin,
        r = t.axis1,
        n = t.axis2,
        s = t.dimension,
        o = e.nearest,
        a = e.center,
        c = e.farthest;
    return function () {
      switch (this.get(i)) {
        case o:
          return Math.min(this.get(r), this.get(n));

        case a:
          return Math.min(this.get(r), this.get(n)) + .5 * this.get(s);

        case c:
          return Math.max(this.get(r), this.get(n));
      }
    };
  }

  var i = t.fabric || (t.fabric = {}),
      r = i.util.object.extend,
      n = i.util.object.clone,
      s = {
    x1: 1,
    x2: 1,
    y1: 1,
    y2: 1
  },
      o = i.StaticCanvas.supports("setLineDash");
  return i.Line ? void i.warn("fabric.Line is already defined") : (i.Line = i.util.createClass(i.Object, {
    type: "line",
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    cacheProperties: i.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"),
    initialize: function initialize(t, e) {
      t || (t = [0, 0, 0, 0]), this.callSuper("initialize", e), this.set("x1", t[0]), this.set("y1", t[1]), this.set("x2", t[2]), this.set("y2", t[3]), this._setWidthHeight(e);
    },
    _setWidthHeight: function _setWidthHeight(t) {
      t || (t = {}), this.width = Math.abs(this.x2 - this.x1), this.height = Math.abs(this.y2 - this.y1), this.left = "left" in t ? t.left : this._getLeftToOriginX(), this.top = "top" in t ? t.top : this._getTopToOriginY();
    },
    _set: function _set(t, e) {
      return this.callSuper("_set", t, e), "undefined" != typeof s[t] && this._setWidthHeight(), this;
    },
    _getLeftToOriginX: e({
      origin: "originX",
      axis1: "x1",
      axis2: "x2",
      dimension: "width"
    }, {
      nearest: "left",
      center: "center",
      farthest: "right"
    }),
    _getTopToOriginY: e({
      origin: "originY",
      axis1: "y1",
      axis2: "y2",
      dimension: "height"
    }, {
      nearest: "top",
      center: "center",
      farthest: "bottom"
    }),
    _render: function _render(t) {
      if (t.beginPath(), !this.strokeDashArray || this.strokeDashArray && o) {
        var e = this.calcLinePoints();
        t.moveTo(e.x1, e.y1), t.lineTo(e.x2, e.y2);
      }

      t.lineWidth = this.strokeWidth;
      var i = t.strokeStyle;
      t.strokeStyle = this.stroke || t.fillStyle, this.stroke && this._renderStroke(t), t.strokeStyle = i;
    },
    _renderDashedStroke: function _renderDashedStroke(t) {
      var e = this.calcLinePoints();
      t.beginPath(), i.util.drawDashedLine(t, e.x1, e.y1, e.x2, e.y2, this.strokeDashArray), t.closePath();
    },
    _findCenterFromElement: function _findCenterFromElement() {
      return {
        x: (this.x1 + this.x2) / 2,
        y: (this.y1 + this.y2) / 2
      };
    },
    toObject: function toObject(t) {
      return r(this.callSuper("toObject", t), this.calcLinePoints());
    },
    _getNonTransformedDimensions: function _getNonTransformedDimensions() {
      var t = this.callSuper("_getNonTransformedDimensions");
      return "butt" === this.strokeLineCap && (0 === this.width && (t.y -= this.strokeWidth), 0 === this.height && (t.x -= this.strokeWidth)), t;
    },
    calcLinePoints: function calcLinePoints() {
      var t = this.x1 <= this.x2 ? -1 : 1,
          e = this.y1 <= this.y2 ? -1 : 1,
          i = t * this.width * .5,
          r = e * this.height * .5,
          n = t * this.width * -.5,
          s = e * this.height * -.5;
      return {
        x1: i,
        x2: n,
        y1: r,
        y2: s
      };
    },
    _toSVG: function _toSVG() {
      var t = this.calcLinePoints();
      return ["<line ", "COMMON_PARTS", 'x1="', t.x1, '" y1="', t.y1, '" x2="', t.x2, '" y2="', t.y2, '" />\n'];
    }
  }), i.Line.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")), i.Line.fromElement = function (t, e, n) {
    n = n || {};
    var s = i.parseAttributes(t, i.Line.ATTRIBUTE_NAMES),
        o = [s.x1 || 0, s.y1 || 0, s.x2 || 0, s.y2 || 0];
    e(new i.Line(o, r(s, n)));
  }, void (i.Line.fromObject = function (t, e) {
    function r(t) {
      delete t.points, e && e(t);
    }

    var s = n(t, !0);
    s.points = [t.x1, t.y1, t.x2, t.y2], i.Object._fromObject("Line", s, r, "points");
  }));
}( true ? exports : undefined);
!function (t) {
  "use strict";

  function e(t) {
    return "radius" in t && t.radius >= 0;
  }

  var i = t.fabric || (t.fabric = {}),
      r = Math.PI;
  return i.Circle ? void i.warn("fabric.Circle is already defined.") : (i.Circle = i.util.createClass(i.Object, {
    type: "circle",
    radius: 0,
    startAngle: 0,
    endAngle: 2 * r,
    cacheProperties: i.Object.prototype.cacheProperties.concat("radius", "startAngle", "endAngle"),
    _set: function _set(t, e) {
      return this.callSuper("_set", t, e), "radius" === t && this.setRadius(e), this;
    },
    toObject: function toObject(t) {
      return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(t));
    },
    _toSVG: function _toSVG() {
      var t,
          e = 0,
          n = 0,
          s = (this.endAngle - this.startAngle) % (2 * r);
      if (0 === s) t = ["<circle ", "COMMON_PARTS", 'cx="' + e + '" cy="' + n + '" ', 'r="', this.radius, '" />\n'];else {
        var o = i.util.cos(this.startAngle) * this.radius,
            a = i.util.sin(this.startAngle) * this.radius,
            c = i.util.cos(this.endAngle) * this.radius,
            h = i.util.sin(this.endAngle) * this.radius,
            l = s > r ? "1" : "0";
        t = ['<path d="M ' + o + " " + a, " A " + this.radius + " " + this.radius, " 0 ", +l + " 1", " " + c + " " + h, '"', "COMMON_PARTS", " />\n"];
      }
      return t;
    },
    _render: function _render(t) {
      t.beginPath(), t.arc(0, 0, this.radius, this.startAngle, this.endAngle, !1), this._renderPaintInOrder(t);
    },
    getRadiusX: function getRadiusX() {
      return this.get("radius") * this.get("scaleX");
    },
    getRadiusY: function getRadiusY() {
      return this.get("radius") * this.get("scaleY");
    },
    setRadius: function setRadius(t) {
      return this.radius = t, this.set("width", 2 * t).set("height", 2 * t);
    }
  }), i.Circle.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")), i.Circle.fromElement = function (t, r) {
    var n = i.parseAttributes(t, i.Circle.ATTRIBUTE_NAMES);
    if (!e(n)) throw new Error("value of `r` attribute is required and can not be negative");
    n.left = (n.left || 0) - n.radius, n.top = (n.top || 0) - n.radius, r(new i.Circle(n));
  }, void (i.Circle.fromObject = function (t, e) {
    return i.Object._fromObject("Circle", t, e);
  }));
}( true ? exports : undefined);
!function (t) {
  "use strict";

  var e = t.fabric || (t.fabric = {});
  return e.Triangle ? void e.warn("fabric.Triangle is already defined") : (e.Triangle = e.util.createClass(e.Object, {
    type: "triangle",
    width: 100,
    height: 100,
    _render: function _render(t) {
      var e = this.width / 2,
          i = this.height / 2;
      t.beginPath(), t.moveTo(-e, i), t.lineTo(0, -i), t.lineTo(e, i), t.closePath(), this._renderPaintInOrder(t);
    },
    _renderDashedStroke: function _renderDashedStroke(t) {
      var i = this.width / 2,
          r = this.height / 2;
      t.beginPath(), e.util.drawDashedLine(t, -i, r, 0, -r, this.strokeDashArray), e.util.drawDashedLine(t, 0, -r, i, r, this.strokeDashArray), e.util.drawDashedLine(t, i, r, -i, r, this.strokeDashArray), t.closePath();
    },
    _toSVG: function _toSVG() {
      var t = this.width / 2,
          e = this.height / 2,
          i = [-t + " " + e, "0 " + -e, t + " " + e].join(",");
      return ["<polygon ", "COMMON_PARTS", 'points="', i, '" />'];
    }
  }), void (e.Triangle.fromObject = function (t, i) {
    return e.Object._fromObject("Triangle", t, i);
  }));
}( true ? exports : undefined);
!function (t) {
  "use strict";

  var e = t.fabric || (t.fabric = {}),
      i = 2 * Math.PI;
  return e.Ellipse ? void e.warn("fabric.Ellipse is already defined.") : (e.Ellipse = e.util.createClass(e.Object, {
    type: "ellipse",
    rx: 0,
    ry: 0,
    cacheProperties: e.Object.prototype.cacheProperties.concat("rx", "ry"),
    initialize: function initialize(t) {
      this.callSuper("initialize", t), this.set("rx", t && t.rx || 0), this.set("ry", t && t.ry || 0);
    },
    _set: function _set(t, e) {
      switch (this.callSuper("_set", t, e), t) {
        case "rx":
          this.rx = e, this.set("width", 2 * e);
          break;

        case "ry":
          this.ry = e, this.set("height", 2 * e);
      }

      return this;
    },
    getRx: function getRx() {
      return this.get("rx") * this.get("scaleX");
    },
    getRy: function getRy() {
      return this.get("ry") * this.get("scaleY");
    },
    toObject: function toObject(t) {
      return this.callSuper("toObject", ["rx", "ry"].concat(t));
    },
    _toSVG: function _toSVG() {
      return ["<ellipse ", "COMMON_PARTS", 'cx="0" cy="0" ', 'rx="', this.rx, '" ry="', this.ry, '" />\n'];
    },
    _render: function _render(t) {
      t.beginPath(), t.save(), t.transform(1, 0, 0, this.ry / this.rx, 0, 0), t.arc(0, 0, this.rx, 0, i, !1), t.restore(), this._renderPaintInOrder(t);
    }
  }), e.Ellipse.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")), e.Ellipse.fromElement = function (t, i) {
    var r = e.parseAttributes(t, e.Ellipse.ATTRIBUTE_NAMES);
    r.left = (r.left || 0) - r.rx, r.top = (r.top || 0) - r.ry, i(new e.Ellipse(r));
  }, void (e.Ellipse.fromObject = function (t, i) {
    return e.Object._fromObject("Ellipse", t, i);
  }));
}( true ? exports : undefined);
!function (t) {
  "use strict";

  var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend;
  return e.Rect ? void e.warn("fabric.Rect is already defined") : (e.Rect = e.util.createClass(e.Object, {
    stateProperties: e.Object.prototype.stateProperties.concat("rx", "ry"),
    type: "rect",
    rx: 0,
    ry: 0,
    cacheProperties: e.Object.prototype.cacheProperties.concat("rx", "ry"),
    initialize: function initialize(t) {
      this.callSuper("initialize", t), this._initRxRy();
    },
    _initRxRy: function _initRxRy() {
      this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry);
    },
    _render: function _render(t) {
      var e = this.rx ? Math.min(this.rx, this.width / 2) : 0,
          i = this.ry ? Math.min(this.ry, this.height / 2) : 0,
          r = this.width,
          n = this.height,
          s = -this.width / 2,
          o = -this.height / 2,
          a = 0 !== e || 0 !== i,
          c = .4477152502;
      t.beginPath(), t.moveTo(s + e, o), t.lineTo(s + r - e, o), a && t.bezierCurveTo(s + r - c * e, o, s + r, o + c * i, s + r, o + i), t.lineTo(s + r, o + n - i), a && t.bezierCurveTo(s + r, o + n - c * i, s + r - c * e, o + n, s + r - e, o + n), t.lineTo(s + e, o + n), a && t.bezierCurveTo(s + c * e, o + n, s, o + n - c * i, s, o + n - i), t.lineTo(s, o + i), a && t.bezierCurveTo(s, o + c * i, s + c * e, o, s + e, o), t.closePath(), this._renderPaintInOrder(t);
    },
    _renderDashedStroke: function _renderDashedStroke(t) {
      var i = -this.width / 2,
          r = -this.height / 2,
          n = this.width,
          s = this.height;
      t.beginPath(), e.util.drawDashedLine(t, i, r, i + n, r, this.strokeDashArray), e.util.drawDashedLine(t, i + n, r, i + n, r + s, this.strokeDashArray), e.util.drawDashedLine(t, i + n, r + s, i, r + s, this.strokeDashArray), e.util.drawDashedLine(t, i, r + s, i, r, this.strokeDashArray), t.closePath();
    },
    toObject: function toObject(t) {
      return this.callSuper("toObject", ["rx", "ry"].concat(t));
    },
    _toSVG: function _toSVG() {
      var t = -this.width / 2,
          e = -this.height / 2;
      return ["<rect ", "COMMON_PARTS", 'x="', t, '" y="', e, '" rx="', this.rx, '" ry="', this.ry, '" width="', this.width, '" height="', this.height, '" />\n'];
    }
  }), e.Rect.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")), e.Rect.fromElement = function (t, r, n) {
    if (!t) return r(null);
    n = n || {};
    var s = e.parseAttributes(t, e.Rect.ATTRIBUTE_NAMES);
    s.left = s.left || 0, s.top = s.top || 0;
    var o = new e.Rect(i(n ? e.util.object.clone(n) : {}, s));
    o.visible = o.visible && o.width > 0 && o.height > 0, r(o);
  }, void (e.Rect.fromObject = function (t, i) {
    return e.Object._fromObject("Rect", t, i);
  }));
}( true ? exports : undefined);
!function (t) {
  "use strict";

  var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend,
      r = e.util.array.min,
      n = e.util.array.max,
      s = e.util.toFixed;
  return e.Polyline ? void e.warn("fabric.Polyline is already defined") : (e.Polyline = e.util.createClass(e.Object, {
    type: "polyline",
    points: null,
    cacheProperties: e.Object.prototype.cacheProperties.concat("points"),
    initialize: function initialize(t, e) {
      e = e || {}, this.points = t || [], this.callSuper("initialize", e);

      var i = this._calcDimensions();

      "undefined" == typeof e.left && (this.left = i.left), "undefined" == typeof e.top && (this.top = i.top), this.width = i.width, this.height = i.height, this.pathOffset = {
        x: i.left + this.width / 2,
        y: i.top + this.height / 2
      };
    },
    _calcDimensions: function _calcDimensions() {
      var t = this.points,
          e = r(t, "x") || 0,
          i = r(t, "y") || 0,
          s = n(t, "x") || 0,
          o = n(t, "y") || 0,
          a = s - e,
          c = o - i;
      return {
        left: e,
        top: i,
        width: a,
        height: c
      };
    },
    toObject: function toObject(t) {
      return i(this.callSuper("toObject", t), {
        points: this.points.concat()
      });
    },
    _toSVG: function _toSVG() {
      for (var t = [], i = this.pathOffset.x, r = this.pathOffset.y, n = e.Object.NUM_FRACTION_DIGITS, o = 0, a = this.points.length; a > o; o++) {
        t.push(s(this.points[o].x - i, n), ",", s(this.points[o].y - r, n), " ");
      }

      return ["<" + this.type + " ", "COMMON_PARTS", 'points="', t.join(""), '" />\n'];
    },
    commonRender: function commonRender(t) {
      var e,
          i = this.points.length,
          r = this.pathOffset.x,
          n = this.pathOffset.y;
      if (!i || isNaN(this.points[i - 1].y)) return !1;
      t.beginPath(), t.moveTo(this.points[0].x - r, this.points[0].y - n);

      for (var s = 0; i > s; s++) {
        e = this.points[s], t.lineTo(e.x - r, e.y - n);
      }

      return !0;
    },
    _render: function _render(t) {
      this.commonRender(t) && this._renderPaintInOrder(t);
    },
    _renderDashedStroke: function _renderDashedStroke(t) {
      var i, r;
      t.beginPath();

      for (var n = 0, s = this.points.length; s > n; n++) {
        i = this.points[n], r = this.points[n + 1] || i, e.util.drawDashedLine(t, i.x, i.y, r.x, r.y, this.strokeDashArray);
      }
    },
    complexity: function complexity() {
      return this.get("points").length;
    }
  }), e.Polyline.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(), e.Polyline.fromElement = function (t, i, r) {
    if (!t) return i(null);
    r || (r = {});
    var n = e.parsePointsAttribute(t.getAttribute("points")),
        s = e.parseAttributes(t, e.Polyline.ATTRIBUTE_NAMES);
    i(new e.Polyline(n, e.util.object.extend(s, r)));
  }, void (e.Polyline.fromObject = function (t, i) {
    return e.Object._fromObject("Polyline", t, i, "points");
  }));
}( true ? exports : undefined);
!function (t) {
  "use strict";

  var e = t.fabric || (t.fabric = {}),
      i = e.util.object.extend;
  return e.Polygon ? void e.warn("fabric.Polygon is already defined") : (e.Polygon = e.util.createClass(e.Polyline, {
    type: "polygon",
    _render: function _render(t) {
      this.commonRender(t) && (t.closePath(), this._renderPaintInOrder(t));
    },
    _renderDashedStroke: function _renderDashedStroke(t) {
      this.callSuper("_renderDashedStroke", t), t.closePath();
    }
  }), e.Polygon.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(), e.Polygon.fromElement = function (t, r, n) {
    if (!t) return r(null);
    n || (n = {});
    var s = e.parsePointsAttribute(t.getAttribute("points")),
        o = e.parseAttributes(t, e.Polygon.ATTRIBUTE_NAMES);
    r(new e.Polygon(s, i(o, n)));
  }, void (e.Polygon.fromObject = function (t, i) {
    return e.Object._fromObject("Polygon", t, i, "points");
  }));
}( true ? exports : undefined);
!function (t) {
  "use strict";

  var e = t.fabric || (t.fabric = {}),
      i = e.util.array.min,
      r = e.util.array.max,
      n = e.util.object.extend,
      s = Object.prototype.toString,
      o = e.util.drawArc,
      a = e.util.toFixed,
      c = {
    m: 2,
    l: 2,
    h: 1,
    v: 1,
    c: 6,
    s: 4,
    q: 4,
    t: 2,
    a: 7
  },
      h = {
    m: "l",
    M: "L"
  };
  return e.Path ? void e.warn("fabric.Path is already defined") : (e.Path = e.util.createClass(e.Object, {
    type: "path",
    path: null,
    cacheProperties: e.Object.prototype.cacheProperties.concat("path", "fillRule"),
    stateProperties: e.Object.prototype.stateProperties.concat("path"),
    initialize: function initialize(t, e) {
      e = e || {}, this.callSuper("initialize", e), t || (t = []);
      var i = "[object Array]" === s.call(t);
      this.path = i ? t : t.match && t.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi), this.path && (i || (this.path = this._parsePath()), this._setPositionDimensions(e));
    },
    _setPositionDimensions: function _setPositionDimensions(t) {
      var e = this._parseDimensions();

      this.width = e.width, this.height = e.height, "undefined" == typeof t.left && (this.left = e.left), "undefined" == typeof t.top && (this.top = e.top), this.pathOffset = this.pathOffset || {
        x: e.left + this.width / 2,
        y: e.top + this.height / 2
      };
    },
    _renderPathCommands: function _renderPathCommands(t) {
      var e,
          i,
          r,
          n = null,
          s = 0,
          a = 0,
          c = 0,
          h = 0,
          l = 0,
          u = 0,
          f = -this.pathOffset.x,
          d = -this.pathOffset.y;
      t.beginPath();

      for (var g = 0, p = this.path.length; p > g; ++g) {
        switch (e = this.path[g], e[0]) {
          case "l":
            c += e[1], h += e[2], t.lineTo(c + f, h + d);
            break;

          case "L":
            c = e[1], h = e[2], t.lineTo(c + f, h + d);
            break;

          case "h":
            c += e[1], t.lineTo(c + f, h + d);
            break;

          case "H":
            c = e[1], t.lineTo(c + f, h + d);
            break;

          case "v":
            h += e[1], t.lineTo(c + f, h + d);
            break;

          case "V":
            h = e[1], t.lineTo(c + f, h + d);
            break;

          case "m":
            c += e[1], h += e[2], s = c, a = h, t.moveTo(c + f, h + d);
            break;

          case "M":
            c = e[1], h = e[2], s = c, a = h, t.moveTo(c + f, h + d);
            break;

          case "c":
            i = c + e[5], r = h + e[6], l = c + e[3], u = h + e[4], t.bezierCurveTo(c + e[1] + f, h + e[2] + d, l + f, u + d, i + f, r + d), c = i, h = r;
            break;

          case "C":
            c = e[5], h = e[6], l = e[3], u = e[4], t.bezierCurveTo(e[1] + f, e[2] + d, l + f, u + d, c + f, h + d);
            break;

          case "s":
            i = c + e[3], r = h + e[4], null === n[0].match(/[CcSs]/) ? (l = c, u = h) : (l = 2 * c - l, u = 2 * h - u), t.bezierCurveTo(l + f, u + d, c + e[1] + f, h + e[2] + d, i + f, r + d), l = c + e[1], u = h + e[2], c = i, h = r;
            break;

          case "S":
            i = e[3], r = e[4], null === n[0].match(/[CcSs]/) ? (l = c, u = h) : (l = 2 * c - l, u = 2 * h - u), t.bezierCurveTo(l + f, u + d, e[1] + f, e[2] + d, i + f, r + d), c = i, h = r, l = e[1], u = e[2];
            break;

          case "q":
            i = c + e[3], r = h + e[4], l = c + e[1], u = h + e[2], t.quadraticCurveTo(l + f, u + d, i + f, r + d), c = i, h = r;
            break;

          case "Q":
            i = e[3], r = e[4], t.quadraticCurveTo(e[1] + f, e[2] + d, i + f, r + d), c = i, h = r, l = e[1], u = e[2];
            break;

          case "t":
            i = c + e[1], r = h + e[2], null === n[0].match(/[QqTt]/) ? (l = c, u = h) : (l = 2 * c - l, u = 2 * h - u), t.quadraticCurveTo(l + f, u + d, i + f, r + d), c = i, h = r;
            break;

          case "T":
            i = e[1], r = e[2], null === n[0].match(/[QqTt]/) ? (l = c, u = h) : (l = 2 * c - l, u = 2 * h - u), t.quadraticCurveTo(l + f, u + d, i + f, r + d), c = i, h = r;
            break;

          case "a":
            o(t, c + f, h + d, [e[1], e[2], e[3], e[4], e[5], e[6] + c + f, e[7] + h + d]), c += e[6], h += e[7];
            break;

          case "A":
            o(t, c + f, h + d, [e[1], e[2], e[3], e[4], e[5], e[6] + f, e[7] + d]), c = e[6], h = e[7];
            break;

          case "z":
          case "Z":
            c = s, h = a, t.closePath();
        }

        n = e;
      }
    },
    _render: function _render(t) {
      this._renderPathCommands(t), this._renderPaintInOrder(t);
    },
    toString: function toString() {
      return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>";
    },
    toObject: function toObject(t) {
      var e = n(this.callSuper("toObject", t), {
        path: this.path.map(function (t) {
          return t.slice();
        }),
        top: this.top,
        left: this.left
      });
      return e;
    },
    toDatalessObject: function toDatalessObject(t) {
      var e = this.toObject(["sourcePath"].concat(t));
      return e.sourcePath && delete e.path, e;
    },
    _toSVG: function _toSVG() {
      var t = this.path.map(function (t) {
        return t.join(" ");
      }).join(" ");
      return ["<path ", "COMMON_PARTS", 'd="', t, '" stroke-linecap="round" ', "/>\n"];
    },
    _getOffsetTransform: function _getOffsetTransform() {
      var t = e.Object.NUM_FRACTION_DIGITS;
      return " translate(" + a(-this.pathOffset.x, t) + ", " + a(-this.pathOffset.y, t) + ")";
    },
    toClipPathSVG: function toClipPathSVG(t) {
      var e = this._getOffsetTransform();

      return "	" + this._createBaseClipPathSVGMarkup(this._toSVG(), {
        reviver: t,
        additionalTransform: e
      });
    },
    toSVG: function toSVG(t) {
      var e = this._getOffsetTransform();

      return this._createBaseSVGMarkup(this._toSVG(), {
        reviver: t,
        additionalTransform: e
      });
    },
    complexity: function complexity() {
      return this.path.length;
    },
    _parsePath: function _parsePath() {
      for (var t, e, i, r, n, s = [], o = [], a = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi, l = 0, u = this.path.length; u > l; l++) {
        for (t = this.path[l], r = t.slice(1).trim(), o.length = 0; i = a.exec(r);) {
          o.push(i[0]);
        }

        n = [t.charAt(0)];

        for (var f = 0, d = o.length; d > f; f++) {
          e = parseFloat(o[f]), isNaN(e) || n.push(e);
        }

        var g = n[0],
            p = c[g.toLowerCase()],
            v = h[g] || g;
        if (n.length - 1 > p) for (var b = 1, m = n.length; m > b; b += p) {
          s.push([g].concat(n.slice(b, b + p))), g = v;
        } else s.push(n);
      }

      return s;
    },
    _parseDimensions: function _parseDimensions() {
      for (var t, n, s, o, a = [], c = [], h = null, l = 0, u = 0, f = 0, d = 0, g = 0, p = 0, v = 0, b = this.path.length; b > v; ++v) {
        switch (t = this.path[v], t[0]) {
          case "l":
            f += t[1], d += t[2], o = [];
            break;

          case "L":
            f = t[1], d = t[2], o = [];
            break;

          case "h":
            f += t[1], o = [];
            break;

          case "H":
            f = t[1], o = [];
            break;

          case "v":
            d += t[1], o = [];
            break;

          case "V":
            d = t[1], o = [];
            break;

          case "m":
            f += t[1], d += t[2], l = f, u = d, o = [];
            break;

          case "M":
            f = t[1], d = t[2], l = f, u = d, o = [];
            break;

          case "c":
            n = f + t[5], s = d + t[6], g = f + t[3], p = d + t[4], o = e.util.getBoundsOfCurve(f, d, f + t[1], d + t[2], g, p, n, s), f = n, d = s;
            break;

          case "C":
            g = t[3], p = t[4], o = e.util.getBoundsOfCurve(f, d, t[1], t[2], g, p, t[5], t[6]), f = t[5], d = t[6];
            break;

          case "s":
            n = f + t[3], s = d + t[4], null === h[0].match(/[CcSs]/) ? (g = f, p = d) : (g = 2 * f - g, p = 2 * d - p), o = e.util.getBoundsOfCurve(f, d, g, p, f + t[1], d + t[2], n, s), g = f + t[1], p = d + t[2], f = n, d = s;
            break;

          case "S":
            n = t[3], s = t[4], null === h[0].match(/[CcSs]/) ? (g = f, p = d) : (g = 2 * f - g, p = 2 * d - p), o = e.util.getBoundsOfCurve(f, d, g, p, t[1], t[2], n, s), f = n, d = s, g = t[1], p = t[2];
            break;

          case "q":
            n = f + t[3], s = d + t[4], g = f + t[1], p = d + t[2], o = e.util.getBoundsOfCurve(f, d, g, p, g, p, n, s), f = n, d = s;
            break;

          case "Q":
            g = t[1], p = t[2], o = e.util.getBoundsOfCurve(f, d, g, p, g, p, t[3], t[4]), f = t[3], d = t[4];
            break;

          case "t":
            n = f + t[1], s = d + t[2], null === h[0].match(/[QqTt]/) ? (g = f, p = d) : (g = 2 * f - g, p = 2 * d - p), o = e.util.getBoundsOfCurve(f, d, g, p, g, p, n, s), f = n, d = s;
            break;

          case "T":
            n = t[1], s = t[2], null === h[0].match(/[QqTt]/) ? (g = f, p = d) : (g = 2 * f - g, p = 2 * d - p), o = e.util.getBoundsOfCurve(f, d, g, p, g, p, n, s), f = n, d = s;
            break;

          case "a":
            o = e.util.getBoundsOfArc(f, d, t[1], t[2], t[3], t[4], t[5], t[6] + f, t[7] + d), f += t[6], d += t[7];
            break;

          case "A":
            o = e.util.getBoundsOfArc(f, d, t[1], t[2], t[3], t[4], t[5], t[6], t[7]), f = t[6], d = t[7];
            break;

          case "z":
          case "Z":
            f = l, d = u;
        }

        h = t, o.forEach(function (t) {
          a.push(t.x), c.push(t.y);
        }), a.push(f), c.push(d);
      }

      var m = i(a) || 0,
          y = i(c) || 0,
          _ = r(a) || 0,
          x = r(c) || 0,
          C = _ - m,
          w = x - y,
          S = {
        left: m,
        top: y,
        width: C,
        height: w
      };

      return S;
    }
  }), e.Path.fromObject = function (t, i) {
    if ("string" == typeof t.sourcePath) {
      var r = t.sourcePath;
      e.loadSVGFromURL(r, function (e) {
        var r = e[0];
        r.setOptions(t), i && i(r);
      });
    } else e.Object._fromObject("Path", t, i, "path");
  }, e.Path.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(["d"]), void (e.Path.fromElement = function (t, i, r) {
    var s = e.parseAttributes(t, e.Path.ATTRIBUTE_NAMES);
    i(new e.Path(s.d, n(s, r)));
  }));
}( true ? exports : undefined);
!function (t) {
  "use strict";

  var e = t.fabric || (t.fabric = {}),
      i = e.util.array.min,
      r = e.util.array.max;
  e.Group || (e.Group = e.util.createClass(e.Object, e.Collection, {
    type: "group",
    strokeWidth: 0,
    subTargetCheck: !1,
    cacheProperties: [],
    useSetOnGroup: !1,
    initialize: function initialize(t, e, i) {
      e = e || {}, this._objects = [], i && this.callSuper("initialize", e), this._objects = t || [];

      for (var r = this._objects.length; r--;) {
        this._objects[r].group = this;
      }

      if (i) this._updateObjectsACoords();else {
        var n = e && e.centerPoint;
        void 0 !== e.originX && (this.originX = e.originX), void 0 !== e.originY && (this.originY = e.originY), n || this._calcBounds(), this._updateObjectsCoords(n), delete e.centerPoint, this.callSuper("initialize", e);
      }
      this.setCoords();
    },
    _updateObjectsACoords: function _updateObjectsACoords() {
      for (var t = !0, e = !0, i = this._objects.length; i--;) {
        this._objects[i].setCoords(t, e);
      }
    },
    _updateObjectsCoords: function _updateObjectsCoords(t) {
      for (var t = t || this.getCenterPoint(), e = this._objects.length; e--;) {
        this._updateObjectCoords(this._objects[e], t);
      }
    },
    _updateObjectCoords: function _updateObjectCoords(t, e) {
      var i = t.left,
          r = t.top,
          n = !0,
          s = !0;
      t.set({
        left: i - e.x,
        top: r - e.y
      }), t.group = this, t.setCoords(n, s);
    },
    toString: function toString() {
      return "#<fabric.Group: (" + this.complexity() + ")>";
    },
    addWithUpdate: function addWithUpdate(t) {
      return this._restoreObjectsState(), e.util.resetObjectTransform(this), t && (this._objects.push(t), t.group = this, t._set("canvas", this.canvas)), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), this.dirty = !0, this;
    },
    removeWithUpdate: function removeWithUpdate(t) {
      return this._restoreObjectsState(), e.util.resetObjectTransform(this), this.remove(t), this._calcBounds(), this._updateObjectsCoords(), this.setCoords(), this.dirty = !0, this;
    },
    _onObjectAdded: function _onObjectAdded(t) {
      this.dirty = !0, t.group = this, t._set("canvas", this.canvas);
    },
    _onObjectRemoved: function _onObjectRemoved(t) {
      this.dirty = !0, delete t.group;
    },
    _set: function _set(t, i) {
      var r = this._objects.length;
      if (this.useSetOnGroup) for (; r--;) {
        this._objects[r].setOnGroup(t, i);
      }
      if ("canvas" === t) for (; r--;) {
        this._objects[r]._set(t, i);
      }

      e.Object.prototype._set.call(this, t, i);
    },
    toObject: function toObject(t) {
      var i = this.includeDefaultValues,
          r = this._objects.map(function (e) {
        var r = e.includeDefaultValues;
        e.includeDefaultValues = i;
        var n = e.toObject(t);
        return e.includeDefaultValues = r, n;
      }),
          n = e.Object.prototype.toObject.call(this, t);

      return n.objects = r, n;
    },
    toDatalessObject: function toDatalessObject(t) {
      var i,
          r = this.sourcePath;
      if (r) i = r;else {
        var n = this.includeDefaultValues;
        i = this._objects.map(function (e) {
          var i = e.includeDefaultValues;
          e.includeDefaultValues = n;
          var r = e.toDatalessObject(t);
          return e.includeDefaultValues = i, r;
        });
      }
      var s = e.Object.prototype.toDatalessObject.call(this, t);
      return s.objects = i, s;
    },
    render: function render(t) {
      this._transformDone = !0, this.callSuper("render", t), this._transformDone = !1;
    },
    shouldCache: function shouldCache() {
      var t = this.objectCaching && (!this.group || this.needsItsOwnCache() || !this.group.isOnACache());
      if (this.ownCaching = t, t) for (var e = 0, i = this._objects.length; i > e; e++) {
        if (this._objects[e].willDrawShadow()) return this.ownCaching = !1, !1;
      }
      return t;
    },
    willDrawShadow: function willDrawShadow() {
      if (this.shadow) return e.Object.prototype.willDrawShadow.call(this);

      for (var t = 0, i = this._objects.length; i > t; t++) {
        if (this._objects[t].willDrawShadow()) return !0;
      }

      return !1;
    },
    isOnACache: function isOnACache() {
      return this.ownCaching || this.group && this.group.isOnACache();
    },
    drawObject: function drawObject(t) {
      for (var e = 0, i = this._objects.length; i > e; e++) {
        this._objects[e].render(t);
      }

      this._drawClipPath(t);
    },
    isCacheDirty: function isCacheDirty(t) {
      if (this.callSuper("isCacheDirty", t)) return !0;
      if (!this.statefullCache) return !1;

      for (var e = 0, i = this._objects.length; i > e; e++) {
        if (this._objects[e].isCacheDirty(!0)) {
          if (this._cacheCanvas) {
            var r = this.cacheWidth / this.zoomX,
                n = this.cacheHeight / this.zoomY;

            this._cacheContext.clearRect(-r / 2, -n / 2, r, n);
          }

          return !0;
        }
      }

      return !1;
    },
    _restoreObjectsState: function _restoreObjectsState() {
      return this._objects.forEach(this._restoreObjectState, this), this;
    },
    realizeTransform: function realizeTransform(t) {
      var i = t.calcTransformMatrix(),
          r = e.util.qrDecompose(i),
          n = new e.Point(r.translateX, r.translateY);
      return t.flipX = !1, t.flipY = !1, t.set("scaleX", r.scaleX), t.set("scaleY", r.scaleY), t.skewX = r.skewX, t.skewY = r.skewY, t.angle = r.angle, t.setPositionByOrigin(n, "center", "center"), t;
    },
    _restoreObjectState: function _restoreObjectState(t) {
      return this.realizeTransform(t), t.setCoords(), delete t.group, this;
    },
    destroy: function destroy() {
      return this._objects.forEach(function (t) {
        t.set("dirty", !0);
      }), this._restoreObjectsState();
    },
    toActiveSelection: function toActiveSelection() {
      if (this.canvas) {
        var t = this._objects,
            i = this.canvas;
        this._objects = [];
        var r = this.toObject();
        delete r.objects;
        var n = new e.ActiveSelection([]);
        return n.set(r), n.type = "activeSelection", i.remove(this), t.forEach(function (t) {
          t.group = n, t.dirty = !0, i.add(t);
        }), n.canvas = i, n._objects = t, i._activeObject = n, n.setCoords(), n;
      }
    },
    ungroupOnCanvas: function ungroupOnCanvas() {
      return this._restoreObjectsState();
    },
    setObjectsCoords: function setObjectsCoords() {
      var t = !0,
          e = !0;
      return this.forEachObject(function (i) {
        i.setCoords(t, e);
      }), this;
    },
    _calcBounds: function _calcBounds(t) {
      for (var e, i, r, n = [], s = [], o = ["tr", "br", "bl", "tl"], a = 0, c = this._objects.length, h = o.length, l = !0; c > a; ++a) {
        for (e = this._objects[a], e.setCoords(l), r = 0; h > r; r++) {
          i = o[r], n.push(e.oCoords[i].x), s.push(e.oCoords[i].y);
        }
      }

      this._getBounds(n, s, t);
    },
    _getBounds: function _getBounds(t, n, s) {
      var o = new e.Point(i(t), i(n)),
          a = new e.Point(r(t), r(n)),
          c = o.y || 0,
          h = o.x || 0,
          l = a.x - o.x || 0,
          u = a.y - o.y || 0;
      this.width = l, this.height = u, s || this.setPositionByOrigin({
        x: h,
        y: c
      }, "left", "top");
    },
    toSVG: function toSVG(t) {
      for (var e = [], i = 0, r = this._objects.length; r > i; i++) {
        e.push("	", this._objects[i].toSVG(t));
      }

      return this._createBaseSVGMarkup(e, {
        reviver: t,
        noStyle: !0,
        withShadow: !0
      });
    },
    toClipPathSVG: function toClipPathSVG(t) {
      for (var e = [], i = 0, r = this._objects.length; r > i; i++) {
        e.push("	", this._objects[i].toClipPathSVG(t));
      }

      return this._createBaseClipPathSVGMarkup(e, {
        reviver: t
      });
    }
  }), e.Group.fromObject = function (t, i) {
    e.util.enlivenObjects(t.objects, function (r) {
      e.util.enlivenObjects([t.clipPath], function (n) {
        var s = e.util.object.clone(t, !0);
        s.clipPath = n[0], delete s.objects, i && i(new e.Group(r, s, !0));
      });
    });
  });
}( true ? exports : undefined);
!function (t) {
  "use strict";

  var e = t.fabric || (t.fabric = {});
  e.ActiveSelection || (e.ActiveSelection = e.util.createClass(e.Group, {
    type: "activeSelection",
    initialize: function initialize(t, i) {
      i = i || {}, this._objects = t || [];

      for (var r = this._objects.length; r--;) {
        this._objects[r].group = this;
      }

      i.originX && (this.originX = i.originX), i.originY && (this.originY = i.originY), this._calcBounds(), this._updateObjectsCoords(), e.Object.prototype.initialize.call(this, i), this.setCoords();
    },
    toGroup: function toGroup() {
      var t = this._objects.concat();

      this._objects = [];
      var i = e.Object.prototype.toObject.call(this),
          r = new e.Group([]);
      if (delete i.type, r.set(i), t.forEach(function (t) {
        t.canvas.remove(t), t.group = r;
      }), r._objects = t, !this.canvas) return r;
      var n = this.canvas;
      return n.add(r), n._activeObject = r, r.setCoords(), r;
    },
    onDeselect: function onDeselect() {
      return this.destroy(), !1;
    },
    toString: function toString() {
      return "#<fabric.ActiveSelection: (" + this.complexity() + ")>";
    },
    shouldCache: function shouldCache() {
      return !1;
    },
    isOnACache: function isOnACache() {
      return !1;
    },
    _renderControls: function _renderControls(t, e, i) {
      t.save(), t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1, this.callSuper("_renderControls", t, e), i = i || {}, "undefined" == typeof i.hasControls && (i.hasControls = !1), "undefined" == typeof i.hasRotatingPoint && (i.hasRotatingPoint = !1), i.forActiveSelection = !0;

      for (var r = 0, n = this._objects.length; n > r; r++) {
        this._objects[r]._renderControls(t, i);
      }

      t.restore();
    }
  }), e.ActiveSelection.fromObject = function (t, i) {
    e.util.enlivenObjects(t.objects, function (r) {
      delete t.objects, i && i(new e.ActiveSelection(r, t, !0));
    });
  });
}( true ? exports : undefined);
!function (t) {
  "use strict";

  var e = fabric.util.object.extend;
  return t.fabric || (t.fabric = {}), t.fabric.Image ? void fabric.warn("fabric.Image is already defined.") : (fabric.Image = fabric.util.createClass(fabric.Object, {
    type: "image",
    crossOrigin: "",
    strokeWidth: 0,
    _lastScaleX: 1,
    _lastScaleY: 1,
    _filterScalingX: 1,
    _filterScalingY: 1,
    minimumScaleTrigger: .5,
    stateProperties: fabric.Object.prototype.stateProperties.concat("cropX", "cropY"),
    cacheKey: "",
    cropX: 0,
    cropY: 0,
    initialize: function initialize(t, e) {
      e || (e = {}), this.filters = [], this.cacheKey = "texture" + fabric.Object.__uid++, this.callSuper("initialize", e), this._initElement(t, e);
    },
    getElement: function getElement() {
      return this._element || {};
    },
    setElement: function setElement(t, e) {
      return this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._element = t, this._originalElement = t, this._initConfig(e), 0 !== this.filters.length && this.applyFilters(), this.resizeFilter && this.applyResizeFilters(), this;
    },
    removeTexture: function removeTexture(t) {
      var e = fabric.filterBackend;
      e && e.evictCachesForKey && e.evictCachesForKey(t);
    },
    dispose: function dispose() {
      this.removeTexture(this.cacheKey), this.removeTexture(this.cacheKey + "_filtered"), this._cacheContext = void 0, ["_originalElement", "_element", "_filteredEl", "_cacheCanvas"].forEach(function (t) {
        fabric.util.cleanUpJsdomNode(this[t]), this[t] = void 0;
      }.bind(this));
    },
    setCrossOrigin: function setCrossOrigin(t) {
      return this.crossOrigin = t, this._element.crossOrigin = t, this;
    },
    getOriginalSize: function getOriginalSize() {
      var t = this.getElement();
      return {
        width: t.naturalWidth || t.width,
        height: t.naturalHeight || t.height
      };
    },
    _stroke: function _stroke(t) {
      if (this.stroke && 0 !== this.strokeWidth) {
        var e = this.width / 2,
            i = this.height / 2;
        t.beginPath(), t.moveTo(-e, -i), t.lineTo(e, -i), t.lineTo(e, i), t.lineTo(-e, i), t.lineTo(-e, -i), t.closePath();
      }
    },
    _renderDashedStroke: function _renderDashedStroke(t) {
      var e = -this.width / 2,
          i = -this.height / 2,
          r = this.width,
          n = this.height;
      t.save(), this._setStrokeStyles(t, this), t.beginPath(), fabric.util.drawDashedLine(t, e, i, e + r, i, this.strokeDashArray), fabric.util.drawDashedLine(t, e + r, i, e + r, i + n, this.strokeDashArray), fabric.util.drawDashedLine(t, e + r, i + n, e, i + n, this.strokeDashArray), fabric.util.drawDashedLine(t, e, i + n, e, i, this.strokeDashArray), t.closePath(), t.restore();
    },
    toObject: function toObject(t) {
      var i = [];
      this.filters.forEach(function (t) {
        t && i.push(t.toObject());
      });
      var r = e(this.callSuper("toObject", ["crossOrigin", "cropX", "cropY"].concat(t)), {
        src: this.getSrc(),
        filters: i
      });
      return this.resizeFilter && (r.resizeFilter = this.resizeFilter.toObject()), r;
    },
    hasCrop: function hasCrop() {
      return this.cropX || this.cropY || this.width < this._element.width || this.height < this._element.height;
    },
    _toSVG: function _toSVG() {
      var t,
          e = [],
          i = [],
          r = -this.width / 2,
          n = -this.height / 2,
          s = "";

      if (this.hasCrop()) {
        var o = fabric.Object.__uid++;
        e.push('<clipPath id="imageCrop_' + o + '">\n', '	<rect x="' + r + '" y="' + n + '" width="' + this.width + '" height="' + this.height + '" />\n', "</clipPath>\n"), s = ' clip-path="url(#imageCrop_' + o + ')" ';
      }

      if (i.push("	<image ", "COMMON_PARTS", 'xlink:href="', this.getSvgSrc(!0), '" x="', r - this.cropX, '" y="', n - this.cropY, '" width="', this._element.width || this._element.naturalWidth, '" height="', this._element.height || this._element.height, '"', s, "></image>\n"), this.stroke || this.strokeDashArray) {
        var a = this.fill;
        this.fill = null, t = ["	<rect ", 'x="', r, '" y="', n, '" width="', this.width, '" height="', this.height, '" style="', this.getSvgStyles(), '"/>\n'], this.fill = a;
      }

      return e = "fill" !== this.paintFirst ? e.concat(t, i) : e.concat(i, t);
    },
    getSrc: function getSrc(t) {
      var e = t ? this._element : this._originalElement;
      return e ? e.toDataURL ? e.toDataURL() : e.src : this.src || "";
    },
    setSrc: function setSrc(t, e, i) {
      return fabric.util.loadImage(t, function (t) {
        this.setElement(t, i), this._setWidthHeight(), e(this);
      }, this, i && i.crossOrigin), this;
    },
    toString: function toString() {
      return '#<fabric.Image: { src: "' + this.getSrc() + '" }>';
    },
    applyResizeFilters: function applyResizeFilters() {
      var t = this.resizeFilter,
          e = this.minimumScaleTrigger,
          i = this.getTotalObjectScaling(),
          r = i.scaleX,
          n = i.scaleY,
          s = this._filteredEl || this._originalElement;
      if (this.group && this.set("dirty", !0), !t || r > e && n > e) return this._element = s, this._filterScalingX = 1, this._filterScalingY = 1, this._lastScaleX = r, void (this._lastScaleY = n);
      fabric.filterBackend || (fabric.filterBackend = fabric.initFilterBackend());
      var o = fabric.util.createCanvasElement(),
          a = this._filteredEl ? this.cacheKey + "_filtered" : this.cacheKey,
          c = s.width,
          h = s.height;
      o.width = c, o.height = h, this._element = o, this._lastScaleX = t.scaleX = r, this._lastScaleY = t.scaleY = n, fabric.filterBackend.applyFilters([t], s, c, h, this._element, a), this._filterScalingX = o.width / this._originalElement.width, this._filterScalingY = o.height / this._originalElement.height;
    },
    applyFilters: function applyFilters(t) {
      if (t = t || this.filters || [], t = t.filter(function (t) {
        return t && !t.isNeutralState();
      }), this.set("dirty", !0), this.removeTexture(this.cacheKey + "_filtered"), 0 === t.length) return this._element = this._originalElement, this._filteredEl = null, this._filterScalingX = 1, this._filterScalingY = 1, this;
      var e = this._originalElement,
          i = e.naturalWidth || e.width,
          r = e.naturalHeight || e.height;

      if (this._element === this._originalElement) {
        var n = fabric.util.createCanvasElement();
        n.width = i, n.height = r, this._element = n, this._filteredEl = n;
      } else this._element = this._filteredEl, this._filteredEl.getContext("2d").clearRect(0, 0, i, r), this._lastScaleX = 1, this._lastScaleY = 1;

      return fabric.filterBackend || (fabric.filterBackend = fabric.initFilterBackend()), fabric.filterBackend.applyFilters(t, this._originalElement, i, r, this._element, this.cacheKey), (this._originalElement.width !== this._element.width || this._originalElement.height !== this._element.height) && (this._filterScalingX = this._element.width / this._originalElement.width, this._filterScalingY = this._element.height / this._originalElement.height), this;
    },
    _render: function _render(t) {
      this.isMoving !== !0 && this.resizeFilter && this._needsResize() && this.applyResizeFilters(), this._stroke(t), this._renderPaintInOrder(t);
    },
    shouldCache: function shouldCache() {
      return this.ownCaching = this.objectCaching && this.needsItsOwnCache(), this.ownCaching;
    },
    _renderFill: function _renderFill(t) {
      var e = this.width,
          i = this.height,
          r = e * this._filterScalingX,
          n = i * this._filterScalingY,
          s = -e / 2,
          o = -i / 2,
          a = this._element;
      a && t.drawImage(a, this.cropX * this._filterScalingX, this.cropY * this._filterScalingY, r, n, s, o, e, i);
    },
    _needsResize: function _needsResize() {
      var t = this.getTotalObjectScaling();
      return t.scaleX !== this._lastScaleX || t.scaleY !== this._lastScaleY;
    },
    _resetWidthHeight: function _resetWidthHeight() {
      this.set(this.getOriginalSize());
    },
    _initElement: function _initElement(t, e) {
      this.setElement(fabric.util.getById(t), e), fabric.util.addClass(this.getElement(), fabric.Image.CSS_CANVAS);
    },
    _initConfig: function _initConfig(t) {
      t || (t = {}), this.setOptions(t), this._setWidthHeight(t), this._element && this.crossOrigin && (this._element.crossOrigin = this.crossOrigin);
    },
    _initFilters: function _initFilters(t, e) {
      t && t.length ? fabric.util.enlivenObjects(t, function (t) {
        e && e(t);
      }, "fabric.Image.filters") : e && e();
    },
    _setWidthHeight: function _setWidthHeight(t) {
      t || (t = {});
      var e = this.getElement();
      this.width = t.width || e.naturalWidth || e.width || 0, this.height = t.height || e.naturalHeight || e.height || 0;
    },
    parsePreserveAspectRatioAttribute: function parsePreserveAspectRatioAttribute() {
      var t,
          e = fabric.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""),
          i = this._element.width,
          r = this._element.height,
          n = 1,
          s = 1,
          o = 0,
          a = 0,
          c = 0,
          h = 0,
          l = this.width,
          u = this.height,
          f = {
        width: l,
        height: u
      };
      return !e || "none" === e.alignX && "none" === e.alignY ? (n = l / i, s = u / r) : ("meet" === e.meetOrSlice && (n = s = fabric.util.findScaleToFit(this._element, f), t = (l - i * n) / 2, "Min" === e.alignX && (o = -t), "Max" === e.alignX && (o = t), t = (u - r * s) / 2, "Min" === e.alignY && (a = -t), "Max" === e.alignY && (a = t)), "slice" === e.meetOrSlice && (n = s = fabric.util.findScaleToCover(this._element, f), t = i - l / n, "Mid" === e.alignX && (c = t / 2), "Max" === e.alignX && (c = t), t = r - u / s, "Mid" === e.alignY && (h = t / 2), "Max" === e.alignY && (h = t), i = l / n, r = u / s)), {
        width: i,
        height: r,
        scaleX: n,
        scaleY: s,
        offsetLeft: o,
        offsetTop: a,
        cropX: c,
        cropY: h
      };
    }
  }), fabric.Image.CSS_CANVAS = "canvas-img", fabric.Image.prototype.getSvgSrc = fabric.Image.prototype.getSrc, fabric.Image.fromObject = function (t, e) {
    var i = fabric.util.object.clone(t);
    fabric.util.loadImage(i.src, function (t, r) {
      return r ? void (e && e(null, r)) : void fabric.Image.prototype._initFilters.call(i, i.filters, function (r) {
        i.filters = r || [], fabric.Image.prototype._initFilters.call(i, [i.resizeFilter], function (r) {
          i.resizeFilter = r[0], fabric.util.enlivenObjects([i.clipPath], function (r) {
            i.clipPath = r[0];
            var n = new fabric.Image(t, i);
            e(n);
          });
        });
      });
    }, null, i.crossOrigin);
  }, fabric.Image.fromURL = function (t, e, i) {
    fabric.util.loadImage(t, function (t) {
      e && e(new fabric.Image(t, i));
    }, null, i && i.crossOrigin);
  }, fabric.Image.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin".split(" ")), void (fabric.Image.fromElement = function (t, i, r) {
    var n = fabric.parseAttributes(t, fabric.Image.ATTRIBUTE_NAMES);
    fabric.Image.fromURL(n["xlink:href"], i, e(r ? fabric.util.object.clone(r) : {}, n));
  }));
}( true ? exports : undefined);
fabric.util.object.extend(fabric.Object.prototype, {
  _getAngleValueForStraighten: function _getAngleValueForStraighten() {
    var t = this.angle % 360;
    return t > 0 ? 90 * Math.round((t - 1) / 90) : 90 * Math.round(t / 90);
  },
  straighten: function straighten() {
    return this.rotate(this._getAngleValueForStraighten()), this;
  },
  fxStraighten: function fxStraighten(t) {
    t = t || {};

    var e = function e() {},
        i = t.onComplete || e,
        r = t.onChange || e,
        n = this;

    return fabric.util.animate({
      startValue: this.get("angle"),
      endValue: this._getAngleValueForStraighten(),
      duration: this.FX_DURATION,
      onChange: function onChange(t) {
        n.rotate(t), r();
      },
      onComplete: function onComplete() {
        n.setCoords(), i();
      }
    }), this;
  }
}), fabric.util.object.extend(fabric.StaticCanvas.prototype, {
  straightenObject: function straightenObject(t) {
    return t.straighten(), this.requestRenderAll(), this;
  },
  fxStraightenObject: function fxStraightenObject(t) {
    return t.fxStraighten({
      onChange: this.requestRenderAllBound
    }), this;
  }
});
!function (t) {
  "use strict";

  var e = t.fabric || (t.fabric = {}),
      i = e.util.object.clone;
  return e.Text ? void e.warn("fabric.Text is already defined") : (e.Text = e.util.createClass(e.Object, {
    _dimensionAffectingProps: ["fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "text", "charSpacing", "textAlign", "styles"],
    _reNewline: /\r?\n/,
    _reSpacesAndTabs: /[ \t\r]/g,
    _reSpaceAndTab: /[ \t\r]/,
    _reWords: /\S+/g,
    type: "text",
    fontSize: 40,
    fontWeight: "normal",
    fontFamily: "Times New Roman",
    underline: !1,
    overline: !1,
    linethrough: !1,
    textAlign: "left",
    fontStyle: "normal",
    lineHeight: 1.16,
    superscript: {
      size: .6,
      baseline: -.35
    },
    subscript: {
      size: .6,
      baseline: .11
    },
    textBackgroundColor: "",
    stateProperties: e.Object.prototype.stateProperties.concat("fontFamily", "fontWeight", "fontSize", "text", "underline", "overline", "linethrough", "textAlign", "fontStyle", "lineHeight", "textBackgroundColor", "charSpacing", "styles"),
    cacheProperties: e.Object.prototype.cacheProperties.concat("fontFamily", "fontWeight", "fontSize", "text", "underline", "overline", "linethrough", "textAlign", "fontStyle", "lineHeight", "textBackgroundColor", "charSpacing", "styles"),
    stroke: null,
    shadow: null,
    _fontSizeFraction: .222,
    offsets: {
      underline: .1,
      linethrough: -.315,
      overline: -.88
    },
    _fontSizeMult: 1.13,
    charSpacing: 0,
    styles: null,
    _measuringContext: null,
    deltaY: 0,
    _styleProperties: ["stroke", "strokeWidth", "fill", "fontFamily", "fontSize", "fontWeight", "fontStyle", "underline", "overline", "linethrough", "deltaY", "textBackgroundColor"],
    __charBounds: [],
    CACHE_FONT_SIZE: 400,
    MIN_TEXT_WIDTH: 2,
    initialize: function initialize(t, e) {
      this.styles = e ? e.styles || {} : {}, this.text = t, this.__skipDimension = !0, this.callSuper("initialize", e), this.__skipDimension = !1, this.initDimensions(), this.setCoords(), this.setupState({
        propertySet: "_dimensionAffectingProps"
      });
    },
    getMeasuringContext: function getMeasuringContext() {
      return e._measuringContext || (e._measuringContext = this.canvas && this.canvas.contextCache || e.util.createCanvasElement().getContext("2d")), e._measuringContext;
    },
    _splitText: function _splitText() {
      var t = this._splitTextIntoLines(this.text);

      return this.textLines = t.lines, this._textLines = t.graphemeLines, this._unwrappedTextLines = t._unwrappedLines, this._text = t.graphemeText, t;
    },
    initDimensions: function initDimensions() {
      this.__skipDimension || (this._splitText(), this._clearCache(), this.width = this.calcTextWidth() || this.cursorWidth || this.MIN_TEXT_WIDTH, -1 !== this.textAlign.indexOf("justify") && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({
        propertySet: "_dimensionAffectingProps"
      }));
    },
    enlargeSpaces: function enlargeSpaces() {
      for (var t, e, i, r, n, s, o, a = 0, c = this._textLines.length; c > a; a++) {
        if (("justify" === this.textAlign || a !== c - 1 && !this.isEndOfWrapping(a)) && (r = 0, n = this._textLines[a], e = this.getLineWidth(a), e < this.width && (o = this.textLines[a].match(this._reSpacesAndTabs)))) {
          i = o.length, t = (this.width - e) / i;

          for (var h = 0, l = n.length; l >= h; h++) {
            s = this.__charBounds[a][h], this._reSpaceAndTab.test(n[h]) ? (s.width += t, s.kernedWidth += t, s.left += r, r += t) : s.left += r;
          }
        }
      }
    },
    isEndOfWrapping: function isEndOfWrapping(t) {
      return t === this._textLines.length - 1;
    },
    toString: function toString() {
      return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>';
    },
    _getCacheCanvasDimensions: function _getCacheCanvasDimensions() {
      var t = this.callSuper("_getCacheCanvasDimensions"),
          e = this.fontSize;
      return t.width += e * t.zoomX, t.height += e * t.zoomY, t;
    },
    _render: function _render(t) {
      this._setTextStyles(t), this._renderTextLinesBackground(t), this._renderTextDecoration(t, "underline"), this._renderText(t), this._renderTextDecoration(t, "overline"), this._renderTextDecoration(t, "linethrough");
    },
    _renderText: function _renderText(t) {
      "stroke" === this.paintFirst ? (this._renderTextStroke(t), this._renderTextFill(t)) : (this._renderTextFill(t), this._renderTextStroke(t));
    },
    _setTextStyles: function _setTextStyles(t, e, i) {
      t.textBaseline = "alphabetic", t.font = this._getFontDeclaration(e, i);
    },
    calcTextWidth: function calcTextWidth() {
      for (var t = this.getLineWidth(0), e = 1, i = this._textLines.length; i > e; e++) {
        var r = this.getLineWidth(e);
        r > t && (t = r);
      }

      return t;
    },
    _renderTextLine: function _renderTextLine(t, e, i, r, n, s) {
      this._renderChars(t, e, i, r, n, s);
    },
    _renderTextLinesBackground: function _renderTextLinesBackground(t) {
      if (this.textBackgroundColor || this.styleHas("textBackgroundColor")) {
        for (var e, i, r, n, s, o, a = 0, c = t.fillStyle, h = this._getLeftOffset(), l = this._getTopOffset(), u = 0, f = 0, d = 0, g = this._textLines.length; g > d; d++) {
          if (e = this.getHeightOfLine(d), this.textBackgroundColor || this.styleHas("textBackgroundColor", d)) {
            r = this._textLines[d], i = this._getLineLeftOffset(d), f = 0, u = 0, n = this.getValueOfPropertyAt(d, 0, "textBackgroundColor");

            for (var p = 0, v = r.length; v > p; p++) {
              s = this.__charBounds[d][p], o = this.getValueOfPropertyAt(d, p, "textBackgroundColor"), o !== n ? (t.fillStyle = n, n && t.fillRect(h + i + u, l + a, f, e / this.lineHeight), u = s.left, f = s.width, n = o) : f += s.kernedWidth;
            }

            o && (t.fillStyle = o, t.fillRect(h + i + u, l + a, f, e / this.lineHeight)), a += e;
          } else a += e;
        }

        t.fillStyle = c, this._removeShadow(t);
      }
    },
    getFontCache: function getFontCache(t) {
      var i = t.fontFamily.toLowerCase();
      e.charWidthsCache[i] || (e.charWidthsCache[i] = {});
      var r = e.charWidthsCache[i],
          n = t.fontStyle.toLowerCase() + "_" + (t.fontWeight + "").toLowerCase();
      return r[n] || (r[n] = {}), r[n];
    },
    _applyCharStyles: function _applyCharStyles(t, e, i, r, n) {
      this._setFillStyles(e, n), this._setStrokeStyles(e, n), e.font = this._getFontDeclaration(n);
    },
    _measureChar: function _measureChar(t, e, i, r) {
      var n,
          s,
          o,
          a,
          c = this.getFontCache(e),
          h = this._getFontDeclaration(e),
          l = this._getFontDeclaration(r),
          u = i + t,
          f = h === l,
          d = e.fontSize / this.CACHE_FONT_SIZE;

      if (i && void 0 !== c[i] && (o = c[i]), void 0 !== c[t] && (a = n = c[t]), f && void 0 !== c[u] && (s = c[u], a = s - o), void 0 === n || void 0 === o || void 0 === s) {
        var g = this.getMeasuringContext();

        this._setTextStyles(g, e, !0);
      }

      return void 0 === n && (a = n = g.measureText(t).width, c[t] = n), void 0 === o && f && i && (o = g.measureText(i).width, c[i] = o), f && void 0 === s && (s = g.measureText(u).width, c[u] = s, a = s - o), {
        width: n * d,
        kernedWidth: a * d
      };
    },
    getHeightOfChar: function getHeightOfChar(t, e) {
      return this.getValueOfPropertyAt(t, e, "fontSize");
    },
    measureLine: function measureLine(t) {
      var e = this._measureLine(t);

      return 0 !== this.charSpacing && (e.width -= this._getWidthOfCharSpacing()), e.width < 0 && (e.width = 0), e;
    },
    _measureLine: function _measureLine(t) {
      var e,
          i,
          r,
          n,
          s = 0,
          o = this._textLines[t],
          a = 0,
          c = new Array(o.length);

      for (this.__charBounds[t] = c, e = 0; e < o.length; e++) {
        i = o[e], n = this._getGraphemeBox(i, t, e, r), c[e] = n, s += n.kernedWidth, r = i;
      }

      return c[e] = {
        left: n ? n.left + n.width : 0,
        width: 0,
        kernedWidth: 0,
        height: this.fontSize
      }, {
        width: s,
        numOfSpaces: a
      };
    },
    _getGraphemeBox: function _getGraphemeBox(t, e, i, r, n) {
      var s,
          o = this.getCompleteStyleDeclaration(e, i),
          a = r ? this.getCompleteStyleDeclaration(e, i - 1) : {},
          c = this._measureChar(t, o, r, a),
          h = c.kernedWidth,
          l = c.width;

      0 !== this.charSpacing && (s = this._getWidthOfCharSpacing(), l += s, h += s);
      var u = {
        width: l,
        left: 0,
        height: o.fontSize,
        kernedWidth: h,
        deltaY: o.deltaY
      };

      if (i > 0 && !n) {
        var f = this.__charBounds[e][i - 1];
        u.left = f.left + f.width + c.kernedWidth - c.width;
      }

      return u;
    },
    getHeightOfLine: function getHeightOfLine(t) {
      if (this.__lineHeights[t]) return this.__lineHeights[t];

      for (var e = this._textLines[t], i = this.getHeightOfChar(t, 0), r = 1, n = e.length; n > r; r++) {
        i = Math.max(this.getHeightOfChar(t, r), i);
      }

      return this.__lineHeights[t] = i * this.lineHeight * this._fontSizeMult;
    },
    calcTextHeight: function calcTextHeight() {
      for (var t, e = 0, i = 0, r = this._textLines.length; r > i; i++) {
        t = this.getHeightOfLine(i), e += i === r - 1 ? t / this.lineHeight : t;
      }

      return e;
    },
    _getLeftOffset: function _getLeftOffset() {
      return -this.width / 2;
    },
    _getTopOffset: function _getTopOffset() {
      return -this.height / 2;
    },
    _renderTextCommon: function _renderTextCommon(t, e) {
      t.save();

      for (var i = 0, r = this._getLeftOffset(), n = this._getTopOffset(), s = this._applyPatternGradientTransform(t, "fillText" === e ? this.fill : this.stroke), o = 0, a = this._textLines.length; a > o; o++) {
        var c = this.getHeightOfLine(o),
            h = c / this.lineHeight,
            l = this._getLineLeftOffset(o);

        this._renderTextLine(e, t, this._textLines[o], r + l - s.offsetX, n + i + h - s.offsetY, o), i += c;
      }

      t.restore();
    },
    _renderTextFill: function _renderTextFill(t) {
      (this.fill || this.styleHas("fill")) && this._renderTextCommon(t, "fillText");
    },
    _renderTextStroke: function _renderTextStroke(t) {
      (this.stroke && 0 !== this.strokeWidth || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t), t.save(), this._setLineDash(t, this.strokeDashArray), t.beginPath(), this._renderTextCommon(t, "strokeText"), t.closePath(), t.restore());
    },
    _renderChars: function _renderChars(t, e, i, r, n, s) {
      var o,
          a,
          c,
          h,
          l = this.getHeightOfLine(s),
          u = -1 !== this.textAlign.indexOf("justify"),
          f = "",
          d = 0,
          g = !u && 0 === this.charSpacing && this.isEmptyStyles(s);
      if (e.save(), n -= l * this._fontSizeFraction / this.lineHeight, g) return this._renderChar(t, e, s, 0, this.textLines[s], r, n, l), void e.restore();

      for (var p = 0, v = i.length - 1; v >= p; p++) {
        h = p === v || this.charSpacing, f += i[p], c = this.__charBounds[s][p], 0 === d ? (r += c.kernedWidth - c.width, d += c.width) : d += c.kernedWidth, u && !h && this._reSpaceAndTab.test(i[p]) && (h = !0), h || (o = o || this.getCompleteStyleDeclaration(s, p), a = this.getCompleteStyleDeclaration(s, p + 1), h = this._hasStyleChanged(o, a)), h && (this._renderChar(t, e, s, p, f, r, n, l), f = "", o = a, r += d, d = 0);
      }

      e.restore();
    },
    _renderChar: function _renderChar(t, e, i, r, n, s, o) {
      var a = this._getStyleDeclaration(i, r),
          c = this.getCompleteStyleDeclaration(i, r),
          h = "fillText" === t && c.fill,
          l = "strokeText" === t && c.stroke && c.strokeWidth;

      (l || h) && (a && e.save(), this._applyCharStyles(t, e, i, r, c), a && a.textBackgroundColor && this._removeShadow(e), a && a.deltaY && (o += a.deltaY), h && e.fillText(n, s, o), l && e.strokeText(n, s, o), a && e.restore());
    },
    setSuperscript: function setSuperscript(t, e) {
      return this._setScript(t, e, this.superscript);
    },
    setSubscript: function setSubscript(t, e) {
      return this._setScript(t, e, this.subscript);
    },
    _setScript: function _setScript(t, e, i) {
      var r = this.get2DCursorLocation(t, !0),
          n = this.getValueOfPropertyAt(r.lineIndex, r.charIndex, "fontSize"),
          s = this.getValueOfPropertyAt(r.lineIndex, r.charIndex, "deltaY"),
          o = {
        fontSize: n * i.size,
        deltaY: s + n * i.baseline
      };
      return this.setSelectionStyles(o, t, e), this;
    },
    _hasStyleChanged: function _hasStyleChanged(t, e) {
      return t.fill !== e.fill || t.stroke !== e.stroke || t.strokeWidth !== e.strokeWidth || t.fontSize !== e.fontSize || t.fontFamily !== e.fontFamily || t.fontWeight !== e.fontWeight || t.fontStyle !== e.fontStyle || t.deltaY !== e.deltaY;
    },
    _hasStyleChangedForSvg: function _hasStyleChangedForSvg(t, e) {
      return this._hasStyleChanged(t, e) || t.overline !== e.overline || t.underline !== e.underline || t.linethrough !== e.linethrough;
    },
    _getLineLeftOffset: function _getLineLeftOffset(t) {
      var e = this.getLineWidth(t);
      return "center" === this.textAlign ? (this.width - e) / 2 : "right" === this.textAlign ? this.width - e : "justify-center" === this.textAlign && this.isEndOfWrapping(t) ? (this.width - e) / 2 : "justify-right" === this.textAlign && this.isEndOfWrapping(t) ? this.width - e : 0;
    },
    _clearCache: function _clearCache() {
      this.__lineWidths = [], this.__lineHeights = [], this.__charBounds = [];
    },
    _shouldClearDimensionCache: function _shouldClearDimensionCache() {
      var t = this._forceClearCache;
      return t || (t = this.hasStateChanged("_dimensionAffectingProps")), t && (this.dirty = !0, this._forceClearCache = !1), t;
    },
    getLineWidth: function getLineWidth(t) {
      if (this.__lineWidths[t]) return this.__lineWidths[t];
      var e,
          i,
          r = this._textLines[t];
      return "" === r ? e = 0 : (i = this.measureLine(t), e = i.width), this.__lineWidths[t] = e, e;
    },
    _getWidthOfCharSpacing: function _getWidthOfCharSpacing() {
      return 0 !== this.charSpacing ? this.fontSize * this.charSpacing / 1e3 : 0;
    },
    getValueOfPropertyAt: function getValueOfPropertyAt(t, e, i) {
      var r = this._getStyleDeclaration(t, e);

      return r && "undefined" != typeof r[i] ? r[i] : this[i];
    },
    _renderTextDecoration: function _renderTextDecoration(t, e) {
      if (this[e] || this.styleHas(e)) {
        for (var i, r, n, s, o, a, c, h, l, u, f, d, g, p, v, b, m = this._getLeftOffset(), _ = this._getTopOffset(), y = this._getWidthOfCharSpacing(), C = 0, x = this._textLines.length; x > C; C++) {
          if (i = this.getHeightOfLine(C), this[e] || this.styleHas(e, C)) {
            c = this._textLines[C], p = i / this.lineHeight, s = this._getLineLeftOffset(C), u = 0, f = 0, h = this.getValueOfPropertyAt(C, 0, e), b = this.getValueOfPropertyAt(C, 0, "fill"), l = _ + p * (1 - this._fontSizeFraction), r = this.getHeightOfChar(C, 0), o = this.getValueOfPropertyAt(C, 0, "deltaY");

            for (var w = 0, S = c.length; S > w; w++) {
              d = this.__charBounds[C][w], g = this.getValueOfPropertyAt(C, w, e), v = this.getValueOfPropertyAt(C, w, "fill"), n = this.getHeightOfChar(C, w), a = this.getValueOfPropertyAt(C, w, "deltaY"), (g !== h || v !== b || n !== r || a !== o) && f > 0 ? (t.fillStyle = b, h && b && t.fillRect(m + s + u, l + this.offsets[e] * r + o, f, this.fontSize / 15), u = d.left, f = d.width, h = g, b = v, r = n, o = a) : f += d.kernedWidth;
            }

            t.fillStyle = v, g && v && t.fillRect(m + s + u, l + this.offsets[e] * r + o, f - y, this.fontSize / 15), _ += i;
          } else _ += i;
        }

        this._removeShadow(t);
      }
    },
    _getFontDeclaration: function _getFontDeclaration(t, i) {
      var r = t || this,
          n = this.fontFamily,
          s = e.Text.genericFonts.indexOf(n.toLowerCase()) > -1,
          o = void 0 === n || n.indexOf("'") > -1 || n.indexOf('"') > -1 || s ? r.fontFamily : '"' + r.fontFamily + '"';
      return [e.isLikelyNode ? r.fontWeight : r.fontStyle, e.isLikelyNode ? r.fontStyle : r.fontWeight, i ? this.CACHE_FONT_SIZE + "px" : r.fontSize + "px", o].join(" ");
    },
    render: function render(t) {
      this.visible && (!this.canvas || !this.canvas.skipOffscreen || this.group || this.isOnScreen()) && (this._shouldClearDimensionCache() && this.initDimensions(), this.callSuper("render", t));
    },
    _splitTextIntoLines: function _splitTextIntoLines(t) {
      for (var i = t.split(this._reNewline), r = new Array(i.length), n = ["\n"], s = [], o = 0; o < i.length; o++) {
        r[o] = e.util.string.graphemeSplit(i[o]), s = s.concat(r[o], n);
      }

      return s.pop(), {
        _unwrappedLines: r,
        lines: i,
        graphemeText: s,
        graphemeLines: r
      };
    },
    toObject: function toObject(t) {
      var e = ["text", "fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "underline", "overline", "linethrough", "textAlign", "textBackgroundColor", "charSpacing"].concat(t),
          r = this.callSuper("toObject", e);
      return r.styles = i(this.styles, !0), r;
    },
    set: function set(t, e) {
      this.callSuper("set", t, e);
      var i = !1;
      if ("object" == _typeof(t)) for (var r in t) {
        i = i || -1 !== this._dimensionAffectingProps.indexOf(r);
      } else i = -1 !== this._dimensionAffectingProps.indexOf(t);
      return i && (this.initDimensions(), this.setCoords()), this;
    },
    complexity: function complexity() {
      return 1;
    }
  }), e.Text.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size letter-spacing text-decoration text-anchor".split(" ")), e.Text.DEFAULT_SVG_FONT_SIZE = 16, e.Text.fromElement = function (t, r, n) {
    if (!t) return r(null);
    var s = e.parseAttributes(t, e.Text.ATTRIBUTE_NAMES),
        o = s.textAnchor || "left";

    if (n = e.util.object.extend(n ? i(n) : {}, s), n.top = n.top || 0, n.left = n.left || 0, s.textDecoration) {
      var a = s.textDecoration;
      -1 !== a.indexOf("underline") && (n.underline = !0), -1 !== a.indexOf("overline") && (n.overline = !0), -1 !== a.indexOf("line-through") && (n.linethrough = !0), delete n.textDecoration;
    }

    "dx" in s && (n.left += s.dx), "dy" in s && (n.top += s.dy), "fontSize" in n || (n.fontSize = e.Text.DEFAULT_SVG_FONT_SIZE);
    var c = "";
    "textContent" in t ? c = t.textContent : "firstChild" in t && null !== t.firstChild && "data" in t.firstChild && null !== t.firstChild.data && (c = t.firstChild.data), c = c.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
    var h = n.strokeWidth;
    n.strokeWidth = 0;
    var l = new e.Text(c, n),
        u = l.getScaledHeight() / l.height,
        f = (l.height + l.strokeWidth) * l.lineHeight - l.height,
        d = f * u,
        g = l.getScaledHeight() + d,
        p = 0;
    "center" === o && (p = l.getScaledWidth() / 2), "right" === o && (p = l.getScaledWidth()), l.set({
      left: l.left - p,
      top: l.top - (g - l.fontSize * (.07 + l._fontSizeFraction)) / l.lineHeight,
      strokeWidth: "undefined" != typeof h ? h : 1
    }), r(l);
  }, e.Text.fromObject = function (t, i) {
    return e.Object._fromObject("Text", t, i, "text");
  }, e.Text.genericFonts = ["sans-serif", "serif", "cursive", "fantasy", "monospace"], void (e.util.createAccessors && e.util.createAccessors(e.Text)));
}( true ? exports : undefined);
!function () {
  fabric.util.object.extend(fabric.Text.prototype, {
    isEmptyStyles: function isEmptyStyles(t) {
      if (!this.styles) return !0;
      if ("undefined" != typeof t && !this.styles[t]) return !0;
      var e = "undefined" == typeof t ? this.styles : {
        line: this.styles[t]
      };

      for (var i in e) {
        for (var r in e[i]) {
          for (var n in e[i][r]) {
            return !1;
          }
        }
      }

      return !0;
    },
    styleHas: function styleHas(t, e) {
      if (!this.styles || !t || "" === t) return !1;
      if ("undefined" != typeof e && !this.styles[e]) return !1;
      var i = "undefined" == typeof e ? this.styles : {
        line: this.styles[e]
      };

      for (var r in i) {
        for (var n in i[r]) {
          if ("undefined" != typeof i[r][n][t]) return !0;
        }
      }

      return !1;
    },
    cleanStyle: function cleanStyle(t) {
      if (!this.styles || !t || "" === t) return !1;
      var e,
          i,
          r,
          n = this.styles,
          s = 0,
          o = !0,
          a = 0;

      for (var c in n) {
        e = 0;

        for (var h in n[c]) {
          var r = n[c][h],
              l = r.hasOwnProperty(t);
          s++, l ? (i ? r[t] !== i && (o = !1) : i = r[t], r[t] === this[t] && delete r[t]) : o = !1, 0 !== Object.keys(r).length ? e++ : delete n[c][h];
        }

        0 === e && delete n[c];
      }

      for (var u = 0; u < this._textLines.length; u++) {
        a += this._textLines[u].length;
      }

      o && s === a && (this[t] = i, this.removeStyle(t));
    },
    removeStyle: function removeStyle(t) {
      if (this.styles && t && "" !== t) {
        var e,
            i,
            r,
            n = this.styles;

        for (i in n) {
          e = n[i];

          for (r in e) {
            delete e[r][t], 0 === Object.keys(e[r]).length && delete e[r];
          }

          0 === Object.keys(e).length && delete n[i];
        }
      }
    },
    _extendStyles: function _extendStyles(t, e) {
      var i = this.get2DCursorLocation(t);
      this._getLineStyle(i.lineIndex) || this._setLineStyle(i.lineIndex, {}), this._getStyleDeclaration(i.lineIndex, i.charIndex) || this._setStyleDeclaration(i.lineIndex, i.charIndex, {}), fabric.util.object.extend(this._getStyleDeclaration(i.lineIndex, i.charIndex), e);
    },
    get2DCursorLocation: function get2DCursorLocation(t, e) {
      "undefined" == typeof t && (t = this.selectionStart);

      for (var i = e ? this._unwrappedTextLines : this._textLines, r = i.length, n = 0; r > n; n++) {
        if (t <= i[n].length) return {
          lineIndex: n,
          charIndex: t
        };
        t -= i[n].length + 1;
      }

      return {
        lineIndex: n - 1,
        charIndex: i[n - 1].length < t ? i[n - 1].length : t
      };
    },
    getSelectionStyles: function getSelectionStyles(t, e, i) {
      "undefined" == typeof t && (t = this.selectionStart || 0), "undefined" == typeof e && (e = this.selectionEnd || t);

      for (var r = [], n = t; e > n; n++) {
        r.push(this.getStyleAtPosition(n, i));
      }

      return r;
    },
    getStyleAtPosition: function getStyleAtPosition(t, e) {
      var i = this.get2DCursorLocation(t),
          r = e ? this.getCompleteStyleDeclaration(i.lineIndex, i.charIndex) : this._getStyleDeclaration(i.lineIndex, i.charIndex);
      return r || {};
    },
    setSelectionStyles: function setSelectionStyles(t, e, i) {
      "undefined" == typeof e && (e = this.selectionStart || 0), "undefined" == typeof i && (i = this.selectionEnd || e);

      for (var r = e; i > r; r++) {
        this._extendStyles(r, t);
      }

      return this._forceClearCache = !0, this;
    },
    _getStyleDeclaration: function _getStyleDeclaration(t, e) {
      var i = this.styles && this.styles[t];
      return i ? i[e] : null;
    },
    getCompleteStyleDeclaration: function getCompleteStyleDeclaration(t, e) {
      for (var i, r = this._getStyleDeclaration(t, e) || {}, n = {}, s = 0; s < this._styleProperties.length; s++) {
        i = this._styleProperties[s], n[i] = "undefined" == typeof r[i] ? this[i] : r[i];
      }

      return n;
    },
    _setStyleDeclaration: function _setStyleDeclaration(t, e, i) {
      this.styles[t][e] = i;
    },
    _deleteStyleDeclaration: function _deleteStyleDeclaration(t, e) {
      delete this.styles[t][e];
    },
    _getLineStyle: function _getLineStyle(t) {
      return this.styles[t];
    },
    _setLineStyle: function _setLineStyle(t, e) {
      this.styles[t] = e;
    },
    _deleteLineStyle: function _deleteLineStyle(t) {
      delete this.styles[t];
    }
  });
}();
!function () {
  function t(t) {
    t.textDecoration && (t.textDecoration.indexOf("underline") > -1 && (t.underline = !0), t.textDecoration.indexOf("line-through") > -1 && (t.linethrough = !0), t.textDecoration.indexOf("overline") > -1 && (t.overline = !0), delete t.textDecoration);
  }

  fabric.IText = fabric.util.createClass(fabric.Text, fabric.Observable, {
    type: "i-text",
    selectionStart: 0,
    selectionEnd: 0,
    selectionColor: "rgba(17,119,255,0.3)",
    isEditing: !1,
    editable: !0,
    editingBorderColor: "rgba(102,153,255,0.25)",
    cursorWidth: 2,
    cursorColor: "#333",
    cursorDelay: 1e3,
    cursorDuration: 600,
    caching: !0,
    _reSpace: /\s|\n/,
    _currentCursorOpacity: 0,
    _selectionDirection: null,
    _abortCursorAnimation: !1,
    __widthOfSpace: [],
    inCompositionMode: !1,
    initialize: function initialize(t, e) {
      this.callSuper("initialize", t, e), this.initBehavior();
    },
    setSelectionStart: function setSelectionStart(t) {
      t = Math.max(t, 0), this._updateAndFire("selectionStart", t);
    },
    setSelectionEnd: function setSelectionEnd(t) {
      t = Math.min(t, this.text.length), this._updateAndFire("selectionEnd", t);
    },
    _updateAndFire: function _updateAndFire(t, e) {
      this[t] !== e && (this._fireSelectionChanged(), this[t] = e), this._updateTextarea();
    },
    _fireSelectionChanged: function _fireSelectionChanged() {
      this.fire("selection:changed"), this.canvas && this.canvas.fire("text:selection:changed", {
        target: this
      });
    },
    initDimensions: function initDimensions() {
      this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this.callSuper("initDimensions");
    },
    render: function render(t) {
      this.clearContextTop(), this.callSuper("render", t), this.cursorOffsetCache = {}, this.renderCursorOrSelection();
    },
    _render: function _render(t) {
      this.callSuper("_render", t);
    },
    clearContextTop: function clearContextTop(t) {
      if (this.isEditing && this.canvas && this.canvas.contextTop) {
        var e = this.canvas.contextTop,
            i = this.canvas.viewportTransform;
        e.save(), e.transform(i[0], i[1], i[2], i[3], i[4], i[5]), this.transform(e), this.transformMatrix && e.transform.apply(e, this.transformMatrix), this._clearTextArea(e), t || e.restore();
      }
    },
    renderCursorOrSelection: function renderCursorOrSelection() {
      if (this.isEditing && this.canvas) {
        var t,
            e = this._getCursorBoundaries();

        this.canvas && this.canvas.contextTop ? (t = this.canvas.contextTop, this.clearContextTop(!0)) : (t = this.canvas.contextContainer, t.save()), this.selectionStart === this.selectionEnd ? this.renderCursor(e, t) : this.renderSelection(e, t), t.restore();
      }
    },
    _clearTextArea: function _clearTextArea(t) {
      var e = this.width + 4,
          i = this.height + 4;
      t.clearRect(-e / 2, -i / 2, e, i);
    },
    _getCursorBoundaries: function _getCursorBoundaries(t) {
      "undefined" == typeof t && (t = this.selectionStart);

      var e = this._getLeftOffset(),
          i = this._getTopOffset(),
          r = this._getCursorBoundariesOffsets(t);

      return {
        left: e,
        top: i,
        leftOffset: r.left,
        topOffset: r.top
      };
    },
    _getCursorBoundariesOffsets: function _getCursorBoundariesOffsets(t) {
      if (this.cursorOffsetCache && "top" in this.cursorOffsetCache) return this.cursorOffsetCache;
      var e,
          i,
          r,
          n,
          s = 0,
          o = 0,
          a = this.get2DCursorLocation(t);
      r = a.charIndex, i = a.lineIndex;

      for (var c = 0; i > c; c++) {
        s += this.getHeightOfLine(c);
      }

      e = this._getLineLeftOffset(i);
      var h = this.__charBounds[i][r];
      return h && (o = h.left), 0 !== this.charSpacing && r === this._textLines[i].length && (o -= this._getWidthOfCharSpacing()), n = {
        top: s,
        left: e + (o > 0 ? o : 0)
      }, this.cursorOffsetCache = n, this.cursorOffsetCache;
    },
    renderCursor: function renderCursor(t, e) {
      var i = this.get2DCursorLocation(),
          r = i.lineIndex,
          n = i.charIndex > 0 ? i.charIndex - 1 : 0,
          s = this.getValueOfPropertyAt(r, n, "fontSize"),
          o = this.scaleX * this.canvas.getZoom(),
          a = this.cursorWidth / o,
          c = t.topOffset,
          h = this.getValueOfPropertyAt(r, n, "deltaY");
      c += (1 - this._fontSizeFraction) * this.getHeightOfLine(r) / this.lineHeight - s * (1 - this._fontSizeFraction), this.inCompositionMode && this.renderSelection(t, e), e.fillStyle = this.getValueOfPropertyAt(r, n, "fill"), e.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity, e.fillRect(t.left + t.leftOffset - a / 2, c + t.top + h, a, s);
    },
    renderSelection: function renderSelection(t, e) {
      for (var i = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, r = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, n = -1 !== this.textAlign.indexOf("justify"), s = this.get2DCursorLocation(i), o = this.get2DCursorLocation(r), a = s.lineIndex, c = o.lineIndex, h = s.charIndex < 0 ? 0 : s.charIndex, l = o.charIndex < 0 ? 0 : o.charIndex, u = a; c >= u; u++) {
        var f = this._getLineLeftOffset(u) || 0,
            d = this.getHeightOfLine(u),
            g = 0,
            p = 0,
            v = 0;
        if (u === a && (p = this.__charBounds[a][h].left), u >= a && c > u) v = n && !this.isEndOfWrapping(u) ? this.width : this.getLineWidth(u) || 5;else if (u === c) if (0 === l) v = this.__charBounds[c][l].left;else {
          var b = this._getWidthOfCharSpacing();

          v = this.__charBounds[c][l - 1].left + this.__charBounds[c][l - 1].width - b;
        }
        g = d, (this.lineHeight < 1 || u === c && this.lineHeight > 1) && (d /= this.lineHeight), this.inCompositionMode ? (e.fillStyle = this.compositionColor || "black", e.fillRect(t.left + f + p, t.top + t.topOffset + d, v - p, 1)) : (e.fillStyle = this.selectionColor, e.fillRect(t.left + f + p, t.top + t.topOffset, v - p, d)), t.topOffset += g;
      }
    },
    getCurrentCharFontSize: function getCurrentCharFontSize() {
      var t = this._getCurrentCharIndex();

      return this.getValueOfPropertyAt(t.l, t.c, "fontSize");
    },
    getCurrentCharColor: function getCurrentCharColor() {
      var t = this._getCurrentCharIndex();

      return this.getValueOfPropertyAt(t.l, t.c, "fill");
    },
    _getCurrentCharIndex: function _getCurrentCharIndex() {
      var t = this.get2DCursorLocation(this.selectionStart, !0),
          e = t.charIndex > 0 ? t.charIndex - 1 : 0;
      return {
        l: t.lineIndex,
        c: e
      };
    }
  }), fabric.IText.fromObject = function (e, i) {
    if (t(e), e.styles) for (var r in e.styles) {
      for (var n in e.styles[r]) {
        t(e.styles[r][n]);
      }
    }

    fabric.Object._fromObject("IText", e, i, "text");
  };
}();
!function () {
  var t = fabric.util.object.clone;
  fabric.util.object.extend(fabric.IText.prototype, {
    initBehavior: function initBehavior() {
      this.initAddedHandler(), this.initRemovedHandler(), this.initCursorSelectionHandlers(), this.initDoubleClickSimulation(), this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    },
    onDeselect: function onDeselect() {
      this.isEditing && this.exitEditing(), this.selected = !1;
    },
    initAddedHandler: function initAddedHandler() {
      var t = this;
      this.on("added", function () {
        var e = t.canvas;
        e && (e._hasITextHandlers || (e._hasITextHandlers = !0, t._initCanvasHandlers(e)), e._iTextInstances = e._iTextInstances || [], e._iTextInstances.push(t));
      });
    },
    initRemovedHandler: function initRemovedHandler() {
      var t = this;
      this.on("removed", function () {
        var e = t.canvas;
        e && (e._iTextInstances = e._iTextInstances || [], fabric.util.removeFromArray(e._iTextInstances, t), 0 === e._iTextInstances.length && (e._hasITextHandlers = !1, t._removeCanvasHandlers(e)));
      });
    },
    _initCanvasHandlers: function _initCanvasHandlers(t) {
      t._mouseUpITextHandler = function () {
        t._iTextInstances && t._iTextInstances.forEach(function (t) {
          t.__isMousedown = !1;
        });
      }, t.on("mouse:up", t._mouseUpITextHandler);
    },
    _removeCanvasHandlers: function _removeCanvasHandlers(t) {
      t.off("mouse:up", t._mouseUpITextHandler);
    },
    _tick: function _tick() {
      this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete");
    },
    _animateCursor: function _animateCursor(t, e, i, r) {
      var n;
      return n = {
        isAborted: !1,
        abort: function abort() {
          this.isAborted = !0;
        }
      }, t.animate("_currentCursorOpacity", e, {
        duration: i,
        onComplete: function onComplete() {
          n.isAborted || t[r]();
        },
        onChange: function onChange() {
          t.canvas && t.selectionStart === t.selectionEnd && t.renderCursorOrSelection();
        },
        abort: function abort() {
          return n.isAborted;
        }
      }), n;
    },
    _onTickComplete: function _onTickComplete() {
      var t = this;
      this._cursorTimeout1 && clearTimeout(this._cursorTimeout1), this._cursorTimeout1 = setTimeout(function () {
        t._currentTickCompleteState = t._animateCursor(t, 0, this.cursorDuration / 2, "_tick");
      }, 100);
    },
    initDelayedCursor: function initDelayedCursor(t) {
      var e = this,
          i = t ? 0 : this.cursorDelay;
      this.abortCursorAnimation(), this._currentCursorOpacity = 1, this._cursorTimeout2 = setTimeout(function () {
        e._tick();
      }, i);
    },
    abortCursorAnimation: function abortCursorAnimation() {
      var t = this._currentTickState || this._currentTickCompleteState,
          e = this.canvas;
      this._currentTickState && this._currentTickState.abort(), this._currentTickCompleteState && this._currentTickCompleteState.abort(), clearTimeout(this._cursorTimeout1), clearTimeout(this._cursorTimeout2), this._currentCursorOpacity = 0, t && e && e.clearContext(e.contextTop || e.contextContainer);
    },
    selectAll: function selectAll() {
      return this.selectionStart = 0, this.selectionEnd = this._text.length, this._fireSelectionChanged(), this._updateTextarea(), this;
    },
    getSelectedText: function getSelectedText() {
      return this._text.slice(this.selectionStart, this.selectionEnd).join("");
    },
    findWordBoundaryLeft: function findWordBoundaryLeft(t) {
      var e = 0,
          i = t - 1;
      if (this._reSpace.test(this._text[i])) for (; this._reSpace.test(this._text[i]);) {
        e++, i--;
      }

      for (; /\S/.test(this._text[i]) && i > -1;) {
        e++, i--;
      }

      return t - e;
    },
    findWordBoundaryRight: function findWordBoundaryRight(t) {
      var e = 0,
          i = t;
      if (this._reSpace.test(this._text[i])) for (; this._reSpace.test(this._text[i]);) {
        e++, i++;
      }

      for (; /\S/.test(this._text[i]) && i < this.text.length;) {
        e++, i++;
      }

      return t + e;
    },
    findLineBoundaryLeft: function findLineBoundaryLeft(t) {
      for (var e = 0, i = t - 1; !/\n/.test(this._text[i]) && i > -1;) {
        e++, i--;
      }

      return t - e;
    },
    findLineBoundaryRight: function findLineBoundaryRight(t) {
      for (var e = 0, i = t; !/\n/.test(this._text[i]) && i < this.text.length;) {
        e++, i++;
      }

      return t + e;
    },
    searchWordBoundary: function searchWordBoundary(t, e) {
      for (var i = this._reSpace.test(this.text.charAt(t)) ? t - 1 : t, r = this.text.charAt(i), n = /[ \n\.,;!\?\-]/; !n.test(r) && i > 0 && i < this.text.length;) {
        i += e, r = this.text.charAt(i);
      }

      return n.test(r) && "\n" !== r && (i += 1 === e ? 0 : 1), i;
    },
    selectWord: function selectWord(t) {
      t = t || this.selectionStart;
      var e = this.searchWordBoundary(t, -1),
          i = this.searchWordBoundary(t, 1);
      this.selectionStart = e, this.selectionEnd = i, this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection();
    },
    selectLine: function selectLine(t) {
      t = t || this.selectionStart;
      var e = this.findLineBoundaryLeft(t),
          i = this.findLineBoundaryRight(t);
      return this.selectionStart = e, this.selectionEnd = i, this._fireSelectionChanged(), this._updateTextarea(), this;
    },
    enterEditing: function enterEditing(t) {
      return !this.isEditing && this.editable ? (this.canvas && (this.canvas.calcOffset(), this.exitEditingOnOthers(this.canvas)), this.isEditing = !0, this.initHiddenTextarea(t), this.hiddenTextarea.focus(), this.hiddenTextarea.value = this.text, this._updateTextarea(), this._saveEditingProps(), this._setEditingProps(), this._textBeforeEdit = this.text, this._tick(), this.fire("editing:entered"), this._fireSelectionChanged(), this.canvas ? (this.canvas.fire("text:editing:entered", {
        target: this
      }), this.initMouseMoveHandler(), this.canvas.requestRenderAll(), this) : this) : void 0;
    },
    exitEditingOnOthers: function exitEditingOnOthers(t) {
      t._iTextInstances && t._iTextInstances.forEach(function (t) {
        t.selected = !1, t.isEditing && t.exitEditing();
      });
    },
    initMouseMoveHandler: function initMouseMoveHandler() {
      this.canvas.on("mouse:move", this.mouseMoveHandler);
    },
    mouseMoveHandler: function mouseMoveHandler(t) {
      if (this.__isMousedown && this.isEditing) {
        var e = this.getSelectionStartFromPointer(t.e),
            i = this.selectionStart,
            r = this.selectionEnd;
        (e === this.__selectionStartOnMouseDown && i !== r || i !== e && r !== e) && (e > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown, this.selectionEnd = e) : (this.selectionStart = e, this.selectionEnd = this.__selectionStartOnMouseDown), (this.selectionStart !== i || this.selectionEnd !== r) && (this.restartCursorIfNeeded(), this._fireSelectionChanged(), this._updateTextarea(), this.renderCursorOrSelection()));
      }
    },
    _setEditingProps: function _setEditingProps() {
      this.hoverCursor = "text", this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"), this.borderColor = this.editingBorderColor, this.hasControls = this.selectable = !1, this.lockMovementX = this.lockMovementY = !0;
    },
    fromStringToGraphemeSelection: function fromStringToGraphemeSelection(t, e, i) {
      var r = i.slice(0, t),
          n = fabric.util.string.graphemeSplit(r).length;
      if (t === e) return {
        selectionStart: n,
        selectionEnd: n
      };
      var s = i.slice(t, e),
          o = fabric.util.string.graphemeSplit(s).length;
      return {
        selectionStart: n,
        selectionEnd: n + o
      };
    },
    fromGraphemeToStringSelection: function fromGraphemeToStringSelection(t, e, i) {
      var r = i.slice(0, t),
          n = r.join("").length;
      if (t === e) return {
        selectionStart: n,
        selectionEnd: n
      };
      var s = i.slice(t, e),
          o = s.join("").length;
      return {
        selectionStart: n,
        selectionEnd: n + o
      };
    },
    _updateTextarea: function _updateTextarea() {
      if (this.cursorOffsetCache = {}, this.hiddenTextarea) {
        if (!this.inCompositionMode) {
          var t = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
          this.hiddenTextarea.selectionStart = t.selectionStart, this.hiddenTextarea.selectionEnd = t.selectionEnd;
        }

        this.updateTextareaPosition();
      }
    },
    updateFromTextArea: function updateFromTextArea() {
      if (this.hiddenTextarea) {
        this.cursorOffsetCache = {}, this.text = this.hiddenTextarea.value, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords());
        var t = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value);
        this.selectionEnd = this.selectionStart = t.selectionEnd, this.inCompositionMode || (this.selectionStart = t.selectionStart), this.updateTextareaPosition();
      }
    },
    updateTextareaPosition: function updateTextareaPosition() {
      if (this.selectionStart === this.selectionEnd) {
        var t = this._calcTextareaPosition();

        this.hiddenTextarea.style.left = t.left, this.hiddenTextarea.style.top = t.top;
      }
    },
    _calcTextareaPosition: function _calcTextareaPosition() {
      if (!this.canvas) return {
        x: 1,
        y: 1
      };

      var t = this.inCompositionMode ? this.compositionStart : this.selectionStart,
          e = this._getCursorBoundaries(t),
          i = this.get2DCursorLocation(t),
          r = i.lineIndex,
          n = i.charIndex,
          s = this.getValueOfPropertyAt(r, n, "fontSize") * this.lineHeight,
          o = e.leftOffset,
          a = this.calcTransformMatrix(),
          c = {
        x: e.left + o,
        y: e.top + e.topOffset + s
      },
          h = this.canvas.upperCanvasEl,
          l = h.width,
          u = h.height,
          f = l - s,
          d = u - s,
          g = h.clientWidth / l,
          p = h.clientHeight / u;

      return c = fabric.util.transformPoint(c, a), c = fabric.util.transformPoint(c, this.canvas.viewportTransform), c.x *= g, c.y *= p, c.x < 0 && (c.x = 0), c.x > f && (c.x = f), c.y < 0 && (c.y = 0), c.y > d && (c.y = d), c.x += this.canvas._offset.left, c.y += this.canvas._offset.top, {
        left: c.x + "px",
        top: c.y + "px",
        fontSize: s + "px",
        charHeight: s
      };
    },
    _saveEditingProps: function _saveEditingProps() {
      this._savedProps = {
        hasControls: this.hasControls,
        borderColor: this.borderColor,
        lockMovementX: this.lockMovementX,
        lockMovementY: this.lockMovementY,
        hoverCursor: this.hoverCursor,
        defaultCursor: this.canvas && this.canvas.defaultCursor,
        moveCursor: this.canvas && this.canvas.moveCursor
      };
    },
    _restoreEditingProps: function _restoreEditingProps() {
      this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor, this.hasControls = this._savedProps.hasControls, this.borderColor = this._savedProps.borderColor, this.lockMovementX = this._savedProps.lockMovementX, this.lockMovementY = this._savedProps.lockMovementY, this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor, this.canvas.moveCursor = this._savedProps.moveCursor));
    },
    exitEditing: function exitEditing() {
      var t = this._textBeforeEdit !== this.text;
      return this.selected = !1, this.isEditing = !1, this.selectable = !0, this.selectionEnd = this.selectionStart, this.hiddenTextarea && (this.hiddenTextarea.blur && this.hiddenTextarea.blur(), this.canvas && this.hiddenTextarea.parentNode.removeChild(this.hiddenTextarea), this.hiddenTextarea = null), this.abortCursorAnimation(), this._restoreEditingProps(), this._currentCursorOpacity = 0, this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this.fire("editing:exited"), t && this.fire("modified"), this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler), this.canvas.fire("text:editing:exited", {
        target: this
      }), t && this.canvas.fire("object:modified", {
        target: this
      })), this;
    },
    _removeExtraneousStyles: function _removeExtraneousStyles() {
      for (var t in this.styles) {
        this._textLines[t] || delete this.styles[t];
      }
    },
    removeStyleFromTo: function removeStyleFromTo(t, e) {
      var i,
          r,
          n = this.get2DCursorLocation(t, !0),
          s = this.get2DCursorLocation(e, !0),
          o = n.lineIndex,
          a = n.charIndex,
          c = s.lineIndex,
          h = s.charIndex;

      if (o !== c) {
        if (this.styles[o]) for (i = a; i < this._unwrappedTextLines[o].length; i++) {
          delete this.styles[o][i];
        }
        if (this.styles[c]) for (i = h; i < this._unwrappedTextLines[c].length; i++) {
          r = this.styles[c][i], r && (this.styles[o] || (this.styles[o] = {}), this.styles[o][a + i - h] = r);
        }

        for (i = o + 1; c >= i; i++) {
          delete this.styles[i];
        }

        this.shiftLineStyles(c, o - c);
      } else if (this.styles[o]) {
        r = this.styles[o];
        var l,
            u,
            f = h - a;

        for (i = a; h > i; i++) {
          delete r[i];
        }

        for (u in this.styles[o]) {
          l = parseInt(u, 10), l >= h && (r[l - f] = r[u], delete r[u]);
        }
      }
    },
    shiftLineStyles: function shiftLineStyles(e, i) {
      var r = t(this.styles);

      for (var n in this.styles) {
        var s = parseInt(n, 10);
        s > e && (this.styles[s + i] = r[s], r[s - i] || delete this.styles[s]);
      }
    },
    restartCursorIfNeeded: function restartCursorIfNeeded() {
      (!this._currentTickState || this._currentTickState.isAborted || !this._currentTickCompleteState || this._currentTickCompleteState.isAborted) && this.initDelayedCursor();
    },
    insertNewlineStyleObject: function insertNewlineStyleObject(e, i, r, n) {
      var s,
          o = {},
          a = !1;
      r || (r = 1), this.shiftLineStyles(e, r), this.styles[e] && (s = this.styles[e][0 === i ? i : i - 1]);

      for (var c in this.styles[e]) {
        var h = parseInt(c, 10);
        h >= i && (a = !0, o[h - i] = this.styles[e][c], delete this.styles[e][c]);
      }

      for (a ? this.styles[e + r] = o : delete this.styles[e + r]; r > 1;) {
        r--, n && n[r] ? this.styles[e + r] = {
          0: t(n[r])
        } : s ? this.styles[e + r] = {
          0: t(s)
        } : delete this.styles[e + r];
      }

      this._forceClearCache = !0;
    },
    insertCharStyleObject: function insertCharStyleObject(e, i, r, n) {
      this.styles || (this.styles = {});
      var s = this.styles[e],
          o = s ? t(s) : {};
      r || (r = 1);

      for (var a in o) {
        var c = parseInt(a, 10);
        c >= i && (s[c + r] = o[c], o[c - r] || delete s[c]);
      }

      if (this._forceClearCache = !0, n) for (; r--;) {
        Object.keys(n[r]).length && (this.styles[e] || (this.styles[e] = {}), this.styles[e][i + r] = t(n[r]));
      } else if (s) for (var h = s[i ? i - 1 : 1]; h && r--;) {
        this.styles[e][i + r] = t(h);
      }
    },
    insertNewStyleBlock: function insertNewStyleBlock(t, e, i) {
      for (var r = this.get2DCursorLocation(e, !0), n = [0], s = 0, o = 0; o < t.length; o++) {
        "\n" === t[o] ? (s++, n[s] = 0) : n[s]++;
      }

      n[0] > 0 && (this.insertCharStyleObject(r.lineIndex, r.charIndex, n[0], i), i = i && i.slice(n[0] + 1)), s && this.insertNewlineStyleObject(r.lineIndex, r.charIndex + n[0], s);

      for (var o = 1; s > o; o++) {
        n[o] > 0 ? this.insertCharStyleObject(r.lineIndex + o, 0, n[o], i) : i && (this.styles[r.lineIndex + o][0] = i[0]), i = i && i.slice(n[o] + 1);
      }

      n[o] > 0 && this.insertCharStyleObject(r.lineIndex + o, 0, n[o], i);
    },
    setSelectionStartEndWithShift: function setSelectionStartEndWithShift(t, e, i) {
      t >= i ? (e === t ? this._selectionDirection = "left" : "right" === this._selectionDirection && (this._selectionDirection = "left", this.selectionEnd = t), this.selectionStart = i) : i > t && e > i ? "right" === this._selectionDirection ? this.selectionEnd = i : this.selectionStart = i : (e === t ? this._selectionDirection = "right" : "left" === this._selectionDirection && (this._selectionDirection = "right", this.selectionStart = e), this.selectionEnd = i);
    },
    setSelectionInBoundaries: function setSelectionInBoundaries() {
      var t = this.text.length;
      this.selectionStart > t ? this.selectionStart = t : this.selectionStart < 0 && (this.selectionStart = 0), this.selectionEnd > t ? this.selectionEnd = t : this.selectionEnd < 0 && (this.selectionEnd = 0);
    }
  });
}();
fabric.util.object.extend(fabric.IText.prototype, {
  initDoubleClickSimulation: function initDoubleClickSimulation() {
    this.__lastClickTime = +new Date(), this.__lastLastClickTime = +new Date(), this.__lastPointer = {}, this.on("mousedown", this.onMouseDown);
  },
  onMouseDown: function onMouseDown(t) {
    if (this.canvas) {
      this.__newClickTime = +new Date();
      var e = t.pointer;
      this.isTripleClick(e) && (this.fire("tripleclick", t), this._stopEvent(t.e)), this.__lastLastClickTime = this.__lastClickTime, this.__lastClickTime = this.__newClickTime, this.__lastPointer = e, this.__lastIsEditing = this.isEditing, this.__lastSelected = this.selected;
    }
  },
  isTripleClick: function isTripleClick(t) {
    return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === t.x && this.__lastPointer.y === t.y;
  },
  _stopEvent: function _stopEvent(t) {
    t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation();
  },
  initCursorSelectionHandlers: function initCursorSelectionHandlers() {
    this.initMousedownHandler(), this.initMouseupHandler(), this.initClicks();
  },
  initClicks: function initClicks() {
    this.on("mousedblclick", function (t) {
      this.selectWord(this.getSelectionStartFromPointer(t.e));
    }), this.on("tripleclick", function (t) {
      this.selectLine(this.getSelectionStartFromPointer(t.e));
    });
  },
  _mouseDownHandler: function _mouseDownHandler(t) {
    !this.canvas || !this.editable || t.e.button && 1 !== t.e.button || (this.__isMousedown = !0, this.selected && this.setCursorByClick(t.e), this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart, this.selectionStart === this.selectionEnd && this.abortCursorAnimation(), this.renderCursorOrSelection()));
  },
  _mouseDownHandlerBefore: function _mouseDownHandlerBefore(t) {
    !this.canvas || !this.editable || t.e.button && 1 !== t.e.button || this === this.canvas._activeObject && (this.selected = !0);
  },
  initMousedownHandler: function initMousedownHandler() {
    this.on("mousedown", this._mouseDownHandler), this.on("mousedown:before", this._mouseDownHandlerBefore);
  },
  initMouseupHandler: function initMouseupHandler() {
    this.on("mouseup", this.mouseUpHandler);
  },
  mouseUpHandler: function mouseUpHandler(t) {
    if (this.__isMousedown = !1, !(!this.editable || this.group || t.transform && t.transform.actionPerformed || t.e.button && 1 !== t.e.button)) {
      if (this.canvas) {
        var e = this.canvas._activeObject;
        if (e && e !== this) return;
      }

      this.__lastSelected && !this.__corner ? (this.selected = !1, this.__lastSelected = !1, this.enterEditing(t.e), this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()) : this.selected = !0;
    }
  },
  setCursorByClick: function setCursorByClick(t) {
    var e = this.getSelectionStartFromPointer(t),
        i = this.selectionStart,
        r = this.selectionEnd;
    t.shiftKey ? this.setSelectionStartEndWithShift(i, r, e) : (this.selectionStart = e, this.selectionEnd = e), this.isEditing && (this._fireSelectionChanged(), this._updateTextarea());
  },
  getSelectionStartFromPointer: function getSelectionStartFromPointer(t) {
    for (var e, i, r = this.getLocalPointer(t), n = 0, s = 0, o = 0, a = 0, c = 0, h = 0, l = this._textLines.length; l > h && o <= r.y; h++) {
      o += this.getHeightOfLine(h) * this.scaleY, c = h, h > 0 && (a += this._textLines[h - 1].length + 1);
    }

    e = this._getLineLeftOffset(c), s = e * this.scaleX, i = this._textLines[c];

    for (var u = 0, f = i.length; f > u && (n = s, s += this.__charBounds[c][u].kernedWidth * this.scaleX, s <= r.x); u++) {
      a++;
    }

    return this._getNewSelectionStartFromOffset(r, n, s, a, f);
  },
  _getNewSelectionStartFromOffset: function _getNewSelectionStartFromOffset(t, e, i, r, n) {
    var s = t.x - e,
        o = i - t.x,
        a = o > s || 0 > o ? 0 : 1,
        c = r + a;
    return this.flipX && (c = n - c), c > this._text.length && (c = this._text.length), c;
  }
});
fabric.util.object.extend(fabric.IText.prototype, {
  initHiddenTextarea: function initHiddenTextarea() {
    this.hiddenTextarea = fabric.document.createElement("textarea"), this.hiddenTextarea.setAttribute("autocapitalize", "off"), this.hiddenTextarea.setAttribute("autocorrect", "off"), this.hiddenTextarea.setAttribute("autocomplete", "off"), this.hiddenTextarea.setAttribute("spellcheck", "false"), this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""), this.hiddenTextarea.setAttribute("wrap", "off");

    var t = this._calcTextareaPosition();

    this.hiddenTextarea.style.cssText = "position: absolute; top: " + t.top + "; left: " + t.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; paddingｰtop: " + t.fontSize + ";", fabric.document.body.appendChild(this.hiddenTextarea), fabric.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)), fabric.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)), fabric.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)), fabric.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)), fabric.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)), fabric.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)), fabric.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)), fabric.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)), fabric.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)), !this._clickHandlerInitialized && this.canvas && (fabric.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)), this._clickHandlerInitialized = !0);
  },
  keysMap: {
    9: "exitEditing",
    27: "exitEditing",
    33: "moveCursorUp",
    34: "moveCursorDown",
    35: "moveCursorRight",
    36: "moveCursorLeft",
    37: "moveCursorLeft",
    38: "moveCursorUp",
    39: "moveCursorRight",
    40: "moveCursorDown"
  },
  ctrlKeysMapUp: {
    67: "copy",
    88: "cut"
  },
  ctrlKeysMapDown: {
    65: "selectAll"
  },
  onClick: function onClick() {
    this.hiddenTextarea && this.hiddenTextarea.focus();
  },
  onKeyDown: function onKeyDown(t) {
    if (this.isEditing && !this.inCompositionMode) {
      if (t.keyCode in this.keysMap) this[this.keysMap[t.keyCode]](t);else {
        if (!(t.keyCode in this.ctrlKeysMapDown && (t.ctrlKey || t.metaKey))) return;
        this[this.ctrlKeysMapDown[t.keyCode]](t);
      }
      t.stopImmediatePropagation(), t.preventDefault(), t.keyCode >= 33 && t.keyCode <= 40 ? (this.clearContextTop(), this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll();
    }
  },
  onKeyUp: function onKeyUp(t) {
    return !this.isEditing || this._copyDone || this.inCompositionMode ? void (this._copyDone = !1) : void (t.keyCode in this.ctrlKeysMapUp && (t.ctrlKey || t.metaKey) && (this[this.ctrlKeysMapUp[t.keyCode]](t), t.stopImmediatePropagation(), t.preventDefault(), this.canvas && this.canvas.requestRenderAll()));
  },
  onInput: function onInput(t) {
    var e = this.fromPaste;

    if (this.fromPaste = !1, t && t.stopPropagation(), this.isEditing) {
      var i,
          r,
          n = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText,
          s = this._text.length,
          o = n.length,
          a = o - s;

      if ("" === this.hiddenTextarea.value) return this.styles = {}, this.updateFromTextArea(), this.fire("changed"), void (this.canvas && (this.canvas.fire("text:changed", {
        target: this
      }), this.canvas.requestRenderAll()));
      var c = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value),
          h = this.selectionStart > c.selectionStart;
      this.selectionStart !== this.selectionEnd ? (i = this._text.slice(this.selectionStart, this.selectionEnd), a += this.selectionEnd - this.selectionStart) : s > o && (i = h ? this._text.slice(this.selectionEnd + a, this.selectionEnd) : this._text.slice(this.selectionStart, this.selectionStart - a)), r = n.slice(c.selectionEnd - a, c.selectionEnd), i && i.length && (this.selectionStart !== this.selectionEnd ? this.removeStyleFromTo(this.selectionStart, this.selectionEnd) : h ? this.removeStyleFromTo(this.selectionEnd - i.length, this.selectionEnd) : this.removeStyleFromTo(this.selectionEnd, this.selectionEnd + i.length)), r.length && (e && r.join("") === fabric.copiedText ? this.insertNewStyleBlock(r, this.selectionStart, fabric.copiedTextStyle) : this.insertNewStyleBlock(r, this.selectionStart)), this.updateFromTextArea(), this.fire("changed"), this.canvas && (this.canvas.fire("text:changed", {
        target: this
      }), this.canvas.requestRenderAll());
    }
  },
  onCompositionStart: function onCompositionStart() {
    this.inCompositionMode = !0;
  },
  onCompositionEnd: function onCompositionEnd() {
    this.inCompositionMode = !1;
  },
  onCompositionUpdate: function onCompositionUpdate(t) {
    this.compositionStart = t.target.selectionStart, this.compositionEnd = t.target.selectionEnd, this.updateTextareaPosition();
  },
  copy: function copy() {
    this.selectionStart !== this.selectionEnd && (fabric.copiedText = this.getSelectedText(), fabric.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0), this._copyDone = !0);
  },
  paste: function paste() {
    this.fromPaste = !0;
  },
  _getClipboardData: function _getClipboardData(t) {
    return t && t.clipboardData || fabric.window.clipboardData;
  },
  _getWidthBeforeCursor: function _getWidthBeforeCursor(t, e) {
    var i,
        r = this._getLineLeftOffset(t);

    return e > 0 && (i = this.__charBounds[t][e - 1], r += i.left + i.width), r;
  },
  getDownCursorOffset: function getDownCursorOffset(t, e) {
    var i = this._getSelectionForOffset(t, e),
        r = this.get2DCursorLocation(i),
        n = r.lineIndex;

    if (n === this._textLines.length - 1 || t.metaKey || 34 === t.keyCode) return this._text.length - i;

    var s = r.charIndex,
        o = this._getWidthBeforeCursor(n, s),
        a = this._getIndexOnLine(n + 1, o),
        c = this._textLines[n].slice(s);

    return c.length + a + 2;
  },
  _getSelectionForOffset: function _getSelectionForOffset(t, e) {
    return t.shiftKey && this.selectionStart !== this.selectionEnd && e ? this.selectionEnd : this.selectionStart;
  },
  getUpCursorOffset: function getUpCursorOffset(t, e) {
    var i = this._getSelectionForOffset(t, e),
        r = this.get2DCursorLocation(i),
        n = r.lineIndex;

    if (0 === n || t.metaKey || 33 === t.keyCode) return -i;

    var s = r.charIndex,
        o = this._getWidthBeforeCursor(n, s),
        a = this._getIndexOnLine(n - 1, o),
        c = this._textLines[n].slice(0, s);

    return -this._textLines[n - 1].length + a - c.length;
  },
  _getIndexOnLine: function _getIndexOnLine(t, e) {
    for (var i, r, n = this._textLines[t], s = this._getLineLeftOffset(t), o = s, a = 0, c = 0, h = n.length; h > c; c++) {
      if (i = this.__charBounds[t][c].width, o += i, o > e) {
        r = !0;
        var l = o - i,
            u = o,
            f = Math.abs(l - e),
            d = Math.abs(u - e);
        a = f > d ? c : c - 1;
        break;
      }
    }

    return r || (a = n.length - 1), a;
  },
  moveCursorDown: function moveCursorDown(t) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", t);
  },
  moveCursorUp: function moveCursorUp(t) {
    (0 !== this.selectionStart || 0 !== this.selectionEnd) && this._moveCursorUpOrDown("Up", t);
  },
  _moveCursorUpOrDown: function _moveCursorUpOrDown(t, e) {
    var i = "get" + t + "CursorOffset",
        r = this[i](e, "right" === this._selectionDirection);
    e.shiftKey ? this.moveCursorWithShift(r) : this.moveCursorWithoutShift(r), 0 !== r && (this.setSelectionInBoundaries(), this.abortCursorAnimation(), this._currentCursorOpacity = 1, this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  },
  moveCursorWithShift: function moveCursorWithShift(t) {
    var e = "left" === this._selectionDirection ? this.selectionStart + t : this.selectionEnd + t;
    return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e), 0 !== t;
  },
  moveCursorWithoutShift: function moveCursorWithoutShift(t) {
    return 0 > t ? (this.selectionStart += t, this.selectionEnd = this.selectionStart) : (this.selectionEnd += t, this.selectionStart = this.selectionEnd), 0 !== t;
  },
  moveCursorLeft: function moveCursorLeft(t) {
    (0 !== this.selectionStart || 0 !== this.selectionEnd) && this._moveCursorLeftOrRight("Left", t);
  },
  _move: function _move(t, e, i) {
    var r;
    if (t.altKey) r = this["findWordBoundary" + i](this[e]);else {
      if (!t.metaKey && 35 !== t.keyCode && 36 !== t.keyCode) return this[e] += "Left" === i ? -1 : 1, !0;
      r = this["findLineBoundary" + i](this[e]);
    }
    return void 0 !== _typeof(r) && this[e] !== r ? (this[e] = r, !0) : void 0;
  },
  _moveLeft: function _moveLeft(t, e) {
    return this._move(t, e, "Left");
  },
  _moveRight: function _moveRight(t, e) {
    return this._move(t, e, "Right");
  },
  moveCursorLeftWithoutShift: function moveCursorLeftWithoutShift(t) {
    var e = !0;
    return this._selectionDirection = "left", this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (e = this._moveLeft(t, "selectionStart")), this.selectionEnd = this.selectionStart, e;
  },
  moveCursorLeftWithShift: function moveCursorLeftWithShift(t) {
    return "right" === this._selectionDirection && this.selectionStart !== this.selectionEnd ? this._moveLeft(t, "selectionEnd") : 0 !== this.selectionStart ? (this._selectionDirection = "left", this._moveLeft(t, "selectionStart")) : void 0;
  },
  moveCursorRight: function moveCursorRight(t) {
    this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", t);
  },
  _moveCursorLeftOrRight: function _moveCursorLeftOrRight(t, e) {
    var i = "moveCursor" + t + "With";
    this._currentCursorOpacity = 1, i += e.shiftKey ? "Shift" : "outShift", this[i](e) && (this.abortCursorAnimation(), this.initDelayedCursor(), this._fireSelectionChanged(), this._updateTextarea());
  },
  moveCursorRightWithShift: function moveCursorRightWithShift(t) {
    return "left" === this._selectionDirection && this.selectionStart !== this.selectionEnd ? this._moveRight(t, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = "right", this._moveRight(t, "selectionEnd")) : void 0;
  },
  moveCursorRightWithoutShift: function moveCursorRightWithoutShift(t) {
    var e = !0;
    return this._selectionDirection = "right", this.selectionStart === this.selectionEnd ? (e = this._moveRight(t, "selectionStart"), this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd, e;
  },
  removeChars: function removeChars(t, e) {
    "undefined" == typeof e && (e = t + 1), this.removeStyleFromTo(t, e), this._text.splice(t, e - t), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
  },
  insertChars: function insertChars(t, e, i, r) {
    "undefined" == typeof r && (r = i), r > i && this.removeStyleFromTo(i, r);
    var n = fabric.util.string.graphemeSplit(t);
    this.insertNewStyleBlock(n, i, e), this._text = [].concat(this._text.slice(0, i), n, this._text.slice(r)), this.text = this._text.join(""), this.set("dirty", !0), this._shouldClearDimensionCache() && (this.initDimensions(), this.setCoords()), this._removeExtraneousStyles();
  }
});
!function () {
  var t = fabric.util.toFixed,
      e = /  +/g;
  fabric.util.object.extend(fabric.Text.prototype, {
    toSVG: function toSVG(t) {
      var e = this._getSVGLeftTopOffsets(),
          i = this._getSVGTextAndBg(e.textTop, e.textLeft),
          r = this._wrapSVGTextAndBg(i);

      return this._createBaseSVGMarkup(r, {
        reviver: t,
        noStyle: !0,
        withShadow: !0
      });
    },
    _getSVGLeftTopOffsets: function _getSVGLeftTopOffsets() {
      return {
        textLeft: -this.width / 2,
        textTop: -this.height / 2,
        lineTop: this.getHeightOfLine(0)
      };
    },
    _wrapSVGTextAndBg: function _wrapSVGTextAndBg(t) {
      var e = !0,
          i = this.getSvgTextDecoration(this);
      return [t.textBgRects.join(""), '		<text xml:space="preserve" ', this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "", this.fontSize ? 'font-size="' + this.fontSize + '" ' : "", this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "", this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "", i ? 'text-decoration="' + i + '" ' : "", 'style="', this.getSvgStyles(e), '"', this.addPaintOrder(), " >", t.textSpans.join(""), "</text>\n"];
    },
    _getSVGTextAndBg: function _getSVGTextAndBg(t, e) {
      var i,
          r = [],
          n = [],
          s = t;

      this._setSVGBg(n);

      for (var o = 0, a = this._textLines.length; a > o; o++) {
        i = this._getLineLeftOffset(o), (this.textBackgroundColor || this.styleHas("textBackgroundColor", o)) && this._setSVGTextLineBg(n, o, e + i, s), this._setSVGTextLineText(r, o, e + i, s), s += this.getHeightOfLine(o);
      }

      return {
        textSpans: r,
        textBgRects: n
      };
    },
    _createTextCharSpan: function _createTextCharSpan(i, r, n, s) {
      var o = i !== i.trim() || i.match(e),
          a = this.getSvgSpanStyles(r, o),
          c = a ? 'style="' + a + '"' : "",
          h = r.deltaY,
          l = "",
          u = fabric.Object.NUM_FRACTION_DIGITS;
      return h && (l = ' dy="' + t(h, u) + '" '), ['<tspan x="', t(n, u), '" y="', t(s, u), '" ', l, c, ">", fabric.util.string.escapeXml(i), "</tspan>"].join("");
    },
    _setSVGTextLineText: function _setSVGTextLineText(t, e, i, r) {
      var n,
          s,
          o,
          a,
          c,
          h = this.getHeightOfLine(e),
          l = -1 !== this.textAlign.indexOf("justify"),
          u = "",
          f = 0,
          d = this._textLines[e];
      r += h * (1 - this._fontSizeFraction) / this.lineHeight;

      for (var g = 0, p = d.length - 1; p >= g; g++) {
        c = g === p || this.charSpacing, u += d[g], o = this.__charBounds[e][g], 0 === f ? (i += o.kernedWidth - o.width, f += o.width) : f += o.kernedWidth, l && !c && this._reSpaceAndTab.test(d[g]) && (c = !0), c || (n = n || this.getCompleteStyleDeclaration(e, g), s = this.getCompleteStyleDeclaration(e, g + 1), c = this._hasStyleChangedForSvg(n, s)), c && (a = this._getStyleDeclaration(e, g) || {}, t.push(this._createTextCharSpan(u, a, i, r)), u = "", n = s, i += f, f = 0);
      }
    },
    _pushTextBgRect: function _pushTextBgRect(e, i, r, n, s, o) {
      var a = fabric.Object.NUM_FRACTION_DIGITS;
      e.push("		<rect ", this._getFillAttributes(i), ' x="', t(r, a), '" y="', t(n, a), '" width="', t(s, a), '" height="', t(o, a), '"></rect>\n');
    },
    _setSVGTextLineBg: function _setSVGTextLineBg(t, e, i, r) {
      for (var n, s, o = this._textLines[e], a = this.getHeightOfLine(e) / this.lineHeight, c = 0, h = 0, l = this.getValueOfPropertyAt(e, 0, "textBackgroundColor"), u = 0, f = o.length; f > u; u++) {
        n = this.__charBounds[e][u], s = this.getValueOfPropertyAt(e, u, "textBackgroundColor"), s !== l ? (l && this._pushTextBgRect(t, l, i + h, r, c, a), h = n.left, c = n.width, l = s) : c += n.kernedWidth;
      }

      s && this._pushTextBgRect(t, s, i + h, r, c, a);
    },
    _getFillAttributes: function _getFillAttributes(t) {
      var e = t && "string" == typeof t ? new fabric.Color(t) : "";
      return e && e.getSource() && 1 !== e.getAlpha() ? 'opacity="' + e.getAlpha() + '" fill="' + e.setAlpha(1).toRgb() + '"' : 'fill="' + t + '"';
    },
    _getSVGLineTopOffset: function _getSVGLineTopOffset(t) {
      for (var e = 0, i = 0, r = 0; t > r; r++) {
        e += this.getHeightOfLine(r);
      }

      return i = this.getHeightOfLine(r), {
        lineTop: e,
        offset: (this._fontSizeMult - this._fontSizeFraction) * i / (this.lineHeight * this._fontSizeMult)
      };
    },
    getSvgStyles: function getSvgStyles(t) {
      var e = fabric.Object.prototype.getSvgStyles.call(this, t);
      return e + " white-space: pre;";
    }
  });
}();
!function (t) {
  "use strict";

  var e = t.fabric || (t.fabric = {});
  e.Textbox = e.util.createClass(e.IText, e.Observable, {
    type: "textbox",
    minWidth: 20,
    dynamicMinWidth: 2,
    __cachedLines: null,
    lockScalingFlip: !0,
    noScaleCache: !1,
    _dimensionAffectingProps: e.Text.prototype._dimensionAffectingProps.concat("width"),
    initDimensions: function initDimensions() {
      this.__skipDimension || (this.isEditing && this.initDelayedCursor(), this.clearContextTop(), this._clearCache(), this.dynamicMinWidth = 0, this._styleMap = this._generateStyleMap(this._splitText()), this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth), -1 !== this.textAlign.indexOf("justify") && this.enlargeSpaces(), this.height = this.calcTextHeight(), this.saveState({
        propertySet: "_dimensionAffectingProps"
      }));
    },
    _generateStyleMap: function _generateStyleMap(t) {
      for (var e = 0, i = 0, r = 0, n = {}, s = 0; s < t.graphemeLines.length; s++) {
        "\n" === t.graphemeText[r] && s > 0 ? (i = 0, r++, e++) : this._reSpaceAndTab.test(t.graphemeText[r]) && s > 0 && (i++, r++), n[s] = {
          line: e,
          offset: i
        }, r += t.graphemeLines[s].length, i += t.graphemeLines[s].length;
      }

      return n;
    },
    styleHas: function styleHas(t, i) {
      if (this._styleMap && !this.isWrapping) {
        var r = this._styleMap[i];
        r && (i = r.line);
      }

      return e.Text.prototype.styleHas.call(this, t, i);
    },
    isEmptyStyles: function isEmptyStyles(t) {
      var e,
          i,
          r = 0,
          n = t + 1,
          s = !1,
          o = this._styleMap[t],
          a = this._styleMap[t + 1];
      o && (t = o.line, r = o.offset), a && (n = a.line, s = n === t, e = a.offset), i = "undefined" == typeof t ? this.styles : {
        line: this.styles[t]
      };

      for (var c in i) {
        for (var h in i[c]) {
          if (h >= r && (!s || e > h)) for (var l in i[c][h]) {
            return !1;
          }
        }
      }

      return !0;
    },
    _getStyleDeclaration: function _getStyleDeclaration(t, e) {
      if (this._styleMap && !this.isWrapping) {
        var i = this._styleMap[t];
        if (!i) return null;
        t = i.line, e = i.offset + e;
      }

      return this.callSuper("_getStyleDeclaration", t, e);
    },
    _setStyleDeclaration: function _setStyleDeclaration(t, e, i) {
      var r = this._styleMap[t];
      t = r.line, e = r.offset + e, this.styles[t][e] = i;
    },
    _deleteStyleDeclaration: function _deleteStyleDeclaration(t, e) {
      var i = this._styleMap[t];
      t = i.line, e = i.offset + e, delete this.styles[t][e];
    },
    _getLineStyle: function _getLineStyle(t) {
      var e = this._styleMap[t];
      return this.styles[e.line];
    },
    _setLineStyle: function _setLineStyle(t, e) {
      var i = this._styleMap[t];
      this.styles[i.line] = e;
    },
    _deleteLineStyle: function _deleteLineStyle(t) {
      var e = this._styleMap[t];
      delete this.styles[e.line];
    },
    _wrapText: function _wrapText(t, e) {
      var i,
          r = [];

      for (this.isWrapping = !0, i = 0; i < t.length; i++) {
        r = r.concat(this._wrapLine(t[i], i, e));
      }

      return this.isWrapping = !1, r;
    },
    _measureWord: function _measureWord(t, e, i) {
      var r,
          n = 0,
          s = !0;
      i = i || 0;

      for (var o = 0, a = t.length; a > o; o++) {
        var c = this._getGraphemeBox(t[o], e, o + i, r, s);

        n += c.kernedWidth, r = t[o];
      }

      return n;
    },
    _wrapLine: function _wrapLine(t, i, r, n) {
      var s = 0,
          o = [],
          a = [],
          c = t.split(this._reSpaceAndTab),
          h = "",
          l = 0,
          u = " ",
          f = 0,
          d = 0,
          g = 0,
          p = !0,
          v = this._getWidthOfCharSpacing(),
          n = n || 0;

      r -= n;

      for (var b = 0; b < c.length; b++) {
        h = e.util.string.graphemeSplit(c[b]), f = this._measureWord(h, i, l), l += h.length, s += d + f - v, s >= r && !p ? (o.push(a), a = [], s = f, p = !0) : s += v, p || a.push(u), a = a.concat(h), d = this._measureWord([u], i, l), l++, p = !1, f > g && (g = f);
      }

      return b && o.push(a), g + n > this.dynamicMinWidth && (this.dynamicMinWidth = g - v + n), o;
    },
    isEndOfWrapping: function isEndOfWrapping(t) {
      return this._styleMap[t + 1] ? this._styleMap[t + 1].line !== this._styleMap[t].line ? !0 : !1 : !0;
    },
    _splitTextIntoLines: function _splitTextIntoLines(t) {
      for (var i = e.Text.prototype._splitTextIntoLines.call(this, t), r = this._wrapText(i.lines, this.width), n = new Array(r.length), s = 0; s < r.length; s++) {
        n[s] = r[s].join("");
      }

      return i.lines = n, i.graphemeLines = r, i;
    },
    getMinWidth: function getMinWidth() {
      return Math.max(this.minWidth, this.dynamicMinWidth);
    },
    toObject: function toObject(t) {
      return this.callSuper("toObject", ["minWidth"].concat(t));
    }
  }), e.Textbox.fromObject = function (t, i) {
    return e.Object._fromObject("Textbox", t, i, "text");
  };
}( true ? exports : undefined);
!function () {
  var t = fabric.Canvas.prototype._setObjectScale;
  fabric.Canvas.prototype._setObjectScale = function (e, i, r, n, s, o, a) {
    var c = i.target;
    if (!("x" === s && c instanceof fabric.Textbox)) return t.call(fabric.Canvas.prototype, e, i, r, n, s, o, a);

    var h = c._getTransformedDimensions().x,
        l = c.width * (e.x / h);

    return l >= c.getMinWidth() ? (c.set("width", l), !0) : void 0;
  }, fabric.util.object.extend(fabric.Textbox.prototype, {
    _removeExtraneousStyles: function _removeExtraneousStyles() {
      for (var t in this._styleMap) {
        this._textLines[t] || delete this.styles[this._styleMap[t].line];
      }
    }
  });
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2).Buffer))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(4)
var ieee754 = __webpack_require__(5)
var isArray = __webpack_require__(6)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeContainer", function() { return freeContainer; });
/* harmony import */ var _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/**
 * @typedef {Object} freeContainer
 * @property {function(Boolean):void} setVisiblity
 * @property {function(Element):void} addItem
 * @property {function(Element, Element):void} insertBefore
 * @property {function(Element):void} removeItems
 * @property {function(String):void} setTitle
 * @property {function():void} del
 * @property {Object} DOMElements
 * @property {Element} DOMElements.wrapper
 * @property {Element} DOMElements.body
 * @property {Element} closeBtn
 */

/**
 * creates a new freeContaier
 * @param {Object} [opts]
 * @param {Boolean} [opts.disableCloseBtn]
 * @param {String} [opts.title]
 * @param {Boolean} [opts.enableMask]
 * @param {HTMLElement} [opts.parentElement]
 * @param {HTMLElement} [opts.drop]
 * @returns {freeContainer}
 */

function freeContainer() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var wrapper = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_0__["create"]('div', {
    className: 'CE_freeContainer_wrapper'
  });
  var handel = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_0__["create"]('div', {
    className: 'CE_controls grab'
  });
  var body = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_0__["create"]('div', {
    className: 'CE_body',
    onmousemove: bodyonmousemove
  });
  var closeBtn = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_0__["create"]('button', {
    className: 'CE_icon times',
    onclick: function onclick() {
      return setVisiblity(false);
    }
  });
  var mover = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_0__["create"]('span', {
    className: 'CE_mover',
    onmousedown: onmousedown,
    ontouchstart: onmousedown
  });
  var mask = null;
  var mainParent = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_0__["get"]('#CE_wrapper');
  var parentElement = opts.parentElement || mainParent;
  var start = {
    x: 0,
    y: 0
  };
  var move = {
    x: 0,
    y: 0
  };
  var bodyResize = false;
  var bodyMove = 0;
  var bodyStart = 0;

  if (opts.title) {
    setTitle(opts.title);
  }

  if (opts.enableMask) {
    mask = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_0__["create"]('div', {
      className: 'CE_mask',
      onclick: function onclick() {
        return setVisiblity(false);
      }
    });
    wrapper.style.zIndex = '1000';
  }

  mover.addEventListener('mousedown', function addGrabbing() {
    setTimeout(function () {
      handel.classList.remove('grab');
      handel.classList.add('grabbing');
    }, 10);
  });
  mover.addEventListener('mouseup', function removeGrabbing() {
    setTimeout(function () {
      handel.classList.add('grab');
      handel.classList.remove('grabbing');
    }, 10);
  });
  handel.appendChild(mover);

  if (opts && opts.disableCloseBtn) {} else {
    handel.appendChild(closeBtn);
  }

  for (var _i = 0, _arr = [handel, body]; _i < _arr.length; _i++) {
    var el = _arr[_i];
    wrapper.appendChild(el);
  }
  /**
   * 
   * @param {Boolean} bool
   */


  function setVisiblity(bool) {
    if (bool && !wrapper.parentElement) {
      parentElement.appendChild(wrapper);

      if (mask) {
        parentElement.appendChild(mask);
      }
    } else if (!bool && wrapper.parentElement) {
      wrapper.parentElement.removeChild(wrapper);

      if (mask) {
        mask.parentElement.removeChild(mask);
      }
    }
  }

  function del() {
    var children = wrapper.children;
    children = _toConsumableArray(children);
    wrapper.removeEvents();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var child = _step.value;
        child.removeEvents();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (wrapper.parentElement) {
      wrapper.parentElement.removeChild(wrapper);
      wrapper = null;
    }

    if (mask) {
      mask.removeEvents();
      mask.parentElement.removeChild(mask);
      mask = null;
    }
  }

  function setTitle(title) {
    mover.setAttribute('data-title', title);
  }

  function addItems(el) {
    if (Array.isArray(el)) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = el[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var e = _step2.value;
          body.appendChild(e);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    } else {
      body.appendChild(el);
    }
  }

  function removeItem(el) {
    body.removeChild(el);
  }

  function insertBefore(el, refel) {
    body.insertBefore(el, refel);
  }
  /**
   * 
   * @param {MouseEvent | TouchEvent} e 
   */


  function onmousedown(e) {
    e.preventDefault();
    start.x = e.clientX || e.touches[0].clientX;
    start.y = e.clientY || e.touches[0].clientY;
    var wrapperClient = wrapper.getBoundingClientRect();
    var wrapperPClient = mainParent.getBoundingClientRect();
    var x = wrapperClient.x - wrapperPClient.x;
    var y = wrapperClient.y - wrapperPClient.y;
    wrapper.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
    wrapper.style.position = 'absolute';
    mainParent.appendChild(wrapper);
    document.onmousemove = onmousemove;
    document.ontouchmove = onmousemove;
    document.onmouseup = onmouseup;
    document.ontouchend = onmouseup;
  }
  /**
   * 
   * @param {MouseEvent|TouchEvent} e
   */


  function onmousemove(e) {
    e.preventDefault();
    var cx = e.clientX || e.touches[0].clientX;
    var cy = e.clientY || e.touches[0].clientY;
    move.x = cx - start.x;
    move.y = cy - start.y;
    start.x = cx;
    start.y = cy;
    var wrapperClient = wrapper.getBoundingClientRect();
    var wrapperPClient = mainParent.getBoundingClientRect();
    var x = wrapperClient.x - wrapperPClient.x;
    var y = wrapperClient.y - wrapperPClient.y;
    var dropArea = getDropArea();

    if (opts.drop && dropArea.max.x >= wrapperClient.x && dropArea.min.x <= wrapperClient.x && dropArea.max.y >= wrapperClient.y && dropArea.min.y <= wrapperClient.y) {
      opts.drop.classList.add('CE_highlight');
    } else if (opts.drop) {
      opts.drop.classList.remove('CE_highlight');
    }

    if (y + move.y <= 0) return;
    if (x + move.x <= 0) return;
    wrapper.style.transform = "translate(".concat(x + move.x, "px, ").concat(y + move.y, "px)");
  }

  function onmouseup() {
    var dropArea = getDropArea();
    var wrapperClient = wrapper.getBoundingClientRect();

    if (opts.drop && dropArea.max.x >= wrapperClient.x && dropArea.min.x <= wrapperClient.x && dropArea.max.y >= wrapperClient.y && dropArea.min.y <= wrapperClient.y) {
      wrapper.style.removeProperty('position');
      wrapper.style.removeProperty('transform');
      opts.drop.classList.remove('CE_highlight');
      parentElement.appendChild(wrapper);
    } else {
      mainParent.appendChild(wrapper);
    }

    document.onmouseup = null;
    document.ontouchend = null;
    document.onmousemove = null;
    document.ontouchmove = null;
  }
  /**
   * 
   * @param {MouseEvent} e 
   */


  function bodyonmousemove(e) {
    var x = e.offsetX;
    var width = body.getBoundingClientRect().width;

    if (bodyResize) {
      bodyMove = e.clientX - bodyStart;
      bodyStart = e.clientX;
      body.style.width = width + bodyMove + 'px';
    } else {
      if (x + 10 > width) {
        body.style.cursor = 'e-resize';
        body.onmousedown = bodyonmousedown;
      } else {
        body.style.cursor = '';
        body.onmousedown = null;
      }
    }
  }
  /**
   * 
   * @param {MouseEvent} e 
   */


  function bodyonmousedown(e) {
    bodyStart = e.clientX;
    bodyResize = true;
    body.onmousemove = null;
    document.onmousemove = bodyonmousemove;
    document.onmouseup = bodyonmouseup;
  }

  function bodyonmouseup() {
    bodyResize = false;
    body.onmousemove = bodyonmousemove;
    body.onmousedown = null;
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function getDropArea() {
    var dropArea = {
      min: {
        x: 0,
        y: 0
      },
      max: {
        x: 0,
        y: 0
      }
    };

    if (opts.drop) {
      var dropClient = opts.drop.getBoundingClientRect();
      dropArea.min.x = dropClient.x;
      dropArea.min.y = dropClient.y;
      dropArea.max.x = dropClient.x + dropClient.width;
      dropArea.max.y = dropClient.y + dropClient.height;
    }

    return dropArea;
  }

  return {
    DOMElements: {
      wrapper: wrapper,
      body: body
    },
    setVisiblity: setVisiblity,
    del: del,
    addItems: addItems,
    removeItem: removeItem,
    insertBefore: insertBefore,
    setTitle: setTitle,
    closeBtn: closeBtn
  };
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "img", function() { return img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "span", function() { return span; });
/**
 * @typedef {Object} elementExtended
 * @property {function(eventList):void} removeEvents removes all events added to element
 * @property {function():void} assignEvents reassign all events that are removed from element
 * @property {function():void} bubble add bubble effect on click
 */

/**
 * @typedef {Object} createOptions
 * @property {HTMLElement[] | HTMLAllCollection} children
 * @property {Object} attr calls HTMLElement.setAttribute(String: name, String: value);
 */

/**
 * @typedef {Object} inputNumber
 * @property {Number|String} min Returns / Sets the min value of input.
 * @property {Number|String} max Returns / Sets the max value of input.
 * @property {String|Number} step Returns / Sets the increment and decrement step of input.
 */

/**
 * @typedef {Object} inputCheckbox
 * @property {Boolean} checked Returns / Sets the current state of the element when type is checkbox or radio.
 * @property {Boolean} defaultChecked Returns / Sets the default state of a radio button or checkbox as originally 
 * specified in HTML that created this object.
 * @property {Boolean} indeterminate Returns whether the checkbox or radio button is in indeterminate state. For checkboxes, 
 * the effect is that the appearance of the checkbox is obscured/greyed in some way as to indicate its state is indeterminate 
 * (not checked but not unchecked). Does not affect the value of the checked attribute, and clicking the checkbox will set the value to false.
 */

/**
 * @typedef {Object} inputImage
 * @property {String} alt Returns / Sets the element's alt attribute, containing alternative text to use when type is image.
 * @property {String} height  Returns / Sets the element's height attribute, which defines the height of the image displayed for the button, 
 * if the value of type is image.
 * @property {String} src Returns / Sets the element's src attribute, which specifies a URI for the location of an 
 * image to display on the graphical submit button, if the value of type is image; otherwise it is ignored.
 * @property {String} width Returns / Sets the document's width attribute, which defines the width of the image displayed for the button, 
 * if the value of type is image.
 */

/**
 * @typedef {Object} inputFile
 * @property {String} accept Returns / Sets the element's accept attribute, containing comma-separated list of file types accepted by the 
 * server when type is file.
 * @property {FileList} files Returns/accepts a FileList object, which contains a list of File objects representing the files selected for upload.
 */

/**
 * Create new HTML tag
 * @param {String} tag HTMl element tag name 
 * @param {HTMLElement & createOptions} props
 * @returns {HTMLElement & elementExtended}
 */
function create(tag = 'div', props = {}) {
  let html = this;
  let el = document.createElement(tag);
  let eventFunctions = [];
  let oldEventListener = el.addEventListener.bind(el);

  /**@override addEventListener of page */
  el.addEventListener = addEventListener;

  /**@property */
  el.assignEvents = assignEvents;

  /**@property */
  el.removeEvents = removeEvents;

  /**
   * removes all event from page.
   * @param {String[]|String} events
   * @returns {void}
   */
  function removeEvents(events) {
    if (events) {
      for (let event of eventFunctions) {
        if (Array.isArray(events) && events.indexOf(event.type)) {
          el.removeEventListener(event.type, event.listener);
        } else if (typeof events === 'string' && event.type === events) {
          el.removeEventListener(event.type, event.listener);
        }
      }

      return;
    }
    for (let event of eventFunctions) {
      el.removeEventListener(event.type, event.listener);
    }
  }

  /**
   * assign all event that were removed from page
   * @returns {void}
   */
  function assignEvents() {
    for (let event of eventFunctions) {
      oldEventListener(event.type, event.listener, event.options);
    }
  }

  /**
   * 
   * @param {String} type A case-sensitive string representing the event type to listen for.
   * @param {CallableFunction} listener The object which receives a notification 
   * (an object that implements the Event interface) when an event of the specified type occurs. 
   * This must be an object implementing the EventListener interface, or a JavaScript function. 
   * See The event listener callback for details on the callback itself.
   * @param {Object} [options] An options object that specifies characteristics about the event listener.
   * @param {Boolean} [options.capture] A Boolean indicating that events of this type will be dispatched 
   * to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
   * @param {Boolean} [options.once] A Boolean indicating that the listener should be invoked at most 
   * once after being added. If true, the listener would be automatically removed when invoked.
   * @param {Boolean} [options.passive] A Boolean which, if true, indicates that the function specified 
   * by listener will never call preventDefault(). If a passive listener does call preventDefault(), 
   * the user agent will do nothing other than generate a console warning. See Improving scrolling 
   * performance with passive listeners to learn more.
   * @param {Boolean} [options.mozSystemGroup] "experimental" A Boolean indicating that the listener 
   * should be added to the system group. Available only in code running in XBL or in the chrome of the 
   * Firefox browser.
   * @returns {void}
   */
  function addEventListener(type, listener, options) {
    eventFunctions[eventFunctions.length] = {
      type,
      listener,
      options
    };
    oldEventListener(type, listener, options);
  }

  for (let prop in props) {

    if (props[prop] === undefined) {
      return console.error(`invalid value of "${prop}"`);
    }

    if (prop == 'children' && Array.isArray(props[prop])) {
      for (let htmlel of props[prop]) {
        el.appendChild(htmlel);
      }
    } else if (prop == 'attr') {
      for (let p in props[prop]) {
        el.setAttribute(p, props[prop][p]);
      }
    } else if (props[prop].constructor.name === 'Object') {
      for (let p in props[prop]) {
        el[prop][p] = props[prop][p];
      }
    } else el[prop] = props[prop];
  }

  /**
   * @function
   * @param {HTMLElement | HTMLAllCollection | HTMLElement[]} nodes
   */
  el.append = function (nodes) {
    nodes = Array.isArray(nodes) ? nodes : [nodes];
    for (let i = 0; i < nodes.length; ++i) {
      el.appendChild(nodes[i]);
    }
  }

  if (props.children) {
    el.append(props.children);
  }

  el.bubble = function createBubble() {
    bubble(el);
  }

  return el;
}

/**
 * get first mathing element from DOM
 * @param {String} selector CSS selector 
 * @returns {HTMLElement}
 */
function get(selector) {
  return document.querySelector(selector);
}

/**
 * get all matching element from DOM
 * @param {String} selector CSS selector
 * @returns {HTMLElement[]}
 */
function getAll(selector) {
  return document.querySelectorAll(selector);
}

/**
 * 
 * @param {element} el 
 */
function bubble(el) {
  let bubble = create('i', {
    className: 'bubble'
  });

  el.addEventListener('click', bubbles);

  function bubbles(e) {
    let elClient = el.getBoundingClientRect();
    bubble.classList.add('animate');
    el.classList.add('bubbling');
    bubble.style.height = elClient.width + 'px';
    bubble.style.width = elClient.width + 'px';
    bubble.style.top = (e.clientY - elClient.top - elClient.width / 2) + 'px';
    bubble.style.left = (e.clientX - elClient.left - elClient.width / 2) + 'px';

    setTimeout(function assignProps() {
      el.removeEvents();
      el.appendChild(bubble);
    }, 0);


    setTimeout(function removeBubble() {
      bubble.classList.remove('animate');
      el.classList.remove('bubbling');
      el.assignEvents();
      el.removeChild(bubble);
    }, 580);
  }
}

/**
 * 
 * @param {HTMLInputElement} props 
 * @returns {HTMLInputElement}
 */
function input(props = {}) {
  if (!props.type) props.type = 'text';
  return create('input', props);
}

/**
 * 
 * @param {HTMLSpanElement} props 
 * @returns {HTMLSpanElement} 
 */
function span(props = {}) {
  return create('span', props);
}

/**
 * 
 * @param {String} text 
 * @param {HTMLButtonElement} [props] 
 * @returns {HTMLButtonElement} 
 */
function button(text = '', props = {}) {
  if (text) {
    props.textContent = text;
  }
  let button = create('button', props);
  button.bubble();

  return button;
}
/**
 * 
 * @param {HTMLDivElement} props 
 * @returns {HTMLDivElement} 
 */
function div(props = {}) {
  return create('div', props);
}
/**
 * 
 * @param {String} src 
 * @param {String} alt 
 * @param {HTMLImageElement} props 
 * @returns {HTMLImageElement} 
 */
function img(src = '', alt = '', props = {}) {
  props.src = src;
  props.alt = alt;
  return create('img', props);
}
/**
 * 
 * @param {String} href 
 * @param {Node} child 
 * @param {HTMLAnchorElement} props 
 * @returns {HTMLAnchorElement} 
 */
function a(href = '', child = null, props = {}) {
  props.href = href;
  if (child) {
    props.children = [child];
  }
  return create('a', props);
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolsContainer", function() { return toolsContainer; });
/* harmony import */ var _freeContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _contextmenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _node_modules_html_element_js_src_custom_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _node_modules_html_element_js_src_rangeSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _node_modules_html_element_js_src_toggler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * @typedef {Object} tools
 * @property {HTMLElement} addPage
 * @property {HTMLElement} addText
 * @property {HTMLElement} circle
 * @property {HTMLElement} rectangle
 * @property {HTMLElement} triangle
 * @property {HTMLElement} selection
 * @property {HTMLElement} grab
 * @property {HTMLElement} backgroundColor
 * @property {HTMLInputElement} openImage
 * @property {HTMLInputElement} loadSVG
 */

/**
 * @typedef {Object} textSettings
 * @property {HTMLSelectElement} fontFamily 
 * @property {HTMLSelectElement} fontWeight 
 * @property {HTMLInputElement} fontSize 
 */

/**
 * @typedef {Object} pageSettings
 * @property {HTMLInputElement} pageName
 * @property {HTMLInputElement} pageHeight
 * @property {HTMLInputElement} pageWidth
 */

/**
 * @typedef {Object} objectSettings
 * @property {HTMLInputElement} opacity
 * @property {HTMLSpanElement} dropShadow
 * @property {HTMLSpanElement} color
 * @property {HTMLInputElement} offsetX
 * @property {HTMLInputElement} offsetY
 * @property {HTMLInputElement} blur
 * @property {HTMLInputElement} strokeToggle
 * @property {HTMLInputElement} strokeWidth
 */

/**
 * @typedef {Object} toolsContainer
 * @property {tools} tools
 * @property {pageSettings} pageSettings
 * @property {textSettings} textSettings
 * @property {objectSettings} objectSettings
 */

/**
 * @function
 * @returns {toolsContainer}
 */

function toolsContainer() {
  /**
   * @type {HTMLDivElement}
   */
  var root = document.querySelector('#CE_wrapper');
  var wrapper = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('div', {
    id: 'CE_tools-wrapper'
  });
  var containerWrapper = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
    id: 'CE_container-wrapper'
  });
  var container = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('div', {
    id: 'CE_tools-container'
  });
  var mainTools = {
    text: null,
    shapes: null,
    image: null,
    page: null,
    object: null,
    selection: null,
    hand: null,
    backgroundColor: null
  };
  var page = {
    pageName: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["input"]({
      className: 'CE_tool',
      type: 'text',
      value: 'page-1',
      placeholder: 'page name'
    }),
    pageHeight: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["input"]({
      className: 'CE_tool',
      type: 'number',
      value: '500',
      placeholder: 'h'
    }),
    pageWidth: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["input"]({
      className: 'CE_tool',
      type: 'number',
      value: '500',
      placeholder: 'w'
    }),
    addPage: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["button"](null, {
      className: 'CE_tool CE_btn',
      textContent: 'add new page'
    })
  };
  var object = {
    opacity: Object(_node_modules_html_element_js_src_rangeSlider__WEBPACK_IMPORTED_MODULE_4__["rangeSlider"])({
      min: 0,
      max: 1,
      value: 1,
      step: 0.01
    }),
    dropShadow: Object(_node_modules_html_element_js_src_toggler__WEBPACK_IMPORTED_MODULE_5__["toggler"])({
      size: 20
    }),
    offsetX: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["input"]({
      type: 'number',
      placeholder: 'x',
      value: 2
    }),
    offsetY: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["input"]({
      type: 'number',
      placeholder: 'y',
      value: 2
    }),
    blur: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["input"]({
      type: 'number',
      placeholder: 'blur',
      value: 2
    }),
    color: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["span"]({
      className: 'CE_icon backgroundColor'
    }),
    strokeToggle: Object(_node_modules_html_element_js_src_toggler__WEBPACK_IMPORTED_MODULE_5__["toggler"])({
      size: 20
    }),
    strokeWidth: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["input"]({
      min: 1,
      type: 'number',
      placeholder: 'stroke',
      value: 1
    }),
    strokeColor: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["span"]({
      className: 'CE_icon CE_tool strokeColor'
    })
  };
  var textOptions = {
    fontFamily: Object(_node_modules_html_element_js_src_custom_select__WEBPACK_IMPORTED_MODULE_3__["select"])({
      spead: 2,
      height: 30,
      maxheight: 300
    }),
    fontWeight: Object(_node_modules_html_element_js_src_custom_select__WEBPACK_IMPORTED_MODULE_3__["select"])({
      spead: 2,
      height: 30,
      maxheight: 300
    }),
    fontSize: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('input', {
      type: 'number',
      value: 40
    }),
    addText: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["button"](null, {
      className: 'CE_tool CE_btn',
      textContent: 'add text'
    })
  };
  var textStyle = {
    underline: null,
    italic: null,
    strikethrough: null
  };
  var shapes = {
    circle: icon('circle', 'Add circle'),
    rectangle: icon('rectangle', 'Add rectangle'),
    triangle: icon('triangle', 'Add triangle')
  };
  var imageOptions = {
    openImage: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('label', {
      className: 'CE_icon_text',
      children: [icon('image', 'Open an image'), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('input', {
        type: 'file',
        accept: 'image/x-png, image/jpeg',
        style: {
          display: 'none'
        }
      })]
    }),
    loadSVG: _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('label', {
      className: 'CE_icon_text',
      children: [icon('image', 'Open SVG file'), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('input', {
        type: 'file',
        accept: '.svg',
        style: {
          display: 'none'
        }
      })]
    })
  };
  var cm_shapes = Object(_contextmenu__WEBPACK_IMPORTED_MODULE_1__["contextMenu"])(Object.values(shapes));
  var cm_imageOptions = Object(_contextmenu__WEBPACK_IMPORTED_MODULE_1__["contextMenu"])(Object.values(imageOptions));
  var defaultFontFamilies = [];
  var defaultFontWeight = ['lighter', 'normal', 'bold', 'bolder', 100, 200, 300, 400, 500, 600, 700, 800, 900];
  init();

  function init() {
    arrayToOptions(defaultFontFamilies, textOptions.fontFamily);
    arrayToOptions(defaultFontWeight, textOptions.fontWeight);
    iconsFromObject(mainTools, textStyle);
    mainTools.selection.classList.add('active');
    mainTools.page.addEventListener('click', pageonclick);
    mainTools.text.addEventListener('click', textonclick);
    mainTools.shapes.addEventListener('click', cm_shapes.show);
    mainTools.image.addEventListener('click', cm_imageOptions.show);
    mainTools.object.addEventListener('click', objectonclick);
    mainTools.hand.addEventListener('click', updateActiveTool);
    mainTools.selection.addEventListener('click', updateActiveTool);
    wrapper.append(container);
    wrapper.append(containerWrapper);
    container.append(Object.values(mainTools));
    root.appendChild(wrapper);

    function pageonclick() {
      var pageAr = [];
      pageAr.push(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
        className: 'CE_tool CE_controlers',
        children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["span"]({
          textContent: 'Page name'
        }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [page.pageName]
        })]
      }));
      pageAr.push(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
        className: 'CE_tool CE_controlers',
        children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["span"]({
          textContent: 'Dimension'
        }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
            children: [page.pageHeight, page.pageWidth]
          })]
        })]
      }));
      pageAr.push(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
        className: 'CE_tool CE_controlers',
        children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [page.addPage]
        })]
      }));
      newContainer.bind(this)('Page', pageAr, 'CE_col');
    }

    function textonclick() {
      var textOptionsAr = [];
      textOptionsAr.push(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
        className: 'CE_tool CE_controlers',
        children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["span"]({
          textContent: 'Font Family'
        }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [textOptions.fontFamily.select]
        })]
      }));
      textOptionsAr.push(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
        className: 'CE_tool CE_controlers',
        children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["span"]({
          textContent: 'Font Weight'
        }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [textOptions.fontWeight.select]
        })]
      }));
      textOptionsAr.push(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
        className: 'CE_tool CE_controlers',
        children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
            children: [icon('font-size'), textOptions.fontSize]
          })]
        })]
      }));
      textOptionsAr.push(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
        className: 'CE_tool CE_controlers',
        children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
            children: Object.values(textStyle)
          })]
        })]
      }));
      textOptionsAr.push(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
        className: 'CE_tool CE_controlers',
        children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [textOptions.addText]
        })]
      }));
      newContainer.bind(this)('Text', textOptionsAr);
    }

    function objectonclick() {
      var objectSettingsAr = [];
      objectSettingsAr.push(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
        className: 'CE_tool',
        children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["span"]({
          textContent: 'Opacity'
        }), object.opacity]
      }));
      objectSettingsAr.push(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
        className: 'CE_tool CE_controlers',
        children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["span"]({
          textContent: 'Drop shadow'
        }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [object.dropShadow]
        }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('small', {
            textContent: 'Set color'
          }), object.color]
        }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('small', {
            textContent: 'Set axis'
          }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
            children: [object.offsetX, object.offsetY]
          })]
        }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('small', {
            textContent: 'Set blur'
          }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
            children: [object.blur]
          })]
        })]
      }));
      objectSettingsAr.push(_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
        className: 'CE_tool CE_controlers',
        children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["span"]({
          textContent: 'Stroke'
        }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [object.strokeToggle]
        }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('small', {
            textContent: 'Stroke width'
          }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
            children: [object.strokeWidth]
          })]
        }), _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["div"]({
          className: 'CE_controlers-tools',
          children: [_node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('small', {
            textContent: 'Set stroke color'
          }), object.strokeColor]
        })]
      }));
      newContainer.bind(this)('Object', objectSettingsAr, 'CE_col');
      object.opacity.setvalue(object.opacity.value);
    }

    function updateActiveTool() {
      /**
       * @type {HTMLElement}
       */
      var el = this;
      var activeel = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["get"]('.CE_icon.active');
      if (activeel) activeel.classList.remove('active');
      el.classList.add('active');
    }
  }

  function newContainer(title, tools, className) {
    var _this = this;

    if (this && this.style) this.style.pointerEvents = 'none';
    var container = Object(_freeContainer__WEBPACK_IMPORTED_MODULE_0__["freeContainer"])({
      parentElement: containerWrapper,
      drop: wrapper
    });

    if (className) {
      container.DOMElements.body.classList.add(className);
    }

    container.setTitle(title);
    container.setVisiblity(true);
    container.addItems(tools);

    container.closeBtn.onclick = function () {
      _this.style.pointerEvents = '';
      container.del();
    };
  }
  /**
   * 
   * @param {String[]} options 
   */


  function arrayToOptions(options, selectElement) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var option = _step.value;
        if (typeof option === 'number') option += '';
        selectElement.addOption(option, option);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  /**
   * @param {String} iconname
   * @param {String} [text]
   * @param {Boolean} [pos] if true text is positioned first and icon is positioned second
   * @returns {HTMLElement}
   */


  function icon(iconname, text, pos) {
    if (text && pos) {
      return _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('span', {
        textContent: text,
        children: [icon(iconname)]
      });
    } else if (text) {
      var el = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('span', {
        children: [icon(iconname)]
      });
      el.appendChild(document.createTextNode(text));
      return el;
    } else {
      return _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_2__["create"]('span', {
        className: 'CE_tool CE_icon ' + iconname
      });
    }
  }
  /**
   * @param {Object} array
   * @return {Object}
   */


  function iconsFromObject(array) {
    form(array);

    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; ++i) {
        form(arguments[i]);
      }
    }

    function form(ar) {
      for (var key in ar) {
        ar[key] = icon(key);
      }
    }
  }

  return {
    tools: _objectSpread({}, shapes, imageOptions, {
      grab: mainTools.hand,
      selection: mainTools.selection,
      addPage: page.addPage,
      addText: textOptions.addText,
      backgroundColor: mainTools.backgroundColor,
      openImage: imageOptions.openImage.querySelector('input'),
      loadSVG: imageOptions.loadSVG.querySelector('input')
    }),
    textSettings: _objectSpread({}, textOptions, textStyle, {
      fontSize: textOptions.fontSize
    }),
    pageSettings: _objectSpread({}, page),
    objectSettings: _objectSpread({}, object)
  };
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contextMenu", function() { return contextMenu; });
/* harmony import */ var _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

/**
 * @callback itemOnclick
 * @param {HTMLElement} item
 */

/**
 * @typedef contextMenu
 * @property {function():void} dispose
 * @property {function(MouseEvent):void} show
 * @property {function():void} hide
 * @property {function(HTMLElement[]):void} addItems
 * @property {function(HTMLElement):void} removeItem
 * @property {function(number, number):void} setPosition
 * @property {function(HTMLElement):void} itemOnclick
 * @property {function():void} maskOnclick
 * @property {function(HTMLElement[], HTMLElement):void} childMenu
 */

/**
 *
 * @param {HTMLElement[]} [children=null] children to append
 * @param {Number} [x] x position
 * @param {Number} [y] y position
 * @returns {contextMenu}
 */

function contextMenu() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var cm = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_0__["create"]('div', {
    className: 'CE_contextmenu',
    oncontextmenu: function oncontextmenu() {
      return false;
    }
  });
  var mask = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_0__["create"]('span', {
    className: 'CE_mask CE_cm',
    oncontextmenu: maskOnclick,
    onclick: maskOnclick
  });
  var position = {
    x: 0,
    y: 0
  };
  var returnable = {
    dispose: dispose,
    show: show,
    hide: hide,
    addItems: addItems,
    removeItem: removeItem,
    insertBefore: insertBefore,
    setPosition: setPosition,
    childMenu: childMenu
  };

  returnable.itemOnclick = function () {};

  returnable.maskOnclick = function () {};

  function maskOnclick(e) {
    if (returnable.maskOnclick) returnable.maskOnclick();
    hide(e);
  }

  setPosition(x, y);
  addItems(children);

  function dispose() {
    mask.removeEvents();
    cm.removeEvents();
    mask = null;
    cm = null;
    return null;
  }
  /**
   * 
   * @param {MouseEvent} [e] 
   */


  function show() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (e && e.clientX && e.clientY) {
      if (e.preventDefault) e.preventDefault();
      position.x = e.clientX;
      position.y = e.clientY;
    }

    if (!cm.parentElement) {
      document.body.appendChild(mask);
      document.body.appendChild(cm);
    }

    var cmClient = cm.getBoundingClientRect();

    if (position.x + cmClient.width > innerWidth) {
      position.x -= cmClient.width;
    }

    if (position.x < 0) {
      position.x -= 0 - position.x;
    }

    if (position.y < 0) {
      position.y -= 0 - position.y;
    }

    if (position.y + cmClient.height > innerHeight) {
      position.y -= cmClient.height;
    }

    setPosition(position.x, position.y);
  }
  /**
   * 
   * @param {MouseEvent} e 
   */


  function hide(e) {
    if (e && e.preventDefault) e.preventDefault();

    if (cm.parentElement) {
      document.body.removeChild(mask);
      document.body.removeChild(cm);
    }
  }
  /**
   * 
   * @param {HTMLElement[]|HTMLElement|HTMLAllCollection} items 
   */


  function addItems(items) {
    if (!items) return;

    if (Array.isArray(items)) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          cm.appendChild(item);
          hideOnClick(item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else {
      cm.appendChild(items);
      hideOnClick(items);
    }
    /**
     * 
     * @param {HTMLElement} item 
     */


    function hideOnClick(item) {
      item.addEventListener('click', function (e) {
        returnable.itemOnclick(item);

        if (item.tagName === 'LABEL') {
          hide(null);
        } else if (!item.getAttribute('data-expandable')) {
          hide(e);
        }
      });
    }
  }

  function removeItem(item) {
    cm.removeChild(item);
  }

  function insertBefore(el, refEl) {
    cm.insertBefore(el, refEl);
  }
  /**
   * 
   * @param {HTMLAllCollection | HTMLElement[]} items 
   * @param {HTMLElement} item 
   */


  function childMenu(items, item) {
    var childCM = _node_modules_html_element_js_src_html__WEBPACK_IMPORTED_MODULE_0__["div"]({
      className: 'CE_contextmenu'
    });

    if (items.constructor.name === 'NodeList') {
      items = items.values();
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var el = _step2.value;
        childCM.appendChild(el);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    if (item.parentElement === cm) {
      item.appendChild(childCM);
      item.addEventListener('mouseover', function () {
        var cmClient = childCM.getBoundingClientRect();

        if (cmClient.x + cmClient.width > innerWidth) {
          childCM.style.left = '-100%';
        }

        if (cmClient.x < 0) {
          childCM.style.left = '100%';
        }

        if (cmClient.y < 0) {
          childCM.style.top = '100%';
        }

        if (cmClient.y + cmClient.height > innerHeight) {
          childCM.style.top = '-100%';
        }
      });
    }
  }

  function setPosition(x, y) {
    position.x = x;
    position.y = y;
    cm.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
  }

  return returnable;
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


/**
 * 
 * @param {Object} [opts]
 * @param {HTMLSelectElement} [opts.select] 
 * @param {Number} [opts.height]
 * @param {Number} [opts.maxheight]
 * @param {Number} [opts.width]
 * @param {Number} [opts.spead]
 */
function select(opts = {}) {

  const div = _html__WEBPACK_IMPORTED_MODULE_0__["div"]({
    className: '__select',
    tabIndex: 0
  });
  const placeholder = _html__WEBPACK_IMPORTED_MODULE_0__["span"]({
    className: '__placeholder'
  })
  const optionsContainer = _html__WEBPACK_IMPORTED_MODULE_0__["div"]({
    className: '__options'
  });
  const mask = _html__WEBPACK_IMPORTED_MODULE_0__["div"]({
    className: '__mask',
    onclick: hide
  });
  const scrollbarWidth = getScrollbarWidth();
  let containerHeight = 0;
  let height = opts.height;
  let width = opts.width;
  let spead = opts.spead || 1;
  let obj = {};
  let allOptions = [];

  (function init() {
    opts.maxheight = opts.maxheight || 600;

    if (opts.select) {
      obj.select = opts.select;
      const options = opts.select.options;
      opts.select.style.display = 'none';
      opts.select.parentElement.insertBefore(div, opts.element);

      for (let i = 0; i < options.length; ++i) {
        let option = _html__WEBPACK_IMPORTED_MODULE_0__["div"]({
          className: '__option',
          attr: {
            "data-value": options[i].value
          },
          textContent: options[i].textContent,
          style: {
            height: height + 'px'
          }
        });

        allOptions.push(options[i].value);
        option.addEventListener('click', optionOnselect);

        if (options[i].selected) {
          setvalue(options[i].value);
        }

        optionsContainer.appendChild(option);
      }

      if (!div.getAttribute('data-value')) {
        div.setAttribute('data-value', options[0].value);
        placeholder.textContent = options[0].textContent;
      }
    } else {
      obj.select = div;
    }

    div.appendChild(placeholder);
    placeholder.style.height = height + 'px';
    if (width) {
      placeholder.style.width = width + 'px';
      optionsContainer.style.width = width + 'px';
    }

    obj.onchange = function () {};
    placeholder.onclick = show;

    div.addEventListener('focus', onfocus);

    function onfocus() {
      this.onkeyup = onkeypress;
    }
    /**
     * 
     * @param {KeyboardEvent} e 
     */
    function onkeypress(e) {
      let val = value();
      let len = allOptions.length - 1;
      let index = allOptions.indexOf(val);
      if (e.which === 38) {
        val = allOptions[index === 0 ? len : index - 1];
      } else if (e.which === 40) {
        val = allOptions[index === len ? 0 : index + 1];
      } else {
        //TODO: match and select next item with key
        // let char = String.fromCharCode(e.which);
        // let options = [];
        // let matchingWord = [];
        // optionsContainer.children.forEach(el=>{
        //   options[el.getAttribute('data-value')] = el;
        // });

        // for(let key in options){
        //   if(options[key][0] === char){
        //     matchingWord.push(options[key])
        //   }
        // }
      }

      setvalue(val);
    }
  })()

  function show() {
    document.body.appendChild(mask);
    document.body.appendChild(optionsContainer);
    let divClient = div.getBoundingClientRect();
    let _height = optionsContainer.children.length * (height || 40);
    let scroll = false;
    let logicalHeight = _height > opts.maxheight ? opts.maxheight : _height;

    optionsContainer.style.top = divClient.top + 'px';
    optionsContainer.style.left = divClient.left + 'px';
    optionsContainer.style.width = divClient.width + 'px';
    optionsContainer.style.height = '0';

    let tmpHeightBottom = window.innerHeight - divClient.bottom;
    let tmpHeightTop = divClient.height + divClient.top;

    optionsContainer.style.removeProperty('transform');
    if (divClient.bottom + logicalHeight > window.innerHeight) { //checks if height of options container crosses bottom

      if (divClient.bottom - logicalHeight < 0) { //checks if height of options container cross top
        if (tmpHeightTop > tmpHeightBottom) {
          if (tmpHeightTop > logicalHeight) {
            _height = logicalHeight;
          } else {
            _height = tmpHeightTop;
            optionsContainer.style.transform = `translate(0, ${ -_height + divClient.height}px)`;
          }
        } else {
          _height = tmpHeightBottom > logicalHeight ? logicalHeight : tmpHeightBottom;
          optionsContainer.style.removeProperty('overflow-y');
        }
      }

      if (_height !== logicalHeight) {

        if (_height > logicalHeight) {
          _height = logicalHeight;
        }

        scroll = true;
        optionsContainer.style.width = (divClient.width + scrollbarWidth) + 'px';
      }

    } else if (_height <= opts.maxheight) {
      optionsContainer.style.width = divClient.width + 'px';
      optionsContainer.style.removeProperty('overflow-y');
    } else {
      optionsContainer.style.width = (divClient.width + scrollbarWidth) + 'px';
      _height = opts.maxheight;
      scroll = true;
    }

    containerHeight = _height;

    let current_height = 0;
    let inc_factor = 1;

    function animateHeight() {

      if (current_height + inc_factor > _height) {
        optionsContainer.style.height = _height + 'px';
        scroll && (optionsContainer.style.overflowY = 'scroll');
      } else if (current_height < _height) {
        current_height += inc_factor;
        inc_factor += spead;
        optionsContainer.style.height = current_height + 'px';
        requestAnimationFrame(animateHeight);
      }
    }

    let selected = optionsContainer.querySelector('.__selected');
    if (selected)
      scrollIntoView(selected);

    animateHeight();
  }


  function hide() {
    optionsContainer.style.removeProperty('overflow-y');
    let current_height = containerHeight;
    let inc_factor = 1;

    function animateHeight() {
      if (current_height - inc_factor < 0) {
        optionsContainer.style.height = '0';
        document.body.removeChild(mask);
        document.body.removeChild(optionsContainer);
      } else if (current_height > 0) {
        current_height -= inc_factor;
        inc_factor += spead;
        optionsContainer.style.height = current_height + 'px';
        requestAnimationFrame(animateHeight);
      } else {
        document.body.removeChild(mask);
        document.body.removeChild(optionsContainer);
      }
    }

    animateHeight();
  }


  function optionOnselect() {
    /**
     * @type {HTMLSpanElement}
     */
    let el = this;
    let value = el.getAttribute('data-value');
    let text = el.textContent;

    let selected = optionsContainer.querySelector('.__selected');
    if (selected)
      selected.classList.remove('__selected');

    el.classList.add('__selected');
    div.setAttribute('data-value', value);
    placeholder.textContent = text;
    obj.onchange(value);
    if (opts.select) opts.select.value = value;
    hide();
  }

  /**
   * 
   * @param {HTMLSpanElement|HTMLOptionElement|String} option 
   * @param {String|Number} [value] 
   */
  function addOption(option, value = '') {
    if (typeof option !== 'string') {
      value = value || option.value || option.getAttribute('data-value') || '';
      option = option.textContent;
    }

    if (opts.select) {
      let op = _html__WEBPACK_IMPORTED_MODULE_0__["create"]('option', {
        textContent: option,
        attr: {
          value
        }
      });
      opts.select.appendChild(op);
    }

    option = _html__WEBPACK_IMPORTED_MODULE_0__["div"]({
      className: '__option',
      attr: {
        "data-value": value
      },
      textContent: option,
      style: {
        height: height ? height + 'px' : 'fit-content'
      }
    });

    allOptions.push(value);

    if (placeholder.textContent === '') {
      placeholder.textContent = option.textContent;
      if (opts.select) opts.select.value = value;
      div.setAttribute('data-value', value);
    }

    option.addEventListener('click', optionOnselect);
    optionsContainer.appendChild(option);

    let removeContainer = false;
    if (!optionsContainer.parentElement) {
      document.body.appendChild(optionsContainer);
      removeContainer = true;
    }
    let client = optionsContainer.getBoundingClientRect();
    placeholder.style.width = client.width + 'px';
    if (removeContainer) {
      document.body.removeChild(optionsContainer);
    }
  }

  function removeOption(option) {
    let _option = optionsContainer.querySelector(`[data-value='${option}']`);
    if (_option) {
      _option.parentElement.removeChild(_option);
      allOptions.splice(allOptions.indexOf(option) + 1, 1);
      return true;
    }
    return false;
  }

  function value() {
    return div.getAttribute('data-value');
  }

  function setvalue(value) {
    if (opts.select) opts.select.value = value;
    let selected = optionsContainer.querySelector('.__selected');
    if (selected)
      selected.classList.remove('__selected');

    let option = optionsContainer.querySelector(`[data-value='${value}']`);
    if (option) {
      option.classList.add('__selected');
      div.setAttribute('data-value', value);
      placeholder.textContent = option.textContent;
      scrollIntoView(option);
    }
  }

  function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }

  /**
   * 
   * @param {Element} el 
   */
  function scrollIntoView(el) {
    let parent = el.parentElement;

    parent.scrollTop = el.offsetTop;
  }

  obj.customSelect = optionsContainer;
  obj.addOption = addOption;
  obj.value = value;
  obj.setvalue = setvalue;
  obj.removeOption = removeOption;

  return obj;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeSlider", function() { return rangeSlider; });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

/**
 * @callback onchange
 * @param {Number} value 
 */

/**
 * 
 * @typedef slider
 * @property {onchange} onchange 
 * @property {function():Number} value 
 * @property {function(Number):void} setvalue 
 */

/**
 * 
 * @param {Object} params 
 * @param {Number} params.min 
 * @param {Number} params.max 
 * @param {Number} [params.step] 
 * @param {Number} [params.value ]
 * @param {onchange} [params.onchange] 
 * @param {string} [params.size] 
 * @returns {slider & HTMLElement}
 */
function rangeSlider(params = {}) {


  let mainWrapper = _html__WEBPACK_IMPORTED_MODULE_0__["div"]({
    role: 'input',
    tabIndex: 0,
    className: 'rangeSlider-wrapper',
    attr: {
      'data-value': 0
    }
  });
  let btn = _html__WEBPACK_IMPORTED_MODULE_0__["span"]({
    className: 'rangeSlider-button'
  });

  let min = params.min || 0;
  let max = params.max || 100;
  let step = params.step || 1;
  let diff = max - min;
  let width = 0;
  let tmout = null;
  let length = (function calcLength() {
    let l = step + '';
    let lar = l.split('.');
    if (lar.length > 1) {
      let l = lar[1].length;
      return l > 2 ? 2 : l;
    } else {
      return 0;
    }
  });

  mainWrapper.value = params.value || min;

  if (params.size) {
    mainWrapper.classList.add(params.size);
  }
  if (params.value) {
    setTimeout(() => {
      setvalue(params.value);
    }, 0);
  }

  mainWrapper.addEventListener('mousedown', onmousedown);
  mainWrapper.addEventListener('focus', makeActive);
  mainWrapper.addEventListener('touchstart', onmousedown);

  function makeActive() {
    mainWrapper.classList.add('active');
    mainWrapper.onblur = removeActive;
  }

  function removeActive() {
    mainWrapper.classList.remove('active');
    mainWrapper.onblur = null;
  }

  /**
   * 
   * @param {MouseEvent} e 
   */
  function onmousedown(e) {
    mainWrapper.focus();
    document.onmousemove = document.ontouchmove = onmousemove;
    document.onmouseup = document.ontouchend = onmouseup;

    onmousemove(e);
  }

  /**
   * 
   * @param {MouseEvent | TouchEvent} e 
   */
  function onmousemove(e) {
    let x = e.clientX || e.touches[0].clientX;
    let wrapperX = mainWrapper.getBoundingClientRect().x;
    width = mainWrapper.offsetWidth;

    x -= wrapperX;

    if (x <= width && x >= 0) {
      calculateValue(x);
    } else if (mainWrapper.value !== max && x > width) {
      setvalue(max);
    } else if (mainWrapper.value !== min && x < 0) {
      setvalue(min);
    }
  }

  function onmouseup() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchmove = null;
    document.ontouchend = null;
  }



  /**
   * 
   * @param {Number} x 
   */
  function calculateValue(x) {
    let value = x / width * diff;
    value += min;

    setvalue(value);
  }

  /**
   * 
   * @param {Number} value 
   */
  function setvalue(value) {

    if (value > max) {
      value = max;
    } else if (value < min) {
      value = min;
    }

    value = parseFloat(value);
    if (tmout) clearTimeout(tmout);
    makeActive();
    width = mainWrapper.offsetWidth;

    let remainder = value / step;
    remainder %= 1;
    remainder *= step;
    if (remainder >= step / 2) {
      let tmp = value;
      tmp += (step - remainder);

      if (tmp > max) {
        value -= remainder
      } else {
        value = tmp;
      }
    } else {
      value -= remainder;
    }

    if (mainWrapper.onchange) {
      mainWrapper.value = value;
      mainWrapper.onchange(value);
    }
    mainWrapper.value = value;
    let val = value + '';
    let l = length();
    val = val.split('.');
    if (l > 0 && val.length > 1) {
      val = val[0] + '.' + val[1].substr(0, l);
    } else {
      val = val[0];
    }
    btn.setAttribute('data-value', val);

    let x = (value - min) / diff;
    x *= width;

    btn.style.transform = `translate3d(${x}px, 0, 0)`;

    tmout = setTimeout(() => {
      removeActive();
    }, 1000);
  }

  mainWrapper.setvalue = setvalue;
  mainWrapper.appendChild(btn);

  return mainWrapper;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggler", function() { return toggler; });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

/**
 * @callback onchange
 * @param {Boolean} value 
 */

/**
 * 
 * @typedef toggler
 * @property {onchange} onchange 
 * @property {function():Boolean} value 
 * @property {function(Boolean):void} setvalue 
 */

/**
 * 
 * @param {Object} params 
 * @param {Boolean} [params.value] 
 * @param {onchange} [params.onchange] 
 * @param {Number} [params.size]
 * @param {string} [params.valType='bool'] possible value 'bool' or ''on/off'
 * @returns {toggler & HTMLElement}
 */

function toggler(params = {}) {

  let checkbox = _html__WEBPACK_IMPORTED_MODULE_0__["input"]({
    type: 'checkbox',
    style: {
      display: 'none'
    }
  });
  let btn = _html__WEBPACK_IMPORTED_MODULE_0__["span"]({
    className: 'toggler_btn'
  });
  let mainWrapper = _html__WEBPACK_IMPORTED_MODULE_0__["create"]('label', {
    tabIndex: 0,
    role: 'input',
    className: 'toggler-wrapper',
    children: [
      checkbox,
      btn
    ]
  });

  if (params.onchange) {
    mainWrapper.onchange = params.onchange;
  }
  if (params.value !== undefined) {
    if (params.value === true || params.value === 'on') {
      checkbox.checked = true;
    }
  }
  if (params.size) {
    let h = params.size;
    let w = h * 2;

    mainWrapper.style.width = w + 'px';
    mainWrapper.style.height = h + 'px';
    mainWrapper.style.borderRadius = h / 2 + 'px';
    btn.style.height = h + 'px';
    btn.style.width = h + 'px';
  }

  checkbox.onchange = function () {
    if (params.valType === 'on/off') {
      if (checkbox.checked) {
        mainWrapper.value = 'on';
      } else {
        mainWrapper.value = 'off';
      }
    } else {
      mainWrapper.value = checkbox.checked;
    }
  };

  mainWrapper.setvalue = function (value) {
    value = !!value;

    checkbox.checked = value;
  }


  return mainWrapper;
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(19);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(21)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// Module
exports.push([module.i, "#CE_wrapper {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  background-color: #fcfcfc;\n}\n\n#CE_wrapper #CE_zoom {\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  width: 220px;\n  height: 40px;\n  z-index: 4;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#CE_wrapper #CE_zoom > div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n#CE_wrapper .CE_click-catch-mask {\n  z-index: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\n\n#CE_wrapper #CE_tools-wrapper {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row;\n          flex-flow: row;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 100%;\n  padding: 5px;\n  margin: 0;\n  background-color: #584e53;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 2;\n  /* Handle on hover */\n}\n\n#CE_wrapper #CE_tools-wrapper ::-webkit-scrollbar {\n  width: 4px;\n}\n\n#CE_wrapper #CE_tools-wrapper ::-webkit-scrollbar-thumb {\n  background: #6aa1f3;\n}\n\n#CE_wrapper #CE_tools-wrapper ::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n#CE_wrapper #CE_tools-wrapper * {\n  scrollbar-width: 4px;\n  scrollbar-color: #6aa1f3;\n}\n\n#CE_wrapper #CE_tools-wrapper #CE_container-wrapper {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  overflow: auto;\n  padding-top: 5px;\n  padding-left: 5px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#CE_wrapper #CE_tools-wrapper #CE_container-wrapper > .CE_freeContainer_wrapper {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  position: static;\n}\n\n#CE_wrapper #CE_tools-wrapper #CE_container-wrapper > .CE_freeContainer_wrapper:not(:first-child) {\n  margin-top: 5px;\n}\n\n#CE_wrapper #CE_tools-wrapper #CE_tools-container {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  overflow: auto;\n}\n\n#CE_wrapper #CE_tools-wrapper #CE_tools-container > * {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  background-color: #363134;\n  color: white;\n  height: 40px;\n  width: 40px;\n  margin-top: 5px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n#CE_wrapper #CE_tools-wrapper #CE_tools-container > *:hover {\n  background-color: #222122;\n}\n\n#CE_wrapper #CE_tools-wrapper #CE_tools-container > *.object::before {\n  content: \"\\e921\";\n}\n\n#CE_wrapper #CE_canvasContainer {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 1;\n}\n\n#CE_wrapper #CE_canvasContainer > .canvas-container:not(:first-child) {\n  margin-left: 30px;\n}\n\n#CE_wrapper #CE_canvasContainer > .canvas-container {\n  margin: 15px;\n  -webkit-box-shadow: 2px 2px 1px 2px #0f0f0f;\n          box-shadow: 2px 2px 1px 2px #0f0f0f;\n}\n\n#CE_wrapper #CE_canvasContainer > .canvas-container.active {\n  -webkit-box-shadow: 2px 2px 1px 2px #250a6e;\n          box-shadow: 2px 2px 1px 2px #250a6e;\n}\n\n.CE_icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 30px;\n  width: 30px;\n  background: transparent;\n  border: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 1em;\n}\n\n.CE_icon.backgroundColor {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px;\n  background-color: #ccf !important;\n}\n\n.CE_icon.strokeColor {\n  border: solid 4px #ccf !important;\n}\n\n.CE_icon:active {\n  outline: none;\n  border: none;\n  -webkit-transform: scale(0.85);\n          transform: scale(0.85);\n}\n\n.CE_icon:focus {\n  outline: none;\n  border: solid 1px rgba(0, 0, 255, .3);\n}\n\n.CE_icon.active {\n  background-color: rgba(0, 0, 255, .3) !important;\n}\n\n.CE_btn {\n  height: 30px;\n  border-radius: 2px;\n  border: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #68f;\n  color: white;\n  font-size: 1em;\n  text-transform: uppercase;\n}\n\n.CE_mask {\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 999;\n}\n\n.CE_mask.CE_cm {\n  z-index: 9999;\n}\n\n.CE_highlight {\n  position: relative;\n}\n\n.CE_highlight::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .3);\n  border: solid 4px #dada8e;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.rangeSlider-wrapper {\n  margin: 20px 20px !important;\n  width: auto !important;\n}\n\n.CE_controlers .CE_controlers-tools {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 5px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column wrap;\n          flex-flow: column wrap;\n}\n\n.CE_controlers .CE_controlers-tools > input {\n  height: 30px;\n  text-indent: 10px;\n}\n\n.CE_controlers .CE_controlers-tools > div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.CE_controlers .CE_controlers-tools > div > input {\n  width: 60px;\n  height: 30px;\n  text-align: center;\n}\n\n.CE_controlers .CE_controlers-tools > div > * {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.CE_controlers .CE_controlers-tools > div > *:not(:first-child) {\n  margin-left: 5px;\n}\n\n@-webkit-keyframes CE_loading {\n  0% {\n    content: '.';\n  }\n  25% {\n    content: '..';\n  }\n  50% {\n    content: '...';\n  }\n  75% {\n    content: '....';\n  }\n  100% {\n    content: '.';\n  }\n}\n\n@keyframes CE_loading {\n  0% {\n    content: '.';\n  }\n  25% {\n    content: '..';\n  }\n  50% {\n    content: '...';\n  }\n  75% {\n    content: '....';\n  }\n  100% {\n    content: '.';\n  }\n}\n\n#CE_font-loader {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 30px;\n  right: 20px;\n  top: 20px;\n  background-color: #cec;\n  color: #333;\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .3);\n          box-shadow: 0 0 4px rgba(0, 0, 0, .3);\n  align-items: center;\n  font-size: 0.8em;\n  padding: 0 10px;\n  -webkit-transition: opacity 300ms ease;\n  transition: opacity 300ms ease;\n  z-index: 99999;\n}\n\n#CE_font-loader::after {\n  content: '';\n  font-size: 1em;\n  width: 60px;\n  height: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 5px;\n  -webkit-animation: CE_loading 500ms linear infinite;\n          animation: CE_loading 500ms linear infinite;\n}", ""]);



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(22);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 22 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(24);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(21)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// Module
exports.push([module.i, ".CE_freeContainer_wrapper {\n  position: absolute;\n  min-height: 40px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  left: 0;\n  top: 0;\n  border-radius: 2px;\n  overflow: hidden;\n  -webkit-box-shadow: 0 0 4px #313163;\n          box-shadow: 0 0 4px #313163;\n  background-color: white;\n  z-index: 3;\n}\n\n.CE_freeContainer_wrapper * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.CE_freeContainer_wrapper > .CE_controls {\n  height: 30px;\n  width: 100%;\n  background-color: #97f;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.CE_freeContainer_wrapper > .CE_controls.grab {\n  cursor: grab !important;\n  cursor: -webkit-grab !important;\n}\n\n.CE_freeContainer_wrapper > .CE_controls.grabbing {\n  cursor: grabbing !important;\n  cursor: -webkit-grabbing !important;\n}\n\n.CE_freeContainer_wrapper > .CE_controls > .CE_mover {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 5px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  height: 100%;\n}\n\n.CE_freeContainer_wrapper > .CE_controls > .CE_mover::before {\n  color: white;\n  content: attr(data-title);\n}\n\n.CE_freeContainer_wrapper > .CE_controls .CE_icon {\n  color: white;\n}\n\n.CE_freeContainer_wrapper > .CE_controls .CE_icon:hover {\n  background-color: rgba(255, 255, 255, .2);\n}\n\n.CE_freeContainer_wrapper > .CE_body {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-height: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 0 5px 5px 5px;\n  min-width: 200px;\n  max-width: 400px;\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_col, .CE_freeContainer_wrapper > .CE_body.CE_row {\n  padding-top: 5px;\n}\n\n.CE_freeContainer_wrapper > .CE_body > .CE_saperator {\n  display: block;\n  width: calc(100% + 15px);\n  height: 30px;\n  border-bottom: solid 1px #999;\n}\n\n.CE_freeContainer_wrapper > .CE_body > .CE_saperator::before {\n  content: attr(\"data-title\");\n  font-size: 0.85em;\n}\n\n.CE_freeContainer_wrapper > .CE_body > div {\n  margin-top: 7.5px;\n}\n\n.CE_freeContainer_wrapper > .CE_body > div:not(:last-child) {\n  margin-bottom: 7.5px;\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_row, .CE_freeContainer_wrapper > .CE_body.CE_col,\n.CE_freeContainer_wrapper > .CE_body > .CE_row,\n.CE_freeContainer_wrapper > .CE_body > .CE_col {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_row > .CE_tool, .CE_freeContainer_wrapper > .CE_body.CE_col > .CE_tool,\n.CE_freeContainer_wrapper > .CE_body > .CE_row > .CE_tool,\n.CE_freeContainer_wrapper > .CE_body > .CE_col > .CE_tool {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_row > .CE_tool.active, .CE_freeContainer_wrapper > .CE_body.CE_col > .CE_tool.active,\n.CE_freeContainer_wrapper > .CE_body > .CE_row > .CE_tool.active,\n.CE_freeContainer_wrapper > .CE_body > .CE_col > .CE_tool.active {\n  background-color: #5374cc;\n  border-radius: 2px;\n  color: white;\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_row,\n.CE_freeContainer_wrapper > .CE_body > .CE_row {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_row > .CE_tool:hover,\n.CE_freeContainer_wrapper > .CE_body > .CE_row > .CE_tool:hover {\n  background-color: rgba(0, 0, 0, .2);\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_col,\n.CE_freeContainer_wrapper > .CE_body > .CE_col {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_col > select,\n.CE_freeContainer_wrapper > .CE_body > .CE_col > select {\n  height: 40px;\n  max-width: 100%;\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_col > .CE_tool,\n.CE_freeContainer_wrapper > .CE_body > .CE_col > .CE_tool {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_col > .CE_tool:not(:first-child),\n.CE_freeContainer_wrapper > .CE_body > .CE_col > .CE_tool:not(:first-child) {\n  margin-top: 10px;\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_col > .CE_tool.CE_icon,\n.CE_freeContainer_wrapper > .CE_body > .CE_col > .CE_tool.CE_icon {\n  margin: auto;\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_col > .CE_tool.CE_icon:not(:first-child),\n.CE_freeContainer_wrapper > .CE_body > .CE_col > .CE_tool.CE_icon:not(:first-child) {\n  margin-top: 5px;\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_col > .CE_tool.CE_icon:hover,\n.CE_freeContainer_wrapper > .CE_body > .CE_col > .CE_tool.CE_icon:hover {\n  background-color: rgba(0, 0, 0, .2);\n}\n\n.CE_freeContainer_wrapper > .CE_body.CE_col > input,\n.CE_freeContainer_wrapper > .CE_body > .CE_col > input {\n  height: 30px;\n  text-indent: 5px;\n  border: solid 1px #999;\n  border-radius: 2px;\n}\n\n.CE_freeContainer_wrapper > .CE_body .CE_bg-color {\n  border-radius: 4px;\n  background: -webkit-gradient(linear, left top, right bottom, from(#99f), color-stop(#9f9), to(#f99));\n  background: linear-gradient(to bottom right, #99f, #9f9, #f99);\n}\n\n.CE_freeContainer_wrapper > .CE_body .CE_stroke-color {\n  border-radius: 4px;\n  border: solid 2px #f97;\n}", ""]);



/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(26);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(21)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// Module
exports.push([module.i, ".CE_input {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 40px;\n}\n\n.CE_input:hover {\n  background-color: transparent !important;\n}\n\n.CE_input > .CE_fake-label {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 30px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 5px;\n  width: 50%;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.CE_input > .CE_fake-label::after {\n  margin-left: 10px;\n  display: inline-block;\n  width: 30px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  content: attr(data-value);\n}\n\n.CE_input > input {\n  margin: 0 0 0 auto;\n  height: 30px;\n  text-indent: 10px;\n  width: 50%;\n}", ""]);



/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(28);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(21)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// Module
exports.push([module.i, ".CE_contextmenu {\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: white;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  z-index: 9999;\n  border-radius: 2px;\n  -webkit-box-shadow: 4px 4px 20px rgba(0, 0, 56, .2);\n          box-shadow: 4px 4px 20px rgba(0, 0, 56, .2);\n}\n\n.CE_contextmenu > * {\n  position: relative;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-width: 200px;\n  min-height: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 10px;\n  font-size: 0.8em;\n  font-weight: 500;\n  cursor: default;\n  background-color: white;\n}\n\n.CE_contextmenu > * > .CE_contextmenu {\n  display: none;\n  position: absolute;\n  left: 100%;\n  bottom: 0;\n  min-height: 30px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: white;\n}\n\n.CE_contextmenu > *:not(:last-child) {\n  border-bottom: solid 1px rgba(0, 0, 0, .4);\n}\n\n.CE_contextmenu > *:hover {\n  background-color: #b7b7b7;\n}\n\n.CE_contextmenu > *:hover > .CE_contextmenu {\n  display: block;\n}\n\n.CE_contextmenu > *.CE_disabled {\n  color: #ccc;\n}\n\n.CE_contextmenu > *.CE_disabled:hover {\n  background-color: white;\n}\n\n.CE_contextmenu *[data-expandable] {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.CE_contextmenu .CE_icon_text span {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.CE_contextmenu .CE_icon_text span .CE_icon {\n  margin: 0;\n  width: 30px;\n}", ""]);



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(30);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(21)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// Imports
var urlEscape = __webpack_require__(31);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(32));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(32) + "#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(33));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(34));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(35) + "#carddesigner");

// Module
exports.push([module.i, "@font-face {\n  font-family: 'carddesigner';\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n.CE_icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'carddesigner' !important;\n  font-style: normal;\n  font-weight: normal;\n  -webkit-font-feature-settings: normal;\n          font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.CE_icon.star:before {\n  content: \"\\e921\";\n}\n\n.CE_icon.layer-add:before {\n  content: \"\\e920\";\n}\n\n.CE_icon.text-single-line:before {\n  content: \"\\e91b\";\n}\n\n.CE_icon.align-center:before {\n  content: \"\\e90c\";\n}\n\n.CE_icon.align-justify:before {\n  content: \"\\e90d\";\n}\n\n.CE_icon.align-left:before {\n  content: \"\\e90e\";\n}\n\n.CE_icon.align-right:before {\n  content: \"\\e90f\";\n}\n\n.CE_icon.bold:before {\n  content: \"\\e91c\";\n}\n\n.CE_icon.circle:before {\n  content: \"\\e91a\";\n}\n\n.CE_icon.crop:before {\n  content: \"\\e910\";\n}\n\n.CE_icon.delete:before {\n  content: \"\\e911\";\n}\n\n.CE_icon.effects:before {\n  content: \"\\e900\";\n}\n\n.CE_icon.hand:before {\n  content: \"\\e912\";\n}\n\n.CE_icon.image:before {\n  content: \"\\e901\";\n}\n\n.CE_icon.italic:before {\n  content: \"\\e91d\";\n}\n\n.CE_icon.layers:before {\n  content: \"\\e902\";\n}\n\n.CE_icon.minus:before {\n  content: \"\\e916\";\n}\n\n.CE_icon.move:before {\n  content: \"\\e903\";\n}\n\n.CE_icon.paragraph:before {\n  content: \"\\e91e\";\n}\n\n.CE_icon.plus:before {\n  content: \"\\e915\";\n}\n\n.CE_icon.rectangle:before {\n  content: \"\\e918\";\n}\n\n.CE_icon.redo:before {\n  content: \"\\e914\";\n}\n\n.CE_icon.select-down:before {\n  content: \"\\e904\";\n}\n\n.CE_icon.selection:before {\n  content: \"\\e905\";\n}\n\n.CE_icon.shapes:before {\n  content: \"\\e906\";\n}\n\n.CE_icon.text:before {\n  content: \"\\e907\";\n}\n\n.CE_icon.times:before {\n  content: \"\\e917\";\n}\n\n.CE_icon.tools:before {\n  content: \"\\e908\";\n}\n\n.CE_icon.triangle:before {\n  content: \"\\e919\";\n}\n\n.CE_icon.underline:before {\n  content: \"\\e91f\";\n}\n\n.CE_icon.undo:before {\n  content: \"\\e913\";\n}\n\n.CE_icon.upload:before {\n  content: \"\\e909\";\n}\n\n.CE_icon.zoom-in:before {\n  content: \"\\e90a\";\n}\n\n.CE_icon.zoom-out:before {\n  content: \"\\e90b\";\n}\n\n.CE_icon.image1:before {\n  content: \"\\e922\";\n}\n\n.CE_icon.page:before {\n  content: \"\\e924\";\n}\n\n.CE_icon.checkbox-unchecked:before {\n  content: \"\\ea53\";\n}\n\n.CE_icon.radio-unchecked:before {\n  content: \"\\ea56\";\n}\n\n.CE_icon.font-size:before {\n  content: \"\\ea61\";\n}\n\n.CE_icon.strikethrough:before {\n  content: \"\\ea65\";\n}", ""]);



/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/carddesigner.eot";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/carddesigner.ttf";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/carddesigner.woff";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/carddesigner.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(37);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(21)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// Module
exports.push([module.i, ".bubble {\n  position: absolute;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, .3);\n}\n\n.bubble.animate {\n  -webkit-animation: grow 600ms ease 1;\n          animation: grow 600ms ease 1;\n}\n\n.bubbling {\n  position: relative;\n  overflow: hidden;\n}\n\n.toggler-wrapper {\n  position: relative;\n  display: block;\n  height: 30px;\n  width: 60px;\n  border-radius: 15px;\n  background-color: #99f;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.toggler-wrapper *:focus {\n  outline: none !important;\n}\n\n.toggler-wrapper > span {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #f99;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease;\n  margin: 0 !important;\n}\n\n.toggler-wrapper > input[type=checkbox]:checked + span.toggler_btn {\n  background-color: #7dda85;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n\n.rangeSlider-wrapper {\n  position: relative;\n  height: 4px;\n  background-color: #99f;\n  margin: 13px 5px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.rangeSlider-wrapper *:focus, .rangeSlider-wrapper:focus {\n  outline: none !important;\n}\n\n.rangeSlider-wrapper > span {\n  position: absolute;\n  top: -5.5px;\n  left: -7.5px;\n  display: block;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: #f99;\n}\n\n.rangeSlider-wrapper > span::after {\n  font-family: Arial, Helvetica, sans-serif;\n  position: absolute;\n  top: 6px;\n  left: 5px;\n  height: 38px;\n  width: 38px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  content: attr(data-value);\n  font-size: 12.8px;\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: white;\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  -webkit-transition: all 300ms ease-out;\n  transition: all 300ms ease-out;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n}\n\n.rangeSlider-wrapper:active > span::after {\n  background-color: inherit;\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n\n.rangeSlider-wrapper.small {\n  height: 2px;\n  margin: 18px 5px;\n}\n\n.rangeSlider-wrapper.small > span {\n  top: -5px;\n  left: -6px;\n  height: 12px;\n  width: 12px;\n}\n\n.toolTip-wrapper {\n  position: fixed;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  pointer-events: none;\n  z-index: 999;\n}\n\n.toolTip-wrapper .toolTip {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #99f;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .2);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .2);\n  padding: 10px;\n  border-radius: 4px;\n  -webkit-animation: spring 100ms ease 1;\n          animation: spring 100ms ease 1;\n  width: fit-content;\n  max-width: 220px;\n}\n\n.toolTip-wrapper .toolTip > .text {\n  z-index: 1;\n  display: block;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  white-space: pre-line;\n}\n\n.toolTip-wrapper .toolTip > .toolTip-pointer {\n  z-index: -1;\n  position: absolute;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  height: 15px;\n  width: 15px;\n  background-color: #99f;\n}\n\n@-webkit-keyframes spring {\n  0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  80% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes spring {\n  0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  80% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@-webkit-keyframes grow {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate3d(0, 0, 0);\n            transform: scale(0) translate3d(0, 0, 0);\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.2) translate3d(0, 0, 0);\n            transform: scale(1.2) translate3d(0, 0, 0);\n  }\n}\n\n@keyframes grow {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate3d(0, 0, 0);\n            transform: scale(0) translate3d(0, 0, 0);\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.2) translate3d(0, 0, 0);\n            transform: scale(1.2) translate3d(0, 0, 0);\n  }\n}\n\n.__select {\n  position: relative;\n  height: 40px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  border-bottom: solid 2px #666;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.__select:hover {\n  background-color: #eef;\n}\n\n.__select > .__placeholder {\n  content: attr(data-text);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 2px;\n  font-size: 0.95em;\n  text-transform: none;\n}\n\n.__select > .__placeholder::after {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 100%;\n  font-size: 0.65em;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  content: '\\25BC';\n  margin-left: auto;\n  color: #666;\n}\n\nbody > .__mask {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n\nbody > .__options {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 !important;\n  display: block;\n  position: fixed;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .2);\n          box-shadow: 0 0 4px rgba(0, 0, 0, .2);\n  top: 0;\n  left: 0;\n  background-color: white;\n  overflow: hidden;\n  z-index: 9999;\n}\n\nbody > .__options > .__option {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: default;\n  padding: 0 5px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  white-space: pre-wrap;\n}\n\nbody > .__options > .__option.__selected, body > .__options > .__option.__selected:hover {\n  background-color: #96f;\n  color: white;\n}\n\nbody > .__options > .__option:hover {\n  background-color: #fcf;\n}", ""]);



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * JavaScript Canvas to Blob
 * https://github.com/blueimp/JavaScript-Canvas-to-Blob
 *
 * Copyright 2012, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on stackoverflow user Stoive's code snippet:
 * http://stackoverflow.com/q/4998908
 */

/* global atob, Blob, define */

;(function (window) {
  'use strict'

  var CanvasPrototype =
    window.HTMLCanvasElement && window.HTMLCanvasElement.prototype
  var hasBlobConstructor =
    window.Blob &&
    (function () {
      try {
        return Boolean(new Blob())
      } catch (e) {
        return false
      }
    })()
  var hasArrayBufferViewSupport =
    hasBlobConstructor &&
    window.Uint8Array &&
    (function () {
      try {
        return new Blob([new Uint8Array(100)]).size === 100
      } catch (e) {
        return false
      }
    })()
  var BlobBuilder =
    window.BlobBuilder ||
    window.WebKitBlobBuilder ||
    window.MozBlobBuilder ||
    window.MSBlobBuilder
  var dataURIPattern = /^data:((.*?)(;charset=.*?)?)(;base64)?,/
  var dataURLtoBlob =
    (hasBlobConstructor || BlobBuilder) &&
    window.atob &&
    window.ArrayBuffer &&
    window.Uint8Array &&
    function (dataURI) {
      var matches,
        mediaType,
        isBase64,
        dataString,
        byteString,
        arrayBuffer,
        intArray,
        i,
        bb
      // Parse the dataURI components as per RFC 2397
      matches = dataURI.match(dataURIPattern)
      if (!matches) {
        throw new Error('invalid data URI')
      }
      // Default to text/plain;charset=US-ASCII
      mediaType = matches[2]
        ? matches[1]
        : 'text/plain' + (matches[3] || ';charset=US-ASCII')
      isBase64 = !!matches[4]
      dataString = dataURI.slice(matches[0].length)
      if (isBase64) {
        // Convert base64 to raw binary data held in a string:
        byteString = atob(dataString)
      } else {
        // Convert base64/URLEncoded data component to raw binary:
        byteString = decodeURIComponent(dataString)
      }
      // Write the bytes of the string to an ArrayBuffer:
      arrayBuffer = new ArrayBuffer(byteString.length)
      intArray = new Uint8Array(arrayBuffer)
      for (i = 0; i < byteString.length; i += 1) {
        intArray[i] = byteString.charCodeAt(i)
      }
      // Write the ArrayBuffer (or ArrayBufferView) to a blob:
      if (hasBlobConstructor) {
        return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {
          type: mediaType
        })
      }
      bb = new BlobBuilder()
      bb.append(arrayBuffer)
      return bb.getBlob(mediaType)
    }
  if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
    if (CanvasPrototype.mozGetAsFile) {
      CanvasPrototype.toBlob = function (callback, type, quality) {
        var self = this
        setTimeout(function () {
          if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
            callback(dataURLtoBlob(self.toDataURL(type, quality)))
          } else {
            callback(self.mozGetAsFile('blob', type))
          }
        })
      }
    } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
      CanvasPrototype.toBlob = function (callback, type, quality) {
        var self = this
        setTimeout(function () {
          callback(dataURLtoBlob(self.toDataURL(type, quality)))
        })
      }
    }
  }
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return dataURLtoBlob
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  } else {}
})(window)


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * a-color-picker (https://github.com/narsenico/a-color-picker)
 * 
 * Copyright (c) 2017-2018, Gianfranco Caldi.
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t,r){"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var n=r(4);function i(e){return!0===n(e)&&"[object Object]"===Object.prototype.toString.call(e)}e.exports=function(e){var t,r;return!1!==i(e)&&"function"==typeof(t=e.constructor)&&!1!==i(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf")}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r,n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),s=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(s).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},function(e,t,r){(e.exports=r(1)(void 0)).push([e.i,"/*!\n * a-color-picker\n * https://github.com/narsenico/a-color-picker\n * \n * Copyright (c) 2017-2018, Gianfranco Caldi.\n * Released under the MIT License.\n */\n\n.a-color-picker {\n    background-color: #FFFFFF;\n    padding: 0px;\n    box-sizing: border-box;\n    display: inline-flex;\n    flex-direction: column;\n    user-select: none;\n    width: 232px;\n    font: 400 10px Helvetica,Arial,sans-serif;\n    border-radius: 3px;\n    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.05), 0px 2px 4px rgba(0,0,0,0.25);\n}\n\n.a-color-picker input {\n    box-sizing: border-box;\n}\n\n.a-color-picker-row {\n    padding: 15px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    user-select: none;\n}\n\n.a-color-picker-row-top {\n    padding: 0;\n}\n\n.a-color-picker-row:not(:first-child) {\n    border-top: solid 1px #F5F5F5;\n}\n\n.a-color-picker-column {\n    display: flex;\n    flex-direction: column;\n}\n\n.a-color-picker-cell {\n    flex: 1 1 auto;\n    margin-bottom: 4px;\n}\n\n.a-color-picker-cell:last-child {\n    margin-bottom: 0;\n}\n\n.a-color-picker-stack {\n    position: relative;\n}\n\n.a-color-picker-dot {\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    top: 0px;\n    left: 0px;\n    background: #ffffff;\n    pointer-events: none;\n    border-radius: 50px;\n    z-index: 1000;\n    box-shadow: 0px 1px 2px rgba(0,0,0,0.75);\n}\n\n.a-color-picker-a, .a-color-picker-h, .a-color-picker-sl {\n    cursor: cell;\n}\n\n.a-color-picker-h+.a-color-picker-dot,\n.a-color-picker-a+.a-color-picker-dot {\n    top: -2px;\n}\n\n.a-color-picker-h,\n.a-color-picker-a {\n    border-radius: 2px;\n}\n\n.a-color-picker-preview {\n    box-sizing: border-box;\n    width: 30px;\n    height: 30px;\n    user-select: none;\n    border-radius: 15px;\n}\n\n.a-color-picker-circle {\n    border-radius: 50px;\n    border: solid 1px #eee;    \n}\n\n.a-color-picker-hsl,\n.a-color-picker-rgb,\n.a-color-picker-single-input {\n    justify-content: space-evenly;\n}\n\n.a-color-picker-hsl>label,\n.a-color-picker-rgb>label,\n.a-color-picker-single-input>label {\n    padding: 0 8px;\n    flex: 0 0 auto;\n    color: #969696;\n}\n\n.a-color-picker-hsl>input,\n.a-color-picker-rgb>input,\n.a-color-picker-single-input>input {\n    text-align: center;\n    padding: 2px 0px;\n    width: 0;\n    flex: 1 1 auto;\n    border: 1px solid #e0e0e0;\n    line-height: 20px;\n}\n\n.a-color-picker-hsl>input::-webkit-inner-spin-button,\n.a-color-picker-rgb>input::-webkit-inner-spin-button,\n.a-color-picker-single-input>input::-webkit-inner-spin-button,\n.a-color-picker-hsl>input::-webkit-inner-spin-button,\n.a-color-picker-rgb>input::-webkit-inner-spin-button,\n.a-color-picker-single-input>input::-webkit-inner-spin-button {\n    -webkit-appearance: none; \n    margin: 0; \n}\n\n.a-color-picker-hsl>input:focus,\n.a-color-picker-rgb>input:focus,\n.a-color-picker-single-input>input:focus {\n    border-color: #04a9f4;\n    outline: none;\n}\n\n.a-color-picker-transparent {\n    background-image: linear-gradient(-45deg, #cdcdcd 25%, transparent 25%), linear-gradient(45deg, #cdcdcd 25%, transparent 25%), linear-gradient(-45deg, transparent 75%, #cdcdcd 75%), linear-gradient(45deg, transparent 75%, #cdcdcd 75%);\n    background-size: 11px 11px;\n    background-position: 0 0, 0 -5.5px, -5.5px 5.5px, 5.5px 0px;\n\n}\n\n.a-color-picker-sl {\n    border-radius: 3px 3px 0px 0px;\n}\n\n.a-color-picker.hide-hsl [show-on-hsl],\n.a-color-picker.hide-rgb [show-on-rgb],\n.a-color-picker.hide-single-input [show-on-single-input],\n.a-color-picker.hide-alpha [show-on-alpha] {\n    display: none;\n}\n\n.a-color-picker-clipbaord {\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.a-color-picker-palette {\n    flex-flow: wrap;\n    flex-direction: row;\n    justify-content: flex-start;\n    padding: 10px;\n}\n\n.a-color-picker-palette-color {\n    width: 15px;\n    height: 15px;\n    flex: 0 1 15px;\n    margin: 3px;\n    box-sizing: border-box;\n    cursor: pointer;\n    border-radius: 3px;\n    box-shadow: 0px 0px 0px 1px inset rgba(0,0,0,0.10);\n}\n\n.a-color-picker-palette-add {\n    text-align: center;\n    line-height: 13px;\n    color: #607D8B;\n}",""])},function(e,t,r){var n=r(2);e.exports="string"==typeof n?n:n.toString()},function(e,t,r){"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */e.exports=function(e){return null!=e&&"object"==typeof e&&!1===Array.isArray(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nvl=t.ensureArray=t.limit=t.getLuminance=t.parseColor=t.parseColorToHsla=t.parseColorToHsl=t.cssHslaToHsla=t.cssHslToHsl=t.parseColorToRgba=t.parseColorToRgb=t.cssRgbaToRgba=t.cssRgbToRgb=t.cssColorToRgba=t.cssColorToRgb=t.intToRgb=t.rgbToInt=t.rgbToHsv=t.rgbToHsl=t.hslToRgb=t.rgbToHex=t.PALETTE_MATERIAL_CHROME=t.PALETTE_MATERIAL_500=t.COLOR_NAMES=void 0;var n,i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=(n=r(0))&&n.__esModule?n:{default:n};function s(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var a={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4","indianred ":"#CD5C5C","indigo ":"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"};function l(e,t,r){return e=+e,isNaN(e)?t:e<t?t:e>r?r:e}function c(e,t){return null===e||void 0===e?t:e}function u(e,t,r){var n=[l(e,0,255),l(t,0,255),l(r,0,255)];return"#"+("000000"+((e=n[0])<<16|(t=n[1])<<8|(r=n[2])).toString(16)).slice(-6)}function h(e,t,r){var n=void 0,i=void 0,o=void 0,s=[l(e,0,360)/360,l(t,0,100)/100,l(r,0,100)/100];if(e=s[0],r=s[2],0==(t=s[1]))n=i=o=r;else{var a=function(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e},c=r<.5?r*(1+t):r+t-r*t,u=2*r-c;n=a(u,c,e+1/3),i=a(u,c,e),o=a(u,c,e-1/3)}return[255*n,255*i,255*o].map(Math.round)}function p(e,t,r){var n=[l(e,0,255)/255,l(t,0,255)/255,l(r,0,255)/255];e=n[0],t=n[1],r=n[2];var i=Math.max(e,t,r),o=Math.min(e,t,r),s=void 0,a=void 0,c=(i+o)/2;if(i==o)s=a=0;else{var u=i-o;switch(a=c>.5?u/(2-i-o):u/(i+o),i){case e:s=(t-r)/u+(t<r?6:0);break;case t:s=(r-e)/u+2;break;case r:s=(e-t)/u+4}s/=6}return[360*s,100*a,100*c].map(Math.round)}function d(e,t,r){return e<<16|t<<8|r}function g(e){if(e){var t=a[e.toString().toLowerCase()],r=/^\s*#?((([0-9A-F])([0-9A-F])([0-9A-F]))|(([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})))\s*$/i.exec(t||e)||[],n=i(r,10),o=n[3],s=n[4],l=n[5],c=n[7],u=n[8],h=n[9];if(void 0!==o)return[parseInt(o+o,16),parseInt(s+s,16),parseInt(l+l,16)];if(void 0!==c)return[parseInt(c,16),parseInt(u,16),parseInt(h,16)]}}function f(e){if(e){var t=a[e.toString().toLowerCase()],r=/^\s*#?((([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])?)|(([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?))\s*$/i.exec(t||e)||[],n=i(r,12),o=n[3],s=n[4],l=n[5],c=n[6],u=n[8],h=n[9],p=n[10],d=n[11];if(void 0!==o)return[parseInt(o+o,16),parseInt(s+s,16),parseInt(l+l,16),c?+(parseInt(c+c,16)/255).toFixed(2):1];if(void 0!==u)return[parseInt(u,16),parseInt(h,16),parseInt(p,16),d?+(parseInt(d,16)/255).toFixed(2):1]}}function b(e){if(e){var t=/^rgb\((\d+)[\s,](\d+)[\s,](\d+)\)/i.exec(e)||[],r=i(t,4),n=r[0],o=r[1],s=r[2],a=r[3];return n?[l(o,0,255),l(s,0,255),l(a,0,255)]:void 0}}function v(e){if(e){var t=/^rgba?\((\d+)\s*[\s,]\s*(\d+)\s*[\s,]\s*(\d+)(\s*[\s,]\s*(\d*(.\d+)?))?\)/i.exec(e)||[],r=i(t,6),n=r[0],o=r[1],s=r[2],a=r[3],u=r[5];return n?[l(o,0,255),l(s,0,255),l(a,0,255),l(c(u,1),0,1)]:void 0}}function m(e){if(Array.isArray(e))return[l(e[0],0,255),l(e[1],0,255),l(e[2],0,255),l(c(e[3],1),0,1)];var t=f(e)||v(e);return t&&3===t.length&&t.push(1),t}function A(e){if(e){var t=/^hsl\((\d+)[\s,](\d+)[\s,](\d+)\)/i.exec(e)||[],r=i(t,4),n=r[0],o=r[1],s=r[2],a=r[3];return n?[l(o,0,360),l(s,0,100),l(a,0,100)]:void 0}}function y(e){if(e){var t=/^hsla?\((\d+)\s*[\s,]\s*(\d+)\s*[\s,]\s*(\d+)(\s*[\s,]\s*(\d*(.\d+)?))?\)/i.exec(e)||[],r=i(t,6),n=r[0],o=r[1],s=r[2],a=r[3],u=r[5];return n?[l(o,0,255),l(s,0,255),l(a,0,255),l(c(u,1),0,1)]:void 0}}function F(e){if(Array.isArray(e))return[l(e[0],0,360),l(e[1],0,100),l(e[2],0,100),l(c(e[3],1),0,1)];var t=y(e);return t&&3===t.length&&t.push(1),t}function k(e,t){switch(t){case"rgb":default:return e.slice(0,3);case"rgbcss":return"rgb("+e[0]+", "+e[1]+", "+e[2]+")";case"rgbcss4":return"rgb("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")";case"rgba":return e;case"rgbacss":return"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")";case"hsl":return p.apply(void 0,s(e));case"hslcss":return"hsl("+(e=p.apply(void 0,s(e)))[0]+", "+e[1]+", "+e[2]+")";case"hslcss4":var r=p.apply(void 0,s(e));return"hsl("+r[0]+", "+r[1]+", "+r[2]+", "+e[3]+")";case"hsla":return[].concat(s(p.apply(void 0,s(e))),[e[3]]);case"hslacss":var n=p.apply(void 0,s(e));return"hsla("+n[0]+", "+n[1]+", "+n[2]+", "+e[3]+")";case"hex":return u.apply(void 0,s(e));case"hexcss4":return u.apply(void 0,s(e))+("00"+parseInt(255*e[3]).toString(16)).slice(-2);case"int":return d.apply(void 0,s(e))}}t.COLOR_NAMES=a,t.PALETTE_MATERIAL_500=["#F44336","#E91E63","#E91E63","#9C27B0","#9C27B0","#673AB7","#673AB7","#3F51B5","#3F51B5","#2196F3","#2196F3","#03A9F4","#03A9F4","#00BCD4","#00BCD4","#009688","#009688","#4CAF50","#4CAF50","#8BC34A","#8BC34A","#CDDC39","#CDDC39","#FFEB3B","#FFEB3B","#FFC107","#FFC107","#FF9800","#FF9800","#FF5722","#FF5722","#795548","#795548","#9E9E9E","#9E9E9E","#607D8B","#607D8B"],t.PALETTE_MATERIAL_CHROME=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b"],t.rgbToHex=u,t.hslToRgb=h,t.rgbToHsl=p,t.rgbToHsv=function(e,t,r){var n=[l(e,0,255)/255,l(t,0,255)/255,l(r,0,255)/255];e=n[0],t=n[1],r=n[2];var i,o=Math.max(e,t,r),s=Math.min(e,t,r),a=void 0,c=o,u=o-s;if(i=0===o?0:u/o,o==s)a=0;else{switch(o){case e:a=(t-r)/u+(t<r?6:0);break;case t:a=(r-e)/u+2;break;case r:a=(e-t)/u+4}a/=6}return[a,i,c]},t.rgbToInt=d,t.intToRgb=function(e){return[e>>16&255,e>>8&255,255&e]},t.cssColorToRgb=g,t.cssColorToRgba=f,t.cssRgbToRgb=b,t.cssRgbaToRgba=v,t.parseColorToRgb=function(e){return Array.isArray(e)?e=[l(e[0],0,255),l(e[1],0,255),l(e[2],0,255)]:g(e)||b(e)},t.parseColorToRgba=m,t.cssHslToHsl=A,t.cssHslaToHsla=y,t.parseColorToHsl=function(e){return Array.isArray(e)?e=[l(e[0],0,360),l(e[1],0,100),l(e[2],0,100)]:A(e)},t.parseColorToHsla=F,t.parseColor=function(e,t){if(t=t||"rgb",null!==e&&void 0!==e){var r=void 0;if((r=m(e))||(r=F(e))&&(r=[].concat(s(h.apply(void 0,s(r))),[r[3]])))return(0,o.default)(t)?["rgb","rgbcss","rgbcss4","rgba","rgbacss","hsl","hslcss","hslcss4","hsla","hslacss","hex","hexcss4","int"].reduce(function(e,t){return e[t]=k(r,t),e},t||{}):k(r,t.toString().toLowerCase())}},t.getLuminance=function(e,t,r){return.2126*(e=(e/=255)<.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t=(t/=255)<.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*((r/=255)<.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},t.limit=l,t.ensureArray=function(e){return e?Array.from(e):[]},t.nvl=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION=t.PALETTE_MATERIAL_CHROME=t.PALETTE_MATERIAL_500=t.COLOR_NAMES=t.getLuminance=t.intToRgb=t.rgbToInt=t.rgbToHsv=t.rgbToHsl=t.hslToRgb=t.rgbToHex=t.parseColor=t.parseColorToHsla=t.parseColorToHsl=t.parseColorToRgba=t.parseColorToRgb=t.from=t.createPicker=void 0;var n,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},s=r(5),a=(n=r(0))&&n.__esModule?n:{default:n};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}
/*!
                                                                                                                                                                                                     * a-color-picker
                                                                                                                                                                                                     * https://github.com/narsenico/a-color-picker
                                                                                                                                                                                                     * 
                                                                                                                                                                                                     * Copyright (c) 2017-2018, Gianfranco Caldi.
                                                                                                                                                                                                     * Released under the MIT License.
                                                                                                                                                                                                     */var u="undefined"!=typeof window&&window.navigator.userAgent.indexOf("Edge")>-1,h="undefined"!=typeof window&&window.navigator.userAgent.indexOf("rv:")>-1,p={id:null,attachTo:"body",showHSL:!0,showRGB:!0,showHEX:!0,showAlpha:!1,color:"#ff0000",palette:null,paletteEditable:!1,useAlphaInPalette:"auto"},d=[232,150],g=[150,11],f=g,b="COLOR",v="RGBA_USER",m="HSLA_USER",A='<div class="a-color-picker-row a-color-picker-stack a-color-picker-row-top">\n                            <canvas class="a-color-picker-sl a-color-picker-transparent"></canvas>\n                            <div class="a-color-picker-dot"></div>\n                        </div>\n                        <div class="a-color-picker-row">\n                            <div class="a-color-picker-stack a-color-picker-transparent a-color-picker-circle">\n                                <div class="a-color-picker-preview">\n                                    <input class="a-color-picker-clipbaord" type="text">\n                                </div>\n                            </div>\n                            <div class="a-color-picker-column">\n                                <div class="a-color-picker-cell a-color-picker-stack">\n                                    <canvas class="a-color-picker-h"></canvas>\n                                    <div class="a-color-picker-dot"></div>\n                                </div>\n                                <div class="a-color-picker-cell a-color-picker-alpha a-color-picker-stack" show-on-alpha>\n                                    <canvas class="a-color-picker-a a-color-picker-transparent"></canvas>\n                                    <div class="a-color-picker-dot"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-hsl" show-on-hsl>\n                            <label>H</label>\n                            <input nameref="H" type="number" maxlength="3" min="0" max="360" value="0">\n                            <label>S</label>\n                            <input nameref="S" type="number" maxlength="3" min="0" max="100" value="0">\n                            <label>L</label>\n                            <input nameref="L" type="number" maxlength="3" min="0" max="100" value="0">\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-rgb" show-on-rgb>\n                            <label>R</label>\n                            <input nameref="R" type="number" maxlength="3" min="0" max="255" value="0">\n                            <label>G</label>\n                            <input nameref="G" type="number" maxlength="3" min="0" max="255" value="0">\n                            <label>B</label>\n                            <input nameref="B" type="number" maxlength="3" min="0" max="255" value="0">\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-rgbhex a-color-picker-single-input" show-on-single-input>\n                            <label>HEX</label>\n                            <input nameref="RGBHEX" type="text" select-on-focus>\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-palette"></div>';function y(e,t,r){return e?e instanceof HTMLElement?e:e instanceof NodeList?e[0]:"string"==typeof e?document.querySelector(e):e.jquery?e.get(0):r?t:null:t}function F(e){var t=e.getContext("2d"),r=+e.width,n=+e.height,i=t.createLinearGradient(1,1,1,n-1);return i.addColorStop(0,"white"),i.addColorStop(1,"black"),{setHue:function(e){var o=t.createLinearGradient(0,0,r-1,0);o.addColorStop(0,"hsla("+e+", 100%, 50%, 0)"),o.addColorStop(1,"hsla("+e+", 100%, 50%, 1)"),t.fillStyle=i,t.fillRect(0,0,r,n),t.fillStyle=o,t.globalCompositeOperation="multiply",t.fillRect(0,0,r,n),t.globalCompositeOperation="source-over"},grabColor:function(e,r){return t.getImageData(e,r,1,1).data},findColor:function(e,t,i){var a=(0,s.rgbToHsv)(e,t,i),l=o(a,3),c=l[1],u=l[2];return[c*r,n-u*n]}}}function k(e,t,r){return null===e?t:/^\s*$/.test(e)?r:!!/true|yes|1/i.test(e)||!/false|no|0/i.test(e)&&t}var E=function(){function e(t,r){if(l(this,e),r?(t=y(t),this.options=Object.assign({},p,r)):t&&(0,a.default)(t)?(this.options=Object.assign({},p,t),t=y(this.options.attachTo)):(this.options=Object.assign({},p),t=y((0,s.nvl)(t,this.options.attachTo))),!t)throw new Error("Container not found: "+this.options.attachTo);!function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"acp-";if(t.hasAttribute(r+"show-hsl")&&(e.showHSL=k(t.getAttribute(r+"show-hsl"),p.showHSL,!0)),t.hasAttribute(r+"show-rgb")&&(e.showRGB=k(t.getAttribute(r+"show-rgb"),p.showRGB,!0)),t.hasAttribute(r+"show-hex")&&(e.showHEX=k(t.getAttribute(r+"show-hex"),p.showHEX,!0)),t.hasAttribute(r+"show-alpha")&&(e.showAlpha=k(t.getAttribute(r+"show-alpha"),p.showAlpha,!0)),t.hasAttribute(r+"palette-editable")&&(e.paletteEditable=k(t.getAttribute(r+"palette-editable"),p.paletteEditable,!0)),t.hasAttribute(r+"palette")){var n=t.getAttribute(r+"palette");switch(n){case"PALETTE_MATERIAL_500":e.palette=s.PALETTE_MATERIAL_500;break;case"PALETTE_MATERIAL_CHROME":case"":e.palette=s.PALETTE_MATERIAL_CHROME;break;default:e.palette=n.split(/[;\|]/)}}t.hasAttribute(r+"color")&&(e.color=t.getAttribute(r+"color"))}(this.options,t),this.H=0,this.S=0,this.L=0,this.R=0,this.G=0,this.B=0,this.A=1,this.palette={},this.element=document.createElement("div"),this.options.id&&(this.element.id=this.options.id),this.element.className="a-color-picker",this.element.innerHTML=A,t.appendChild(this.element);var n=this.element.querySelector(".a-color-picker-h");this.setupHueCanvas(n),this.hueBarHelper=F(n),this.huePointer=this.element.querySelector(".a-color-picker-h+.a-color-picker-dot");var i=this.element.querySelector(".a-color-picker-sl");this.setupSlCanvas(i),this.slBarHelper=F(i),this.slPointer=this.element.querySelector(".a-color-picker-sl+.a-color-picker-dot"),this.preview=this.element.querySelector(".a-color-picker-preview"),this.setupClipboard(this.preview.querySelector(".a-color-picker-clipbaord")),this.options.showHSL?(this.setupInput(this.inputH=this.element.querySelector(".a-color-picker-hsl>input[nameref=H]")),this.setupInput(this.inputS=this.element.querySelector(".a-color-picker-hsl>input[nameref=S]")),this.setupInput(this.inputL=this.element.querySelector(".a-color-picker-hsl>input[nameref=L]"))):this.element.querySelector(".a-color-picker-hsl").remove(),this.options.showRGB?(this.setupInput(this.inputR=this.element.querySelector(".a-color-picker-rgb>input[nameref=R]")),this.setupInput(this.inputG=this.element.querySelector(".a-color-picker-rgb>input[nameref=G]")),this.setupInput(this.inputB=this.element.querySelector(".a-color-picker-rgb>input[nameref=B]"))):this.element.querySelector(".a-color-picker-rgb").remove(),this.options.showHEX?this.setupInput(this.inputRGBHEX=this.element.querySelector("input[nameref=RGBHEX]")):this.element.querySelector(".a-color-picker-rgbhex").remove(),this.options.paletteEditable||this.options.palette&&this.options.palette.length>0?this.setPalette(this.element.querySelector(".a-color-picker-palette")):this.element.querySelector(".a-color-picker-palette").remove(),this.options.showAlpha?(this.setupAlphaCanvas(this.element.querySelector(".a-color-picker-a")),this.alphaPointer=this.element.querySelector(".a-color-picker-a+.a-color-picker-dot")):this.element.querySelector(".a-color-picker-alpha").remove(),this.onValueChanged(b,this.options.color)}return i(e,[{key:"setupHueCanvas",value:function(e){var t=this;e.width=g[0],e.height=g[1];for(var r=e.getContext("2d"),n=r.createLinearGradient(0,0,g[0],0),i=0;i<=1;i+=1/360)n.addColorStop(i,"hsl("+360*i+", 100%, 50%)");r.fillStyle=n,r.fillRect(0,0,g[0],g[1]);var o=function(r){var n=(0,s.limit)(r.clientX-e.getBoundingClientRect().left,0,g[0]),i=Math.round(360*n/g[0]);t.huePointer.style.left=n-7+"px",t.onValueChanged("H",i)},a=function e(){document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",e)};e.addEventListener("mousedown",function(e){o(e),document.addEventListener("mousemove",o),document.addEventListener("mouseup",a)})}},{key:"setupSlCanvas",value:function(e){var t=this;e.width=d[0],e.height=d[1];var r=function(r){var n=(0,s.limit)(r.clientX-e.getBoundingClientRect().left,0,d[0]-1),i=(0,s.limit)(r.clientY-e.getBoundingClientRect().top,0,d[1]-1),o=t.slBarHelper.grabColor(n,i);t.slPointer.style.left=n-7+"px",t.slPointer.style.top=i-7+"px",t.onValueChanged("RGB",o)},n=function e(){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",e)};e.addEventListener("mousedown",function(e){r(e),document.addEventListener("mousemove",r),document.addEventListener("mouseup",n)})}},{key:"setupAlphaCanvas",value:function(e){var t=this;e.width=f[0],e.height=f[1];var r=e.getContext("2d"),n=r.createLinearGradient(0,0,e.width-1,0);n.addColorStop(0,"hsla(0, 0%, 50%, 0)"),n.addColorStop(1,"hsla(0, 0%, 50%, 1)"),r.fillStyle=n,r.fillRect(0,0,f[0],f[1]);var i=function(r){var n=(0,s.limit)(r.clientX-e.getBoundingClientRect().left,0,f[0]),i=+(n/f[0]).toFixed(2);t.alphaPointer.style.left=n-7+"px",t.onValueChanged("ALPHA",i)},o=function e(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",e)};e.addEventListener("mousedown",function(e){i(e),document.addEventListener("mousemove",i),document.addEventListener("mouseup",o)})}},{key:"setupInput",value:function(e){var t=this,r=+e.min,n=+e.max,i=e.getAttribute("nameref");e.hasAttribute("select-on-focus")&&e.addEventListener("focus",function(){e.select()}),"text"===e.type?e.addEventListener("change",function(){t.onValueChanged(i,e.value)}):((u||h)&&e.addEventListener("keydown",function(o){"Up"===o.key?(e.value=(0,s.limit)(+e.value+1,r,n),t.onValueChanged(i,e.value),o.returnValue=!1):"Down"===o.key&&(e.value=(0,s.limit)(+e.value-1,r,n),t.onValueChanged(i,e.value),o.returnValue=!1)}),e.addEventListener("change",function(){var o=+e.value;t.onValueChanged(i,(0,s.limit)(o,r,n))}))}},{key:"setupClipboard",value:function(e){var t=this;e.title="click to copy",e.addEventListener("click",function(){e.value=(0,s.parseColor)([t.R,t.G,t.B,t.A],"hexcss4"),e.select(),document.execCommand("copy")})}},{key:"setPalette",value:function(e){var t=this,r="auto"===this.options.useAlphaInPalette?this.options.showAlpha:this.options.useAlphaInPalette,n=void 0;switch(this.options.palette){case"PALETTE_MATERIAL_500":n=s.PALETTE_MATERIAL_500;break;case"PALETTE_MATERIAL_CHROME":n=s.PALETTE_MATERIAL_CHROME;break;default:n=(0,s.ensureArray)(this.options.palette)}if(this.options.paletteEditable||n.length>0){var i=function(r,n,i){var o=e.querySelector('.a-color-picker-palette-color[data-color="'+r+'"]')||document.createElement("div");o.className="a-color-picker-palette-color",o.style.backgroundColor=r,o.setAttribute("data-color",r),o.title=r,e.insertBefore(o,n),t.palette[r]=!0,i&&t.onPaletteColorAdd(r)},o=function(r,n){r?(e.removeChild(r),t.palette[r.getAttribute("data-color")]=!1,n&&t.onPaletteColorRemove(r.getAttribute("data-color"))):(e.querySelectorAll(".a-color-picker-palette-color[data-color]").forEach(function(t){e.removeChild(t)}),Object.keys(t.palette).forEach(function(e){t.palette[e]=!1}),n&&t.onPaletteColorRemove())};if(n.map(function(e){return(0,s.parseColor)(e,r?"rgbcss4":"hex")}).filter(function(e){return!!e}).forEach(function(e){return i(e)}),this.options.paletteEditable){var a=document.createElement("div");a.className="a-color-picker-palette-color a-color-picker-palette-add",a.innerHTML="+",e.appendChild(a),e.addEventListener("click",function(e){/a-color-picker-palette-add/.test(e.target.className)?e.shiftKey?o(null,!0):i(r?(0,s.parseColor)([t.R,t.G,t.B,t.A],"rgbcss4"):(0,s.rgbToHex)(t.R,t.G,t.B),e.target,!0):/a-color-picker-palette-color/.test(e.target.className)&&(e.shiftKey?o(e.target,!0):t.onValueChanged(b,e.target.getAttribute("data-color")))})}else e.addEventListener("click",function(e){/a-color-picker-palette-color/.test(e.target.className)&&t.onValueChanged(b,e.target.getAttribute("data-color"))})}else e.style.display="none"}},{key:"onValueChanged",value:function(e,t){switch(e){case"H":this.H=t;var r=(0,s.hslToRgb)(this.H,this.S,this.L),n=o(r,3);this.R=n[0],this.G=n[1],this.B=n[2],this.slBarHelper.setHue(t),this.updatePointerH(this.H),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"S":this.S=t;var i=(0,s.hslToRgb)(this.H,this.S,this.L),a=o(i,3);this.R=a[0],this.G=a[1],this.B=a[2],this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"L":this.L=t;var l=(0,s.hslToRgb)(this.H,this.S,this.L),c=o(l,3);this.R=c[0],this.G=c[1],this.B=c[2],this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"R":this.R=t;var u=(0,s.rgbToHsl)(this.R,this.G,this.B),h=o(u,3);this.H=h[0],this.S=h[1],this.L=h[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"G":this.G=t;var p=(0,s.rgbToHsl)(this.R,this.G,this.B),d=o(p,3);this.H=d[0],this.S=d[1],this.L=d[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"B":this.B=t;var g=(0,s.rgbToHsl)(this.R,this.G,this.B),f=o(g,3);this.H=f[0],this.S=f[1],this.L=f[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGBHEX(this.R,this.G,this.B);break;case"RGB":var A=o(t,3);this.R=A[0],this.G=A[1],this.B=A[2];var y=(0,s.rgbToHsl)(this.R,this.G,this.B),F=o(y,3);this.H=F[0],this.S=F[1],this.L=F[2],this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B);break;case v:var k=o(t,4);this.R=k[0],this.G=k[1],this.B=k[2],this.A=k[3];var E=(0,s.rgbToHsl)(this.R,this.G,this.B),H=o(E,3);this.H=H[0],this.S=H[1],this.L=H[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B),this.updatePointerA(this.A);break;case m:var C=o(t,4);this.H=C[0],this.S=C[1],this.L=C[2],this.A=C[3];var R=(0,s.hslToRgb)(this.H,this.S,this.L),x=o(R,3);this.R=x[0],this.G=x[1],this.B=x[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B),this.updatePointerA(this.A);break;case"RGBHEX":var B=(0,s.cssColorToRgb)(t)||[this.R,this.G,this.B],L=o(B,3);this.R=L[0],this.G=L[1],this.B=L[2];var w=(0,s.rgbToHsl)(this.R,this.G,this.B),T=o(w,3);this.H=T[0],this.S=T[1],this.L=T[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B);break;case b:var S=(0,s.parseColor)(t,"rgba")||[0,0,0,1],G=o(S,4);this.R=G[0],this.G=G[1],this.B=G[2],this.A=G[3];var I=(0,s.rgbToHsl)(this.R,this.G,this.B),P=o(I,3);this.H=P[0],this.S=P[1],this.L=P[2],this.slBarHelper.setHue(this.H),this.updatePointerH(this.H),this.updatePointerSL(this.H,this.S,this.L),this.updateInputHSL(this.H,this.S,this.L),this.updateInputRGB(this.R,this.G,this.B),this.updateInputRGBHEX(this.R,this.G,this.B),this.updatePointerA(this.A);break;case"ALPHA":this.A=t}this.onColorChanged(this.R,this.G,this.B,this.A)}},{key:"onColorChanged",value:function(e,t,r,n){this.preview.style.backgroundColor=1===n?"rgb("+e+","+t+","+r+")":"rgba("+e+","+t+","+r+","+n+")",this.onchange&&this.onchange(this.preview.style.backgroundColor)}},{key:"onPaletteColorAdd",value:function(e){this.oncoloradd&&this.oncoloradd(e)}},{key:"onPaletteColorRemove",value:function(e){this.oncolorremove&&this.oncolorremove(e)}},{key:"updateInputHSL",value:function(e,t,r){this.options.showHSL&&(this.inputH.value=e,this.inputS.value=t,this.inputL.value=r)}},{key:"updateInputRGB",value:function(e,t,r){this.options.showRGB&&(this.inputR.value=e,this.inputG.value=t,this.inputB.value=r)}},{key:"updateInputRGBHEX",value:function(e,t,r){this.options.showHEX&&(this.inputRGBHEX.value=(0,s.rgbToHex)(e,t,r))}},{key:"updatePointerH",value:function(e){var t=g[0]*e/360;this.huePointer.style.left=t-7+"px"}},{key:"updatePointerSL",value:function(e,t,r){var n=(0,s.hslToRgb)(e,t,r),i=o(n,3),a=i[0],l=i[1],c=i[2],u=this.slBarHelper.findColor(a,l,c),h=o(u,2),p=h[0],d=h[1];p>=0&&(this.slPointer.style.left=p-7+"px",this.slPointer.style.top=d-7+"px")}},{key:"updatePointerA",value:function(e){if(this.options.showAlpha){var t=f[0]*e;this.alphaPointer.style.left=t-7+"px"}}}]),e}(),H=function(){function e(t){l(this,e),this.name=t,this.listeners=[]}return i(e,[{key:"on",value:function(e){e&&this.listeners.push(e)}},{key:"off",value:function(e){this.listeners=e?this.listeners.filter(function(t){return t!==e}):[]}},{key:"emit",value:function(e,t){for(var r=this.listeners.slice(0),n=0;n<r.length;n++)r[n].apply(t,e)}}]),e}();function C(e,t){var r=new E(e,t),n={change:new H("change"),coloradd:new H("coloradd"),colorremove:new H("colorremove")},i=!0,a={},l={get element(){return r.element},get rgb(){return[r.R,r.G,r.B]},set rgb(e){var t=o(e,3),n=t[0],i=t[1],a=t[2],l=[(0,s.limit)(n,0,255),(0,s.limit)(i,0,255),(0,s.limit)(a,0,255)];n=l[0],i=l[1],a=l[2],r.onValueChanged(v,[n,i,a,1])},get hsl(){return[r.H,r.S,r.L]},set hsl(e){var t=o(e,3),n=t[0],i=t[1],a=t[2],l=[(0,s.limit)(n,0,360),(0,s.limit)(i,0,100),(0,s.limit)(a,0,100)];n=l[0],i=l[1],a=l[2],r.onValueChanged(m,[n,i,a,1])},get rgbhex(){return this.all.hex},get rgba(){return[r.R,r.G,r.B,r.A]},set rgba(e){var t=o(e,4),n=t[0],i=t[1],a=t[2],l=t[3],c=[(0,s.limit)(n,0,255),(0,s.limit)(i,0,255),(0,s.limit)(a,0,255),(0,s.limit)(l,0,1)];n=c[0],i=c[1],a=c[2],l=c[3],r.onValueChanged(v,[n,i,a,l])},get hsla(){return[r.H,r.S,r.L,r.A]},set hsla(e){var t=o(e,4),n=t[0],i=t[1],a=t[2],l=t[3],c=[(0,s.limit)(n,0,360),(0,s.limit)(i,0,100),(0,s.limit)(a,0,100),(0,s.limit)(l,0,1)];n=c[0],i=c[1],a=c[2],l=c[3],r.onValueChanged(m,[n,i,a,l])},get color(){return this.all.toString()},set color(e){r.onValueChanged(b,e)},get all(){if(i){var e=[r.R,r.G,r.B,r.A],t=r.A<1?"rgba("+r.R+","+r.G+","+r.B+","+r.A+")":s.rgbToHex.apply(void 0,e);(a=(0,s.parseColor)(e,a)).toString=function(){return t},i=!1}return Object.assign({},a)},get onchange(){return n.change&&n.change.listeners[0]},set onchange(e){this.off("change").on("change",e)},get oncoloradd(){return n.coloradd&&n.coloradd.listeners[0]},set oncoloradd(e){this.off("coloradd").on("coloradd",e)},get oncolorremove(){return n.colorremove&&n.colorremove.listeners[0]},set oncolorremove(e){this.off("colorremove").on("colorremove",e)},get palette(){return Object.keys(r.palette).filter(function(e){return r.palette[e]})},on:function(e,t){return e&&n[e]&&n[e].on(t),this},off:function(e,t){return e&&n[e]&&n[e].off(t),this},destroy:function(){n.change.off(),n.coloradd.off(),n.colorremove.off(),r.element.remove(),n=null,r=null}};return r.onchange=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];i=!0,n.change.emit([l].concat(t),l)},r.oncoloradd=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n.coloradd.emit([l].concat(t),l)},r.oncolorremove=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n.colorremove.emit([l].concat(t),l)},r.element.ctrl=l,l}if("undefined"!=typeof window&&!document.querySelector('head>style[data-source="a-color-picker"]')){var R=r(3).toString(),x=document.createElement("style");x.setAttribute("type","text/css"),x.setAttribute("data-source","a-color-picker"),x.innerHTML=R,document.querySelector("head").appendChild(x)}t.createPicker=C,t.from=function(e,t){var r=function(e){return e?Array.isArray(e)?e:e instanceof HTMLElement?[e]:e instanceof NodeList?[].concat(c(e)):"string"==typeof e?[].concat(c(document.querySelectorAll(e))):e.jquery?e.get():[]:[]}(e).map(function(e,r){var n=C(e,t);return n.index=r,n});return r.on=function(e,t){return r.forEach(function(r){return r.on(e,t)}),this},r.off=function(e){return r.forEach(function(t){return t.off(e)}),this},r},t.parseColorToRgb=s.parseColorToRgb,t.parseColorToRgba=s.parseColorToRgba,t.parseColorToHsl=s.parseColorToHsl,t.parseColorToHsla=s.parseColorToHsla,t.parseColor=s.parseColor,t.rgbToHex=s.rgbToHex,t.hslToRgb=s.hslToRgb,t.rgbToHsl=s.rgbToHsl,t.rgbToHsv=s.rgbToHsv,t.rgbToInt=s.rgbToInt,t.intToRgb=s.intToRgb,t.getLuminance=s.getLuminance,t.COLOR_NAMES=s.COLOR_NAMES,t.PALETTE_MATERIAL_500=s.PALETTE_MATERIAL_500,t.PALETTE_MATERIAL_CHROME=s.PALETTE_MATERIAL_CHROME,t.VERSION="1.1.6"}])});

/***/ })
/******/ ])["CanvasEditor"];
});