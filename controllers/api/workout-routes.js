const router = require('express').Router();
const Workout = require('../../models/workout');

router.post('/', async (req, res) => {
    try {
        const workoutData = await Workout.create({
        title: req.body.title,
        content: req.body.content,
        time: req.body.time    
        })
    
        res.status(200).json(mealData)
        
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try{ 
        const workoutData = await Workout.findByPk(req.params.id);
        
        if(!mealData) {
            res.status(404).json({message: 'No meal with this id!'});
            return;
        }

        res.status(200).json(mealData);
        //TODO code to render handlebars for workout?
        // const meal = workoutData.get({ plain: true });
        // res.render('workout', Workout);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

  router.put('/:id', async (req, res) => {
    try {
        const updatedworkoutData = await Workout.update({
        title: req.body.title,
        content: req.body.content,
        time: req.body.time    
        }, 
        {
            where: {
                id: req.params.id,
            },
        }
    )
        res.status(200).json(updatedWorkoutData);
        
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const workoutData = await Workout.destroy({
        title: req.body.title,
        content: req.body.content,
        time: req.body.time    
        }, 
        {
            where: {
                id: req.params.id,
            },
        }
    )
        res.status(200).json(workoutData);
        
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;

