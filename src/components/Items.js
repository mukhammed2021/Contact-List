import Item from "./Item";

export default function Items({ contacts, onDeleteContact }) {
   return (
      <div className="items">
         {contacts.map((contact) => (
            <Item contactObj={contact} key={contact.id} onDeleteContact={onDeleteContact} />
         ))}
      </div>
   );
}
