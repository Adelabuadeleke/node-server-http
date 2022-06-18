const url = require('url');
const fs = require('fs');

function renderHtml (path, res) {
    fs.readFile(path, null,(err, data)=>{
        if(err) {
            res.writeHead(404);
            res.write('file not found')
        } else {
            res.write(data);
        }
        res.end();
    })
}

module.exports = {
    handleRequests: function(req, res)  {
        res.writeHead(200, {'Content-Type':'text/html'});
        var path = url.parse(req.url).pathname;
        switch(path){
            case '/':
                renderHtml('./index.html', res);
                break;
            case '/home':
                    renderHtml('./index.html', res);
                    break;    
            case '/about':
                renderHtml('./about.html', res);
                break;
            case '/contact':
                renderHtml('./contact.html', res);
                break;
            default:
                res.writeHead(404)    ;
                res.write('Page not found');
                res.end();
        }
        
    }
}