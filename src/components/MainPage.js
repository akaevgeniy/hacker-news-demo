import StoryItem from './StoryItem';
import { Link } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';

function MainPage({ items, unixTimeConvert }) {
  console.log(items.length);
  return (
    <>
      <Container>
        <header className="my-5">
          <Row>
            <Col
              md="10"
              className="d-flex justify-content-start align-items-center"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/b/bf/Hackernews_logo.png"
                height={30}
                className="me-2"
              />
              <h1>HACKER NEWS demo</h1>
            </Col>
          </Row>
        </header>

        <Row>
          {' '}
          {items.length !== 0
            ? items.map((elem) => (
                <Col key={elem.data.id} md="10">
                  {' '}
                  <Link
                    className="text-decoration-none color-#000"
                    to={`${elem.data.id}`}
                    key={elem.data.id}
                  >
                    <StoryItem
                      data={elem.data}
                      unixTimeConvert={unixTimeConvert}
                    />
                  </Link>
                </Col>
              ))
            : ''}
        </Row>
      </Container>
    </>
  );
}

export default MainPage;
