const router = require("express").Router();

//TODO change fitness handlebars template name to "fitness"
//* renders the fitness.handlebars template
router.get("/", async (req, res) => {
  res.render("fitness");
});

module.exports = router;