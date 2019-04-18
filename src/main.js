import 'fabric';
// import html from './html';
import {
  freeContainer
} from './components/freeContainer';
import {
  toolsContainer
} from './components/toolsContainer';

import './css/main/main.css';
import './css/freeContainer/style.css';
import './css/inputs/style.css';
import './css/contextmenu/style.css';
import './css/res/style.css';
import {
  contextMenu
} from './components/contextmenu';

import * as html from 'html-element-js';

/**
 * 
 * @param {HTMLDivElement} parentel 
 * @param {Object} opts 
 */
export function CanvasEditor(parentel, opts) {
  if (!parentel) return console.error('pranetel undefined!');

  const picker = require('a-color-picker');

  let clickCatchMask = html.div({
    className: 'CE_click-catch-mask'
  });
  let mainWrapper = html.create('div', {
    id: 'CE_wrapper'
  });
  let canvasContainer = html.create('div', {
    id: 'CE_canvasContainer'
  });
  let colorPickerContainer = null;
  let colorPicker = null;
  let canvasContextMenuOptions = {
    background: html.create('span', {
      textContent: 'Background color'
    }),
    delte: html.create('span', {
      textContent: 'Delete'
    }),
    paste: html.create('span', {
      textContent: 'Paste'
    })
  };
  let objectContextMenuOptions = {
    arrange: html.create('span', {
      textContent: 'Arrange',
      children: [
        html.create('i', {
          className: 'CE_icon select-down',
          style: {
            transform: 'rotate(-90deg)'
          }
        })
      ],
      attr: {
        'data-expandable': 'true'
      }
    }),
    copy: html.create('span', {
      textContent: 'Copy'
    }),
    cut: html.create('span', {
      textContent: 'Cut'
    }),
    group: html.create('span', {
      textContent: 'Group'
    }),
    lock: html.create('span', {
      textContent: 'Lock'
    })
  };
  let arrangeOptions = {
    bringBackward: html.create('span', {
      textContent: 'Bring forward'
    }),
    bringFront: html.create('span', {
      textContent: 'Bring front'
    }),
    sendBackward: html.create('span', {
      textContent: 'Send backward'
    }),
    sendBack: html.create('span', {
      textContent: 'Send back'
    }),
  }
  let canvasContextMenu = contextMenu(Object.values(canvasContextMenuOptions));
  let objectContextMenu = contextMenu(Object.values(objectContextMenuOptions));
  let arrangeContextMenu = contextMenu(Object.values(arrangeOptions));

  let pages = {};
  /**
   * @type {fabric.Canvas}
   */
  let activeCanvas;

  /**
   * @type {toolsContainer}
   */
  let alltools = null;

  init();

  function addText(value, props) {
    value = value || 'hello';
    props = props || {
      editable: true,
      fontSize: 40,
      top: 100,
      left: 100
    }

    let text = new fabric.Textbox(value, props);
    activeCanvas.add(text);
    activeCanvas.centerObject(text);
  }

  function addImage(img, props) {
    props = props || {
      left: 0,
      top: 0
    }
    let image = new fabric.Image(img, props);
    activeCanvas.add(image);

    let width = image.getScaledWidth();
    let height = image.getScaledHeight();
    let canvasWidth = activeCanvas.getWidth();
    let canvasHeight = activeCanvas.getHeight();

    if (width > canvasWidth) {
      let diff = width - canvasWidth;
      width = width - diff;

      image.scaleToWidth(width);
    }
    if (height > canvasHeight) {
      let diff = height - canvasHeight;
      height = height - diff;

      image.scaleToHeight(height);
    }

  }

  function addRect(props) {
    props = props || {
      fill: 'red',
      width: 50,
      height: 50
    };
    let rect = new fabric.Rect(props);
    activeCanvas.add(rect);

    activeCanvas.centerObject(rect);
  }

  function addCircle(props) {
    props = props || {
      fill: 'red',
      radius: 25
    };

    let circle = new fabric.Circle(props);
    activeCanvas.add(circle);
    activeCanvas.centerObject(circle);
  }

  function addTriangle(props) {
    props = props || {
      fill: 'red',
      height: 50,
      width: 50
    };

    let triangle = new fabric.Triangle(props);
    activeCanvas.add(triangle);
    activeCanvas.centerObject(triangle);
  }

  function addPage() {
    let page = html.create('canvas');
    let canvas = new fabric.Canvas();

    canvasContainer.appendChild(page);
    canvas.initialize(page);
    canvas.setHeight(500);
    canvas.setWidth(500);
    canvas.setBackgroundColor('#fff');

    let i = canvasContainer.childElementCount;
    let pageName = 'page-' + i;
    pages[pageName] = {
      canvas,
      name: pageName
    };
    canvas.page = pages[pageName];

    canvas.on('mouse:down', updateActiveCanvas);

    if (!activeCanvas) {
      activeCanvas = canvas;
    }

    let element = canvas.getElement().parentElement;
    element.addEventListener('contextmenu', canvasContextMenuTrigger);

    fixPagesContainerPosition();
    updateActiveContainer();

    function updateActiveCanvas() {
      if (activeCanvas === canvas) return;
      deselectObjects();
      activeCanvas = canvas;

      let height = activeCanvas.getHeight();
      let width = activeCanvas.getWidth();
      let pageName = activeCanvas.page.name;

      let pageSettings = alltools.pageSettings;

      pageSettings.pageHeight.value = height;
      pageSettings.pageWidth.value = width;
      pageSettings.pageName.value = pageName;
    }
  }

  function deselectObjects() {
    if (activeCanvas) {
      activeCanvas.discardActiveObject();
      activeCanvas.requestRenderAll();
    };
  }

  function saveAsPng() {

  }

  function saveAsJPEG() {

  }

  function saveAsBase64() {

  }

  function toJSON() {
    let json = [];
    for (let page of pages) {
      json.push(page.toJSON());
    }

    return JSON.stringify(json);
  }

  function loadJSON() {

  }

  function init() {
    fabric.Object.prototype.set({
      transparentCorners: false,
      cornerColor: '#88f',
      borderColor: '#88f',
      cornerSize: 6
    });
    fabric.Object.prototype.onSelect = objectOnSelect;
    // fabric.Canvas.prototype.on('mouse:down', canvasContextMenuTrigger);
    mainWrapper.appendChild(canvasContainer);
    mainWrapper.appendChild(clickCatchMask);
    parentel.appendChild(mainWrapper);

    clickCatchMask.addEventListener('click', deselectObjects);

    /**
     * @type {tools}
     */
    alltools = toolsContainer();

    initTools();
    initContextMenu();
    addPage();
    fixPagesContainerPosition();
    window.addEventListener('resize', fixPagesContainerPosition);
    let containerWrapper = html.get('#CE_container-wrapper');
    let wrapper = html.get('#CE_tools-wrapper');
    colorPickerContainer = freeContainer({
      parentElement: containerWrapper,
      drop: wrapper,
      title: 'Color picker'
    });

    colorPicker = picker.createPicker(colorPickerContainer.DOMElements.body, {
      showHSL: false,
      showHEX: false,
      palette: 'PALETTE_MATERIAL_CHROME'
    });
  }

  function initTools() {
    let {
      tools,
      textSettings,
      pageSettings,
      objectSettings
    } = alltools;

    (function initPrimitiveTools() {
      tools.addPage.addEventListener('click', () => addPage());
      tools.circle.addEventListener('click', () => addCircle());
      tools.rectangle.addEventListener('click', () => addRect());
      tools.triangle.addEventListener('click', () => addTriangle());
      tools.addText.addEventListener('click', () => addText());

      tools.openImage.addEventListener('change', handleImage);

      tools.backgroundColor.addEventListener('click', () => {
        colorPickerContainer.setTitle('Color picker - fill');
        colorPickerContainer.setVisiblity(true);
        colorPicker.onchange = function (e) {
          let activeObjects = activeCanvas.getActiveObjects();
          let hexColor = e.rgbhex;
          for (let activeObject of activeObjects) {
            applyStyle(activeObject, 'fill', hexColor);
          }
        }
      });
      tools.strokeColor.addEventListener('click', () => {
        colorPickerContainer.setTitle('Color picker - stroke');
        colorPickerContainer.setVisiblity(true);
        colorPicker.onchange = function (e) {
          let activeObjects = activeCanvas.getActiveObjects();
          let hexColor = e.rgbhex;
          for (let activeObject of activeObjects) {
            applyStyle(activeObject, 'stroke', hexColor);
          }
        }
      });
    })();

    (function initTextSettings() {
      textSettings.fontFamily.addEventListener('change', function () {
        let fontFamily = this.value;
        let activeObjects = activeCanvas.getActiveObjects();
        for (let activeObject of activeObjects) {
          if (activeObject.type !== 'textbox') continue;
          applyStyle(activeObject, 'fontFamily', fontFamily);
        }
      });
      textSettings.fontSize.addEventListener('input', function () {
        let fontSize = this.value;
        let activeObjects = activeCanvas.getActiveObjects();
        for (let activeObject of activeObjects) {
          if (activeObject.type !== 'textbox') continue;
          applyStyle(activeObject, 'fontSize', fontSize);
        }
      });
      textSettings.fontWeight.addEventListener('input', function () {
        let fontWeight = this.value;
        let activeObjects = activeCanvas.getActiveObjects();
        for (let activeObject of activeObjects) {
          if (activeObject.type !== 'textbox') continue;
          applyStyle(activeObject, 'fontWeight', fontWeight);
        }
      });
      textSettings.underline.addEventListener('click', function () {
        let activeObjects = activeCanvas.getActiveObjects();
        for (let activeObject of activeObjects) {
          if (activeObject.type !== 'textbox') continue;
          if (activeObject.underline) {
            this.classList.remove('active');
            applyStyle(activeObject, 'underline', false);
          } else {
            this.classList.add('active');
            applyStyle(activeObject, 'underline', true);
          }
        }
      });
      textSettings.italic.addEventListener('click', function () {
        let activeObjects = activeCanvas.getActiveObjects();
        for (let activeObject of activeObjects) {
          if (activeObject.type !== 'textbox') continue;
          if (activeObject.fontStyle === 'italic') {
            this.classList.remove('active');
            applyStyle(activeObject, 'fontStyle', 'normal');
          } else {
            this.classList.add('active');
            applyStyle(activeObject, 'fontStyle', 'italic');
          }
        }
      });
      textSettings.strikethrough.addEventListener('click', function () {
        let activeObjects = activeCanvas.getActiveObjects();
        for (let activeObject of activeObjects) {
          if (activeObject.type !== 'textbox') continue;
          if (activeObject.linethrough) {
            this.classList.remove('active');
            applyStyle(activeObject, 'linethrough', false);
          } else {
            this.classList.add('active');
            applyStyle(activeObject, 'linethrough', true);
          }
        }
      });
    })();

    (function initPageSettings() {
      pageSettings.pageHeight.addEventListener('blur', function () {
        let height = parseFloat(this.value);
        activeCanvas.setHeight(height);
        activeCanvas.renderAll();
        fixPagesContainerPosition();
      });
      pageSettings.pageWidth.addEventListener('blur', function () {
        let width = parseFloat(this.value);
        activeCanvas.setWidth(width);
        activeCanvas.renderAll();
        fixPagesContainerPosition();
      });
      pageSettings.pageName.addEventListener('blur', function () {
        let name = this.value;
        activeCanvas.page.name = name;
      });
    })();
  }

  function initContextMenu() {
    objectContextMenuOptions.arrange.addEventListener('click', arrangeOnClick);
    /**
     * 
     * @param {MouseEvent} e 
     */
    function arrangeOnClick(e) {
      /**
       * @type {HTMLElement}
       */
      let el = this;
      let elClient = el.getBoundingClientRect();
      arrangeContextMenu.show({
        clientX: elClient.right,
        clientY: elClient.top
      });
    }
  }

  /**
   * 
   * @param {Object} fabricEvent 
   * @param {fabric.Object} fabricEvent.target
   * @param {Object} fabricEvent.pointer
   * @param {Number} fabricEvent.pointer.x
   * @param {Number} fabricEvent.pointer.y
   * @param {MouseEvent} fabricEvent.e
   *
  function canvasContextMenuTrigger(fabricEvent) {
    fabricEvent.e.preventDefault();
    console.log(activeCanvas);
  }*/

  /**
   * 
   * @param {MouseEvent} e 
   */
  function canvasContextMenuTrigger(e) {
    e.preventDefault();
    if (activeCanvas.getElement().parentElement === this && activeCanvas.getActiveObject()) {
      objectContextMenu.show(e);
    } else {
      canvasContextMenu.show(e);
    }
  }

  function fixPagesContainerPosition() {
    let CcontainerClient = canvasContainer.getBoundingClientRect();
    let CcontainerParentClient = canvasContainer.parentElement.getBoundingClientRect();

    let y = CcontainerParentClient.height / 2 - CcontainerClient.height / 2;
    let x = CcontainerParentClient.width / 2 - CcontainerClient.width / 2;

    canvasContainer.style.transform = `translate(${x}px, ${y}px)`;
  }

  function handleImage() {
    let reader = new FileReader();
    reader.onload = readerOnLoad;

    function readerOnLoad(e) {
      let imgObj = new Image();
      imgObj.src = e.target.result;
      imgObj.onload = function imgonload() {
        addImage(imgObj);
      };
    }

    reader.readAsDataURL(this.files[0]);
  }

  function updateActiveContainer() {
    let allContainer = html.getAll('#CE_canvasContainer .canvas-container');
    allContainer = [...allContainer];

    if (allContainer.length === 1) {
      allContainer[0].classList.add('active');
      return;
    }

    for (let el of allContainer) {
      el.onclick = function () {
        let lastActive = document.querySelector('.canvas-container.active');
        if (lastActive) {
          lastActive.classList.remove('active');
        }
        this.classList.add('active');
      }
    }
  }

  function objectOnSelect() {
    setTimeout(() => {
      let activeObject = activeCanvas.getActiveObject();
      let textSettings = alltools.textSettings;
      let objectSettings = alltools.objectSettings;
      if (!activeObject) return;

      if (activeObject.type === 'textbox') {
        /**
         * @type {fabric.Textbox}
         */
        let object = activeObject;
        let fontSize = object.fontSize;
        let fontFamily = object.fontFamily;
        let fontWeight = object.fontWeight;

        if (object.underline) {
          textSettings.underline.classList.add('active');
        } else {
          textSettings.underline.classList.remove('active');
        }

        if (object.fontStyle === 'italic') {
          textSettings.italic.classList.add('active');
        } else {
          textSettings.italic.classList.remove('active');
        }

        if (object.linethrough) {
          textSettings.strikethrough.classList.add('active');
        } else {
          textSettings.strikethrough.classList.remove('active');
        }

        textSettings.fontFamily.value = fontFamily;
        textSettings.fontWeight.value = fontWeight;
        textSettings.fontSize.value = fontSize;
      }



    }, 10);
  }

  function applyStyle(object, style, value) {
    object[style] = value;
    object.set({
      dirty: true
    });
    activeCanvas.renderAll();
  }

  return {
    saveAsBase64,
    saveAsPng,
    saveAsJPEG
  }
}