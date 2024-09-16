const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// UPDATE USER BY USERNAME
router.put('/:username', async (req, res) => {
    try {

        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // if the request contains a password, hash it
        if (req.body.password && req.body.password.trim() !== '') {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hashSync(req.body.password, salt);
        }

        const updatedUser = await User.findOneAndUpdate(
            { username: req.body.username }, 
            { $set: req.body }, 
            { new: true } 
        );

        
        return res.status(200).json(updatedUser);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router
