import "../style.css";
import Items from "./Items";
import AddContact from "./AddContact";
import { useState } from "react";
import EditContact from "./EditContact";

const initialContacts = [
   {
      id: 1,
      firstName: "Damir",
      lastName: "Latfullin",
      image: "https://i.pravatar.cc/48?u=118836",
      phone: "+77712345678",
   },
   {
      id: 2,
      firstName: "Aybek",
      lastName: "Rakhmet",
      image: "https://i.pravatar.cc/48?u=933372",
      phone: "+70712345678",
   },
   {
      id: 3,
      firstName: "Dimash",
      lastName: "Rakishev",
      image: "https://i.pravatar.cc/48?u=499476",
      phone: "+77012645690",
   },
];

export default function ContactList() {
   const [addContact, setAddContact] = useState(false);
   const [contacts, setContacts] = useState(initialContacts);
   const [contact, setContact] = useState({});

   function handleAddContact() {
      setAddContact((addContact) => !addContact);
   }
   function handleSaveContact(newContact) {
      setContacts((contacts) => [...contacts, newContact]);
   }
   function handleDeleteContact(id) {
      setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
   }
   function handleEditContact(contact) {
      setContact(contact);
   }

   return (
      <div
         className="contact-list"
         style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "1rem" }}
      >
         <div>
            <h1 className="title">contact list</h1>
            <Items
               contacts={contacts}
               onDeleteContact={handleDeleteContact}
               onEditContact={handleEditContact}
               onContact={setContact}
            />
            <button type="button" className="button add-btn" onClick={handleAddContact}>
               Add Contact
            </button>
         </div>
         <AddContact
            addContact={addContact}
            onSaveContact={handleSaveContact}
            cancel={handleAddContact}
            onAddContact={setAddContact}
         />
         <EditContact editContact={contact} />
      </div>
   );
}
