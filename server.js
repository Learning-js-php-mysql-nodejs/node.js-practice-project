var http = require('http');

var myserver = http.createServer(function(req,res){
    if(res.error)
     console.log("sorry connection failed");
    else 
    console.log("connection succesful");

});

myserver.listen(2000);
console.log("server is running");
