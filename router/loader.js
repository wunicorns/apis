const path = require('path')
const fs = require('fs')

const {router: index} = require('./home')
const {router: user} = require('./user')
const {router: chart} = require('./chart')

// app.use('/chart', chart)

module.exports = function (app) {

    app.use('/', index);
    app.use('/user', user);
    app.use('/chart', chart);

};