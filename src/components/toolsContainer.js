import html from '../html';
import {
  freeContainer
} from './freeContainer';
import {
  basicInput,
  slider
} from './inputs';
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
 * @typedef {Object} tools
 * @property {HTMLElement & textOptions} text
 * @property {HTMLElement} shapes
 * @property {HTMLElement} image
 * @property {HTMLElement} page
 * @property {HTMLElement} object
 */

/**
 * @typedef {Object} textStyle
 * @property {HTMLElement} underline
 * @property {HTMLElement} italic
 * @property {HTMLElement} strikethrough
 */

/**
 * @typedef {Object} page
 * @property {HTMLElement} pageName
 * @property {HTMLElement} pageWidth
 * @property {HTMLElement} pageHeight
 * @property {HTMLElement} addPage
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
  let container = html.create('div', {
    id: 'CE_tools-container'
  });
  /**
   * @type {tools}
   */
  let mainTools = {
    text: null,
    shapes: null,
    image: null,
    page: null,
    object: null,
    backgroundColor: null,
    strokeColor: null
  };
  /**
   * @type {page}
   */
  let page = {
    pageName: html.input({
      type: 'text',
      value: 'page-1',
      placeholder: 'page name'
    }),
    pageHeight: html.input({
      type: 'number',
      value: '500',
      placeholder: 'h'
    }),
    pageWidth: html.input({
      type: 'number',
      value: '500',
      placeholder: 'w'
    }),
    addPage: html.button(null, {
      className: 'CE_tool CE_btn',
      textContent: 'add page'
    }),
  };
  let object = {
    opacity: slider({
      label: 'opacity',
      min: 0,
      max: 1,
      step: 0.1,
      value: 1
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
      children: [
        icon('font-size'),
        html.create('input', {
          type: 'number',
          value: 40
        })
      ]
    }),
    addText: html.create('button', {
      className: 'CE_tool CE_btn',
      textContent: 'add text'
    })
  }
  /**
   * @type {textStyle}
   */
  let textStyle = {
    underline: null,
    italic: null,
    strikethrough: null
  }
  let shapes = {
    circle: icon('circle', 'Add circle', true),
    rectangle: icon('rectangle', 'Add rectangle', true),
    triangle: icon('triangle', 'Add triangle', true)
  }
  let imageOptions = {
    openImage: html.create('label', {
      children: [
        icon('image', 'Open an image', true),
        html.create('input', {
          type: 'file',
          accept: 'image/x-png, image/jpeg',
          style: {
            display: 'none'
          }
        })
      ]
    }),
    loadSVG: html.create('span', {
      textContent: 'Load SVG file'
    })
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

    let textStyleContainer = html.div({
      className: 'CE_tool CE_row',
      children: Object.values(textStyle)
    });
    let textOptionsAr = Object.values(textOptions);
    textOptionsAr.push(textStyleContainer)
    let pageOptionsContainer = newContainer('Page', Object.values(page));
    let textOptionsContainer = newContainer('Text', textOptionsAr);

    mainTools.page.addEventListener('click', );

    wrapper.append(container);
    container.append(Object.values(mainTools));
    root.appendChild(wrapper);

    /**
     * 
     * @param {freeContainer} container 
     */
    function toggleFreeContainer(container){
      
    }
  }


  function newContainer(title, tools) {
    this.style.pointerEvents = 'none';
    let container = freeContainer();
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

  return {}
}