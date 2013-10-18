exports.get = function(req,res) {
	res.render('edit-user', {title: 'Edit user'});
}

exports.post = function(req,res) {
	res.send('123');
}