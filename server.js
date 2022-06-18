const http = require('http');
const fs = require('fs');

function onRequest(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.readFile('./index.html', null,(err, data)=>{
        if(err) {
            res.writeHead(404);
            res.write('file not found')
        } else {
            res.write(data);
        }
        res.end();
    })
}

http.createServer(onRequest).listen(8000,()=>{
    console.log('server up and runing')
});