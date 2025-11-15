<<<<<<< HEAD
'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(random(5, 10)); 
=======
'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(random(5, 10)); 
>>>>>>> 1bc46ee23d14e50330bc3229338c863ef49e5242
console.log(random(7));     