const bottle = { color : 'yellow' , hold : 'water' , price: 50, isCleaned : true};
//gettinf all propertys name
const keys = Object.keys(bottle);
console.log(keys);
//get all values
const values = Object.values(bottle);
console.log(values);

const paris = Object.entries(bottle);
console.log(paris);

delete bottle.isCleaned;
console.log(bottle);

Object.seal(bottle);
console.log(bottle);


bottle.price = 100;
console.log(bottle);


Object.freeze(bottle);
console.log(bottle);