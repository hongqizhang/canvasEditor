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
 * @typedef {Object} toolsContainer
 * @property {Object} tools
 * @property {HTMLElement} tools.addPage
 * @property {HTMLElement} tools.circle
 * @property {HTMLElement} tools.rectangle
 * @property {HTMLElement} tools.triangle
 * @property {HTMLElement} tools.addText
 * @property {Object} pageSettings
 * @property {HTMLInputElement} pageSettings.pageName
 * @property {HTMLInputElement} pageSettings.pageHeight
 * @property {HTMLInputElement} pageSettings.pageWidth
 * @property {Object} commonSettings
 * @property {HTMLElement} commonSettings.bgColor
 * @property {HTMLElement} commonSettings.strokeColor
 * @property {HTMLElement} commonSettings.opacity
 * @property {Object} textSettings
 * @property {HTMLSelectElement} textSettings.fontFamily
 * @property {basicInput} textSettings.fontSize
 * @property {HTMLSelectElement} textSettings.fontWeight
 * @property {Object} textStyle
 * @property {HTMLElement} textStyle.italic
 * @property {HTMLElement} textStyle.underLine
 * @property {HTMLElement} textStyle.strikethrough
 */

export function toolsContainer() {
  let toolsGroup = {
    text: html.create('span', {
      tabIndex: 0,
      className: 'CE_tool CE_icon text'
    }),
    shapes: html.create('span', {
      tabIndex: 0,
      className: 'CE_tool CE_icon shapes'
    }),
    image: html.create('span', {
      tabIndex: 0,
      className: 'CE_tool CE_icon image'
    }),
    grab: html.create('span', {
      tabIndex: 0,
      className: 'CE_tool CE_icon hand'
    }),
    addPage: html.create('span', {
      className: 'CE_tool CE_icon layer-add'
    })
  };
  let pageSettings = {
    pageName: basicInput({
      label: 'Page name',
      inputProps: {
        placeholder: 'in px',
        value: 'page 1'
      }
    }),
    pageHeight: basicInput({
      label: 'Page height',
      inputProps: {
        placeholder: 'in px',
        type: 'number',
        min: 100,
        value: 500
      }
    }),
    pageWidth: basicInput({
      label: 'Page width',
      inputProps: {
        placeholder: 'in px',
        type: 'number',
        min: 100,
        value: 500
      }
    }),
  };
  let commonSettings = {
    bgColor: html.create('span', {
      className: 'CE_tool CE_icon CE_bg-color'
    }),
    strokeColor: html.create('span', {
      className: 'CE_tool CE_icon CE_stroke-color'
    }),
    opacity: slider({
      label: 'opacity',
      min: 0,
      max: 1,
      step: 0.1,
      value: 1
    })
  }
  let textSettings = {
    fontFamily: html.create('select', {
      className: 'CE_tool'
    }),
    fontWeight: html.create('select', {
      className: 'CE_tool'
    }),
    fontSize: basicInput({
      label: 'Font size',
      inputProps: {
        type: 'number',
        min: '0',
        placeholder: 'font size',
        value: 40
      }
    }),
    addText: html.create('button', {
      className: 'CE_tool CE_btn',
      textContent: 'add text'
    })
  }
  let textStyle = {
    underLine: html.create('span', {
      className: 'CE_tool CE_icon underline'
    }),
    italic: html.create('span', {
      className: 'CE_tool CE_icon italic'
    }),
    strikethrough: html.create('span', {
      className: 'CE_tool CE_icon strikethrough'
    })
  }
  let shapes = {
    circle: html.create('div', {
      children: [
        html.create('span', {
          className: 'CE_icon circle'
        }),
        html.create('span', {
          textContent: 'Add circle'
        })
      ]
    }),
    rectangle: html.create('div', {
      children: [
        html.create('span', {
          className: 'CE_icon rectangle'
        }),
        html.create('span', {
          textContent: 'Add rectagle'
        })
      ]
    }),
    triangle: html.create('div', {
      children: [
        html.create('span', {
          className: 'CE_icon triangle'
        }),
        html.create('span', {
          textContent: 'Add triangle'
        })
      ]
    })
  }
  let imageOptions = {
    openImage: (function image() {
      let label = html.create('label', {
        textContent: 'Add image'
      });
      let fileInput = html.create('input', {
        type: 'file',
        style: {
          display: 'none'
        }
      });
      label.appendChild(fileInput);
      return label;
    })(),
    loadSVG: html.create('span', {
      textContent: 'Load SVG file'
    })
  }
  let container = freeContainer({
    disableCloseBtn: true,
    title: 'Tools'
  });
  let cm_shapes = contextMenu(objToArray(shapes));
  let cm_imageOptions = contextMenu(objToArray(imageOptions));

  let defaultFontFamilies = ['Arial', 'Helvetica', 'Courier New', 'Courier', 'Times New Roman', 'Times'];
  let defaultFontWeight = ['lighter', 'normal', 'bold', 'bolder', 100, 200, 300, 400, 500, 600, 700, 800, 900];

  let container_1 = html.create('div', {
    className: 'CE_row'
  });
  let container_2 = html.create('div', {
    className: 'CE_col'
  });
  let container_3 = html.create('div', {
    className: 'CE_row'
  });
  let container_4 = html.create('div', {
    className: 'CE_col'
  });
  let container_5 = html.create('div', {
    className: 'CE_row'
  });

  let tools = {
    ...shapes,
    ...imageOptions,
    addPage: toolsGroup.addPage,
    addText: textSettings.addText
  };

  for (let font of defaultFontFamilies) {
    let option = html.create('option', {
      textContent: font,
      value: font
    });

    textSettings.fontFamily.appendChild(option);
  }

  for (let weight of defaultFontWeight) {
    let option = html.create('option', {
      textContent: weight,
      value: weight
    });

    textSettings.fontWeight.appendChild(option);
  }

  container.setVisiblity(true);
  textSettings.addText.bubble();

  toolsGroup.shapes.addEventListener('click', cm_shapes.show)
  toolsGroup.image.addEventListener('click', cm_imageOptions.show)

  toolsGroup.text.addEventListener('click', function expandContainer() {
    newContainer.bind(this)('Text', [container_5, container_4]);
  })

  let tmp_toolsGroup_1 = objToArray(toolsGroup);
  for (let el of tmp_toolsGroup_1) {
    container_1.appendChild(el);
  }
  let tmp_pageSettings = objToArray(pageSettings);
  for (let el of tmp_pageSettings) {
    container_2.appendChild(el);
  }
  let tmp_commonSettings = objToArray(commonSettings);
  for (let el of tmp_commonSettings) {
    container_3.appendChild(el);
  }
  let tmp_textSettings = objToArray(textSettings);
  for (let el of tmp_textSettings) {
    container_4.appendChild(el);
  }
  let tmp_textStyle = objToArray(textStyle);
  for (let el of tmp_textStyle) {
    container_5.appendChild(el);
  }

  container.addItems([container_1, container_2, container_3]);


  function objToArray(obj) {
    let tmpArray = [];

    for (let key in obj) {
      let el = obj[key];
      el = el.container || el;
      if (!el.classList.contains('CE_tool')) {
        el.classList.add('CE_tool');
      }
      tmpArray.push(el);
    }

    return tmpArray;
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

  return {
    tools,
    pageSettings,
    commonSettings,
    textSettings,
    textStyle
  }
}