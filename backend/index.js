const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors');

const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')

// DATABASE
const connectMongoDB = async() => {
    try {
        // await mongoose.connect(process.env.MONGODB_URL);
        await mongoose.connect(process.env.MONGODB_URL, {
            serverSelectionTimeoutMS: 300000
          });
          
        console.log("Database is successfully connected!")
    }
    catch(error){
        console.log(error)
    }
}

// middlewares

dotenv.config()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    credentials: true, // dealing with cookies
  }));

app.options('*', cors()); // enable pre-flight requests for routes

  

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => { 
    connectMongoDB()

    console.log("app is running on port 3000...")
})