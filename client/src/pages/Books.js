import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { fade, makeStyles } from '@material-ui/core/styles';
import { flexbox, borders } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}))

let Books = () => {
  let classes = useStyles();
  let [books, setBooks] = useState([])
  let [title, setTitle] = useState('')

  useEffect(() => {
    loadBooks();
  }, [])

  //googleBooks
  // loadBooks = async (res) => {
  //   try {
  //     console.log(res)
  //     this.setState({ books: res.data });

  //deezer
  let loadBooks = async (res) => {
    try {
      console.log(res.data.data)
      setBooks(res.data.data)
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

  let deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  let handleInputChange = event => {
    const { value } = event.target;
    setTitle(value)
  };

  let handleFormSubmit = event => {
    event.preventDefault();
    console.log(title)
    if (title.length > 0) {
      API.googleBooks(title)
        .then(res => loadBooks(res))
        .catch(err => console.log(err));
    }
  };

    return (
      <>
      <Container maxWidth="lg" className="border p-5" borderColor="grey.500">
        <h1 className="text-center">iReact spotify goodies</h1>
      </Container>
       <TextField
       id="outlined-full-width"
       label="Label"
       style={{ margin: 8 }}
       placeholder="Placeholder"
       helperText="Full width!"
       fullWidth
       margin="normal"
       InputLabelProps={{
         shrink: true,
       }}
       variant="outlined"
     />
     <Button variant="contained" color="primary">
  Primary
</Button>
     </>
    );
}

export default Books;


/*
<Input
    value={this.state.title}
    onChange={this.handleInputChange}
    name="title"
    placeholder="Title (required)" />

  <FormBtn onClick={this.handleFormSubmit}>
    Search
  </FormBtn>
<ResultsList>
  {console.log(this.state.books)}
  {this.state.books.length > 0 ? this.state.books.map((book, index) => {
    return (
      <ResultsListItem book={book} key={index} />
    )
  }

  ) : "No Search Found"}

</ResultsList>
*/