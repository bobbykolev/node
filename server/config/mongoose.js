var mongoose = require('mongoose'),
	message = require('../models/Message');

module.exports = function (config) {
		mongoose.connect(config.db);
		var db = mongoose.connection;

	db.once('open', function (err) {
		if(err){
			console.warn(err);
			return;
		}

		console.log('DB ok')
	});

	db.on('error', function (err) {
		if(err){
			console.warn(err);
		}
	});

	message.seedInitialMessages();
};