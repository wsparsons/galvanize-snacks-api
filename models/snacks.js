const knex = require('../db/knex')


function index() {
  return knex('snacks')
}


module.exports = { index }