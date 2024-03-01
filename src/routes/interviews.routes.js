const express = require('express')
const router = express.Router()
const interviewsController = require('../controllers/interviews.controller');

// Retrieve all employees
router.get('/', interviewsController.findAll);

// Create a new employee
router.post('/', interviewsController.create);

// Retrieve a single employee with id
router.get('/:id', interviewsController.findById);



// Delete a employee with id
router.delete('/:id', interviewsController.delete);

module.exports = router