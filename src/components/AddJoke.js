import React, { useRef } from "react";

const AddJoke = (props) => {
   const typeRef = useRef('');
   const setupRef = useRef('');
   const punchlineRef = useRef('');

   function submitHandler(event) {
      event.preventDefault()

      const joke = {
         type: typeRef.current.value,
         setup: setupRef.current.value,
         punchline: punchlineRef.current.value
      }

      props.newJoke(joke);
   }

   return (
      <form onSubmit={submitHandler}>
         <div>
            <label htmlFor="type">Type</label>
            <input type={'text'} id="type" ref={typeRef} />
         </div>
         <div>
            <label htmlFor="setup">Setup</label>
            <textarea rows="5" type={'text'} id="setup" ref={setupRef} />
         </div>
         <div>
            <label htmlFor="punchline">Punchline</label>
            <textarea rows="5" type={'text'} id="punchline" ref={punchlineRef} />
         </div>
         <button>Add Joke</button>
      </form>
   );
};

export default AddJoke;