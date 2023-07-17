const router = require('express').Router();

//* renders the login.handlebars template
router.get('/', async (req, res) => {
    
    res.render('login');
  });

module.exports = router;
