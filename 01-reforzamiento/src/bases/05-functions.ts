
// Hay dos formas de generar funciones:

// 1. Mediante la palabra clave `function`

// Con Typescript, se pueden indiciar el tipo de dato esperado en los parametros de la función:

// De igual forma, podemos indicar el tipo de dato que deseamos retornar:
function suma(num1: number, num2: number): number {
  //return `${num1} + ${num2} = ${num1 + num2}`;
  return num1 + num2;
}

// console.log(suma(12, 3));


// 2. Otra forma de generar funciones es mediante el denominado "arrow function" (similar a una funcion anonima)
/*
const resta = (num1: number, num2: number) => {
  return num1 - num2;
}*/

// Podemos hacer la funcion flecha mas concisa, si solamente retorna el valor:

const resta = (num1: number, num2: number) => num1 - num2;

// console.log(resta(10, 3));


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

// console.log({user1, user2});


// 19. Funciones con multiples retornos

// Podemos aplicar las interfaces como tipo de dato retornado:

interface User {
  uid: string,
  password: string
}

function getUser3(): User {
  return {
    uid: "PIX-912",
    password: "RonDamon41"
  }
}

const user3 = getUser3();

// Es decision del desarrollador sobre si decide trabajar con funciones tradicionales o funciones de flecha
// Lo común entre desarrolladores de JavaScript es que utilicen las funciones de flecha

// Una aplicación común para ellos es su uso como callbacks
// Callbacks, en esencia, es una función que es utilizado como argumento a otra función

const numeros: number[] = [2, 4, 6, 8, 10]

// Puedes utilizar funciones tradicionales como callbacks:
numeros.forEach( function(value) {
  console.log({value});
});

// O una funcion flecha para hacerlo más conciso:

numeros.forEach((value) => console.log(value));


// TIP IMPORTANTE: Cuando sea apropiado se puede pasar solamente el nombre de la funcion (sin parentesis) para hacer el callback aún más conciso:

numeros.forEach(console.log) // Aqui, el forEach pasará cada uno de los tres argumentos (value, index, array) hacia console.log, de manera que los imprime en consola
