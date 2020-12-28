var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controllers.js/");
var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")



app.use(routes);
app.listen(PORT, function(){
    console.log("Good job bud. Listening on Port: " + PORT);
});