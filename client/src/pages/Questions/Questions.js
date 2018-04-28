import React from "react";
import { Link } from "react-router-dom";
import Genre from '../../components/Genre/Genre'

const Questions = props => {
  console.log('props in Options', props);
  return (
  <li>
    {props.userChoices.map(userChoice => 
      <Link to={"/movies/" + userChoice.genre}>
      <Genre
        question={userChoice.question}
        key={userChoice.id}
        genre={userChoice.genre}
      />
      </Link>
    )}
  </li>
)};

export default Questions;

