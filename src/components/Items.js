import Item from "./Item";

export default function Items({ contacts, onDeleteContact, onEditContact, editContact, onContact }) {
   return (
      <div className="items">
         {contacts.map((contact) => (
            <Item
               contactObj={contact}
               key={contact.id}
               onDeleteContact={onDeleteContact}
               onEditContact={onEditContact}
               editContact={editContact}
               onContact={onContact}
            />
         ))}
      </div>
   );
}
