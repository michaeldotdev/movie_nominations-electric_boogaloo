import React, { useState, useEffect } from 'react';
import API_KEY from './config';

import Movie from './Movie';


const App = () => {
  return (
    <div className="App">
      <h1>Movie Nominations</h1>

      <div className="movie">
        <Movie />
      </div>
    </div>
  )
}

export default App;
