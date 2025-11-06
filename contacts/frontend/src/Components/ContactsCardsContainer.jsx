import ContactCard from "./ContactCard";

export default function ContactsCardsContainer({ contacts, handleOnDelete }) {
  return (
    <div>
      {contacts.map((contactItem) => (
        <ContactCard
          key={contactItem._id}
          {...contactItem}
          handleOnDelete={handleOnDelete}
        />
      ))}
    </div>
  );
}
