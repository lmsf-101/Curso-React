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
    console.log(`Query : ${query}`);
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
