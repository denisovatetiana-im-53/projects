'use strict';

const array = () => {
  const data = []; 
  function wrapper(index) {
    return data[index];
  }
  wrapper.push = (value) => {
    data.push(value);
  };
  wrapper.pop = () => {
    return data.pop();
  };
  return wrapper;
};

module.exports = { array };
