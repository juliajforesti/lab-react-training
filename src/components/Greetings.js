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
    // switch(param){
    //   case 'de':
    //     return <h1>Hallo {props.children}</h1>
    //     break;
    //   case 'en':
    //     return <h1>Hello {props.children}</h1>
    //     break;
    //   case 'es':
    //     return <h1>Hola {props.children}</h1>
    //     break;          
    //   case 'fr':
    //     return <h1>Bonjour {props.children}</h1>
    //     break;
    // }
  }

  return ( 
    <div className='container'>
      <h4> {renderGreeting(props.lang)} {props.children}</h4>
    </div>
  )
}

export default Greetings;