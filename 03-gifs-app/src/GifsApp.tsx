import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { useState } from 'react'

// Idealmente, se genera un componente con el nombre de la misma aplicacion
// Para uso de elementos globales (estilos, routers, etc)

export const GifsApp = () => {
  /* Uso de Hooks para administrar el historial de busquedas realizadas */
  const [previousTerms, setPreviousTerms] = useState(['mario'])

  // Ejemplo de como podemos enviar funciones entre componentes (padre y hijo)
  // En este caso, mandar esta funcion hacia PreviousSearches:
  const handleTermClicked = (term: string) => {
    console.log( { term } )
  };
  
  // Como practica, es importante nombrar "handle" a funciones
  // cuando administramos valores durante un evento / accion
  // en los componentes
  const handleSearch = (query: string) => {
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
  }

  return (
    <>


      {/* Para mayor organizacion de nuestro proyecto, separamos cada
      componente de la aplicacion */}

      {/* Header */}
      <CustomHeader title='App de Gifs' 
      subtitle='Bienvenido a la App de Gifs' 
      />

      {/* Search function */}
      {/* SearchBar */}
      <SearchBar placeholder='Busca tus GIFS aqui' onQuery={ handleSearch }/>

      {/* Historial de busquedas */}
      {/* PreviousSearches */}
      <PreviousSearches items={previousTerms} onItemClick={handleTermClicked} />

      {/* GIFS */}
      {/* GifList: Props => gifs: Gif[] */}
      <GifList gifs={mockGifs} />
    </>
  )
}
