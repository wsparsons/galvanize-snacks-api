const express = require('express')
const cors = require('cors')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
require('dotenv').config()

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(bodyParser.json())

const processErrorMessage = require('./models/errors')

const { SnacksRoutes } = require('./routes')
app.use('/snacks', SnacksRoutes)

app.use((req, res) => {
  const status = 404;
  const message = `Could not ${req.method} ${req.path}`;
  res.status(status).json({ status, message });
})

app.use((err, req, res, next) => {
  err = processErrorMessage(err)
  const status = err.status || 500
  const message = err.message || 'Internal Error.'
  res.status(status).json({ message })
})

app.listen(port, () => console.log(`On port: ${port}`))

module.exports = app
