const router = require('express').Router();


router.get('/', async (req, res) => {
    //* pass in loggedIn variable to homepage.handlebars
    res.render('homepage', {loggedIn: req.session.loggedIn});
  });

  
router.post("/logout", (req, res) => {
    req.session.destroy(() => {
      res.redirect("/");
    });
  });

module.exports = router;
