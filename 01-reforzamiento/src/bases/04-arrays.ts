// Esta es la forma recomendada para establecer un arreglo en Typescript
// Siempre intenta definir el tipo de dato que debe ser introducido en el arreglo
// Evita lo más que puedas que Typescript lo infiera de forma automática, al menos de que tengas una buena razón de hacerlo
const myArray: number[] = [1, 2, 3, 4, 5, 6];

// Si se desea que el arreglo acepte diferentes tipos de datos, utiliza la sintaxis de (|)
// const myArray: (number|string)[] = [1, 2, "Hola"]

// De forma similar a los objetos, podemos copiar el arreglo mediante el operador spread para una copia superficial:
const myArray2 = [...myArray];

// ...o structuredClone para hacer una copia profunda:
// const myArray2 = structuredClone(myArray)

console.log(myArray2);

myArray2.push(7);
myArray2.push(8);

console.log({myArray, myArray2});


