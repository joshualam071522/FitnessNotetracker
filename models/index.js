const User = require('./User');
const Meal = require('./Meal');
const Workout = require('./workout')

User.hasMany(Meal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})


Meal.belongsTo(User, {
    foreignKey: 'user_id',
})

Workout.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Meal, Workout };