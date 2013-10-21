var Contact = require('../models/contact').Contact;

exports.get = function(req,res) {

	Contact.find({}, function(err,contacts) {
		if (err) next(err);

		res.render('index', {
			title: 'Contacts',
			contacts: contacts
		});
	});
}