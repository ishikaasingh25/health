const sensorDataService = require('../services/sensorDataService');

exports.receiveData = async (req, res) => {
  try {
    const data = await sensorDataService.receiveData(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
