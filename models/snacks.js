const knex = require('../db/knex')


function index() {
	return knex('snacks')
}

function getSnackById(id) {
	return knex('snacks')
		.where({ id })
		.first()
		.then(snack => {
			if (!snack) throw new Error('snacknotfound')
			return snack
		})
}

function create({ name, description, price, img, is_perishable }){
	if(!name|| typeof name !== 'string') throw new Error('snackNameWrong')
	if(!description || typeof description !== 'string') throw new Error('snackDescriptionWrong')
	if(!price) throw new Error('snackPriceWrong')
	if(!img || typeof img !== 'string') throw new Error('snackImgWrong')
	if(!is_perishable || typeof is_perishable !== 'boolean' ) throw new Error('snackPerishableWrong')
	return knex('snacks')
		.insert({ name, description, price, img, is_perishable })
		.returning(['*'])
}

function update(id, body) {
	if (!body.name && !body.description && !body.price && !body.img && !body.is_perishable) throw new Error('aFieldRequired')
	return knex('snacks')
		.where({ id })
		.update( body )
		.returning(['*'])   
}

function destroy(id) {
	return knex('snacks')
		.where({ id })
		.del()
		.returning(['*'])
}


module.exports = { index, create, update, destroy, getSnackById } 