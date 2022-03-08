import React from 'react';
import { Row } from 'react-bootstrap';

function Comment({ comment }) {
  const nestedComments = (comment.children || []).map((comment) => {
    return <Comment key={comment.id} comment={comment} />;
  });

  return (
    <div className="ms-4 mt-3">
      <Row className="fw-bold">{comment.author}</Row>
      <Row>{comment.text}</Row>
      {nestedComments}
    </div>
  );
}

export default Comment;
