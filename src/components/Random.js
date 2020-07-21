import React from 'react';

const Random = (props) => {
  const randomNum = (a,b) => Math.floor(Math.random()*(a-b))+b

  return ( 
    <div className='container'>
      <p>Random value between {props.min} and {props.max}: <strong>{randomNum(props.max, props.min)}</strong></p>
    </div>
  );
}

export default Random;