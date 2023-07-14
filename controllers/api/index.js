const router = require('express').Router();

const mealRoutes = require('./meal-routes.js');
const workoutRoutes = require('./workout-routes.js')

router.use('/meal', mealRoutes);
router.use('/workout', workoutRoutes);

module.exports = router;