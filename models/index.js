const User = require('./user');
const Meal = require('./meal');
const Workout = require('./workout')

User.hasMany(Meal, Workout, {
    foreignKey: 'User_id',
    onDelete: 'CASCADE',
})

Meal.belongsTo(User, {
    foreignKey: 'user_id',
})

Workout.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Meal, Workout };