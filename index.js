require('dotenv').config()
const express = require('express')  //express object created
const app = express()              //create variable app. app will contain all the function in express
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('shivajiTwitter.com')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

