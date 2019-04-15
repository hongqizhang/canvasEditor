module.exports = {

  /**
   * @typedef {Object} elementExtended
   * @property {function(eventList):void} removeEvents removes all events added to element
   * @property {function():void} assignEvents reassign all events that are removed from element
   * @property {function():void} bubble add bubble effect on click
   */

  /**
   * @typedef {HTMLElement & elementExtended} element
   */

  /**
   * Create new HTML tag
   * @param {String} tag HTMl element tag name 
   * @param {Object} [props] HTML element attributes and properties 
   * @param {String} [props.textContent] HTML element inner text
   * @param {String} [props.className] HTML element class
   * @param {String} [props.id] HTML element id
   * @param {Object} [props.tabIndex] HTML element tab index
   * @param {Object} [props.style] HTML element inline style
   * @param {String} [props.style.width] HTML element style width
   * @param {String} [props.style.height] HTML element style height
   * @param {String} [props.style.display] HTML element style display
   * @param {String} [props.style.position] HTML element style position
   * @param {String} [props.style.transform] HTML element style transform
   * @param {String} [props.style.background] HTML element style background
   * @param {String} [props.style.backgroundImage] HTML element style background-image
   * @param {String} [props.style.backgroundColor] HTML element style background-color
   * @param {String} [props.style.color] HTML element style background-color
   * @param {Object} [props.attr] HTML element set attributes
   * @param {String} [props.attr.role] HTML element set attribute role
   * @param {String} [props.attr.value] HTML element set value
   * @param {String} [props.src] Resource URI
   * @param {Boolean} [props.contentEditable] make contentediable
   * @param {HTMLElement[]} [props.children] append children to element
   * @returns {element}
   */
  create: function (tag, props) {
    let html = this;
    let el = document.createElement(tag);
    let eventFunctions = [];
    let oldEventListener = el.addEventListener.bind(el);

    /**@override addEventListener of page */
    el.addEventListener = addEventListener;

    /**@property */
    el.assignEvents = assignEvents;

    /**@property */
    el.removeEvents = removeEvents;

    /**
     * removes all event from page.
     * @param {String[]|String} events
     * @returns {void}
     */
    function removeEvents(events) {
      if (events) {
        for (let event of eventFunctions) {
          if (Array.isArray(events) && events.indexOf(event.type)) {
            el.removeEventListener(event.type, event.listener);
          } else if (typeof events === 'string' && event.type === events) {
            el.removeEventListener(event.type, event.listener);
          }
        }

        return;
      }
      for (let event of eventFunctions) {
        el.removeEventListener(event.type, event.listener);
      }
    }

    /**
     * assign all event that were removed from page
     * @returns {void}
     */
    function assignEvents() {
      for (let event of eventFunctions) {
        oldEventListener(event.type, event.listener, event.options);
      }
    }

    /**
     * 
     * @param {String} type A case-sensitive string representing the event type to listen for.
     * @param {CallableFunction} listener The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs. This must be an object implementing the EventListener interface, or a JavaScript function. See The event listener callback for details on the callback itself.
     * @param {Object} [options] An options object that specifies characteristics about the event listener.
     * @param {Boolean} [options.capture] A Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
     * @param {Boolean} [options.once] A Boolean indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.
     * @param {Boolean} [options.passive] A Boolean which, if true, indicates that the function specified by listener will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning. See Improving scrolling performance with passive listeners to learn more.
     * @param {Boolean} [options.mozSystemGroup] "experimental" A Boolean indicating that the listener should be added to the system group. Available only in code running in XBL or in the chrome of the Firefox browser.
     * @returns {void}
     */
    function addEventListener(type, listener, options) {
      eventFunctions[eventFunctions.length] = {
        type,
        listener,
        options
      };
      oldEventListener(type, listener, options);
    }

    for (let prop in props) {

      if (props[prop] === undefined) {
        return console.error(`invalid value of "${prop}"`);
      }

      if (prop == 'children' && Array.isArray(props[prop])) {
        for (let htmlel of props[prop]) {
          el.appendChild(htmlel);
        }
      } else if (prop == 'attr') {
        for (let p in props[prop]) {
          el.setAttribute(p, props[prop][p]);
        }
      } else if (props[prop].constructor.name === 'Object') {
        for (let p in props[prop]) {
          el[prop][p] = props[prop][p];
        }
      } else el[prop] = props[prop];
    }

    if (props && props.children && props.children.length > 0) {
      for (let i = 0; i < props.children.length; ++i) {
        el.appendChild(props.children[i]);
      }
    }

    el.bubble = function bubble() {
      html.bubble(el);
    }

    return el;
  },

  /**
   * get first mathing element from DOM
   * @param {String} selector CSS selector 
   * @returns {HTMLElement}
   */
  get: function (selector) {
    return document.querySelector(selector);
  },

  /**
   * get all matching element from DOM
   * @param {String} selector CSS selector
   * @returns {HTMLElement[]}
   */
  getAll: function (selector) {
    return document.querySelectorAll(selector);
  },

  /**
   * 
   * @param {element} el 
   */
  bubble: function (el) {
    if (!this.get('#bubble-stylesheet')) {
      let bubbleStyle = `
        .bubble {
          position: absolute;
          -webkit-transform-origin: center;
                  transform-origin: center;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.3);
        }

        .bubble.animate {
          -webkit-animation: grow 600ms ease 1;
                  animation: grow 600ms ease 1;
        }

        .bubbling {
          position: relative;
          overflow: hidden;
        }

        @-webkit-keyframes grow {
          0% {
            opacity: 0;
            -webkit-transform: scale(0) translate3d(0, 0, 0);
                    transform: scale(0) translate3d(0, 0, 0);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            -webkit-transform: scale(1.2) translate3d(0, 0, 0);
                    transform: scale(1.2) translate3d(0, 0, 0);
          }
        }

        @keyframes grow {
          0% {
            opacity: 0;
            -webkit-transform: scale(0) translate3d(0, 0, 0);
                    transform: scale(0) translate3d(0, 0, 0);
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            -webkit-transform: scale(1.2) translate3d(0, 0, 0);
                    transform: scale(1.2) translate3d(0, 0, 0);
          }
        }
      `;

      let style = this.create('style', {
        textContent: bubbleStyle,
        id: 'bubble-stylesheet'
      });
      document.head.appendChild(style);
    }

    let bubble = this.create('i', {
      className: 'bubble'
    });

    el.addEventListener('click', bubbles);

    function bubbles(e) {
      let elClient = el.getBoundingClientRect();
      bubble.classList.add('animate');
      el.classList.add('bubbling');
      bubble.style.height = elClient.width + 'px';
      bubble.style.width = elClient.width + 'px';
      bubble.style.top = (e.clientY - elClient.top - elClient.width / 2) + 'px';
      bubble.style.left = (e.clientX - elClient.left - elClient.width / 2) + 'px';

      setTimeout(function assignProps() {
        el.removeEvents();
        el.appendChild(bubble);
      }, 0);


      setTimeout(function removeBubble() {
        bubble.classList.remove('animate');
        el.classList.remove('bubbling');
        el.assignEvents();
        el.removeChild(bubble);
      }, 580);
    }
  },

  /**
   * 
   * @param {Object} props 
   */
  icon: function (props) {
    let icon = this.create('span', props);

    if (!icon.classList.contains('icon')) {
      icon.classList.add('icon');
    }

    this.bubble(icon);

    return icon;
  },

  /**
   * 
   * @param {Object} opts 
   * @param {String} opts.title 
   * @param {element} opts.element 
   * @param {String} opts.direction 
   * @param {Boolean} opts.watchChange
   */
  toolTip: function (opts) {
    if (!opts.element) return console.error('element is undefined');
    if (!opts.direction) opts.direction = 'left';
    let title = opts.title || opts.element.getAttribute('title') || opts.element.getAttribute('data-title') || '';
    let toolTip = this.create('div', {
      className: 'toolTip'
    });
    let toolTipPointer = this.create('span', {
      className: 'toolTip-pointer'
    });
    let wrapper = this.create('div', {
      className: 'toolTip-wrapper',
      attr: {
        "data-direction": opts.direction
      }
    });
    let text = this.create('span', {
      textContent: title,
      className: 'text'
    });
    /**
     * @type {MutationObserver}
     */
    let observer;

    toolTip.appendChild(toolTipPointer);
    toolTip.appendChild(text);
    wrapper.appendChild(toolTip);

    document.head.appendChild(this.create('style', {
      textContent: `.toolTip-wrapper {
        position: fixed;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        pointer-events: none;
        z-index: 999;
      }

      .toolTip-wrapper .toolTip {
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        height: -webkit-fit-content;
        height: -moz-fit-content;
        height: fit-content;
        background-color: #99f;
        -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
                box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
        padding: 10px;
        border-radius: 4px;
        -webkit-animation: spring 100ms ease 1;
                animation: spring 100ms ease 1;
        width: fit-content;
        max-width: 220px;
      }

      .toolTip-wrapper .toolTip > .text {
        z-index: 1;
        display: block;
        color: white;
        font-family: Arial,
      Helvetica,
      sans-serif;
        white-space: pre-line;
      }

      .toolTip-wrapper .toolTip > .toolTip-pointer {
        z-index: -1;
        position: absolute;
        -webkit-transform-origin: center;
                transform-origin: center;
        height: 15px;
        width: 15px;
        background-color: #99f;
      }

      @-webkit-keyframes spring {
        0% {
          -webkit-transform: scale(0.8);
                  transform: scale(0.8);
        }
        80% {
          -webkit-transform: scale(1.2);
                  transform: scale(1.2);
        }
        100% {
          -webkit-transform: scale(1);
                  transform: scale(1);
        }
      }

      @keyframes spring {
        0% {
          -webkit-transform: scale(0.8);
                  transform: scale(0.8);
        }
        80% {
          -webkit-transform: scale(1.2);
                  transform: scale(1.2);
        }
        100% {
          -webkit-transform: scale(1);
                  transform: scale(1);
        }
      }`
    }));

    opts.element.onmouseenter = mouseEnter;
    opts.element.onmouseleave = mouseLeave;


    function mouseEnter() {

      let elClient = opts.element.getBoundingClientRect();

      if (opts.direction) {
        if (opts.direction === 'left') {
          wrapper.style.left = elClient.left + 'px';
          wrapper.style.top = elClient.top + elClient.height / 2 + 'px';
          toolTipPointer.style.right = `0`;
          toolTipPointer.style.top = `50%`;
          toolTipPointer.style.transform = 'translate3d(50%, -50%, 0) rotate(45deg)';
          wrapper.style.transform = 'translate3d(-100%, -50%, 0px)';
        }
        if (opts.direction === 'right') {
          wrapper.style.left = elClient.right + 'px';
          wrapper.style.top = elClient.top + elClient.height / 2 + 'px';
          toolTipPointer.style.left = `0`;
          toolTipPointer.style.top = `50%`;
          toolTipPointer.style.transform = 'translate3d(-50%, -50%, 0) rotate(45deg)';
          wrapper.style.transform = 'translate3d(0%, -50%, 0px)';
        }
        if (opts.direction === 'top') {
          wrapper.style.left = elClient.left + elClient.width / 2 + 'px';
          wrapper.style.top = elClient.top + 'px';
          toolTipPointer.style.left = `50%`;
          toolTipPointer.style.bottom = `0`;
          toolTipPointer.style.transform = 'translate3d(-50%, 50%, 0) rotate(45deg)';
          wrapper.style.transform = 'translate3d(-50%, -100%, 0px)';
        }
        if (opts.direction === 'bottom') {
          wrapper.style.left = elClient.left + elClient.width / 2 + 'px';
          wrapper.style.top = elClient.bottom + 'px';
          toolTipPointer.style.left = `50%`;
          toolTipPointer.style.top = `0`;
          toolTipPointer.style.transform = 'translate3d(-50%, -50%, 0) rotate(45deg)';
          wrapper.style.transform = 'translate3d(-50%, 0%, 0px)';
        }
      }

      if (opts.watchChange) {
        observer = new MutationObserver(function (changes, observer) {
          for (let change of changes) {
            if (change.type === 'attributes') {
              text.textContent = opts.element.getAttribute('title') || opts.element.getAttribute('data-title');
            }
          }
        });
        observer.observe(opts.element, {
          attributes: true
        });
      }

      document.body.appendChild(wrapper);
    }

    function mouseLeave() {
      if (!toolTip.parentElement) return;
      document.body.removeChild(wrapper);
      if (opts.watchChange && observer) {
        observer.disconnect;
      }
    }

    opts.element.removeAttribute('title');

  }
}