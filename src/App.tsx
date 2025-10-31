import React from 'react';
import JokeGenerator from './layouts/JokeGenerator';

const App = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center">🤣 Dad Joke Generator App</h1>
      <JokeGenerator />
    </div>
  );
};

export default App;
