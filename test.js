const express = require('express')
const session = require('express-session')
const singleSession = require('./index')

const app = express()

app.use(singleSession())

app.use(session({
  secret: '' + Math.random(),
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
  }
}))

app.get('/login', (req, res) => {
  if (req.session.count > 0) {
    req.session.count++
  } else {
    req.session.count = 1
  }
  res.end('count:' + req.session.count)
})

app.get('/logout', (req, res) => {
  res.end('count:' + (req.session.count = 0))
})

app.listen(3000)
