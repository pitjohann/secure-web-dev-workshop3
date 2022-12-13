const passport = require('passport')
const {Strategy} = require('passport-local')
const Users = require('../user/user.model')
const userService = require('../user/user.services')


passport.use(new Strategy(
    async function (username, password, done) {
        try {

            const user = await userService.findOne(username)
            if (!user) {
                return done(null, false);
            }
            const passwordMatch = await userService.verifyPassword(user, password)
            if (!passwordMatch) {
                return done(null, false);
            }
            return done(null, user)
        } catch (e) {
            return done(e)
        }
    }
))


module.exports = passport;