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


// Create a new Thought
router.post('/', async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);

    const userThought = await User.findOneAndUpdate(
      { _id: req.body.userId},
      { $push: {thoughts: newThought._id} },
      {new: true}
    ) 
    res.json(userThought);
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Update a Thought
router.put('/', async (req, res) => {
  try {
    const editThought = await Thought.findByIdAndUpdate(
      {_id:req.params.thoughtId},
      { $set: req.body },
      {new: true}
    ) 
      await editThought.save();
    res.json(editThought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Delete a Thought
router.delete('/:id',async (req, res) => {
 try {
  const deletedThought = Thought.deleteOne({_id:req.params.thoughtId})

  res.json(deletedThought)
 } catch (err) {
  console.log(err);
  res.status(500).json(err);
 }
})


//  Create a reaction
router.post('/:thoughtId/reaction', async (req, res) => {
  try {
    const newReaction = Thought.findOneAndUpdate(
      { _id: req.body.thoughtId},
      { $addToSet: {reactions: req.body} },
      {new: true, runValidators:true}
    );

    res.json(newReaction)
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})


router.delete('/:thoughtId/reaction', async (req, res) =>{
  try {
    const deletedReaction = Thought.findOneAndDelete(
      { _id: req.body.thoughtId},
      { $pull: {reactions: {reactionId: req.params.reactionId}} },
      {new: true, runValidators:true}
    );

    res.json(deletedReaction);
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})
module.exports = router;
