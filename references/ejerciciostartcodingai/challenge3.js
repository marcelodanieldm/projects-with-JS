/* 1. Crear un programa donde el usuario ingresa un numero donde sera 
evaluado si es positivo negativo o cero.
*/
const FindNumberType = (number)=>{
let message = "";
const parsedNumber= +number;
  
  if(!parsedNumber) message="El valor ingresado no es un numero";
  
  if(parsedNumber===0){
    message = "El numero ingresado es 0";
  }
    else if(parsedNumber > 0){ message = "El numero ingresado es positivo";
  }                            
    else  message = "El numero ingresado es negativo";
}
return message;
};

const chosenNumber = prompt("Ingresar un numero");
const response = findNumberType(chosenNumber);

alert(message);

/* 2. Ingresar la temperatura y convertirla de grados Celsius a Farenheit
y viceversa      
*/
