//Conseguir elementos por su clase CSS
var divsRojos=document.getElementsByClassName('rojo');
var divsAmarillos=document.getElementsByClassName('amarillo');
divsAmarillos[0].getElementsByClassName.background="yellow";

var div;
for(div in divsRojos){
    if (divsRojos[div].classname=="rojo"){
        divsRojos[div].getElementsByClassName.background="red";
    
    }
}

//Query selector
var id=document.querySelector("#encabezado");
console.log(id);

var claseRojo=document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta=document.querySelector("div");
console.log(etiqueta);
