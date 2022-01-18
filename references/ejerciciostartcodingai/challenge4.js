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

//filter permite filtrar por parametro. Devuelve un nuevo array con los elementos encontrados

const namesArray = [
 "Juan",
 "Maria",
 "Simon",
 "Rosa",
 "Maria"
 ];

const filteredArray= namesArray.filter((name)=> name==="Juan)";                                       
console.log(filteredArray);

//find devuelve el primer valor que cumpla la condicion
const existingElement= namesArray.find((name)=> name==="Juan)";                                       
console.log(existingElement);

//sort ordena alfabeticamente, lo mismo para numeros
const orderedArray= namesArray.sort();
console.log(orderedArray);
//invertir el orden de sort al reves, lo mismo para numeros
console.log(orderedArray.reverse());

//reduce: 
const numbers = [10, 20, 30, 40];
cons total = numbers.reduce((acumulador, valorActual)=>{
console.log("acumulador", acumulador);
console.log("valor actual", valorActual);
 
 console.log("aca termina la iteracion");
 return acumulador+ valorActual;
}, 0);

console.log(total);
},x;

//manera mas facil en relacion a lo anterior con reduce
const total = numbers.reduce(
   (acumulador, valorActual)=> acumulador + valorActual,
 0
);

console.log(total);


//Hacer una list de invitaados en este orden: Ana, Gisela, Eugenia, Ignacio, Lorena, Evelina, Yesica, Mario
//1 Informar por consola el numero de invitados
//2 Informar por consola el nombre del ultimo invitado
//3 Agregar a Pedro a la lista
//4 Un rato antes del comienzo de la fiesta, Evelina avisa que no puede ir. Generar una lista con los invitados que confirmaron su asistencia.
//5 Por cada invitado, asignarle un numero de orden en la lista.
                            







            










