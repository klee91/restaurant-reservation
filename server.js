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
    customerName: "Adam",
    phoneNumber: "Jedi Master",
    customerEmail: 900,
    customerID: 2000
}, {
    routeName: "darthmaul",
    customerName: "Kevin",
    phoneNumber: "Sith Lord",
    customerEmail: 200,
    customerID: 1200
}, {
    routeName: "obiwankenobi",
    customerName: "Obi Wan Kenobi",
    phoneNumber: "Jedi Master",
    customerEmail: 55,
    customerID: 1350
}];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reserve", function(req,res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/:customers?", function(req, res) {
    var chosen = req.params.customers;

    if (chosen) {
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].customerName === chosen) {

                array.push(customers[i]);
                res.json(array);

                $('#stats-one').html(array);

                console.log("request was made!");
                return res.json(customers[i].customerName);
            }
        }
    }

    return res.json(customers);
});

//add new customer
app.post("/api/new", function(req, res) {
  var newcustomer = req.body;
  newcustomer.routeName = newcustomer.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcustomer);

  customers.push(newcustomer);

  res.json(newcustomer);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});