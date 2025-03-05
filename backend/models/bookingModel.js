// /models/bookingModel.js

const db = require('../config/db');

const Booking = {
  createBooking: (serviceId, customerName, serviceDate) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO bookings (service_id, customer_name, service_date) VALUES (?, ?, ?)';
      db.query(query, [serviceId, customerName, serviceDate], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
};

module.exports = Booking;
