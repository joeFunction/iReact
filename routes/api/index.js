const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./googleBooks");
const artistRoutes = require("./artists");

// Book routes
router.use("/books", bookRoutes);
router.use("/artists", artistRoutes);
router.use("/googleBooks", googleRoutes);

module.exports = router;
