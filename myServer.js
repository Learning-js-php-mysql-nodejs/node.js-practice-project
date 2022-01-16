var http = require("http"); // use http module

var server = http.createServer(function(req,res){
   
res.writeHead(200,{'content-type':'text/html'});  //set response header

res.write('<html><body>hello world</body></html>'); //content set in response
 
res.end();
    
});

server.listen(5000);
console.log("server start");