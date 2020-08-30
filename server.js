require('dotenv').config();
const express = require('express');


const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('We are home');
})


app.listen(3000);