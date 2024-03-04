import React from "react";

const Joke = (props) => {
   return (
      <li>
         <h2>{props.number}{`)`}  {props.type}</h2>
         <div><p>{props.setup}</p></div>
         <div><p>{props.punchline}</p></div>
      </li>
   )
}

export default Joke;