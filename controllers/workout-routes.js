const router = require("express").Router();
const { Workout } = require('../models');

router.get("/", async (req, res) => {
  try {
    console.log(req.session);
    const workoutData = await Workout.findAll({
      where: {user_id: req.session.user_id}
    });

    if (!workoutData) {
      res.status(404).json({ message: "No workouts found with user id!" });
      return;
    }

    const workouts = workoutData.map((workout) =>
      workout.get({ plain: true }));
    console.log(workoutData);
    console.log('hello');

    res.render("workout", { workouts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    if (err.message == 'WHERE parameter "user_id" has invalid "undefined" value') {
      res.render("workout", { loggedIn: req.session.loggedIn });
    }
    else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;