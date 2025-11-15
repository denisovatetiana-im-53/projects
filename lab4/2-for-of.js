'use strict';

const sum = (...args) => {
  let total = 0;
  for (const value of args) {
    total += value;
  }
  return total;
};

module.exports = { sum };
