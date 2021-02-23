const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()
// connect to DB
module.exports = function connetcDB () {
  mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
    console.log('Connected to db')
  )
  mongoose.set('useFindAndModify', false)
}
