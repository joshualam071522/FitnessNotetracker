const router = require('express').Router();
//* imports index.js file too
const {Workout, User} = require('../../models');


//* creates a new workout
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

//* test insomnia code to check workout and user relationship
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
      } catch (err) {
          res.status(500).json(err);
      };     
  });

//* deletes workout based on id and user id
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