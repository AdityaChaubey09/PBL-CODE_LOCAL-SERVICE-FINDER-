// /models/serviceModel.js

const db = require('../config/db');

const Service = {
  getAllServices: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM services', (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
};

module.exports = Service;
