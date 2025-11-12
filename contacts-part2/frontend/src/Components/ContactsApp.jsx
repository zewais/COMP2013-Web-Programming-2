import { useState, useEffect } from "react";
import axios from "axios";
import ContactsCardsContainer from "./ContactsCardsContainer";
import ContactForm from "./ContactForm";

export default function ContactsApp() {
  //States
  const [contactsData, setContactsData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    image: "",
  });
  const [postResponse, setPostResponse] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  //useEffect
  useEffect(() => {
    handleContactsDB();
  }, [postResponse]);

  //Handlers
  //GET Data from DB handler
  const handleContactsDB = async () => {
    try {
      const response = await axios.get("http://localhost:3000/contacts");
      // console.log(response);
      setContactsData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Handle the submission of data
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        handleOnUpdate(formData._id);
        setIsEditing(false);
        setFormData({ name: "", email: "", phone: "", address: "", image: "" });
      } else {
        await axios
          .post("http://localhost:3000/contacts", formData)
          .then((response) => {
            setPostResponse(response.data.message);
            console.log(response);
          })
          .then(() =>
            setFormData({
              name: "",
              email: "",
              address: "",
              phone: "",
              image: "",
            })
          );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //Handle the onChange event for the form
  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  //Handle to delete on contact by id
  const handleOnDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/contacts/${id}`
      );
      setPostResponse(response.data.message);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Handle the edition of one contact by its id
  const handleOnEdit = async (id) => {
    try {
      const contactToEdit = await axios.get(
        `http://localhost:3000/contacts/${id}`
      );
      console.log(contactToEdit);
      setFormData({
        name: contactToEdit.data.name,
        phone: contactToEdit.data.contact.phone,
        email: contactToEdit.data.contact.email,
        address: contactToEdit.data.contact.address,
        image: contactToEdit.data.image,
        _id: contactToEdit.data._id,
      });
      setIsEditing(true);
    } catch (error) {
      console.log(error);
    }
  };

  //Handle the updating of the DB
  const handleOnUpdate = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/contacts/${id}`,
        formData
      );
      setPostResponse(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  //Render
  return (
    <div>
      <ContactForm
        name={formData.name}
        email={formData.email}
        address={formData.address}
        phone={formData.phone}
        image={formData.image}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        isEditing={isEditing}
      />
      <p style={{ color: "green" }}>{postResponse}</p>
      <ContactsCardsContainer
        contacts={contactsData}
        handleOnDelete={handleOnDelete}
        handleOnEdit={handleOnEdit}
      />
    </div>
  );
}
