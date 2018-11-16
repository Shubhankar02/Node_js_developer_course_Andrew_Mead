const db = require('./db');


module.exports.handleSignUp = (email, password) => {
    // Check if the email already exist
    db.saveUser({email, password});
    // Save the user to database
    // Send the welcome email
};