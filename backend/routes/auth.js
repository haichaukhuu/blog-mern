const express = require('express')

const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//auth route for registering new user
router.post("/register", async (req, res) => {
    try {
    //   const { username, display_name, email, password, confirmPassword } = req.body;
      const { username, display_name, email, password } = req.body;
  
      // check whether all reuired fields are filled
    //   if (!username || !email || !password || !confirmPassword) {
    //     return res.status(400).json({ error: "Please fill all required fields!" });
    //   }
  
    //   if (password !== confirmPassword) {
    //     return res.status(400).json({ error: "Passwords do not match" });
    //   }
  
    //   const isExistingUser = await User.findOne({ email });
    //   if (isExistingUser) {
    //     return res.status(400).json({ error: "User already exists" });
    //   }
  
      // hash password
    //   const salt = await bcrypt.genSalt(10);
    //   const hashedPassword = await bcrypt.hash(password, salt);
  
      // Finally, we can new user now :))
      const newUser = new User({
        username,
        display_name,
        email,
        // password: hashedPassword,
        password: password
      });

      await newUser.save(); // save to database
  
      // JWT token
    //   const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
    //     expiresIn: "1h",
    //   });      
    //   res.status(201).json({ token, user }); //return token and user data

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router