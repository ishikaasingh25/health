const express = require('express');
// const axios = require('axios');
const router = express.Router();
const authController = require('../controllers/authController');
// const CLIENT_ID = '23PFN7';
// const CLIENT_SECRET = 'ea9b36928448d0334c029e8577167441';
// const REDIRECT_URI = 'http://localhost:3000/auth/fitbit/callback';


router.post('/signup', authController.signup);
router.post('/login', authController.login);
// router.get('/fitbit', (req, res) => {
//   res.redirect(`https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=activity%20heartrate`);
// });

// router.get('/fitbit/callback', async (req, res) => {
//   const code = req.query.code;

//   try {
//     // Exchange code for access token
//     const tokenResponse = await axios.post('https://api.fitbit.com/oauth2/token', null, {
//       params: {
//         client_id: "23PFN7",
//         client_secret: ea9b36928448d0334c029e8577167441,
//         code,
//         grant_type: 'authorization_code',
//         redirect_uri: REDIRECT_URI
//       },
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//     });

//     const accessToken = tokenResponse.data.access_token;
//     // Store accessToken securely (e.g., in session or database) for subsequent API calls

//     res.redirect('/dashboard'); // Redirect to dashboard or wherever needed
//   } catch (error) {
//     console.error('Error exchanging code for token:', error);
//     res.status(500).send('Error exchanging code for token');
//   }
// });

module.exports = router;
