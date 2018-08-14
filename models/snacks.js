const knex = require('../db/knex')


function index() {
  return knex('snacks')
}

function getSnackById(id) {
  return knex('snacks')
    .where({ id })
    .first()
}

function show(id) {
  return getSnackById(id)
    .then(snack => {
      if (!snack) throw new Error('snacknotfound')
      return snack
    })
}

function create({ name, description, price, img, is_perishable }){
  if(!name) throw new Error('snackNameWrong')
  if(!description) throw new Error('snackDescriptionWrong')
  if(!price) throw new Error('snackPriceWrong')
  if(!img) throw new Error('snackImgWrong')
  if(!is_perishable) throw new Error('snackPerishableWrong')
  return knex('snacks')
    .insert({ name, description, price, img, is_perishable })
    .returning(['*'])
}

function update(id, body) {
  return getSnackById(id)
    .then(snack => {
      if (!snack) throw new Error('snacknotfound')
      return knex('snacks')
        .where({ id })
        .update(body)
        .returning(['*'])    
    })
}

function destroy() {
  
}


module.exports = { index, show, create, update, destroy } 