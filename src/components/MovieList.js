import React from 'react';
import Movie from './Movie'


const MovieList = ({movies}) => {
  return (
    <div className="moviesListContainer">
      <ul>
        {
          movies.map(movie => {
            return (
              <li key={movie.imdbID}>
                <Movie key={`${movie.imdbID}-${movie.Title}`} movie={movie}/>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}


export default MovieList;