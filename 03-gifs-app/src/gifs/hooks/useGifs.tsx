import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {
  
  const [gifs, setGifs] = useState<Gif[]>([])

  /* Uso de Hooks para administrar el historial de busquedas realizadas */
  const [previousTerms, setPreviousTerms] = useState<string[]>([])

  // Ejemplo de como podemos enviar funciones entre componentes (padre y hijo)
  // En este caso, mandar esta funcion hacia PreviousSearches:
  const handleTermClicked = (term: string) => {
    console.log( { term } )
  };
  
  // Como practica, es importante nombrar "handle" a funciones
  // cuando administramos valores durante un evento / accion
  // en los componentes
  const handleSearch = async (query: string) => {
    // TAREA: Ver busquedas previas
    console.log(`Query : ${query}`);
    
    // 1. Convertir el query a minúsculas y eliminar espacios en blanco
    query = query.toLowerCase().trim();

    // 2. Validar que el query no esté vacío
    // 3. Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
    if (query.length === 0 || previousTerms.includes(query)) return;

    // 4. Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
    setPreviousTerms( (prev) => {
      return [query, ...prev].slice(0, 8)
    });

    const gifs = await getGifsByQuery(query);

    setGifs(gifs)
  }

  return {
    gifs,
    previousTerms,

    handleSearch,
    handleTermClicked,
  }
}
