const patientService = require('../services/patientService');

exports.getData = async (req, res) => {
  try {
    const data = await patientService.getData(req.user.uid);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
