import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function StoryPage({ items, unixTimeConvert }) {
  const story = items.find(
    (item) => item.data.id.toString() === window.location.pathname.slice(1)
  );
  const history = useHistory();
  console.log(story);
  return (
    <Container className="">
      <Row className="">
        <h1>{items.length !== 0 ? story.data.title : ''}</h1>
        <p>by: {items.length !== 0 ? story.data.by : ''}</p>
        <p>URL: {items.length !== 0 ? story.data.url : ''}</p>
        <p>
          Date: {items.length !== 0 ? unixTimeConvert(story.data.time) : ''}
        </p>
      </Row>
      <Row className="">
        <p>
          Total comments:{' '}
          {items.length !== 0 && story.data.kids ? story.data.kids.length : '0'}
        </p>
        <div>
          {items.length !== 0 && story.data.kids
            ? story.data.kids.map((kid) => <p key={kid}>{kid}</p>)
            : ''}
        </div>
      </Row>
      <Button variant="dark" onClick={history.goBack}>
        Go back
      </Button>
    </Container>
  );
}

export default StoryPage;
