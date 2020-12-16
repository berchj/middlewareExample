const express = require('express');
const middleware = require('../middleware/middleware');
const router = express.Router();

router.use(middleware);

router.get('/',(req,res)=>{                                      
                                res.status(200).send({
                                    message: 'main-page',
                                    browser: req.headers['user-agent'],
                                    prefix: req.originalUrl,
                                    url: req.url,
                                    method: req.method,
                                    IP: req.connection.remoteAddress,
                                });
});

router.post('/',(req,res)=>{
                                res.status(200).send({
                                    message: 'main-page',
                                    browser: req.headers['user-agent'],
                                    prefix: req.originalUrl,
                                    url: req.url,
                                    method: req.method,
                                    IP: req.connection.remoteAddress,                                   
                                });
});

module.exports = router;