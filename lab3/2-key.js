'use strict';

const generateKey = (length, possible) => {
  let result = '';
  for (let i = 0; i < length; i++) {

    const randomIndex = Math.floor(Math.random() * possible.length);
    result += possible[randomIndex];
  }
  return result;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); 