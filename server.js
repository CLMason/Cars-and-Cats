const http = require("http");
const fs = require("fs");
const port = 5000; 

const app = http.createServer(function(req, res) {
    console.log(`The request is: ${req.url}`);
    if(req.url ==="/cars"){
        fs.readFile('views/index.html', 'utf8', function(errors, contents){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
        });
    }
    else if(req.url==="/images/car1.jpeg"){
        let contents =fs.readFileSync(__dirname + "/images/car1.jpeg");
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
    }
    else if(req.url==="/cats"){
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
        });
    }
    else if(req.url==="/images/cat.jpg"){
        let contents =fs.readFileSync(__dirname + "/images/cat.jpg");
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(`<h1>Not Found!</h1><hr><p>Cannot find<pre>${req.url}</pre></p>`);
        res.end();
    }
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
