var Contact = require('../models/contact').Contact;

exports.delete = function(req, res, next) {

	Contact.findOne({contactName: req.body.contactName}, function(err, contact) {
		if (err) return next(err);

		if (!contact) {
			res.send({
				status: 'err',
				text: 'Контакт не найден'
			});
		} else {
			contact.remove(function(err, result) {
				if (err) return next(err);
				
				res.send({
					status: '200',
					text: 'Контакт ' + req.body.contactName + ' удален',
					name: req.body.contactName
				});
			});	
		}
		
	});
};