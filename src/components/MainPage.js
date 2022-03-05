import StoryItem from './StoryItem';
import { Link } from 'react-router-dom';

function MainPage({ items, unixTimeConvert }) {
  console.log(items.length);
  return (
    <>
      <h1>Hacker news</h1>
      <section>
        {items.length !== 0
          ? items.map((elem) => (
              <Link to={`${elem.data.id}`} key={elem.data.id}>
                <StoryItem data={elem.data} unixTimeConvert={unixTimeConvert} />
              </Link>
            ))
          : ''}
      </section>
    </>
  );
}

export default MainPage;
