const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true 
    },
    author: {
        type: String,
        required: true,
        unique: true 
    },
    thumbnail: {
        type: String,
    },
    desc: {
        type: String,
    }


})

module.exports=mongoose.model("User", UserSchema)