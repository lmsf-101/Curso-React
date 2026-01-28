// Importación de tipo GiphyRandomResponse para incluir tipado a nuestra
// respuesta HTTP de GIPHY:
import type { GiphyRandomResponse } from "../bases/data/giphy.response"

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY

// Fetch API : Administracion de solicitudes HTTP moderna de JS
const solicitud = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
)

// Creación de función para dividir responsabilidades (buena practica :) )
const createImageInsideDOM = (url: string) => {
  
  const image = document.createElement('img');
  image.src = url;

  document.body.append(image);
}

solicitud.then((res) => res.json())
.then(({data}: GiphyRandomResponse) => {
    const imgUrl = data.images.original.url;
    createImageInsideDOM(imgUrl);
})
.catch(err => console.error(err));
