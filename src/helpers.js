import API_KEY from './config';


export const fetchMovies = e => {
  return fetch(
    `http://www.omdbapi.com/?s=${e}&apikey=${API_KEY}`
  ).then(response => response.json());
}
