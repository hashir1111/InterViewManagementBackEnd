const express = require('express')
const router = express.Router()
const PositionsController = require('../controllers/positions.controller');

// Retrieve all employees
router.get('/', PositionsController.findAll);

// Create a new employee
router.post('/', PositionsController.create);

// Retrieve a single employee with id
router.get('/:id', PositionsController.findById);



// Delete a employee with id
router.delete('/:id', PositionsController.delete);

module.exports = router