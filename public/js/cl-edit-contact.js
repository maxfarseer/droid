$('.btn-edit-contact').on('click', function(e) {
	var contact = {
		contactName: $('#contact-name').val(),
		phoneNumber: $('#phone-number').val()
	};
	$.ajax({
		type: 'PUT',
		url: '/edit-contact',
		data: contact,
		success: function(data) {
			new Tip(data);
		}
	});
	e.preventDefault();
});

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

	if (window.location.href.split('/')[4] === SMS.destination) {
		console.log(SMS.text);
	}
};
sock.onclose = function() {
	console.log('close');
};