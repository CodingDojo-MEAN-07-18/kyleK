const express = require('express');
const Pet = require('../models/pet')

const router = express.Router();

router.post('', (req, res, next) => {
  const pet = new Pet({
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    skill1: req.body.skill1,
    skill2: req.body.skill2,
    skill3: req.body.skill3,
    likes: 0,
  });
  pet.save().then(createdPet => {
    res.status(201).json({
      message: 'Pet added successfully',
      postId: createdPet._id
    });
  });
});

router.put('/edit/:id', (req, res, next) => {
  const pet = new Pet({
    _id: req.body.id,
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    skill1: req.body.skill1,
    skill2: req.body.skill2,
    skill3: req.body.skill3,
    likes: 0,
  })
  Pet.updateOne({_id: req.params.id}, pet).then(result => {
    res.status(200).json({message: 'Update successful!'})
  })
})

router.get('', (req, res, next) => {
  Pet.find().then(documents => {
    res.status(200).json({
      message: 'Pets fetched successfully!',
      pets: documents
    })
  })
})

router.get('/:id', (req, res, next) => {
  Pet.findById(req.params.id).then(pet => {
    if (pet) {
      res.status(200).json(pet);
    } else {
      res.status(404).json({message: 'Pet not found!'})
    }
  })
})

router.delete('/:id', (req, res, next) => {
  Pet.deleteOne({_id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Pet deleted!"})
  })
})

module.exports = router;
