const mongoose = require("mongoose");
const express = require("express")
const bodyParser = require("body-parser")

const books = require("./routes/api/books");


const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

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

//Use Routes
app.use('/api/books/', books)  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));