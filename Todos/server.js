const express = require('express');
const srv = express();

const todoRoute = require('./routes/todos');

srv.use(express.json());
srv.use(express.urlencoded({extended: true}));

srv.use('/todos',todoRoute);
srv.use((req,res)=> res.send('<h2 align="center"> 404 Page Not Found</h2>'));
srv.listen(2121);
