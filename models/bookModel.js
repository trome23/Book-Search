const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const BookSchema = new Schema({
  authors: {
    type: String,
    
  },
  description: String,
  image: String,
  link: String,
  title: String
});

module.exports = Book = mongoose.model("Book", BookSchema);