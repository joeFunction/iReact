import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { fade, makeStyles } from '@material-ui/core/styles';
import { flexbox, borders } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
}))

const useStylesInput = makeStyles(theme => ({
  root: {
      "& .MuiOutlinedInput-input": {
          color: "#007bff",
          transition: "0.3s ease-in-out",
      },
      "& .MuiInputLabel-root": {
          color: "#007bff",
          transition: "0.3s ease-in-out",
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "#007bff",
          transition: "0.3s ease-in-out",
      },
  }
}))

const useStylesCard = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

let Books = () => {
  let classes = useStyles();
  let classesCard = useStylesCard();
  let classesInput = useStylesInput();


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
      <Container maxWidth="lg" className=" p-5 text-center" borderColor="grey.500">
        <img src="logo.png" class="img-fluid" style={{ width: "250px" }} />
      </Container>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <TextField
          id="outlined-full-width"
          className={classesInput.root}
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
          </div>
          <div className="col-4 d-flex ">
          <Button variant="contained" color="primary" className = "align-self-center mb-3">
            Primary
    </Button>
          </div>
        </div>
      </div>
      
      
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-5">
            <Card className={classesCard.root}>
              <div className={classesCard.details}>
                <CardContent className={classesCard.content}>
                  <Typography component="h5" variant="h5">
                    i React
          </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Michael Jackson
          </Typography>
                </CardContent>

              </div>
              <CardMedia
                className={classesCard.cover}
                image="https://e.snmc.io/i/300/w/f57ff9ae483244ece19eeb107718abf9/4791444"
                title="Live from space album cover"
              />
            </Card>
          </div>
        </div>
      </div>
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