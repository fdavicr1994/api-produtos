var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "teste"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectado ao Banco de Dados!");
});

module.exports = con;
