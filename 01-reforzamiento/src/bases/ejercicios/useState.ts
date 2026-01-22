/*
 * Tarea: Implementar useState
 * Crea una función llamada useState. Debe cumplir con los siguientes requisitos:
 *
 *  - La función debe llamarse useState
 *  - Debe retornar un arreglo con dos elementos:
 *    #1 - Un string (el valor inicial)
 *    #2 - Una función anónima de flecha que:
 *      - Recibe un string
 *      - Imprime ese string en consola.
 *  
 *  Ejemplo de uso esperado:
 *    const [name, setName] = useState('Goku');
 *    console.log(name);   -> Goku
 *    setName('Vegeta');   -> Imprime "Vegeta"
 */

function useState(name: string) {
  return [name, (name: string) => console.log(`Hello, ${name}`)] as const;
}

const [name, setName] = useState('Mario');
console.log(name);

setName("Luigi");
