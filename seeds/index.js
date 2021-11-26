const mongoose = require('mongoose');
const dishes = require('./dishes');
const Menu = require('../models/menu');

mongoose.connect(
    'mongodb://localhost:27017/saltdb', { 
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    }).catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!")
        console.log(err)
    })

const insertMenu = async () => {
	await Menu.deleteMany({});

	for (let i = 0; i < 21; i++){
		const menu = new Menu({
			category: dishes[i].category,
			food: dishes[i].food,
			price: dishes[i].price,
			details: dishes[i].details
		})
		await menu.save();
	}
}

insertMenu().then(() => {
	mongoose.connection.close();
});    