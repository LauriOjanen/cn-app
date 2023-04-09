import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

  function handleClick() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setJoke(data.value));
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <header>
        <h1>Chuck Norris Jokes</h1>
      </header>
      <main>
        <div className="center">
          <p>{joke}</p>
          <button onClick={handleClick}>New Joke</button>
        </div>
       
      </main>
    </>
  );
}

export default App;
