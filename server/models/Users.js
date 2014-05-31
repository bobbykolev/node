var mongoose = require('mongoose');
	passport = require('passport'),
	LocalPassport = require('passport-local');

var userSchema = mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    //salt: String,
    //hashPass: String,
    roles: String
});

var User = mongoose.model('User', userSchema);

module.exports.seedInitialUsers = function() {
    User.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
        }

        if (collection.length === 0) {
            /*var salt;
            var hashedPwd;*/

            //salt = encryption.generateSalt();
            //hashedPwd = encryption.generateHashedPassword(salt, 'Ivaylo');
            User.create({username: 'bobbykolev', firstName: 'Bobby', lastName: 'Kolev', roles: ['admin']});
            console.log('Users added to database...');
        }
    });

	passport.use(new LocalPassport(function(username, password, done) {
		User.findOne({ username: username }).exec(function (err, user) {
			if(err) {
				console.log('Error loading user ' + err);
				return;
			}

			if(user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	}));

	passport.serializeUser(function(user, done) {
        if (user) {
            return done(null, user._id);
        }
    });

    passport.deserialize(function(id, done) {
    	User.findOne({ _id: id }).exec(function(err, user) {
    		if(err) {
    			console.log('Error loading user: ' + err);
    			return;
    		}

    		if(user) {
    			return done(null, user);
    		} else {
    			return done(null, false);
    		}
    	});
    });
};