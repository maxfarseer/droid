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