const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/books"
router.route("/:title")
  .get(googleController.findByTitle)
   

// // Matches with "/api/books/:id"
// router.route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
