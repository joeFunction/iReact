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


/////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import Container from '@material-ui/core/Container';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import { flexbox, borders } from '@material-ui/system';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//   title: {
//     flexGrow: 1,
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   }
// }))

// const useStylesCard = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     maxWidth: '300px'
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   content: {
//     flex: '1 0 auto',
//   },
//   cover: {
//     width: 151,
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1),
//   },
//   playIcon: {
//     height: 38,
//     width: 38,
//   },
// }));

// let Books = () => {
//   let classes = useStyles();
//   let classesCard = useStylesCard();
//   let [books, setBooks] = useState([])
//   let [title, setTitle] = useState('')

//   useEffect(() => {
//     loadBooks();
//   }, [])

  //deezer
  // let loadBooks = async (res) => {
  //   try {
  //     console.log(res.data.data)
  //     setBooks(res.data.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

//   let deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

//   let handleInputChange = event => {
//     const { value } = event.target;
//     setTitle(value)
//   };

//   let handleFormSubmit = event => {
//     event.preventDefault();
//     console.log(title)
//     if (title.length > 0) {
//       API.googleBooks(title)
//         .then(res => loadBooks(res))
//         .catch(err => console.log(err));
//     }
//   };

//   render() {
//     return (
//       <Container  >
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>App Name/Logo</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 value={this.state.title}
//                 onChange={this.handleInputChange}
//                 name="title"
//                 placeholder="Title (required)" />

//               <FormBtn onClick={this.handleFormSubmit}>
//                 Search
//               </FormBtn>
//             </form>
//           </Col>

//         </Row>
//         <Row>
//           <Col size="md-12">
//             <ResultsList>
//               {console.log(this.state.books)}
//               {this.state.books.length > 0 ? this.state.books.map((book, index) => {
//                 return (
//                   <ResultsListItem book={book} key={index} />
//                 )
//               }

//               ) : "No Search Found"}

//             </ResultsList>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

//     return (
//       <>
//       <Container maxWidth="lg" className="border p-5" borderColor="grey.500">
//         <h1 className="text-center">iReact spotify goodies</h1>
//       </Container>
//        <TextField
//        id="outlined-full-width"
//        label="Label"
//        style={{ margin: 8 }}
//        placeholder="Placeholder"
//        helperText="Full width!"
//        fullWidth
//        margin="normal"
//        InputLabelProps={{
//          shrink: true,
//        }}
//        variant="outlined"
//      />
//      <Button variant="contained" color="primary">
//   Primary
// </Button>
// <Card className={classesCard.root}>
//       <div className={classesCard.details}>
//         <CardContent className={classesCard.content}>
//           <Typography component="h5" variant="h5">
//             i React
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary">
//             Michael Jackson
//           </Typography>
//         </CardContent>

//       </div>
//       <CardMedia
//         className={classesCard.cover}
//         image="https://e.snmc.io/i/300/w/f57ff9ae483244ece19eeb107718abf9/4791444"
//         title="Live from space album cover"
//       />
//     </Card>
//     <Card className={classesCard.root}>
//       <div className={classesCard.details}>
//         <CardContent className={classesCard.content}>
//           <Typography component="h5" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary">
//             Mac Miller
//           </Typography>
//         </CardContent>

//       </div>
//       <CardMedia
//         className={classesCard.cover}
//         image="https://e.snmc.io/i/300/w/f57ff9ae483244ece19eeb107718abf9/4791444"
//         title="Live from space album cover"
//       />
//     </Card>
//     <Card className={classesCard.root}>
//       <div className={classesCard.details}>
//         <CardContent className={classesCard.content}>
//           <Typography component="h5" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary">
//             Mac Miller
//           </Typography>
//         </CardContent>

//       </div>
//       <CardMedia
//         className={classesCard.cover}
//         image="https://e.snmc.io/i/300/w/f57ff9ae483244ece19eeb107718abf9/4791444"
//         title="Live from space album cover"
//       />
//     </Card>

//      </>
//     );
// 

// export default Books;

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