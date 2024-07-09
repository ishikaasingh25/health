const { db } = require('../config/firebaseConfig');

class UserModel {
  static async createUser(data) {
    try {
      // Ensure `data.uid` is a valid string
      if (!data.uid) {
        throw new Error('UID (documentPath) must be a non-empty string.');
      }

      const userRef = db.collection('users').doc(data.uid); // Correctly construct document path
      await userRef.set(data); // Set user data in Firestore document
      return data; // Return created user data
    } catch (error) {
      console.error('Error creating user:', error);
      throw error; // Throw error for handling in AuthService or controller
    }
  }

  static async getUser(uid) {
    const userRef = db.collection('users').doc(uid);
    const doc = await userRef.get();
    if (!doc.exists) {
      throw new Error('User not found');
    }
    return doc.data();
  }

  static async getUsersByRole(role) {
    const usersRef = db.collection('users').where('role', '==', role);
    const snapshot = await usersRef.get();
    if (snapshot.empty) {
      return [];
    }
    return snapshot.docs.map(doc => doc.data());
  }
}

module.exports = UserModel;
