const express = require('express')
const router = require('./routes')

const app = express()

const ORIGIN = 'http://localhost:8080'
const PORT = process.env.NODE_ENV === 'test'
  ? 8082
  : 8081

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': ORIGIN,
}

app.use((req, res, next) => {
  res.set(headers)
  next()
})

app.use(router)

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`)
})

module.exports.app = app
