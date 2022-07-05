const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const GOOGLE_CLIENT_ID = "1085647503100-8jinigpkuvp95nq59ka1vdu7bruoc4o7.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

GITHUB_CLIENT_ID = "4d92e7e51312e4202b4d";
GITHUB_CLIENT_SECRET = "d89841cd8dd6101fea71aaffabef7a058d771a14";

FACEBOOK_APP_ID = "714376663090841";
FACEBOOK_APP_SECRET = "e02f2d26cf4d5e935077b708f5b80ed7";



passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
  }
));

passport.use(new GithubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null,profile)
}
));

passport.use(new  FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: "/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null,profile)
}
));

passport.serializeUser((user,done)=>{
    done(null,user)
    // sessions
})
// if we are ussing sessions then we have to use those functions;
passport.deserializeUser((user,done)=>{
    done(null,user)
})