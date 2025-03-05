// /routes/bookingRoutes.js

const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModel');

// Create a booking
router.post('/book', async (req, res) => {
  const { serviceId, customerName, serviceDate } = req.body;
  try {
    const result = await Booking.createBooking(serviceId, customerName, serviceDate);
    res.status(201).json({ message: 'Booking created successfully', bookingId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

module.exports = router;
