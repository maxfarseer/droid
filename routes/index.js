module.exports = function(app) {
	
	app.get('/', require('./root').get);
	
	app.delete('/delete-contact', require('./delete-contact').delete);

	app.get('/edit-contact/:contactName', require('./edit-contact').get);
	app.put('/edit-contact', require('./edit-contact').put);
	
	app.get('/add-contact', require('./add-contact').get);
	app.post('/add-contact', require('./add-contact').post);
	
};