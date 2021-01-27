import React, { useState } from 'react';
import MovieList from './MovieList';


const Search = ({ searchMovies } ) => {
  const [movieSearchTerm, setMovieSearchTerm] = useState("");

  function handleChange(e) {
    let searchTerm = e.target.value;
    setMovieSearchTerm(searchTerm);
    searchMovies(searchTerm)
  }

  function handleSubmit(e) {
    e.preventDefault();
  }


  return (
    <div className="searchFormContainer">
      <form onSubmit={handleSubmit}>
        <input type="text" value={movieSearchTerm} onChange={handleChange}/>
      </form>
      <div className="movieListContainer">
        <MovieList />
      </div>
    </div>
  );
}

export default Search;