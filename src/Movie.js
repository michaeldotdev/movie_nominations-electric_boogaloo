import React from 'react';

const Movie = ({movies}) => {
  return (
    <div className="movieDetails">
      <h3 className="title">{movies.Title}</h3>
      <p className="year">{movies.Year}</p>
      <div className="nominationButton">
        <button>Nomination</button>
      </div>
    </div>
  )
}

export default Movie;