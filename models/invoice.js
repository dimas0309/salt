const mongoose = require('mongoose');
const { Schema } = mongoose;
 
invoiceSchema = new Schema ({
	subtotal: {
		type: Number,
		required: true
	},
	tax: {
		type: Number,
		required: true
	},
	total: {
		type: Number,
		required: true
	},
	foods: [{
		food: {
		    type: String,
		    required: true
	    },
	    quantity: {
		    type: Number,
		    required: true
	    },
	    price: {
		    type: Number,
		    required: true
	    },
	    amount: {
		    type: Number,
		    required: true
	    },

	}],
	created_at:{
		type: Date,
		default: Date.now()
	}
})

const Invoice = mongoose.model(
	'Invoice', invoiceSchema
);

module.exports = Invoice;