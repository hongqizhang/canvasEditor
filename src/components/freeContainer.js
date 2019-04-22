const html = require('html-element-js').default;

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
 * @param {HTMLElement} [opts.parentElement]
 * @param {HTMLElement} [opts.drop]
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
    onmousedown: onmousedown,
    ontouchstart: onmousedown
  });
  let mainParent = html.get('#CE_wrapper');
  let parentElement = opts.parentElement || mainParent;

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
   * @param {MouseEvent | TouchEvent} e 
   */
  function onmousedown(e) {
    e.preventDefault();
    start.x = e.clientX || e.touches[0].clientX;
    start.y = e.clientY || e.touches[0].clientY;
    let wrapperClient = wrapper.getBoundingClientRect();
    let wrapperPClient = mainParent.getBoundingClientRect();
    let x = wrapperClient.x - wrapperPClient.x;
    let y = wrapperClient.y - wrapperPClient.y;
    wrapper.style.transform = `translate(${x}px, ${y}px)`;
    wrapper.style.position = 'absolute';
    mainParent.appendChild(wrapper);

    document.onmousemove = onmousemove;
    document.ontouchmove = onmousemove;
    document.onmouseup = onmouseup;
    document.ontouchend = onmouseup;
  }

  /**
   * 
   * @param {MouseEvent} e 
   */
  function onmousemove(e) {
    e.preventDefault();
    let cx = e.clientX || e.touches[0].clientX;;
    let cy = e.clientY || e.touches[0].clientY;
    move.x = cx - start.x;
    move.y = cy - start.y;
    start.x = cx;
    start.y = cy;

    let wrapperClient = wrapper.getBoundingClientRect();
    let wrapperPClient = mainParent.getBoundingClientRect();
    let x = wrapperClient.x - wrapperPClient.x;
    let y = wrapperClient.y - wrapperPClient.y;
    let dropArea = getDropArea();

    if (opts.drop && dropArea.max.x >= wrapperClient.x && dropArea.min.x <= wrapperClient.x && dropArea.max.y >= wrapperClient.y && dropArea.min.y <= wrapperClient.y) {
      opts.drop.classList.add('CE_highlight');
    } else if (opts.drop) {
      opts.drop.classList.remove('CE_highlight');
    }

    if (y + move.y <= 0) return;
    if (x + move.x <= 0) return;

    wrapper.style.transform = `translate(${x + move.x}px, ${y + move.y}px)`;
  }

  function onmouseup() {
    let dropArea = getDropArea();
    let wrapperClient = wrapper.getBoundingClientRect();
    if (opts.drop && dropArea.max.x >= wrapperClient.x && dropArea.min.x <= wrapperClient.x && dropArea.max.y >= wrapperClient.y && dropArea.min.y <= wrapperClient.y) {
      wrapper.style.removeProperty('position');
      wrapper.style.removeProperty('transform');
      opts.drop.classList.remove('CE_highlight');
      parentElement.appendChild(wrapper);
    } else {
      mainParent.appendChild(wrapper);
    }
    document.onmouseup = null;
    document.ontouchend = null;
    document.onmousemove = null;
    document.ontouchmove = null;
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

  function getDropArea() {
    let dropArea = {
      min: {
        x: 0,
        y: 0
      },
      max: {
        x: 0,
        y: 0
      }
    };
    if (opts.drop) {
      let dropClient = opts.drop.getBoundingClientRect();

      dropArea.min.x = dropClient.x;
      dropArea.min.y = dropClient.y;
      dropArea.max.x = dropClient.x + dropClient.width;
      dropArea.max.y = dropClient.y + dropClient.height;
    }
    return dropArea;
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