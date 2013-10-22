var sockjs_url = '/echo';     
var sock = new SockJS(sockjs_url);

sock.onopen = function() {
	console.log('open');
};
sock.onmessage = function(e) {
	console.log('message', e.data);
};
sock.onclose = function() {
	console.log('close');
};