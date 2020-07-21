import React from 'react';

const BoxColor = (props) => {
  const {r, g, b} = props;
  let hexaDecimal = '' + ('0' + r.toString(16)).substr(-2)+ ('0' + g.toString(16)).substr(-2)+ ('0' + b.toString(16)).substr(-2)

  return ( 
    <div className='container' style={{backgroundColor:`rgb(${r},${g},${b})`}} >
      <h4>rbg({r},{g},{b})</h4>
      <h4>#{hexaDecimal}</h4>
    </div>
  );
}

export default BoxColor;