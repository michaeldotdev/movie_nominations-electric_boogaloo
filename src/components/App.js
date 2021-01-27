import React, {useReducer} from 'react';

import Search from './Search';
import MovieList from './MovieList';
import {fetchMovies} from '../helpers'


const initialState = {
  isLoading: true,
  movies: [],
  error: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "searchMovieRequest":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "searchMovieSuccess":
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
      };
    case "searchMovieFail":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const searchMovies = movieName => {
    dispatch({
      type: "searchMovieRequest"
    })

    return fetchMovies(movieName).then(data => {
     if (data.Response === 'True') {
          dispatch({
            type: "searchMovieSuccess",
            payload: data.Search,
          });
        } else {
          dispatch({
            type: "searchMovieFail",
            error: data.Error
          })
      }
    })
  }
  
  return (
    <div className="App">
      <h1>Movie Nominations</h1>
      <Search searchMovies={searchMovies} />
      <MovieList movies={state.movies}/>
    </div>
  )
}

export default App;
