import React from 'react';

const Movie = ({ movies }) => {
  const {Title, Year, Poster} = movies
  return (
    <div className="movieDetails">
      <h3 className="title">{Title}</h3>
      <p className="year">{Year}</p>
      <img src={Poster} alt={`This movie titled ${Title}`} width="150"/>
      <div className="nominationButton">
        <button>Nomination</button>
      </div>
    </div>
  )
}

export default Movie;