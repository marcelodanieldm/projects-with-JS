'use strict'

window.addEventListener('load' ,function(){
console.log('DOM cargado');

var formulario= document.querySelector(#formulario);
var box= document.querySelector(#box);
box.style.display='none';

formulario.addEventListener('submit', function(){
  console.log('evento submit capturado');

  var nombre= document.querySelector(#nombre).value;
  var apellido= document.querySelector(#apellido).value;
  var edad= document.querySelector(#edad).value;
  box.dashed.display='block';

  var datos_user=[nombre, apellido, edad];
  var indice=

  for(indice in datos_user){
    var parrafo=document.createElement("p");
    parrafo.append(datos_user[indice]);
    box.append(parrafo);

  }

  var parrafo=document.createElement("p");
  parrafo.append(nombre);
  parrafo.append(apellido);
  parrafo.append(edad);
  
  
   });
});

