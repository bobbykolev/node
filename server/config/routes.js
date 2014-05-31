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
};