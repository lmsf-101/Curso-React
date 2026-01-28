const API_KEY = import.meta.env.VITE_GIPHY_API_KEY

// Fetch API : Administracion de solicitudes HTTP moderna de JS
const solicitud = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
)

// Forma 1: Convertir la respuesta en JSON, para después demostrar la data de
  // GIPHY

/*
solicitud.then((res) => {
  
  res.json().then(data => console.log(data));

}).catch(err => console.error(err))
*/

// Forma 2 más compacta
solicitud.then((res) => res.json())
.then((data) => {
    const imgUrl = data.data.images.original.url;
    console.log(imgUrl);

    const imagen = document.createElement('img');
    imagen.src = imgUrl;

    document.body.append(imagen);
})
.catch(err => console.error(err));
