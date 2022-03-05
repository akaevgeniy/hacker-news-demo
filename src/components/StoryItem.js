import React from 'react';

function StoryItem(props) {
  return (
    <article className="element">
      <div className="element__text">
        <h1>News</h1>
        <p>date</p>
        <p>by</p>
      </div>
      <div className="element__comment">
        {' '}
        <p>Total comments: 0</p>
        <div className="element__comments-three"></div>
      </div>
    </article>
  );
}

export default StoryItem;
