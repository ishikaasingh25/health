const SensorDataModel = require('../models/sensorDataModel');

class SensorDataService {
  static async receiveData(data) {
    const sensorData = await SensorDataModel.addSensorData(data);
    return sensorData;
  }
}

module.exports = SensorDataService;
