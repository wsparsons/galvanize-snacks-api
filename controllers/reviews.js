const { snack, review } = require('../models')


function create(req, res, next) {
	snack.getSnackById(req.params.id)
		.then(found => {
			if (!found) throw new Error('snacknotfound')
			return review.create(req.params.id, req.body)
		})	
		.then(data => res.status(201).json({ data }))    
		.catch(err => next(err))    
}

function update(req, res, next) {
	review.update(req.params.id, req.params.revId, req.body)
		.then(reviews => res.status(200).json({ data: reviews }))    
		.catch(err => next(err)) 
}

function destroy(req, res, next) {
	review.destroy(req.params.id, req.params.revId)
		.then(reviews => res.status(202).json({ data: reviews }))    
		.catch(err => next(err)) 
}


module.exports = { create, update, destroy }