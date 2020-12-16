const express = require('express');
const middleware = express.Router();

middleware.use((req,res,next)=>{                           
    console.log({
            message: 'main-page',
            browser: req.headers['user-agent'],
            prefix: req.originalUrl,
            url: req.url,
            method: req.method,
            IP: req.connection.remoteAddress,
    })
    next()
});

module.exports = middleware;
