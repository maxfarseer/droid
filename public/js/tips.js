function Tip(options) {
	var elem = $('#tip');

	elem.html(options.text).addClass('tips-'+options.type);
};