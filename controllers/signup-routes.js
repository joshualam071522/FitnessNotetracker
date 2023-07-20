const router = require("express").Router();

//* renders the signup.handlebars template
router.get("/", async (req, res) => {
  res.render("signup", { loggedIn: req.session.loggedIn });
});

// router.get("/hello", async (req, res) => {
//   console.log("Hello bob");
//   res.status(200).end();
// });

module.exports = router;
