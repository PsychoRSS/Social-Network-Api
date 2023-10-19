const router = require('express').Router();
const { User } = require('../models');

// GET all Users
router.get('/api/users', async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findOne({_id: req.params.userId});

    if(!user)
    res.json(user);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/api/users', async (req, res) => {
  try {
    const allUsers = await User.create(req.body);
    res.json(allUsers);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/api/users/:id', async (req, res) => {
  try {
    const allUsers = await User.findOneAndUpdate({_id: req.params.userId});
    res.json(allUsers);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/api/users/:id', async (req, res) => {
  try {
    const allUsers = await User.delete({_id:req.params.userId});
    res.json(allUsers);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});