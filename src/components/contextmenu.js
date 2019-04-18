import * as html from 'html-element-js';

/**
 * 
 * @param {Object} [opts] 
 * @param {HTMLElement[]} [opts.children=null] children to append
 * @param {Number} [opts.x] x position 
 * @param {Number} [opts.y] y position
 */
export function contextMenu(children = null, x = 0, y = 0) {
  let cm = html.create('div', {
    className: 'CE_contextmenu',
    oncontextmenu: () => false
  });
  let mask = html.create('span', {
    className: 'CE_mask',
    oncontextmenu: show,
    onclick: hide
  });
  let position = {
    x: 0,
    y: 0
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

    if (position.y + cmClient.height > innerHeight) {
      position.y -= cmClient.height;
    }

    setPosition(position.x, position.y);
  }

  function hide() {
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
      if (!item.getAttribute('data-expandable')) {
        item.addEventListener('click', hide);
      }
    }
  }

  function removeItem(item) {
    cm.removeChild(item);
  }

  function insertBefore(el, refEl) {
    cm.insertBefore(el, refEl);
  }

  function setPosition(x, y) {
    position.x = x;
    position.y = y;
    cm.style.transform = `translate(${x}px, ${y}px)`;
  }

  return {
    dispose,
    show,
    hide,
    addItems,
    removeItem,
    insertBefore,
    setPosition
  }
}