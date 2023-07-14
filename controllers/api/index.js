const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const mealRoutes = require('./meal-routes.js');
const workoutRoutes = require('./workout-routes.js');

router.use('/user', userRoutes);
router.use('/meal', mealRoutes);
router.use('/workout', workoutRoutes);

module.exports = router;