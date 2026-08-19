import { useState } from "react";

// EJEMPLO DE UN CUSTOM HOOK, en un archivo independiente

export const useCounter = (initialValue: number = 10) => {

  // Lógica de suma, resta, y reset:
  const [counter, setCounter] = useState(initialValue);


  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleSubtract = () => {
    setCounter((prevState) => prevState - 1);
  }

  const handleReset = () => {
    setCounter(initialValue);
  }

  return {
    // Valores
    counter,

    // Metodos
    handleAdd,
    handleSubtract,
    handleReset
  }
}
