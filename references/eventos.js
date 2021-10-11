
//eventos del raton
var boton = documentQuerySelector('boton');

function cambiarColor(){
  console.log('me cambiaste el color');
  var bg=boton.style.background;
  if(background=='green'){
    boton.style.background='red';
  }else{
    boton.style.background='green';
  }
  return true;
   
}

// click adeventlistener
boton.addEventListener('click',function(){
  cambiarColor();
});

// click adeventlistener con mouseover
boton.addEventListener('mouseover',function(){
  boton.style.background='yellow';
});
