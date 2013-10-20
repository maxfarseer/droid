var mongoose = require('mongoose');
var config = require('../config');
var log = require('./log')(module);

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

mongoose.connection.on('open', function() {
	log.info('DB ' + config.get('mongoose:uri') + ' connected');
});

module.exports = mongoose;