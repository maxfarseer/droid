function Tip(options) {
	var $tipsWrapper = $('.tips-wrapper'),
		elem = $('<div/>',{
			id: 'tip',
			className: 'alert'
		});

	$tipsWrapper.html('');

	elem.
	html(options.text).
	addClass( (options.status === 'err') ? 'alert-danger' : 'alert-success').
	appendTo($tipsWrapper);
};