
const ironman = {
  firstName: "Mike",
  lastName: "Morales",
  age: 45,

  address: {
    postalCode: 'ABC123',
    city: 'New York',
  }
}

// APUNTA AL MISMO ESPACIO EN MEMORIA (Problema común):
// const spiderman = ironman;

// En cambio, se tienen las sig. soluciones
// Se puede usar el operador "spread" (...) para hacer una "copia" del objeto
// Sin embargo, solamente se realiza una copia superficial: Si existen objetos anidados, son susceptibles a mutaciones accidentales:
// const spiderman = {...ironman};

// Existe "structuredClone" que clona el objeto "a profunidad" (deep-clone)
const spiderman = structuredClone(ironman);

spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 22;
spiderman.address.postalCode = 'XYZ941';


console.log(ironman, spiderman);
