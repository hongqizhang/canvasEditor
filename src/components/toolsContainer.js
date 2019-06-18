import { freeContainer } from "./freeContainer";
import { contextMenu } from "./contextmenu";

import tag from "../../node_modules/html-element-js/src/tag";
import comboBox from "../../node_modules/html-element-js/src/comboBox";
import rangeSlider from "../../node_modules/html-element-js/src/rangeSlider";
import toggler from "../../node_modules/html-element-js/src/toggler";

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
export function toolsContainer() {
  /**
   * @type {HTMLDivElement}
   */
  let root = document.querySelector("#CE_wrapper");
  let wrapper = tag("div", {
    id: "CE_tools-wrapper"
  });
  let containerWrapper = tag("div", {
    id: "CE_container-wrapper"
  });
  let container = tag("div", {
    id: "CE_tools-container"
  });
  let mainTools = {
    text: null,
    shapes: null,
    image: null,
    page: null,
    object: null,
    selection: null,
    hand: null,
    backgroundColor: null
  };
  let page = {
    pageName: tag("input", {
      className: "CE_tool",
      type: "text",
      value: "page-1",
      placeholder: "page name"
    }),
    pageHeight: tag("input", {
      className: "CE_tool",
      type: "number",
      value: "500",
      placeholder: "h"
    }),
    pageWidth: tag("input", {
      className: "CE_tool",
      type: "number",
      value: "500",
      placeholder: "w"
    }),
    addPage: tag("button", {
      className: "CE_tool CE_btn",
      textContent: "add new page"
    })
  };
  let object = {
    opacity: rangeSlider({
      min: 0,
      max: 1,
      value: 1,
      step: 0.01
    }),
    dropShadow: toggler({
      size: 20
    }),
    offsetX: tag("input", {
      type: "number",
      placeholder: "x",
      value: 2
    }),
    offsetY: tag("input", {
      type: "number",
      placeholder: "y",
      value: 2
    }),
    blur: tag("input", {
      type: "number",
      placeholder: "blur",
      value: 2
    }),
    color: tag("span", {
      className: "CE_icon backgroundColor"
    }),
    strokeToggle: toggler({
      size: 20
    }),
    strokeWidth: tag("input", {
      min: 1,
      type: "number",
      placeholder: "stroke",
      value: 1
    }),
    strokeColor: tag("span", {
      className: "CE_icon CE_tool strokeColor"
    })
  };
  let textOptions = {
    fontFamily: comboBox({ spead: 2, height: 30, maxheight: 300 }),
    fontWeight: comboBox({ spead: 2, height: 30, maxheight: 300 }),
    fontSize: tag("input", {
      type: "number",
      value: 40
    }),
    addText: tag("button", {
      className: "CE_tool CE_btn",
      textContent: "add text"
    })
  };
  let textStyle = {
    underline: null,
    italic: null,
    strikethrough: null
  };
  let shapes = {
    circle: icon("circle", "Add circle"),
    rectangle: icon("rectangle", "Add rectangle"),
    triangle: icon("triangle", "Add triangle")
  };
  let imageOptions = {
    openImage: tag("label", {
      className: "CE_icon_text",
      children: [
        icon("image", "Open an image"),
        tag("input", {
          type: "file",
          accept: "image/x-png, image/jpeg",
          style: {
            display: "none"
          }
        })
      ]
    }),
    loadSVG: tag("label", {
      className: "CE_icon_text",
      children: [
        icon("image", "Open SVG file"),
        tag("input", {
          type: "file",
          accept: ".svg",
          style: {
            display: "none"
          }
        })
      ]
    })
  };

  let cm_shapes = contextMenu(Object.values(shapes));
  let cm_imageOptions = contextMenu(Object.values(imageOptions));

  let defaultFontFamilies = [];
  let defaultFontWeight = [
    "lighter",
    "normal",
    "bold",
    "bolder",
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
  ];

  init();

  function init() {
    arrayToOptions(defaultFontFamilies, textOptions.fontFamily);
    arrayToOptions(defaultFontWeight, textOptions.fontWeight);
    iconsFromObject(mainTools, textStyle);

    mainTools.selection.classList.add("active");

    mainTools.page.addEventListener("click", pageonclick);
    mainTools.text.addEventListener("click", textonclick);
    mainTools.shapes.addEventListener("click", cm_shapes.show);
    mainTools.image.addEventListener("click", cm_imageOptions.show);
    mainTools.object.addEventListener("click", objectonclick);

    mainTools.hand.addEventListener("click", updateActiveTool);
    mainTools.selection.addEventListener("click", updateActiveTool);

    wrapper.append(container);
    wrapper.append(containerWrapper);
    container.append(...Object.values(mainTools));
    root.appendChild(wrapper);

    function pageonclick() {
      let pageAr = [];

      pageAr.push(
        tag("div", {
          className: "CE_tool CE_controlers",
          children: [
            tag("span", {
              textContent: "Page name"
            }),
            tag("div", {
              className: "CE_controlers-tools",
              children: [page.pageName]
            })
          ]
        })
      );

      pageAr.push(
        tag("div", {
          className: "CE_tool CE_controlers",
          children: [
            tag("span", {
              textContent: "Dimension"
            }),
            tag("div", {
              className: "CE_controlers-tools",
              children: [
                tag("div", {
                  children: [page.pageHeight, page.pageWidth]
                })
              ]
            })
          ]
        })
      );

      pageAr.push(
        tag("div", {
          className: "CE_tool CE_controlers",
          children: [
            tag("div", {
              className: "CE_controlers-tools",
              children: [page.addPage]
            })
          ]
        })
      );

      newContainer.bind(this)("Page", pageAr, "CE_col");
    }

    function textonclick() {
      let textOptionsAr = [];

      textOptionsAr.push(
        tag("div", {
          className: "CE_tool CE_controlers",
          children: [
            tag("span", {
              textContent: "Font Family"
            }),
            tag("div", {
              className: "CE_controlers-tools",
              children: [textOptions.fontFamily.select]
            })
          ]
        })
      );

      textOptionsAr.push(
        tag("div", {
          className: "CE_tool CE_controlers",
          children: [
            tag("span", {
              textContent: "Font Weight"
            }),
            tag("div", {
              className: "CE_controlers-tools",
              children: [textOptions.fontWeight.select]
            })
          ]
        })
      );

      textOptionsAr.push(
        tag("div", {
          className: "CE_tool CE_controlers",
          children: [
            tag("div", {
              className: "CE_controlers-tools",
              children: [
                tag("div", {
                  children: [icon("font-size"), textOptions.fontSize]
                })
              ]
            })
          ]
        })
      );

      textOptionsAr.push(
        tag("div", {
          className: "CE_tool CE_controlers",
          children: [
            tag("div", {
              className: "CE_controlers-tools",
              children: [
                tag("div", {
                  children: Object.values(textStyle)
                })
              ]
            })
          ]
        })
      );

      textOptionsAr.push(
        tag("div", {
          className: "CE_tool CE_controlers",
          children: [
            tag("div", {
              className: "CE_controlers-tools",
              children: [textOptions.addText]
            })
          ]
        })
      );
      newContainer.bind(this)("Text", textOptionsAr);
    }

    function objectonclick() {
      let objectSettingsAr = [];

      objectSettingsAr.push(
        tag("div", {
          className: "CE_tool",
          children: [
            tag("span", {
              textContent: "Opacity"
            }),
            object.opacity
          ]
        })
      );

      objectSettingsAr.push(
        tag("div", {
          className: "CE_tool CE_controlers",
          children: [
            tag("span", {
              textContent: "Drop shadow"
            }),
            tag("div", {
              className: "CE_controlers-tools",
              children: [object.dropShadow]
            }),
            tag("div", {
              className: "CE_controlers-tools",
              children: [
                tag("small", {
                  textContent: "Set color"
                }),
                object.color
              ]
            }),
            tag("div", {
              className: "CE_controlers-tools",
              children: [
                tag("small", {
                  textContent: "Set axis"
                }),
                tag("div", {
                  children: [object.offsetX, object.offsetY]
                })
              ]
            }),
            tag("div", {
              className: "CE_controlers-tools",
              children: [
                tag("small", {
                  textContent: "Set blur"
                }),
                tag("div", {
                  children: [object.blur]
                })
              ]
            })
          ]
        })
      );

      objectSettingsAr.push(
        tag("div", {
          className: "CE_tool CE_controlers",
          children: [
            tag("span", {
              textContent: "Stroke"
            }),
            tag("div", {
              className: "CE_controlers-tools",
              children: [object.strokeToggle]
            }),
            tag("div", {
              className: "CE_controlers-tools",
              children: [
                tag("small", {
                  textContent: "Stroke width"
                }),
                tag("div", {
                  children: [object.strokeWidth]
                })
              ]
            }),
            tag("div", {
              className: "CE_controlers-tools",
              children: [
                tag("small", {
                  textContent: "Set stroke color"
                }),
                object.strokeColor
              ]
            })
          ]
        })
      );

      newContainer.bind(this)("Object", objectSettingsAr, "CE_col");

      object.opacity.setvalue(object.opacity.value);
    }

    function updateActiveTool() {
      /**
       * @type {HTMLElement}
       */
      let el = this;

      let activeel = document.querySelector(".CE_icon.active");
      if (activeel) activeel.classList.remove("active");
      el.classList.add("active");
    }
  }

  function newContainer(title, tools, className) {
    if (this && this.style) this.style.pointerEvents = "none";
    let container = freeContainer({
      parentElement: containerWrapper,
      drop: wrapper
    });
    if (className) {
      container.DOMElements.body.classList.add(className);
    }
    container.setTitle(title);
    container.setVisiblity(true);
    container.addItems(tools);
    container.closeBtn.onclick = () => {
      this.style.pointerEvents = "";
      container.del();
    };
  }

  /**
   *
   * @param {String[]} options
   */
  function arrayToOptions(options, selectElement) {
    for (let option of options) {
      if (typeof option === "number") option += "";
      selectElement.addOption(option, option);
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
      return tag("span", {
        textContent: text,
        children: [icon(iconname)]
      });
    } else if (text) {
      let el = tag("span", {
        children: [icon(iconname)]
      });
      el.appendChild(document.createTextNode(text));
      return el;
    } else {
      return tag("span", {
        className: "CE_tool CE_icon " + iconname
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
      for (let i = 1; i < arguments.length; ++i) {
        form(arguments[i]);
      }
    }

    function form(ar) {
      for (let key in ar) {
        ar[key] = icon(key);
      }
    }
  }

  return {
    tools: {
      ...shapes,
      ...imageOptions,
      grab: mainTools.hand,
      selection: mainTools.selection,
      addPage: page.addPage,
      addText: textOptions.addText,
      backgroundColor: mainTools.backgroundColor,
      openImage: imageOptions.openImage.querySelector("input"),
      loadSVG: imageOptions.loadSVG.querySelector("input")
    },
    textSettings: {
      ...textOptions,
      ...textStyle,
      fontSize: textOptions.fontSize
    },
    pageSettings: {
      ...page
    },
    objectSettings: {
      ...object
    }
  };
}
