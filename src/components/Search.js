import React, { useState } from 'react';
import MovieList from './MovieList';


const Search = ({searchingMovies}) => {
  const [searchMovie, setSearchMovies] = useState("");

  function handleChange(e) {
    let searchTerm = e.target.value;
    setSearchMovies(searchTerm);
    searchingMovies(searchTerm)
  }

  function handleSubmit(e) {
    e.preventDefault();
  }


  return (
    <div className="searchFormContainer">
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchMovie} onChange={handleChange}/>
      </form>
      <div className="movieListContainer">
        <MovieList />
      </div>
    </div>
  );
}

export default Search;