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
      const post = await Post.findOne({ author: req.body.author, title: req.body.title });
  
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
  
      return res.status(200).json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  });


// UPDATE USER BY USERNAME
// router.put('/:username', async (req, res) => {
//     try {

//         const user = await User.findOne({ username: req.body.username });
//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }

//         // if the request contains a password, hash it
//         if (req.body.password && req.body.password.trim() !== '') {
//             const salt = await bcrypt.genSalt(10);
//             req.body.password = await bcrypt.hashSync(req.body.password, salt);
//         }

//         const updatedUser = await User.findOneAndUpdate(
//             { username: req.body.username }, 
//             { $set: req.body }, 
//             { new: true } 
//         );

        
//         return res.status(200).json(updatedUser);

//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// //DELETE USER 

// router.delete('/:username', async (req, res) => {
//     try {
//         await User.findOneAndDelete({ username: req.body.username });
//         // await Post.deleteMany({ username: req.body.username });
//         return res.status(200).json("User has been successfully deleted!")

//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// });

module.exports = router
