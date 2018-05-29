const express = require('express')
const router = express.Router()
const gameController = require('../controllers/gameController')

router.get('/:id', (req, res) => {
  gameController.show(req, res)
})

module.exports = router
