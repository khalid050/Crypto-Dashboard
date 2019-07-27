const mongoose = require('mongoose')
const Schema = mongoose.Schema


const currencySchema = new Schema({
    currency: {
    }
})


const Currencies = mongoose.model('Currencies', currencySchema)


module.exports = Currencies