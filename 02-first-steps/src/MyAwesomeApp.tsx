
/* - TIP: Si haces uso de variables constantes o fijas 
    Es más recomendable que lo coloques fuera de las funciones /
    componentes

    Esto con el fin de evitar que React cargue las variables de forma
    innecesaria:
*/

import type { CSSProperties } from "react";
import { renderToPipeableStream } from "react-dom/server";

const firstName = "Miguel";
const lastName = "Dante";

const comidas = ["Manzana", "Bisquet", "Peras", "Aguacate"];

const objeto = {
  "nombre": "objeto",
  tipo: "objeto"
};

const isActive = true;

const miEstilo: CSSProperties = {
  backgroundColor: "#81dba8",
  borderRadius: "20px",
  // TIP: Puedes hacer uso de condiciones para establecer valores:
  color: isActive ? 'blue' : 'red',
}


export function MyAwesomeApp() {
  return (
    <>
      {/* - TIP: Insertar variables en React
            Utilizan llaves {} para introducir variables en la aplicación */}
      <h1> {firstName} </h1>
      <h3> {lastName} </h3>
      
      {/* - TIP: Uso de sintaxis JS 
      Las llaves nos permite ejecutar expresiones de JS
      Por ejemplo podemos utilizar metodos de arreglos como join: */}
      <p> {comidas.join(" - ")} </p>
      
      {/* - OJO : No podemos imprimir un objeto con su nombre tal cual
      - ERROR : Objects are not valid as a React child */}
      {/* <p> {objeto}</p> */}

      {/* Existe una forma de imprimir el objeto: Usando JSON.stringify: */}
      <p> {JSON.stringify(objeto)} </p>


      {/* - TEMA: 40. Uso de propiedades / estilos CSS en React:
      El uso de estilos CSS ocupa el uso de React.CSSProperties */}

      {/* - NOTA: NO ES HTML, sino JSX: Tienen diferentes reglas en cuanto
        a los atributos.
        Aqui, "style" se adminstra mediante un objeto, no un string */}
      <p
        style={miEstilo}
      >
        ¡Este parrafo tiene estilo!
      </p>

    </>
  )

}