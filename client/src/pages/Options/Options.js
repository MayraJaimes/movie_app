import React from "react";
import { Genre, Genres } from "../../components/GetGenre";

const Options = (props) => (
  <Genres>
    {props.userChoices.map(choice => (
    <Genre
      option={choice}
      key={choice.id}
    />
  ))}
  </Genres>
);

export default Options;


    

