const express = require('express');
const router = express.Router();
const { startGame } = require('../controllers/GameController');

router.post('/deal', startGame);

module.exports = router;
