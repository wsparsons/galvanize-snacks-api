const { snack, review } = require('../models')

 
function index(req, res, next) {
	snack.index()
		.then(snacks => {
			let promises = snacks.map( async (snack) => {
				let reviews = await review.getSnackReviews(snack.id)
				snack.reviews = reviews
				return snack
			})
			return Promise.all(promises)
		})
		.then(data => res.status(201).json({ data }))
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
		.then(data => res.status(201).json({ data }))    
		.catch(err => next(err))    
}

function update(req, res, next) {
	snack.getSnackById(req.params.id)
		.then(() => snack.update(req.params.id, req.body))
		.then(data => res.status(200).json({ data }))    
		.catch(err => next(err)) 
}

function destroy(req, res, next) {
  	snack.getSnackById(req.params.id)
	  	.then(() => snack.update(req.params.id, req.body))
		.then(data => res.status(202).json({ data }))    
		.catch(err => next(err)) 
}


module.exports = { index, show, create, update, destroy }