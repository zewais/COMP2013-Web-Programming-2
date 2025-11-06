import ContactCard from "./ContactCard";

export default function ContactsCardsContainer({ contacts }) {
  return (
    <div>
      {contacts.map((contactItem) => (
        <ContactCard key={contactItem._id} {...contactItem} />
      ))}
    </div>
  );
}
