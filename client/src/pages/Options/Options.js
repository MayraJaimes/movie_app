import React from "react";

import Genre from '../../components/Genre'

const Options = props => {
  console.log('props in Options', props);
  return (
  <li>
    {props.userChoices.map(userChoice => 
      <Genre
        question={userChoice.question}
        key={userChoice.id}
        genre={userChoice.genre}
      />
    )}
  </li>
)};

export default Options;

