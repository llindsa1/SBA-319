import express from 'express';
const Post = require ('../models/post.mjs');
const router = express.Router();

//Get posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('userId', 'name');
        res.json(posts);

    } catch (error) {
        res.status(500).json({ error: 'Server Error'});
    }
});

//Post new posts
router.post('/', async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(201).json(newPost);

    } catch (error)  {
        res.status(400).json({error: error.message});
    }
});

//Patch a postById
router.patch('/:id', async (req, res) => {
    try {
        const updatedPost = await  Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(upddatedPost);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

//Delete a postById
router.delete('/:id', async (req, res) => {
try {
await  Post.findByIdAndDelete(req.params.id);
res.status(204).end();
} catch (error) {
    res.status(500).json({error: 'Server Error'});
}
    
});

export default router
