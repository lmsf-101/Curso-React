import { fireEvent, render, screen } from "@testing-library/react";
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
  
  test("Should increase count by 1 when button is pressed", () => {
    
    render(<ItemCounter nombre={'Test item'} cantidad={1} />);

    const [buttonAdd] = screen.getAllByRole("button");

    // Para disparar un evento, usa fireEvent
    fireEvent.click(buttonAdd);

    // Una vez disparado el evento, verificar si se realizaron los cambios
    // En este caso, verificar que el contador haya cambiado a 2
    expect(screen.getByText("2")).toBeDefined();

    
  })


  test("Should decrease count by 1 when the minus button is pressed", () => {
    // Quantity = 5
    const quantity = 5;
    
    render(<ItemCounter nombre={'Test item'} cantidad={quantity} />);

    const [, buttonSubtract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubtract);

    expect(screen.getByText(quantity-1)).toBeDefined();
    
  })

  test("Should NOT decrease count when the minus button is pressed, and quantity is 1", () => {
    render(<ItemCounter nombre={'Test item'} cantidad={1} />);

    const [, buttonSubtract] = screen.getAllByRole("button");

    fireEvent.click(buttonSubtract);

    expect(screen.getByText("1")).toBeDefined();
    
  })

})