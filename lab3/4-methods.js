<<<<<<< HEAD
'use strict';

const methods = (iface) => {
  const result = [];
  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      result.push([key, iface[key].length]);
    }
  }
  return result;
};

const obj = {
  m1: x => [x],
  m2: function(x, y) { return [x, y]; },
  m3(x, y, z) { return [x, y, z]; },
};

=======
'use strict';

const methods = (iface) => {
  const result = [];
  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      result.push([key, iface[key].length]);
    }
  }
  return result;
};

const obj = {
  m1: x => [x],
  m2: function(x, y) { return [x, y]; },
  m3(x, y, z) { return [x, y, z]; },
};

>>>>>>> 1bc46ee23d14e50330bc3229338c863ef49e5242
console.log(methods(obj));