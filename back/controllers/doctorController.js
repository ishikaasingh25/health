const doctorService = require('../services/doctorService');

exports.getPatients = async (req, res) => {
  try {
    const patients = await doctorService.getPatients(req.user.uid);
    res.status(200).json(patients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPatientData = async (req, res) => {
  try {
    const patientData = await doctorService.getPatientData(req.params.id);
    res.status(200).json(patientData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
