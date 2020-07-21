import React from 'react';

const Greetings = (props) => {
  const renderSwitch = (param) => {
    switch(param){
      case 'de':
        return <h1>Hallo {props.children}</h1>
        break;
      case 'en':
        return <h1>Hello {props.children}</h1>
        break;
      case 'es':
        return <h1>Hola {props.children}</h1>
        break;          
      case 'fr':
        return <h1>Bonjour {props.children}</h1>
        break;
    }
  }

  return ( 
    <div className='container'>
      {renderSwitch(props.lang)}
    </div>
  )
}

export default Greetings;