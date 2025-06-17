const express = require('express');
const router = express.Router();
const industryController = require('../controllers/industryController');

// Create a new industry
router.post('/', industryController.createIndustry);

// Get all industries
router.get('/', industryController.getAllIndustries);

// Get a single industry by ID
router.get('/:id', industryController.getIndustryById);

// Update an industry by ID
router.put('/:id', industryController.updateIndustry);

// Delete an industry by ID
router.delete('/:id', industryController.deleteIndustry);

module.exports = router;
