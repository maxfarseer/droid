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
			// ...
		},
		success: function(data) {
			if (data.status == 'err') {
				new Tip(data);
			} else {
				new Tip(data);
			}
		}
	});
	e.preventDefault();
});