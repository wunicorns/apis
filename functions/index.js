const functions = require('firebase-functions');

// const stocks = require('./stocks')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.json({ 'msg': 'hello world!' });
})