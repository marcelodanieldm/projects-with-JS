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
//el this es para linkear el scope de la clase.

class Persona {
    constructor (firstName, city, job);{
  this.firstName = firstName;
  this.city = city;
  this.job = job;
   }
}

//instanciacion de clase Persona
const Alexis = new Persona("Alexis", "Buenos Aires", "Programador");
const Juan = new Persona("Juan", "Rosario", "QA");;
const Martin = new Persona("Maria", "Ushuaia", "Scrum Master");;
