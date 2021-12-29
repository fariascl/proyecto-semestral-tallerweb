'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var cors = require('cors')
app.use(cors())
app.options('*', cors());

var especialista_route = require('./routes/especialistaRoute');
var especialidad_route = require('./routes/especialistaRoute');

const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', especialista_route);
app.use('/api', especialidad_route);

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true, //this is the code I added that solved it all
    keepAlive: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4, // Use IPv4, skip trying IPv6
    useFindAndModify: false,
    useUnifiedTopology: true
}

mongoose.connect(`mongodb://localhost:27017/proyecto_semestral?security=false`, options)
.then(() => console.log('> Successfully connected to DB'))
  .catch(err => console.log(err))  

    app.listen(5000, () => {

        console.log("Esta corriendo en puerto 5000")
    })