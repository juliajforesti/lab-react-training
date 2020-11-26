import React from 'react';

const Greetings = (props) => {
  const renderGreeting = (param) => {
    const cases = {
      en: 'Hello',
      es: 'Hola',
      de: 'Hallo',
      fr: 'Bonjour'
    }
    return cases[param]
  }

  return ( 
    <div className='container d-flex align-items-center justify-content-center'>
      <h4> {renderGreeting(props.lang)} {props.children}</h4>
    </div>
  )
}

export default Greetings;