var mongoose = require('mongoose');

var coursesSchema = mongoose.Schema({
    name: String
});

var Message = mongoose.model('Message', coursesSchema);

module.exports.seedInitialMessages = function() {
    Message.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find messages: ' + err);
            return;
        }

        if (collection.length === 0) {
            Message.create({name: 'Hello iches!!!'});
        }
    });
};