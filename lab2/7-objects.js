'use strict';

const fn = () => {
  
  const  objconst = { name: 'Tanya' };
 
  let objVar = { name: 'Bob' };

  objconst.name = 'Ann';
  objVar.name = 'Lim';

// objconst = { name: 'Kate' }; //  не можна, бо objconst є константою

  objVar = { name: 'Sam' }; 

  return { objconst, objVar };
};

console.log(fn());