function StoryPage({ items, unixTimeConvert }) {
  const story = items.find(
    (item) => item.data.id.toString() === window.location.pathname.slice(1)
  );
  console.log(story);
  return (
    <article className="element">
      <div className="element__text">
        <h1>{story ? story.data.title : ''}</h1>
        <p>{story ? story.data.by : ''}</p>
        <p>{story ? story.data.url : ''}</p>
        <p>{story ? unixTimeConvert(story.data.time) : ''}</p>
      </div>
      <div className="element__comments">
        <p>Total comments: {story.data.kids ? story.data.kids.length : '0'}</p>
      </div>
    </article>
  );
}

export default StoryPage;
