'use strict';

const compose = (...fns) => {
  const fn = (x) => {
    let result = x;
    for (let i = fns.length - 1; i >= 0; i--) {
      try {
        result = fns[i](result);
      } catch (e) {
        fn._errorHandlers.forEach(handler => handler(e));
        return undefined;
      }
    }
    return result;
  };
  fn._errorHandlers = [];
  fn.on = (event, handler) => {
    if (event === 'error' && typeof handler === 'function') {
      fn._errorHandlers.push(handler);
    }
    return fn;
  };

  return fn;
};

module.exports = { compose };
