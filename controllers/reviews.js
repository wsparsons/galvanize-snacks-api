const { reviews } = require('../models')


function show(req, res, next) {
  reviews.show(req.params.id)
    .then(reviews => res.status(201).json({ data: reviews }))
    .catch(err => next(err))
}

function create(req, res, next) {
  reviews.create(req.body)
    .then(reviews => res.status(201).json({ data: reviews }))    
    .catch(err => next(err))    
}

function update(req, res, next) {
  reviews.update(req.params.id, req.body)
    .then(reviews => res.status(200).json({ data: reviews }))    
    .catch(err => next(err)) 
}

function destroy(req, res, next) {
  reviews.destroy(req.params.id)
    .then(reviews => res.status(202).json({ data: reviews }))    
    .catch(err => next(err)) 
}


module.exports = { index, show, create, update, destroy }