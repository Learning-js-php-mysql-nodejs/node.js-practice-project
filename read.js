var fs = require('fs'); // is a core module
fs.readFile('myfist.txt',function(err,content){

    if(err) throw err;

    console.log(content);
});