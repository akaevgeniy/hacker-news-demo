import StoryItem from './StoryItem';
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Spinner } from 'react-bootstrap';

function MainPage({ loader, items, unixTimeConvert }) {
  return (
    <>
      <Row>
        {!loader ? (
          <Col className="d-flex justify-content-center">
            {' '}
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        ) : (
          items.map((elem, i) => (
            <Col key={elem.data.id} md="10">
              {' '}
              <Link
                className="text-decoration-none color-#000"
                to={`${elem.data.id}`}
                key={elem.data.id}
              >
                <StoryItem
                  num={i + 1}
                  data={elem.data}
                  unixTimeConvert={unixTimeConvert}
                />
              </Link>
            </Col>
          ))
        )}
      </Row>
    </>
  );
}
MainPage = React.memo(MainPage);
export default MainPage;
