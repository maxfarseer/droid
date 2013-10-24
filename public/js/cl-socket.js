var sockjs_url = '/echo';
var sock = new SockJS(sockjs_url);

sock.onopen = function() {
	console.log('open');
};
sock.onmessage = function(e) {
	var SMS = {};
	e.data = e.data.split(',');
	SMS.destination = e.data[0];
	SMS.text = e.data[1];

	console.log(SMS.text);

};
sock.onclose = function() {
	console.log('close');
};

$('.js-send-message').on('click', '.glyphicon-envelope', function(e) {
	//var messageText = prompt('Введите текст смски');
	var messageText = 'test test';
	sock.send([
		$(this).parent('.js-send-message').data('sendMessageTo'),
		messageText
	]);
	e.preventDefault();
});