var connection = require("./connection.js")
var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    insertOne: function(table, value, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);"
        connection.query(queryString, value, function(err, result){
            if (err) throw err;
            callback(result);
        });
    },
    updateOne: function(colVal, id, callback) {
        var queryString = "UPDATE hamburgers SET devoured='1' WHERE " + id + ";";
        connection.query(queryString, [id], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }

}

module.exports = orm;