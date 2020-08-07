import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { ResultsList, ResultsListItem } from "../components/ResultsList"

class Books extends Component {
  state = {
    books: [],
    title: ""

  };

  componentDidMount() {
    this.loadBooks();
  }
  //googleBooks
  // loadBooks = async (res) => {
  //   try {
  //     console.log(res)
  //     this.setState({ books: res.data });

  //deezer
  loadBooks = async (res) => {
    try {
      console.log(res.data.data)
      this.setState({ books: res.data.data });


    } catch (error) {
      console.log(error);
    }
  };

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.title)
    if (this.state.title.length > 0) {
      API.googleBooks(this.state.title)
        .then(res => this.loadBooks(res))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container  >
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>App Name/Logo</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)" />

              <FormBtn onClick={this.handleFormSubmit}>
                Search
              </FormBtn>
            </form>
          </Col>


        </Row>
        <Row>
          <Col size="md-12">
            <ResultsList>
              {console.log(this.state.books)}
              {this.state.books.length > 0 ? this.state.books.map((book, index) => {
                return (
                  <ResultsListItem book={book} key={index} />
                )
              }

              ) : "No Search Found"}

            </ResultsList>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
