$('.btn-edit-contact').on('click', function(e) {
	var contact = {
		contactName: $('#contact-name').val(),
		phoneNumber: $('#phone-number').val()
	};
	$.ajax({
		type: 'POST',
		url: '/add-contact',
		data: contact,
		error: function(data) {
			new Tip({type: 'err', text: 'server error'});
		},
		success: function(data) {
			if (data.type == 'err') {
				new Tip(data);
			}
		}
	});
	e.preventDefault();
});