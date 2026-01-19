// Interface es un componente exclusivo de TypeScript
//
// Permite establecer una estructura formal de un objeto, un "contrato" que se debe cumplir con las propiedades específicas:

// Esto ayuda a los desarrolladores a crear objetos con los tipos de datos apropiados y evitar errores de código más adelante:

interface Person {
  firstName: string;
  lastName: string;
  age: number;

  // Tambien podemos establecer propiedades opcionales mediante el ?
  // De esta forma, el objeto tiene la decision de implementar esta propiedad
  address?: Address;
}

// Podemos agregar interfaces dentro de otra como una forma más concisa de establecer propiedades anidadas
interface Address {
  postalCode: string;
  city: string;
}


const ironman: Person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,

  address: {
    postalCode: 'ABC123',
    city: 'New York',
  }
}

console.log(ironman);
