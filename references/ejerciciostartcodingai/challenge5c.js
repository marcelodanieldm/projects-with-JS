//Andrea y Martin van de picnic. Andrea propone llevar una bolsa con dos cervezas, una de dos sandwiches, y una de papas fritas. Por su parte, Martin lleva una porcion de torta,
//una gaseosa y un paquete de galletitas dulces.
//Crear un objeto que represente a cada una de las bolsas. Donde cada producto tenga la cantidad indicada. 
//a) Mostrar por consola los productos que llevo cada uno.
//b) En el camino al picnic, la bolsa de De Andrea se rompio. Por lo que tuvieron que poner todo en la bolsa de Martin.
//Realizar el cambio correspondiente para que los cambios esten todos en la bolsa de Martin.
//Calcular el total de productos que llevaron al picnic.

const andreaBolsa = {cerveza:2, sandwich:2, papafrita:1};
const martinBolsa = {torta:1, gaseosa:1, galletitas:1};

console.log(andreaBolsa, martinBolsa);

//accedemos a los nombres de los productos con object.keys
const andreaProducts = object.keys(andreaBolsa);
const martinProducts = object.keys(martinBolsa);

console.log(andreaProduts, martinProducts);

//colocando los productos de Andrea en la bolsa de Martin con object.assign. Encontes primero colocamos adonde va a ir, en este caso en la bolsa de Martin. Y luego el source es decir de donde viene, los productos de Andrea
Object.assign(martinBolsa, andreaBolsa);
console.log(martinBolsa); //se muestra todos los productos en la bolsa de Martin.

//calcular el total de productos. Hay varias maneras.
const productsName = Object.keys(martinBolsa);
console.log(productsName);

let totalProducts = 0;

productsName.forEach((product)=> (totalProducts += MartinBolsa[product]));
console.log(totalProducts);
