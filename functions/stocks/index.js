const functions = require('firebase-functions');

export default functions.https.onRequest((request, response) => {
    response.send("stock test!!");
})