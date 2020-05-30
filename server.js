var express = require("express");
var mongojs = require("mongojs");

var app = express();

app.use(express.static("public"));

var databaseUrl = "TrueCarsTest";
var collections = ["TestSet"];

var db = mongojs(databaseUrl, collections);

db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/", function(req, res) {
  res.send("Hello world");
});

app.get("/all", function(req, res) {
  db.TestSet.find({}, function(error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

app.get("/Make", function(req, res) {
  db.TestSet.find().sort({ Make: 1 }, function(error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});


app.get("/Mileage", function(req, res) {
  db.TestSet.find().sort({ Mileage: 1 }, function(error, found) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(found);
    }
  });
});

app.listen(3000, function() {
  console.log("App running on port 3000!");
});
