// Importación de tipo GiphyRandomResponse para incluir tipado a nuestra
// respuesta HTTP de GIPHY:
import type { GiphyRandomResponse } from "../bases/data/giphy.response"

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY


// Creación de función para dividir responsabilidades (buena practica :) )
const createImageInsideDOM = (url: string) => {
  
  const image = document.createElement('img');
  image.src = url;

  document.body.append(image);
}

// La palabra clave "async" lo convierte en una función asincrona que devuelve
// una Promesa:
const getRandomGifUrl = async(): Promise<string> => {
    
    // Await: Se coloca ante una Promesa para esperar su respuesta:
    const respuesta = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
    );
    
    // TIP: Si la promesa es tipo "any" o "unknown", se puede declarar la
    // variable con el tipo adecuado como se muestra:
    const { data }: GiphyRandomResponse = await respuesta.json();

    return data.images.original.url;
}

getRandomGifUrl().then(url => {

  createImageInsideDOM(url);

}).catch(err => console.log(err))

// TIP: Si solamente se pasan los argumentos hacia otra función, se
// puede simplificar de la siguiente manera:

// getRandomGifUrl().then(createImageInsideDOM);
