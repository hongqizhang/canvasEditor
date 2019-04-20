// import * as html from 'html-element-js';

import {
  freeContainer
} from './freeContainer';
import {
  contextMenu
} from './contextmenu';


const html = require('html-element-js').default;

/**
 * @typedef {Object} tools
 * @property {HTMLElement} addPage
 * @property {HTMLElement} addText
 * @property {HTMLElement} circle
 * @property {HTMLElement} rectangle
 * @property {HTMLElement} triangle
 * @property {HTMLElement} backgroundColor
 * @property {HTMLElement} strokeColor
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
export function toolsContainer() {
  /**
   * @type {HTMLDivElement}
   */
  let root = CE_wrapper;
  let wrapper = html.create('div', {
    id: 'CE_tools-wrapper'
  });
  let containerWrapper = html.div({
    id: 'CE_container-wrapper'
  });
  let container = html.create('div', {
    id: 'CE_tools-container'
  });
  let mainTools = {
    /**
     * @type {HTMLElement}
     */
    text: null,
    /**
     * @type {HTMLElement}
     */
    shapes: null,
    /**
     * @type {HTMLElement}
     */
    image: null,
    /**
     * @type {HTMLElement}
     */
    page: null,
    /**
     * @type {HTMLElement}
     */
    object: null,
    /**
     * @type {HTMLElement}
     */
    selection: null,
    /**
     * @type {HTMLElement}
     */
    hand: null,
    /**
     * @type {HTMLElement}
     */
    backgroundColor: null,
    /**
     * @type {HTMLElement}
     */
    strokeColor: null,
  };
  let page = {
    pageName: html.input({
      className: 'CE_tool',
      type: 'text',
      value: 'page-1',
      placeholder: 'page name'
    }),
    pageHeight: html.input({
      className: 'CE_tool',
      type: 'number',
      value: '500',
      placeholder: 'h'
    }),
    pageWidth: html.input({
      className: 'CE_tool',
      type: 'number',
      value: '500',
      placeholder: 'w'
    }),
    addPage: html.button(null, {
      className: 'CE_tool CE_btn',
      textContent: 'add new page'
    }),
  };
  let object = {
    opacity: html.rangeSlider({
      min: 0,
      max: 1,
      value: 1,
      step: 0.01
    }),
    dropShadow: html.toggler({
      size: 20
    }),
    offsetX: html.input({
      type: 'number',
      placeholder: 'x',
      value: 0
    }),
    offsetY: html.input({
      type: 'number',
      placeholder: 'y',
      value: 0
    }),
    blur: html.input({
      type: 'number',
      placeholder: 'blur',
      value: 0
    }),
    color: html.span({
      className: 'CE_icon backgroundColor'
    })
  }
  let textOptions = {
    fontFamily: html.create('select', {
      className: 'CE_tool'
    }),
    fontWeight: html.create('select', {
      className: 'CE_tool'
    }),
    fontSize: html.create('label', {
      className: 'CE_inline_input CE_tool',
      children: [
        icon('font-size'),
        html.create('input', {
          type: 'number',
          value: 40
        })
      ]
    }),
    addText: html.button(null, {
      className: 'CE_tool CE_btn',
      textContent: 'add text'
    })
  }
  let textStyle = {
    /**
     * @type {HTMLElement}
     */
    underline: null,
    /**
     * @type {HTMLElement}
     */
    italic: null,
    /**
     * @type {HTMLElement}
     */
    strikethrough: null
  }
  let shapes = {
    circle: icon('circle', 'Add circle'),
    rectangle: icon('rectangle', 'Add rectangle'),
    triangle: icon('triangle', 'Add triangle')
  }
  let imageOptions = {
    openImage: html.create('label', {
      className: 'CE_icon_text',
      children: [
        icon('image', 'Open an image'),
        html.create('input', {
          type: 'file',
          accept: 'image/x-png, image/jpeg',
          style: {
            display: 'none'
          }
        })
      ]
    }),
    loadSVG: icon('image1', 'Load SVG file')
  }

  let cm_shapes = contextMenu(Object.values(shapes));
  let cm_imageOptions = contextMenu(Object.values(imageOptions));

  let defaultFontFamilies = ['Arial', 'Helvetica', 'Courier New', 'Courier', 'Times New Roman', 'Times'];
  let defaultFontWeight = ['lighter', 'normal', 'bold', 'bolder', 100, 200, 300, 400, 500, 600, 700, 800, 900];

  init();

  function init() {
    arrayToOptions(defaultFontFamilies, textOptions.fontFamily);
    arrayToOptions(defaultFontWeight, textOptions.fontWeight);
    iconsFromObject(mainTools, textStyle);

    mainTools.selection.classList.add('active');

    let textStyleContainer = html.div({
      className: 'CE_tool CE_row',
      children: Object.values(textStyle)
    });

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
      let dimension = html.div({
        className: 'CE_inline_input CE_tool',
        children: [
          html.span({
            textContent: 'w: '
          }),
          page.pageWidth,
          html.span({
            textContent: 'h: '
          }),
          page.pageHeight
        ]
      });
      newContainer.bind(this)('Page', [page.pageName, dimension, page.addPage], 'CE_col');
    }

    function textonclick() {
      let textOptionsAr = Object.values(textOptions);
      textOptionsAr.push(textStyleContainer);
      newContainer.bind(this)('Text', textOptionsAr, 'CE_col');
    }

    function objectonclick() {
      let objectSettingsAr = [];

      objectSettingsAr.push(html.div({
        className: 'CE_tool',
        children: [
          html.span({
            textContent: 'Opacity'
          }),
          object.opacity
        ]
      }));

      objectSettingsAr.push(html.div({
        className: 'CE_tool CE_dropshadow-tool',
        children: [
          html.span({
            textContent: 'Drop shadow'
          }),
          html.div({
            className: 'CE_dropshadow-controls',
            children: [
              object.dropShadow
            ]
          }),
          html.div({
            className: 'CE_dropshadow-controls',
            children: [
              html.create('small', {
                textContent: 'Set Color'
              }),
              object.color
            ]
          }),
          html.div({
            className: 'CE_dropshadow-controls',
            children: [
              html.create('small', {
                textContent: 'Set axis'
              }),
              html.div({
                children: [
                  object.offsetX,
                  object.offsetY
                ]
              })
            ]
          }),
          html.div({
            className: 'CE_dropshadow-controls',
            children: [
              html.create('small', {
                textContent: 'Set blur'
              }),
              html.div({
                children: [
                  object.blur
                ]
              })
            ]
          }),
        ]
      }));

      newContainer.bind(this)('Object', objectSettingsAr, 'CE_col');

      object.opacity.setValue(object.opacity.value);
    }

    function updateActiveTool() {
      /**
       * @type {HTMLElement}
       */
      let el = this;

      let activeel = html.get('.CE_icon.active');
      if (activeel) activeel.classList.remove('active');
      el.classList.add('active');
    }
  }


  function newContainer(title, tools, className) {
    if (this && this.style) this.style.pointerEvents = 'none';
    let container = freeContainer({
      parentElement: containerWrapper,
      drop: wrapper
    });
    if (className) {
      container.DOMElements.body.classList.add(className);
    }
    container.setTitle(title)
    container.setVisiblity(true);
    container.addItems(tools);
    container.closeBtn.onclick = () => {
      this.style.pointerEvents = '';
      container.del();
    }
  }

  /**
   * 
   * @param {String[]} options 
   * @param {HTMLElement} selectElement 
   */
  function arrayToOptions(options, selectElement) {
    for (let option of options) {
      let optionElement = html.create('option', {
        textContent: option,
        value: option
      });

      selectElement.appendChild(optionElement);
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
      return html.create('span', {
        textContent: text,
        children: [
          icon(iconname)
        ]
      })
    } else if (text) {
      let el = html.create('span', {
        children: [
          icon(iconname)
        ]
      });
      el.appendChild(document.createTextNode(text));
      return el;
    } else {
      return html.create('span', {
        className: 'CE_tool CE_icon ' + iconname
      });
    }
  }

  /**
   * @param {Object} array
   * @param {Object} [args]
   */
  function iconsFromObject(array) {
    form(array);
    if (arguments.length > 1) {
      for (let i = 1; i < arguments.length; ++i) {
        form(arguments[i]);
      }
    }

    function form(ar) {
      for (let key in ar) {
        ar[key] = icon(key)
      }
    }
  }

  return {
    tools: {
      ...shapes,
      ...imageOptions,
      addPage: page.addPage,
      addText: textOptions.addText,
      backgroundColor: mainTools.backgroundColor,
      strokeColor: mainTools.strokeColor,
      openImage: imageOptions.openImage.querySelector('input')
    },
    textSettings: {
      ...textOptions,
      ...textStyle,
      fontSize: textOptions.fontSize.querySelector('input')
    },
    pageSettings: {
      ...page
    },
    objectSettings: {
      ...object
    }
  }
}