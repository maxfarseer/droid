var Contact = require('../models/contact').Contact;

exports.get = function(req, res, next) {
	res.render('add-contact', {title: 'Добавить контакт'});
};

exports.post = function(req,res,next) {
	var newContact = new Contact({
		contactName: req.body.contactName,
		phoneNumber: req.body.phoneNumber
	});

	newContact.save(function(err,results) {
		if (err) return next(err);
		
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