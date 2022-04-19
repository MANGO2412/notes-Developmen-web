let http = require("http")



http.createServer((req,res)=>{
     res.writeHead(200,{'content-Type':'text/plain'});

    res.end('hello world\n');
}).listen(3000);



console.log("server active");








