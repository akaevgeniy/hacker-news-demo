import React from 'react';
import { Col, Row } from 'react-bootstrap';

function StoryItem({ num, data, unixTimeConvert }) {
  return (
    <article className="">
      <div className="shadow p-3 mb-5 bg-body rounded color-black text-dark">
        <Row className="">
          <Col
            md="10"
            className="d-flex justify-content-start align-items-start"
          >
            {num}.<h2 className="ms-2 fs-4">{data.title}</h2>
          </Col>
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
