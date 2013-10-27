//temp
process.env.NODE_ENV = 'development';
//end

var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
var log = require('./libs/log')(module);
var mongoose = require('./libs/mongoose');
var HttpError = require('./error').HttpError;
var sockjs = require('sockjs');

var app = express();

var sockjs_opts = {sockjs_url: "http://cdn.sockjs.org/sockjs-0.3.min.js", prefix:'/echo'};
var sockjs_echo = sockjs.createServer(sockjs_opts);
sockjs_echo.on('connection', function(conn) {
    conn.on('data', function(message) {
        conn.write(message);
    });
});


// all environments
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());

app.use(require('./middleware/sendHttpError'));

app.use(app.router);
require('./routes')(app);

app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next) {
	if (typeof err == 'number') { // next(404);
		err = new HttpError(err);
	}

	if (err instanceof HttpError) {
		res.sendHttpError(err);
	} else {
		if (app.get('env') == 'development') {
			express.errorHandler()(err, req, res, next);
		} else {
			log.error(err);
			err = new HttpError(500);
			res.sendHttpError(err);
		}
	}
});

var server = http.createServer(app);

sockjs_echo.installHandlers(server);

server.listen(config.get('port'), function() {
	log.info('app DROID 4 listenning port: ' + config.get('port'));
});

// https://github.com/sockjs/sockjs-client/blob/1bde9be0c67563beb57f8e90554eb9e84d0245fd/tests/sockjs_app.js#L44	