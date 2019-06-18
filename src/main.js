import "./fabric.min";
import { freeContainer } from "./components/freeContainer";
import { toolsContainer } from "./components/toolsContainer";

import "./css/main/main.css";
import "./css/freeContainer/style.css";
import "./css/inputs/style.css";
import "./css/contextmenu/style.css";
import "./css/res/style.css";
import "../node_modules/html-element-js/src/css/main.css";

import { contextMenu } from "./components/contextmenu";
import b64ToBlob from "blueimp-canvas-to-blob";
import tag from "../node_modules/html-element-js/src/tag";
import rangeSlider from "../node_modules/html-element-js/src/rangeSlider";
import * as picker from "a-color-picker";
/**
 *
 * @param {Element} parentel
 * @param {Object} [opts]
 */
export function CanvasEditor(parentel, opts = {}) {
  if (!parentel) return console.error("Parent element is undefined!");

  let fontLoader = tag("span", {
    textContent: "loading font",
    id: "CE_font-loader"
  });
  let fontloaderTimeout;
  let requireFonts = [];
  let clickCatchMask = tag("div", {
    className: "CE_click-catch-mask"
  });
  let mainWrapper = tag("div", {
    id: "CE_wrapper"
  });
  let canvasContainer = tag("div", {
    id: "CE_canvasContainer"
  });
  let objectFillColor = "#000";
  let strokeColor = "#000";
  let colorPickerContainer = null;
  let colorPicker = null;
  let canvasContextMenuOptions = {
    background: tag("span", {
      textContent: "Background color"
    }),
    delete: tag("span", {
      textContent: "Delete"
    }),
    paste: tag("span", {
      textContent: "Paste"
    }),
    unlockAll: tag("span", {
      textContent: "Unlock All"
    })
  };
  let objectContextMenuOptions = {
    arrange: tag("span", {
      textContent: "Arrange",
      children: [
        tag("i", {
          className: "CE_icon select-down",
          style: {
            transform: "rotate(-90deg)"
          }
        })
      ],
      attr: {
        "data-expandable": "true"
      }
    }),
    align: tag("span", {
      textContent: "Align",
      children: [
        tag("i", {
          className: "CE_icon select-down",
          style: {
            transform: "rotate(-90deg)"
          }
        })
      ],
      attr: {
        "data-expandable": "true"
      }
    }),
    cut: tag("span", {
      textContent: "Cut"
    }),
    copy: tag("span", {
      textContent: "Copy"
    }),
    deleteBtn: tag("span", {
      textContent: "Delete"
    }),
    group: tag("span", {
      textContent: "Group"
    }),
    lock: tag("span", {
      textContent: "Lock"
    })
  };
  let arrangeOptions = {
    sendBackwards: tag("span", {
      textContent: "Send backward"
    }),
    bringForward: tag("span", {
      textContent: "Bring forward"
    }),
    bringToFront: tag("span", {
      textContent: "Bring front"
    }),
    sendToBack: tag("span", {
      textContent: "Send back"
    })
  };
  let alignOptions = {
    center: tag("span", {
      textContent: "Center"
    }),
    hCenter: tag("span", {
      textContent: "Horizontally center"
    }),
    vCenter: tag("span", {
      textContent: "Vertically center"
    })
  };
  let canvasContextMenu = contextMenu(Object.values(canvasContextMenuOptions));
  let objectContextMenu = contextMenu(Object.values(objectContextMenuOptions));
  let arrangeContextMenu = contextMenu(Object.values(arrangeOptions));
  let alignContextMenu = contextMenu(Object.values(alignOptions));
  let copiedObject;
  let mouseEvent;

  let pages = {};
  pages.page = {};
  pages.length = 0;
  let activeCanvas;

  /**
   * @type {toolsContainer}
   */
  let alltools;

  /**
   * @type {fabric.ActiveSelection[]}
   */
  let lockedObjects = [];
  let scale = 1;
  let translate = {};
  let zoom = rangeSlider({
    min: 0.001,
    max: 2,
    value: 1,
    step: 0.001
  });

  init();

  function init() {
    fabric.Object.prototype.set({
      transparentCorners: false,
      cornerColor: "#88f",
      borderColor: "#88f",
      cornerSize: 6,
      strokeWidth: 0
    });
    fabric.Canvas.prototype.preserveObjectStacking = true;
    fabric.Object.prototype.onSelect = objectOnSelect;

    mainWrapper.appendChild(
      tag("div", {
        id: "CE_zoom",
        children: [
          tag("span", {
            className: "CE_icon zoom-out",
            onmousedown: function() {
              scale = parseFloat((scale + "").substr(0, 3));
              if (scale > 0.5) scale -= 0.1;
              zoom.setvalue(scale);
            }
          }),
          zoom,
          tag("span", {
            className: "CE_icon zoom-in",
            onmousedown: function() {
              scale = parseFloat((scale + "").substr(0, 3));
              if (scale < 2) scale += 0.1;
              zoom.setvalue(scale);
            }
          })
        ]
      })
    );
    mainWrapper.appendChild(clickCatchMask);
    mainWrapper.appendChild(canvasContainer);
    parentel.appendChild(mainWrapper);

    zoom.onchange = function(value) {
      updateScaling(value);
    };

    clickCatchMask.addEventListener("click", deselectObjects);

    /**
     * @type {tools}
     */
    alltools = toolsContainer();

    addPage();
    initTools();
    initContextMenu();
    fixPagesContainerPosition();
    window.addEventListener("resize", fixPagesContainerPosition);
    let containerWrapper = document.querySelector("#CE_container-wrapper");
    colorPickerContainer = freeContainer({
      parentElement: containerWrapper,
      title: "Color picker",
      disableCloseBtn: true,
      enableMask: true,
      center: true
    });

    colorPicker = picker.createPicker(colorPickerContainer.DOMElements.body, {
      showHSL: false,
      palette: "PALETTE_MATERIAL_CHROME",
      showAlpha: true,
      showHEX: true,
      color: "rgb(205, 220, 57)",
      paletteEditable: true
    });

    if ("fonts" in sessionStorage && alltools) {
      let fonts = sessionStorage.getItem("fonts");
      try {
        fonts = JSON.parse(fonts);

        if (Array.isArray(fonts)) {
          let fontFamily = alltools.textSettings.fontFamily;

          for (let font of fonts) {
            fontFamily.appendChild(
              tag("option", {
                value: font,
                textContent: font
              })
            );
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  function addText(value, props) {
    value = value || "hello";
    props = props || {
      editable: true,
      fontSize: 40,
      top: 100,
      left: 100,
      fill: objectFillColor,
      stroke: strokeColor
    };

    let text = new fabric.Textbox(value, props);
    activeCanvas.add(text);
    activeCanvas.centerObject(text);
    activeCanvas.setActiveObject(text);
  }

  function addImage(img, props) {
    props = props || {
      left: 0,
      top: 0
    };
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
    activeCanvas.setActiveObject(image);
  }

  function addRect(props) {
    props = props || {
      fill: objectFillColor,
      width: 50,
      height: 50,
      stroke: strokeColor
    };
    let rect = new fabric.Rect(props);
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

    let circle = new fabric.Circle(props);
    activeCanvas.add(circle);
    activeCanvas.centerObject(circle);
    activeCanvas.setActiveObject(circle);
  }

  function addTriangle(props) {
    props = props || {
      fill: objectFillColor,
      height: 50,
      width: 50,
      strokeColor
    };

    let triangle = new fabric.Triangle(props);
    activeCanvas.add(triangle);
    activeCanvas.centerObject(triangle);
    activeCanvas.setActiveObject(triangle);
  }

  function addPage() {
    let page = tag("canvas");
    let canvas = new fabric.Canvas();

    canvasContainer.appendChild(page);
    canvas.initialize(page);
    canvas.setBackgroundColor("#fff");

    let height = alltools.pageSettings.pageHeight.value;
    let width = alltools.pageSettings.pageWidth.value;
    canvas.setHeight(height);
    canvas.setWidth(width);

    let i = canvasContainer.childElementCount;
    let pageName = "page-" + i;
    ++pages.length;
    canvas.page = {
      DOMElement: page,
      name: pageName
    };
    /**
     * @type {fabric.Canvas}
     */
    pages.page[pageName] = canvas;

    canvas.on("mouse:down", updateActiveCanvas);

    let element = canvas.getElement().parentElement;
    element.setAttribute("data-name", pageName);
    element.addEventListener("contextmenu", canvasContextMenuTrigger);

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
      canvasContextMenuOptions.delete.classList.add("CE_disabled");
    } else {
      canvasContextMenuOptions.delete.classList.remove("CE_disabled");
    }

    deselectObjects();
    updateActiveContainer(canvas);
    activeCanvas = canvas;

    let height = activeCanvas.getHeight();
    let width = activeCanvas.getWidth();
    let pageName = activeCanvas.page.name;

    let pageSettings = alltools.pageSettings;

    pageSettings.pageHeight.value = height;
    pageSettings.pageWidth.value = width;
    pageSettings.pageName.value = pageName;
  }

  function deselectObjects() {
    if (activeCanvas) {
      activeCanvas.discardActiveObject();
      activeCanvas.renderAll();
    }
  }

  function initTools() {
    let { tools, textSettings, pageSettings, objectSettings } = alltools;

    (function initPrimitiveTools() {
      tools.addPage.addEventListener("click", () => addPage());
      tools.circle.addEventListener("click", () => addCircle());
      tools.rectangle.addEventListener("click", () => addRect());
      tools.triangle.addEventListener("click", () => addTriangle());
      tools.addText.addEventListener("click", () => addText());

      tools.openImage.addEventListener("change", handleImage);
      tools.loadSVG.addEventListener("change", handleSVG);

      tools.backgroundColor.addEventListener("click", e => {
        colorPickerContainer.setTitle("Color picker - fill");
        colorPickerContainer.setVisiblity(true);
        colorPicker.onchange = function(e, color) {
          let activeObject = activeCanvas.getActiveObject();
          objectFillColor = color;
          applyStyle(activeObject, "fill", color);
        };
      });

      tools.grab.addEventListener("click", function() {
        canvasContainer.style.cursor = "grab";
        let children = canvasContainer.children;
        let start = {
          x: 0,
          y: 0
        };
        for (let child of children) {
          child.style.pointerEvents = "none";
        }

        canvasContainer.onmousedown = mousedown;
        canvasContainer.ontouchstart = mousedown;
        /**
         *
         * @param {MouseEvent | TouchEvent} e
         */
        function mousedown(e) {
          canvasContainer.style.cursor = "grabbing";
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
          let x = e.clientX || e.touches[0].clientX;
          let y = e.clientY || e.touches[0].clientY;

          let dsX = x - start.x;
          let dsY = y - start.y;

          start = {
            x,
            y
          };

          let cc = /translate\((.*),(.*)\)/g.exec(
            canvasContainer.style.transform
          );
          let transform = {
            x: parseFloat(cc[1]),
            y: parseFloat(cc[2])
          };

          translate = {
            x: transform.x + dsX,
            y: transform.y + dsY
          };
          canvasContainer.style.transform = `translate(${translate.x}px, ${
            translate.y
          }px) scale(${scale})`;
        }

        function mouseup() {
          canvasContainer.style.cursor = "grab";
          document.onmousemove = null;
          document.onmouseup = null;
          document.ontouchmove = null;
          document.ontouchend = null;
        }
      });

      tools.selection.addEventListener("click", function() {
        canvasContainer.style.cursor = "default";
        let children = canvasContainer.children;
        for (let child of children) {
          child.style.removeProperty("pointer-events");
        }
        canvasContainer.onmousedown = null;
        canvasContainer.ontouchstart = null;
      });
    })();

    (function initTextSettings() {
      textSettings.fontFamily.onchange = function(value) {
        if (fontloaderTimeout) clearTimeout(fontloaderTimeout);
        let fontFamily = value;
        let activeObject = activeCanvas.getActiveObject();
        if ((activeObject && activeObject.type !== "textbox") || !activeObject)
          return;
        if (!fontLoader) {
          mainWrapper.appendChild(fontLoader);
        }
        fontLoader.style.fontWeight = activeObject.fontWeight;
        fontLoader.style.fontFamily = value;
        fontLoader.style.opacity = 1;
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => {
            applyStyle(activeObject, "fontFamily", fontFamily);
            fontLoader.style.opacity = 0 + "";
          });
        } else {
          setTimeout(() => {
            applyStyle(activeObject, "fontFamily", fontFamily);
            fontLoader.style.opacity = 0 + "";
          }, 100);
        }
      };
      textSettings.fontSize.oninput = function() {
        let fontSize = this.value;
        let activeObject = activeCanvas.getActiveObject();
        if (activeObject.type !== "textbox") return;
        applyStyle(activeObject, "fontSize", fontSize);
      };
      textSettings.fontWeight.onchange = function(value) {
        if (fontloaderTimeout) clearTimeout(fontloaderTimeout);
        let fontWeight = value;
        let activeObject = activeCanvas.getActiveObject();
        if ((activeObject && activeObject.type !== "textbox") || !activeObject)
          return;
        fontLoader.style.fontWeight = value;
        fontLoader.style.fontFamily = activeObject.fontFamily;
        fontLoader.style.opacity = 1;
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => {
            applyStyle(activeObject, "fontWeight", fontWeight);
            fontLoader.style.opacity = 0 + "";
          });
        } else {
          setTimeout(() => {
            applyStyle(activeObject, "fontWeight", fontWeight);
            fontLoader.style.opacity = 0 + "";
          }, 100);
        }
      };
      textSettings.underline.addEventListener("click", function() {
        let activeObject = activeCanvas.getActiveObject();
        if (activeObject.type !== "textbox") return;
        if (activeObject.underline) {
          this.classList.remove("active");
          applyStyle(activeObject, "underline", false);
        } else {
          this.classList.add("active");
          applyStyle(activeObject, "underline", true);
        }
      });
      textSettings.italic.addEventListener("click", function() {
        let activeObject = activeCanvas.getActiveObject();
        if (activeObject.type !== "textbox") return;
        if (activeObject.fontStyle === "italic") {
          this.classList.remove("active");
          applyStyle(activeObject, "fontStyle", "normal");
        } else {
          this.classList.add("active");
          applyStyle(activeObject, "fontStyle", "italic");
        }
      });
      textSettings.strikethrough.addEventListener("click", function() {
        let activeObject = activeCanvas.getActiveObject();
        if (activeObject.type !== "textbox") return;
        if (activeObject.linethrough) {
          this.classList.remove("active");
          applyStyle(activeObject, "linethrough", false);
        } else {
          this.classList.add("active");
          applyStyle(activeObject, "linethrough", true);
        }
      });
    })();

    (function initPageSettings() {
      pageSettings.pageHeight.addEventListener("blur", function() {
        let height = parseFloat(this.value);
        activeCanvas.setHeight(height);
        activeCanvas.renderAll();
        fixPagesContainerPosition();
      });
      pageSettings.pageWidth.addEventListener("blur", function() {
        let width = parseFloat(this.value);
        activeCanvas.setWidth(width);
        activeCanvas.renderAll();
        fixPagesContainerPosition();
      });
      pageSettings.pageName.addEventListener("blur", function() {
        activeCanvas.page.name = this.value;
      });
    })();

    (function initObjectSettings() {
      objectSettings.opacity.onchange = function(value) {
        let activeObjects = activeCanvas.getActiveObjects();
        if (activeObjects.length === 0) return;
        else {
          for (let object of activeObjects) {
            object.set("opacity", value);
          }
        }
        activeCanvas.renderAll();
      };

      objectSettings.dropShadow.onchange = function() {
        let activeObjects = activeCanvas.getActiveObjects();

        if (activeObjects.length === 0) return;

        for (let object of activeObjects) {
          if (this.value) {
            object.setShadow({
              color: "#000",
              blur: objectSettings.blur.value,
              offsetX: objectSettings.offsetX.value,
              offsetY: objectSettings.offsetY.value
            });
          } else {
            object.setShadow(null);
          }
        }

        activeCanvas.renderAll();
      };

      objectSettings.offsetX.oninput = function() {
        let activeObjects = activeCanvas.getActiveObjects();

        if (activeObjects.length === 0) return;

        for (let object of activeObjects) {
          object.shadow.offsetX = this.value;
        }

        activeCanvas.renderAll();
      };
      objectSettings.offsetY.oninput = function() {
        let activeObjects = activeCanvas.getActiveObjects();

        if (activeObjects.length === 0) return;

        for (let object of activeObjects) {
          if (!object.shadow) return;
          object.shadow.offsetY = this.value;
        }

        activeCanvas.renderAll();
      };

      objectSettings.blur.oninput = function() {
        let activeObjects = activeCanvas.getActiveObjects();

        if (activeObjects.length === 0) return;

        for (let object of activeObjects) {
          if (!object.shadow) return;
          object.shadow.blur = this.value;
        }

        activeCanvas.renderAll();
      };

      objectSettings.color.onclick = function() {
        colorPickerContainer.setTitle("Color picker - shadow");
        colorPickerContainer.setVisiblity(true);

        colorPicker.onchange = function(e, color) {
          let activeObjects = activeCanvas.getActiveObjects();

          if (activeObjects.length === 0) return;

          for (let object of activeObjects) {
            if (!object.shadow) return;
            object.shadow.color = color;
          }

          activeCanvas.renderAll();
        };
      };

      objectSettings.strokeColor.addEventListener("click", () => {
        colorPickerContainer.setTitle("Color picker - stroke");
        colorPickerContainer.setVisiblity(true);
        colorPicker.onchange = function(e, color) {
          let activeObject = activeCanvas.getActiveObject();
          strokeColor = color;
          applyStyle(activeObject, "stroke", strokeColor);
        };
      });

      objectSettings.strokeToggle.onchange = function() {
        if (this.value) {
          let width =
            parseFloat(objectSettings.strokeWidth.value.substr(0, 3)) || 1;
          applyStyle(activeCanvas.getActiveObject(), "strokeWidth", width);
        } else {
          applyStyle(activeCanvas.getActiveObject(), "strokeWidth", 0);
        }
      };

      objectSettings.strokeWidth.oninput = function() {
        let width = parseFloat(this.value.substr(0, 3));
        applyStyle(activeCanvas.getActiveObject(), "strokeWidth", width);
      };
    })();
  }

  function initContextMenu() {
    let {
      align,
      arrange,
      copy,
      cut,
      deleteBtn,
      lock
    } = objectContextMenuOptions;

    objectContextMenu.childMenu(Object.values(arrangeOptions), arrange);
    objectContextMenu.childMenu(Object.values(alignOptions), align);

    arrangeContextMenu.itemOnclick = alignContextMenu.itemOnclick = arrangeContextMenu.maskOnclick = alignContextMenu.maskOnclick = function() {
      objectContextMenu.hide();
    };

    canvasContextMenuOptions.delete.addEventListener("click", deleteCanvas);
    canvasContextMenuOptions.paste.addEventListener("click", pasteObject);
    canvasContextMenuOptions.unlockAll.addEventListener("click", unlockObjects);
    canvasContextMenuOptions.background.addEventListener("click", function() {
      colorPickerContainer.setTitle("Color picker - background");
      colorPickerContainer.setVisiblity(true);
      colorPicker.onchange = function(e, color) {
        activeCanvas.setBackgroundColor(
          color,
          activeCanvas.renderAll.bind(activeCanvas)
        );
      };
    });

    copy.addEventListener("click", copyObject);
    cut.addEventListener("click", cutObject);
    deleteBtn.addEventListener("click", deleteObject);
    lock.addEventListener("click", lockObject);

    for (let key in arrangeOptions) {
      arrangeOptions[key].addEventListener("click", function() {
        let activeObject = activeCanvas.getActiveObject();
        activeObject[key]();
      });
    }

    for (let key in alignOptions) {
      alignOptions[key].addEventListener("click", function() {
        setObjectAlignment(key);
      });
    }
  }

  function setObjectAlignment(alignment) {
    let activeObject = activeCanvas.getActiveObject();
    switch (alignment) {
      case "center":
        activeCanvas.centerObject(activeObject);
        break;
      case "hCenter":
        activeCanvas.centerObjectH(activeObject);
        break;
      case "vCenter":
        activeCanvas.centerObjectV(activeObject);
        break;
    }
    activeCanvas.renderAll();
  }

  function copyObject() {
    if (!activeCanvas) return;
    let activeObject = activeCanvas.getActiveObject();
    copiedObject = null;
    activeObject.clone(function(object) {
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
      let location = activeCanvas.getPointer(mouseEvent);
      let pos = new fabric.Point(location.x, location.y);
      copiedObject.setPositionByOrigin(pos, "center", "center");
      if (copiedObject.type !== "activeSelection") {
        activeCanvas.add(copiedObject);
      } else {
        activeCanvas.add(...copiedObject.getObjects());
      }
    } else {
      if (copiedObject.type !== "activeSelection") {
        activeCanvas.add(copiedObject);
      } else {
        activeCanvas.add(...copiedObject.getObjects());
      }
    }
    activeCanvas.setActiveObject(copiedObject);
    copyObject();

    activeCanvas.renderAll();
  }

  function deleteCanvas() {
    if (pages.length === 1) return;
    let page = activeCanvas.page;

    if (!confirm("Delete " + page.name + "?")) return;

    activeCanvas.page = null;
    activeCanvas.dispose();
    activeCanvas = null;
    --pages.length;
    page.DOMElement.parentElement.removeChild(page.DOMElement);
    delete pages.page[page.name];
    for (let key in pages.page)
      if (key !== "length") {
        updateActiveCanvas(pages.page[key]);
        break;
      }
    fixPagesContainerPosition();
  }

  function deleteObject() {
    let activeObject = activeCanvas.getActiveObject();
    if (activeObject.type === "activeSelection") {
      activeCanvas.remove(...activeObject.getObjects());
    } else {
      activeCanvas.remove(activeObject);
    }
  }

  function lockObject() {
    let activeObject = activeCanvas.getActiveObject();
    if (activeObject.type !== "activeSelection") {
      lock(activeObject);
    } else {
      let objects = activeObject.getObjects();
      for (let object of objects) {
        lock(object);
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
    let pageName = this.getAttribute("data-name");

    if (activeCanvas.page.pageName !== pageName) {
      updateActiveCanvas(pages.page[pageName]);
    }

    let group = objectContextMenuOptions.group;
    let activeObject = activeCanvas.getActiveObject();
    let length = activeCanvas.getActiveObjects().length;
    if (activeObject) {
      objectContextMenu.show(e);
      if (length > 1 && activeObject.type === "activeSelection") {
        group.classList.remove("CE_disabled");
        group.textContent = "Group";
        group.onclick = function() {
          activeObject.toGroup();
        };
      } else if (activeObject.type === "group") {
        group.classList.remove("CE_disabled");
        group.textContent = "Ungroup";
        group.onclick = function() {
          activeObject.toActiveSelection();
        };
      } else {
        group.textContent = "Group";
        group.classList.add("CE_disabled");
      }

      if (activeObject.lockUniScaling) {
        objectContextMenuOptions.lock.textContent = "Unlock";
      } else {
        objectContextMenuOptions.lock.textContent = "Lock";
      }
    } else {
      if (copiedObject) {
        canvasContextMenuOptions.paste.classList.remove("CE_disabled");
      } else {
        canvasContextMenuOptions.paste.classList.add("CE_disabled");
      }

      if (lockedObjects.length > 0) {
        canvasContextMenuOptions.unlockAll.classList.remove("CE_disabled");
      } else {
        canvasContextMenuOptions.unlockAll.classList.add("CE_disabled");
      }
      canvasContextMenu.show(e);
    }
  }

  function fixPagesContainerPosition() {
    let ContainerClient = canvasContainer.getBoundingClientRect();
    let ContainerParentClient = canvasContainer.parentElement.getBoundingClientRect();

    let y = ContainerParentClient.height / 2 - ContainerClient.height / 2;
    let x = ContainerParentClient.width / 2 - ContainerClient.width / 2;

    translate = {
      x,
      y
    };
    canvasContainer.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
  }

  function updateScaling(val) {
    scale = val;
    canvasContainer.style.transform = `translate(${translate.x}px, ${
      translate.y
    }px) scale(${scale})`;
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

  function handleSVG() {
    mainWrapper.style.pointerEvents = "none";
    mainWrapper.style.cursor = "progress";
    let reader = new FileReader();
    reader.onload = readerOnLoad;

    function readerOnLoad(e) {
      let svg = e.target.result;

      fabric.loadSVGFromString(svg, function(result, options) {
        if (activeCanvas.getObjects().length !== 0) {
          addPage();
        }

        activeCanvas.setHeight(options.height);
        activeCanvas.setWidth(options.width);
        activeCanvas.add(...result);

        mainWrapper.style.removeProperty("pointer-events");
        mainWrapper.style.removeProperty("cursor");
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
      let pageName = activeCanvas.page.name;
      let el = document.querySelector(`div[data-name=${pageName}]`);
      if (el) el.classList.remove("active");
    }

    let pageName = canvas.page.name;
    let el = document.querySelector(`div[data-name=${pageName}]`);
    if (el) el.classList.add("active");
  }

  function objectOnSelect() {
    let activeObject = this || activeCanvas.getActiveObject();

    if (["activeSelection", "group"].indexOf(activeObject.type) > -1) return;

    colorPickerContainer.setVisiblity(false);

    let textSettings = alltools.textSettings;
    let objectSettings = alltools.objectSettings;

    if (activeObject.type === "text") {
      let text = activeObject.text;
      let textobj = activeObject.toObject();
      delete textobj.text;
      delete textobj.type;
      let clonedtextobj = JSON.parse(JSON.stringify(textobj));

      let textbox = new fabric.Textbox(text, clonedtextobj);

      deleteObject();
      activeObject = textbox;
      activeCanvas.add(textbox);
      activeCanvas.setActiveObject(textbox);
    }

    if (activeObject.type === "textbox") {
      let fontSize = activeObject.fontSize;
      let fontFamily = activeObject.fontFamily;
      let fontWeight = activeObject.fontWeight;

      if (activeObject.underline) {
        textSettings.underline.classList.add("active");
      } else {
        textSettings.underline.classList.remove("active");
      }

      if (activeObject.fontStyle === "italic") {
        textSettings.italic.classList.add("active");
      } else {
        textSettings.italic.classList.remove("active");
      }

      if (activeObject.linethrough) {
        textSettings.strikethrough.classList.add("active");
      } else {
        textSettings.strikethrough.classList.remove("active");
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
    if (!activeObject.get("shadow")) {
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
    if (object.type === "activeSelection" || object.type === "group") {
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
    alltools.textSettings.fontFamily.getOption(font).style.fontFamily = font;

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
    fontLoader.style.opacity = "1";

    fontloaderTimeout = setTimeout(() => {
      fontLoader.style.opacity = "0";
    }, 1500);
  }

  function removeFont(font) {
    alltools.textSettings.fontFamily.removeOption(font);
  }

  function onFontScrollEnd(fun) {
    alltools.textSettings.fontFamily.customSelect.onscroll = function(e) {
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
  function saveAsPNG(scaling = 1, retinaScaling = true, quality = 1) {
    let images = saveAsBase64({
      quality: quality,
      multiplier: scaling,
      enableRetinaScaling: retinaScaling
    });

    let blobs = {};
    for (let image in images) {
      blobs[image] = b64ToBlob(images[image]);
    }

    return blobs;
  }

  /**
   *
   * @param {Number} [quality=0.9]
   * @param {Number} [scaling=1]
   * @param {Boolean} [retinaScaling=true]
   */
  function saveAsJPEG(quality = 0.9, scaling = 1, retinaScaling = true) {
    let images = saveAsBase64({
      format: "jpeg",
      quality: quality,
      multiplier: scaling,
      enableRetinaScaling: retinaScaling
    });

    let blobs = {};
    for (let image in images) {
      blobs[image] = b64ToBlob(images[image]);
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
    let images = {};
    let canvases = pages.page;
    for (let page in canvases) {
      images[page] = pages.page[page].toDataURL(options);
    }
    return images;
  }

  function toJSON() {
    let json = {};
    let canvases = pages.page;
    for (let page in canvases) {
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
      mainWrapper.style.cursor = "progress";
      mainWrapper.style.pointerEvents = "none";
      render(json);
      mainWrapper.style.removeProperty("cursor");
      mainWrapper.style.removeProperty("pointer-events");
      fixPagesContainerPosition();
    } catch (error) {
      alert("Cannot load json, Error: " + error);
    }

    function render(json) {
      let page = {};
      let key = Object.keys(json)[0];
      if (!key) return;
      else {
        page = json[key];
        delete json[key];
      }
      if (activeCanvas.getObjects().length !== 0) {
        addPage();
      }
      activeCanvas.page.name = page.name;
      activeCanvas.setWidth(page.data.width);
      activeCanvas.setHeight(page.data.height);
      activeCanvas.loadFromJSON(page.data, function() {
        activeCanvas.renderAll();
        let allObjects = activeCanvas.getObjects();
        for (let object of allObjects) {
          if (
            object.type &&
            (object.type === "textbox" ||
              object.type === "text" ||
              object.type === "itext")
          ) {
            requireFonts.push(object.fontFamily);
          }
        }
        render(json);
      });
    }
  }

  function getRequireFonts(loadfont) {
    function exec() {
      for (let key in pages.page) {
        pages.page[key].renderAll();
        console.log("page: " + key + " rendered.");
      }
    }
    loadfont([...new Set(requireFonts)], exec);
  }

  return {
    saveAsBase64,
    saveAsPNG,
    saveAsJPEG,
    toJSON,
    loadJSON,
    addFont,
    onFontScrollEnd,
    getRequireFonts,
    removeFont
  };
}
