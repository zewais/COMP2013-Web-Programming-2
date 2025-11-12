export default function ContactCard({
  _id,
  name,
  contact,
  image,
  handleOnDelete,
  handleOnEdit,
}) {
  return (
    <div>
      <h3>{name}</h3>
      {image ? <img src={image} alt="" width="100px" /> : null}

      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.address}</p>
      <button onClick={() => handleOnDelete(_id)}>Delete</button>
      <button onClick={() => handleOnEdit(_id)}>Edit</button>
      <hr />
    </div>
  );
}
