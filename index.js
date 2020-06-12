const express = require('express')
const config = require('./utility/config')

const logger = require('./utility/logger')
const cors = require('cors')
const session = require('express-session')
const bodyParser = require('body-parser')


const app = express()

const port = global.getConfig()['port']

// var whitelist = ['http://example1.com', 'http://example2.com']

// app.use(cors({
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }));

app.use(cors());

app.use(bodyParser.json()); 

app.use(session({
    secret: "_",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

require('./router/loader')(app)

app.listen(port, () => {    
    logger.info(`Example app listening at http://localhost:${port}`)
})