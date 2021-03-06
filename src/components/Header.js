import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="py-5 sticky-top bg-white">
      <Row>
        <Col
          md="10"
          className="d-flex justify-content-start align-items-center"
        >
          <Link to="/">
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/b/bf/Hackernews_logo.png"
              height={25}
              className="me-2"
            />
          </Link>

          <h1>HACKER NEWS demo</h1>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
