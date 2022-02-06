const mongoose = require('mongoose');
const { Schema } = mongoose;

foodSchema = new Schema ({

	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	details: {
		type: String
	},
	category: {
		type: String,
		required: true
	}
})

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;