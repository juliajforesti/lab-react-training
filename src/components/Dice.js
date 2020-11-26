import React, { useState } from 'react';

const Dice = (props) => {
  const dicePaths = [
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice3.png',
    '/img/dice4.png',
    '/img/dice5.png',
    '/img/dice6.png',
  ];
  let randomIdx = Math.floor(Math.random() * 6)

  const [state, setState] = useState({
    dicePath: dicePaths[randomIdx],
  });

  const throwDice = () => {
    return setState({
      dicePath: '/img/dice-empty.png',
    }, setTimeout(() => {
      setState({
        dicePath: dicePaths[randomIdx],
      })
    }, 1000))
  }

  return (
    <div className="dice-container ml-5">
      <img onClick={throwDice} className="dice-img" src={state.dicePath} alt="" />
      <p className='mt-5'>Click on the dice roll :) </p>
    </div>
  );
};

export default Dice;
