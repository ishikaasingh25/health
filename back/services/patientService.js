const SensorDataModel = require('../models/sensorDataModel');

class PatientService {
  static async getData(patientId) {
    const data = await SensorDataModel.getSensorData(patientId);
    return data;
  }
}

module.exports = PatientService;
