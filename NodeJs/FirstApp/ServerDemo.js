const http = require('http');

server = http.createServer((req,res)=>{
    //res.write("<h1>Hello Word from Node</h1>");
    if(req.url=="/"){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.write("<h2>Hello</h2>");
    }
    else if(req.url=="/student"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write("<h2>Student page</h2>");
    }
    else if(req.url=="/addmission"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write("<h2>Addmission page</h2>");
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain');
        res.write('invalid');
    }
    res.end();
});

server.listen(5000,()=>{
    console.log("Server Started at @ http//:localhost:5000....");
});