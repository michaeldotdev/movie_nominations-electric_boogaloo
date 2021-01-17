import React, { useState} from 'react';

import {fetchMovies} from '../helpers'
import Movie from './Movie';
import MovieList from './MovieList';
import Search from './Search';



const App = () => {
  const [movies, setMovies] = useState([])

  const searchingMovies = e => {
    return fetchMovies(e).then(data => {
      setMovies(data.Search)
      }
    )
  }


  return (
    <div className="App">
      <h1>Movie Nominations</h1>
      <Search searchingMovies={searchingMovies} />
      <MovieList movies={movies}/>

      <div className="movie">
        {/* <Movie movies={movies} /> */}
      </div>
    </div>
  )
}

export default App;
