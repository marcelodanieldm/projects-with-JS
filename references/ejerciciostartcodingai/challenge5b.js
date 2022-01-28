//crear una clase Deportes que reciba el atributo nombre y un metodo que permita mostrar por consola ese nombre.
//Mostrar un metodo que muestre por consola si es un deporte de equipo o individual.

class Sport{
      constructor(name, isTeamSport){
      this.name = name;
      this.isTeamSport;
        
      }
  
  sayName(){
  console.log(`El nombre del deporte es ${this.name}`);
  }
sayIsTeamSport(){
const message = this.isTeamSport 
   ? `$(this.name) es un deporte de equipo`
   : `${this.name} no es un deporte de equipo`;
   console.log(message);
  };
}

const futbol = new Sport('Futbol', true);
futbol.sayName();
futbol.sayIsTeamSport();

