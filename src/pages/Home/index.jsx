import { Container, MovieList, Movie } from "./styles.jsx";
import { useState, useEffect } from "react";

const api_key = "api_key=18a04c2ea9f4244298d03e73a8ed901c";
const image_path = `https://image.tmdb.org/t/p/w1280`;

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState([]);

  function getMovies() {
    fetch(`https://api.themoviedb.org/3/movie/popular?${api_key}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <h1>Filmes mais populares</h1>

      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <a href="https://google.com.br">
                <img
                  src={`${image_path + movie.poster_path}`}
                  alt={movie.title}
                />
              </a>
              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;

// Informações do TMDB
// const fetch = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/movie/popular';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzhjNTdkNjBjYWE0MDEwMjM1M2IxZjY0YWU4MWJlYSIsInN1YiI6IjY0YTljYjk1OWM5N2JkMDBjNWY3YzhjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FlcGEtBcNISl6_HuwXM8iYcLPl_IlvzgJOYwxuAui9Y'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
