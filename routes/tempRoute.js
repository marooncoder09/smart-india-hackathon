const express = require('express');
const router = express.Router();
// API's for temp
const {landingPage, getTemp, pushTemp } = require('../controllers/tempController');



router.route('/landing').get(landingPage);
router.route('/getTempData').get(getTemp);
router.route('/pushTempData').post(pushTemp);


module.exports = router;