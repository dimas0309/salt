const mongoose = require('mongoose');
const dishes = require('./dishes');
const Food = require('../models/food');

mongoose.connect(
    'mongodb://localhost:27017/saltdb', { 
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!")
        console.log(err)
    })

const insertFoods = async () => {
    await Food.deleteMany({});

    for (let i = 0; i < 21; i++){
        const food = new Food ({
            name: `${dishes[i].name}`,
            price: `${dishes[i].price}`,
            details: `${dishes[i].details}`,
            category: `${dishes[i].category}`
        })
        await food.save();
    }    
} 

insertFoods().then(() => {
	mongoose.connection.close();
});
