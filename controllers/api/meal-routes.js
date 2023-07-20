const router = require("express").Router();
//* imports index.js file too
const { Meal, User } = require("../../models");

//* creates new meal
router.post('/', async (req, res) => {
  try {
      const newMeal = await Meal.create({
      title: req.body.title,
      content: req.body.content,
      calories: req.body.calories,
      user_id: req.session.user_id,
      })

      console.log(newMeal)
      res.status(200).json(newMeal)

  } catch (err) {
      res.status(500).json(err);
  }
})

//* test insomnia code to check meal and user relationship.
router.get("/user", async (req, res) => {
  try {
    console.log(req.session);
    const mealData = await User.findByPk(req.session.user_id, {
      include: [{ model: Meal }],
    });

    if (!mealData) {
      res.status(404).json({ message: "No meals found with user id!" });
      return;
    }

    res.status(200).json(mealData);
    res.render("meal");
  } catch (err) {
    res.status(500).json(err);
  }
});


//* deletes meal based on id and user id
router.delete("/:id", async (req, res) => {
  try {
    const mealData = await Meal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!mealData) {
      res.status(404).json({ message: "No meals found for this user" });
      return;
    }
    res.status(200).json(mealData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
