var fs = require('fs');
fs.appendFile('create_next.txt',"and i am from bhopal ", function(err){

    if(err){
        console.log(err);
    }else{
        console.log("file update");
    }
});