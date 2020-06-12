const express = require('express')
const logger = require('../../utility/logger')

const router = express.Router()

router.get('/index', (req, res, next)=>{
    res.json({"key": "value"});
    next()
});

router.get('/user/github', (request, response, next)=>{
    res.json({"key": "value"});
    next()
});

module.exports = {
    router
}