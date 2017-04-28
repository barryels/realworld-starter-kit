var m = require('mithril');


var Banner = require('./Banner');


function view() {
	return m('div.home-page',
		[
			m(Banner),
			m('h1', 'Home')
		]
	);
};


module.exports = {
	view: view
};