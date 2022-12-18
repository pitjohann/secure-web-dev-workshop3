const passport = require('passport')
const Users = require('../user/user.model')
const {Strategy,ExtractJwt} = require('passport-jwt')
require('dotenv').config();

passport.use(new Strategy({
        jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
    function(token, done) {
    Users.findOne({id: token.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

module.exports = passport;