import Item from "./Item";

export default function Items({ contacts }) {
   return (
      <div className="items">
         {contacts.map((contact) => (
            <Item contactObj={contact} key={contact.id} />
         ))}
      </div>
   );
}
