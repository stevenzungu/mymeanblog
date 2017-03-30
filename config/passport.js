
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');


passport.use(new LocalStrategy(), function howWeAuth(username, password, done){})
