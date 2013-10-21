var Contact = require('../models/contact').Contact;

exports.get = function(req, res) {
	res.render('add-contact', {title: 'Добавить контакт'});
};

exports.post = function(req,res) {
	var newContact = new Contact({
		contactName: req.body.contactName,
		phoneNumber: req.body.phoneNumber
	});
	console.log(newContact);

	newContact.save(function(err,results) {
		console.log(arguments);
		
		if (!results) {
			res.send({
					status: 'err',
					text: 'Имя контакта и телефон должны быть уникальными'
				});
		} else {
			res.send({
				status: '200',
				text: 'контакт ' + req.body.contactName + ' добавлен'
			});
		}
	});
	
};