const knex = require('../db/knex')


function getSnackReviews(id) {
    return knex('reviews')
		.where({ 'snack_id': id })
}

function create(id, { title, text, rating }) {
	if(!title|| typeof title !== 'string') throw new Error('titleRequired')
	if(!text || typeof text !== 'string') throw new Error('textRequired')
	if(!rating) throw new Error('ratingRequired')
	return knex('reviews')
		.insert({ id, title, text, rating })
		.returning(['*'])
}

function update() {

}

function destroy() {

}


module.exports = { getSnackReviews, create, update, destroy }