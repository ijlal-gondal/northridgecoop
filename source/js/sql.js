
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '',
  database: 'database'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});


connection.query('SELECT * FROM table', (error, results) => {
    if (error) throw error;
  
    console.log(results);
  });

  
  connection.end();
