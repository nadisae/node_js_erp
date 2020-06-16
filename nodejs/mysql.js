var mysql      = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'erp_admin',
  password: 'sork1emd',
  database: 'erp'
   });

  connection.connect();
