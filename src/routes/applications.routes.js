const express = require('express')
const router = express.Router()
const ApplicationController = require('../controllers/applications.controller');

// Retrieve all employees
router.get('/', ApplicationController.findAll);

// Create a new employee
router.post('/', ApplicationController.create);

// Retrieve a single employee with id
router.get('/:id', ApplicationController.findById);

// // Update a employee with id
// router.put('/:id', ApplicationController.update);

// Delete a employee with id
router.delete('/:id', ApplicationController.delete);

module.exports = router