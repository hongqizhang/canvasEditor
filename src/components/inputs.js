import html from '../html';

/**
 * @typedef {Object} basicInput
 * @property {HTMLElement} container 
 * @property {HTMLEInputlement} input 
 * @property {HTMLElement} label 
 */

/**
 * 
 * @param {Object} opts 
 * @returns {basicInput}
 */

function basicInput(opts) {
  let container = html.create('div', {
    className: 'CE_input'
  });
  let fakeLabel = html.create('span', {
    className: 'CE_fake-label',
    textContent: (opts && opts.label ? opts.label : '')
  });
  let input = html.create('input', opts && opts.inputProps ? opts.inputProps : {
    type: 'text'
  });
  container.appendChild(fakeLabel);
  container.appendChild(input);

  if (!(opts && opts.stopExecution)) {
    input.addEventListener('focus', inputFocus);
    input.addEventListener('blur', inputBlur);
  }

  if (opts && opts.inputProps && opts.inputProps.value) {
    container.classList.add('focused');
  }

  function inputFocus() {
    let container = this.parentElement;
    if (!container.classList.contains('focused')) {
      container.classList.add('focused');
    }
    if (!container.classList.contains('highlight')) {
      container.classList.add('highlight');
    }
  }

  function inputBlur() {
    let container = this.parentElement;
    if (this.value === '') {
      if (container.classList.contains('focused')) {
        container.classList.remove('focused');
      }
    }

    if (container.classList.contains('highlight')) {
      container.classList.remove('highlight');
    }
  }

  return {
    container,
    input,
    label: fakeLabel
  }
}

function slider(opts) {
  let min = opts && opts.min || 0;
  let max = opts && opts.max || 100;
  let step = opts && opts.step || 10;
  let value = opts && opts.value || 50;
  let {
    container,
    label,
    input
  } = basicInput({
    label: opts && opts.label || '',
    stopExecution: true,
    inputProps: {
      type: 'range',
      min,
      max,
      step,
      value
    }
  });

  container.setAttribute('data-min', min);
  container.setAttribute('data-max', max);

  label.setAttribute('data-value', value);
  input.addEventListener('input', changeLableValue);

  function changeLableValue() {
    let value = this.value;
    label.setAttribute('data-value', value || 0);
  }

  return {
    container,
    label,
    input
  }
}

export {
  basicInput,
  slider
};