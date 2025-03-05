// /routes/serviceRoutes.js

const express = require('express');
const router = express.Router();
const Service = require('../models/serviceModel');

// Get all services
router.get('/services', async (req, res) => {
  try {
    const services = await Service.getAllServices();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

module.exports = router;
