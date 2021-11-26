const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');

router.get('/about', (req, res) => {
	res.render('salts/about');
});

router.get('/contact', (req, res) => {
	res.render('salts/contact');
});

router.get('/menu', async(req, res) => {
    const menus = await Menu.find();

    /*
    const len = menus.length;
    const cat = [];

    for(let i = 0;i < len; i++){
    	cat.push(menus[i].category);
    }

    const set = new Set(cat);
    const categories = [...set];
    */

    res.render('salts/menu', {menus})
})

module.exports = router;