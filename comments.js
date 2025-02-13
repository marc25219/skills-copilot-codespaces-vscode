// Create web server
// npm install express
const express = require('express');
const app = express();

// npm install body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// npm install cors
const cors = require('cors');
app.use(cors());

// npm install mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');

