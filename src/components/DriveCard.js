import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  return (
    <div className="drive-card">
      <img className="drive-card-img" src={img} alt="img" />
      <div className="drive-card-info">
        <h4>{name}</h4>
        <div>
          {[...Array(Math.round(rating))].map((item, idx) => (
            <i key={idx} className="fa fa-star" aria-hidden="true"></i>
          ))}
          {[...Array(Math.round(5-rating))].map((item, idx) => (
            <i key={idx} className="fa fa-star-o" aria-hidden="true"></i>
          ))}
        </div>
        <p>
          {car.model}
          {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
