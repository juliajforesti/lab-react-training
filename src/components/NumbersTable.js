import React from 'react';

const NumbersTable = (props) => {
  const { limit } = props;
  const numArr = [...Array(limit)];

  return (
    <div className="table-container w-75">
      {numArr.map((item, idx) => {
        if (idx % 2 === 0) {
          return (
            <div
              key={idx}
              className="square"
              style={{
                backgroundColor: 'white',
              }}
            >
              <p>{idx + 1}</p>
            </div>
          );
        }
        return (
          <div
            key={idx}
            className="square"
            style={{
              backgroundColor: 'red',
            }}
          >
            <p>{idx + 1}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
