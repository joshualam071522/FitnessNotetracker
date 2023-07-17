const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')
const loginRoutes = require('./login-routes');
const signupRoutes = require('./signup-routes');
const fitnessRoutes = require('./fitness-routes');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/fitness', fitnessRoutes);
router.use('/api', apiRoutes);

module.exports = router;