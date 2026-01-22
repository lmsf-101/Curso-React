const characterNames = ['Goku', 'Vegeta', 'Trunks'];

// Para la desestructuración de arreglos, se usa los corchetes:
const [p1, p2, p3] = characterNames;

// NOTA: Aqui, a diferencia de los objetos, el orden en que se desestructura
// el arreglo es importante. La variable de p1 tendrá el valor de "Goku", dado
// que es el primer elemento del arreglo:

console.log({p1, p2, p3});

// Ejercicio de desestructuración de arreglo (conseguir solamente Trunks):
// Para escoger un elemento aparte del primero, se pueden saltar los primeros
// elementos colocando solamente una coma, como se ve a continuación: 
const [, , trunks] = characterNames;

console.log({trunks});

// Si regresamos un arreglo con diferentes tipos de datos:
const returnArrayFn1 = () => {
  return ['ABC', 123]
}

// TypeScript denomina a las variables de desetructuracion como "string|number"
// Puede que sea string o un number
const [letters, numbers] = returnArrayFn1();

// Al intentar realizar una función / operacion apropiada para un tipo de dato
// pero no para el otro, TypeScript se quejará:
console.log(letters + 100);

// En cambio, SI esta seguro sobre que datos se van a regresar en el arreglo, se
// puede utilizar "as const":
const returnArrayFn2 = () => {
  return ['ABC', 123] as const;
}

// Ahora, las variables tendrán el valor de "ABC" y "123", respectivamente:
const [letras, numeros] = returnArrayFn2();

