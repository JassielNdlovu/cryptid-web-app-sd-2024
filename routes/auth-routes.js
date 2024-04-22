const router = require('express').Router();
const path = require('path');
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
    req.logout(); // passport's logout method
    res.redirect('http://cryotid-web-sd.azurewebsites.net/.auth/login'); // Redirect to login page after logout
});

// Google authentication
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// Google authentication callback
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('http://cryotid-web-sd.azurewebsites.net/auth/profile');
});


module.exports = router;
