import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Books from "../../pages/Books";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function ResultsList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function ResultsListItem({
  book, index
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={book.volumeInfo.imageLinks.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{book.volumeInfo.title}</h3>
            <p>Authors: {book.volumeInfo.authors}</p>
            <p>Description: {book.volumeInfo.description}</p>
            <a rel="noreferrer noopener" target="_blank" href={book.volumeInfo.infoLink}>
              Go to books
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
