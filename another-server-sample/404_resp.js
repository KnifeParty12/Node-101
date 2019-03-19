const express = require('express');
const server = express();

server.get('/a', (req, res)=> res.send("AAAAA"));
server.get('/b', (req, res)=> res.send("BBBBB"));

server.use((req, res) => res.send("<h2> 404 not found</h2>"))
server.listen(2543);

/*----404 Middleware(Handler)-------*/
/*---For Global middlewares that can handle any kind of requests we gotta use
* --- server.use()*/
