import React from 'react';

function IdCard(props) {
  // const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className='col-sm-12 col-md-9 col-lg-3' >
      <div className="card m-2" style={{backgroundColor: `${props.bg}`}}>
        <img className="card-img-top"  src={props.picture} alt={props.firstName} />
        <div className="card-body">
          <p className="card-text"><strong>First name:</strong> {props.firstName}</p>
          <p className="card-text"><strong>Last name: </strong>{props.lastName} </p>
          <p className="card-text"><strong>Country: </strong>{props.country} </p>
          <p className="card-text"><strong>Type: </strong>{props.isStudent} </p>

        </div>
      </div>
    </div>
  );
}

export default IdCard;
