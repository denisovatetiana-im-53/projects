'use strict';

const contract = (fn, ...types) => (...args) => {
  const expectedArgsCount = types.length - 1; 

  if (args.length !== expectedArgsCount) {
    throw new TypeError(`Expected ${expectedArgsCount} arguments, got ${args.length}`);
  }
  for (let i = 0; i < expectedArgsCount; i++) {
    const arg = args[i];
    const def = types[i];
    const name = def.name.toLowerCase();
    if (typeof arg !== name) {
      throw new TypeError(`Argument ${i + 1} type ${name} expected`);
    }
  }
  const res = fn(...args);
  const def = types[types.length - 1];
  const name = def.name.toLowerCase();
  if (typeof res !== name) {
    throw new TypeError(`Result type ${name} expected`);
  }

  return res;
};

module.exports = { contract };

