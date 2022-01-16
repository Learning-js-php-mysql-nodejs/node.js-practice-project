var fs = require('fs');

fs.unlink('myfist.txt',function(){

    console.log("file deleted");
});