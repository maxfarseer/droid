exports.get = function(req,res) {
	res.render('index', {
		title: 'People',
		users: [
			{name: 'User #1'},
			{name: 'User #2'},
			{name: 'User #3'},
			{name: 'User #4'}
		]
	});
}