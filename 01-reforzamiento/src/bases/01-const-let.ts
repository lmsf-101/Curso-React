// Creacion de variables

// Es buena practica indicar siempre las variables como constantes, al menos que haya una buena razón para incluir variables modificables mediante `let`:

const firstName: string = 'Mike';
const lastName = 'Sanchez';

// Al asignar una variable mediante let, Typescript se encargará de inferir el tipo de dato que solamente se debe asignar a esta variable de aqui en adelante:
let diceNumber = 5

// Si se intenta cambiar el tipo de dato, Typescript lo marcará como error:
// diceNumber = '3';

const containsC = lastName.includes('c');


console.log({containsC, diceNumber, firstName, lastName});

