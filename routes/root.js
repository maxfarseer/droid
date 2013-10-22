var Contact = require('../models/contact').Contact;

exports.get = function(req, res, next) {

	Contact.find({}, function(err,contacts) {
		if (err) return next(err);

		res.render('index', {
			title: 'Contacts',
			contacts: contacts
		});
	});
};