const Industry = require('../models/Industry');

// Create a new industry
exports.createIndustry = async (req, res) => {
  try {
    const newIndustry = new Industry(req.body);
    const savedIndustry = await newIndustry.save();
    res.status(201).json(savedIndustry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all industries
exports.getAllIndustries = async (req, res) => {
  try {
    const industries = await Industry.find();
    res.json(industries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single industry by ID
exports.getIndustryById = async (req, res) => {
  try {
    const industry = await Industry.findById(req.params.id);
    if (!industry) {
      return res.status(404).json({ message: 'Industry not found' });
    }
    res.json(industry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an industry by ID
exports.updateIndustry = async (req, res) => {
  try {
    const updatedIndustry = await Industry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedIndustry) {
      return res.status(404).json({ message: 'Industry not found' });
    }
    res.json(updatedIndustry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an industry by ID
exports.deleteIndustry = async (req, res) => {
  try {
    const deletedIndustry = await Industry.findByIdAndDelete(req.params.id);
    if (!deletedIndustry) {
      return res.status(404).json({ message: 'Industry not found' });
    }
    res.json({ message: 'Industry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
