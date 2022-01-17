var http = require('http'); 
var webserver = http.createServer(function(req,res){
    if(req.url == '/'){

        res.writeHead(200,{'content-type':'text/html'});
        res.write('<html><h2>welcome on my page</h2></html>');
        res.end();
    }
    else if(req.url == '/image'){

        res.writeHead(200,{'content-type':'text/html'});
        res.write('<html><h3>image not found</h3></html>');
        res.end();
    }
    else if(req.url == '/application'){
         
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<html><h4>application is here</h4></html>');
        res.end();

    }
    else if(require.url == '/aboutus'){

        res.writeHead(200,{'content-type':'text/html'});
        res.write('<html><h5>about us</h5></html>');
        res.end();
    }
    else 

       res.end("request is not found");
});

  webserver.listen(3000);