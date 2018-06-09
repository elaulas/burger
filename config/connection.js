var mysql = require('mysql');
var connection; 

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // MYSQL connection
  connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

};
connection.connect(function(err){
    if(err)throw err;

});

module.exports = connection;