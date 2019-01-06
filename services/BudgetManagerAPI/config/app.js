const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const consign = require('consign')
const cors = require('cors')
const passport = require('passport')
const passportConfig = require('./passport')(passport)
const jwt = require('jsonwebtoken')
const config = require('./index.js')
const database = require('./database')(mongoose, config);

// using packages express middleware
app.use(express.static('.'));
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());

app.set('budgetsecret', config.secret)