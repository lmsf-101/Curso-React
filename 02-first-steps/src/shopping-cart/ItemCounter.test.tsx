import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {

  test('Should render with default values', () => {
      
    const name = "Control";
    
    render(<ItemCounter nombre={name} />);

    // Verificar si el texto o elemento "Test" se encuentra definido   
    expect(screen.getByText(name)).toBeDefined()

    // Verificar si el texto no es nulo:
    expect(screen.getByText(name)).not.toBeNull()
  })

  test('Should render with custom quantity', () => {
      
    const name = "Test";
    const quantity = 10;
    
    render(<ItemCounter nombre={name} cantidad={quantity} />);

    // Verificar si la cantidad esta definida
    // OJO: En este caso, Vitest se encarga de transformar el valor
    // numero de "quantity" y lo transforma en texto   
    expect(screen.getByText(quantity)).toBeDefined()

  })

})