import React from 'react';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const cardNumbers = (num) => {
    return '**** **** **** ' + num.substring(12, 16);
  };
  return (
    <div
      className="credit-card"
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
    >
      <div className="card-img">
        {type === 'Visa' ? (
          <img style={{ width: '4rem' }} src="img/visa.png" alt="Visa" />
        ) : (
          <img
            style={{ width: '4rem' }}
            src="img/master-card.svg"
            alt="Master-card"
          />
        )}
      </div>
      <p>{cardNumbers(number)}</p>
      <p>
        Exipres {expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth}
        /{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
