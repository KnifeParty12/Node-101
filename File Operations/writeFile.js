const fs = require('fs'); //File System library in Nodejs

fs.writeFile(__dirname + '/myfile.txt', "some data", function (err) {
    if (err) throw err;

    console.log("File was Written")
});
/*-------We have used __dirname (refers to the directory inside which the "writefile.js" is) because we want to create
 --------the new file within our existing folder only
* -------otherwise the file will be created at the path mentioned in the TERMINAL*/
