'use strict'
var movies={
  title:"Forrest Gump",
  year:"1996",
  country:"USA"
}

var box_movies= document.querySelector("#movies");
var index;
for(index in movies){
  var p=document.createElement('p');
  p.append(movies[index].title +'-'+ movies[index].year);
  box_movies.append(p);
}
