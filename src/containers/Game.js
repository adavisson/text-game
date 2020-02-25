import React, { useState } from 'react';
import Term from '../components/Term';
const readline = require('readline');

const Game = () => {
  const [life, setLife] = useState(100);

  const startGame = () => {
    console.log("Enter Name: ");
    let name = readline();
    console.log(`Hello ${name}`);
  }

  return (
    <div id="game">
      <h1>Text Game</h1>
      <Term startGame={startGame} />
      <p>Life: {life.toString()}</p>
    </div>
  );
}
 
export default Game;