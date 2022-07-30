var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
  
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ------ Configure swagger docs ------
var options = {
    swaggerDefinition: {
      info: {
        title: "Swagger ExpressJs Example API",
        version: "1.0.0",
        description: "API documentation for Swagger ExpressJs Example App",
      },
    },
    apis: [path.join(__dirname, "/routes/*.js")],
  };
var swaggerSpecs = swaggerJsdoc(options);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

module.exports = app;


// const express = require('express')
// const app = express()
// const router = express.Router()

// // a middleware function with no mount path. This code is executed for every request to the router
// router.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })

// // a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
// router.use('/user/:id', (req, res, next) => {
//   console.log('Request URL:', req.originalUrl)
//   next()
// }, (req, res, next) => {
//   console.log('Request Type:', req.method)
//   next()
// })

// // a middleware sub-stack that handles GET requests to the /user/:id path
// router.get('/user/:id', (req, res, next) => {
//   // if the user ID is 0, skip to the next router
//   if (req.params.id === '0') next('route')
//   // otherwise pass control to the next middleware function in this stack
//   else next()
// }, (req, res, next) => {
//   // render a regular page
//   res.render('regular')
// })

// // handler for the /user/:id path, which renders a special page
// router.get('/user/:id', (req, res, next) => {
//   console.log(req.params.id)
//   res.render('special')
// })

// // mount the router on the app
// app.use('/', router)