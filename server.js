require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

//Import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute);

//connect to DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb:/localhost/books', { 
    useNewUrlParser: true 
}, () => console.log('connected do DB!')
);


app.listen(PORT);