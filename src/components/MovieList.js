import React, {useState} from 'react';
//initialized movies to be empty array at the start so it is not undefined
import NominationsList from './NominationsList'

const MovieList = ({ movies = [] }) => {
  const [nominationArray, setNominationArray] = useState([]);
  const [disableButton, setDisableButton] = useState(false);


  function addNomination(e) {
    let element = e.target.parentNode.innerText.slice(0, -8);

    if (nominationArray.length !== 5) {
      setNominationArray(nominationArray => [...nominationArray, element])
    } else if(nominationArray.length === 5) {
      window.confirm('There are 5 nominations')
    }
  }

  function checkButton(e) {
    let element = e.target.parentNode.innerText.slice(0, -8);
    const index = nominationArray.indexOf(element);
    
    if (index > -1) {
      setDisableButton(true)
    }
  }

  function addAndCheck(e) {
    addNomination(e);
    checkButton(e);
  }

  return (
    <React.Fragment>
      <ul id="list">
        {
          movies.map(movie => {
            const link = `https://imdb.com/title/${movie.imdbID}/`
            return (
                <li key={movie.imdbID} id={movie.imdbID}>
                  <a href={link} target="_blank" rel="noopener noreferrer">{movie.Title}<span> ({movie.Year})</span></a>
                <button id="nominateButton" disabled={disableButton} onClick={addAndCheck}>Nominate</button>
                </li>
            )
          })
        }
      </ul>
      <NominationsList nominationArray={nominationArray}/>
    </React.Fragment>
  )
}

export default MovieList;
