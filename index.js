const http = require('http');
const express = require('express');
const app = express();
const router = require('./route');


app.use('/', router);

app.listen(3000, () => {

    console.log('Server is up at localhost:3000...');
});
