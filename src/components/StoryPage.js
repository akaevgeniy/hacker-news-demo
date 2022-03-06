function StoryPage({ items, unixTimeConvert }) {
  const story = items.find(
    (item) => item.data.id.toString() === window.location.pathname.slice(1)
  );
  console.log(story);
  return (
    <article className="element">
      <div className="element__text">
        <h1>{items.length !== 0 ? story.data.title : ''}</h1>
        <p>{items.length !== 0 ? story.data.by : ''}</p>
        <p>{items.length !== 0 ? story.data.url : ''}</p>
        <p>{items.length !== 0 ? unixTimeConvert(story.data.time) : ''}</p>
      </div>
      <div className="element__comments">
        <p>
          Total comments:{' '}
          {items.length !== 0 && story.data.kids ? story.data.kids.length : '0'}
        </p>
      </div>
    </article>
  );
}

export default StoryPage;
