const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const grill = require('./routes/grill');

mongoose.connect(
    'mongodb://localhost:27017/saltdb', { 
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!")
        console.log(err)
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}));

app.engine('ejs', ejsMate);

app.get('/', (req, res) => {
    res.render('salts/home');    
})

app.use('/grill', grill);
 
app.listen(8081, () => {
	console.log("APP IS LISTENING ON PORT 8081!");
})    