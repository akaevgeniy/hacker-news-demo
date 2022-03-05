import './App.css';
import { useEffect, useState } from 'react';
import { getNewStories } from '../utils/api';

function App() {
  const [items, setItems] = useState();

  useEffect(() => {
    getNewStories().then((res) => setItems(res));
  }, []);

  function unixTimeConvert(time) {
    const datePost = new Date(time * 1000);
    const res = `${datePost.getDate().toString()}/${(
      datePost.getMonth() + 1
    ).toString()}/${datePost.getFullYear().toString()} ${datePost
      .getHours()
      .toString()}:${datePost.getMinutes().toString()}`;
    return res;
  }

  //getStories(story[0]);
  console.log(items);
  // console.log(story);
  //Math.round(new Date().item.data.time/1000.0)
  // const listItems = story ? story.map((element) => <li key={element}>{element}</li>) : '';
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hacker News</h1>
        <section>
          <ul>
            {items
              ? items.map((item) => (
                  <li key={item.data.id}>
                    {item.data.title}
                    <p>{item.data.by}</p>
                    <p>{item.data.score}</p>
                    <p>{unixTimeConvert(item.data.time)}</p>
                  </li>
                ))
              : ''}
          </ul>
        </section>
      </header>
    </div>
  );
}

export default App;
