const express = require('express');
const srv = express();

const teacherRoute = require('./routes/teachers');
const studentRoute = require('./routes/students');

srv.use(express.json()); //To allow JSON encodings
srv.use(express.urlencoded({extended:true})); //To allow Url-encodings

srv.use('/students' , studentRoute);
srv.use('/teachers' , teacherRoute);

srv.listen(2233);
