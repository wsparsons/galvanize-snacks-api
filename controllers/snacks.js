const { Snack } = require('../models')

 
function index(req, res, next) {
  Snack.index()
    .then(snacks => res.status(201).json({ data: snacks }))
    .catch(err => next(err))
}

function show(req, res, next) {
  Snack.show(req.params.id)
    .then(snack => res.status(201).json({ data: snack }))
    .catch(err => next(err))
}

function create(req, res, next) {
  Snack.create(req.body)
    .then(snack => res.status(201).json({ data: snack }))    
    .catch(err => next(err))    
}

function update(req, res, next) {
  Snack.update(req.params.id, req.body)
    .then(snack => res.status(200).json({ data: snack }))    
    .catch(err => next(err)) 
}

function destroy(req, res, next) {
  Snack.destroy(req.params.id)
    .then(snack => res.status(202).json({ data: snack }))    
    .catch(err => next(err)) 
}


module.exports = { index, show, create, update, destroy }