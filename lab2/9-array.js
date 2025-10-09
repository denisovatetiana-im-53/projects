'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Mamacita', phone: '+380971234567' },
  { name: 'Fluttershy', phone: '+380991112233' },
];

const findPhoneByName = (name) => {
  for (let i = 0; i < phonebook.length; i++) {
    if (phonebook[i].name === name) {
      return phonebook[i].phone;
    }
  }
  return 'Not found';
};

console.log(findPhoneByName('Fluttershy')); 
console.log(findPhoneByName('Marcus Aurelius')); 
console.log(findPhoneByName('Noname')); 


