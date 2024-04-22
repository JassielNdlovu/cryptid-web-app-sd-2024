const router = require('express').Router();
const path = require('path'); // Import the path module to work with file paths
const passport = require('passport');

// Render login.html
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../login/login.html'));
});

// Serve style.css
router.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../login/styles.css')); 
});

// Serve profile.html
router.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../profile/profile.html')); 
});

// Logout
router.get('/logout', (req, res) => {
    // Handle logout with Passport.js
    req.logout(() => {
        res.redirect('/');
    });
});

// Google authentication
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/auth/profile');
});


module.exports = router;
