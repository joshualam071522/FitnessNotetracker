const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')
const loginRoutes = require('./login-routes');
const signupRoutes = require('./signup-routes');
const workoutRoutes = require('./workout-routes');
const mealRoutes = require('./meal-routes');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/workout', workoutRoutes);
router.use('/meal', mealRoutes);
router.use('/api', apiRoutes);

module.exports = router;