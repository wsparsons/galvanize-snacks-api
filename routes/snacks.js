const express = require('express')
const router = express.Router()
const { snacksController, reviewsController } = require('../controllers')


router.get('/', snacksController.index) 

router.get('/:id', snacksController.show)

router.post('/', snacksController.create)

router.post('/:id/reviews', reviewsController.create)

router.patch('/:id', snacksController.update)

router.patch('/:id/reviews/:revId', reviewsController.update)

router.delete('/:id', snacksController.destroy)

router.delete('/:id/reviews/:revId', reviewsController.destroy)


module.exports = router