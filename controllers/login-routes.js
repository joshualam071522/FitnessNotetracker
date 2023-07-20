const router = require('express').Router();

//* renders the login.handlebars template
router.get('/', async (req, res) => {
    
    res.render('login', {loggedIn: req.session.loggedIn});
  });

module.exports = router;
