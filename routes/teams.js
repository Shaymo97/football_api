const express = require('express')
const router = express.Router()
const teams = require('../controllers/teams')

router.get('/', teams.index)
router.get('/:name', teams.show)

module.exports = router