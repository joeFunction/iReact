const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");

// Matches with "/api/books"
router.route("/")
  .get(artistsController.findAll)
  .post(artistsController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
