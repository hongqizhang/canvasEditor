import html from '../html';

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
    oncontextmenu: () => false,
    onclick: hide
  });

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
      setPosition(e.clientX, e.clientY)
    }

    if (!cm.parentElement) {
      document.body.appendChild(mask);
      document.body.appendChild(cm);

      let cmClient = cm.getBoundingClientRect();
      if (cmClient.x + cmClient.width > innerWidth) {
        cmClient.x -= cmClient.width;
      }

      if (cmClient.y + cmClient.height > innerHeight) {
        cmClient.y -= cmClient.height;
      }

      setPosition(cmClient.x, cmClient.y);
    }
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