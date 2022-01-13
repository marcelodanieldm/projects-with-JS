/* 1. Crear un programa donde el usuario ingresa un numero donde sera 
evaluado si es positivo negativo o cero.
*/
const FindNumberType = (number)=>{
let message = "";
const parsedNumber= +number;
  
  if(!parsedNumber && parsedNumber !==0) message="El valor ingresado no es un numero";
  return message;
  
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
const convertTemperature = (temperature, target)=>{
  const parsedTemp = +temperature;
  const parsedTarget = +target.toLowerCase();
  
  if(!parsedTemp && parsedTemp !==0){
    alert("el valor ingresado no es valido");
    return;
  }
  
  if(parsedTarget === "celsius"){
    return ((parsedTemp - 32)*5)/9;
    else if(parsedTarget === "farenheit"){
      return (parsedTemp *9)/5 + 32;
    
    }else{
    alert("el formato ingresado no es valido");
      return;
    }
  
  };
  const temperature = prompt("Ingresa la temperatura");
  const target = prompt("Ingresa a que unidad de medida queres convertir");
  const response = convertTemperature(temperature, target);
  
