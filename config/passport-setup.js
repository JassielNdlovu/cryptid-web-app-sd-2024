const express = require('express');
const router = express.Router();
const path = require('path'); // Import the path module
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Make sure to import Strategy
const keys = require('./keys');
const User = require('../models/user-model');

// Middleware to check if user is authenticated
const authCheck = (req, res, next) => {
    if (!req.user) {
        // Redirect users to Google for authentication
        return res.redirect('https://cryotid-web-sd.azurewebsites.net/.auth/login/google/callback'); 
    } 
    // If user is authenticated, proceed to the next middleware/route handler
    next();
};

// Route to render profile.html
router.get('/', authCheck, (req, res) => {
    // Sending profile.html file if user is authenticated
    res.sendFile(path.join(__dirname, '../login/profile.html'));
});

// Configure passport to use Google OAuth strategy
passport.use(new GoogleStrategy({
    // OPTIONS FOR STRATEGY
    callbackURL: 'https://cryotid-web-sd.azurewebsites.net/.auth/login/google/callback', // Ensure this matches your configuration in Google Developer Console
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    // Check if user exists
    User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
            console.log('User exists:', currentUser);
            done(null, currentUser);
        } else {
            // Create new user in database
            new User({
                username: profile.displayName,
                googleId: profile.id,
                thumbnail: profile._json.picture
            }).save().then((newUser) => {
                console.log('New user created:', newUser);
                done(null, newUser);
            }).catch(err => {
                console.error('Error creating new user:', err);
                done(err, null);
            });
        }
    }).catch(err => {
        console.error('Error finding user:', err);
        done(err, null);
    });
}));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    }).catch(err => {
        done(err, null);
    });
});

module.exports = router;
