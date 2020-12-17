const express = require('express');
const middleware = express.Router();

middleware.use((req,res,next)=>{                           
    console.log({
        message: `a request was made`,
        browser: req.headers['user-agent'],
        date: new Date().toLocaleDateString(),
        status: res.statusCode,
        prefix: req.originalUrl,        
        headers: req.headers,
        url: req.url,
        method: req.method,
        IP: req.connection.remoteAddress,
    })
    next()
});

module.exports = middleware;
