import React from 'react';
import { Col, Row } from 'react-bootstrap';

function StoryItem({ data, unixTimeConvert }) {
  return (
    <article className="">
      <div className="">
        <Row className="">
          <h3>{data.title}</h3>
        </Row>
        <Row>
          <Col md="3">
            <p>by: {data.by}</p>
          </Col>
          <Col md="3">
            <p>Date: {unixTimeConvert(data.time)}</p>
          </Col>
          <Col md="2">
            <p>Score: {data.score}</p>
          </Col>
        </Row>
      </div>
    </article>
  );
}

export default StoryItem;
