$('.js-delete-contact').on('click', function(e) {
	var contact = {
		contactName: $(this).data('contactName')
	};
	var $row = $(this);

	$.ajax({
		type: 'DELETE',
		url: '/delete-contact',
		data: contact,
		error: function(data) {
			// ...
		},
		success: function(data) {
			if (data.status == 'err') {
				new Tip(data);
			} else {
				new Tip(data);
				console.log($(this));
				$row.closest('.row').css({backgroundColor: '#FFFF66'}).fadeOut(300);
			}
		}
	});
	e.preventDefault();
});