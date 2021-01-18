import React from 'react';

const NominationsList = ({ nominationArray = [] }) => {
  function removeNomination() {
    const button = document.getElementById('removeButton');
    button.parentElement.remove();

    const index = nominationArray.indexOf(button.parentElement.innerText.slice(0, -6))

    if (index > -1) {
      nominationArray.splice(index, 1)
      return
    }
  }

  return (
    <ul>
      {
        nominationArray.map((nomination, index) => {
          return (
            <li id={nomination}key={index}>
              {nomination}
              <button id="removeButton" onClick={removeNomination}>Remove</button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default NominationsList;