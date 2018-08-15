const knex = require('../db/knex')


function getSnackReviews(id) {
    return knex('reviews')
		.where({ 'snack_id': id })
}


module.exports = { getSnackReviews }