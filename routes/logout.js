const express = require('express');
const router = express.Router();
const logoutTokenController = require('../controllers/logoutTokenController');

router.get('/', logoutTokenController.handleLogout);

module.exports = router;