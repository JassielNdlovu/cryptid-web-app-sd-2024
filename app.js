const express = require('express');
const path = require('path');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const session = require('express-session');
const passport = require('passport');
const http = require('http');

const port = process.env.PORT || 3000;

const app = express();

// Session middleware
app.use(session({
    secret: keys.session.cookieKey,
    resave: false,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(keys.mongodb.dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Routes for authentication
app.use('/auth', authRoutes);

// Serve static files from 'login' directory
app.use('/login', express.static(path.join(__dirname, 'login')));

// Serve static files from 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Route for serving the homepage HTML file from the 'login' directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'homepage.html'));
});

// Start server
const server = http.createServer(app);

server.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server listening on port ${port}`);
    }
});
