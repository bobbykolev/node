var express = require('express'),
	env = 'development',//process.env.NODE_ENV
	config = require('./server/config/config')[env],
	app = express();

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);

app.listen(config.port);
console.log("running: ", config.port);