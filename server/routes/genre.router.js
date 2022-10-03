const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = `SELECT * FROM genres`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error: Get all genres', error);
      alert('Something went wrong!')
    })
  res.sendStatus(500)
});

module.exports = router;