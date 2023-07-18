import {Container, MovieList, Movie} from "./styles.jsx";
import {useState, useEffect} from 'react'


const api_key= import.meta.env.VITE_API_KEY;
const image_path=`https://image.tmdb.org/t/p/w1280`;

function Home() {
  
  const [movies, setMovies] = useState([]);

  function getMovies(){

    fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
    .then (response => response.json())
    .then (data => setMovies (data.results));
  } 
  
    useEffect(() => {
     getMovies();

  }, []);

    
  return (

    <Container>
      <h1>Filmes mais populares</h1>
     
      <MovieList>

      {movies.map(movie => {
        return (
          <Movie key={movie.id}>
            <a href="https://google.com.br"><img src={`${image_path + movie.poster_path}`} alt={movie.title}/></a>
            <span>{movie.title}</span>
          </Movie>
        )
      })}

      </MovieList>

    </Container>
  
  )
}

export default Home;

