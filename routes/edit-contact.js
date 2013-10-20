var Contact = require('../models/contact').Contact;

exports.get = function(req,res) {
	res.render('edit-contact', {title: 'Edit contact'});
}

exports.post = function(req,res) {
	var newContact = new Contact({
		contactName: req.body.contactName,
		phoneNumber: req.body.phoneNumber
	});

	newContact.save(function(err,results) {
		// TODO: добавление не уникального юзера error в ajax
		if (err) {
			//...
		}
		console.log(results);
	});

	res.send({
		contactName: req.body.contactName,
		phoneNumber: req.body.phoneNumber
	});
};

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