var Contact = require('../models/contact').Contact;

exports.get = function(req, res) {
	res.render('add-contact', {title: 'Добавить контакт'});
};

exports.post = function(req,res) {
	var newContact = new Contact({
		contactName: req.body.contactName,
		phoneNumber: req.body.phoneNumber
	});

	newContact.save(function(err,results) {
		// TODO: добавление не уникального юзера - предупреждение или ошибку
		if (err) {
			//...
		}
		console.log(arguments);
		if (!results) {
			res.send({
					type: 'err',
					text: 'Имя контакта должно быть уникальным'
				});
		} else {
			res.send({
				contactName: req.body.contactName,
				phoneNumber: req.body.phoneNumber
			});
		}
	});
	
};