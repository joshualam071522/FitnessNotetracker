const router = require("express").Router();
const { Meal } = require('../models');

//* retrieves all meals related to user id
router.get("/", async (req, res) => {
  try {
    console.log(req.session);
    const mealData = await Meal.findAll({
      where: {user_id: req.session.user_id}
    });

    if (!mealData) {
      res.status(404).json({ message: "No meals found with user id!" });
      return;
    }

    const meals = mealData.map((meal) =>
      meal.get({ plain: true }));
    console.log(meals);
    console.log('hello');

    res.render("meal", { meals, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    //* conditional that renders a not logged in scenario
    if (err.message == 'WHERE parameter "user_id" has invalid "undefined" value') {
      res.render("meal", { loggedIn: req.session.loggedIn });
    }
    else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;