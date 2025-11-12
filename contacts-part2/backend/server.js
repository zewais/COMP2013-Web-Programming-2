//Intializing Server
const express = require("express");
const server = express();
const port = 3000;
const mongoose = require("mongoose"); //import mongoose
require("dotenv").config(); //import dotenv
const { DB_URI } = process.env; //to grab the same variable from the dotenv file
const cors = require("cors"); //For disabling default browser security
const Contact = require("./models/contact"); //importing the model schema

//Middleware
server.use(express.json()); //to ensure data is trasmitted as json
server.use(express.urlencoded({ extended: true })); //to ensure data is encoded and decoded while transmission
server.use(cors());

//Database connection and server listening
mongoose
  .connect(DB_URI)
  .then(() => {
    server.listen(port, () => {
      console.log(`Database is connected\nServer is listening on ${port}`);
    });
  })
  .catch((error) => console.log(error.message));

//Routes
//Root route
server.get("/", (request, response) => {
  response.send("Server is Live!");
});

//To GET all the data from contacts collection
server.get("/contacts", async (request, response) => {
  try {
    const contacts = await Contact.find();
    response.send(contacts);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//To POST a new contact to DB
server.post("/contacts", async (request, response) => {
  const { name, email, address, phone, image } = request.body;
  const newContact = new Contact({
    name,
    contact: {
      email,
      address,
      phone,
    },
    image,
  });
  try {
    await newContact.save();
    response.status(200).send({
      message: `Contact is added successfully! ${crypto.randomUUID()}`,
    });
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
});

//To DELETE a contact from DB by it's id
server.delete("/contacts/:id", async (request, response) => {
  const { id } = request.params;
  try {
    await Contact.findByIdAndDelete(id);
    response.send({ message: `Contact is deleted with the id ${id}` });
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
});

//To GET one contact by id
server.get("/contacts/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const contactToEdit = await Contact.findById(id);
    response.send(contactToEdit);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

server.patch("/contacts/:id", async (request, response) => {
  const { id } = request.params;
  const { name, email, address, phone, image } = request.body;
  try {
    await Contact.findByIdAndUpdate(id, {
      name,
      contact: { email, address, phone },
      image,
    });
    response.send({ message: `Contact is updated with the id ${id}` });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});
