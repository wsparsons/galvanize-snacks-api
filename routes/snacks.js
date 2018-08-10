const express = require('express')
const router = express.Router()
const { SnacksController } = require('../controllers')


router.get('/:id', SnacksController.viewItem)

router.get('/', SnacksController.viewAllCartItems)

router.post('/', SnacksController.addToCart)

router.patch('/:id', SnacksController.update)

router.delete('/', SnacksController.removeFromCart)


module.exports = router
