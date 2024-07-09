const express = require('express');
const router = express.Router();
const sensorDataController = require('../controllers/sensorDataController');

router.post('/receive', sensorDataController.receiveData);

module.exports = router;
