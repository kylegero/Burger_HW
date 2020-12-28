var orm = require("../config/orm.js");
var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insertOne: function (cheese, callback) {
        orm.insertOne("burgers", "burger_name", cheese, function (buns){
            console.log("burgerJS cheese: ", cheese, "buns: ", buns);
            callback(buns);
        });
    },
    updateOne: function(colVal, id, callback) {
        orm.updateOne(colVal, id, function(res) {
            callback(res);
        })
    }
}
module.exports = burger;