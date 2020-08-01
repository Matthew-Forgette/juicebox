// WEB SERVER (WEEK 2)

const PORT = 3000;
const express = require('express');
const server = express();

require('dotenv').config();

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(morgan('dev'));

server.use((req, res, next) => {
    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____Body Logger END_____>");
  
    next();
  });

const apiRouter = require('./api');
server.use('/api', apiRouter);

const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
});



//   server.use('/api', (req, res, next) => {
//     console.log("A request was made to /api");
//     next();
//   });
  
//   server.get('/api', (req, res, next) => {
//     console.log("A get request was made to /api");
//     res.send({ message: "success" });
//   });
// server.get('/api', (req, res, next) => {
//     console.log("A get request was made to /api");
//     res.send({ message: "success" });
//   });
  
//   server.use('/api', (req, res, next) => {
//     console.log("A request was made to /api");
//     next();
//   });