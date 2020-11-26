import React from 'react';

function IdCard2(props) {
  console.log(props)
  return(
    <div>
      <h3>Name: {props.firstName} </h3>
      <p>Lastname: {props.lastName} </p>
      <p>Gender: </p>
      <p>height:</p>
      <p>birth:</p>
    </div>
  )
}

export default IdCard2;