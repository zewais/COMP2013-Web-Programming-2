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

  //useEffect
  useEffect(() => {
    handleContactsDB();
  }, [postResponse]);

  //Handlers
  //GET Data from DB handler
  const handleContactsDB = async () => {
    try {
      const response = await axios.get("http://localhost:3000/contacts");
      //   console.log(response);
      setContactsData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Handle the submission of data
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3000/contacts", formData)
        .then((response) => setPostResponse(response.data.message))
        .then(() =>
          setFormData({
            name: "",
            email: "",
            address: "",
            phone: "",
            image: "",
          })
        );
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

  //Handle the deletion of a contact
  const handleOnDelete = async (id) => {
    // console.log(id);
    try {
      await axios
        .delete(`http://localhost:3000/contacts/${id}`)
        .then((response) => setPostResponse(response.data.message));
    } catch (error) {
      console.log(error.msg);
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
      />
      <p style={{ color: "green" }}>{postResponse}</p>
      <ContactsCardsContainer
        contacts={contactsData}
        handleOnDelete={handleOnDelete}
      />
    </div>
  );
}
