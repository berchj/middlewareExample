const express = require('express');
const app = express();
const port = 4000;
const router = require('./routes/router');

app.use('/api',router);
app.listen(port,()=>{
    console.log(`server running on port : ${port}`);
}); 