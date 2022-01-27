//objetos es una coleccion de valores desordenada. Asi se almacena la data en los objetos: {key:value}
// declaracion de objetos en js 
const literalObject = {firstName:"Juan",
                      job:"developer"
                      };
console.log(literalObject);

//otra forma
const normalObject = new Object();
console.log(normalObject);
normalObject.firstName ="Juan";

//se usa mas la primer forma de construccion de objeto. Ahora agregando valores
literalObject.favouriteColor = "Blue";
console.log(literalObject.job);

//-------------------------------------
//Se crea la clase Persona. Con tres parametros. El metodo constructor es lo que permite definir la estructura de la clase. Recibe tres datos: nombre, ciudad y trabajo. 
//genera propiedades a traves de estos datos.
//el this es para linkear el scope de la clase. En este caso en la instanciacion de Alexis, Juan y Martin

class Persona {
    constructor (firstName, city, job);{
  this.firstName = firstName;
  this.city = city;
  this.job = job;
    }     
      saludar(){
      console.log(`Hola soy ${this.firstName}`);  //creacion de un metodo dentro de la clase, se pueden hacer varias cosas.
      }
   }


//instanciacion de clase Persona
const Alexis = new Persona("Alexis", "Buenos Aires", "Programador");
const Juan = new Persona("Juan", "Rosario", "QA");;
const Martin = new Persona("Maria", "Ushuaia", "Scrum Master");;
console.log(Alexis, Juan, Martin):

//llamar al metodo con el objeto Juan
console.log(Juan.saludar());

//----------------------------
//herencia. Extension de subclass a partir de una clase principal
class Animal{
  constructor(name, age) {
  this.name = name;
  this.age = age;
}
  speak(){
  console.log(`${this.name} hace un ruido`);
  }
}

//con extend modifico el metodo de la clase.
class Dog extends Animal{
    speak(){
     console.log(`$(this.name) ladra`);
      this.age = age;
    }
     sayAge(){
     console.log(`$(this.name) tiene $(this.age) de edad`);
     }
  }
} 

const dog = new Dog("Rulo", 5);
dog.speak();
dog.sayAge();



