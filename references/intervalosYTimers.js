window.addEventListener('load', function(){

  //timers
  var tiempo=setInterval(function(){
    console.log('set interval ejecutado');
    document.querySelector('h1');
    if(encabezado.style.fontsize=='50px'){
      encabezado.style.fontsize='30px';

    }else{
encabezado.style.fontsize=='50px';
    }
  }, 3000);
});

//setInterval se ejecuta cada x tiempo.
//setTimeOut se ejecuta una vez.
//clearInterval borra el intervalo.
var stop=document.querySelector('#stop');

stop.addEventListener('click', function(){
  alert('se detuvo el intervalo');
  clearInterval(tiempo);
}
