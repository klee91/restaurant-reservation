var bodyParser = require('body-parser');
var express = require("express");
var app = express();
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

var customers = [{
    routeName: "yoda",
    name: "Adam",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
}, {
    routeName: "darthmaul",
    name: "Kevin",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
}, {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
}];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/:customers?", function(req, res) {
    var chosen = req.params.customers;

    if (chosen) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].name === chosen) {
                console.log(chosen);
                // res.send(chosen);
                var content = $("h1");
                content.html(chosen);
            }
        }
    }

    return res.json(customers);
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});