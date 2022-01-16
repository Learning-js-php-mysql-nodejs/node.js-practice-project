var fs = require('fs'); //file create
var content = "first of all my name is virendra uikey";

fs.writeFile('create_next.txt',content, function(err){

    if(err){
        console.log(err);
    }else{
        console.log("file is create");
    }
});
