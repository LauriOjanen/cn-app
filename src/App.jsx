import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);

  function handleClick() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setJoke(data.value));
  }

  function handleYesClick() {
    setYesCount(yesCount + 1);
  }

  function handleNoClick() {
    setNoCount(noCount + 1);
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
          <div className='joke'>
            <p>{joke}</p>
          </div>

          <button className="new-joke-button" onClick={handleClick}>New Joke</button>

          <div className="button-container">
            <button className="yes-button" onClick={handleYesClick}>Yes ({yesCount})</button>
            <button className="no-button" onClick={handleNoClick}>No ({noCount})</button>
          </div>
         
        </div>
      </main>
    </>
  );
}

export default App;
