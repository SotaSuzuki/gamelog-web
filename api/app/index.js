const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello Hoge!')
})

app.listen(8081)
console.log('listening to port 8081')
