
var mongoose = require("mongoose");
var express = require("express")
var bodyParser = require("body-parser")

var BookModel = require("./model/bookModel");


var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure middleware
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose
  .connect("mongodb://localhost/googlebooks", { useNewUrlParser: true })
  .then(() => console.log(`MongoDB Connected...`))
  .catch(err=>console.log(err))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));