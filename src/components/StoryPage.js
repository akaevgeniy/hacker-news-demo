import { Col, Container, Row, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { getComments } from '../utils/api';
import { useEffect, useState } from 'react';
import Comment from './Comment';

function StoryPage({ items, unixTimeConvert }) {
  const [comments, setComments] = useState([]);
  const [story, setStory] = useState();

  useEffect(() => {
    getCommentsToObj(window.location.pathname.slice(1));
  }, [items]);

  async function getCommentsToObj(id) {
    const finding = items.find((item) => item.data.id.toString() === id);
    await setStory(finding);

    await getComments(id)
      .then((res) => setComments(res.data.children))
      .catch((err) => console.log(err));
  }

  const history = useHistory();
  console.log(comments);
  return (
    <Container className="">
      <Row className="">
        <h1>{items.length !== 0 && story ? story.data.title : ''}</h1>
        <p>by: {items.length !== 0 && story ? story.data.by : ''}</p>
        <p>URL: {items.length !== 0 && story ? story.data.url : ''}</p>
        <p>
          Date:{' '}
          {items.length !== 0 && story ? unixTimeConvert(story.data.time) : ''}
        </p>
      </Row>
      <Row className="">
        <p>
          Total comments:{' '}
          {items.length !== 0 && comments.length !== 0 ? comments.length : '0'}
        </p>
        <div>
          {items.length !== 0 && comments.length !== 0 ? (
            comments.map((kid, i) => <Comment key={kid.id} comment={kid} />)
          ) : (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
      </Row>
      <Button variant="dark" className="my-5" onClick={history.goBack}>
        Go back
      </Button>
    </Container>
  );
}

export default StoryPage;
