const express = require('express');
const todoRoute = require('./routes/todos');


const srv = express();
srv.set('view engine', 'hbs');   //To set certain data into your application

srv.use(express.json());
srv.use(express.urlencoded({extended:true}));

srv.set('views','views');
srv.use('/todos', todoRoute);

srv.listen(3456);
