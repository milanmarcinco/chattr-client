import { useMemo } from "react";
import Contact from "./Contact";
import useStore from "../../store";
import styles from "./ContactsList.module.scss";

const ContactsList = () => {
  const contacts = useStore((state) => state.contacts);
  const selectedContactId = useStore((state) => state.selectedContactId);
  const selectContact = useStore((state) => state.selectContact);
  const searchTerm = useStore((state) => state.searchTerm);

  const contactsToShow = useMemo(
    () =>
      searchTerm
        ? contacts.filter(
            (contact) =>
              contact.firstName.toLocaleLowerCase().includes(searchTerm) ||
              contact.lastName.toLocaleLowerCase().includes(searchTerm)
          )
        : contacts,
    [searchTerm, contacts]
  );

  return (
    <div>
      <p className={styles.title}>recent contacts</p>

      <div className={styles.contacts}>
        {contactsToShow.map((contact) => (
          <Contact
            contact={contact}
            handleClick={selectContact}
            selected={selectedContactId === contact.id}
            highlightTerm={searchTerm}
            key={contact.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsList;
