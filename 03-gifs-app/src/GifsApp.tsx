import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { useGifs } from './gifs/hooks/useGifs'

// Idealmente, se genera un componente con el nombre de la misma aplicacion
// Para uso de elementos globales (estilos, routers, etc)

export const GifsApp = () => {
  
  const {gifs, previousTerms, handleSearch, handleTermClicked} = useGifs()

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
      <GifList gifs={gifs} />
    </>
  )
}
