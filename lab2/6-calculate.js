<<<<<<< HEAD
'use strict';

const square = (x) => x * x;

const cube = (x) => x * x * x;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    const avg = average(sq, cb);
    result.push(avg);
  }
  return result;
};

=======
'use strict';

const square = (x) => x * x;

const cube = (x) => x * x * x;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    const avg = average(sq, cb);
    result.push(avg);
  }
  return result;
};

>>>>>>> 1bc46ee23d14e50330bc3229338c863ef49e5242
console.log(calculate());