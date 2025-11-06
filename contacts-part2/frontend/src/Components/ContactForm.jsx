export default function ContactForm({
  name,
  email,
  address,
  phone,
  image,
  handleOnSubmit,
  handleOnChange,
}) {
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleOnChange}
          placeholder="Enter name"
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email"
        />
        <br />
        <label htmlFor="phone">Phone: </label>
        <input
          type="phone"
          name="phone"
          id="phone"
          value={phone}
          onChange={handleOnChange}
          placeholder="Enter phone"
        />
        <br />
        <label htmlFor="address">Address: </label>
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={handleOnChange}
          placeholder="Enter address"
        />
        <br />
        <label htmlFor="image">Image: </label>
        <input
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={handleOnChange}
          placeholder="Enter image URL"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
