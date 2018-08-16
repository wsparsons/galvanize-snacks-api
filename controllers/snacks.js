const { snack, review } = require('../models')

 
function index(req, res, next) {
	snack.index()
		.then(snacks => res.status(201).json({ data: snacks }))
		.catch(err => next(err))
}

function show(req, res, next) {
	let data
	snack.getSnackById(req.params.id)
		.then(found => data = found)
		.then(() => review.getSnackReviews(req.params.id))
		.then(reviews => data.reviews = reviews)
		.then(() => res.status(201).json({ data }))
		.catch(err => next(err))
}

function create(req, res, next) {
	snack.create(req.body)
		.then(snack => res.status(201).json({ data: snack }))    
		.catch(err => next(err))    
}

function update(req, res, next) {
	snack.getSnackById(req.params.id)
		.then(() => snack.update(req.params.id, req.body))
		.then(snack => res.status(200).json({ data: snack }))    
		.catch(err => next(err)) 
}

function destroy(req, res, next) {
  	snack.getSnackById(req.params.id)
	  	.then(() => snack.update(req.params.id, req.body))
		.then(snack => res.status(202).json({ data: snack }))    
		.catch(err => next(err)) 
}


module.exports = { index, show, create, update, destroy }