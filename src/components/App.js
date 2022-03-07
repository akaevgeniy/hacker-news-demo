import { useEffect, useState } from 'react';
import { getNewStories } from '../utils/api';
import MainPage from './MainPage';
import StoryPage from './StoryPage';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getNewStories().then((res) => setItems(res));
  }, []);

  useEffect(() => {
    setItems(JSON.parse(window.localStorage.getItem('items')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  console.log(items);
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

  //Math.round(new Date().item.data.time/1000.0)
  // const listItems = story ? story.map((element) => <li key={element}>{element}</li>) : '';
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Header />
          <Switch>
            <Route exact path="/">
              <MainPage items={items} unixTimeConvert={unixTimeConvert} />
            </Route>
            <Route path="/:id">
              <StoryPage items={items} unixTimeConvert={unixTimeConvert} />
            </Route>
            <Route path="*">
              <p>Not found</p>
            </Route>
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
