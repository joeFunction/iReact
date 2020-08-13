import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // googleBooks
  googleBooks: function (title) {
    return axios.get("/api/googleBooks/" + title)
  },
  saveArtists: function (artistData) {
    return axios.post("/api/artists", artistData)
  },
  getArtists: function () {
    return axios.get("/api/artists")
  },
  deleteBook: function (artistData) {
    return axios.delete("/api/artist");
  },
};

