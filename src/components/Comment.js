import React from 'react';
import { Row } from 'react-bootstrap';
import { Markup } from 'interweave';

function Comment({ comment }) {
  const nestedComments = (comment.children || []).map((comment) => {
    return <Comment key={comment.id} comment={comment} />;
  });

  return (
    <div className="ms-4 mt-2">
      <Row className="fw-bold ms-1">{comment.author}</Row>
      <Row className="p-0">
        <Markup content={comment.text} />
      </Row>
      {nestedComments}
    </div>
  );
}

export default Comment;
