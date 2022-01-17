//referencias manipulacion de arrays.

const miArray = ["juan", "pedro", "marcela"];
const firstElement = miArray[0];
console.log(firstElement);

//acceder al ultimo
console.log(miArray[2]);
const lastElement = miArray[miArray.length -1]
console.log(lastElement);

// buscar el indice de un elemento
const elemento = "pedro";
//con metodo indexOf
const index = miArray.indexOf(elemento);
console.log(index);

//reasignacion de elementos
miArray[miArray.indexOf("juan")] = "Martina";

//agregar un elemento al final del array con push, se puede agregar hasta una funcion, cualquier tipo de elemento
miArray.push("jorge");
console.log(miArray);

//remover un elemento del final del array
//pop devuelve el elemento removido
miArray.pop();
console.log(miArray);

//agregar un elemento al principio del array
miArray.unshift("jorge");
console.log(miArray);

//remover un elemento del principio del array
miArray.shift();
console.log(miArray);

//splice remueve elementos del array
miArray.splice(1,2);

//metodos para iterar arrays
const frutas = ["uva","naranja","melon","sandia","manzana"];
console.log(frutas[0]);
console.log(frutas[1];
 
 //iterar sobre un array con un for
 for(let i=0; i<=frutas.length;i++){
       console.log(frutas[i]);
}

//iterar sobre un array con un foreach
frutas.forEach((item) => {
  console.log(item);
});

//con map, esto si devuelve. Este map recibe la funcion
const newArrayWithMap = miArray.map((namme)=>{
`nombre = ${name}`;
 
});

console.log(newArrayWithMap);


            










