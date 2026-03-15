import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'

// Idealmente, se genera un componente con el nombre de la misma aplicacion
// Para uso de elementos globales (estilos, routers, etc)

export const GifsApp = () => {
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
      <SearchBar placeholder='Busca tus GIFS aqui'/>

      {/* Historial de busquedas */}
      {/* PreviousSearches */}
      <PreviousSearches items={['Mario', 'Luigi', 'Goku']} />


      {/* GIFS */}
      <div className='gifs-container'>
          {
            mockGifs.map( (gif) => (
              <div key={gif.id} className='gif-card'>
                <img src={ gif.url } alt={ gif.title } />
                <h3>{ gif.title }</h3>
                <p>
                  { gif.width } x { gif.height } (1.5 mb)
                </p>
              </div>
            ))
          }
      </div>
    </>
  )
}
