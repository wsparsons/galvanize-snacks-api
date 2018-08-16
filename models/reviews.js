const knex = require('../db/knex')


function getSnackReviews(id) {
    return knex('reviews')
		.where({ 'snack_id': id })
}

function getReviewById(id) {
	return knex('reviews')
		.where({ id })
		.first()
}

function create(snack_id, { title, text, rating }) {
	if(!title|| typeof title !== 'string') throw new Error('titleRequired')
	if(!text || typeof text !== 'string') throw new Error('textRequired')
	if(!rating) throw new Error('ratingRequired')
	return knex('reviews')
		.insert({ snack_id, title, text, rating })
		.returning(['*'])
}

function update(snack_id, id, body) {
	if (!body.title && !body.text && !body.rating) throw new Error('aReviewFieldRequired')
	return knex('reviews')
		.where({ id })
		.update( body )
		.returning(['*'])  
}

function destroy() {

}


module.exports = { getSnackReviews, getReviewById, create, update, destroy }