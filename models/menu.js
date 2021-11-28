const mongoose = require('mongoose');
const { Schema } = mongoose;

menuSchema = new Schema ({
	
	food: {
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
		type: Schema.Types.ObjectId,
		ref: 'Category'
	}
})

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;