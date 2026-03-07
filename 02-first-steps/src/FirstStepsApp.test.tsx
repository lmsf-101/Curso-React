import { render, screen } from '@testing-library/react';
import {describe, expect, test, vi} from 'vitest';
import { FirstStepsApp } from './FirstStepsApp';

// Realizar un "Mock" de ItemCounter
// Simula un componente con el fin de hacer las pruebas mas faciles de manejar

// Cuando alguien llame a este componente, se debe regresar lo siguiente
// En vez del componente real
vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: () => <div data-testid="ItemCounter" />,
}));


describe("FirstStepsApp", () => {

  // Generar y verificar snapshot del componente y su estructura
  test("Should Match Snapshot", () => {

    const { container:con } = render(<FirstStepsApp />);

    expect(con).toMatchSnapshot();

  })

  // Prueba para demostrar un uso sencillo de los "Mocks": Mostrar
  // la cantidad correcta de componentes
  test("Should render the correct number of ItemCounter components", () => {

    render(<FirstStepsApp />);

    // Recuperar todos los componentes ItemCounter por el TestId:
    const numItemCounter = screen.getAllByTestId("ItemCounter");

    // Revisar si son tres componentes demostrados:
    expect(numItemCounter.length).toBe(3);

    screen.debug();

  })

})