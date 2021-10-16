$(document).ready(function(){
     $("#mostrar").click(function(){
     $(this).hide();
     $("#ocultar").show();
     $("#caja").show();
 });
  $("#ocultar").click(function(){
     $("#caja").hide();
  });
     
});
