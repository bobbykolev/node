var controllers = require('../controllers');

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index');
    });

	app.get('/:tempName', function (req, res) {
        res.render('../views/templates/' + req.params.tempName);
    });
    /*app.get('/home', function (req, res) {
        res.render('templates/' + controllers.home.getMessage);
    });*/

	app.post('/login', function(res, req, next) {
		var auth = passport.authenticate('local', function(err, user) {
			if(err) {
				return next(err);
			}

			if(!user) {
				res.send({success: false});
			}

			req.logIn(user, function(err) {
				if (err) {
					return next(err);
				}

				res.send({ success: true, user: user});
			});
		});

		auth(req, res, next);
	});
};