const Category = require('../models/category');
const Menu = require('../models/menu');
const Invoice = require('../models/invoice');
 
module.exports.showMenu = async(req, res) => {
	const categories = await Category.find({});
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

    res.render('salts/menu', {
    	starter, salad, hotdog, 
    	burger, wrap, categories
    })
}   

module.exports.purchase = async(req, res) => {
    const purchase = req.body;
    const flist = purchase.food.split(",");
    const qlist = purchase.quantity.split(",");
    const plist = purchase.price.split(",");
    const alist = purchase.amount.split(",");
    const len = flist.length;
    const invoiceLine = [];

    for(let i = 0; i < len; i++){
        const food = flist[i];
        const quantity = qlist[i];
        const price = plist[i];
        const amount = alist[i];

        invoiceLine.push({
        	food, quantity, price, amount
        });	 
    } 

    const invoice = new Invoice({
    	subtotal: purchase.subtotal,
    	tax: purchase.tax,
    	total: purchase.total,
    	foods: invoiceLine
    })

    await invoice.save();

	res.send(invoice);
} 

 