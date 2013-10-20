var mongoose = require('../libs/mongoose');

var schema = new mongoose.Schema({
	contactName: {
		type: String,
		unique: true,
		required: true
	},
	phoneNumber: {
		type: String,
		unique: true,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

exports.Contact = mongoose.model('Contact', schema);