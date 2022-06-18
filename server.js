const http = require('http');
const fs = require('fs');

const app = require('./app');
http.createServer(app.handleRequests).listen(8000,()=>{
    console.log('server up and running')
});