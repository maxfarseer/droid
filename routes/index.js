module.exports = function(app) {
	
	app.get('/', require('./root').get);

	app.get('/edit-user', require('./edit-user').get);
	app.post('/edit-user', require('./edit-user').post);
	
};