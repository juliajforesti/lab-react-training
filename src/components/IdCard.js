import React from 'react';

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className='card-container' >
      <div>
        <img src={picture} alt={firstName} />
      </div>
      <div>
        <p>First name:{firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender} </p>
        <p>Height: {height} </p>
        <p>Birth: {birth.toDateString()} </p>
      </div>
    </div>
  );
};

export default IdCard;
