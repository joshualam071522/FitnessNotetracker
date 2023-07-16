const router = require('express').Router();
const User = require('../../models/User');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
        username: req.body.username,
        password: req.body.content,
        })
    
        res.status(200).json(userData)
        
    } catch (err) {
        res.status(500).json(err);
    }
})

  router.delete('/:username', async (req, res) => {
    try {
        const userData = await User.destroy({
        username: req.body.username,
        password: req.body.password   
        }, 
        {
            where: {
                id: req.params.username,
            },
        }
    )
        res.status(200).json(userData);
        
    } catch (err) {
        res.status(500).json(err);
    }
})

