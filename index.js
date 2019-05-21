//Modul
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routing
var all = require('./routes/all');

//Inisiasi
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/inventaris');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('views', path.join(__dirname, 'pages'))
app.set('view engine', 'hbs')

//Routes
app.use('/', all);

app.listen(port, function () {
    console.log("Berjalan di port" + port)
})