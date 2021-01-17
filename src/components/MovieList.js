import React from 'react';

//initialized movies to be empty array at the start so it is not undefined
const MovieList = ({ movies = [] }) => {
  return (
    <ul>
      {
        movies.map(movie => {
          const link = `https://imdb.com/title/${movie.imdbID}/`
          return (
            <li key={movie.imdbID}>
              <a href={link} target="_blank" rel="noopener noreferrer">{movie.Title}</a>
              <button>nominate</button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default MovieList;