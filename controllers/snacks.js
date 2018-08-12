const { Snack } = require('../models')


function index(req, res, next) {
  Snack.index()
    .then(snacks => res.status(201).json({ items }))
    .catch(err => next(err))
}


module.exports = { index }