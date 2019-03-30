const mysql = require('mysql2');

const connection= mysql.createConnection({ //Synchronous Task
    host: 'localhost',
    database: 'mytestdb',
    user: 'knifeparty',
    password: 'nikhil'
});

const insert = {
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4]
};

connection.query(
    `INSERT INTO persons(name, age, city) VALUES(
        '${insert.name}',
        ${insert.age},
        '${insert.city}'
        )`,
    
    function (err,results) {
        if (err){
            console.error(err)
        } else{
            console.log("Inserted Successfully")
        }
        connection.close();
    }
    
);
