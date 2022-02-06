const express = require('express');
const router = express.Router();
const foods = require('../controllers/foods')

router.get('/about', (req, res) => {
	res.render('salts/about');
});

router.get('/contact', (req, res) => {
	res.render('salts/contact');
});

router.route('/menu')
      .get(foods.showMenu)
      .post(foods.purchase)

module.exports = router;