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
    className: 'CE_contextmenu'
  });
  let mask = html.create('span', {
    className: 'CE_mask',
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
   * @param {MouseEvent} e 
   */
  function show(e) {
    if (e.clientX && e.clientY) {
      setPosition(e.clientX, e.clientY)
    }

    if (!cm.parentElement) {
      document.body.appendChild(mask);
      document.body.appendChild(cm);
    }
  }

  function hide() {
    if (cm.parentElement) {
      document.body.removeChild(mask);
      document.body.removeChild(cm);
    }
  }

  function addItems(items) {
    if (!items) return;
    if (Array.isArray(items)) {
      for (let item of items) {
        cm.appendChild(item);
      }
    } else {
      cm.appendChild(items);
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