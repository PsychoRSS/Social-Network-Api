const router = require('express').Router();
const { Thought } = require('../../models');

// GET all Users
router.get('/', async (req, res) => {
  try {
    const allThought = await Thought.find({});
    res.json(allThought);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one thought 
router.get('/:id', async (req, res) => {
  try {
    const user = await Thought.findOne({_id: req.params.userId});

    if(!user)
    res.json(user);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const allUsers = await Thought.create(req.body);
    res.json(allUsers);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/', async (req, res) => {
  try {
    const editThought = await Thought.findByIdAndUpdate()
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})