const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/Crypto-App-api'


const connection = mongoose.connect(connectionURL, {useNewUrlParser: true, useCreateIndex: true})


module.exports = connection