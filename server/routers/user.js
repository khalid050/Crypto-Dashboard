const express = require('express')
const router = new express.Router()
const User = require('../models/user')

//create a new user
router.post('/users', (req, res) => {
    const user = new User(req.body)
  
    user.save()
      .then(() => {
        res.send(user)
      })
      .catch((e) => {
        res.status(400).send(e)
      })
  })
  
  // fetch all users stored in the database
  router.get('/users', (req, res) => {
  
    User.find({})
      .then((users) => {
        res.send(users)
      })
      .catch((e) => {
        res.status(500).send(e)
      })
  })
  
  
  // get a user by id
  router.get('/users/:id', (req, res) => {
    const _id = req.params.id
  
    User.findById(_id).then((user) => {
      if (!user) {
        return res.status(404).send()
      }
  
      res.send(user)
    }).catch((e) => {
      res.status(500).send()
    })
  })
  
  //update a user
  router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
  
    try {
       const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
  
      if (!user) {
        return res.status(404).send()
      }
  
      res.send(user)
  
    } catch (e) {
      res.status(400).send(e)
    }
  })
  
  
  // deleting a user
  router.delete('/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id)
  
      if(!user){
        return res.status(404).send()
      }
      res.send(user)
  
    } catch (e) {
      res.status(500).send(e)
  
    }
  })


    module.exports = router


