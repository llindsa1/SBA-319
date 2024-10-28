const express = require ('express');
const User = require('../models/user.mjs');
const router =express.Router();

//Get users
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(Users);
    } catch (error) {
        res.status(500).json({ error: 'Server Error'});
    }
});

//Post New User
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.messsage});
    }
});      

//patch userbyId
router.patch('/:id', async (req, res) => {
    try{
        const updatedUser= await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
});

//Delete userbyId
router.delete('/:id', async (req, res) => {
    try {
        await user.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({error: 'Server Error'});
    }
});

module.exports = router;
