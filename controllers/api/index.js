const router = require("express").Router();

const postRoutes = require("./post-routes.js");

router.use("/post", postRoutes);

const userRoutes = require("./user-routes");

router.use("/users", userRoutes);

module.exports = router;
