import './App.css';
import Home from "./pages/home"
import Movies from './pages/movie-list';
import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const site = `https://api.themoviedb.org/3`
  const [movies, setMovies] = useState()
  const [genres, setGenres] = useState()
  const [genre, setGenre] = useState("&with_genres=12")
  const [year, setYear] = useState("&primary_release_year=2022")
  const [rating, setRating] = useState("&vote_average.gte=0")
  const [query, setQuery] = useState(site + `/discover/movie?api_key=2eaf5ad0efdcde9a7b7397301a5cc6e1`)
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=2eaf5ad0efdcde9a7b7397301a5cc6e1&language=en-US`)
      setGenres(request.data.genres)
      return request
    }
    fetchData()
  }, [])

  console.log(genres, "this is genres")
  
  // const config =console.log( `https://api.themoviedb.org/3/configuration?api_key=2eaf5ad0efdcde9a7b7397301a5cc6e1`)
      const getMovie = (event) => {
        event.preventDefault()
        axios.get(query + genre + year + rating).then(e => {
          setMovies(e.data)
        });
      }
      console.log(movies, "btn click")
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Home movies={movies} getMovie={getMovie} genres={genres} genre={genre} 
      setGenre={setGenre} setQuery={setQuery} year={year} setYear={setYear}
      rating={rating} setRating={setRating}
      />
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
