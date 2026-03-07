import { render, screen } from '@testing-library/react';
import {afterEach, describe, expect, test, vi} from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';


// Aqui se genera una funcion "Mock-espia" que se puede encargar
// de monitorear el estado de una funcion, sin modificar las instrucciones
// dentro de ella

// Esto es muy util para conocer cuantas veces fue llamado la funcion en 
// el componente, que argumentos recibio, el retorno, etc.

const MockItemCounter = vi.fn( (_props: unknown) => {
  return (<div data-testid="ItemCounter"/>);
});

// Creacion de un "Mock" en base de la funcion anterior
vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => MockItemCounter(props),
}));

describe("FirstStepsApp", () => {

  // Dado que cada funcion invoca el componente 'Mock' / Funcion "espia"
  // tres veces, es necesario "resetearlo" para cada prueba
  // De manera que cada prueba sea independiente entre ellos
  afterEach( () => {
      vi.clearAllMocks();
  });

  // Generar y verificar snapshot del componente y su estructura
  test("Should Match Snapshot", () => {

    const { container:con } = render(<FirstStepsApp />);

    expect(con).toMatchSnapshot();

  });

  // Prueba para demostrar un uso sencillo de los "Mocks": Mostrar
  // la cantidad correcta de componentes
  test("Should render the correct number of ItemCounter components", () => {

    render(<FirstStepsApp />);

    // Recuperar todos los componentes ItemCounter por el TestId:
    const numItemCounter = screen.getAllByTestId("ItemCounter");

    // Revisar si son tres componentes demostrados:
    expect(numItemCounter.length).toBe(3);

    screen.debug();

  });

  // NUEVA prueba para verificar con la funcion "espia" y componente "Mock"
  // Para verificar el num de veces que se llamo la funcion / componente
  // y la lista de argumentos enviados
  test("Should render ItemCounter with correct props", () => {

    render(<FirstStepsApp />)

    // Verifica si fue llamado el componente de ItemCounter tres veces
    // exactas
    expect(MockItemCounter).toBeCalledTimes(3);

    /*
      Con la ayuda del componente Mock / funcion espia
      Se verifica si se ha llamado el componente ItemCounter
      con los siguientes argumentos listados:
    */

    expect(MockItemCounter).toHaveBeenCalledWith({
      nombre: 'Nintendo Switch',
      cantidad: 1,
    });

    expect(MockItemCounter).toHaveBeenCalledWith({
      nombre: 'Mario Bros',
      cantidad: 5,
    });

    expect(MockItemCounter).toHaveBeenCalledWith({
      nombre: 'Switch Camera',
      cantidad: 1,
    });
  });

})