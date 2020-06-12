const express = require('express')

const router = express.Router()

router.get('/index', (req, res, next)=>{
    res.json({"key": "value"});
    next()
});

module.exports = {
    router
}