
// Hay dos formas de generar funciones:

// 1. Mediante la palabra clave `function`

// Con Typescript, se pueden indiciar el tipo de dato esperado en los parametros de la función:

// De igual forma, podemos indicar el tipo de dato que deseamos retornar:
function suma(num1: number, num2: number): number {
  //return `${num1} + ${num2} = ${num1 + num2}`;
  return num1 + num2;
}

console.log(suma(12, 3));


// 2. Otra forma de generar funciones es mediante el denominado "arrow function" (similar a una funcion anonima)

const resta = (num1: number, num2: number) => {
  return num1 - num2;
}

console.log(resta(10, 3));


function getUser() {
  return {
    uid: 'ABC-123',
    password: 'MikeSan_91'
  }
}


// EJERCICIO : Convertir getUser() a una funcion flecha:

const getUser2 = () => {
  return {
    uid: "XYZ-345",
    password: "Limbo_12"
  }
}

const user1 = getUser();
const user2 = getUser2();

console.log({user1, user2});
