const express = require('express');
const middleware = require('../middleware/middleware');
const router = express.Router();

router.use(middleware);

router.get('/',(req,res)=>{                                     
    res.status(200).send({
        message: `a request was made with status ${res.statusCode}`,
        browser: req.headers['user-agent'],
        date: new Date().toLocaleDateString(),
        prefix: req.originalUrl,
        status: res.statusCode,
        headers: req.headers,
        url: req.url,
        method: req.method,
        IP: req.connection.remoteAddress,
    });   
});

router.post('/',(req,res)=>{
    res.status(200).send({
        message: `a request was made with status ${res.statusCode}`,
        browser: req.headers['user-agent'],
        date: new Date().toLocaleDateString(),
        prefix: req.originalUrl,
        status: res.statusCode,
        headers: req.headers,
        url: req.url,
        method: req.method,
        IP: req.connection.remoteAddress,
    });    
});

module.exports = router; 