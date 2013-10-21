var Contact = require('../models/contact').Contact;

exports.get = function(req,res) {
	res.render('edit-contact', {title: 'Edit contact', contactName: req.params.contactName});
}

exports.put = function(req, res) {

	Contact.findOne({contactName: req.body.contactName}, function(err, contact) {
		if (err) throw err;
		
		if (!contact) {
			res.json('Нет такого пользователя');
		} else {
			contact.phoneNumber = req.body.phoneNumber;
			contact.save(function(err,contact) {
				if (err) return next(err);
				console.log(contact);
			});	
		}
	});
};