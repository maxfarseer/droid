module.exports = function(app) {
	
	app.get('/', require('./root').get);

	app.get('/edit-contact', require('./edit-contact').get);
	app.post('/edit-contact', require('./edit-contact').post);
	app.put('/edit-contact', require('./edit-contact').put);
	
};