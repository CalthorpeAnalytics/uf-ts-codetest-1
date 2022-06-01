/**
 * Create a simple express server to serve your web-app a list
 * of cities from the cities.json file included.
 */

const express = require('express')
const app = express()
const port = 8000

var cities = require('./cities.json')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/cities', (req, res, next) => {
  res.json(cities)
})