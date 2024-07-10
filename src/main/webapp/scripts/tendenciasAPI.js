const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmRiYzIwMzkxMjM4ZGI2YmFhZTY3Y2Y1MGQzNTQ3YyIsInN1YiI6IjY2NTRiZTg2MWEwOGYzODFjOGI3ZGQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8yUNKerCrKpfC38EJCEa5VdyahVzRycIJX9kC9J7oTc'
const API_URL = 'https://api.themoviedb.org/3'

let currentPage = 1

function llamarAPI(page){
  fetch(`${API_URL}/movie/popular?page=${page}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  })
  .then(response => response.json())
  .then(data => actualizarPeliculas(data))
}

// En vez de crear todo, quiero tener lo que tenía antes para que si no llegara a funcionar el request al menos tengo algo para mostrar

function actualizarPeliculas(data){
  const containerPeliculas = document.getElementsByClassName("pelicula")
  // console.log(containerPeliculas[1])
  for(let i = 0; i < 20; i++){
    const pelicula = containerPeliculas[i];
    const titulo = pelicula.querySelector(".tituloPelicula")
    const bannerImg = pelicula.querySelector(".peliculaImg")
    titulo.innerHTML = data.results[i].title;
    titulo.id = data.results[i].id;
    bannerImg.src = `https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}`
  }
}

function cargarPaginaSiguiente(){
  currentPage++
  llamarAPI(currentPage)
}

function cargarPaginaAnterior(){
  currentPage--
  if(currentPage < 1){
    currentPage = 1
    return
  }
  llamarAPI(currentPage)
}

llamarAPI(currentPage)

document.querySelector(".peliculasContainer").addEventListener("click", guardarIdPelicula)

function guardarIdPelicula(event){
  if(event.target.className !== "peliculaLink"){
    return
  }

  const idPelicula = event.target.id
  localStorage.setItem("idPelicula", idPelicula)
}

document.querySelector(".botonSiguiente").addEventListener("click", cargarPaginaSiguiente)
document.querySelector(".botonAnterior").addEventListener("click", cargarPaginaAnterior)