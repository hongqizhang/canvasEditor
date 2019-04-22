const html = require('html-element-js').default;

/**
 * @callback itemOnclick
 * @param {HTMLElement} item
 */

/**
 * @typedef contextMenu
 * @property {function():void} dispose
 * @property {function():void} show
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
 * @param {Object} [opts] 
 * @param {HTMLElement[]} [opts.children=null] children to append
 * @param {Number} [opts.x] x position 
 * @param {Number} [opts.y] y position
 * @param {itemOnclick} [opts.itemOnclick]
 * @param {function} [opts.maskOnclick]
 * @returns {contextMenu}
 */
export function contextMenu(children = null, x = 0, y = 0) {
  let cm = html.create('div', {
    className: 'CE_contextmenu',
    oncontextmenu: () => false
  });
  let mask = html.create('span', {
    className: 'CE_mask',
    oncontextmenu: maskOnclick,
    onclick: maskOnclick
  });
  let position = {
    x: 0,
    y: 0
  };
  let returnable = {
    dispose,
    show,
    hide,
    addItems,
    removeItem,
    insertBefore,
    setPosition,
    childMenu
  };
  returnable.itemOnclick = function () {
    return;
  };
  returnable.maskOnclick = function () {
    return;
  };

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
  function show(e = null) {
    if (e && e.clientX && e.clientY) {
      if (e.preventDefault) e.preventDefault();
      position.x = e.clientX;
      position.y = e.clientY;
    }

    if (!cm.parentElement) {
      document.body.appendChild(mask);
      document.body.appendChild(cm);
    }

    let cmClient = cm.getBoundingClientRect();
    if (position.x + cmClient.width > innerWidth) {
      position.x -= cmClient.width;
    }

    if (position.x < 0) {
      position.x -= (0 - position.x);
    }

    if (position.y < 0) {
      position.y -= (0 - position.y);
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
      for (let item of items) {
        cm.appendChild(item);
        hideOnClick(item);
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
      item.addEventListener('click', (e) => {
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
    let childCM = html.div({
      className: 'CE_contextmenu'
    });

    if (items.constructor.name === 'NodeList') {
      items = items.values();
    }

    for (let el of items) {
      childCM.appendChild(el);
    }

    if (item.parentElement === cm) {
      item.appendChild(childCM);

      item.addEventListener('mouseover', function () {
        let cmClient = childCM.getBoundingClientRect();
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
    cm.style.transform = `translate(${x}px, ${y}px)`;
  }

  return returnable;
}