const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const Menu = require('../models/menu');

router.get('/about', (req, res) => {
	res.render('salts/about');
});

router.get('/contact', (req, res) => {
	res.render('salts/contact');
});

router.get('/menu', async(req, res) => {
	const starter = await Category.find({name:'Starters'})
	                              .populate('dishes');
	const salad = await Category.find({name:'Salads'})
	                            .populate('dishes');
	const hotdog = await Category.find({name:'Hot Dogs'})
	                             .populate('dishes');
	const burger = await Category.find({name:'Burgers'})
	                             .populate('dishes');
	const wrap = await Category.find({name:'Wraps'})
	                           .populate('dishes');

    res.render('salts/menu', {starter, salad, hotdog, burger, wrap})
})

module.exports = router;