const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasks');

router.post('/create', taskController.create);
router.get('/list', taskController.list);

module.exports = router;