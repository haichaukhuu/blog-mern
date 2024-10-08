const express = require('express')

const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//REGISTER: auth route for registering new user
router.post("/register", async (req, res) => {
  try {
      const { username, display_name, email, password, confirmPassword } = req.body;
  
      // check whether all reuired fields are filled
      if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: "Please fill all required fields!" });
      }
  
      if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
      }
  
      const isExistingUser = await User.findOne({ email });
      if (isExistingUser) {
        return res.status(400).json({ error: "User already exists" });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hashSync(password, salt);
  
      // Finally, we can new user now :))
      const newUser = new User({
        username,
        display_name,
        email,
        password: hashedPassword
      });

      await newUser.save(); // save to database
  
      // JWT token
      const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "3d",
      });      
      res.status(201).json({ token, newUser }); //return token and user data

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});


// LOGIN
router.post("/login", async(req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ error: "Please fill all fields" });
    }

    // Login using email
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {expiresIn: "3d",});
    const {password, ...info} = user._doc

    // res.cookie("jwtToken", token).status.json()
    res.cookie("jwtToken", token).status(200).json(info)


  } catch(error) {
    res.status(500).json({ error: "Internal Server Error" });

  }

})

// LOGOUT



module.exports = router