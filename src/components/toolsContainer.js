import * as html from 'html-element-js';
import {
  freeContainer
} from './freeContainer';
import {
  contextMenu
} from './contextmenu';

/**
 * @typedef {Object} textOptions
 * @property {HTMLElement} addText
 * @property {HTMLElement} fontSize
 * @property {HTMLElement} fontStyle
 * @property {HTMLElement} fontFamily
 * @property {HTMLElement} fontWeight
 */

/**
 * @typedef {Object} mainTools
 * @property {HTMLElement & textOptions} text
 * @property {HTMLElement} shapes
 * @property {HTMLElement} image
 * @property {HTMLElement} page
 * @property {HTMLElement} object
 * @property {HTMLElement} selection
 * @property {HTMLElement} hand
 * @property {HTMLElement} backgroundColor
 * @property {HTMLElement} strokeColor
 */

/**
 * @typedef {Object} textStyle
 * @property {HTMLElement} underline
 * @property {HTMLElement} italic
 * @property {HTMLElement} strikethrough
 */

/**
 * @typedef {Object} page
 * @property {HTMLElement} page.pageName
 * @property {HTMLElement} page.pageWidth
 * @property {HTMLElement} page.pageHeight
 * @property {HTMLElement} page.addPage
 */

/**
 * @typedef {Object} toolsContainer
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
    /**
     * @type {htmlSlider}
     */
    opacity: null
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
    let textOptionsAr = Object.values(textOptions);
    textOptionsAr.push(textStyleContainer)

    mainTools.page.addEventListener('click', pageonclick);
    mainTools.text.addEventListener('click', textonclick);
    mainTools.shapes.addEventListener('click', cm_shapes.show);
    mainTools.image.addEventListener('click', cm_imageOptions.show);

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
      newContainer.bind(this)('Text', textOptionsAr, 'CE_col');
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
      strokeColor: mainTools.strokeColor
    },
    textSettings: {
      ...textOptions,
      ...textStyle
    },
    pageSettings: {
      ...page
    },
    objectSettings: {
      ...object
    }
  }
}