import express from 'express';
const comment = require ('../models/comment.mjs');
const router = express.Router();

//Get comments
router.get('/', async (req, res) => {
    try {
        const comments = await comment.find().populate('userId', 'name');
        res.json(comments);

    } catch (error) {
        res.status(500).json({error: 'Server Error'});
    
    }
});

//Post comments
router.post('/', async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        await newComment.save();
        res.status(201).json(newComment);

    } catch (error) {
        res.status(400).json({ error: error.message});
    } 
});

//Patch comments
router.patch('/id:', async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedComment);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

//Delete Comments
router.delete('/:id', async (req, res) =>{
    try {
        const updatedComment = await Comment.findByIdAndDelete(req.params.id);
        res.status(204).end();

    } catch (error) {
        res.status(500).json({ error: 'Server Error'});
    }
});

export default router