import React, { useState } from 'react';

const LikeButton = (props) => {
  const [state, setState] = useState({ count: 0, color: '#455eb4' });

  const colors = [
    '#455eb4',
    '#b445a2',
    '#45b4a5',
    '#d3984c',
    '#d34c4c',
    '#50d34c',
    '#a14cd3',
  ];

  function addLikeClick() {
    return setState({
      count: (state.count += 1),
      color: colors[state.count % 6],
    });
  }

  return (
    <div className=' like-btn-container container d-flex align-items-center justify-content-center'>
      <button
        onClick={addLikeClick}
        className="like-btn"
        style={{ backgroundColor: `${state.color}` }}
      >
        {state.count} Likes
      </button>
    </div>
  );
};

export default LikeButton;
