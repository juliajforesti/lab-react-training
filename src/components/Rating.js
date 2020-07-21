import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Rating = (props) => {
  const number = Math.round(props.children);

  return (
    <div className='rating-card'>
      <h1>{props.title}</h1>
      {[...Array(number)].map((item, idx) => (
        <i key={idx} className="fa fa-star" aria-hidden="true"></i>
      ))}
      {[...Array(5-number)].map((item, idx) => (
        <i key={idx} className="fa fa-star-o" aria-hidden="true"></i>
      ))}
    </div>
  );
};

export default Rating;
