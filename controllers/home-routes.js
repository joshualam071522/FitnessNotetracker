const router = require('express').Router();

//TODO add handlebars template that renders homepage
 router.get('/', async (req, res) => {
    
   res.render('homepage'); 
});

module.exports = router;
