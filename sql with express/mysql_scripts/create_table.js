const mysql = require('mysql2');

const connection= mysql.createConnection({ //Synchronous Task
    host: 'localhost',
    database: 'mytestdb',
    user: 'knifeparty',
    password: 'nikhil'
});

connection.query(
    `CREATE TABLE IF NOT EXISTS persons(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL,
    city VARCHAR(30)
    )`,
    function(err,results) {   //Callback Function
        if (err){
            console.error(err);
        } else{
            console.log('Table Created Successfully');
        }
        connection.close(); //Close Connection To prevent Memory-Leak
    }
);
