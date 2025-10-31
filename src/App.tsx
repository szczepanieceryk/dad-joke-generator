import React from 'react';
import JokeGenerator from './layouts/JokeGenerator';

const App = () => {
  return (
    <div className="md:relative p-4 md:p-8 h-screen bg-gray-900 text-white">
      <div className="mb-4 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 max-w-xl max-w-3xl mx-auto w-[350px] md:w-3/4 md:h-[450px] text-center">
        <h1 className="mb-4 text-xl font-bold text-center">🤣 Dad Joke Generator App</h1>
        <JokeGenerator />
      </div>
    </div>
  );
};

export default App;
