'use strict'
const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const mongoose   = require('mongoose')
const config     = require('./config/config')
const app        = express()

//Express Use
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use('/api', routes())

app.get('/', function(req, res){
  res.send('hello app')
})

//Mongoose
mongoose.Promise = global.Promise
mongoose.connect(config.database)

//Terminal Port
app.listen(config.port)
console.log(`listening on port: ${config.port}`)

//Export
module.exports = app
