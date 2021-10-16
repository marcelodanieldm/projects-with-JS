$(document).ready(function(){
  //load
  $("#datos").load('https://reqres.in/');
  //get y post
  $.get('https://reqres.in/', {page:3}, function(response){
  response.data.forEach((element, index))=>{
       $("#datos").append(<p>element.first_name<p/>);
     });
  });
  var usuario={
        name:"Marcelo",
        site:"elrafa.com",
  };
  $.post('https://reqres.in/api/users', usuario, function(response){
    console.log(response);

});
  $("#formulario").submit(function(){
  
  });
