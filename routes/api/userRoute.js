const router = require('express').Router();
const { User } = require('../../models');

// GET all Users
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({_id: req.params.userId});

    if(!user)
    res.json(user);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const allUsers = await User.create(req.body);
    res.json(allUsers);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const allUsers = await User.findOneAndUpdate({_id: req.params.userId});
    res.json(allUsers);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const allUsers = await User.delete({_id:req.params.userId});
    res.json(allUsers);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;