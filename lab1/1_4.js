'use strict';

const myArray = [ 
    false, null, 1, 3, 284, 'modern', 'pony', 'hello', true
];

let counter = {};

for (let item of myArray) {
    let type = typeof item;
    if (counter[type]) {
        counter[type]++;
    } else {
        counter[type] = 1;
    }
}

console.log(counter);