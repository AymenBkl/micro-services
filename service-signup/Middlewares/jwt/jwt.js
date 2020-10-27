const passport = require("passport");

const passportJwtStrategy = require("passport-jwt").Strategy;

const extractJwt = require("passport-jwt").ExtractJwt;

const JWT = require("jsonwebtoken");

const user = require("../../models/User/user"); 

const config = require("../../config.json");

const facebookTokenStrategy = require("passport-facebook-token");

module.exports.getToken = (user) => {
  return JWT.sign(user, config.token.secretKey, {
    expiresIn: config.token.tokenExperationDate,
  });
};

var opts = {};

opts.secretOrKey = config.token.secretKey;
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();

exports.jwtPassport = passport.use(
  new passportJwtStrategy(opts, (jwt_payload, done) => {
    console.log("jwt:payload", jwt_payload);

    user.findOne({ _id: jwt_payload._id }, (err, users) => {
        console.log(err,users);
      if (err) {
        return done(err, false);
      } else if (users) {
        return done(null, users);
      } else {
        return done(null, false);
      }
    });
  })
);

exports.verifyUser = passport.authenticate("jwt", { session: false });

exports.verifyNotNormalUser = (req, res, next) => {
  if (req.user) {
    if (req.user.role != "normalUser") {
      next();
    } else {
      err = new Error("unAuthorized you didn't buy  a sticker");
      err.status = 403;
      return next(err);
    }
  } else {
    err = new Error("unlogged");
    err.status = 403;
    return next(err);
  }
};

exports.verifyAdmin = (req, res, next) => {
  if (req.user) {
    if (req.user.admin) {
      next();
    } else {
      err = new Error("unAuthorized not an Admin");
      err.status = 403;
      return next(err);
    }
  } else {
    err = new Error("unlogged");
    err.status = 403;
    return next(err);
  }
};

var localStrategy = require("passport-local").Strategy;

exports.localStrategy = passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

exports.facebookToken = passport.use(
  new facebookTokenStrategy(
    {
      clientID: config.facebook.clientId,
      clientSecret: config.facebook.clientSecret,
    },
    (accesToken, refreshToken, profile, done) => {
      user.findOne({ facebookId: profile.id }, (err, users) => {
        if (err) {
          return done(err, false);
        } else if (!err && users != null) {
          return done(false, users);
        } else {
          us = new user({ username: profile.displayName });
          us.firstname = profile.name.givenName;
          us.facebookId = profile.id;
          us.lastname = profile.name.familyName;
          us.save((err, users) => {
            if (err) {
              return done(err, false);
            } else {
              return done(false, users);
            }
          });
        }
      });
    }
  )
);
