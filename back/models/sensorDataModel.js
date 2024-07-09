const { db } = require('../config/firebaseConfig');

class SensorDataModel {
  static async addSensorData(data) {
    const dataRef = db.collection('sensorData').add(data);
    return data;
  }

  static async getSensorData(uid) {
    const dataRef = db.collection('sensorData').where('uid', '==', uid);
    const snapshot = await dataRef.get();
    if (snapshot.empty) {
      throw new Error('No sensor data found');
    }
    return snapshot.docs.map(doc => doc.data());
  }
}

module.exports = SensorDataModel;
