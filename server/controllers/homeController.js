var Message = require('mongoose').model('Message');

module.exports = {
    getMessage: function(req, res, next) {
        Message.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Message could not be loaded: ' + err);
            }

            res.send(collection);
        });
    }
};