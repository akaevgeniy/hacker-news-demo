import React from 'react';

function StoryItem({ data, unixTimeConvert }) {
  return (
    <article className="element">
      <div className="element__text">
        <h1>{data.title}</h1>
        <p>{data.by}</p>
        <p>{data.score}</p>
        <p>{unixTimeConvert(data.time)}</p>
      </div>
    </article>
  );
}

export default StoryItem;
