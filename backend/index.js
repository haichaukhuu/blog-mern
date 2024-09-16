const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv')

const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')

// DATABASE
const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database is successfully connected!")
    }
    catch(error){
        console.log(error)
    }
}

// middlewares

dotenv.config()
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

app.listen(3000, () => { 
    connectMongoDB()

    console.log("app is running on port 3000...")
})