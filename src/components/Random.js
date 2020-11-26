import React from 'react';


const Random = (props) => {

  const randomNum = (a, b) => {
    return Math.floor(Math.random() * (a - b)) + b;
  }
  // const randomNum = Math.floor(Math.random() * (props.max - props.min)) + props.min;

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <p>
        Random value between {props.min} and {props.max}:

        <strong>{ randomNum(props.max, props.min) }</strong>
      </p>
    </div>
  );
};

export default Random;
