const express = require('express')
const router = express.Router()
const gameController = require('../controllers/gameController')

router.get('/:id', (req, res) => {
  gameController.game(req, res)
})

module.exports = router
