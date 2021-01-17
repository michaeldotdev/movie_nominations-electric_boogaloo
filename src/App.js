import React, { useState, useEffect } from 'react';
import API_KEY from './config';

import Movie from './Movie';


const App = () => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`)
      .then(response => response.json())
    .then(data => setMovies(data))
  }, [])

  
  
  return (
    <div className="App">
      <h1>Movie Nominations</h1>

      <div className="movie">
        <Movie movies={movies}/>
      </div>
    </div>
  )
}

export default App;
