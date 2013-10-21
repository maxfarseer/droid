var Contact = require('../models/contact').Contact;

exports.get = function(req,res) {
	res.render('edit-contact', {title: 'Edit contact', contactName: req.params.contactName});
}

exports.put = function(req, res) {
	//TODO: пустое поле телефона рушит сервак (!)

	Contact.findOne({contactName: req.body.contactName}, function(err, contact) {
		if (err) throw err;
		
		if (!contact) {
			// alert нет такого юзера, если поле имени будет разлочено
		} else {
			contact.phoneNumber = req.body.phoneNumber;
			
			contact.save(function(err,contact) {
				if (err) throw err;
			});

			res.send({
				status: '200',
				text: 'Номер телефона изменен'
			});
		}
	});
};