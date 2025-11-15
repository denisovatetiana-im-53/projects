'use strict';

const pipe = (...fns) => {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new Error('Всі аргументи pipe повинні бути функціями');
  }

  return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

module.exports = { pipe };
