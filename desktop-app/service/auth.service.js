const firebaseAdmin = require('firebase-admin');

/** 
 * Declaring a provider object that lists all available auth providers for the app.
*/
var providers = {
    googleProvider: firebaseAdmin.auth.GoogleAuthProvider
}

providers.googleProvider = new firebaseAdmin.auth.GoogleAuthProvider();

/** 
 * The `authService` object executes all necessary operations to authorize
 * users.
*/
const authService = {

    /**
     * Returns a Promise to the result with the connection.
     */
    loginGoogle: function() {
        return firebaseAdmin.auth();
    },

    /**
     * Returns the user data.
     */
    getUser: function(uid) {
        return firebaseAdmin.auth(uid).getUser();
    },

    /**
     * Returns a logout Promise.
     */
    logout: function() {
        return firebaseAdmin.auth().signOut();
    }
    
}

module.exports = {
    authService
}