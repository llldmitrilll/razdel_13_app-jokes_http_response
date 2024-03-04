import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import AddJoke from './components/AddJoke';
import JokeList from './components/JokeList';

function App() {

  const [jokes, setJoke] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchJokesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('https://react-course-http-f59d2-default-rtdb.firebaseio.com/jokes.json');
      if (!response.ok) {
        throw new Error("Something went wrong...");
      }
      const data = await response.json();
      console.log(data);
      const loadedJokes = [];

      for (const key in data) {
        loadedJokes.push({
          id: key,
          type: data[key].type,
          setup: data[key].setup,
          punchline: data[key].punchline,
        })
      }

      setJoke(loadedJokes);
    }
    catch (err) { setError(err.message); }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchJokesHandler()
  }, [fetchJokesHandler])

  async function addJokeHandler(joke) {
    // const response = 
    await fetch('https://react-course-http-f59d2-default-rtdb.firebaseio.com/jokes.json', {
      method: "POST",
      body: JSON.stringify(joke),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const data = await response.json();

  }

  let content = <p>Jokes is not Loading</p>

  if (jokes !== null && jokes !== undefined && jokes.length > 0) content = <JokeList jokes={jokes} />;
  if (error) content = <p>{error}</p>;
  if (isLoading) content = <p>Is Jokes loading ...</p>


  return (
    <React.Fragment>
      <section>
        <AddJoke newJoke={addJokeHandler} />
        <button onClick={fetchJokesHandler}>Fetch Jokes</button>
      </section>
      {content}
      {/* {!isLoading && jokes.length > 0 && <JokeList jokes={jokes} />}
      {!isLoading && jokes.length === 0 && !error && <p>Jokes is not Loading</p>}
      {isLoading && <p>Is Jokes loading ...</p>}
      {!isLoading && error && <p>{error}</p>} */}
    </React.Fragment>
  );
}

export default App;
