const mongoose = require('mongoose');
const Category = require('../models/category');
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
	await Menu.insertMany([
		    {
    	
    	food: 'Truffled Potatoes',
    	price: '400.00',
    	details: 'Fried chips with truffle oil and american cheese'
    },
   {
    	
    	food: 'Bacon Potatoes and Cheddar Cheese',
    	price: '350.00',
    	details: 'Fried chips with bacon strips and cheddar cheese sauce'
    },
    {
    	
    	food: 'Onion Rings',
    	price: '320.00',
    	details: 'Fried chips with truffle oil and american cheese'
    },
    {
    	
    	food: 'Mozarella Strips',
    	price: '350.00',
    	details: 'Mozarella strips with napoli sauce'
    },
    {
    	
    	food: 'Cut Salad',
    	price: '540.00',
    	details: 'Cherry candied tomatoes, goat cheese, batavia lettuce, avocado, crispy onion and dressing'
    },
    {
    	
    	food: 'Ceasar Salad',
    	price: '420.00',
    	details: 'Roman lettuce, crispy croutons, ceasar sauce and parmesan cheese'
    },
    {
    	
    	food: 'Capresa Salad',
    	price: '340.00',
    	details: 'Sliced tomatoes, mozarella cheese with pesto sauce'
    },
    {
    	
    	food: 'Chicken Salad',
    	price: '570.00',
    	details: 'Cherry candied tomatoes, goat cheese, batavia lettuce, avocado, crispy onion and dressing'
    },
    {
    	
    	food: 'Fired Hot Dog',
    	price: '340.00',
    	details: 'House sausage with fired tail cooked slow fire and fine leek'
    },
    {
    	
    	food: 'Pulled Pork Hot Dog',
    	price: '340.00',
    	details: 'House sausage with fired tail cooked slow tempeture with barbecue sauce'
    },
    {
    	
    	food: 'Caracas Hot Dog',
    	price: '240.00',
    	details: 'House sausage with raw cabbage, onion, corn, potatoes, cheese, mayonnaise, ketchup and mustard'
    },
    {
    	
    	food: 'Classic Hot Dog',
    	price: '210.00',
    	details: 'House sausage with pickle, cooked cabbage, chopped potatoes, mayonnaise and ketchup'
    },
    {
    	
    	food: 'Fat Hot Dog',
    	price: '310.00',
    	details: 'House sausage with pickle, chooped steak, cheddar cheese, cooked cabbage, chooped potatoes, mayonnaise and ketchup'
    },
    {
    	
    	food: 'Yankee Burger',
    	price: '480.00',
    	details: 'Angus steak with american cheese, grilled onion, batavia lettuce, tomatoes, bacon, pickle and cut sauce'
    },
    {
    	
    	food: 'Cut Burger',
    	price: '615.00',
    	details: 'Angus steak with cheddar cheese, caramelized onion, smoked bacon, potatoes, cut sauce, egg and pastrami beef'
    },
    {
        
        food: 'Bacon Cheese Burger',
        price: '495.00',
        details: 'Angus steak with bacon, american cheese, lettuce, tomatoes, cheddar cheese sauce'
    },
    {
        
        food: 'Smoked Burger',
        price: '750.00',
        details: 'Angus steak with pulled pork barbecue, smoked cheese, crispy onion, bacon and barbecue sauce'
    },
    {
        
        food: 'Dominican Burger',
        price: '690.00',
        details: 'Angus steak with fired cooked boiled tail, lettuce, tomatoes, avocado and mayo sauce'
    },
    {
        
        food: 'Jack Burger',
        price: '540.00',
        details: 'Angus steak with onion rings, smoked bacon, monterrey jack cheese and barbecue sauce'
    },
    {
        
        food: 'Chicken Wrap',
        price: '480.00',
        details: 'Crispy chicken, lettuce, tomatoes, black olives, avocado, onion, pickle and ceasar sauce'
    },
    {
        
        food: 'Salmon Wrap',
        price: '540.00',
        details: 'Salmon, lettuce, Cherry tomatoes, onion, black olives, corn and tartara sauce'
    },
		])
} 

const insertCategory = async () => {
	const category = new Category({name:'Wraps'});
	 
	await category.save();
	console.log(category);
}

const populateCategories = async () => {
	const category = await Category.findOne({name: 'Wraps'})
	const dish1 = await Menu.findOne({food: 'Chicken Wrap'});
	const dish2 = await Menu.findOne({food: 'Salmon Wrap'});
	 
	category.dishes.push(dish1);
	category.dishes.push(dish2);

	await category.save();
	console.log(category);
}

populateCategories().then(() => {
	mongoose.connection.close();
});
