const router = require("express").Router();
const { Meal } = require('../models');

router.get("/", async (req, res) => {
  try {
    console.log(req.session);
    const mealData = await Meal.findAll({
      where: {user_id: req.session.user_id}
    });
    // console.log(mealData)

    if (!mealData) {
      res.status(404).json({ message: "No meals found with user id!" });
      return;
    }

    const meals = mealData.map((meal) =>
      meal.get({ plain: true }));
    console.log(meals);
    console.log('hello');

    res.render("meal", { meals });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;