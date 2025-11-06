//Initializing the model schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create the contact model schema
const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  image: {
    type: String,
    required: false,
  },
});

//Package and export the model
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
