import React from 'react';
import { Col, Row } from 'react-bootstrap';

function StoryItem({ num, data, unixTimeConvert }) {
  return (
    <article className="shadow p-3 mb-3 bg-body rounded color-black text-dark">
      <Row className="">
        <Col md="10" className="d-flex justify-content-start align-items-start">
          {num}.<h2 className="ms-2 fs-4">{data.title}</h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-start align-items-start">
        <Col md="2">
          <p>by: {data.by}</p>
        </Col>
        <Col md="3">
          <p>Date: {unixTimeConvert(data.time)}</p>
        </Col>
        <Col md="2">
          <p>Score: {data.score}</p>
        </Col>
      </Row>
    </article>
  );
}

export default StoryItem;
