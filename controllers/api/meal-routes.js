const router = require('express').Router();
const Meal = require('../../models/Meal');

//TODO add get routes for user's meals

router.post('/', async (req, res) => {
    try {
        const mealData = await Meal.create({
        title: req.body.title,
        content: req.body.content,
        calories: req.body.calories    
        })
    
        res.status(200).json(mealData)
        
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try{ 
        const mealData = await Meal.findByPk(req.params.id);
        
        if(!mealData) {
            res.status(404).json({message: 'No meal with this id!'});
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
        calories: req.body.calories    
        }, 
        {
            where: {
                id: req.params.id,
            },
        }
    )
        res.status(200).json(updatedMealData);
        
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const mealData = await Meal.destroy({
        title: req.body.title,
        content: req.body.content,
        calories: req.body.calories    
        }, 
        {
            where: {
                id: req.params.id,
            },
        }
    )
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