import React from 'react'
import { mockGifs } from './mock-data/gifs.mock'

// Idealmente, se genera un componente con el nombre de la misma aplicacion
// Para uso de elementos globales (estilos, routers, etc)

export const GifsApp = () => {
  return (
    <>
      {/* Header */}
      <div>
        <h1>Buscador de Gifs</h1>
        <h4>Busca tus Gifs perfectos aqui:</h4>
      </div>


      {/* Search function */}
      <div className='search-container'>
        <input type='text' placeholder='Busca un GIF aqui' />
        <button>Buscar</button>
      </div>

      {/* Historial de busquedas */}
      <div className='history-container'>
        <h2>Historial de Busquedas</h2>
        <ul className='history-list'>
          <li>Mario</li>
          <li>Luigi</li>
          <li>John Doe</li>
        </ul>
      </div>

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
