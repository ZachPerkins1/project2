const pool = require('./server.js');

const getVacations = (request, response) => {
    pool.query('SELECT * FROM vacations', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  } 

  const createVacation = (request, response) => {
    const { city, country, description, start_date, end_date, user_id } = request.body;
    pool.query(
      `INSERT INTO vacations (city, country, description, start_date, end_date, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [city, country, description, start_date, end_date, user_id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      }
    );
  };
  
  module.exports = {
    getVacations,
    createVacation
  }
  
