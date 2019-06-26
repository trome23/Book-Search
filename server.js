// Our newest addition to the dependency family
var mongoose = require("mongoose");

// Requiring the `Example` model for accessing the `examples` collection
var BookModel = require("./model/bookModel");
var express = require("express");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });

  app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });