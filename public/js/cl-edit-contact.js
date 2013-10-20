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
			console.log(data);
		}
	});
	e.preventDefault();
});