const router = require('express').Router();

//TODO add handlebars template that renders homepage
router.get('/', async (req, res) => {
    
    res.render('homepage', {loggedIn: req.session.loggedIn});
  });

router.post("/logout", (req, res) => {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  });

module.exports = router;
