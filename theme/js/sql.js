const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'database'
});

connection.connect();


connection.query('SELECT * FROM table', (error, results) => {
    if (error) throw error;
  
    console.log(results);
  });

  
  connection.end();
