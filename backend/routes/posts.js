const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

// Create new post
router.post("/write", async (req, res) => {
    try {
        const newPost = new Post(req.body)
        const savedPost = await newPost.save();


        return res.status(200).json(savedPost);
    } catch (error) {
        return res.status(500).json(error);
    }
})

// Get one post content using author name and post title
router.get("/:author/:title", async (req, res) => {
    try {
      const post = await Post.findOne(
        { author: req.body.author, 
        title: req.body.title });
  
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
  
      return res.status(200).json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  });

//Update post
// Update post
router.put("/:author/:title", async (req, res) => {
  try {
    // const author = req.params.author;
    // const title = req.params.title;

    // Find the post by author and title
    const post = await Post.findOneAndUpdate(
      { author: req.params.author, 
        title:req.params.title }, 
      );

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const updatedPost = await Post.findOneAndUpdate(
      { author: req.params.author, title:req.params.title }, 
      req.body, 
      { new: true });

    return res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all post of one certain user

module.exports = router
