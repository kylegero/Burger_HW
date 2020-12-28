var mysql = require("mysql");
var connection;

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "w!nd0wl!cker",
    database: "hamburgers_db"
});






module.exports = connection;