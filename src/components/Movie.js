import React from 'react';

const Movie = ({ movie }) => {
  const { Title, Year, imdbID } = movie
  const link = `https://imdb.com/title/${imdbID}/`

  return (
    <div className="movieDetails">
      <h3 className="title">{Title}</h3>
      <p className="year">{Year}</p>
      <a href={link} className="link">{Title}</a>
    </div>
  )
}

export default Movie;