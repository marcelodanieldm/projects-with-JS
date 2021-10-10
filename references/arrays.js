/*
1. Pedir 6 numeros por pantalla y meterlos en un array.
2. Mostrar el array entero en la página.
3. Ordenarlo y mostrarlo.
4. Invertir su orden y mostrarlo.
5. Mostrar cuantos elementos tiene el array.
6. Busqueda de un valor introducido por el usuario, que nos
diga si lo encuentra y en qué indice. 
Se valora el uso de funciones.
*/

function mostrarArray(elementos, textoCustom=""){
    document.write("<h1>Contenido del array"+textoCustom+" </h1>");
    elementos.forEach((elemento,index) => {
        document.write(elemento);
        
    });
}

var numeros = [];
//se piden seis numeros
for(var i=0;i<=5;i++){
    //numeros[i]=parseInt(prompt("Introduce un numero:", 0));
    numeros.push(parseInt(prompt("Introduce un número:")));
}
//mostrar en el cuerpo de la pagina
/*document.write("<h1>Contenido del array</h1>");
numeros.forEach((numero, index)=>{
    document.write("<strong>+numero+</strong>");
});
*/
mostrarArray(numeros);
//Mostrar array en la consola.
console.log(numeros);

//ordenar y mostrar
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, 'ordenado');

//invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'revertido');

//contar elementros
document.write("el array tiene "+numeros.length+"elementos");

//Busqueda
var busqueda=parseInt(prompt("Busca un numero",0));
var busqueda=numeros.findIndex(busqueda);

if(buscado && buscado != -1){
    "encontrado"
}else{
    "no encontrado"
}
