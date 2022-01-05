const http = require('http');
const express = require('express');
const router = express.Router();

http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
}).listen(3000);

router.get('/', function(req, res){
    res.send("HOME PAGE GO ON DATE");
});

console.log('Server is up at localhost:3000...');