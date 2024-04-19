const express = require('express');
const router = express.Router();
const path = require('path'); // Import the path module

// Middleware to check if user is authenticated
const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/auth/login');
    } else {
        next();
    }
};

// Route to render profile.html
router.get('/', authCheck, (req, res) => {
    res.sendFile(path.join(__dirname, '../login/profile.html'));
});

module.exports = router;
