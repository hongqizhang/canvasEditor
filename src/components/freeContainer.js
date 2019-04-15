import html from '../html';

/**
 * @typedef {Object} freeContainer
 * @property {function(bool):void} setVisiblity
 * @property {function(el):void} addItem
 * @property {function(el, refel):void} insertBefore
 * @property {function(el):void} removeItems
 * @property {function(title):void} setTitle
 * @property {function():void} del
 * @property {Object} DOMElements
 * @property {HTMlElement} DOMElements.wrapper
 * @property {HTMlElement} DOMElements.body
 * @property {HTMlElement} closeBtn
 */

/**
 * creates a new freeContaier
 * @param {Object} [opts]
 * @param {Boolean} [opts.disableCloseBtn]
 * @returns {freeContainer}
 */
export function freeContainer(opts = {}) {
  let wrapper = html.create('div', {
    className: 'CE_freeContainer_wrapper'
  });
  let handel = html.create('div', {
    className: 'CE_controls grab'
  });
  let body = html.create('div', {
    className: 'CE_body',
    onmousemove: bodyonmousemove
  });
  let closeBtn = html.create('button', {
    className: 'CE_icon times',
    onclick: () => setVisiblity(false)
  });
  let mover = html.create('span', {
    className: 'CE_mover',
    onmousedown: onmousedown
  });
  let parentElement = opts.parentElement || html.get('#CE_wrapper');

  let start = {
    x: 0,
    y: 0
  };
  let move = {
    x: 0,
    y: 0
  };
  let bodyResize = false;
  let bodyMove = 0;
  let bodyStart = 0;

  if (opts.title) {
    setTitle(opts.title);
  }

  mover.addEventListener('mousedown', function addGrabbing() {
    setTimeout(() => {
      handel.classList.remove('grab');
      handel.classList.add('grabbing');
    }, 10);
  });
  mover.addEventListener('mouseup', function removeGrabbing() {
    setTimeout(() => {
      handel.classList.add('grab');
      handel.classList.remove('grabbing');
    }, 10);
  })

  handel.appendChild(mover);
  if (opts && opts.disableCloseBtn) {

  } else {
    handel.appendChild(closeBtn);
  }
  for (let el of [handel, body]) {
    wrapper.appendChild(el);
  }

  /**
   * 
   * @param {Boolean} bool
   */
  function setVisiblity(bool) {
    if (bool) {
      if (!wrapper.parentElement)
        parentElement.appendChild(wrapper);
      wrapper.style.display = '';
    } else if (!bool) {
      wrapper.style.display = 'none';
    }
  }

  function del() {
    let children = wrapper.children;
    children = [...children];

    wrapper.removeEvents();
    for (let child of children) {
      child.removeEvents();
    }

    if (wrapper.parentElement) {
      wrapper.parentElement.removeChild(wrapper);
    }
  }

  function setTitle(title) {
    mover.setAttribute('data-title', title);
  }

  function addItems(el) {
    if (Array.isArray(el)) {
      for (let e of el) {
        body.appendChild(e);
      }
    } else {
      body.appendChild(el);
    }
  }

  function removeItem(el) {
    body.removeChild(el);
  }

  function insertBefore(el, refel) {
    body.insertBefore(el, refel);
  }

  /**
   * 
   * @param {MouseEvent} e 
   */
  function onmousedown(e) {
    e.preventDefault();
    start.x = e.clientX;
    start.y = e.clientY;

    document.onmousemove = onmousemove;
    document.onmouseup = onmouseup;
  }

  /**
   * 
   * @param {MouseEvent} e 
   */
  function onmousemove(e) {
    e.preventDefault();
    move.x = e.clientX - start.x;
    move.y = e.clientY - start.y;
    start.x = e.clientX;
    start.y = e.clientY;

    let wrapperClient = wrapper.getBoundingClientRect();
    let wrapperPClient = wrapper.parentElement.getBoundingClientRect();
    let x = wrapperClient.x - wrapperPClient.x;
    let y = wrapperClient.y - wrapperPClient.y;

    if (y + move.y <= 0) return;
    if (x + move.x <= 0) return;

    wrapper.style.transform = `translate(${x + move.x}px, ${y + move.y}px)`;
  }

  function onmouseup() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  /**
   * 
   * @param {MouseEvent} e 
   */
  function bodyonmousemove(e) {
    let x = e.offsetX;
    let width = body.getBoundingClientRect().width;

    if (bodyResize) {

      bodyMove = e.clientX - bodyStart;
      bodyStart = e.clientX;

      body.style.width = (width + bodyMove) + 'px';

    } else {
      if (x + 10 > width) {
        body.style.cursor = 'e-resize';
        body.onmousedown = bodyonmousedown;
      } else {
        body.style.cursor = '';
        body.onmousedown = null;
      }
    }
  }

  /**
   * 
   * @param {MouseEvent} e 
   */
  function bodyonmousedown(e) {
    bodyStart = e.clientX;
    bodyResize = true;

    body.onmousemove = null;
    document.onmousemove = bodyonmousemove;
    document.onmouseup = bodyonmouseup;
  }

  function bodyonmouseup() {
    bodyResize = false;
    body.onmousemove = bodyonmousemove;
    body.onmousedown = null;
    document.onmouseup = null;
    document.onmousemove = null;
  }

  return {
    DOMElements: {
      wrapper,
      body
    },
    setVisiblity,
    del,
    addItems,
    removeItem,
    insertBefore,
    setTitle,
    closeBtn
  }
}