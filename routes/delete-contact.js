var Contact = require('../models/contact').Contact;

exports.delete = function(req,res) {
	//TODO: remove of null рушит сервак (!)

	Contact.findOne({contactName: req.body.contactName}, function(err, contact) {
		if (err) throw err;

		if (!contact) {
			res.send({
				status: 'err',
				text: 'Контакт не найден'
			});
		}

		contact.remove(function(err, result) {
			if (err) throw err;
			
			res.send({
				status: '200',
				text: 'Контакт ' + req.body.contactName + ' удален',
				name: req.body.contactName
			});
		});
	});
};