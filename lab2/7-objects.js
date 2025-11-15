<<<<<<< HEAD
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

=======
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

>>>>>>> 1bc46ee23d14e50330bc3229338c863ef49e5242
console.log(fn());