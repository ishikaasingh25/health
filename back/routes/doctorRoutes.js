const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware.verifyToken);
router.get('/patients', doctorController.getPatients);
router.get('/patients/:id', doctorController.getPatientData);

module.exports = router;
