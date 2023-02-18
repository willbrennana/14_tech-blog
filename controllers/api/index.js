const router = require("express").Router();

const postRoutes = require("./post-routes.js");
const userRoutes = require("./user-routes.js");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
