const router = require("express").Router();

//* renders the signup.handlebars template
router.get("/", async (req, res) => {
  res.render("signup", { loggedIn: req.session.loggedIn });
});

module.exports = router;
