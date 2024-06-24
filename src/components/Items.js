import Item from "./Item";

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

export default function Items() {
   const contacts = initialContacts;

   return (
      <div className="items">
         {contacts.map((contact) => (
            <Item contactObj={contact} key={contact.id} />
         ))}
      </div>
   );
}
