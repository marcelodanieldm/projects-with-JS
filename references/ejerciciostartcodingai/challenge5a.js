const person = {
firstName : "Juan",
city : "Buenos Aires",
job : "developer"  
};

//metodos de manipulacion de objetos

//acceder a un elemento
console.log(person.firstName);

//modificar elemento
person.city = "Cordoba"
console.log(person.city);

//object.key();
const keys = object.keys(person);
console.log(person);

//forin itera los elementos del objeto
for(const key in person){
if(Object.hasOwnProperty.call(person, key)){
  const element = object[key];
  console.log(person[key]);
  }
}

//Object.values()
const values = Object.values();
console.log(values);

//object.assign() asigna valores de un objeto a otro objeto
const developer = {
       skills:"Javascript",       
};

Object.assing(person, developer);
console.log(person);

