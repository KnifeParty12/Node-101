const fs = require('fs'); //File System library in Nodejs

fs.readFile(__dirname + '/myfile.txt', function (err,data) {
    if(err) throw err;

    console.log(data.toString())
});
