import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Books from "../../pages/Books";

export function ResultsList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function ResultsListItem({
  book, index
}) {
  return (
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={book.picture} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{book.name}</h3>
          <a target="_blank" href={book.link}>Bio</a>
        </Col>
      </Row>
    </Container>
  );
}

// <li className="list-group-item">
    //   <Container>
    //     <Row>
    //       <Col size="xs-4 sm-2">
    //         <Thumbnail src={book.volumeInfo.imageLinks.thumbnail} />
    //       </Col>
    //       <Col size="xs-8 sm-9">
    //         <h3>{book.volumeInfo.title}</h3>
    //         <p>Authors: {book.volumeInfo.authors}</p>
    //         <p>Description: {book.volumeInfo.description}</p>
    //         <a rel="noreferrer noopener" target="_blank" href={book.volumeInfo.infoLink}>
    //           Go to books
    //         </a>
    //       </Col>
    //     </Row>
    //   </Container>
    // </li>
