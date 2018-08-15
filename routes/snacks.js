const express = require('express')
const router = express.Router()
const { snacksController, reviewsController } = require('../controllers')


router.get('/', snacksController.index) 

router.get('/:id', snacksController.show)

router.post('/', snacksController.create)

router.patch('/:id', snacksController.update)

router.delete('/:id', snacksController.destroy)


module.exports = router
