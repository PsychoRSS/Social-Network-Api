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

// Get a single user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({_id: req.params.id}.select("-__v"));

    if(!user)
    res.json(user);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a User
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Edit a User
router.put('/:id', async (req, res) => {
  try {
    const editedUser = await User.findOneAndUpdate(
      {_id: req.params.userId},
      { $set: req.body },
      {new: true}
    );

    res.json(editedUser);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({_id:req.params.userId});

    res.json(deletedUser);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// New Friend
router.post('/:id/friends/:friendid', async (req, res) => {
  try {
    const newFriend = await User.findOneAndUpdate(
      {_id: req.params.friendid},
      {$addToSet: {friends: req.params.friendId}},
      {new: true}
    );

    res.json(newFriend);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


// Delete a friend
router.delete('/:id/friends/:friendid', async (req, res) => {
  try {
    const deletedFriend = await User.findOneAndUpdate(
      {_id: req.params.friendid},
      { $pull: { friends: req.params.friendId}},
      { new: true}

    );

    res.json(deletedFriend);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})
module.exports = router;