const express = require('express')
const router = express.Router()
const { SnacksController, ReviewsController } = require('../controllers')


router.get('/', SnacksController.index) 

router.get('/:id', SnacksController.show)

router.post('/', SnacksController.create)

router.patch('/:id', SnacksController.update)

router.delete('/:id', SnacksController.destroy)


module.exports = router
