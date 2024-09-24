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

// Get one post content using author name and post title
router.get("/:author/:title", async (req, res) => {
  try {
    const post = await Post.findOne(
      { author: req.body.author, 
      title: req.body.title });
      
    console.log("Retrieving post...");
    console.log("Author: ", req.body.author);
    console.log("Title: ", req.body.title);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

// Get all posts by a certain user
router.get("/:author", async (req, res) => {
  try {
    // const author = req.params.author;
    // const limit = req.query.limit || 10; //for pagination, just in case
    // const skip = req.query.skip || 0;

    const posts = await Post.find({ author : req.body.author });
    // const posts = await Post.find({ author }).limit(limit).skip(skip);
    console.log("Retrieving all posts from: ");
    console.log("Author:", req.body.author);
    console.log("Posts found:", posts);
    
    if (!posts || posts.length === 0) {
      return res.status(404).json({ error: "No posts found" });
    }

    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


//Get all post in the database, sorted by date time
router.get("/", async (req, res) => {
  try {

    // sort by createdAt in descending order, means latest to oldest
    const posts = await Post.find().sort({ date: -1 }); 

    if (!posts) {
      return res.status(404).json({ error: "Post not found" });
    }
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//SEARCH POST
router.get("/search/:query", async (req, res) => {
  try {

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }

});

module.exports = router
