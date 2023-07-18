const router = require('express').Router();
//* imports index.js file too
const {Workout, User} = require('../../models');

//TODO add get routes for user's workouts

router.post('/', async (req, res) => {
    
    try {
        console.log(req.session.user_id)
        const newWorkout = await Workout.create({
        title: req.body.title,
        content: req.body.content,
        time: req.body.time,
        user_id: req.session.user_id,
        })
    
        res.status(200).json(newWorkout)
        
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/user', async (req, res) => {
    try{ 
        console.log(req.session);
        const workoutData = await User.findByPk(req.session.user_id, {
            include: [{model: Workout}]
        });
        
        if(!workoutData) {
            res.status(404).json({message: 'No workouts found for this user!'});
            return;
        }

        res.status(200).json(workoutData);
        //TODO code to render handlebars for workout?
        // const workout = workoutData.get({ plain: true });
        // res.render('workout', Workout);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

//TODO information updates successfully, but insomnia gives 500 error
router.put('/:id', async (req, res) => {
    try {
        const updatedWorkoutData = await Workout.update(
        {
        title: req.body.title,
        content: req.body.content,
        time: req.body.time,
        }, 
        {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        }
    )

    if (!workoutData) {
        res.status(404).json({ message: 'No workout found with this id!' });
        return;
    }
        res.status(200).json(updatedWorkoutData);
        
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const workoutData = await Workout.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        }
    )
    if (!workoutData) {
        res.status(404).json({ message: 'No workout found with this id!' });
        return;
    }
        res.status(200).json(workoutData);
        
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;