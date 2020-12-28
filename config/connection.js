var mysql = require("mysql");
var connection;

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "w!nd0wl!cker",
    database: "hamburgers_db"
});

connection.connect(function(err) {
    if(err) {
        console.error("Problem: " + err.stack);
        return;
    }
    console.log("Success! Connected as " + connection.threadId);
});
module.exports = connection;