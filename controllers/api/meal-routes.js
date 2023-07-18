const router = require('express').Router();
//* imports index.js file too
const {Meal, User} = require('../../models');

router.post('/', async (req, res) => {
    
    try {
        console.log(req.session.user_id)
        const newMeal = await Meal.create({
        title: req.body.title,
        content: req.body.content,
        calories: req.body.calories,
        user_id: req.session.user_id,
        })
    
        res.status(200).json(newMeal)
        
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/user', async (req, res) => {
    try{ 
        console.log(req.session);
        const mealData = await User.findByPk(req.session.user_id, {
            include: [{model: Meal}]
        });
        
        if(!mealData) {
            res.status(404).json({message: 'No meals found with user id!'});
            return;
        }

        res.status(200).json(mealData);
        //TODO code to render handlebars for meal?
        // const meal = mealData.get({ plain: true });
        // res.render('meal', Meal);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

router.put('/:id', async (req, res) => {
    try {
        const updatedMealData = await Meal.update({
        
        title: req.body.title,
        content: req.body.content,
        calories: req.body.calories,
        }, 
        {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        }
    )

    if (!updatedMealData) {
        res.status(404).json({ message: 'No meal found with this id!' });
        return;
    }
        res.status(200).json(updatedMealData);
        
    } catch (err) {
        console.log(err);
        res.status(500).json("oops, something went wrong!");
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const mealData = await Meal.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        }
    )
    if (!mealData) {
        res.status(404).json({ message: 'No meals found for this user' });
        return;
    }
        res.status(200).json(mealData);
        
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;


//* test insomnia api
// {
// 	"title": "monday",
// 	"content": "rice and chicken",
// 	"calories": 300
// }