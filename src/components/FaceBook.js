import React, { useState, useEffect } from 'react';
import profilesList from '../data/berlin.json';
import IdCard from './IdCard';

const FaceBook = (props) => {
  const countries = [...new Set(profilesList.map((item) => item.country))]

  const [state, setState] = useState({
    profiles: [...profilesList],
  });

  const handleClick = (e) => {
    let targetCountry = e.currentTarget.value;

    const selected = profilesList.map((item) => {
      return item.country === targetCountry
        ? {
            ...item,
            bg: '#455eb4',
          }
        : { ...item };
    });
    setState({ ...state, profiles: [...selected] });
  };

  useEffect(() => {
    console.log(countries);
  }, [state]);

  return (
    <div className="facebook-container w-75">
      {countries.sort().map((country, idx) => (
        <button
          onClick={(e) => handleClick(e)}
          key={idx}
          className={`country-btn btn btn-outline-primary btn-sm m-1 `}
          value={country}
          // style={{backgroundColor: `${state.buttonSelected ? country.bg : 'blue'}`}}
        >
          {country}
        </button>
      ))}

      <div className="row">
        {state.profiles.map((person, idx) => (
          <IdCard
            lastName={person.lastName}
            firstName={person.firstName}
            country={person.country}
            picture={person.img}
            isStudent={person.isStudent ? 'Student' : 'Teacher'}
            key={idx}
            bg={person.bg ? person.bg : '#fff'}
          />
        ))}
      </div>
    </div>
  );
};

export default FaceBook;
