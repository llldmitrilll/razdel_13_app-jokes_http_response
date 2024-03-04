import React from "react";
import Joke from "./Joke";
import styles from "./JokeList.module.css"


const JokeList = (props) => {
   return (
      <ul>
         {props.jokes.map((joke, index) => (
            <Joke
               key={joke.id}
               number={index + 1}
               type={joke.type}
               setup={joke.setup}
               punchline={joke.punchline}
            />
            // <p>{joke.id}{`)`}  {joke.type} <br /> {joke.setup} <br /> {joke.punchline}</p>
         ))}
      </ul>
   )
}

export default JokeList;